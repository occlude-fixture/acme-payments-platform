module "platform" {
  source = "../../modules/eks"
  name   = "payments-dev"
  size   = 9
}
