import React from "react";
import PedidoCard from "../PedidoCard/PedidoCard";

import styles from "./Panel.module.css";

export default function Panel() {
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
