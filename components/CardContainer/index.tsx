import React from "react";
import { CardContainerPresenter, CardItem } from "@/components/CardContainer/presenter";

interface CardContainerProps {
  cards: CardItem[];
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return <CardContainerPresenter cards={cards} />;
};

export default CardContainer;
