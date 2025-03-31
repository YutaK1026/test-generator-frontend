"use client";

import React from "react";
import styles from "./presenter.module.scss";
import { FormLayout } from "@/components/ui/FormLayout";
import { TEST_GENERATOR_STEPS, TestGeneratorState } from "@/app/types/steps";
import { FaDownload, FaRedo } from "react-icons/fa";

type wordsProps = {
  english: string;
  japanese: string;
}[];

export interface TestResultFormPresenterProps {
  state: TestGeneratorState;
  words: wordsProps;
  handleBack: () => void;
  handleDownload: () => void;
  handleRetry: () => void;
}

export const TestResultFormPresenter: React.FC<
  TestResultFormPresenterProps
> = ({ state, words, handleBack, handleDownload, handleRetry }) => {
  const modeText =
    state.questionMode === "random" ? "ランダム選択モード" : "範囲指定モード";

  return (
    <FormLayout
      steps={TEST_GENERATOR_STEPS}
      currentStep={3}
      title="テスト生成結果"
    >
      <div className={styles.formContent}>
        <div className={styles.resultContainer}>
          <div className={styles.resultHeader}>
            <h3 className={styles.resultTitle}>
              {state.vocabularyType} テスト
            </h3>
            <p className={styles.resultSubtitle}>
              {modeText} - {state.wordCount}問
            </p>
          </div>

          <div className={styles.resultPreview}>
            {words.slice(0, 3).map((word, index) => (
              <div key={index} className={styles.previewItem}>
                <span className={styles.questionNumber}>{index + 1}.</span>
                <span className={styles.questionText}>{word.english}</span>
                <span className={styles.answerText}>{word.japanese}</span>
              </div>
            ))}
            {words.length > 3 && <div className={styles.previewDots}>...</div>}
          </div>

          <div className={styles.resultActions}>
            <button className={styles.backButton} onClick={handleBack}>
              Back
            </button>
            <div className={styles.actionButtons}>
              <button
                className={styles.downloadButton}
                onClick={handleDownload}
              >
                <FaDownload className={styles.buttonIcon} />
                ダウンロード
              </button>
              <button className={styles.retryButton} onClick={handleRetry}>
                <FaRedo className={styles.buttonIcon} />
                最初からやり直す
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};
