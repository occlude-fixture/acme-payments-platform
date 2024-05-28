variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 3
}

variable "tags" {
  type    = map(string)
  default = {}
}
