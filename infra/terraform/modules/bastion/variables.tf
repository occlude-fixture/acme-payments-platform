variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 7
}

variable "tags" {
  type    = map(string)
  default = {}
}
