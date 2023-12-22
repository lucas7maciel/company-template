import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { Address } from "./subcomponents/address";
import { Contact } from "./subcomponents/contact";
import { SocialMedia } from "./subcomponents/socialMedia";

export const Section4 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={require("../../../assets/logos/logo.png")} alt="Logo" />
        <p>EMPRESA</p>
      </div>

      <div className={styles.sections}>
        <Address t={t} style={styles.address} />
        <Contact t={t} style={styles.contact} />
        <SocialMedia style={styles.social_media} />
      </div>
    </div>
  );
};
