module "secrets_manager_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "secrets_manager" {
  triggers = {
    name = var.name
    size = var.size
  }
}
