resource "aws_s3_bucket" "web-app" {
  bucket_prefix = "smalldomains--weba-app-"

}

resource "aws_s3_bucket" "web-app-access-logs" {
  bucket_prefix = "smalldomains--weba-app-access-logs-"

}

resource "aws_s3_bucket_logging" "web-app-access-logs" {
  bucket = aws_s3_bucket.web-app.id

  target_bucket = aws_s3_bucket.web-app-access-logs.id
  target_prefix = "log/"
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

resource "aws_s3_bucket_policy" "web-app-access-logs" {
  bucket = aws_s3_bucket.web-app-access-logs.id
  policy = data.aws_iam_policy_document.web-app-access-logs.json
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
}