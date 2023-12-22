import styles from "../index.module.css";

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} />
      <hr />
      <p>{props.text}</p>
    </div>
  );
};
