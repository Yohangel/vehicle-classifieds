export function Categories() {
  return (
    <div className="grid mt-5 lg:grid-cols-2 gap-2 md:gap-5 ">
      <div className="bg-car-bg bg-center bg-cover md:rounded-md">
        <div className=" bg-opacity-70 cursor-default select-none p-5 h-24 md:rounded-md bg-cyan-600 text-3xl flex justify-center items-center text-white ">
          Carros
        </div>
      </div>
      <div className="bg-moto-bg bg-center bg-cover md:rounded-md">
        <div className=" bg-opacity-60 cursor-pointer select-none p-5 h-24 md:rounded-md bg-black text-3xl flex justify-center items-center text-white hover:bg-opacity-80 hover:bg-gray-900">
          Motos
        </div>
      </div>
      <div className="hidden bg-yate-bg bg-center bg-cover md:rounded-md">
        <div className=" bg-opacity-60 cursor-pointer select-none p-5 h-24 md:rounded-md bg-black text-3xl flex justify-center items-center text-white hover:bg-opacity-80 hover:bg-gray-900">
          Embarcaciones
        </div>
      </div>
    </div>
  )
}
