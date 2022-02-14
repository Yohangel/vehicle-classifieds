export function Search() {
  return (
    <form
      className={`relative flex flex-wrap w-full justify-between border-slate-200 md:flex-row bg-white shadow-sm rounded-md`}
    >
      <input
        type="search"
        placeholder="Buscar carros..."
        className={`flex-1 pl-3 py-1 w-1/6 text-gray-400 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0`}
      />{" "}
      <button
        className={`flex justify-center p-3 text-white items-center w-auto hover:bg-gray-100`}
      >
        <svg
          className="h-5 w-auto font-bold"
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <g fill="none" strokeWidth="2px" stroke="#777">
            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </button>
    </form>
  )
}
