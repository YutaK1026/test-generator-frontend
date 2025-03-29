"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { QuestionMode, TestGeneratorState } from "@/app/types/steps";
import type { VocabularyType } from "@/app/types/vocabulary";

const initialState: TestGeneratorState = {
  testTitle: "",
  vocabularyType: "LEAP 英単語帳",
  questionMode: "random",
  wordCount: 20,
  customSettings: {
    outputFormat: ["english-to-japanese"],
    excludePrevious: false,
  },
};

interface TestGeneratorContextType {
  state: TestGeneratorState;
  updateTestTitle: (title: string) => void;
  updateVocabularyType: (type: VocabularyType) => void;
  updateQuestionMode: (mode: QuestionMode) => void;
  updateWordCount: (count: number) => void;
  updateCustomSettings: (settings: Record<string, unknown>) => void;
}

const TestGeneratorContext = createContext<
  TestGeneratorContextType | undefined
>(undefined);

export const TestGeneratorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<TestGeneratorState>(initialState);

  const updateTestTitle = (title: string) => {
    setState((prev) => ({ ...prev, testTitle: title }));
  };

  const updateVocabularyType = (type: VocabularyType) => {
    setState((prev) => ({ ...prev, vocabularyType: type }));
  };

  const updateQuestionMode = (mode: QuestionMode) => {
    setState((prev) => ({ ...prev, questionMode: mode }));
  };

  const updateWordCount = (count: number) => {
    setState((prev) => ({ ...prev, wordCount: count }));
  };

  const updateCustomSettings = (settings: Record<string, unknown>) => {
    setState((prev) => ({
      ...prev,
      customSettings: { ...prev.customSettings, ...settings },
    }));
  };

  return (
    <TestGeneratorContext.Provider
      value={{
        state,
        updateTestTitle,
        updateVocabularyType,
        updateQuestionMode,
        updateWordCount,
        updateCustomSettings,
      }}
    >
      {children}
    </TestGeneratorContext.Provider>
  );
};

export const useTestGenerator = (): TestGeneratorContextType => {
  const context = useContext(TestGeneratorContext);
  if (context === undefined) {
    throw new Error(
      "useTestGenerator must be used within a TestGeneratorProvider"
    );
  }
  return context;
};
