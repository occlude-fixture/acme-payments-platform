module "platform" {
  source = "../../modules/eks"
  name   = "payments-prod"
  size   = 3
}
