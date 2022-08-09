import { forwardRef } from "react"

const SvgDarkTheme = ({ ...props }, ref?: React.LegacyRef<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="inherit"
    strokeWidth="inherit"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      transform-origin="12.019092798233032px 11.98090648651123px"
    ></path>
  </svg>
)

const ForwardRef = forwardRef(SvgDarkTheme)
export default ForwardRef
