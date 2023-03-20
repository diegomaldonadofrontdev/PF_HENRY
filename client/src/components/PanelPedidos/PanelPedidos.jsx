import React from "react";
import { useDispatch } from "react-redux";
import { updateStatusAndPayment } from "../../redux/actions/updateStatusAndPayment";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import PedidoCard from "../PedidoCard/PedidoCard";

import styles from "./PanelPedidos.module.css";

export default function PanelPedidos(props) {
	console.log(props.orders);
	let total = 0;

	const dispatch = useDispatch();

	function handlerStatusAndPayment(e, orderId) {
		if (e.target.name === "Pagos") {
			dispatch(updateStatusAndPayment(orderId, { payment: e.target.value }));
		}
	}
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
														{x.products.map((productos) => {
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
											<td>
												{x.payment}{" "}
												{x.payment === "Pago no recibido" ? (
													<div>
														<button
															value={"MercadoPago"}
															name={"Pagos"}
															onClick={(e) => {
																handlerStatusAndPayment(e, x.orderId);
															}}
														>
															MercadoPago
														</button>
														<button
															value={"Efectivo"}
															name={"Pagos"}
															onClick={(e) => {
																handlerStatusAndPayment(e, x.orderId);
															}}
														>
															Efectivo
														</button>
													</div>
												) : (
													<button
														value={"Pago no recibido"}
														name={"Pagos"}
														onClick={(e) => {
															handlerStatusAndPayment(e, x.orderId);
														}}
													>
														Cancelar Pago
													</button>
												)}
											</td>
											<td>{`${x.client.fullname}, ${x.client.phone}, ${x.client.address}`}</td>
											<td>${x.total}</td>
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
