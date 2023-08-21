import { FC } from "react";
import styles from "./HeavyField.module.css";

type Props = {
  text: string;
};

export const HeavyField: FC<Props> = ({ text }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return (
    <div className={styles.container}>
      <div className={styles.label}>Input Value:</div>
      <div className={styles.output}>{text}</div>
    </div>
  );
};
