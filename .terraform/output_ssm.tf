resource "aws_ssm_parameter" "web-app-cloudfront" {
  name        = "/smalldomains/web-app/cloudfront-domain-name"
  type        = "String"
  value       = aws_cloudfront_distribution.web-app.domain_name
  description = "The DNS Domain Name of the CloudFront Distribution fronting the static site for SmallDomains Web-App"
}