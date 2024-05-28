terraform {
  backend "s3" {
    bucket = "acme-tfstate-dev"
    key    = "payments/dev.tfstate"
    region = "us-east-1"
  }
}
