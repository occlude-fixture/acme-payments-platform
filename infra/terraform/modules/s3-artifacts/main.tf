module "s3_artifacts_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "s3_artifacts" {
  triggers = {
    name = var.name
    size = var.size
  }
}
