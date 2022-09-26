module "other_tls_certs" {
  providers = {
    aws = aws.US_EAST_1
  }

  source          = "./validated_tls_cert"
  fqdn            = local.fqdn
  route53_zone_id = data.aws_ssm_parameter.smalldomains_zone_id.value
}