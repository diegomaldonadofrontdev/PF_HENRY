// React and hooks
import React, { useEffect } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import getCLient from "../../redux/actions/getClient";

// Components
import Header from "../../components/Header/Header";

// img
import avatar from "../../images/avatar.avif";

// Styles
import styles from "./DashboardClient.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

export default function DashboardClient() {
	const loggedUser = useSelector((state) => state.currentClient);
	console.log(loggedUser);
	const dispatch = useDispatch();

	const idUser = window.localStorage.getItem("idUser");
	console.log(idUser);

	useEffect(() => {
		if (idUser) {
			dispatch(getCLient(idUser));
		}
	}, [dispatch, idUser]);

	return (
		<div>
			<Header />
			<div className={styles.user__dashboard}>
				<div className={styles.container}>
					<div className={styles.userDashboard__handler}>
						<div className={styles.profile}>
							<div className={styles.img__container}>
								<img src={loggedUser.img || avatar} alt="" />
							</div>
							<h2>{loggedUser.firstname}</h2>
							<p>{loggedUser.lastname}</p>
						</div>
						<a href="#miperfil">Mi perfil</a>
						<a href="#mispedidos">Mis pedidos</a>
						<a href="#">Reclamo</a>
					</div>
					<div className={styles.panel__handlers}>
						<div className={styles.view__handler}>
							<div id="miperfil">
								<h2>Mi Perfil</h2>
								<div className={styles.perfil__container}>
									<div className={styles.user__informacion}>
										<div className={styles.perfil__actual}>
											<div>
												<h3>Nombre:</h3>
												<p>{loggedUser.firstname}</p>
											</div>
											<div>
												<h3>Apellido:</h3>
												<p>{loggedUser.lastname}</p>
											</div>
											<div>
												<h3>Email:</h3>
												<p>{loggedUser.email}</p>
											</div>
											<div>
												<h3>Ciudad:</h3>
												<p className={styles.alert}>
													{loggedUser.city ||
														`Por favor completá tus datos de Ciudad`}
												</p>
											</div>
											<div>
												<h3>Telefono:</h3>
												<p className={styles.alert}>
													{loggedUser.phone ||
														`Por favor completá tus datos de Teléfono`}
												</p>
											</div>
											<div>
												<h3>Dirección de entrega</h3>
												<p className={styles.alert}>
													{loggedUser.address ||
														`Por favor completá tus datos de Dirección de entrega`}
												</p>
											</div>
										</div>
										<form action="" className={styles.form__editInfoUser}>
											<h3>Modificar Datos</h3>

											<div>
												<div className={styles.form__sm}>
													<label htmlFor="">Nombre De usuario:</label>
													<input
														type="text"
														value={`${loggedUser.firstname} ${loggedUser.lastname}`}
													/>
												</div>
												<div className={styles.form__sm}>
													<label htmlFor="">Nombre:</label>
													<input type="text" value={loggedUser.firstname} />
												</div>
												<div className={styles.form__sm}>
													<label htmlFor="">Apellido:</label>
													<input type="text" value={loggedUser.lastname} />
												</div>
											</div>
											<div>
												<div className={styles.form__sm}>
													<label htmlFor="">email:</label>
													<input type="text" value={loggedUser.email} />
												</div>
												<div className={styles.form__sm}>
													<label htmlFor="">Teléfono:</label>
													<input type="text" placeholder={loggedUser.phone} />
												</div>
											</div>
											<div>
												<div className={styles.form__sm}>
													<label htmlFor="">Direccion de Entrega:</label>
													<input type="text" placeholder={loggedUser.address} />
												</div>
												<div className={styles.form__sm}>
													<label htmlFor="">Imagen de perfil</label>
													<input type="text" placeholder="ingresar imagen" />
												</div>
											</div>

											<input
												type="submit"
												value="Cambiar"
												className={styles.submit}
											/>
										</form>
									</div>
								</div>
							</div>
							<div id="mispedidos">
								<h2>Mi pedidos</h2>
								<div className={styles.view__container}>
									<h4>Mis pedidos</h4>
									<div className={styles.user__informacion}>
										<table>
											<tr>
												<th>ID de compra</th>
												<th>Fecha</th>
												<th>Compra</th>
												<th>Comercio</th>
												<th>Valoracion</th>
												<th>Ver info</th>
											</tr>
											<tr>
												<td>1</td>
												<td>1 / 2 / 3</td>
												<td>Hamburguesa con queso</td>
												<td>Burger-Heros</td>
												<td>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
												</td>
												<td>
													<ButtonPrimary texto="Ver detalle" />
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
