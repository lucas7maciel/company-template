import styles from "../index.module.css";

export const Meio = (props) => (
  <div className={styles.meio}>
    <img 
      src={props.icon}
      onClick={() => navigator.clipboard.writeText(props.value)}
      title={props.title} />
    <div>
      <p className={styles[`text-${props.order}`]}>{props.value}</p>
    </div>
  </div>
);
