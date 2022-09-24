resource "aws_ssm_parameter" "web-app-s3" {
  name  = "/smalldomains/web-app/s3-deployment"
  type  = "String"
  value = aws_s3_bucket.web-app.arn
  description = "The ARN of the S3 bucket which hosts the static site for SmallDomains"
}