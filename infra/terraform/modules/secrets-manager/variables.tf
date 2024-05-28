variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 15
}

variable "tags" {
  type    = map(string)
  default = {}
}
