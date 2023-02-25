import React from "react";
import styles from "./Hero.module.css";
import hero from "../../images/hero.png";

export default function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.text}>
					<h2>
						Podés Ser El Rápido En Llevar Tu <span>Comida</span>
					</h2>
					<p>
						Nuestro trabajo es llegar a tu puerta con riquisima comida y un
						rapido delivery
					</p>
					<div className={styles.botones}>
						<a href="#1" className={styles.btn}>
							Empezar
						</a>
						<a href="#1" className={styles.btn}>
							<i class="bx bxs-right-arrow"></i>Ver Video
						</a>
					</div>
				</div>
				<img src={hero} alt="Hero" />
			</div>
		</div>
	);
}
