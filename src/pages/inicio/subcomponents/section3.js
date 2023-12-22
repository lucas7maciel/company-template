
import industry from "../../../assets/why-our-company/industry-icon.svg"
import trophy from "../../../assets/why-our-company/trophy-icon.svg"
import advanced from "../../../assets/why-our-company/advanced-icon.svg"
import devices from "../../../assets/why-our-company/devices-icon.svg"
import { useTranslation } from "react-i18next"
import styles from "./section3.module.css"

export const Section3 = () => {
  const {t} = useTranslation()

  return (
    <div className={styles.container}>
    <h1>{t("home.section_3.title")}</h1>
    <div className={styles.cards}>
      <div className={styles.card}>
        
        <img 
          src={industry}
        />
        <hr />
        <p>{t("home.section_3.reason_1")}</p>
      </div>

      <div className={styles.card}>
        
          <img 
            src={devices}
          />
          <hr />
          <p>{t("home.section_3.reason_2")}</p>

        
      </div>

      <div className={styles.card}>
        
        <img 
          src={advanced}
        />
        <hr />
        
          <p>{t("home.section_3.reason_3")}</p>
        
      </div>

      <div className={styles.card}>
        
        <img 
          src={trophy}
        />
        <hr />
          <p>{t("home.section_3.reason_4")}</p>
        
      </div>
    </div>
  </div>
  )
}
