module "platform" {
  source = "../../modules/eks"
  name   = "payments-staging"
  size   = 8
}
