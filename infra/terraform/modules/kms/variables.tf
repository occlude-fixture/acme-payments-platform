variable "name" {
  type = string
}

variable "size" {
  type    = number
  default = 5
}

variable "tags" {
  type    = map(string)
  default = {}
}
