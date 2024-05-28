module "rds_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "rds" {
  triggers = {
    name = var.name
    size = var.size
  }
}
