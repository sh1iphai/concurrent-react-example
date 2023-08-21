import { Suspense, useEffect, useState } from "react";
import { SuspendMessage } from "./SuspendMessage";
import { SuspendExample } from "./SuspendExample";

export const App = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div>{seconds}秒</div>
      <Suspense fallback={<div>Loading Message...</div>}>
        <SuspendMessage />
        <Suspense fallback={<div>Loading Example...</div>}>
          <SuspendExample />
        </Suspense>
      </Suspense>
    </>
  );
};
