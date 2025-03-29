"use client";

import React from "react";
import { QuestionModeFormPresenter } from "./presenter";
import { useQuestionModeForm } from "./hooks/hooks";

export const QuestionModeForm: React.FC = () => {
  const {
    questionMode,
    handleModeChange,
    wordCount,
    handleWordCountChange,
    isError,
    errorMessage,
    handleBack,
    handleNext,
  } = useQuestionModeForm();

  return (
    <QuestionModeFormPresenter
      questionMode={questionMode}
      handleModeChange={handleModeChange}
      wordCount={wordCount}
      handleWordCountChange={handleWordCountChange}
      isError={isError}
      errorMessage={errorMessage}
      handleBack={handleBack}
      handleNext={handleNext}
    />
  );
};
