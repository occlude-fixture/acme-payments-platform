module "opensearch_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "opensearch" {
  triggers = {
    name = var.name
    size = var.size
  }
}
