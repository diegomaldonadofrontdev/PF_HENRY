import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import PedidoCard from "../PedidoCard/PedidoCard";

import styles from "./PanelPedidos.module.css";

export default function PanelPedidos(props) {
	console.log(props.orders);
	let total = 0;
	return (
		<div className={styles.panel}>
			<div className={styles.container}>
				<div className={styles.pedidosContainer}>
					<div id="mispedidos">
						<h2>Mi pedidos</h2>
						<div className={styles.view__container}>
							<div className={styles.user__informacion}>
								<table>
									<tr>
										<th>Nro de compra</th>
										<th>Fecha</th>
										<th>Descripción</th>
										<th>Estado del pedido</th>
										<th>Estado del pago</th>
										<th>Datos de usuario</th>
										<th>Total</th>
									</tr>

									{props.orders.map((x) => (
										<tr>
											<td className={styles.orderId}>{x.orderId}</td>
											<td>{x.createdAt}</td>
											<td>
												<ul className={styles.descripcionOrder}>
													<li>
														{x.products[0].data.map((productos) => {
															total += productos.price * productos.cantidad;
															return (
																<li>
																	-
																	{`${productos.name} ($${productos.price}) x ${
																		productos.cantidad
																	}. Total: $${
																		productos.price * productos.cantidad
																	}`}
																</li>
															);
														})}
													</li>
												</ul>
											</td>
											<td>{x.status}</td>
											<td>{x.payment}</td>
											<td>{`${x.client.fullname}, ${x.client.phone}, ${x.client.address}`}</td>
											<td>${total}</td>
										</tr>
									))}
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
