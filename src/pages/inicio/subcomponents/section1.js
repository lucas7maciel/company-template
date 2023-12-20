
import { useTranslation } from "react-i18next"
import "./section1.css"
import computer from "../../../assets/computer.svg"

export const Section1 = (props) => {
  const {t} = useTranslation()

  return (
  <div className='section-1'>
    <div className='infos'>
      <div className='text'>
        <h3><span>⬤ </span>{t("home.section_1.info")}</h3>
        <h1>{t("home.section_1.title_1")}<br /><span className='important'>{t("home.section_1.title_2")}</span></h1>
      </div>
      <button
        onClick={() => props.sec2.current?.scrollIntoView({behavior: 'smooth', inline: 'center', block: "center"})}
        >{t("home.section_1.button")}
      </button>
    </div>
    <div className='icons'>
      <img 
        src={computer}
      />
    </div>
  </div>)
}
