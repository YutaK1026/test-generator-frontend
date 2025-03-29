"use client";

import React from "react";
import styles from "./index.module.scss";

export interface NavigationButtonsProps {
  onBack?: () => void;
  onNext: () => void;
  showBackButton?: boolean;
  nextDisabled?: boolean;
  backText?: string;
  nextText?: string;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onBack,
  onNext,
  showBackButton = true,
  nextDisabled = false,
  backText = "Back",
  nextText = "Next",
}) => {
  return (
    <div className={styles.buttonsContainer}>
      {showBackButton && (
        <button className={styles.backButton} onClick={onBack}>
          {backText}
        </button>
      )}
      <button
        className={styles.nextButton}
        onClick={onNext}
        disabled={nextDisabled}
      >
        {nextText}
      </button>
    </div>
  );
};
