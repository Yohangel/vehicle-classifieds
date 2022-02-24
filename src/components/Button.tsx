export function Button(props: {
  children?: any
  type?: "button" | "submit" | "reset"
  style?: string
  extraClass?: string
  onClick?: any
  simpleColor?: string
}) {
  const { children, type, style, extraClass, onClick, simpleColor } = props
  const simpleColorsApply = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-600 border-red-600"
      case "blue":
        return "text-blue-600 border-blue-600"
      case "cyan":
        return "text-cyan-600 border-cyan-600"
      case "teal":
        return "text-teal-600 border-teal-600"
      case "green":
        return "text-green-600 border-green-600"
      case "black":
        return "text-black border-black"
      case "gray":
      default:
        return "text-gray-600 border-gray-600"
    }
  }
  const setStyle = (st: string) => {
    switch (st) {
      case "secondary":
        return "bg-white text-gray-700 border-2 hover:shadow-lg hover:opacity-80"
      case "simple":
        const color = simpleColor || "gray"
        return (
          "border-2 hover:font-bold hover:shadow-lg " + simpleColorsApply(color)
        )
      case "primary":
      default:
        return "text-white bg-black hover:bg-gray-800 hover:shadow-lg"
    }
  }
  return (
    <button
      className={`flex select-none rounded-md p-4 font-semibold items-center  ${setStyle(
        style || "primary"
      )} ${extraClass && extraClass}`}
      type={type || "button"}
      onClick={onClick && (() => onClick())}
    >
      {children && children}
    </button>
  )
}
