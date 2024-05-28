variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 14
}

variable "tags" {
  type    = map(string)
  default = {}
}
