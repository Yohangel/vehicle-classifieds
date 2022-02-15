import { filterByValue } from 'common/utils';
import { Button } from 'components';
import { SelectModel, SelectOptionModel } from 'models';
import { createRef, RefObject, useEffect, useState } from 'react';

export function Select(props: SelectModel) {
  const select = props
  const [show, setShow] = useState(false)
  const [elem, setElem] = useState<HTMLElement | null>()
  const [botside, setBotside] = useState(false)
  const [selected, setSelected] = useState(select.options[0])
  const [searchTerm, setSearchTerm] = useState("")
  const ref: RefObject<HTMLInputElement> = createRef()

  const toggleSelect = (val: boolean) => {
    setSearchTerm("")
    setShow(val)
  }

  const onClickOutside = () => toggleSelect(false)

  useEffect(() => {
    const topPosition = ref.current?.getBoundingClientRect().y || 0
    const optionsHeight =
      (ref.current?.children[1] as HTMLElement).offsetHeight || 0
    const selectHeight = ref?.current?.offsetHeight || 0
    const viewportHeight = window.innerHeight || 0
    setBotside(
      () => topPosition + optionsHeight + selectHeight > viewportHeight
    )
    setElem(() => ref?.current)
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside()
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [onClickOutside])

  const changeSelected = (option: SelectOptionModel) => {
    if (option !== selected) {
      setSelected(option)
      select.onChange(option.value)
    }
    setSearchTerm("")
    setShow(false)
  }

  return (
    <div
      ref={ref}
      className={`w-full relative ${
        select.containerClass && select.containerClass
      }`}
    >
      <div className="relative">
        <div
          tabIndex={0}
          onClick={() => toggleSelect(!show)}
          className={` w-full px-3 py-2 shadow-sm rounded-md select-none cursor-pointer ${
            select.selectClass && select.selectClass
          }`}
        >
          {select.title && (
            <span className="font-semibold">{select.title}:</span>
          )}{" "}
          {selected.title}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className={"w-6 h-6 fill-slate-400 " + (show ? "rotate-180" : "")}
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`absolute z-50 backdrop-blur-sm py-4 pl-2 pr-2 bg-[#00000015] w-full lg:pr-0
         ${show ? "" : " invisible"}
         ${
           elem &&
           (botside
             ? "bottom-[" + elem.offsetHeight + "px]"
             : "top-[" + elem.offsetHeight + "px]")
         }`}
      >
        <div className="overflow-y-scroll  max-h-52">
          {select.search && (
            <div className="w-full">
              <input
                type="search"
                className="w-full rounded-md shadow-md mb-2 appearance-none outline-none bg-white text-gray-400 text-sm p-2"
                placeholder={"Buscar " + (select.title && select.title) + "..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
          {filterByValue(select.options, searchTerm).map((option) => (
            <Button
              key={option.value}
              onClick={() => changeSelected(option)}
              style={selected === option ? "primary" : "secondary"}
              extraClass={
                "w-full px-2 py-1.5 text-left text-sm mt-1" +
                (selected === option ? " font-semibold" : " font-normal")
              }
            >
              {option.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
