terraform {
  backend "s3" {
    bucket = "acme-tfstate-prod"
    key    = "payments/prod.tfstate"
    region = "us-east-1"
  }
}
