import { Button, CloseButton } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const menuItems = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Precios",
    href: "/precios",
  },
  {
    name: "¿Cómo publico?",
    href: "/como-publico",
  },
]

export function Navbar() {
  const { asPath } = useRouter()
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    const pageBody = document.querySelector("body")
    const newValue = !showMenu
    setShowMenu(newValue)
    if (newValue) pageBody?.classList.add("menuOpen")
    else pageBody?.classList.remove("menuOpen")
  }

  return (
    <>
      <div className={`sticky top-0 z-50 bg-white shadow-sm  py-3 w-full`}>
        <div className="flex flex-row px-5 items-center justify-between max-w-screen-2xl mx-auto">
          <div className="items-center flex">
            <span
              className={`cursor-pointer font-bold text-cyan-600 text-xl inline-flex flex-row items-center hover:text-teal-600`}
            >
              <img src="/logo.png" className="h-8" alt="" />
            </span>
            <div className="hidden ml-10 xl:inline-flex items-center gap-5">
              {menuItems.map((item) => (
                <span
                  key={"navDesk-" + item.name}
                  className={
                    (asPath == item.href && "font-bold") +
                    " cursor-pointer bg-white px-2 py-1 rounded-md hover:bg-gray-100"
                  }
                >
                  <Link href={item.href}>{item.name}</Link>
                </span>
              ))}
            </div>
          </div>
          <div className="hidden self-end xl:inline-flex">
            <Button extraClass="py-3">Vende tu vehículo</Button>
            <Button style="secondary" extraClass="ml-2 py-3">
              Mi cuenta
              <span className="bg-red-600 text-white text-xs py-0.5 px-1.5 rounded-full ml-2">
                1
              </span>
            </Button>
          </div>
          <button
            onClick={() => toggleMenu()}
            className={`outline-none inline xl:hidden`}
          >
            <svg
              className="w-8 h-8 text-cyan-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-row  items-center  fixed z-50 bg-white top-0 left-0 w-full h-full`}
      >
        <CloseButton
          onClick={() => toggleMenu()}
          styles="fixed top-0 text-white bg-black right-0 hover:bg-gray-700 p-4  xl:py-3 xl:px-2 rounded-bl-xl flex items-center text-center "
        />
        <div className="flex text-center text-2xl flex-col gap-5 mx-auto">
          <div className="bg-gray-100">
            {menuItems.map((item) => (
              <div
                key={"navDesk-" + item.name}
                className={
                  (asPath == item.href && "font-bold") +
                  " cursor-pointer border-2 m-2  rounded-lg p-4 bg-white hover:bg-gray-100"
                }
              >
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
          <button
            className={` rounded-md p-4  font-semibold items-center text-white bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500`}
          >
            Vende tu vehículo
          </button>
          <div
            className={`flex gap-2 text-center items-center border-2  rounded-md p-4  `}
          >
            <img
              src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
              alt=""
              className="h-8 w-8"
            />
            Mi cuenta
          </div>
        </div>
      </div>
    </>
  )
}
