import { FC, ReactNode, useTransition } from "react";
import styles from "./Tab.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
};
export const TabButton: FC<Props> = ({ children, onClick, isActive }) => {
  const [_, startTransition] = useTransition();
  const buttonClassName = isActive ? styles.active : styles.inactive;
  return (
    <button
      className={buttonClassName}
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </button>
  );
};
