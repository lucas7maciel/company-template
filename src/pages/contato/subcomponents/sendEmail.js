import styles from "../index.module.css";

export const SendEmail = (props) => (
  <div className={styles.email}>
    <p>{props.t("contact.send_email.title")}</p>
    <div className={styles.inputs}>
      <input placeholder={props.t("contact.send_email.email")} />
      <br />
      <input placeholder={props.t("contact.send_email.topic")} />
      <br />
      <textarea
        placeholder={props.t("contact.send_email.title")}
        rows={5}
        cols={25}
      />
      <button>{props.t("contact.send_email.button")}</button>
    </div>
  </div>
);
