import React from "react";
import PedidoCard from "../PedidoCard/PedidoCard";

import styles from "./PanelPedidos.module.css";

export default function PanelPedidos() {
	return (
		<div className={styles.panel}>
			<div className={styles.container}>
				<div className={styles.pedidosContainer}>
					<PedidoCard />
					<PedidoCard />
					<PedidoCard />
					<PedidoCard />
					<PedidoCard />
					<PedidoCard />
				</div>
			</div>
		</div>
	);
}
