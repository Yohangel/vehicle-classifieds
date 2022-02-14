export interface FilterModel {
  options: Array<FilterOptionModel>
  name: string
  type?: string
  title?: string
  containerClass?: string
  selectClass?: string
  search?: boolean
}

export interface FilterOptionModel {
  title: string
  value: string
  default?: boolean
}
