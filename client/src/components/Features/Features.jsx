import React from "react";
import styles from "./Features.module.css";
import icon from "../../images/icon.webp";

export default function Features() {
	return (
		<div className={styles.features}>
			<div className={styles.container}>
				<div className={styles.features__header}>
					<h3>Tu Forma Favorita De Pedir Comida</h3>
					<p>
						Tenes que comprar algo pero te da fiaca salir? Hoy quedarte en casa
						puede tener otra onda
					</p>
				</div>

				<div className={styles.features__icons}>
					<div className={styles.feature}>
						<img src={icon} alt="Icon" className={styles.feature__img} />
						<div className={styles.texto}>
							<h3>Ciudades</h3>
							<p>Buenos Aires, Córdoba, Tucumán, Salta</p>
						</div>
					</div>
					<div className={styles.feature}>
						<img src={icon} alt="Icon" className={styles.feature__img} />
						<div className={styles.texto}>
							<h3>Barrios</h3>
							<p>Almagro, Palermo, Boedo, Lanus, Salsi</p>
						</div>
					</div>
					<div className={styles.feature}>
						<img src={icon} alt="Icon" className={styles.feature__img} />
						<div className={styles.texto}>
							<h3>Pedidos</h3>
							<p>Sushi, Cerveza, Pizzas, Empanadas, Helados</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
