import { cars } from 'cars';
import { Card } from 'components';
import { CarModel } from 'models';
import React, { useState } from 'react';
import { store } from 'redux/store';

const carList: Array<CarModel> = cars
export function CarList() {
  const [filtersStore, setFiltersStore] = useState<any[]>([])
  store.subscribe(() => setFiltersStore(() => store.getState().filters))
  console.log(filtersStore)
  if (!carList || carList.length < 1)
    return (
      <div className="bg-white p-4 font-semibold text-center rounded-md shadow-sm">
        No se han encontrado resultados.
      </div>
    )
  return (
    <>
      <div
        className={`flex-initial w-full gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {carList.map((car, index) => (
          <Card car={car} key={index} />
        ))}
      </div>
    </>
  )
}
