variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 13
}

variable "tags" {
  type    = map(string)
  default = {}
}
