export const Contact = (props) => (
  <div className={props.style}>
    <h2>{props.t("home.section_4.contact.title")}</h2>
    <p>{props.t("home.section_4.contact.mail")}</p>
    <p>{props.t("home.section_4.contact.phone_1")}</p>
    <p>{props.t("home.section_4.contact.phone_2")}</p>
  </div>
);
