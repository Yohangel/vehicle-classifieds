import { formatDate, formatKm, formatPrice } from 'common/utils';
import { Carousel } from 'components';
import { CarModel } from 'models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function CardSkeleton() {
  return (
    <>
      <div className={`bg-white shadow-sm rounded-md`}>
        <div
          className={` h-44 bg-gray-200 min-h-[13.19rem] rounded-t-md`}
        ></div>
        <div className={`px-4 py-2`}>
          <div className={`inline-block h-4 w-full bg-gray-100 `}></div>
          <div className={`inline-block h-6 w-full bg-gray-100 `}></div>
          <div className={`inline-block h-5 w-full bg-gray-100 `}></div>
          <div className={`inline-block h-5 w-full bg-gray-100 `}></div>
        </div>
      </div>
    </>
  )
}

export function Card(props: { car: CarModel }) {
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()

  useEffect(() => setLoading(false), [])

  const car = props.car

  const handleClick = () => {
    push("/detail/" + car.id)
  }

  if (loading) return <CardSkeleton />

  return (
    <>
      <div
        className={`bg-white select-none cursor-pointer w-full block shadow-sm md:rounded-md md:hover:shadow-lg`}
      >
        <div className={`bg-black md:rounded-t-md`}>
          <Carousel
            images={car.img}
            imgClass="md:rounded-t-md"
            onClick={handleClick}
          />
        </div>
        <div className={`px-4`} onClick={handleClick}>
          <div className={`text-xs text-gray-400 text-right mt-3`}>
            en <b>{car.city}</b> el <b>{formatDate(car.date)}</b>
          </div>
          <div className={`text-md font-bold`}>
            {car.make + " " + car.model}
          </div>
          <div
            className={` text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-700 font-bold text-xl `}
          >
            {formatPrice(car.price)}
          </div>
          <div className={`text-xs mb-4 mt-3`}>
            <span
              className={`bg-gradient-to-br border-2 from-gray-100 to-white mr-1 rounded-md px-1 font-semibold`}
            >
              {car.year}
            </span>
            <span
              className={`bg-gradient-to-br border-2 from-gray-100 to-white mr-1 rounded-md px-1 font-semibold`}
            >
              {car.transmission}
            </span>
            <span
              className={`bg-gradient-to-br border-2 from-gray-100 to-white mr-1 rounded-md px-1 font-semibold`}
            >
              {formatKm(car.km)} km
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
