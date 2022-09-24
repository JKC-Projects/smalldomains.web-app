locals {
  env_root_domain = data.aws_ssm_parameter.smalldomains_apex_domain.value
  fqdn            = format("pages.", local.env_root_domain)
}

module "other_tls_certs" {
  source          = "./validated_tls_cert"
  fqdn            = local.fqdn
  route53_zone_id = data.aws_ssm_parameter.r53_zoneids.value
}