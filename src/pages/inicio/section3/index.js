import industry from "../../../assets/why-our-company/industry-icon.svg";
import trophy from "../../../assets/why-our-company/trophy-icon.svg";
import advanced from "../../../assets/why-our-company/advanced-icon.svg";
import devices from "../../../assets/why-our-company/devices-icon.svg";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { Card } from "./subcomponents/card";

export const Section3 = () => {
  const { t } = useTranslation();

  const cards = [
    { image: industry, text: t("home.section_3.reason_1") },
    { image: devices, text: t("home.section_3.reason_2") },
    { image: advanced, text: t("home.section_3.reason_3") },
    { image: trophy, text: t("home.section_3.reason_4") },
  ];

  return (
    <div className={styles.container}>
      <h1>{t("home.section_3.title")}</h1>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
};
