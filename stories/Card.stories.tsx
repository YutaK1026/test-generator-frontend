import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/ui/Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/245x180",
    title: "カードタイトル",
  },
};

export const LongTitle: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/245x180",
    title: "これは非常に長いカードタイトルで、複数行にわたって表示されます。テキストが切り詰められるかどうかを確認するためのものです。",
  },
};
