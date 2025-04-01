"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTestGenerator } from "@/app/contexts/TestGeneratorContext";
import { OutputFormat } from "@/app/types/steps";

export const useCustomSettingsForm = () => {
  const router = useRouter();
  const { state, updateCustomSettings, updateTestTitle, updateOutputFormat } = useTestGenerator();
  const outputFormat = state.customSettings.outputFormat
  const [testTitle, setTestTitle] = useState<string>(state.testTitle);

  const [excludePrevious, setExcludePrevious] = useState<boolean>(
    state.customSettings.excludePrevious
  );

  const handleTitleChange = (value: string) => {
    setTestTitle(value);
  };

  const handleOutputFormatChange = (format: OutputFormat) => {
    updateOutputFormat(format)
  };

  const handleExcludePreviousChange = (checked: boolean) => {
    setExcludePrevious(checked);
  };

  const handleBack = () => {
    router.push("/create/mode");
  };

  const handleNext = () => {
    const finalTitle = testTitle.trim() === "" ? "タイトル" : testTitle;
    updateTestTitle(finalTitle);
    updateCustomSettings({ outputFormat, excludePrevious });
    router.push("/create/result");
  };

  return {
    testTitle,
    handleTitleChange,
    outputFormat,
    handleOutputFormatChange,
    excludePrevious,
    handleExcludePreviousChange,
    handleBack,
    handleNext,
  };
};
