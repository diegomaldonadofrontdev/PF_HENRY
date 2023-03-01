import React from "react";
import styles from "./PedidoCard.module.css";
import mila from "./../../images/milanesa.avif";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function PedidoCard() {
	return (
		<div className={styles.pedidoCard}>
			<div className={styles.imgContainer}>
				<img src={mila} alt="" />
			</div>
			<div className={styles.datosPedido}>
				<div>
					<p>Nombre del producto</p>
					<p>Direccion de entrega</p>

					<p>Horario del pedido</p>
				</div>

				<div>
					<p>Estado (pendiente/aceptado)</p>
					<ButtonPrimary texto="Ver Datos" />
				</div>
				<div>
					<p>Preparado / Enviado / Entregado</p>
					<ButtonPrimary texto="Cambiar" />
				</div>
			</div>
		</div>
	);
}
