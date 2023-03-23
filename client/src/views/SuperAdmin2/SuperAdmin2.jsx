import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SuperAdmin2.module.css";
import getAllClients from "../../redux/actions/getAllClients";
import { deleteTrade, getReviews, getTrades } from "../../redux/actions";
import { getOrdersByCommerce } from "../../redux/actions/getOrdersByCommerce";
import { getOrdersClient } from "../../redux/actions/getOrdersClient";
import deleteClient from "../../redux/actions/deleteClient";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import { updateCommerceInfo } from "../../redux/actions/updateCommerceInfo";
import swal from "sweetalert";
import { editClient } from "../../redux/actions/editClient";
import deleteReview from "../../redux/actions/deleteReview";
import getReviewsSP from "../../redux/actions/getReviewsSP";
import getReviewById from "../../redux/actions/getReviewsById";
import { postCategory } from "../../redux/actions/postCategory";
import { postSubcategory } from "../../redux/actions/postSubcategory";
import { postDeliveryZone } from "../../redux/actions/postDeliveryZone";

import {
	getSubCategories,
	getTradesCategories,
	getDeliveryZones,
	commerceRegister,
	getTradesCategory,
} from "../../redux/actions/index";
import Header from "../../components/Header/Header";

export default function SuperAdmin2() {
	const dispatch = useDispatch();
	const stateSuperCategories = useSelector((state) => state.superCategories);
	const review = useSelector((state) => state.feedbackById);
	const reviews = useSelector((state) => state.feedback);
	const allCommerces = useSelector((state) => state.allCommerces);
	const allUsers = useSelector((state) => state.allClients);
	const allReviews = useSelector((state) => state.feedback);
	const ordersClient = useSelector((state) => state.ordersClients);
	const ordersCommerces = useSelector((state) => state.ordersCommerces);
	const [body, setBody] = useState({});
	const [loggedTrade, setLoggedTrade] = useState(null);
	const [loggedUser, setLoggedUser] = useState(null);
	const [currentErrors, setCurrentErrors] = useState({});
	const stateCategories = useSelector((state) => state.tradesCategories);
	const stateSubCategories = useSelector((state) => state.tradesSubCategories);
	const stateZones = useSelector((state) => state.zones);
	const [currentDeliveryZone, setCurrentDeliveryZone] = useState({
		deliveryZone: "",
	});
	const [currentSubcategory, setCurrentSubcategory] = useState({
		subcategory: "",
		category: "",
	});
	const [configuracion, setConfiguracion] = useState({
		seleccionado: "",
		editar: false,
		id: "",
		name: "",
		orders: false,
		create: false,
	});
	const [currentCategory, setCurrentCategory] = useState({
		category: "",
	});

	const [currentInput, setCurrentInput] = useState({
		commerceName: "",
		category: "",
		subcategory: "",
		description: "",
		image: "",
		province: "",
		city: "",
		address: "",
		phone: "",
		deliveryZone: [],
		userName: "",
		password: "",
		email: "",
		rating: "",
		epagos: "",
		active: true,
	});

	const [bodyUser, setBodyUser] = useState({});

	useEffect(() => {
		dispatch(getAllClients());
		dispatch(getTrades());
		dispatch(getReviews());
		dispatch(getTradesCategories());
		dispatch(getDeliveryZones());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getTradesCategory());
	}, [dispatch]);

	useEffect(() => {
		if (currentInput.category !== "default" && currentInput.category) {
			dispatch(getSubCategories(currentInput.category));
		}
	}, [currentInput.category]);
	function handlerOnchangeSubcategory(e) {
		setCurrentSubcategory({
			[e.target.name]: e.target.value,
		});
	}

	function handlerOnchangeSubcategorySelect(e) {
		setCurrentSubcategory({
			...currentSubcategory,
			category: e.target.value,
		});
	}
	function handlerView(e) {
		e.preventDefault();
		setConfiguracion({
			seleccionado: e.target.value,
			editar: false,
			id: "",
			name: "",
			orders: false,
			create: false,
		});
		if (e.target.value === "comercio") {
			setLoggedUser({});
			setBodyUser({});
		} else {
			setBody({});
			setLoggedTrade({});
		}
	}
	function handlerOnchangeCategory(e) {
		setCurrentCategory({
			...currentCategory,
			[e.target.name]: e.target.value,
		});
	}
	function handlerSubmitSubcategorySuper(e) {
		e.preventDefault();
		if (!currentSubcategory.subcategory || !currentSubcategory.category) {
			swal({
				title: "Error",
				text: "No has llenado algun campo ",
				icon: "warning",
				button: "Ok",
			});
		} else {
			dispatch(postSubcategory(currentSubcategory));
			swal({
				title: "Listo!",
				text: "La categoria fue creada correctamente",
				icon: "success",
				button: "Ok",
			});
			setCurrentSubcategory({
				subcategory: "",
			});
		}
	}

	const handlerSubmitForm = (e) => {
		e.preventDefault();
		const {
			commerceName,
			category,
			userName,
			epagos,
			password,
			subcategory,
			description,
			email,
			deliveryZone,
			phone,
			image,
			province,
			city,
			address,
		} = currentInput;
		if (
			!commerceName ||
			!category ||
			!subcategory ||
			!description ||
			!image ||
			!province ||
			!city ||
			!address ||
			!phone ||
			!deliveryZone ||
			!userName ||
			!password ||
			!email ||
			!epagos
		) {
			swal({
				title: "Error!",
				text: "Rellena todos los campos correctamente, por favor",
				icon: "error",
				button: "Ok",
			});
		} else {
			dispatch(commerceRegister(currentInput));
			// setConfiguracion({ ...configuracion, create: false });
			swal({
				title: "Listo!",
				text: "El comercio fue creado correctamente",
				icon: "success",
				button: "Ok",
			});
			setCurrentInput({
				commerceName: "",
				category: "",
				subcategory: "",
				description: "",
				image: "",
				province: "",
				city: "",
				address: "",
				phone: "",
				deliveryZone: [],
				userName: "",
				password: "",
				email: "",
				epagos: "",
				active: true,
			});
		}
	};

	function handlerSubmitCategory(e) {
		e.preventDefault();
		if (!currentCategory.category) {
			swal({
				title: "Erros",
				text: "No has llenado el campo ",
				icon: "warning",
				button: "Ok",
			});
		} else {
			dispatch(postCategory(currentCategory));
			swal({
				title: "Listo!",
				text: "La categoria fue creada correctamente",
				icon: "success",
				button: "Ok",
			});
			setCurrentCategory({
				category: "",
			});
		}
	}

	function handlerSelect(id, name) {
		setConfiguracion({
			...configuracion,
			id,
			name,
			orders: configuracion.id === id ? !configuracion.orders : true,
			editar: false,
			create: false,
		});

		if (configuracion.seleccionado === "comercio") {
			dispatch(getOrdersByCommerce(id));
		} else {
			dispatch(getOrdersClient(id));
		}
	}

	function handlerEdit(id, name) {
		setConfiguracion({
			...configuracion,
			id,
			name,
			editar: configuracion.id === id ? !configuracion.editar : true,
			orders: false,
			create: false,
		});
	}

	function handlerDelete(id) {
		console.log(id);
		if (configuracion.seleccionado === "comercio") {
			dispatch(deleteTrade(id));
		} else {
			dispatch(deleteClient(id));
		}
	}

	function handlerChange(e) {
		const { name, value } = e.target;
		setBody({ ...body, [name]: value });
	}

	function handlerChangeUser(e) {
		const { name, value } = e.target;
		setBodyUser({ ...bodyUser, [name]: value });
	}
	function handlerSubmit(e) {
		e.preventDefault();
		const { phone, address, image, commerceName, description } = body;
		if (!phone || !address || !image || !commerceName || !description) {
			swal({
				title: "Error!",
				text: "Rellena todos los campos correctamente, por favor",
				icon: "error",
				button: "Ok",
			});
		} else {
			dispatch(updateCommerceInfo(configuracion.id, body));
			setConfiguracion({ ...configuracion, editar: false });
			swal({
				title: "Listo!",
				text: "Los datos del comercio fueron actualizados",
				icon: "success",
				button: "Ok",
			});
		}
	}

	const handleChangeInputs = (e) => {
		setCurrentInput({
			...currentInput,
			[e.target.name]: e.target.value,
		});
		setCurrentErrors(
			Validate({
				...currentInput,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSelectCategories = (e) => {
		e.preventDefault();
		setCurrentInput({
			...currentInput,
			category: e.target.value,
		});
		setCurrentErrors(
			Validate({
				...currentInput,
				category: [...currentInput.category, e.target.value],
			})
		);
	};

	const handleSelectSubCategories = (e) => {
		e.preventDefault();
		setCurrentInput({
			...currentInput,
			subcategory: e.target.value,
		});
		setCurrentErrors(
			Validate({
				...currentInput,
				subcategory: [...currentInput.subcategory, e.target.value],
			})
		);
	};

	const handleSelecDeliveryZone = (e) => {
		e.preventDefault();

		setCurrentInput({
			...currentInput,
			deliveryZone: [currentInput.deliveryZone, e.target.value],
		});
		setCurrentErrors(
			Validate({
				...currentInput,
				deliveryZone: [...currentInput.deliveryZone, e.target.value],
			})
		);
	};

	const handleSelectEpagos = (e) => {
		e.preventDefault();
		setCurrentInput({
			...currentInput,
			epagos: e.target.value,
		});
		setCurrentErrors(
			Validate({
				...currentInput,
				epagos: [...currentInput.epagos, e.target.value],
			})
		);
	};

	const handleCommerceImgUpload = async (e) => {
		const files = e.target.files;
		const datas = new FormData();
		datas.append("file", files[0]);
		datas.append("upload_preset", "PEDI-VERY");
		const res = await fetch("https://api.cloudinary.com/v1_1/sebov96/upload", {
			method: "POST",
			body: datas,
		});
		const file = await res.json();
		setCurrentInput({
			...currentInput,
			image: file.secure_url,
		});
	};

	const Validate = (currentInput) => {
		let currentErrors = {};
		let RegExInputCommerceEmail =
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let RegExInputCommerceText = /^[a-zA-Z\s]*$/;
		let RegExInputCommerceNum = /^[0-9,$]*$/;

		//Validacion nombre del comercio
		if (!currentInput.commerceName) {
			currentErrors.commerceName = "Por favor ingresa un nombre";
		}
		//Validacion categoria
		if (!currentInput.category) {
			currentErrors.category = "Por favor selecciona una categoría";
		}
		//Validacion SubCategoria
		if (!currentInput.subcategory) {
			currentErrors.subcategory = "Por favor selecciona una subcategoría";
		}
		//Validacion descripcion
		if (!currentInput.description) {
			currentErrors.description = "Debes ingresar una descripción";
		}
		//Validacion imagen
		if (!currentInput.image) {
			currentErrors.image = "Selecciona una imagen del comercio de tu galería";
		}
		//Validacion Provincia
		if (!currentInput.province) {
			currentErrors.province = "Ingresa tu Provincia";
		}
		//Validacion Ciudad
		if (!currentInput.city) {
			currentErrors.city = "Ingresa tu ciudad";
		}
		//Validacion Direccion
		if (!currentInput.address) {
			currentErrors.address = "Ingresa tu dirección";
		}
		//Validacion Telefono
		if (!currentInput.phone) {
			currentErrors.phone = "Ingresa tu número de teléfono";
		}
		if (!RegExInputCommerceNum.test(currentInput.telephone)) {
			currentErrors.telephone = "Solo números, por favor";
		}
		//Validacion deliveryZone
		if (!currentInput.deliveryZone) {
			currentErrors.deliveryZone = "Ingresa tu zona de envíos";
		}
		//Validacion UserName
		if (!currentInput.userName) {
			currentErrors.userName = "Ingresa tu nombre de usuario";
		}
		if (currentInput.userName.length < 6) {
			currentErrors.username =
				"Tu nombre de usuario debe tener al menos 6 caracteres";
		}
		//Validacion password
		if (!currentInput.password) {
			currentErrors.password = "Ingresa una contraseña";
		}
		if (currentInput.password.length < 5) {
			currentErrors.password =
				"La contraseña debe contener mas de 5 caracteres";
		}
		//Validacion email
		if (!currentInput.email) {
			currentErrors.email = "Ingresa tu dirección de correo electrónico";
		}
		if (!RegExInputCommerceEmail.test(currentInput.email)) {
			currentErrors.email = "Tu email debe incluir @ y .com";
		}
		//Validacion epagos
		if (!currentInput.epagos) {
			currentErrors.epagos = "Ingresa tu método de pago";
		}

		return currentErrors;
	};

	const handleCommerceImgUpdate = async (e) => {
		const files = e.target.files;
		const datas = new FormData();
		datas.append("file", files[0]);
		datas.append("upload_preset", "PEDI-VERY");
		const res = await fetch("https://api.cloudinary.com/v1_1/sebov96/upload", {
			method: "POST",
			body: datas,
		});
		const file = await res.json();
		setBody({
			...body,
			image: file.secure_url,
		});
	};

	useEffect(() => {
		if (configuracion.seleccionado === "comercio") {
			const trade = allCommerces.find((x) => x._id === configuracion.id);
			setLoggedTrade(trade);
			setBody(trade);
		} else {
			const user = allUsers.find((x) => x._id === configuracion.id);

			setLoggedUser(user);
			setBodyUser(user);
		}
	}, [configuracion.id]);

	// Manejo la imagen con CLOUDINARY
	const handleUserImgUpload = async (e) => {
		const files = e.target.files;
		const datas = new FormData();
		datas.append("file", files[0]);
		datas.append("upload_preset", "PEDI-VERY");
		const res = await fetch("https://api.cloudinary.com/v1_1/sebov96/upload", {
			method: "POST",
			body: datas,
		});
		const file = await res.json();
		setBodyUser({
			...bodyUser,
			profileImg: file.secure_url,
		});
	};

	function handlerSubmitUser(e) {
		e.preventDefault();
		const { phone, address, profileImg } = bodyUser;
		if (!phone || !address || !profileImg) {
			swal({
				title: "Error!",
				text: "Rellena todos los campos correctamente, por favor",
				icon: "error",
				button: "Ok",
			});
		} else {
			dispatch(editClient(bodyUser, configuracion.id));
			setConfiguracion({ ...configuracion, editar: false });
			swal({
				title: "Listo!",
				text: "Tus datos fueron actualizados",
				icon: "success",
				button: "Ok",
			});
		}
	}
	function handlerSubmitDeliveryZone(e) {
		e.preventDefault();
		if (!currentDeliveryZone.deliveryZone) {
			swal({
				title: "Error",
				text: "No has llenado el campo ",
				icon: "warning",
				button: "Ok",
			});
		} else {
			dispatch(postDeliveryZone(currentDeliveryZone));
			swal({
				title: "Listo!",
				text: "La categoria fue creada correctamente",
				icon: "success",
				button: "Ok",
			});
			setCurrentDeliveryZone({
				deliveryZone: "",
			});
		}
	}

	function deleteReviewHandler(e) {
		dispatch(deleteReview(e.target.value));
		dispatch(getReviewsSP());
	}

	function handlerCreate() {
		setConfiguracion({ ...configuracion, create: !configuracion.create });
	}

	function handlerOnchangeDeliveryZone(e) {
		setCurrentDeliveryZone({
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div className={styles.superAdmin2}>
			<Header />
			<div className={styles.container}>
				<div className={styles.nav}>
					<button value={"comercio"} onClick={handlerView}>
						Comercios
					</button>
					<button value={"usuario"} onClick={handlerView}>
						Usuarios
					</button>
					<button value={"review"} onClick={handlerView}>
						Reviews
					</button>
					{configuracion.seleccionado === "comercio" ? (
						<button onClick={handlerCreate}>Crear Comercio</button>
					) : null}
				</div>
				<div className={styles.contenido}>
					{configuracion.seleccionado === "comercio" ? (
						<div className={styles.comercios}>
							<h2>Comercios</h2>
							<div>
								<ul>
									{allCommerces?.map((x) => (
										<li key={x._id}>
											{" "}
											{x.commerceName}
											<i
												class="bx bx-laptop"
												onClick={() => {
													handlerSelect(x._id, x.commerceName);
												}}
											></i>
											<i
												class="bx bx-edit-alt"
												onClick={() => {
													handlerEdit(x._id, x.commerceName);
												}}
											></i>
											<i
												class="bx bx-trash"
												onClick={() => {
													handlerDelete(x._id);
												}}
											></i>
										</li>
									))}
								</ul>
							</div>
						</div>
					) : null}
					{configuracion.seleccionado === "usuario" ? (
						<div>
							<h2>Usuarios</h2>
							<div>
								<ul>
									{allUsers?.map((x) => (
										<li key={x._id}>
											{" "}
											{`${x.firstname} ${x.lastname} ${x.email}`}
											<i
												class="bx bx-laptop"
												onClick={() => {
													handlerSelect(x._id, x.firstname);
												}}
											></i>
											<i
												class="bx bx-edit-alt"
												onClick={() => {
													handlerEdit(x._id, x.firstname);
												}}
											></i>
											<i
												class="bx bx-trash"
												onClick={() => {
													handlerDelete(x._id);
												}}
											></i>
										</li>
									))}
								</ul>
							</div>
						</div>
					) : null}
					{loggedTrade &&
					configuracion.seleccionado === "comercio" &&
					configuracion.id !== "" &&
					configuracion.editar ? (
						<div>
							<h3>{`Edicion del comercio: ${configuracion.name}`}</h3>
							<div className={styles.form__commerce}>
								<form action="" onSubmit={handlerSubmit}>
									<h4>Modificá tu información</h4>
									<label htmlFor="">Nombre del Comercio</label>
									<input
										type="text"
										name="commerceName"
										placeholder={loggedTrade.commerceName}
										onChange={handlerChange}
									/>
									<label htmlFor="">Descripción</label>
									<input
										type="text"
										name="description"
										placeholder="Editá la descripción"
										onChange={handlerChange}
									/>
									<label htmlFor="">Dirección</label>
									<input
										type="text"
										name="address"
										placeholder={loggedTrade.address}
										onChange={handlerChange}
									/>
									<label htmlFor="">Teléfono</label>
									<input
										type="text"
										name="phone"
										placeholder={loggedTrade.phone}
										onChange={handlerChange}
									/>
									<label htmlFor="">Foto de Perfil</label>
									<input type="file" onChange={handleCommerceImgUpdate} />

									<button type="submit">
										<ButtonPrimary texto="Actualizar datos" />
									</button>
								</form>
							</div>
						</div>
					) : null}
					{configuracion.seleccionado === "comercio" && configuracion.create ? (
						<div>
							<h3>{`Creacion del comercio: ${configuracion.name}`}</h3>
							<div className={styles.form__commerce}>
								<form action="" onSubmit={handlerSubmitForm}>
									<label htmlFor="">Nombre Del Comercio</label>
									<input
										type="text"
										placeholder=""
										name="commerceName"
										value={currentInput.commerceName}
										onChange={handleChangeInputs}
									/>

									{currentErrors.commerceName && (
										<p>{currentErrors.commerceName}</p>
									)}

									<select onChange={handleSelectCategories}>
										<option value="default" selected disabled>
											Categoria
										</option>
										{stateCategories &&
											stateCategories.map((e) => (
												<option value={e}>{e}</option>
											))}
									</select>
									{currentErrors.category && <p>{currentErrors.category}</p>}

									<select onChange={handleSelectSubCategories}>
										<option
											value="default"
											selected={currentInput.category === "default"}
										>
											Subcategoria
										</option>

										{currentInput.category &&
										currentInput.category !== "default"
											? stateSubCategories &&
											  stateSubCategories?.map((e) => (
													<option value={e}>{e}</option>
											  ))
											: null}
									</select>
									{currentErrors.subcategory && (
										<p>{currentErrors.subcategory}</p>
									)}

									<label htmlFor="">Descripción</label>
									<input
										type="text"
										placeholder=""
										name="description"
										value={currentInput.description}
										onChange={handleChangeInputs}
									/>
									{currentErrors.description && (
										<p>{currentErrors.description}</p>
									)}

									<label htmlFor="">Imagen</label>
									<input
										type="file"
										placeholder=""
										onChange={handleCommerceImgUpload}
									/>
									{currentErrors.image && <p>{currentErrors.image}</p>}

									<label htmlFor="">Provincia</label>
									<input
										type="text"
										placeholder=""
										name="province"
										value={currentInput.province}
										onChange={handleChangeInputs}
									/>

									<label htmlFor="">Ciudad</label>
									<input
										type="text"
										placeholder=""
										name="city"
										value={currentInput.city}
										onChange={handleChangeInputs}
									/>
									{currentErrors.city && <p>{currentErrors.city}</p>}

									<label htmlFor="">Dirección</label>
									<input
										type="text"
										placeholder=""
										name="address"
										value={currentInput.address}
										onChange={handleChangeInputs}
									/>
									{currentErrors.address && <p>{currentErrors.address}</p>}

									<label htmlFor="">Teléfono</label>
									<input
										type="text"
										placeholder=""
										name="phone"
										value={currentInput.phone}
										onChange={handleChangeInputs}
									/>
									{currentErrors.phone && <p>{currentErrors.phone}</p>}

									<select onChange={handleSelecDeliveryZone}>
										<option value="default" selected disabled>
											Zona de Delivery
										</option>
										{stateZones &&
											stateZones.map((e) => <option value={e}>{e}</option>)}
									</select>
									{currentErrors.deliveryZone && (
										<p>{currentErrors.deliveryZone}</p>
									)}

									<label htmlFor="">Nombre de Usuario</label>
									<input
										type="text"
										placeholder=""
										name="userName"
										value={currentInput.userName}
										onChange={handleChangeInputs}
									/>
									{currentErrors.userName && <p>{currentErrors.userName}</p>}

									<label htmlFor="">Contraseña</label>
									<input
										type="password"
										placeholder=""
										name="password"
										value={currentInput.password}
										onChange={handleChangeInputs}
									/>
									{currentErrors.password && <p>{currentErrors.password}</p>}

									<label htmlFor="">Email</label>
									<input
										type="text"
										placeholder=""
										name="email"
										value={currentInput.email}
										onChange={handleChangeInputs}
									/>
									{currentErrors.email && <p>{currentErrors.email}</p>}

									<select onChange={handleSelectEpagos}>
										<option value="default" selected disabled>
											Medio de Pago
										</option>
										<option>Sólo efectivo</option>
										<option>Sólo tarjetas</option>
										<option>Efectivo/Tarjetas</option>
									</select>
									{currentErrors.epagos && <p>{currentErrors.epagos}</p>}

									<button type="submit">
										<ButtonPrimary texto="CREAR COMERCIO" />
									</button>
								</form>
							</div>
						</div>
					) : null}
					{loggedUser &&
					configuracion.seleccionado === "usuario" &&
					configuracion.id !== "" &&
					configuracion.editar ? (
						<div>
							<h3>{`Edicion del usuario: ${configuracion.name}`}</h3>
							<form
								action=""
								className={styles.form__editInfoUser}
								onSubmit={handlerSubmitUser}
							>
								<h3>Modificar Datos</h3>

								<div>
									<div className={styles.form__sm}>
										<label htmlFor="">Nombre:</label>
										<input type="text" value={loggedUser.firstname} disabled />
									</div>
									<div className={styles.form__sm}>
										<label htmlFor="">Apellido:</label>
										<input type="text" value={loggedUser.lastname} disabled />
									</div>
								</div>
								<div>
									<div className={styles.form__sm}>
										<label htmlFor="">email:</label>
										<input type="text" value={loggedUser.email} disabled />
									</div>
									<div className={styles.form__sm}>
										<label htmlFor="">Teléfono:</label>
										<input
											type="text"
											placeholder={loggedUser.phone}
											name="phone"
											onChange={handlerChangeUser}
										/>
									</div>
								</div>
								<div>
									<div className={styles.form__sm}>
										<label htmlFor="">Direccion de Entrega:</label>
										<input
											type="text"
											placeholder={loggedUser.address}
											name="address"
											onChange={handlerChangeUser}
										/>
									</div>
									<div className={styles.form__sm}>
										<label htmlFor="">Imagen de perfil</label>
										<input
											type="file"
											placeholder="ingresar imagen"
											onChange={handleUserImgUpload}
										/>
									</div>
								</div>

								<input
									type="submit"
									value="Cambiar"
									className={styles.submit}
								/>
							</form>
						</div>
					) : null}

					{configuracion.seleccionado === "review" ? (
						<div className={styles.reviews}>
							<h3>Reviews</h3>

							<table>
								<tr>
									<th>Usuario</th>
									<th>Rating</th>
									<th>Accion</th>
								</tr>
								<tr>
									{reviews?.map((r) => (
										<div className={styles.tableContenido}>
											<td>{r?.name}</td>
											<td> {r?.rating}</td>

											<td className={styles.tdaccion}>
												<button onClick={() => dispatch(getReviewById(r._id))}>
													Seleccionar
												</button>
												<button onClick={deleteReviewHandler} value={r._id}>
													Eliminar
												</button>
											</td>
										</div>
									))}
								</tr>
							</table>
						</div>
					) : null}

					{configuracion.orders &&
					configuracion.id &&
					configuracion.seleccionado === "usuario" ? (
						<div>
							<h3>{`Pedidos del usuario: ${configuracion.name}`}</h3>
							<table>
								<tr>
									<th>ID de compra</th>
									<th>Fecha</th>
									<th>Descripción</th>
									<th>Total</th>
									<th>Comercio</th>
								</tr>
								{ordersClient.length
									? ordersClient?.map((x) => (
											<tr>
												<td className={styles.orderId}>{x.orderId}</td>
												<td>{x.createdAt}</td>
												<td>
													<ul className={styles.descripcionOrder}>
														{x.products.map((productos) => {
															return (
																<li key={x._id}>
																	-
																	{`${productos.name} ($${productos.price}) x ${
																		productos.cantidad
																	}. Total: $${
																		productos.price * productos.cantidad
																	}`}
																</li>
															);
														})}
													</ul>
												</td>
												<td>${x.total}</td>
												<td>{x.commerceName}</td>
											</tr>
									  ))
									: "Sin pedidos"}
							</table>
						</div>
					) : null}

					{configuracion.orders &&
					configuracion.id &&
					configuracion.seleccionado === "comercio" ? (
						<div>
							<h3>{`Pedidos del comercio: ${configuracion.name}`}</h3>
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

								{ordersCommerces.length
									? ordersCommerces?.map((x) => (
											<tr>
												<td className={styles.orderId}>{x.orderId}</td>
												<td>{x.createdAt}</td>
												<td>
													<ul className={styles.descripcionOrder}>
														<li key={x.createdAt}>
															{x.products.map((productos) => {
																return (
																	<li key={x._id}>
																		-
																		{`${productos.name} ($${
																			productos.price
																		}) x ${productos.cantidad}. Total: $${
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
													{x.payment === "Pago no recibido" &&
													x.status === "Aceptado" ? (
														<div>
															<button value={"MercadoPago"} name={"Pagos"}>
																MercadoPago
															</button>
															<button value={"Efectivo"} name={"Pagos"}>
																Efectivo
															</button>
														</div>
													) : null}
													{x.status !== "Rechazado" &&
													x.payment !== "Pago no recibido" ? (
														<div>
															<button value={"Pago no recibido"} name={"Pagos"}>
																Cancelar pago
															</button>
														</div>
													) : null}
													{x.status === "Rechazado" &&
													(x.payment === "MercadoPago" ||
														x.payment === "Efectivo") ? (
														<div>
															<button value={"Devuelto"} name={"Pagos"}>
																Devolver Pago
															</button>
														</div>
													) : null}
												</td>
												<td>{`${x.client.fullname}`}</td>
												<td>${x.total}</td>
											</tr>
									  ))
									: "Sin pedidos"}
							</table>
						</div>
					) : null}
				</div>
			</div>
			<div className={styles.container}>
				<div>
					<div>
						<form onSubmit={(e) => handlerSubmitCategory(e)}>
							<h4>Crear Categoria</h4>
							<input
								type="text"
								name="category"
								value={currentCategory.category}
								onChange={handlerOnchangeCategory}
							/>
							<button type="submit"> Crear </button>
						</form>
					</div>
					<div>
						<form onSubmit={handlerSubmitSubcategorySuper}>
							<h4>Crear Subcategoria</h4>
							<input
								type="text"
								name="subcategory"
								value={currentSubcategory.subcategory}
								onChange={(e) => handlerOnchangeSubcategory(e)}
							/>
							<select onChange={handlerOnchangeSubcategorySelect}>
								<option value="default" selected disabled>
									Categoria
								</option>

								{stateSuperCategories &&
									stateSuperCategories.map((e) => (
										<option value={e} name="category">
											{e}
										</option>
									))}
							</select>
							<button type="submit">Crear</button>
						</form>
					</div>
					<div>
						<form onSubmit={(e) => handlerSubmitDeliveryZone(e)}>
							<h4>Crear DeliveryZone</h4>
							<input
								type="text"
								name="deliveryZone"
								value={currentDeliveryZone.deliveryZone}
								onChange={handlerOnchangeDeliveryZone}
							/>
							<button type="submit"> Crear </button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
