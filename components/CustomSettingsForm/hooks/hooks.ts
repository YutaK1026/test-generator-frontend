"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTestGenerator } from "@/app/contexts/TestGeneratorContext";
import { OutputFormat } from "@/app/types/steps";

export const useCustomSettingsForm = () => {
  const router = useRouter();
  const { state, updateCustomSettings, updateTestTitle } = useTestGenerator();

  const [testTitle, setTestTitle] = useState<string>(state.testTitle);
  const [outputFormat, setOutputFormat] = useState<OutputFormat[]>(
    state.customSettings.outputFormat
  );
  const [excludePrevious, setExcludePrevious] = useState<boolean>(
    state.customSettings.excludePrevious
  );

  const handleTitleChange = (value: string) => {
    setTestTitle(value);
  };

  const handleOutputFormatChange = (format: OutputFormat) => {
    if (outputFormat.includes(format)) {
      setOutputFormat([]);
    } else {
      setOutputFormat([format]);
    }
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
