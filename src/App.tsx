import { ChangeEvent, FC, useDeferredValue, useEffect, useState } from "react";
import { HeavyField } from "./HeavyField";

export const App = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("text:", text);
  }, [text]);

  useEffect(() => {
    console.log("deferredText:", deferredText);
  }, [deferredText]);
  return (
    <>
      <input type="text" onChange={handleChange} />
      <div>text:{text}</div>
      <HeavyField text={deferredText} />
    </>
  );
};
