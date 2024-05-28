module "bastion_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "bastion" {
  triggers = {
    name = var.name
    size = var.size
  }
}
