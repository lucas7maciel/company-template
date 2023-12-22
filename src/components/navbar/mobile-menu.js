import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";
import brazil from "../../assets/language/brazil-icon.svg";
import usa from "../../assets/language/usa-icon.svg";
import styles from "./mobile-menu.module.css";

export const MenuSreen = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.menu_screen} onClick={() => props.setVisible(false)}>
      <div className={styles.close}>
        <span>X</span>
      </div>

      <div className={styles.links}>
        <span onClick={() => navigate("/")}>INÍCIO</span>
        <span onClick={() => navigate("/solucoes")}>SOLUÇÕES</span>
        <span onClick={() => navigate("/contato")}>CONTATO</span>
      </div>

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
