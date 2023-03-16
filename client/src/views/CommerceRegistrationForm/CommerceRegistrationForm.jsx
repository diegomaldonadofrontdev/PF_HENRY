import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	commerceRegister,
	getSubCategories,
	getTradesCategories,
} from "../../redux/actions/actions";
import styles from "./CommerceRegistrationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import swal from "sweetalert";

export default function CommerceRegistrationForm() {
	const dispatch = useDispatch();
	const stateCategories = useSelector((state) => state.tradesCategories);
	const stateSubCategories = useSelector((state) => state.tradesSubCategories);

	const [subCat, setSubCat] = useState(stateSubCategories);
	console.log(stateSubCategories);
	//Estado que maneja la imagen
	const [commerceImg, setCommerceImg] = useState("");

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
	}, [dispatch]);

	useEffect(() => {
		if (currentInput.category !== "default") {
			console.log(currentInput.category);
			dispatch(getSubCategories(currentInput.category));
		}
	}, [currentInput.category]);

	useEffect(()=>{

	})

	//registramos los cambios en los inputs
	const handleChangeInputs = (e) => {
		setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
	};

	// Manejo la imagen con CLOUDINARY
	const handleCommerceImgUpload = async (e) => {
		const files = e.target.files;
		console.log(files);
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
	};

	const handleSelectSubCategories = (e) => {
		e.preventDefault();
		setCurrentInput({
			...currentInput,
			subcategory: e.target.value,
		});
	};

	const handleSelecDeliveryZone = (e) => {
		e.preventDefault();
		setCurrentInput({
			...currentInput,
			deliveryZone: [currentInput.deliveryZone, e.target.value],
		});
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
			rating,
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
			!rating ||
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
				rating: "",
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
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<select onChange={handleSelectCategories}>
								<option value="default" selected disabled>
									Categoria
								</option>
								{stateCategories &&
									stateCategories.map((e) => <option value={e}>{e}</option>)}
								{console.log(stateCategories)}
							</select>
						</div>
						{currentInput.category !== "default" ? (
							<div className={styles.input__container}>
								<select onChange={handleSelectSubCategories}>
									<option
										value="default"
										selected={(currentInput.category = "default")}
									>
										Subcategoria
									</option>

									{currentInput.category && currentInput.category !== "default"
										? stateSubCategories?.map((e) => (
												<option value={e}>{e}</option>
										  ))
										: null}
								</select>
							</div>
						) : null}
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Descripción</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre de usuario</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Email</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Password</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
					</div>

					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Provincia</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Ciudad</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Dirección</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Teléfono</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Zona Delivery</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Rating</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Medios de pago</label>
							<input type="text" placeholder="" onChange={handleChangeInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input
								type="file"
								placeholder=""
								onChange={handleCommerceImgUpload}
							/>
						</div>
					</div>
					<button type="submit">
						<ButtonPrimary texto="CREAR COMERCIO" />
					</button>
				</form>
			</div>
		</div>
	);
}
