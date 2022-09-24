resource "aws_ssm_parameter" "web-app-s3" {
  name        = "/smalldomains/web-app/s3-deployment"
  type        = "String"
  value       = aws_s3_bucket.web-app.name
  description = "The name of the S3 bucket which hosts the static site for SmallDomains"
}