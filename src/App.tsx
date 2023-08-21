import { Suspense } from "react";
import { Suspend } from "./Suspend";
import { Message } from "./Message";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Suspend />
      <Message />
    </Suspense>
  );
};
