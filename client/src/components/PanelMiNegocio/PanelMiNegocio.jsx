import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByCommerce } from "../../redux/actions/getOrdersByCommerce";

import styles from "./PanelMiNegocio.module.css";

export default function PanelMiNegocio() {
	const ordersCommerce = useSelector((state) => state.ordersCommerces);
	console.log(ordersCommerce);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getOrdersByCommerce());
	// }, []);

	return (
		<div className={styles.panel__miNegocio}>
			<div className={styles.miNegocio__body}>
				<div className={styles.miNegocio__historial}>
					<div className={styles.historial__filters}>
						<h4>Buscar</h4>
						<form action="">
							<div>
								<input type="text" placeholder="Ingresar numero de orden" />
							</div>
							<input type="submit" value={"Buscar"} className={styles.submit} />
						</form>
					</div>
				</div>
				<div className={styles.membresia}>
					<h4>Estado de membresia</h4>
					<p>
						La membresia del comercio se encuentra activa hasta el dia
						10/10/2023
					</p>
					<p>Gracias por su confianza!</p>
				</div>
			</div>
			<div className={styles.resultadosVentas}>
				<table>
					<tr>
						<th>Nro</th>
						<th>Usuario</th>
						<th>Compra</th>
						<th>Precio</th>
						<th>Fecha</th>
					</tr>
					{ordersCommerce?.map((x) => (
						<tr>
							<td>{x.orderId}</td>
							<td>{x.client.fullname}</td>
							<td>{x.products.map((x) => x.name)}</td>
							<td>{x.total}</td>
							<td>{x.createdAt}</td>
						</tr>
					))}
				</table>
				<div className={styles.form__commerce}>
					<form action="">
						<label htmlFor="">Dato</label>
						<input type="text" />
						<label htmlFor="">Dato</label>
						<input type="text" />
						<label htmlFor="">Dato</label>
						<input type="text" />
						<label htmlFor="">Dato</label>
						<input type="text" />
						<label htmlFor="">Dato</label>
						<input type="text" />
					</form>
				</div>
			</div>
		</div>
	);
}
