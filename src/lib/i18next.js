import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import { getLanguage } from "../translations/getLanguage";

const en = getLanguage("en")
const pt = getLanguage("pt")

i18next
.use(initReactI18next)
.init({
  resources: { en, pt },
  lng: "pt"
})