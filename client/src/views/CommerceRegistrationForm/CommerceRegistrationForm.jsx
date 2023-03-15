import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {commerceRegister} from "../../Redux/actions/actions"
import styles from "./CommerceRegistrationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import swal from "sweetalert";



export default function CommerceRegistrationForm() {

const dispatch = useDispatch()
//Estado que maneja la imagen
const [commerceImg, setCommerceImg] = useState("")
const [currentInput, setCurrentInput] = useState({
	commerceName: "",
	category: "",
	subcategory: "",
	description: "",
	userName: "",
	email: "",
	password: "",
	country: "",
	city: "",
	address: "",
	phone: "",
	deliveryZone: [],
	products: [],
	rating: "",
	epagos: "",
	status: true,
});
console.log(currentInput);

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

//Envio los datos del form al BACK, actualiza, resetea el estado y captura errores
const handlerSubmit = (e) => {
	e.preventDefault();
	const { commerceName, category, userName, epagos, password, subcategory, description, email, deliveryZone, phone, image, rating, country, city, address } =
		currentInput;
	if (
		!commerceName ||
		!category ||
		!subcategory ||
		!password ||
		!description ||
		!userName ||
		!email ||
		!image ||
		!rating ||
		!city ||
		!country ||
		!address ||
		!phone ||
		!deliveryZone ||
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
			text: "Producto creado correctamente",
			icon: "success",
			button: "Ok",
		});
		setCurrentInput({
			name: "",
			category: "",
			description: "",
			price: "",
			image: "",
			rating: "",
			stock: "",
			status: true,
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
							<label htmlFor="">Subcategoria</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Descripción</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre de usuario</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Email</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Password</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
					</div>

					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">País</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Ciudad</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Dirección</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Teléfono</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Zona Delivery</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Rating</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Medios de pago</label>
							<input type="text" placeholder="" onChange={handleChangeInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input type="file" placeholder="" onChange={handleCommerceImgUpload}/>
						</div>
					</div>
					<ButtonPrimary texto="CREAR COMERCIO" />
				</form>
			</div>
		</div>
	);
}
