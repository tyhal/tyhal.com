provider "aws" {
  region = "ap-southeast-2"
}

terraform {
  required_version = ">= 0.12.3"

  backend "s3" {
    //    NOTE: you will need to change these to your own to store the terraform config
    bucket = "tyhal-terraform-state"
    key    = "website/tyhal.com.tfstate"
    region = "ap-southeast-2"
  }
}

resource "aws_s3_bucket" "website" {
  bucket = "${var.domain_name}"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"

    routing_rules = <<EOF
[{
    "Condition": {
        "HttpErrorCodeReturnedEquals": "404"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "#/"
    }
}]
EOF
  }

  tags = {
    project = "${var.domain_name}"
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = "${aws_s3_bucket.website.id}"

  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadGetObject",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.domain_name}/*"
      ]
    }
  ]
}
POLICY
}

resource "aws_route53_zone" "site" {
  name = "${var.domain_name}"
}

resource "aws_route53_record" "siteroot" {
  zone_id = "${aws_route53_zone.site.zone_id}"
  name    = "${var.domain_name}"
  type    = "A"

  alias {
    zone_id                = "${aws_s3_bucket.website.hosted_zone_id}"
    name                   = "${aws_s3_bucket.website.website_domain}"
    evaluate_target_health = false
  }
}

variable "domain_name" {
  description = "The address of where the website will be hosted"
}
