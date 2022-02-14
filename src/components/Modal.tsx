import { CloseButton } from 'components';
import React, { useEffect } from 'react';

export function Modal(props: { children: any; onClose: any; show: boolean }) {
  useEffect(() => {
    const pageBody = document.querySelector("body")
    pageBody?.classList.add("menuOpen")
    return function cleanup() {
      pageBody?.classList.remove("menuOpen")
    }
  })
  document.onkeydown = (evt) => {
    evt = evt || window.event
    if (evt.keyCode == 27) {
      props.onClose()
    }
  }
  return (
    <>
      <div
        onClick={() => props.onClose()}
        className="bg-[#000000a2] z-[100] backdrop-blur-md fixed top-0 left-0 bottom-0 right-0 p-5 md:p-16"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative lg:flex bg-white h-full w-full overflow-y-auto lg:overflow-y-hidden"
        >
          <CloseButton
            onClick={() => props.onClose()}
            styles="absolute bg-white top-1  right-1  p-2  lg:py-3 lg:px-2 rounded-full flex items-center text-center "
          />
          {props.children}
        </div>
      </div>
    </>
  )
}
