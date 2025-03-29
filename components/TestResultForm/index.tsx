"use client";

import React from "react";
import { TestResultFormPresenter } from "./presenter";
import { useTestResultForm } from "./hooks/hooks";

export const TestResultForm: React.FC = () => {
  const { state, handleBack, handleDownload, handleRetry } =
    useTestResultForm();

  return (
    <TestResultFormPresenter
      state={state}
      handleBack={handleBack}
      handleDownload={handleDownload}
      handleRetry={handleRetry}
    />
  );
};
