module "msk_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "msk" {
  triggers = {
    name = var.name
    size = var.size
  }
}
