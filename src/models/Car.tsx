export interface CarModel {
  id: number
  make: string
  model: string
  img: Array<string>
  price?: number
  transmission: string
  km: number
  city: string
  date: number
  year: number
  details: string
  contact: Array<CarContactModel>
}

export interface CarContactModel {
  type: string
  value: string
}
