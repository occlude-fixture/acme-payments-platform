module "sns_alerts_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "sns_alerts" {
  triggers = {
    name = var.name
    size = var.size
  }
}
