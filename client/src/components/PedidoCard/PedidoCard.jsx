import React from "react";
import styles from "./PedidoCard.module.css";
import mila from "./../../images/milanesa.avif";
import ButtonDashboard from "../ButtonDashboard/ButtonDashboard";

export default function PedidoCard() {
	return (
		<div className={styles.pedidoCard}>
			<div className={styles.imgContainer}>
				<img src={mila} alt="" />
			</div>
			<div className={styles.datosPedido}>
				<div>
					<h4>Milanesa Napolitana con fritas</h4>
					<p className={styles.datos}>Av. Medrano 600</p>

					<p className={styles.datos}>12:30hs</p>
				</div>

				<div className={styles.estado_pedido}>
					<p>Estado del pedido</p>
					<div>
						<div>Aceptado</div>
					</div>
				</div>
				<div className={styles.estado_entrega}>
					<p>Estado del envio</p>
					<div>
						<ButtonDashboard texto="Enviado" />
					</div>
				</div>
				<div className={styles.estado_entrega}>
					<p>Estado del pago</p>
					<div>
						<ButtonDashboard texto="Recibido" />
					</div>
				</div>
			</div>
		</div>
	);
}
