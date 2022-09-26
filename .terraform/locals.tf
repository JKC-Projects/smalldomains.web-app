locals {
  env_root_domain                 = format("%ssmall.domains", var.environment == "prod" ? "" : "${var.environment}.")
  fqdn                            = format("pages.%s", local.env_root_domain)
  web-app-s3-cloudfront-origin-id = "SmallDomainsWebAppS3Bucket"
  web_app_logs_s3_object_prefix   = "s3-logs"

  default_tags = {
    project     = "small-domains"
    managed_by  = "terraform"
    github_repo = "smalldomains.web-app"
  }
}