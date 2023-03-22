import React from "react";
import styles from "./CardPrimary.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";

export default function CardPrimary(props) {
	return (
    <div className={styles.card__primary}>
      <div className={styles.card__imgContainer}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__info}>
          <h3>{props.titulo}</h3>
          <p>{props.texto}</p>
        </div>
        <div className={styles.btn__container}>
          <Link to={props.to}>
            <ButtonPrimary
              texto="Conocer más"
              icon={<i class='bx bxs-chevron-right-circle' ></i>}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
