import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import brazil from "../../assets/language/brazil-icon.svg";
import usa from "../../assets/language/usa-icon.svg";
import styles from "./mobile-menu.module.css";
import { useTranslation } from "react-i18next";

export const MenuSreen = (props) => {
  const {t} = useTranslation()
  const navigate = useNavigate();

  return (
    <div className={styles.menu_screen} onClick={() => props.setVisible(false)}>
      <div className={styles.links}>
        <span onClick={() => navigate("/")}>{t("navbar.home")}</span>
        <span onClick={() => navigate("/solucoes")}>{t("navbar.solutions")}</span>
        <span onClick={() => navigate("/contato")}>{t("navbar.contact")}</span>
      </div>

      <p className={styles.close}>Tap Anywhere to Close</p>
      <div className={styles.flags}>
        <img src={brazil} onClick={() => props.setPortuguese(true)} />
        <img src={usa} onClick={() => props.setPortuguese(false)} />
      </div>
    </div>
  );
};

export const MobileMenu = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (
        <MenuSreen
          setPortuguese={props.setPortuguese}
          setVisible={setVisible}
        />
      )}

      <div className={styles.mobile_menu}>
        <img onClick={() => setVisible(true)} src={menu} />
      </div>
    </>
  );
};
