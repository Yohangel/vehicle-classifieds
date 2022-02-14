export function Categories() {
  return (
    <div className="grid px-5 mt-5 mx-auto max-w-screen-2xl lg:grid-cols-3 gap-5 ">
      <div className="bg-car-bg bg-center bg-cover rounded-md">
        <div className=" bg-opacity-70 cursor-default select-none p-5 h-24 rounded-md bg-cyan-600 text-3xl flex justify-center items-center text-white ">
          Carros
        </div>
      </div>
      <div className="bg-moto-bg bg-center bg-cover rounded-md">
        <div className=" bg-opacity-60 cursor-pointer select-none p-5 h-24 rounded-md bg-black text-3xl flex justify-center items-center text-white hover:bg-opacity-80 hover:bg-gray-900">
          Motos
        </div>
      </div>
      <div className="bg-yate-bg bg-center bg-cover rounded-md">
        <div className=" bg-opacity-60 cursor-pointer select-none p-5 h-24 rounded-md bg-black text-3xl flex justify-center items-center text-white hover:bg-opacity-80 hover:bg-gray-900">
          Embarcaciones
        </div>
      </div>
    </div>
  )
}
