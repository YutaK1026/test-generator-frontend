import React from "react";
import styles from "./index.module.scss";
import { ButtonProps } from "@/app/types/button";

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${disabled ? styles.disabled : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
