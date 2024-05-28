module "backup_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "backup" {
  triggers = {
    name = var.name
    size = var.size
  }
}
