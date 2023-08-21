import { FC, ReactNode } from "react";
import styles from "./Tab.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
};
export const TabButton: FC<Props> = ({ children, onClick, isActive }) => {
  const buttonClassName = isActive ? styles.active : styles.inactive;
  return (
    <button
      className={buttonClassName}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
