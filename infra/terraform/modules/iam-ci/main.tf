module "iam_ci_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "iam_ci" {
  triggers = {
    name = var.name
    size = var.size
  }
}
