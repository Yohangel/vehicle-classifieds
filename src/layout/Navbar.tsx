import { Button } from 'components';
import { useRouter } from 'next/router';

export function Navbar() {
  const { push } = useRouter()

  return (
    <>
      <div className={` top-0 z-50 bg-white shadow-sm w-full md:px-3`}>
        <div className="flex flex-col  items-center justify-between max-w-screen-2xl mx-auto md:flex-row ">
          <div className="items-center my-3 flex">
            <span
              className={`cursor-pointer font-bold text-cyan-600 text-xl inline-flex flex-row items-center hover:text-teal-600`}
            >
              <img
                onClick={() => push("/")}
                src="/logo.png"
                className="h-8 my-2"
                alt=""
              />
            </span>
          </div>
          <div className="w-full py-3 flex  justify-center bg-cyan-900  md:bg-white md:w-auto md:justify-end">
            <Button onClick={() => push("/vender-vehiculo")} extraClass="py-2">
              Vende tu vehículo
            </Button>
            <Button style="secondary" extraClass="ml-2 py-2">
              Mi cuenta
              <span className="bg-red-600 text-white text-xs py-0.5 px-1.5 rounded-full ml-2">
                1
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
