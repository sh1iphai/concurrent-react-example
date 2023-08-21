import { Suspense } from "react";
import { SuspendMessage } from "./SuspendMessage";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspendMessage />
    </Suspense>
  );
};
