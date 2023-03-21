// React and Hooks
import React, { useState, useEffect } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import {
	getSubCategories,
	getTradesCategories,
	getDeliveryZones,
	commerceRegister,
} from "../../redux/actions/index";

// Libraries
import swal from "sweetalert";

// Components
import Header from "../../components/Header/Header";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

// Styles
import styles from "./CommerceRegistrationForm.module.css";
import { Link } from "react-router-dom";

export default function CommerceRegistrationForm() {
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
	const dispatch = useDispatch();
	const stateCategories = useSelector((state) => state.tradesCategories);
	const stateSubCategories = useSelector((state) => state.tradesSubCategories);
	const stateZones = useSelector((state) => state.zones);
	// const [subCat, setSubCat] = useState(stateSubCategories);
	//Estado que maneja la imagen
	// const [commerceImg, setCommerceImg] = useState("");
	const [currentErrors, setCurrentErrors] = useState({});

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

	useEffect(() => {
		dispatch(getTradesCategories());
		dispatch(getDeliveryZones());
	}, [dispatch]);

	useEffect(() => {
		if (currentInput.category !== "default" && currentInput.category) {
			dispatch(getSubCategories(currentInput.category));
		}
	}, [currentInput.category]);

	useEffect(() => {
		if (stateSubCategories) {
			setCurrentInput({ ...currentInput, subcategory: stateSubCategories });
		}
	}, [stateSubCategories]);

	useEffect(() => {
		setCurrentErrors(Validate(currentInput));
	}, [currentInput]);

	//registramos los cambios en los inputs
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

	// Manejo la imagen con CLOUDINARY
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

	//registramos los values de los select
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

	//Envio los datos del form al BACK, actualiza, resetea el estado y captura errores
	const handlerSubmit = (e) => {
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

	return (
		<div className={styles.commerceRegistration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form} onSubmit={handlerSubmit}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
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
						</div>
						<div className={styles.input__container}>
							<select onChange={handleSelectCategories}>
								<option value="default" selected disabled>
									Categoria
								</option>
								{stateCategories &&
									stateCategories.map((e) => <option value={e}>{e}</option>)}
							</select>
							{currentErrors.category && <p>{currentErrors.category}</p>}
						</div>
						<div className={styles.input__container}>
							<select onChange={handleSelectSubCategories}>
								<option
									value="default"
									selected={currentInput.category === "default"}
								>
									Subcategoria
								</option>

								{currentInput.category && currentInput.category !== "default"
									? stateSubCategories &&
									  stateSubCategories?.map((e) => (
											<option value={e}>{e}</option>
									  ))
									: null}
							</select>
							{currentErrors.subcategory && <p>{currentErrors.subcategory}</p>}
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Descripción</label>
							<input
								type="text"
								placeholder=""
								name="description"
								value={currentInput.description}
								onChange={handleChangeInputs}
							/>
							{currentErrors.description && <p>{currentErrors.description}</p>}
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre de usuario</label>
							<input
								type="text"
								placeholder=""
								name="userName"
								value={currentInput.userName}
								onChange={handleChangeInputs}
							/>
							{currentErrors.userName && <p>{currentErrors.userName}</p>}
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Email</label>
							<input
								type="text"
								placeholder=""
								name="email"
								value={currentInput.email}
								onChange={handleChangeInputs}
							/>
							{currentErrors.email && <p>{currentErrors.email}</p>}
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Password</label>
							<input
								type="password"
								placeholder=""
								name="password"
								value={currentInput.password}
								onChange={handleChangeInputs}
							/>
							{currentErrors.password && <p>{currentErrors.password}</p>}
						</div>
					</div>

					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Provincia</label>
							<input
								type="text"
								placeholder=""
								name="province"
								value={currentInput.province}
								onChange={handleChangeInputs}
							/>
							{currentErrors.province && <p>{currentErrors.province}</p>}
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Ciudad</label>
							<input
								type="text"
								placeholder=""
								name="city"
								value={currentInput.city}
								onChange={handleChangeInputs}
							/>
							{currentErrors.city && <p>{currentErrors.city}</p>}
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Dirección</label>
							<input
								type="text"
								placeholder=""
								name="address"
								value={currentInput.address}
								onChange={handleChangeInputs}
							/>
							{currentErrors.address && <p>{currentErrors.address}</p>}
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Teléfono</label>
							<input
								type="text"
								placeholder=""
								name="phone"
								value={currentInput.phone}
								onChange={handleChangeInputs}
							/>
							{currentErrors.phone && <p>{currentErrors.phone}</p>}
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
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
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<select onChange={handleSelectEpagos}>
								<option value="default" selected disabled>
									Medio de Pago
								</option>
								<option>Sólo efectivo</option>
								<option>Sólo tarjetas</option>
								<option>Efectivo/Tarjetas</option>
							</select>
							{currentErrors.epagos && <p>{currentErrors.epagos}</p>}
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input
								type="file"
								placeholder=""
								onChange={handleCommerceImgUpload}
							/>
							{currentErrors.image && <p>{currentErrors.image}</p>}
						</div>
					</div>
					<button type="submit">
						<ButtonPrimary texto="CREAR COMERCIO" />
					</button>

					<Link to="/login/trades"><h4 style={{color: "blue", textDecorationLine:"underline"}}>Si ya tienes un comercio registrado da click aqui para iniciar sesion</h4></Link>
				</form>
			</div>
		</div>
	);
}
