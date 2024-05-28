module "eks_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "eks" {
  triggers = {
    name = var.name
    size = var.size
  }
}
