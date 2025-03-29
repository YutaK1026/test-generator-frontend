"use client";

import { useRouter } from "next/navigation";
import { useTestGenerator } from "@/app/contexts/TestGeneratorContext";
import type { VocabularyType } from "@/app/types/vocabulary";

export const useVocabularySelectForm = () => {
  const router = useRouter();
  const { state, updateVocabularyType } = useTestGenerator();

  const handleVocabularyChange = (value: VocabularyType) => {
    updateVocabularyType(value);
  };

  const handleNext = () => {
    router.push("/create/mode");
  };

  return {
    selectedVocabulary: state.vocabularyType,
    handleVocabularyChange,
    handleNext,
  };
};
