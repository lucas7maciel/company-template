import { useNavigate } from "react-router-dom";
import { MobileMenu } from "./mobile-menu";
import { Language } from "./language";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import styles from "./index.module.css";
import logo from "../../assets/logos/logo.png";

export const Navbar = (props) => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    changeLanguage(props.portuguese ? "pt" : "en");
  }, [props.portuguese]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        <div className={styles.name}>
          <span>Lucas</span>
        </div>
      </div>

      <div className={styles.sections}>
        <span className="selected" onClick={() => navigate("/")}>
          {t("navbar.home")}
        </span>
        <span onClick={() => navigate("/solucoes")}>
          {t("navbar.solutions")}
        </span>
        <span onClick={() => navigate("/contato")}>{t("navbar.contact")}</span>
      </div>

      <Language
        portuguese={props.portuguese}
        setPortuguese={props.setPortuguese}
      />
      <MobileMenu setPortuguese={props.setPortuguese} />
    </div>
  );
};
