import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import computer from "../../../assets/computer.svg";

export const Section1 = (props) => {
  const { t } = useTranslation();

  function roll() {
    props.sec2.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.text}>
          <h3>
            <span>⬤ </span>
            {t("home.section_1.info")}
          </h3>

          <h1>
            {t("home.section_1.title_1")}
            <br />
            <span className={styles.important}>
              {t("home.section_1.title_2")}
            </span>
          </h1>
        </div>
        <button onClick={roll}>{t("home.section_1.button")}</button>
      </div>
      <div className={styles.icons}>
        <img src={computer} />
      </div>
    </div>
  );
};
