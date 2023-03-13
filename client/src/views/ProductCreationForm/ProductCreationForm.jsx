import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, postProduct } from "../../Redux/actions/actions";
import styles from "./ProductCreationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import swal from "sweetalert";

export default function ProductCreation() {
	const dispatch = useDispatch();
	// const categories = useSelector((state) => state.categories)

	const [productImg, setProductImg] = useState("");
	// const [currentErrorsCategory, setCurrentErrorsCategory] = useState({})
	//guarda los datos de los inputs
	const [currentInput, setCurrentInput] = useState({
		name: "",
		category: "",
		description: "",
		price: "",
		image: "",
		rating: "",
		stock: "",
		status: true,
	});
	console.log(currentInput);

	// useEffect(()=>{
	// 	dispatch(getCategories())
	// }, [dispatch])

	//Registra los cambios en los inputs
	const handleChangeInputs = (e) => {
		setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
	};

	// Manejo la imagen con CLOUDINARY
	const handleProductImgUpload = async (e) => {
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
		const { name, category, description, price, image, rating, stock } =
			currentInput;
		if (
			!name ||
			!category ||
			!description ||
			!price ||
			!image ||
			!rating ||
			!stock
		) {
			swal({
				title: "Error!",
				text: "Rellena todos los campos correctamente, por favor",
				icon: "error",
				button: "Ok",
			});
		} else {
			dispatch(postProduct(currentInput));
			swal({
				title: "Listo!",
				text: "Producto creado correctamente",
				icon: "succes",
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
		<div className={styles.productCration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form} onSubmit={handlerSubmit}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre</label>
							<input
								type="text"
								placeholder="Nombre..."
								name="name"
								value={currentInput.name}
								onChange={handleChangeInputs}
							/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Categoría</label>
							<input
								type="text"
								placeholder=""
								name="category"
								value={currentInput.category}
								onChange={handleChangeInputs}
							/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Precio</label>
							<input
								type="text"
								placeholder=""
								name="price"
								value={currentInput.price}
								onChange={handleChangeInputs}
							/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input
								type="file"
								accept="image/"
								onChange={handleProductImgUpload}
							/>
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Rating</label>
							<input
								type="text"
								placeholder=""
								name="rating"
								value={currentInput.rating}
								onChange={handleChangeInputs}
							/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Stock</label>
							<input
								type="text"
								placeholder=""
								name="stock"
								value={currentInput.stock}
								onChange={handleChangeInputs}
							/>
						</div>
					</div>

					<div className={styles.input__container}>
						<label htmlFor="">Descripción</label>
						<textarea
							type="text"
							placeholder=""
							name="description"
							value={currentInput.description}
							onChange={handleChangeInputs}
						/>
					</div>

					<button type="submit">
						<ButtonPrimary texto="REGISTRAR PRODUCTO" />
					</button>
				</form>
			</div>
		</div>
	);
}
