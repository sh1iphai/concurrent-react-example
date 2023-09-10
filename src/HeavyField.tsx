import { FC, memo } from "react";
import styles from "./HeavyField.module.css";

type Props = {
  text: string;
  isPending: boolean;
};

export const HeavyField: FC<Props> = memo(({ text, isPending }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return (
    <div className={styles.container}>
      <div className={styles.label}>Input Value:</div>
      <div className={styles.output} style={{ opacity: isPending ? 0.5 : 1 }}>
        {text}
      </div>
    </div>
  );
});
