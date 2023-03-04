import React from "react";
import styles from "./OpinionCard.module.css";
import img from "../../images/avatar.jpeg";

export default function OpinionCard(props) {
	return (
		<div className={styles.opinion__card}>
			<div className={styles.container__img}>
				<img src={img} alt="" />
			</div>
			<div className={styles.texto}>
				<h4>{props.name}</h4>
				<p>{props.opinion}</p>
				<div className={styles.rating}>
					<p>Rating:</p>
					<p>{props.rating}</p>
					<i class="bx bxs-star"></i>
				</div>
			</div>
		</div>
	);
}
