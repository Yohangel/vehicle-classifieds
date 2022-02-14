import { ADD_FILTER, REMOVE_ALL_FILTERS, REMOVE_FILTER } from 'redux/actions/filtersAction';

const initialUserState: any[] = []

export function filtersReducer(state = initialUserState, action: any) {
  const elemIndex = state.findIndex((elem) => elem.name === action.item.name)
  const isEmpty =
    action.item && (!action.item.value || action.item.value === "")
  const newArr = [...state]
  switch (action.type) {
    case ADD_FILTER:
      if (elemIndex < 0 && !isEmpty) return [...state, action.item] // push if no exist

      if (!isEmpty) {
        // modify value if no empty
        newArr[elemIndex].value = action.item.value
        return newArr
      }

      if (elemIndex >= 0)
        // remove if no value but exist
        return newArr.filter((filter) => filter.name !== action.item.name)

      return state

    case REMOVE_FILTER:
      return newArr.filter((filter) => filter.name !== action.item.name)

    case REMOVE_ALL_FILTERS:
      return []

    default:
      return state
  }
}
