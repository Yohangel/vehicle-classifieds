export function Button(props: {
  children?: any
  type?: "button" | "submit" | "reset"
  style?: string
  extraClass?: string
  onClick?: any
  simpleColor?: string
}) {
  const { children, type, style, extraClass, onClick, simpleColor } = props
  const setStyle = (st: string) => {
    switch (st) {
      case "secondary":
        return "bg-white text-gray-700 border-2 hover:shadow-lg"
      case "simple":
        const color = simpleColor || "gray"
        return `text-${color}-600 border-2 border-${color}-600 hover:font-bold hover:shadow-lg`
      case "primary":
      default:
        return "text-white bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 hover:to-blue-500 hover:shadow-lg"
    }
  }
  return (
    <button
      className={`flex rounded-md p-4 font-semibold items-center ${setStyle(
        style || "primary"
      )} ${extraClass && extraClass}`}
      type={type || "button"}
      onClick={onClick && (() => onClick())}
    >
      {children && children}
    </button>
  )
}
