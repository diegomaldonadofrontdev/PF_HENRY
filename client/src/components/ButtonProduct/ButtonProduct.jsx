import React from "react";
import styles from "./ButtonProduct.module.css";

export default function ButtonProduct(props) {
	return (
		<div className={styles.button__product} onClick={props.fc}>
			Agregar
		</div>
	);
}
