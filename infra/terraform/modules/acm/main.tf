module "acm_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "acm" {
  triggers = {
    name = var.name
    size = var.size
  }
}
