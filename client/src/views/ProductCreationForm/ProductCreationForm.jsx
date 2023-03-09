import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {getCategories, postProduct} from "../../Redux/actions/actions"
import styles from "./ProductCreationForm.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import swal from "sweetalert";



export default function ProductCreationForm() {
const Validate = (currentInput) => {
	let currentErrors = []

//Validacion stock
if ( !/^[0-9,$]*$/.test(currentInput.stock)) currentErrors.stock = "Solo se permiten números!";
   if (!currentInput.stock) currentErrors.stock = "Por favor ingresa un número de stock ";

    
//validacion precio
	if ( !/^[0-9,$]*$/.test(currentInput.price)) currentErrors.price = "Solo se permiten números!";
   if (!currentInput.price) currentErrors.price = "Por favor ingresa un Precio";

//Validacion nombre
if (!currentInput.name) currentErrors.name = "Por favor ingresa un Nombre"

//Validacion categoria
if (!currentInput.category) currentErrors.category = "Por favor ingresa una categoría"

//validacion rating
if ( !/^[0-9,$]*$/.test(currentInput.rating)) currentErrors.rating = "Solo se permiten números del 1 al 10";
if (currentInput.rating < 1 || currentInput.rating > 10) currentErrors.rating = "Solo se permiten números del 1 al 10"
   if (!currentInput.rating) currentErrors.rating = "Por favor ingresa un rating del 1 al 10 ";


      return currentErrors
}

const dispatch = useDispatch()
// const categories = useSelector((state) => state.categories)
const [currentErrors, setCurrentErrors] = useState({})
// const [currentErrorsCategory, setCurrentErrorsCategory] = useState({})
const [currentInput, setCurrentInput] = useState({
	"name": "",
    "category": "",
    "description": "",
    "price": "",
    "image": "",
    "rating": "",
    "stock": "",
    "status": true
})

// useEffect(()=>{
// 	dispatch(getCategories())
// }, [dispatch])

useEffect(()=>{
	setCurrentErrors(Validate(currentInput))
	//setCurrentErrorsCategory(Validate(currentInput))
}, [currentInput])


const handlerInputs = (e) =>{
e.preventDefault()
setCurrentInput({
	...currentInput,
[e.target.name] : e.target.value
})
setCurrentErrors(Validate({
	...currentInput,
[e.target.name] : e.target.value
}))
}

const handlerImg = (e) => {
	setCurrentInput({
		...currentInput,
	[e.target.name] : e.target.value
	})
}

const handlerSubmit = (e) => {
	e.preventDefault()
	if(!Object.keys(currentErrors)){
		swal({
			title: "Listo!",
			text: "Tu producto fue creado correctamente",
			icon: "success",
			button: "Ok",
		});
		dispatch(postProduct(currentInput))
		setCurrentInput({
	        "name": "",
            "category": "",
            "description": "",
            "price": "",
            "image": "",
            "rating": "",
            "stock": "",
            "status": true
		})
	} else {
		swal({
			title: "Error!",
			text: "Por favor llena los campos correctamente",
			icon: "error",
			button: "Ok",
		});
	}
}





	return (
		<div className={styles.productCration__form}>
			<Header />
			<div className={styles.container}>
				<form action="" className={styles.form} onSubmit={(e) => handlerSubmit(e)}>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Nombre</label>
							<input type="text" placeholder="" onChange={handlerInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Categoría</label>
							<input type="text" placeholder="" onChange={handlerInputs} />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Precio</label>
							<input type="text" placeholder="" onChange={handlerInputs} />
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Imagen</label>
							<input type="file" placeholder="" onChange={handlerImg} />
						</div>
					</div>
					<div className={styles.twoColumns}>
						<div className={styles.input__container}>
							<label htmlFor="">Rating</label>
							<input type="text" placeholder="" onChange={handlerInputs}/>
						</div>
						<div className={styles.input__container}>
							<label htmlFor="">Stock</label>
							<input type="text" placeholder="" onChange={handlerInputs}/>
						</div>
					</div>

					<div className={styles.input__container}>
						<label htmlFor="">Descripción</label>
						<textarea type="text" placeholder="" onChange={handlerInputs}/>
					</div>

					<button type="submit"><ButtonPrimary texto="REGISTRAR PRODUCTO"  /></button>
				</form>
			</div>
		</div>
	);
}
