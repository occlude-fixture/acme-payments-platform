variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 12
}

variable "tags" {
  type    = map(string)
  default = {}
}
