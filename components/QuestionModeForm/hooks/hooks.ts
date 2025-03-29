"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionMode } from "@/app/types/steps";
import { useTestGenerator } from "@/app/contexts/TestGeneratorContext";

export const useQuestionModeForm = () => {
  const router = useRouter();
  const { state, updateQuestionMode, updateWordCount } = useTestGenerator();
  const [wordCountInput, setWordCountInput] = useState<string>(
    state.wordCount.toString()
  );
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleModeChange = (mode: QuestionMode) => {
    updateQuestionMode(mode);
    setIsError(false);
    setErrorMessage("");
  };

  const handleWordCountChange = (value: string) => {
    if (value === "" || /^\d+$/.test(value)) {
      setWordCountInput(value);
      setIsError(false);
      setErrorMessage("");
    }
  };

  const handleBack = () => {
    router.push("/create");
  };

  const handleNext = () => {
    if (wordCountInput === "") {
      setIsError(true);
      setErrorMessage("単語数を入力してください");
      return;
    }

    const count = parseInt(wordCountInput, 10);
    if (isNaN(count) || count <= 0) {
      setIsError(true);
      setErrorMessage("有効な単語数を入力してください");
      return;
    }

    updateWordCount(count);
    router.push("/create/custom");
  };

  return {
    questionMode: state.questionMode,
    handleModeChange,
    wordCount: wordCountInput,
    handleWordCountChange,
    isError,
    errorMessage,
    handleBack,
    handleNext,
  };
};
