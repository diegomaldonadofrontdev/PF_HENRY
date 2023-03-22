import React, { useEffect } from "react";
import styles from "./SuperAdmin.module.css";
import Header from "../../components/Header/Header";
import { getTradesByName } from "../../redux/actions/getTradesByName";
import { getTrades } from "../../redux/actions/getTrades";

import { useDispatch, useSelector } from "react-redux";

export default function SuperAdmin() {
	const dispatch = useDispatch();
	const commerces = useSelector((state) => state.filterCommerce);
	useEffect(() => {
		dispatch(getTrades());
	}, []);

	function handlerFilterByName(e) {
		console.log(e.target.value);
		dispatch(getTradesByName(e.target.value));
	}

	return (
		<div className={styles.superadmin}>
			<Header />
			<div className={styles.container}>
				<h2>Super admin</h2>

				<div className={styles.content}>
					<h3>Comercios</h3>
					<div className={styles.grid}>
						<div>
							<h4>Crear Comercio</h4>
							<form action="">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="submit" />
							</form>
						</div>
						<div>
							<h4>Editar Comercio</h4>
							<form action="">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="submit" />
							</form>
						</div>
						<div>
							<h4>Buscar Comercio y eliminar</h4>
							<form action="">
								<input type="text" onChange={handlerFilterByName} />
							</form>
							<div className={styles.trades__container}>
								{commerces.map((x) => (
									<div className={styles.sp_tradeCard}>
										<h4>{x.commerceName}</h4>
										<i class="bx bx-trash"></i>
									</div>
								))}
							</div>
						</div>
						<div>
							<div>
								<h4>Crear Categoria</h4>
								<input type="text" />
								<input type="submit" />
							</div>
							<div>
								<h4>Crear Subcategoria</h4>
								<input type="text" />
								<input type="submit" />
							</div>
							<div>
								<h4>Crear DeliveryZone</h4>
								<input type="text" />
								<input type="submit" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<h3>Productos</h3>
					<div className={styles.grid}>
						<div>
							<h4>Crear Producto</h4>
							<form action="">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="submit" />
							</form>
						</div>
						<div>
							<h4>Eliminar Producto</h4>
							<form action="">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="submit" />
							</form>
						</div>
						<div>
							<h4>Buscar Producto y eliminar</h4>
							<form action="">
								<input type="text" />
							</form>
						</div>
						<div>
							<div>
								<h4>Crear Categoria de Producto</h4>
								<input type="text" />
								<input type="submit" />
							</div>

							<div>
								<h4>Crear DeliveryZone</h4>
								<input type="text" />
								<input type="submit" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<h3>Pedidos</h3>
					<div className={styles.grid}>
						<div className={styles.dosColumnas}>
							<div>
								<h4>Buscar pedido por nro de orden</h4>
								<input type="text" />
								<input type="submit" />
							</div>

							<form action="">
								<p>Filrar por comercio</p>
								<select name="" id="">
									<option value="">Comercio</option>
								</select>
							</form>
						</div>
						<div>
							<h4>Resultados</h4>
						</div>
						<div className={styles.containerReview}>
							<h3>Datos del usuario</h3>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<h3>Reviews</h3>
					<div className={styles.grid}>
						<div>
							<h4>Ver reviews</h4>
							<table>
								<tr>
									<th>Usuario</th>
									<th>Review</th>
									<th>Accion</th>
								</tr>
								<tr>
									<td>John</td>
									<td>Doe</td>
									<td>
										<button>Eliminar</button>
									</td>
								</tr>
							</table>
						</div>

						<div className={styles.containerReview}>
							<h3>Resultados Reviews</h3>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<h3>Clientes</h3>
					<div className={styles.grid}>
						<div>
							<h4>Clientes Registrados</h4>
							<table>
								<tr>
									<th>Usuario</th>
									<th>Review</th>
									<th>Accion</th>
								</tr>
								<tr>
									<td>John</td>
									<td>Doe</td>
									<td>
										<button>Eliminar</button>
									</td>
								</tr>
							</table>
						</div>
						<div>
							<h3>Datos del usuario</h3>
							<h5>Editar</h5>
							<form action="">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="submit" value={'cambiar'} />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
