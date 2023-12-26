import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Icon } from "./subcomponents/icon";
import { Comments } from "./subcomponents/comments";

export const Section2 = (props) => {
  const [curr, setCurr] = useState(1);
  const [last, setLast] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((val) => {
        setLast(val);

        if (val + 1 === 4) { //4 = comments list length
          return 0;
        }

        return val + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box} ref={props.reference}>
        <Icon curr={curr} last={last} />
        <Comments curr={curr} />
      </div>
    </div>
  );
};
