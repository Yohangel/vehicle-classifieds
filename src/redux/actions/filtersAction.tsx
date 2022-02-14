export const ADD_FILTER = "ADD_FILTER"
export const REMOVE_FILTER = "REMOVE_FILTER"
export const REMOVE_ALL_FILTERS = "REMOVE_ALL_FILTERS"

export const addFilter = (name: string, value: string) => ({
  item: { name: name, value: value },
  type: ADD_FILTER,
})

export const removeFilter = (name: string) => ({
  item: { name: name },
  type: REMOVE_FILTER,
})

export const removeAllFilters = () => ({
  type: REMOVE_ALL_FILTERS,
})
