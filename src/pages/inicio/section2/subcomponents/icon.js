
import styles from "../index.module.css"

export const Icon = (props) => {
    const imgs = [
        require("../../../../assets/person/person-1.png"),
        require("../../../../assets/person/person-2.png"),
        require("../../../../assets/person/person-3.png"),
        require("../../../../assets/person/person-5.png"),
      ];

      return (
        <div className={styles.icon}>
          {imgs.map((img, index) => (
            <img
              className={
                props.curr == index
                  ? styles.selected
                  : props.last == index
                  ? styles.last
                  : ""
              }
              key={index}
              src={img}
            />
          ))}
          <img src={require("../../../../assets/person/person.png")} />
        </div>
      )
}