module "redis_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "redis" {
  triggers = {
    name = var.name
    size = var.size
  }
}
