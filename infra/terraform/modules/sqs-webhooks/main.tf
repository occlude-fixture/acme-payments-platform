module "sqs_webhooks_label" {
  source  = "../label"
  name    = var.name
  tags    = var.tags
}

resource "null_resource" "sqs_webhooks" {
  triggers = {
    name = var.name
    size = var.size
  }
}
