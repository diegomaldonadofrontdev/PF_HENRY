import React from "react";
import styles from "./SliderSmall.module.css";
import img1 from "../../images/logo_burger.png";
import img2 from "../../images/logo_mc.png";
import img3 from "../../images/logo_freddo.png";
import img4 from "../../images/logo_mostaza.png";
import img5 from "../../images/logo_clubdelamilanesa.webp";
import img6 from "../../images/logo_havanna.png";
import img7 from "../../images/logo_carrefour.png";
import img8 from "../../images/logo_subway.png";

export default function SliderSmall() {
	return (
		<div className={styles.slider__small}>
			<div className={styles.container}>
				<h4>Los mejores comercios</h4>
				<div className={styles.carrusel}>
					<div className={styles.container__img}>
						<img src={img1} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img2} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img3} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img4} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img5} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img6} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img7} alt="logo_burger" />
					</div>
					<div className={styles.container__img}>
						<img src={img8} alt="logo_burger" />
					</div>
				</div>
			</div>
		</div>
	);
}
