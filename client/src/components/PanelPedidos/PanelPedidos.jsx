import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatusAndPayment } from "../../redux/actions/updateStatusAndPayment";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import PedidoCard from "../PedidoCard/PedidoCard";

import styles from "./PanelPedidos.module.css";

export default function PanelPedidos(props) {

	const [statusPedido, setStatusPedido] = useState([
		{ texto: "Pasar a pendiente", status: "Pendiente" },
		{ texto: "Aceptar", status: "Aceptado" },
		{ texto: "Finalizar", status: "Finalizado" },
		{ texto: "Rechazar", status: "Rechazado" },
	]);

	const dispatch = useDispatch();

	function handlerStatusAndPayment(e, o) {
		if (e.target.name === "Pagos") {
			dispatch(updateStatusAndPayment(o.orderId, { payment: e.target.value }));
		}
		if (e.target.name === "Status") {
			if (e.target.value === "Rechazado" && o.payment !== "Pago no recibido") {
				dispatch(
					updateStatusAndPayment(o.orderId, {
						status: e.target.value,
					})
				);
			}
			dispatch(updateStatusAndPayment(o.orderId, { status: e.target.value }));
		}
	}

	return (
		<div className={styles.panel}>
			<div className={styles.container}>
				<div className={styles.pedidosContainer}>
					<div id="mispedidos" className={styles.mispedidos}>
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
											<td>
												{x.status}
												{x.status !== "Rechazado" &&
													statusPedido.map((s) => {
														if (x.status !== s.status) {
															return (
																<div>
																	<button
																		value={s.status}
																		name={"Status"}
																		onClick={(e) => {
																			handlerStatusAndPayment(e, x);
																		}}
																	>
																		{s.texto}
																	</button>
																</div>
															);
														}
													})}
											</td>
											<td>
												{x.payment}{" "}
												{x.payment === "Pago no recibido" &&
												x.status === "Aceptado" ? (
													<div>
														<button
															value={"MercadoPago"}
															name={"Pagos"}
															onClick={(e) => {
																handlerStatusAndPayment(e, x);
															}}
														>
															MercadoPago
														</button>
														<button
															value={"Efectivo"}
															name={"Pagos"}
															onClick={(e) => {
																handlerStatusAndPayment(e, x);
															}}
														>
															Efectivo
														</button>
													</div>
												) : null}
												{x.status !== "Rechazado" &&
												x.payment !== "Pago no recibido" ? (
													<div>
														<button
															value={"Pago no recibido"}
															name={"Pagos"}
															onClick={(e) => {
																handlerStatusAndPayment(e, x);
															}}
														>
															Cancelar pago
														</button>
													</div>
												) : null}
												{x.status === "Rechazado" &&
												(x.payment === "MercadoPago" ||
													x.payment === "Efectivo") ? (
													<div>
														<button
															value={"Devuelto"}
															name={"Pagos"}
															onClick={(e) => {
																handlerStatusAndPayment(e, x);
															}}
														>
															Devolver Pago
														</button>
													</div>
												) : null}
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
