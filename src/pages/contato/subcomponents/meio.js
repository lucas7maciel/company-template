import styles from "../index.module.css";

export const Meio = (props) => (
  <div className={styles.meio}>
    <img src={props.icon} />
    <div>
      <p className={styles[`text-${props.order}`]}>{props.value}</p>
    </div>
  </div>
);
