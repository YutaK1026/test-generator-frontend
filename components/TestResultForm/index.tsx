"use client";

import React from "react";
import { TestResultFormPresenter } from "./presenter";
import { useTestResultForm } from "./hooks/hooks";
import { generateWordList } from "@/app/utils/pdfGenerator";

export const TestResultForm: React.FC = () => {
  const { state, handleBack, handleDownload, handleRetry } =
    useTestResultForm();
  const words = generateWordList(state);
  return (
    <TestResultFormPresenter
      state={state}
      words={words}
      handleBack={handleBack}
      handleDownload={handleDownload}
      handleRetry={handleRetry}
    />
  );
};
