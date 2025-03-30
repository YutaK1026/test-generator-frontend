import React from "react";

export enum ButtonSizeProp {
  small = 12,
  medium = 28,
  large = 44,
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}
