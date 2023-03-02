import React from "react";
import styles from "./SliderSmall.module.css";
import img from "../../images/logo_burger.png";

export default function SliderSmall() {
	return (
		<div className={styles.slider__small}>
			<div className={styles.container}>
				<h4>Los mejores comercios</h4>
				<div className={styles.carrusel}>
					<div className={styles.container__img}>
						<img src={img} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img} alt="logo_burger" />
					</div>
				</div>
			</div>
		</div>
	);
}
