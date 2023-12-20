
import { useTranslation } from "react-i18next"
import "./section4.css"

export const Section4 = () => {
  const {t} = useTranslation()

  return (
  <div className='section-4'>
    <div className="logo">
      <img 
        src={require("../../../assets/logos/logo.png")}
      />
      <p>EMPRESA</p>
    </div>
    <div className="sections">
    <div className='address'>
      <h2>{t("home.section_4.address.title")}</h2>
      <p>{t("home.section_4.address.city")}</p>
      <p>{t("home.section_4.address.street")}</p>
      <p>{t("home.section_4.address.neighbourhood")}</p>
    </div>
    <div className='contact'>
      <h2>{t("home.section_4.contact.title")}</h2>
      <p>{t("home.section_4.contact.mail")}</p>
      <p>{t("home.section_4.contact.phone_1")}</p>
      <p>{t("home.section_4.contact.phone_2")}</p>
    </div>
    <div className='social-media'>
      <img 
        src={require('../../../assets/social-media/whatsapp-icon.png')}
      />
      <img 
        src={require('../../../assets/social-media/facebook-icon.png')}
      />
      <img 
        src={require('../../../assets/social-media/instagram-icon.png')}
      />
      <img 
        src={require('../../../assets/social-media/linkedin-icon.png')}
      />
    </div>  
    </div>
    
  </div>
  )
}