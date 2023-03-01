import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import styles from "./Resumen.module.css";
export default function Resumen() {
	return (
		<div className={styles.resumen}>
			<div className={styles.container}>
				<h3>Resumen / Anuncios</h3>
				<div className={styles.estado}>
					<p>
						Tu negocio se encuentra: <span>Abierto</span>
					</p>
					<ButtonPrimary texto="Cambiar" />
				</div>
				<p>Tenes XX pedidos sin aceptar</p>
				<p>Tenes XX pedidos sin enviar</p>
			</div>
		</div>
	);
}
