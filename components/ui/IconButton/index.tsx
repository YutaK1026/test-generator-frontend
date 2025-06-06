import React from "react";
import { IconType } from "react-icons";
import styles from "./index.module.scss";
import { ButtonSizeProp } from "@/app/types/button";

interface Props {
  handleClick: () => void;
  Icon: IconType;
  color?: string;
  size?: ButtonSizeProp;
  disable: boolean;
}

export const IconButton: React.FC<Props> = ({
  handleClick,
  color = "#000",
  Icon,
  disable = false,
}) => {
  return (
    <button
      onClick={handleClick}
      className={disable ? `${styles.button_disable}` : `${styles.button}`}
      disabled={disable}
    >
      <Icon size={28} color={disable ? "#aaa" : color} />
    </button>
  );
};