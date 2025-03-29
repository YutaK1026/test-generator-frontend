import type { Meta, StoryObj } from "@storybook/react";
import CardContainer from "@/components/CardContainer";
import { CardItem } from "@/components/CardContainer/presenter";

const meta: Meta<typeof CardContainer> = {
  title: "Components/CardContainer",
  component: CardContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardContainer>;

const sampleCards: CardItem[] = [
  {
    id: "1",
    imgSrc: "https://via.placeholder.com/245x180",
    title: "テストジェネレーター基本機能",
  },
  {
    id: "2",
    imgSrc: "https://via.placeholder.com/245x180",
    title: "APIテスト自動化",
  },
  {
    id: "3",
    imgSrc: "https://via.placeholder.com/245x180",
    title: "パフォーマンステスト",
  },
  {
    id: "4",
    imgSrc: "https://via.placeholder.com/245x180",
    title: "セキュリティテスト",
  },
];

export const Default: Story = {
  args: {
    cards: sampleCards,
  },
};

// 多数のカードを表示するケース
const manyCards: CardItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  imgSrc: "https://via.placeholder.com/245x180",
  title: `カード ${i + 1}`,
}));

export const ManyCards: Story = {
  args: {
    cards: manyCards,
  },
};
