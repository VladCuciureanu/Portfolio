import { forwardRef } from "react"

const SvgHymn = ({ ...props }, ref?: React.LegacyRef<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    Hymn
  </svg>
)

const ForwardRef = forwardRef(SvgHymn)
export default ForwardRef
