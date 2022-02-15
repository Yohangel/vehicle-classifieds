export interface SelectModel {
  options: Array<any>
  onChange: any
  title?: string
  containerClass?: string
  selectClass?: string
  search?: boolean
}

export interface SelectOptionModel {
  title: string
  value: string
  default?: boolean
}
