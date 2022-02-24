import { arrayOfLastYears, arrayOfPrices, sortArray } from 'common/utils';
import { Button, Search, Select } from 'components';
import { filterList } from 'filters';
import { FilterModel } from 'models';
import React from 'react';
import { addFilter } from 'redux/actions/filtersAction';
import { store } from 'redux/store';

const filters = filterList

export function FilterList() {
  const [showFilters, setShowFilters] = React.useState(false)
  React.useEffect(() => {
    store.dispatch(addFilter("orderBy", "priceDesc")) // set orderBy default value
  }, [])
  const toggleFilters = () => {
    const pageBody = document.querySelector("body")
    const newValue = !showFilters
    setShowFilters(newValue)
    if (newValue) pageBody?.classList.add("menuOpen")
    else pageBody?.classList.remove("menuOpen")
  }
  return (
    <>
      <Button
        onClick={() => toggleFilters()}
        style="secondary"
        extraClass="md:hidden mb-5 w-full text-white justify-center  bg-gradient-to-b from-teal-500 bg-teal-600"
      >
        Ver filtros
      </Button>
      <div
        className={
          (showFilters ? "fixed" : "hidden") +
          " p-5 z-50 bg-gray-100 w-full h-full top-0 left-0 md:p-0  overflow-y-auto sm: md:relative md:block  md:z-0"
        }
      >
        <Button
          onClick={() => toggleFilters()}
          style="secondary"
          extraClass="md:hidden mb-5 w-full text-white justify-center  bg-gradient-to-b from-teal-500 bg-teal-600"
        >
          Cerrar filtros
        </Button>
        {true && (
          <Button
            onClick={() => toggleFilters()}
            style="secondary"
            extraClass="md:hidden mb-5 py-2 w-full text-white justify-center  bg-gradient-to-b from-red-500 bg-red-600"
          >
            Ver filtros
          </Button>
        )}
        <Search />
        {filters.map((filter) => {
          switch (filter.type) {
            case "range":
              return (
                <div
                  className="bg-white shadow-sm p-3 mt-2 rounded-md"
                  key={filter.title}
                >
                  <div className="text-sm font-semibold">{filter.title}</div>
                  <Select
                    title="Desde"
                    options={sortArray(filter.options, "asc")}
                    containerClass={filter.containerClass}
                    selectClass={filter.selectClass}
                    search={filter.search}
                    onChange={(e: any) => console.log(filter.name + "From", e)}
                  />
                  <Select
                    title="Hasta"
                    options={sortArray(filter.options, "asc")}
                    containerClass="mt-1"
                    selectClass={filter.selectClass}
                    search={filter.search}
                    onChange={(e: any) => console.log(filter.name + "To", e)}
                  />
                </div>
              )
            case "select":
            default:
              return (
                <Select
                  key={filter.title}
                  title={filter.title}
                  options={filter.options}
                  search={filter.search}
                  containerClass={filter.containerClass}
                  selectClass={filter.selectClass}
                  onChange={(e: any) =>
                    store.dispatch(addFilter(filter.name, e))
                  }
                />
              )
          }
        })}
      </div>
    </>
  )
}
