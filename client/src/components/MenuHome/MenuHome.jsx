import React from "react";
import styles from "./MenuHome.module.css";
import img from "../../images/pizza.jpg";

export default function MenuHome() {
	return (
		<div className={styles.menu__home}>
			<div className={styles.container}>
				<div className={styles.menu__header}>
					<p>Nuestro Menu</p>
					<h2>Un menu que siempre es tentador</h2>
				</div>
				<div className={styles.menu__nav}>
					<a href="a">Hamburguesas</a>
					<a href="a">Pizzas</a>
					<a href="a">Pastas</a>
					<a href="a">Sanguches</a>
					<a href="a">Bebidas</a>
				</div>
				<div className={styles.menu__cards}>
					<div className={styles.menu__card}>
						<div className={styles.fondo}>
							<img src={img} alt="" />
						</div>
						<div className={styles.card__info}>
							<h4>Pizza Italiana</h4>
							<p>$100</p>
							<p>Comprar</p>
						</div>
					</div>
					<div className={styles.menu__card}>
						<div className={styles.fondo}>
							<img src={img} alt="" />
						</div>
						<div className={styles.card__info}>
							<h4>Pizza Italiana</h4>
							<p>$100</p>
							<p>Comprar</p>
						</div>
					</div>
					<div className={styles.menu__card}>
						<div className={styles.fondo}>
							<img src={img} alt="" />
						</div>
						<div className={styles.card__info}>
							<h4>Pizza Italiana</h4>
							<p>$100</p>
							<p>Comprar</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
