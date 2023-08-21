import { Suspense, lazy } from "react";
const HeavyMessage = lazy(() => import("./HeavyMessage"));

export const App = () => {
  return (
    <>
      <div>Hello</div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyMessage />
      </Suspense>
    </>
  );
};
