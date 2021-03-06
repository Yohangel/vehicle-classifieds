import { arrayOfLastYears, arrayOfPrices } from 'common/utils';

export const filterList = [
  {
    title: "Ordenar por",
    name: "orderBy",
    type: "select",
    containerClass: "mt-2",
    selectClass: "bg-white",
    search: false,
    options: [
      { title: "Precio ↓", value: "priceDesc", default: false },
      { title: "Precio ↑", value: "priceAsc", default: false },
      { title: "Nombre ↓", value: "nameDesc", default: false },
      { title: "Nombre ↑", value: "nameAsc", default: false },
    ],
  },
  {
    title: "Ubicación",
    type: "select",
    name: "city",
    containerClass: "mt-2",
    selectClass: "bg-white",
    search: true,
    options: [
      { title: "Todos", value: "", default: false },
      { title: "Caracas", value: "caracas", default: false },
      { title: "Maracaibo", value: "maracaibo", default: false },
      { title: "Maracay", value: "maracay", default: false },
      { title: "Margarita", value: "margarita", default: false },
      { title: "Vargas", value: "vargas", default: false },
    ],
  },
  {
    title: "Marca",
    type: "select",
    name: "mark",
    containerClass: "mt-2",
    selectClass: "bg-white",
    search: true,
    options: [
      { title: "Todos", value: "", default: false },
      { title: "Mitsubishi", value: "mitsubishi", default: false },
    ],
  },
  {
    title: "Modelo",
    type: "select",
    name: "model",
    containerClass: "mt-2",
    selectClass: "bg-white",
    search: true,
    options: [
      { title: "Todos", value: "", default: false },
      { title: "Eclipse", value: "eclipse", default: false },
      { title: "Lancer", value: "lancer", default: false },
    ],
  },
  {
    title: "Precio",
    type: "range",
    name: "price",
    containerClass: "mt-1",
    selectClass: "bg-gray-50",
    search: true,
    options: [{ title: "Todos", value: "" }].concat(arrayOfPrices(300000, 0)),
  },
  {
    title: "Año",
    type: "range",
    name: "year",
    containerClass: "mt-1",
    selectClass: "bg-gray-50",
    search: true,
    options: [{ title: "Todos", value: "" }].concat(arrayOfLastYears(80)),
  },
  {
    title: "Transmisión",
    type: "select",
    name: "transmision",
    containerClass: "mt-2",
    selectClass: "bg-white",
    search: false,
    options: [
      { title: "Todos", value: "", default: false },
      { title: "Automatica", value: "automatica", default: false },
      { title: "Sincronica", value: "sincronica", default: false },
    ],
  },
]
