module "cloudwatch_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "cloudwatch" {
  triggers = {
    name = var.name
    size = var.size
  }
}
