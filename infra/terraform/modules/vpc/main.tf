module "vpc_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "vpc" {
  triggers = {
    name = var.name
    size = var.size
  }
}
