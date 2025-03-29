"use client";

import React from "react";
import styles from "./index.module.scss";

export interface Step {
  id: number;
  title: string;
}

export interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className={styles.stepsContainer}>
      {steps.map((step) => (
        <div
          key={step.id}
          className={`${styles.stepItem} ${
            step.id === currentStep ? styles.active : ""
          }`}
        >
          <div
            className={`${styles.stepCircle} ${
              step.id <= currentStep ? styles.active : ""
            }`}
          >
            <span>{step.id}</span>
          </div>
          <div className={styles.stepText}>{step.title}</div>
        </div>
      ))}
    </div>
  );
};
