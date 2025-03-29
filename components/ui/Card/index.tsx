import React from "react";
import styles from "./index.module.scss";

interface CardProps {
  imgSrc: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ imgSrc, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={title} className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
