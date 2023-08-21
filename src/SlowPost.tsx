import { FC } from "react";

type Props = {
  index: number;
};
export const SlowPost: FC<Props> = ({ index }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 2) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <>Post # {index + 1}</>;
};
