import React from "react";
import styles from "./SliderSmall.module.css";

export default function SliderSmall(props) {
	const allCommerces = props.commerces;
	return (
		<div className={styles.slider__small}>
			<div className={styles.container}>
				<h4>Los mejores comercios</h4>
				<div className={styles.carrusel}>
					{allCommerces.map((x) => (
						<div className={styles.container__img} key={x._id}>
							<img src={x.image} alt={x.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
