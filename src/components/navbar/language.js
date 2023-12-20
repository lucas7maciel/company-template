
import { useState } from "react"
import "./language.css"
import brazil from "../../assets/language/brazil-icon.svg"
import usa from "../../assets/language/usa-icon.svg"

export const Language = (props) => {
  const [hovered, sethovered] = useState(false)

  const changeLanguage = () => {
    props.setPortuguese(val => !val)

    sethovered(false) //evita bug nas animações
  }

  const flagHover = hovered ? {
    transform: "translateX(-30%)",
    transition: "transform 0.1s ease-in"
  } : {}

  const acronymHover = hovered ? {
    transform: "translate(-50%, -80%)",
    transition: "transform 0.1s ease-in"
  } : {}

  return (
  <div 
    className="language"
    onClick={changeLanguage}
    onMouseEnter={() => sethovered(true)}
    onMouseLeave={() => sethovered(false)}
  >
    <div className="acronyms">
      <span 
        className={`${props.portuguese ? "current" : "other"}`}
        style={acronymHover}
        >PT
      </span>
      <span 
        className={`${!props.portuguese ? "current" : "other"}`}
        style={acronymHover}
        >EN
      </span>
    </div>

    <div 
      className="flag-container"
    >
      <img
        src={usa}
        className={`flagg ${!props.portuguese ? "current" : "other"}`}
        style={flagHover}
      />
      <img
        src={brazil}
        className={`flagg ${props.portuguese ? "current" : "other"}`} 
        style={flagHover}
      />
    </div>
  </div>
  )
}
