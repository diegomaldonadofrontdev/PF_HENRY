import React from "react";
import styles from "./OpinionCarrusel.module.css";
import img from "../../images/avatar.jpeg";

export default function OpinionCarrusel() {
	return (
		<div className={styles.opinionCard}>
			<p className={styles.opinion}>
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
				consequatur labore. Pariatur distinctio eaque temporibus harum. Pariatur
				a dicta distinctio recusandae quas architecto veritatis nemo reiciendis,
				ex quod, nostrum voluptates!"
			</p>
			<div className={styles.person}>
				<img src={img} alt="avatar" />
				<div className={styles.person__description}>
					<h4>Nombre de Persona</h4>
					<p>Local en el que trabaja</p>
					<div className={styles.rating}>
						<i class="bx bxs-star"></i>
						<i class="bx bxs-star"></i>
						<i class="bx bxs-star"></i>
					</div>
				</div>
			</div>
		</div>
	);
}
