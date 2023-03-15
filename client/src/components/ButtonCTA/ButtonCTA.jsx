import React from "react";
import styles from "./ButtonCTA.module.css";
export default function ButtonCTA(props) {
	return (
		<div
			className={styles.buttonCTA}
			onClick={() => {
				props.fc();
			}}
		>
			<i class="bx bx-money"></i>Hacer el pedido
		</div>
	);
}
