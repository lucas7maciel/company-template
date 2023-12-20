
import "./index.css"
import { Meio } from "./subcomponents/meio"
import phone from "../../assets/icons/phone-icon.svg"
import mail from "../../assets/icons/mail-icon.svg"
import address from "../../assets/icons/address-icon.svg"
import { useTranslation } from "react-i18next"

export const Contato = () => {
  const {t} = useTranslation()

  const meios = [
    {icon: phone, value: t("contact.infos.phone")},
    {icon: mail, value: t("contact.infos.email")},
    {icon: address, value: t("contact.infos.address")}
  ]

  return (
    <div className="contatos">

    <div className="infos">
      <h2 className="title">{t("contact.infos.title")}</h2>
      <p className="intro">{t("contact.infos.description")}</p>

      <div className="contato">
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

    <div className="message">

      <div className="email">
        <p>{t("contact.send_email.title")}</p>
        <div className="inputs">
          <input 
            placeholder={t("contact.send_email.email")}
          /><br />
          <input 
            placeholder={t("contact.send_email.topic")}
          /><br />
          <textarea 
            placeholder={t("contact.send_email.title")}
            rows={5} cols={25}
          />
          <button>{t("contact.send_email.button")}</button>
        </div>
      </div>

      <div className="under-section">
      <div className='social-media'>
        <img src={require('../../assets/social-media/linkedin-icon.png')} />
        <img src={require('../../assets/social-media/whatsapp-icon.png')} />
        <img src={require('../../assets/social-media/facebook-icon.png')} />
        <img src={require('../../assets/social-media/instagram-icon.png')} />
      </div>
      </div>
    </div>
    </div>
  )
}