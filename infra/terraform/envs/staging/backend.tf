terraform {
  backend "s3" {
    bucket = "acme-tfstate-staging"
    key    = "payments/staging.tfstate"
    region = "us-east-1"
  }
}
