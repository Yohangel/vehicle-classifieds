import type { NextPage } from "next"
import { Button, Categories, Select } from 'components';
import { Layout } from 'layout';

const VenderVehiculo: NextPage = () => {
  return (
    <Layout pageName="Vende tu vehículo">
      <div
        className={`md:px-5  md:py-5 mx-auto max-w-screen-xl md:flex md:gap-5`}
      >
        <div className="bg-white p-4 font-semibold text-center rounded-md shadow-sm w-full md:w-4/5">
          <h1 className="text-2xl">Vende tu vehículo</h1>
          <h2 className="text-lg font-normal text-gray-400">
            Sigue los pasos para publicar tu vehículo
          </h2>
          <div className="relative flex select-none items-center pb-6 max-w-md mx-auto  justify-center">
            <div className="absolute h-2 w-full  bg-gray-200 rounded-2xl"></div>
            <div className="absolute h-2 w-1/6 left-0  bg-teal-700 rounded-2xl"></div>
            <div className="justify-center flex gap-10 p-5 mx-auto">
              <div className="relative cursor-pointer flex flex-col justify-center">
                <div className=" text-3xl mx-auto bg-teal-700 text-white w-20 h-20 rounded-full flex justify-center items-center">
                  1
                </div>
                <div className="absolute -bottom-8 text-teal-700 uppercase ">
                  Vehículo
                </div>
              </div>
              <div className="relative cursor-default flex flex-col justify-center">
                <div className="text-3xl mx-auto bg-gray-200  text-white w-20 h-20 rounded-full flex justify-center items-center">
                  2
                </div>
                <div className="absolute -bottom-8 text-gray-300 uppercase mt-2">
                  Personal
                </div>
              </div>
              <div className="relative cursor-default flex flex-col justify-center">
                <div className="text-3xl mx-auto bg-gray-200 text-white w-20 h-20 rounded-full flex justify-center items-center">
                  3
                </div>
                <div className="absolute -bottom-8 text-gray-300 uppercase mt-2">
                  Finalizar
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 mb-5 mx-auto  justify-center w-100 flex flex-col max-w-3xl">
            <div className="relative text-left">
              <span className="bg-white text-teal-600 font-bold text-sm">
                Añade las fotos de tu vehículo
              </span>
            </div>
          </div>
          <div className="h-48 bg-gray-100 rounded-md max-w-3xl mx-auto flex flex-col items-center justify-center">
            Arrastra aquí las fotos de tu vehículo
            <span className="mb-2">o...</span>
            <Button style="secondary">Haz click aquí para añadirlas</Button>
          </div>

          <div className="relative mt-10 mb-5 mx-auto  justify-center w-100 flex flex-col max-w-3xl">
            <div className="relative text-left">
              <span className="bg-white text-teal-600 font-bold text-sm">
                Selecciona el tipo de Vehículo
              </span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Categories />
          </div>
          <div className="relative mt-10 mb-5 mx-auto  justify-center w-100 flex flex-col max-w-3xl">
            <div className="relative text-left">
              <span className="bg-white text-teal-600 font-bold text-sm">
                Ingresa los datos de tu Vehículo
              </span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="">
              <Select
                title="Marca"
                options={[{ title: "Mitsubishi", value: "mitsubishi" }]}
                search={true}
                selectClass="text-left border-2 border-gray-100 shadow-none font-normal"
                onChange={(e: any) => console.log(e)}
              />
            </div>
            <div className="mt-5">
              <Select
                title="Modelo"
                options={[{ title: "Eclipse", value: "mitsubishi" }]}
                search={true}
                selectClass="text-left border-2 border-gray-100 shadow-none font-normal"
                onChange={(e: any) => console.log(e)}
              />
            </div>
            <div className="mt-5">
              <Select
                title="Ubicación"
                options={[{ title: "Caracas", value: "mitsubishi" }]}
                search={true}
                selectClass="text-left border-2 border-gray-100 shadow-none font-normal"
                onChange={(e: any) => console.log(e)}
              />
            </div>
            <div className="mt-5">
              <Select
                title="Transmisión"
                options={[{ title: "Síncronica", value: "mitsubishi" }]}
                search={true}
                selectClass="text-left border-2 border-gray-100 shadow-none font-normal"
                onChange={(e: any) => console.log(e)}
              />
            </div>
            <div className="mt-5">
              <Select
                title="Año"
                options={[{ title: "1992", value: "mitsubishi" }]}
                search={true}
                selectClass="text-left border-2 border-gray-100 shadow-none font-normal"
                onChange={(e: any) => console.log(e)}
              />
            </div>
            <div className="flex items-center mt-5  border-2 border-gray-100 pl-3 rounded-md ">
              <label htmlFor="test" className="float-left">
                Kilometraje:
              </label>
              <input
                id="test"
                className="w-full h-full appearance-none outline-none py-2 px-3"
                type="number"
                placeholder="Ingresa el kilometraje de tu vehículo"
              />
            </div>
            <div className="flex items-center mt-5  border-2 border-gray-100 pl-3 rounded-md ">
              <label htmlFor="test" className="float-left">
                Precio:
              </label>
              <input
                id="test"
                className="w-full h-full appearance-none outline-none py-2 px-3"
                type="number"
                placeholder="Ingresa el precio en USD, ej: 1200"
              />
            </div>
            <div className="relative mt-10 mb-5 mx-auto  justify-center w-100 flex flex-col max-w-3xl">
              <div className="relative text-left">
                <span className="bg-white text-teal-600 font-bold text-sm">
                  ¿Quieres agregar comentarios extra?
                </span>
              </div>
            </div>

            <div className="flex mt-5 border-2 border-gray-100  rounded-md ">
              <textarea
                placeholder="Ingresa aquí los comentarios..."
                className="w-full h-full appearance-none outline-none py-2 px-3"
              />
            </div>
            <Button
              style="primary"
              extraClass="mt-10 w-full justify-center bg-teal-700 hover:bg-teal-800"
            >
              Siguiente paso
            </Button>
          </div>
        </div>
        <div className="hidden bg-white p-6  rounded-md shadow-sm w-1/5 h-fit md:block">
          <div className="border-b-2 pb-3 text-sm">
            <div className="font-bold text-cyan-600">
              Contacto fácil y rápido
            </div>
            Utiliza el chat para responder las dudas de los compradores
            interesados en tu vehículo.
          </div>
          <div className="border-b-2 pb-3 text-sm mt-5">
            <div className="font-bold text-cyan-600">
              Contacto fácil y rápido
            </div>
            Utiliza el chat para responder las dudas de los compradores
            interesados en tu vehículo.
          </div>
          <div className="border-b-2 pb-3 text-sm mt-5">
            <div className="font-bold text-cyan-600">
              Contacto fácil y rápido
            </div>
            Utiliza el chat para responder las dudas de los compradores
            interesados en tu vehículo.
          </div>
          <div className="text-sm mt-5">
            <div className="font-bold text-cyan-600">
              Contacto fácil y rápido
            </div>
            Utiliza el chat para responder las dudas de los compradores
            interesados en tu vehículo.
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default VenderVehiculo
