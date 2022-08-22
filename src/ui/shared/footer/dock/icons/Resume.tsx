import { forwardRef } from "react"

const SvgResume = ({ ...props }, ref?: React.LegacyRef<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="inherit"
    strokeWidth="inherit"
    strokeLinecap="round"
    strokeLinejoin="round"
    ref={ref}
    {...props}
  >
    <path d="M9,2h6c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1H9C8.4,6,8,5.6,8,5V3C8,2.4,8.4,2,9,2z" />
    <path d="M16,4h2c1.1,0,2,0.9,2,2v14c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h2" />
    <path d="M7.6,10.3h8.9" />
    <path d="M7.6,17.6h8.9" />
    <path d="M7.6,13.9h8.9" />
  </svg>
)

const ForwardRef = forwardRef(SvgResume)
export default ForwardRef
