"use client";

import React from "react";
import { CustomSettingsFormPresenter } from "./presenter";
import { useCustomSettingsForm } from "./hooks/hooks";

export const CustomSettingsForm: React.FC = () => {
  const {
    testTitle,
    handleTitleChange,
    outputFormat,
    handleOutputFormatChange,
    excludePrevious,
    handleExcludePreviousChange,
    handleBack,
    handleNext,
  } = useCustomSettingsForm();

  return (
    <CustomSettingsFormPresenter
      testTitle={testTitle}
      handleTitleChange={handleTitleChange}
      outputFormat={outputFormat}
      handleOutputFormatChange={handleOutputFormatChange}
      excludePrevious={excludePrevious}
      handleExcludePreviousChange={handleExcludePreviousChange}
      handleBack={handleBack}
      handleNext={handleNext}
    />
  );
};
