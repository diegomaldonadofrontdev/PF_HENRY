import React from "react";
import {
	addAmount,
	substractAmount,
	deleteProduct,
} from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import styles from "./CardCart.module.css";

export default function CardCart(props) {
	const dispatch = useDispatch();

	function addHandler() {
		dispatch(addAmount(props.idProduct, props.idCommerce));
	}

	function substractHandler() {
		dispatch(substractAmount(props.idProduct, props.idCommerce));
	}

	function deleteHandler() {
		dispatch(deleteProduct(props.idProduct, props.idCommerce));
	}

	return (
		<div className={styles.card__Cart}>
			<div
				className={styles.icon__container}
				onClick={() => {
					deleteHandler();
				}}
			>
				<i class="bx bx-trash"></i>
			</div>

			<div className={styles.img__container}>
				<img src={props.image} alt="" />
			</div>
			<div className={styles.card__description}>
				<div className={styles.description__text}>
					<h4>{props.name}</h4>
					<p>${props.precio}</p>
				</div>
				<div className={styles.cantidad}>
					<p>{props.cantidad}</p>
					<div className={styles.button__container}>
						<div
							className={styles.arrow__container}
							onClick={() => {
								addHandler();
							}}
						>
							<i class="bx bxs-up-arrow"></i>
						</div>
						<div className={styles.line}></div>
						<div
							className={styles.arrow__container}
							onClick={() => {
								substractHandler();
							}}
						>
							<i class="bx bxs-down-arrow"></i>
						</div>
					</div>
				</div>

				<p className={styles.price}>${props.precio * props.cantidad}</p>
			</div>
		</div>
	);
}
