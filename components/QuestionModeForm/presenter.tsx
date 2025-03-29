"use client";

import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./presenter.module.scss";
import { FormLayout } from "@/components/ui/FormLayout";
import { NavigationButtons } from "@/components/ui/NavigationButtons";
import { TEST_GENERATOR_STEPS, QuestionMode } from "@/app/types/steps";

export interface QuestionModeFormPresenterProps {
  questionMode: QuestionMode;
  handleModeChange: (mode: QuestionMode) => void;
  wordCount: string;
  handleWordCountChange: (value: string) => void;
  isError: boolean;
  errorMessage: string;
  handleBack: () => void;
  handleNext: () => void;
}

export const QuestionModeFormPresenter: React.FC<
  QuestionModeFormPresenterProps
> = ({
  questionMode,
  handleModeChange,
  wordCount,
  handleWordCountChange,
  isError,
  errorMessage,
  handleBack,
  handleNext,
}) => {
  return (
    <FormLayout
      steps={TEST_GENERATOR_STEPS}
      currentStep={2}
      title="設問モードを選択してください"
    >
      <div className={styles.formContent}>
        <RadioGroup.Root
          className={styles.radioGroup}
          value={questionMode}
          onValueChange={(value) => handleModeChange(value as QuestionMode)}
        >
          <div className={styles.radioItem}>
            <RadioGroup.Item
              className={styles.radioButton}
              value="random"
              id="r1"
            >
              <RadioGroup.Indicator className={styles.radioIndicator} />
            </RadioGroup.Item>
            <label className={styles.radioLabel} htmlFor="r1">
              ランダム選択モード
            </label>
          </div>

          <div className={styles.radioItem}>
            <RadioGroup.Item
              className={styles.radioButton}
              value="range"
              id="r2"
            >
              <RadioGroup.Indicator className={styles.radioIndicator} />
            </RadioGroup.Item>
            <label className={styles.radioLabel} htmlFor="r2">
              範囲指定モード
            </label>
          </div>
        </RadioGroup.Root>

        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>
            単語数を入力してください
            <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="数字を入力してください"
            value={wordCount}
            onChange={(e) => handleWordCountChange(e.target.value)}
          />
          {isError && <div className={styles.error}>{errorMessage}</div>}
        </div>

        <NavigationButtons onBack={handleBack} onNext={handleNext} />
      </div>
    </FormLayout>
  );
};
