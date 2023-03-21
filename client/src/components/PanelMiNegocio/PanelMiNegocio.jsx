import React from "react";
import styles from "./PanelMiNegocio.module.css";

export default function PanelMiNegocio() {
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
					<tr>
						<td>1</td>
						<td>pgarcia</td>
						<td>Descripcion</td>
						<td>$1000</td>
						<td>1/1/1</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
