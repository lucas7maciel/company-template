import { useTranslation } from "react-i18next";
import styles from "../index.module.css";

export const Comments = (props) => {
  const { t } = useTranslation();

  const comments = [
    { text: t("home.section_2.comment_1"), person: "Paola" },
    { text: t("home.section_2.comment_2"), person: "Lucas" },
    { text: t("home.section_2.comment_3"), person: "Juliete" },
    { text: t("home.section_2.comment_4"), person: "Rafael" },
  ];

  return (
    <>
      <div className={styles.quote}>
        <span>“ </span>
        <i>{comments[props.curr].text}</i>
        <span className={styles.last_qtmark}> ”</span>
      </div>
      <div className={styles.person}>
        <i>{comments[props.curr].person}</i>
      </div>
    </>
  );
};
