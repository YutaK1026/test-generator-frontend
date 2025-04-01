import type { Meta, StoryObj } from "@storybook/react";
import { TestResultFormPresenter } from "@/components/TestResultForm/presenter";

const meta: Meta<typeof TestResultFormPresenter> = {
  title: "Components/TestResultForm",
  component: TestResultFormPresenter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TestResultFormPresenter>;

import { TestGeneratorState } from "@/app/types/steps";

const defaultState: TestGeneratorState = {
  testTitle: "デフォルトタイトル",
  vocabularyType: "LEAP 英単語帳",
  questionMode: "random",
  wordCount: 20,
  customSettings: {
    outputFormat: "english-to-japanese",
    difficulty: "normal",
    excludePrevious: false,
  },
};

export const Default: Story = {
  args: {
    state: defaultState,
    handleBack: () => {},
    handleDownload: () => {},
    handleRetry: () => {},
  },
};
