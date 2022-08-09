import { forwardRef } from "react"

const SvgLightTheme = ({ ...props }, ref?: React.LegacyRef<SVGSVGElement>) => (
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
    <circle
      cx="12"
      cy="12"
      r="5"
      data-projection-id="108"
      transform-origin="12px 12px"
    ></circle>
    <g data-projection-id="109" transform-origin="12px 12px">
      <line x1="12" y1="1" x2="12" y2="3" data-projection-id="110"></line>
      <line x1="12" y1="21" x2="12" y2="23" data-projection-id="111"></line>
      <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" data-projection-id="112"></line>
      <line
        x1="18.4"
        y1="18.4"
        x2="19.8"
        y2="19.8"
        data-projection-id="113"
      ></line>
      <line x1="1" y1="12" x2="3" y2="12" data-projection-id="114"></line>
      <line x1="21" y1="12" x2="23" y2="12" data-projection-id="115"></line>
      <line
        x1="4.2"
        y1="19.8"
        x2="5.6"
        y2="18.4"
        data-projection-id="116"
      ></line>
      <line
        x1="18.4"
        y1="5.6"
        x2="19.8"
        y2="4.2"
        data-projection-id="117"
      ></line>
    </g>
  </svg>
)

const ForwardRef = forwardRef(SvgLightTheme)
export default ForwardRef
