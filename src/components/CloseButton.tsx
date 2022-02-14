export function CloseButton(props: { onClick: any; styles?: string }) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`outline-none z-[999]  ` + (props.styles || "")}
    >
      {" "}
      <svg
        className="mx-2 w-3 h-3 "
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 12 12"
        stroke="currentColor"
      >
        <line x1="1" y1="11" x2="11" y2="1" />
        <line x1="1" y1="1" x2="11" y2="11" />
      </svg>
    </button>
  )
}
