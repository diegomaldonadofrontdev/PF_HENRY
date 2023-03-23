import React from "react";
import styles from "./MiniCardProduct.module.css";
import { useDispatch } from "react-redux";
import { deleteProductByCommerce } from "../../redux/actions/deleteProductByCommerce";

export default function MiniCardProduct({ product, fc, fc2 }) {
	const dispatch = useDispatch();

	function handlerDispatch(id) {
		dispatch(deleteProductByCommerce(id));
	}
	return (
		<div className={styles.miniCardProduct}>
			<div className={styles.img__container}>
				<img src={product.image} alt="" />
			</div>
			<div className={styles.info}>
				<h4>{product.name}</h4>
				<h5>{product.active ? "Disponible" : "No disponible"}</h5>
				<div className={styles.buttons}>
					<button
						onClick={() => {
							fc("edit");
							fc2(product);
						}}
					>
						Editar
					</button>
					<button
						onClick={() => {
							handlerDispatch(product._id);
						}}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
}
