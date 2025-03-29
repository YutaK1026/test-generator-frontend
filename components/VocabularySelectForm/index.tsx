"use client";

import React from "react";
import { VocabularySelectFormPresenter } from "./presenter";
import { useVocabularySelectForm } from "./hooks/hooks";

export const VocabularySelectForm: React.FC = () => {
  const { selectedVocabulary, handleVocabularyChange, handleNext } =
    useVocabularySelectForm();

  return (
    <VocabularySelectFormPresenter
      selectedVocabulary={selectedVocabulary}
      handleVocabularyChange={handleVocabularyChange}
      handleNext={handleNext}
    />
  );
};
