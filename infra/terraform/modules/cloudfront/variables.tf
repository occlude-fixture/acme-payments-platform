variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 4
}

variable "tags" {
  type    = map(string)
  default = {}
}
