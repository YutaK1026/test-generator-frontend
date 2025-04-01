import React from "react";
import { TestGeneratorState, OutputFormat } from "@/app/types/steps";
import styles from "./presenter.module.scss";
import Button from "@/components/ui/Button";

interface TestPreviewPresenterProps {
  testData: TestGeneratorState;
}

const formatQuestionMode = (mode: "random" | "range"): string => {
  switch (mode) {
    case "random":
      return "ランダム選択モード";
    case "range":
      return "範囲指定モード";
    default:
      return "不明";
  }
};

const formatOutputFormat = (format: OutputFormat): string => {
  const formatMap: Record<OutputFormat, string> = {
    "english-to-japanese": "英語 → 日本語",
    "japanese-to-english": "日本語 → 英語",
  };
  return formatMap[format];
};

export const TestPreviewPresenter: React.FC<TestPreviewPresenterProps> = ({
  testData,
}) => {
  const { testTitle, vocabularyType, questionMode, wordCount, customSettings } =
    testData;

  const rangeStart = customSettings?.rangeStart as number | undefined;
  const rangeEnd = customSettings?.rangeEnd as number | undefined;

  return (
    <div className={styles.container}>
      <div className={styles.previewSection}>
        <div className={styles.imagePlaceholder}>プレビュー画像</div>
        <h2 className={styles.title}>{testTitle}</h2>
      </div>
      <div className={styles.detailsSection}>
        <div className={styles.detailItem}>
          <span className={styles.label}>単語帳</span>
          <span className={styles.value}>{vocabularyType || "N/A"}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>単語数</span>
          <span className={styles.value}>{wordCount}問</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>問題選択形式</span>
          <span className={styles.value}>
            {formatQuestionMode(questionMode)}
          </span>
        </div>
        {questionMode === "range" &&
          rangeStart !== undefined &&
          rangeEnd !== undefined && (
            <div className={styles.detailItem}>
              <span className={styles.label}>出題範囲</span>
              <span
                className={styles.value}
              >{`${rangeStart} 〜 ${rangeEnd}`}</span>
            </div>
          )}
        <div className={styles.detailItem}>
          <span className={styles.label}>出題形式</span>
          <span className={styles.value}>
            {formatOutputFormat(customSettings.outputFormat)}
          </span>
        </div>
        <div className={styles.actions}>
          {/* TODO: PDFダウンロードボタン */}
          <Button label="PDFでダウンロード" variant="outline" />{" "}
        </div>
      </div>
    </div>
  );
};
