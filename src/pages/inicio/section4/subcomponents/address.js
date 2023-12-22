export const Address = (props) => (
  <div className={props.style}>
    <h2>{props.t("home.section_4.address.title")}</h2>
    <p>{props.t("home.section_4.address.city")}</p>
    <p>{props.t("home.section_4.address.street")}</p>
    <p>{props.t("home.section_4.address.neighbourhood")}</p>
  </div>
);
