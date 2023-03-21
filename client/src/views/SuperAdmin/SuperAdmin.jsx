import React from "react";
import styles from "./SuperAdmin.module.css";
import Header from "../../components/Header/Header";

export default function SuperAdmin() {
	return (
		<div className={styles.superadmin}>
			<Header />
			<div className={styles.container}>
				<div className={styles.lateralnav}>
					<ul>
						<li>Comercios</li>
						<li>Productos</li>
						<li>Pedidos</li>
						<li>Reviews</li>
						<li>Clientes</li>
						<li>Ganancias</li>
					</ul>
				</div>
				<div className={styles.content}>
                    <div></div>
                </div>
			</div>
		</div>
	);
}
