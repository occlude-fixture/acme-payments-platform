module "route53_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "route53" {
  triggers = {
    name = var.name
    size = var.size
  }
}
