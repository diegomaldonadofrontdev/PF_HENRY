import React from "react";
import styles from "./PanelMiNegocio.module.css";

export default function PanelMiNegocio() {
	return (
		<div className={styles.panel__miNegocio}>
			<div className={styles.miNegocio__header}>
				<div className={styles.container}>
					<table>
						<tr>
							<th>Nro</th>
							<th>Usuario</th>
							<th>Nombre y Apellido</th>
							<th>Rol</th>
							<th>Pin</th>
						</tr>
						<tr>
							<td>1</td>
							<td>pgarcia</td>
							<td>Patricio Garcia</td>
							<td>Vendedor</td>
							<td>****</td>
							<td className={styles.crossIcon}>
								<i class="bx bx-x"></i>
							</td>
							<td className={styles.editIcon}>
								<i class="bx bx-edit"></i>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>mbustos</td>
							<td>Mariano Bustos</td>
							<td>Admin</td>
							<td>****</td>
							<td className={styles.crossIcon}>
								<i class="bx bx-x"></i>
							</td>
							<td className={styles.editIcon}>
								<i class="bx bx-edit"></i>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>kledesma</td>
							<td>Karina Ledesma</td>
							<td>Encargada</td>
							<td>****</td>
							<td className={styles.crossIcon}>
								<i class="bx bx-x"></i>
							</td>
							<td className={styles.editIcon}>
								<i class="bx bx-edit"></i>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>jreina</td>
							<td>Jimena Reina</td>
							<td>Vendedor</td>
							<td>****</td>
							<td className={styles.crossIcon}>
								<i class="bx bx-x"></i>
							</td>
							<td className={styles.editIcon}>
								<i class="bx bx-edit"></i>
							</td>
						</tr>
					</table>
					<div className={styles.btn__container}>
						<a href="#" className={styles.button__crearNuevo}>
							Crear Nuevo
						</a>
					</div>
				</div>
			</div>
			<div className={styles.miNegocio__body}>
				<div className={styles.miNegocio__historial}>
					<div className={styles.historial__filters}>
						<h4>Historial de ventas</h4>
						<form action="">
							<div>
								<div>
									De: <input type="text" />
								</div>
								<div>
									Hasta: <input type="text" />
								</div>
								<div>
									Vendedor: <input type="text" />
								</div>
							</div>
							<input type="submit" value={"Buscar"} className={styles.submit} />
						</form>
					</div>
				</div>
				<div className={styles.membresia}>
					<h4>Estado de membresia</h4>
					<p>
						La membresia de su comercio se encuentra <br />
						<span>al dia</span> <br />
						hasta el <br />
						<span>1/10/2023</span>
					</p>
					<p>Gracias por su confianza!</p>
				</div>
				<div className={styles.horarios}>
					<a>Editar horarios</a>
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
						<td>Patricio Garcia</td>
						<td>Vendedor</td>
						<td>****</td>
						<td className={styles.crossIcon}>
							<i class="bx bx-x"></i>
						</td>
						<td className={styles.editIcon}>
							<i class="bx bx-edit"></i>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>mbustos</td>
						<td>Mariano Bustos</td>
						<td>Admin</td>
						<td>****</td>
						<td className={styles.crossIcon}>
							<i class="bx bx-x"></i>
						</td>
						<td className={styles.editIcon}>
							<i class="bx bx-edit"></i>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>kledesma</td>
						<td>Karina Ledesma</td>
						<td>Encargada</td>
						<td>****</td>
						<td className={styles.crossIcon}>
							<i class="bx bx-x"></i>
						</td>
						<td className={styles.editIcon}>
							<i class="bx bx-edit"></i>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>jreina</td>
						<td>Jimena Reina</td>
						<td>Vendedor</td>
						<td>****</td>
						<td className={styles.crossIcon}>
							<i class="bx bx-x"></i>
						</td>
						<td className={styles.editIcon}>
							<i class="bx bx-edit"></i>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
