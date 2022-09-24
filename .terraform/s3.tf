locals {
  web_app_logs_s3_object_prefix = "log"
}

resource "aws_s3_bucket" "web-app" {
  bucket_prefix = "smalldomains--web-app-"

}

resource "aws_s3_bucket" "web-app-access-logs" {
  bucket_prefix = "smalldomains--web-app-access-logs-"
}

resource "aws_s3_bucket_logging" "web-app-access-logs" {
  bucket = aws_s3_bucket.web-app.id

  target_bucket = aws_s3_bucket.web-app-access-logs.id
  target_prefix = local.web_app_logs_s3_object_prefix
}

resource "aws_s3_bucket_website_configuration" "web-app" {
  bucket = aws_s3_bucket.web-app.bucket

  index_document {
    suffix = "index.html"
  }

  // TODO create a separate error page?
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "web-app" {
  bucket = aws_s3_bucket.web-app.id
  policy = data.aws_iam_policy_document.web-app.json
}

resource "aws_s3_bucket_policy" "web-app-access-logs" {
  bucket = aws_s3_bucket.web-app-access-logs.id
  policy = data.aws_iam_policy_document.web-app-access-logs.json
}

# Restrict Read access to S3 Web App Bucket to CloudFront CDN Only
data "aws_iam_policy_document" "web-app" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = ["${aws_s3_bucket.web-app.arn}/*"]
  }
}

data "aws_iam_policy_document" "web-app-access-logs" {
  statement {
    principals {
      type        = "AWS"
      identifiers = [data.aws_caller_identity.current.account_id]
    }

    actions = [
      "s3:GetObject",
      "s3:ListBucket",
    ]

    resources = [
      aws_s3_bucket.web-app-access-logs.arn,
      "${aws_s3_bucket.web-app-access-logs.arn}/*",
    ]
  }

  # Give the AWS Logging Service permission to write logs to S3 Access Logs Bucket
  # https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html
  statement {
    principals {
      type        = "Service"
      identifiers = ["logging.s3.amazonaws.com"]
    }

    actions = [
      "s3:PutObject"
    ]

    resources = [
      "${aws_s3_bucket.web-app-access-logs.arn}/${local.web_app_logs_s3_object_prefix}*",
    ]

    condition {
      test     = "ArnLike"
      variable = "aws:SourceArn"
      values   = ["${aws_s3_bucket.web-app.arn}"]
    }

    condition {
      test     = "StringEquals"
      variable = "aws:SourceAccount"
      values   = ["${data.aws_caller_identity.current.account_id}"]
    }
  }
}