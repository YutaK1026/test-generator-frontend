"use client";

import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import { StepIndicator, Step } from "@/components/ui/StepIndicator";

export interface FormLayoutProps {
  children: ReactNode;
  steps: Step[];
  currentStep: number;
  title: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  steps,
  currentStep,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
