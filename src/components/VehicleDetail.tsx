import { formatDate, formatKm, formatPrice } from 'common/utils';
import { Button, Carousel } from 'components';
import { CarModel } from 'models';
import React from 'react';

export function VehicleDetail(props: { car: CarModel }) {
  const car = props.car
  return (
    <div className=" lg:flex ">
      <div className="bg-black flex lg lg:h-full  lg:w-2/3">
        <Carousel images={car.img}></Carousel>
      </div>
      <div className="px-5 py-5 block h-full lg:overflow-y-auto lg:py-none lg:w-1/3">
        <h2 className="text-3xl md:text-5xl font-semibold color-blue-600">
          {car.make + " " + car.model}
        </h2>
        <div
          className={` text-transparent mt-2 bg-clip-text bg-gradient-to-b from-orange-400 to-red-700 font-bold text-2xl md:text-3xl `}
        >
          {formatPrice(car.price)}
        </div>
        <div className=" mt-5 mb-2 md:mb-0 flex flex-col md:flex-row gap-5">
          {car.contact.map((contact, i) => (
            <div key={contact + i.toString()} className=" md:p-2">
              <div className="font-semibold">{contact.type}:</div>
              <div>{contact.value}</div>
            </div>
          ))}
        </div>
        <div className=" mt-5 mb-2 md:mb-0 flex flex-col md:flex-row gap-2">
          <Button
            style="simple"
            simpleColor="green"
            extraClass="py-2 px-2 text-xs"
          >
            Mensaje privado
          </Button>
          <Button
            style="simple"
            simpleColor="cyan"
            extraClass="py-2 px-2 text-xs"
          >
            Agregar favorito
          </Button>
          <Button
            style="simple"
            simpleColor="red"
            extraClass="py-2 px-2 text-xs"
          >
            Denunciar publicación
          </Button>
        </div>
        <div className="py-2 font-normal">
          <div className="bg-gray-100  mt-2 p-2">
            <span className="font-semibold">Ubicación:</span> {car.city}
          </div>
          <div className="bg-gray-100 mt-2 p-2">
            <span className="font-semibold">Año:</span> {car.year}
          </div>
          <div className="bg-gray-100 mt-2 p-2">
            <span className="font-semibold">Kilometros:</span>{" "}
            {formatKm(car.km)}
          </div>
          <div className="bg-gray-100 mt-2 p-2">
            <span className="font-semibold">Transmisión:</span>{" "}
            {car.transmission}
          </div>
          <div className="bg-gray-100 mt-2 p-2">
            <span className="font-semibold">Fecha de publicación:</span>{" "}
            {formatDate(car.date)}
          </div>
          <div className="bg-gray-100 mt-2 p-2">
            <span className="font-semibold">Más detalles:</span> {car.details}
          </div>
        </div>
      </div>
    </div>
  )
}
