import type { Meta, StoryObj } from "@storybook/react";
import { CustomSettingsFormPresenter } from "@/components/CustomSettingsForm/presenter";

const meta: Meta<typeof CustomSettingsFormPresenter> = {
  title: "Components/CustomSettingsForm",
  component: CustomSettingsFormPresenter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CustomSettingsFormPresenter>;

export const Default: Story = {
  args: {
    testTitle: "デフォルトタイトル",
    handleTitleChange: () => {},
    outputFormat: ["english-to-japanese"],
    handleOutputFormatChange: () => {},
    excludePrevious: false,
    handleExcludePreviousChange: () => {},
    handleBack: () => {},
    handleNext: () => {},
  },
};
