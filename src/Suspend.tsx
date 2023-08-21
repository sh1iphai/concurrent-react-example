import { FC } from "react";
export const Suspend: FC = () => {
  throw new Promise((resolve) => setTimeout(resolve, 1000));
};
