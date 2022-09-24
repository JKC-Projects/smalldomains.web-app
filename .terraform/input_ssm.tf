data "aws_ssm_parameter" "smalldomains_apex_domain" {
  name = "/route53/small.domains/apex-domain"
}

data "aws_ssm_parameter" "r53_zoneids" {
  name = "/route53/small.domains/zone-id"
}