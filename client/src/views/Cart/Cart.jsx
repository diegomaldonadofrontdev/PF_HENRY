import React, { useEffect, useState } from "react";
import CardCart from "../../components/CardCart/CardCart";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

export default function Cart({ id }) {
	const carritos = useSelector((state) => state.carritos);

    const [carrito, setCarrito] = useState({
		idCommerce: "",
		data: [],
		total: 0,
	});

	// const [carritoRedux, setCarritoRedux] = useState({});

	// useEffect(() => {
	// 	setCarritoRedux(carritos?.find((x) => x.idCommerce === id));
	// }, [carritos]);

	useEffect(() => {
		console.log("dentro: " + carritos);

		setCarrito(carritos?.find((x) => x.idCommerce === id));
	}, [carritos.length]);

	console.log("fuera:" + carritos);

	return (
		<div className={styles.cart}>
			<div className={styles.cart__header}>
				<h3>Tu pedido</h3>
			</div>
			<ul>
				{carrito?.data.map((x) => (
					<CardCart name={x.name} key={x.name} />
				))}
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
