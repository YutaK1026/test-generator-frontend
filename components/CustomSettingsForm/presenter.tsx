"use client";

import React from "react";
import styles from "./presenter.module.scss";
import { FormLayout } from "@/components/ui/FormLayout";
import { NavigationButtons } from "@/components/ui/NavigationButtons";
import { TEST_GENERATOR_STEPS, OutputFormat } from "@/app/types/steps";

export interface CustomSettingsFormPresenterProps {
  testTitle: string;
  handleTitleChange: (value: string) => void;
  outputFormat: OutputFormat[];
  handleOutputFormatChange: (format: OutputFormat) => void;
  excludePrevious: boolean;
  handleExcludePreviousChange: (checked: boolean) => void;
  handleBack: () => void;
  handleNext: () => void;
}

export const CustomSettingsFormPresenter: React.FC<
  CustomSettingsFormPresenterProps
> = ({
  testTitle,
  handleTitleChange,
  outputFormat,
  handleOutputFormatChange,
  excludePrevious,
  handleExcludePreviousChange,
  handleBack,
  handleNext,
}) => {
  return (
    <FormLayout
      steps={TEST_GENERATOR_STEPS}
      currentStep={3}
      title="カスタム設定"
    >
      <div className={styles.formContent}>
        <div className={styles.settingsContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              テストのタイトルを入力してください
              <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="タイトル"
              value={testTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              出題形式を選択
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.settingOptions}>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  checked={outputFormat.includes("english-to-japanese")}
                  onChange={() =>
                    handleOutputFormatChange("english-to-japanese")
                  }
                />
                <span>英語→日本語</span>
              </label>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  checked={outputFormat.includes("japanese-to-english")}
                  onChange={() =>
                    handleOutputFormatChange("japanese-to-english")
                  }
                />
                <span>日本語→英語</span>
              </label>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>その他</label>
            <div className={styles.settingOptions}>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  checked={excludePrevious}
                  onChange={(e) =>
                    handleExcludePreviousChange(e.target.checked)
                  }
                />
                <span>既出の問題を出さない</span>
              </label>
            </div>
          </div>
        </div>

        <NavigationButtons onBack={handleBack} onNext={handleNext} />
      </div>
    </FormLayout>
  );
};
