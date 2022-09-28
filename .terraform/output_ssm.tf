resource "aws_ssm_parameter" "web-app-s3" {
  name        = "/smalldomains/web-app/s3-deployment"
  type        = "String"
  value       = aws_s3_bucket.web-app.id
  description = "The ID of the S3 Bucket which hosts the static site for SmallDomains"
}

resource "aws_ssm_parameter" "web-app-cloudfront-distribution-id" {
  name        = "/smalldomains/web-app/cloudfront-distribution-id"
  type        = "String"
  value       = aws_cloudfront_distribution.web-app.id
  description = "The Distribution ID of the CloudFront Distribution fronting the static site for SmallDomains Web-App"
}

resource "aws_ssm_parameter" "web-app-cloudfront-domain-name" {
  name        = "/smalldomains/web-app/cloudfront-domain-name"
  type        = "String"
  value       = aws_cloudfront_distribution.web-app.domain_name
  description = "The DNS Domain Name of the CloudFront Distribution fronting the static site for SmallDomains Web-App"
}

resource "aws_ssm_parameter" "web-app-cloudfront-hosted-zone-id" {
  name        = "/smalldomains/web-app/cloudfront-hosted-zone-id"
  type        = "String"
  value       = aws_cloudfront_distribution.web-app.hosted_zone_id
  description = "The Hosted Zone ID of the CloudFront Distribution fronting the static site for SmallDomains Web-App"
}