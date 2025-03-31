import React from "react";
import Link from "next/link";
import styles from "./presenter.module.scss";
import Card from "@/components/ui/Card";

export interface CardItem {
  id: string;
  imgSrc: string;
  title: string;
}

export interface CardContainerPresenterProps {
  cards: CardItem[];
}

export const CardContainerPresenter: React.FC<CardContainerPresenterProps> = ({
  cards,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        {cards.map((card) => (
          <Link
            key={card.id}
            href={`/test/${card.id}`}
            className={styles.cardLink}
          >
            {" "}
            <div className={styles.cardWrapper}>
              <Card imgSrc={card.imgSrc} title={card.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
