variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 16
}

variable "tags" {
  type    = map(string)
  default = {}
}
