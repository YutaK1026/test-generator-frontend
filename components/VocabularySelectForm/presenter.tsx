"use client";

import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaChevronDown } from "react-icons/fa";
import styles from "./presenter.module.scss";
import type { VocabularyType } from "@/app/types/vocabulary";
import { FormLayout } from "@/components/ui/FormLayout";
import { NavigationButtons } from "@/components/ui/NavigationButtons";
import { TEST_GENERATOR_STEPS } from "@/app/types/steps";

export interface VocabularySelectFormPresenterProps {
  selectedVocabulary: VocabularyType;
  handleVocabularyChange: (value: VocabularyType) => void;
  handleNext: () => void;
}

export const VocabularySelectFormPresenter: React.FC<
  VocabularySelectFormPresenterProps
> = ({ selectedVocabulary, handleVocabularyChange, handleNext }) => {
  return (
    <FormLayout
      steps={TEST_GENERATOR_STEPS}
      currentStep={1}
      title="使用する単語帳を選択してください"
    >
      <div className={styles.formContent}>
        <div className={styles.selectContainer}>
          <Select.Root
            value={selectedVocabulary}
            onValueChange={(value) =>
              handleVocabularyChange(value as VocabularyType)
            }
          >
            <Select.Trigger className={styles.selectTrigger}>
              <Select.Value>{selectedVocabulary}</Select.Value>
              <Select.Icon className={styles.selectIcon}>
                <FaChevronDown />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className={styles.selectContent}>
                <Select.Viewport className={styles.selectViewport}>
                  <Select.Item
                    value="LEAP 英単語帳"
                    className={styles.selectItem}
                  >
                    <Select.ItemText>LEAP 英単語帳</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <NavigationButtons onNext={handleNext} showBackButton={false} />
      </div>
    </FormLayout>
  );
};
