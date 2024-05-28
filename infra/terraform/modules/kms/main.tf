module "kms_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "kms" {
  triggers = {
    name = var.name
    size = var.size
  }
}
