import React, { useEffect } from "react";
import styles from "./SuperAdmin.module.css";
import Header from "../../components/Header/Header";
import { getTradesByName } from "../../redux/actions/getTradesByName";
import { useDispatch, useSelector } from "react-redux";

export default function SuperAdmin() {
	const dispatch = useDispatch();

	const allCommerces = useSelector((state) => state.allCommerces);

	function handlerFilterByName(e) {
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
								<div className={styles.sp_tradeCard}>
									<h4>Nombre</h4>
									<i class="bx bx-trash"></i>
								</div>
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
						<div>
							<h4>Buscar pedido por nro de orden</h4>
							<input type="text" />
							<input type="submit" />
							<select name="" id="">
								<option value="">Comercio</option>
							</select>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<h3>Reviews</h3>
					<div>
						<div></div>
					</div>
				</div>
				<div className={styles.content}>
					<h3>Clientes</h3>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
}
