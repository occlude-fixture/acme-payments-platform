module "waf_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "waf" {
  triggers = {
    name = var.name
    size = var.size
  }
}
