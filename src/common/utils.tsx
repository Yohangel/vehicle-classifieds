import moment from 'moment';

export const formatKm = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

export function formatPrice(price?: number) {
  if (!price) return "A convenir"
  return price.toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  })
}

export const formatDate = (date: number) => moment(date).format("DD/MM/YYYY")

export const filterByValue = (array: Array<any>, string: string) => {
  if (!string || string === "") return array
  return array.filter((o) =>
    Object.keys(o).some(
      (k) =>
        typeof o[k] === "string" &&
        o[k].toLowerCase().includes(string.toLowerCase())
    )
  )
}

export const range = (start: number, stop: number, step: number, title: any) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
    const elem = start + i * step
    return { title: title(elem), value: elem }
  })

export const arrayOfLastYears = (yearsToShow: number) => {
  const currentYear = new Date().getFullYear()
  return range(currentYear, currentYear - yearsToShow, -1, (el: any) =>
    el.toString()
  )
}

export const arrayOfPrices = (maxPrice: number, minPrice: number) => {
  return range(maxPrice, minPrice, -1000, (el: any) => formatPrice(el))
}

export const sortArray = (arrayToSort: any[], direction: "asc" | "desc") => {
  const newArr = [...arrayToSort]
  return newArr.sort((a, b) =>
    direction === "desc"
      ? parseInt(b.value) - parseInt(a.value)
      : parseInt(a.value) - parseInt(b.value)
  )
}
