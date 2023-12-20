import { Section1 } from "./subcomponents/section1"
import { Section2 } from "./subcomponents/section2"
import { Section3 } from "./subcomponents/section3"
import { Section4 } from "./subcomponents/section4"
import { useRef } from "react"
import "./index.css"

export const Inicio = () => {
  const sec2Ref = useRef()

  return (
    <div className="page">
      <Section1 sec2={sec2Ref} />
      <Section2 reference={sec2Ref} />
      <Section3 />
      <Section4 />
    </div>
  )
}