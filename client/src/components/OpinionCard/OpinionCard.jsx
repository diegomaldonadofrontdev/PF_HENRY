import React from "react";
import styles from "./OpinionCard.module.css";

export default function OpinionCard(props) {
  return (
    <div className={styles.opinion__card}>
      <div className={styles.container__img}>
        <img src={props.image} alt="" />
        <h4>{props.name}</h4>
      </div>
      <div className={styles.texto}>
        <p>{props.opinion}</p>
        <div className={styles.rating}>
          <p>{props.rating}</p>
          <i class="bx bxs-star"></i>
        </div>
      </div>
    </div>
  );
}
