import { ChangeEvent, useState, useDeferredValue } from "react";
import { HeavyField } from "./HeavyField";
import styles from "./App.module.css";

export const App = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} className={styles.input} />
      <HeavyField text={deferredText} />
    </>
  );
};
