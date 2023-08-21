import { Suspense } from "react";
import { Suspend } from "./Suspend";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Suspend />
    </Suspense>
  );
};
