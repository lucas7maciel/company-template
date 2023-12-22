//import "./index.css"
import styles from "./index.module.css";
import { Meio } from "./subcomponents/meio";
import phone from "../../assets/icons/phone-icon.svg";
import mail from "../../assets/icons/mail-icon.svg";
import address from "../../assets/icons/address-icon.svg";
import { useTranslation } from "react-i18next";
import { SendEmail } from "./subcomponents/sendEmail";
import { SocialMedia } from "./subcomponents/socialMedia";

export const Contato = () => {
  const { t } = useTranslation();

  const meios = [
    { icon: phone, value: t("contact.infos.phone") },
    { icon: mail, value: t("contact.infos.email") },
    { icon: address, value: t("contact.infos.address") },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <h2>{t("contact.infos.title")}</h2>
        <p>{t("contact.infos.description")}</p>

        <div className={styles.contatos}>
          {meios.map((meio, index) => (
            <Meio
              key={index}
              order={index}
              icon={meio.icon}
              value={meio.value}
            />
          ))}
        </div>
      </div>

      <div className={styles.message}>
        <SendEmail t={t} />

        <div className={styles.under_section}>
          <SocialMedia style={styles.social_media} />
        </div>
      </div>
    </div>
  );
};
