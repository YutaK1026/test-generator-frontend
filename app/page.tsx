import React from "react";
import CardContainer from "@/components/CardContainer";
import { CardItem } from "@/components/CardContainer/presenter";
import TestCreateButton from "@/components/TestCreateButton";

// カードに表示するモックデータ
const cardItems: CardItem[] = [
  {
    id: "1",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=テスト基本機能",
    title: "テストジェネレーター基本機能",
  },
  {
    id: "2",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=APIテスト",
    title: "APIテスト自動化",
  },
  {
    id: "3",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=パフォーマンス",
    title: "パフォーマンステスト",
  },
  {
    id: "4",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=セキュリティ",
    title: "セキュリティテスト",
  },
  {
    id: "5",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=クロスブラウザ",
    title: "クロスブラウザテスト",
  },
  {
    id: "6",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=モバイル",
    title: "モバイルアプリテスト",
  },
  {
    id: "7",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=データ駆動",
    title: "データ駆動テスト",
  },
  {
    id: "8",
    imgSrc: "https://via.placeholder.com/245x180/13BAB3/ffffff?text=CI/CD",
    title: "継続的インテグレーション",
  },
];

export default function Home() {
  return (
    <main>
      <CardContainer cards={cardItems} />
      <TestCreateButton />
    </main>
  );
}
