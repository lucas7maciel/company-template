import { forwardRef } from "react"
import "./fs.css"

export const Fs = forwardRef((props, ref) => {
  return (
    <div
      className="fs" 
      ref={ref}
    >
      <h1>Fast Solution</h1>

    </div>
  )
})
