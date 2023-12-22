
import { useState } from "react"
import brazil from "../../assets/language/brazil-icon.svg"
import usa from "../../assets/language/usa-icon.svg"
import styles from "./language.module.css"

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

  const brStyle = props.portuguese ? 
    styles.current_flag : styles.other_flag

  const usaStyle = !props.portuguese ? 
    styles.current_flag : styles.other_flag

  return (
  <div 
    className={styles.container}
    onClick={changeLanguage}
    onMouseEnter={() => sethovered(true)}
    onMouseLeave={() => sethovered(false)}
  >
    <div className={styles.acronyms}>
      <span 
        className={props.portuguese ? styles.current_acro : styles.other_acro}
        style={acronymHover}
        >PT
      </span>
      <span 
        className={!props.portuguese ? styles.current_acro : styles.other_acro}
        style={acronymHover}
        >EN
      </span>
    </div>

    <div className={styles.flags}>
      <img
        src={usa}
        className={`${styles.flag} ${usaStyle}`}
        style={flagHover}
      />
      <img
        src={brazil}
        className={`${styles.flag} ${brStyle}`}
        style={flagHover}
      />
    </div>
  </div>
  )
}
