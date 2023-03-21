// React and Hooks
import React, { useEffect, useState } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { postProduct } from "../../redux/actions/index";

// Libraries
import swal from "sweetalert";

// Components
import Header from "../../components/Header/Header";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

// Styles
import styles from "./ProductCreationForm.module.css";
import { updateProduct } from "../../redux/actions/updateProduct";

export default function ProductCreation(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		if (props.product) {
			const { _id, name, category, description, price, image, stock, active } =
				props.product;
			setCurrentInput({
				...currentInput,
				id: _id,
				name,
				category,
				description,
				image,
				price,
				stock,
				active,
			});
		} else {
			setCurrentInput({
				id: "",
				name: "",
				category: "",
				description: "",
				image: "",
				price: "",
				stock: 1,
				active: true,
			});
		}
	}, [props.product]);

	const tradeId = localStorage.idTrade;

	// const [currentErrorsCategory, setCurrentErrorsCategory] = useState({})
	//guarda los datos de los inputs
	const [currentInput, setCurrentInput] = useState({
		id: "",
		name: "",
		category: "",
		description: "",
		price: "",
		image: "",
		stock: 1,
		active: true,
	});

	// useEffect(()=>{
	// 	dispatch(getCategories())
	// }, [dispatch])

	//Registra los cambios en los inputs
	const handleChangeInputs = (e) => {
		const { name, value } = e.target;
		setCurrentInput({
			...currentInput,
			[name]: name === "stock" || name === "price" ? parseInt(value) : value,
		});
	};

	function handlerChangeCheck(e) {
		setCurrentInput({ ...currentInput, [e.target.name]: e.target.checked });
	}

	// Manejo la imagen con CLOUDINARY
	const handleProductImgUpload = async (e) => {
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

	//Envio los datos del form al BACK, actualiza, resetea el estado y captura errores
	const handlerSubmit = (e) => {
		e.preventDefault();
		const { name, category, description, price, image, stock } = currentInput;
		if (!name || !category || !description || !price || !image || !stock) {
			swal({
				title: "Error!",
				text: "Rellena todos los campos correctamente, por favor",
				icon: "error",
				button: "Ok",
			});
		} else {
			console.log("llego");
			if (props.product) {
				dispatch(updateProduct(currentInput));
				console.log("Update");

				props.fc(null);
			} else {
				dispatch(postProduct(currentInput, tradeId));
				console.log("Post");

				props.fc(null);
			}
			swal({
				title: "Listo!",
				text: "Producto creado correctamente",
				icon: "success",
				button: "Ok",
			});
			setCurrentInput({
				id: "",
				name: "",
				category: "",
				description: "",
				price: "",
				image: "",
				stock: 1,
				active: true,
			});
		}
	};

	return (
		<div className={styles.productCration__form}>
			<button
				onClick={() => {
					props.fc(null);
				}}
			>
				X
			</button>
			<div className={styles.container}>
				<form action="" className={styles.form} onSubmit={handlerSubmit}>
					<label htmlFor="">Nombre</label>
					<input
						type="text"
						placeholder=""
						name="name"
						value={currentInput.name}
						onChange={handleChangeInputs}
					/>

					<label htmlFor="">Categoría</label>
					<input
						type="text"
						placeholder=""
						name="category"
						value={currentInput.category}
						onChange={handleChangeInputs}
					/>

					<label htmlFor="">Precio</label>
					<input
						type="number"
						placeholder=""
						name="price"
						value={currentInput.price}
						onChange={handleChangeInputs}
					/>

					<label htmlFor="">Imagen</label>
					<input
						type="file"
						accept="image/"
						onChange={handleProductImgUpload}
					/>

					<label htmlFor="">Stock</label>
					<input
						type="number"
						min={0}
						placeholder=""
						name="stock"
						value={currentInput.stock}
						onChange={handleChangeInputs}
					/>

					{props.product ? <label htmlFor="">Cambiar estado</label> : null}

					{props.product ? (
						<input
							type="checkbox"
							name="active"
							checked={currentInput.active}
							value={currentInput.active}
							onChange={handlerChangeCheck}
						/>
					) : null}

					<label htmlFor="">Descripción</label>
					<textarea
						type="text"
						placeholder=""
						name="description"
						value={currentInput.description}
						onChange={handleChangeInputs}
					/>

					<button type="submit">
						<ButtonPrimary
							texto={
								props.flag === "create"
									? "REGISTRAR PRODUCTO"
									: "EDITAR PRODUCTO"
							}
						/>
					</button>
				</form>
			</div>
		</div>
	);
}
