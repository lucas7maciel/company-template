
import { useNavigate } from "react-router-dom"
import "./navbar.css"
import { MobileMenu } from "./mobile-menu"
import { Language } from "./language"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import styles from "./index.module.css"

export const Navbar = (props) => {
  console.log(styles)

  const { t, i18n : {changeLanguage}} = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    changeLanguage(props.portuguese ? "pt" : "en")
  }, [props.portuguese])

  return (
    <div className="navbar">
      <div className="logo">
        <img 
          src={require("../../assets/logos/logo.png")}
        />
        <div className="name">
          <span>EMPRESA</span>
        </div>
      </div>

      <div className="sections">
        <span 
          className="selected"
          onClick={() => navigate("/")}
          >{t("navbar.home")}
        </span>
        <span
          onClick={() => navigate("/solucoes")}
          >{t("navbar.solutions")}
        </span>
        <span
          onClick={() => navigate("/contato")}
          >{t("navbar.contact")}
        </span>
      </div>

      <Language 
        portuguese={props.portuguese}
        setPortuguese={props.setPortuguese}
      />
      <MobileMenu />
    </div>
  )
}
