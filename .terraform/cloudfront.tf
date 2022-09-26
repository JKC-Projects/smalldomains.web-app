locals {
  web-app-s3-cloudfront-origin-id = "SmallDomainsWebAppS3Bucket"
}

resource "aws_cloudfront_distribution" "web-app" {
  enabled = false
  aliases = ["pages.${data.aws_ssm_parameter.smalldomains_apex_domain.value}"]
  comment = "CDN Solution for the SmallDomains Web App"

  origin {
    domain_name = aws_s3_bucket.web-app.bucket_regional_domain_name
    origin_id   = local.web-app-s3-cloudfront-origin-id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.web-app.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    target_origin_id       = local.web-app-s3-cloudfront-origin-id
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
  }

  viewer_certificate {
    acm_certificate_arn = module.other_tls_certs.tls_cert.arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # I'm being really cheap here: only using the cheapest edge locations (N. America/Europe)
  price_class = "PriceClass_100"

  default_root_object = "index.html"
  is_ipv6_enabled     = true
}

resource "aws_cloudfront_origin_access_identity" "web-app" {
  comment = "CloudFront Origin Access Identity used to limit access to S3 bucket to only CloudFront"
}