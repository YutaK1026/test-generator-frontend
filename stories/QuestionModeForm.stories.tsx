import type { Meta, StoryObj } from "@storybook/react";
import { QuestionModeFormPresenter } from "@/components/QuestionModeForm/presenter";

const meta: Meta<typeof QuestionModeFormPresenter> = {
  title: "Components/QuestionModeForm",
  component: QuestionModeFormPresenter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof QuestionModeFormPresenter>;

export const Default: Story = {
  args: {
    questionMode: "random",
    handleModeChange: () => {},
    wordCount: "",
    handleWordCountChange: () => {},
    isError: false,
    errorMessage: "",
    handleBack: () => {},
    handleNext: () => {},
  },
};

export const WithInput: Story = {
  args: {
    questionMode: "random",
    handleModeChange: () => {},
    wordCount: "10",
    handleWordCountChange: () => {},
    isError: false,
    errorMessage: "",
    handleBack: () => {},
    handleNext: () => {},
  },
};

export const WithError: Story = {
  args: {
    questionMode: "random",
    handleModeChange: () => {},
    wordCount: "",
    handleWordCountChange: () => {},
    isError: true,
    errorMessage: "単語数を入力してください",
    handleBack: () => {},
    handleNext: () => {},
  },
};

export const RangeMode: Story = {
  args: {
    questionMode: "range",
    handleModeChange: () => {},
    wordCount: "20",
    handleWordCountChange: () => {},
    isError: false,
    errorMessage: "",
    handleBack: () => {},
    handleNext: () => {},
  },
};
