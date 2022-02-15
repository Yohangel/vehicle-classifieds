import { arrayOfLastYears, arrayOfPrices, sortArray } from 'common/utils';
import { Search, Select } from 'components';
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
      <button
        onClick={() => toggleFilters()}
        className={`mb-5 w-full rounded-md text-xs p-2 font-semibold items-center text-white bg-teal-600 hover:font-bold hover:shadow-lg md:hidden`}
      >
        Ver filtros
      </button>
      <div
        className={
          (showFilters ? "fixed" : "hidden") +
          " p-5 z-50 bg-gray-100 w-full h-full top-0 left-0 md:p-0   sm: md:relative md:block  md:z-0"
        }
      >
        <button
          onClick={() => toggleFilters()}
          className={`mb-5 w-full rounded-md text-xs p-2 font-semibold items-center text-white bg-teal-600 hover:font-bold hover:shadow-lg md:hidden`}
        >
          Cerrar filtros
        </button>
        {false && (
          <button
            onClick={() => toggleFilters()}
            className={`mt-5 w-full rounded-md text-xs p-2 font-semibold items-center text-white bg-red-600 hover:font-bold hover:shadow-lg`}
          >
            Limpiar filtros
          </button>
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
                    selectClass="bg-gray-50"
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
