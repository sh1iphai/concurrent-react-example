import { FC, memo } from "react";

type Props = {
  text: string;
};
export const HeavyField: FC<Props> = memo(({ text }) => {
  let i = 0;
  while (i < 1000000000) i++;

  return <div>deferredText: {text}</div>;
});
