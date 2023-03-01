import React from "react";
import styles from "./Features.module.css";
import icon from "../../images/icon.webp";

export default function Features() {
	return (
		<div className={styles.features}>
			<div className={styles.container}>
				<div className={styles.features__header}>
					<p>Que ofrecemos</p>
					<h2>Tu Forma Favorita De Pedir Comida</h2>
				</div>

				<div className={styles.features__icons}>
					<div className={styles.feature}>
						<img src={icon} alt="Icon" className={styles.feature__img} />
						<h3>Facil de Pedir</h3>
					</div>
					<div className={styles.feature}>
						<img src={icon} alt="Icon" className={styles.feature__img} />
						<h3>Envio Rapido</h3>
					</div>
					<div className={styles.feature}>
						<img src={icon} alt="Icon" className={styles.feature__img} />
						<h3>La mejor calidad</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
