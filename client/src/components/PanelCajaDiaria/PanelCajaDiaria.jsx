import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./PanelCajaDiaria.module.css";

export default function PanelCajaDiaria() {
	const cajaDiaria = useSelector((state) => state.ordersCommerces);

	const [caja, setCaja] = useState({
		efectivo: 0,
		mercadoPago: 0,
		total: 0,
		data: [],
	});

	useEffect(() => {
		const res = cajaDiaria.filter(
			(x) => x.payment !== "Pago no recibido" && x.payment !== "Devuelto"
		);

		setCaja({ ...caja, data: res });
	}, [cajaDiaria]);

	useEffect(() => {
		caja.data &&
			caja.data.forEach((x) => {
				if (x.payment === "MercadoPago") {
					setCaja({
						...caja,
						mercadoPago: (caja.mercadoPago += x.total),
						total: (caja.total += x.total),
					});
				} else {
					setCaja({
						...caja,
						efectivo: (caja.efectivo += x.total),
						total: (caja.total += x.total),
					});
				}
			});
	}, [caja.data]);

	return (
		<div className={styles.panel__cajaDiaria}>
			<div className={styles.container}>
				<div className={styles.table__container}>
					<table>
						<tr>
							<th>Nro</th>
							<th>Fecha</th>
							<th>Cliente</th>
							<th>Producto</th>
							<th>Medio de Pago</th>
							<th>Monto</th>
						</tr>
						{caja.data.map((x) => (
							<tr>
								<td>{x.orderId}</td>
								<td>{x.createdAt}</td>
								<td>{x.client.fullname}</td>
								<td>{x.products.map((x) => x.name)}</td>
								<td>{x.payment}</td>
								<td>{x.total}</td>
							</tr>
						))}
					</table>
				</div>

				<div className={styles.statusGains}>
					<div>{`Caja Total: ${caja.total}`}</div>
					<div>{`Caja Efectivo: ${caja.efectivo}`}</div>
					<div>{`Caja Mercado Pago: ${caja.mercadoPago}`}</div>
				</div>
			</div>
			<div className={styles.buttons}>
				<div>
					<a href="#">Cerrar Caja</a>
					<a href="#">Registrar retiro</a>
					<a href="#">Imprimir</a>
				</div>
			</div>
		</div>
	);
}
