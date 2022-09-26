terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.8"
    }
  }

  # set TF CLI version
  required_version = "~> 1.1"

  # use Terraform Cloud as state backend
  cloud {
    organization = "jkc-projects"
    workspaces {
      tags = ["smalldomains", "web-app"]
    }
  }
}

locals {
  default_tags = {
    project     = "small-domains"
    managed_by  = "terraform"
    github_repo = "smalldomains.web-app"
  }
}

provider "aws" {
  region = "eu-west-1"

  default_tags {
    tags = local.default_tags
  }
}

provider "aws" {
  alias  = "US_EAST_1"
  region = "us-east-1"

  default_tags {
    tags = local.default_tags
  }
}

data "aws_caller_identity" "current" {}