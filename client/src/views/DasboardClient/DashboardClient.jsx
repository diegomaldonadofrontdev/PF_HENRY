import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCLient } from "../../redux/actions/actions";
import Header from "../../components/Header/Header";
import styles from "./DashboardClient.module.css";
import mila from "./../../images/milanesa.avif";
import avatar from "./../../images/avatar.avif";

export default function DashboardClient() {
	const loggedUser = useSelector((state) => state.currentClient)
	console.log(loggedUser)
	const dispatch = useDispatch(); 

	const idUser = window.localStorage.getItem('idUser')
	console.log(idUser)

	useEffect(() => {
		if(idUser) {
			dispatch(getCLient(idUser))
		}
	},[dispatch, idUser])


	return (
		<div>
			<Header />
			<div className={styles.user__dashboard}>
				<div className={styles.container}>
					<div className={styles.userDashboard__handler}>
						<div className={styles.profile}>
							<div className={styles.img__container}>
								<img src={avatar} alt="" />
							</div>
							<h2>{loggedUser.firstname}</h2>
							<p>{loggedUser.email}</p>
						</div>
						<a href="#miperfil">Mi perfil</a>
						<a href="#mispedidos">Mis pedidos</a>
						<a href="#misfavoritos">Mis favoritos</a>
						<a href="#">Mi direcciones</a>
						<a href="#">Ayuda / Reclamo</a>
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
												<p>{loggedUser.city}</p>
											</div>
											<div>
												<h3>Telefono:</h3>
												<p>{loggedUser.phone}</p>
											</div>
											<div>
												<h3>Dirección de entrega</h3>
												<p>{loggedUser.address}</p>
											</div>
										</div>
										<form action="">
											<h3>Modificar Datos</h3>
											<div>
												<div>
													<div className={styles.form__sm}>
														<label htmlFor="">Nombre De usuario</label>
														<input type="text" placeholder="Nombre actual" />
													</div>
													<div className={styles.form__sm}>
														<label htmlFor="">Nombre</label>
														<input type="text" placeholder={loggedUser.firstname} />
													</div>
													<div className={styles.form__sm}>
														<label htmlFor="">Apellido</label>
														<input type="text" placeholder={loggedUser.lastname} />
													</div>
												</div>
												<div>
													<div>
														<label htmlFor="">email</label>
														<input type="text" placeholder={loggedUser.email} />
													</div>
													<div>
														<label htmlFor="">Telefono</label>
														<input type="text" placeholder={loggedUser.phone} />
													</div>
													<div>
														<label htmlFor="">Password</label>
														<input type="text" placeholder="******" />
													</div>
												</div>
												<div>
													<div>
														<label htmlFor="">Direccion de Entrega</label>
														<input type="text" placeholder={loggedUser.address} />
													</div>
													<div>
														<label htmlFor="">Imagen de perfil</label>
														<input type="text" placeholder="ingresar imagen" />
													</div>
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
												<th>Nro</th>
												<th>Fecha</th>
												<th>Producto</th>
												<th>Local</th>
												<th>Metodo de Pago</th>
												<th>Valoracion</th>
												<th>Estado</th>
											</tr>
											<tr>
												<td>1</td>
												<td>1 / 2 / 3</td>
												<td>Hamburguesa con queso</td>
												<td>Burger-Heros</td>
												<td>MercadoPago</td>
												<td>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
												</td>
												<td>Pago</td>
											</tr>
											<tr>
												<td>2</td>
												<td>1 / 2 / 3</td>
												<td>Hamburguesa con queso</td>
												<td>Burger-Heros</td>
												<td>MercadoPago</td>
												<td></td>
												<td>Rechazado</td>
											</tr>
											<tr>
												<td>3</td>
												<td>1 / 2 / 3</td>
												<td>Hamburguesa con queso</td>
												<td>Burger-Heros</td>
												<td>MercadoPago</td>
												<td>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star-half"></i>
												</td>
												<td>Pago</td>
											</tr>
											<tr>
												<td>4</td>
												<td>1 / 2 / 3</td>
												<td>Hamburguesa con queso</td>
												<td>Burger-Heros</td>
												<td>MercadoPago</td>
												<td>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
												</td>
												<td>Pago</td>
											</tr>
											<tr>
												<td>5</td>
												<td>1 / 2 / 3</td>
												<td>Hamburguesa con queso</td>
												<td>Burger-Heros</td>
												<td>MercadoPago</td>
												<td>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star"></i>
													<i class="bx bxs-star-half"></i>
												</td>
												<td>Pago</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
							<div id="misfavoritos">
								<h2>Mis favoritos</h2>

								<div className={styles.view__container}>
									<div className={styles.cardsFav__container}>
										<div className={styles.card_fav}>
											<div className={styles.img__container}>
												<img src={mila} alt="" />
											</div>
											<div className={styles.descripcion}>
												<h5>Nombre del producto</h5>
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Repellendus sed quos exercitationem consequuntur
													quam quo.
												</p>
											</div>
											<p>$1.000</p>
											<h3>Hambur-heros</h3>
											<a href="#">Hacer Pedido</a>
											<a href="#">Ir al comercio</a>
											<a href="#">Quitar de Favoritos</a>
										</div>
										<div className={styles.card_fav}>
											<div className={styles.img__container}>
												<img src={mila} alt="" />
											</div>
											<div className={styles.descripcion}>
												<h5>Nombre del producto</h5>
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Repellendus sed quos exercitationem consequuntur
													quam quo.
												</p>
											</div>
											<p>$1.000</p>
											<h3>Hambur-heros</h3>
											<a href="#">Hacer Pedido</a>
											<a href="#">Ir al comercio</a>
											<a href="#">Quitar de Favoritos</a>
										</div>
										<div className={styles.card_fav}>
											<div className={styles.img__container}>
												<img src={mila} alt="" />
											</div>
											<div className={styles.descripcion}>
												<h5>Nombre del producto</h5>
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Repellendus sed quos exercitationem consequuntur
													quam quo.
												</p>
											</div>
											<p>$1.000</p>
											<h3>Hambur-heros</h3>
											<a href="#">Hacer Pedido</a>
											<a href="#">Ir al comercio</a>
											<a href="#">Quitar de Favoritos</a>
										</div>
										<div className={styles.card_fav}>
											<div className={styles.img__container}>
												<img src={mila} alt="" />
											</div>
											<div className={styles.descripcion}>
												<h5>Nombre del producto</h5>
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Repellendus sed quos exercitationem consequuntur
													quam quo.
												</p>
											</div>
											<p>$1.000</p>
											<h3>Hambur-heros</h3>
											<a href="#">Hacer Pedido</a>
											<a href="#">Ir al comercio</a>
											<a href="#">Quitar de Favoritos</a>
										</div>
										<div className={styles.card_fav}>
											<div className={styles.img__container}>
												<img src={mila} alt="" />
											</div>
											<div className={styles.descripcion}>
												<h5>Nombre del producto</h5>
												<p>
													Lorem ipsum dolor sit, amet consectetur adipisicing
													elit. Repellendus sed quos exercitationem consequuntur
													quam quo.
												</p>
											</div>
											<p>$1.000</p>
											<h3>Hambur-heros</h3>
											<a href="#">Hacer Pedido</a>
											<a href="#">Ir al comercio</a>
											<a href="#">Quitar de Favoritos</a>
										</div>
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
