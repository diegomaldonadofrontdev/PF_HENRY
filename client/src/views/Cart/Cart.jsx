import React, { useEffect, useState } from "react";
import CardCart from "../../components/CardCart/CardCart";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

export default function Cart({ id }) {
	const carritos = useSelector((state) => state.carritos);

	const [carrito, setCarrito] = useState({ ...carritos });

	useEffect(() => {
		if (carritos[id]) {
			setCarrito({ ...carritos[id] });
		}
	}, [carritos]);

	return (
		<div className={styles.cart}>
			<div className={styles.cart__header}>
				<h3>Tu pedido</h3>
			</div>
			<ul>
				{carrito.data &&
					carrito.data.map((x) => {
						return (
							<CardCart
								idProduct={x.id}
								idCommerce={id}
								key={x.name}
								name={x.name}
								cantidad={x.cantidad}
								precio={x.price}
								image={x.img}
							/>
						);
					})}
			</ul>
			<div className={styles.total__container}>
				<p>
					Total: <span>${carrito?.total || 0}</span>
				</p>
				<ButtonCTA />
			</div>
		</div>
	);
}
