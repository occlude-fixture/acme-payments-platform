module "ecr_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "ecr" {
  triggers = {
    name = var.name
    size = var.size
  }
}
