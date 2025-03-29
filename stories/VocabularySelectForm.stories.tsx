import type { Meta, StoryObj } from "@storybook/react";
import { VocabularySelectFormPresenter } from "@/components/VocabularySelectForm/presenter";

const meta: Meta<typeof VocabularySelectFormPresenter> = {
  title: "Components/VocabularySelectForm",
  component: VocabularySelectFormPresenter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof VocabularySelectFormPresenter>;

export const Default: Story = {
  args: {
    selectedVocabulary: "LEAP 英単語帳",
    handleVocabularyChange: () => {},
    handleNext: () => {},
  },
};
