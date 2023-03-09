import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Filter__SearchView.module.css";
import {
	getTradesByCategory,
	getTradesBySubCategory,
	getTrades,
	getTradesByCity,
	getCategories
} from "../../Redux/actions/actions"
// Filtros que agregar: deliveryCity, category, subcategory, epago

export default function Filter__SearchView() {
    const dispatch = useDispatch()
	const allCommerces = useSelector((state) => state.allCommerces);
	console.log(allCommerces)
	const allCategories = useSelector((state) => state.categories)
	console.log(allCategories)
	const [currentFilterByCategory, setCurrentFilterByCategory] = useState('')
	const [currentFilterBySubCategory, setCurrentFilterBySubCategory] = useState('')
	const [currentFilterByCity, setCurrentFilterByCity] = useState('')

	useEffect(() => {
		dispatch(getTrades())
		dispatch(getCategories())
	}, [dispatch])


	
//registra los values en los selects
const handleFilterByCity = (e) => {
	e.preventDefault();	
	dispatch(getTradesByCity(e.target.value))
	setCurrentFilterByCity(e.target.value)
}

const handleFilterByCategory = (e) => {
	e.preventDefault();
	dispatch(getTradesByCategory(e.target.value))
	setCurrentFilterByCategory(e.target.value)
}

const handleFilterBySubCategory = (e) => {
	e.preventDefault();	
	dispatch(getTradesBySubCategory(e.target.value))
	setCurrentFilterBySubCategory(e.target.value)
}

const handleFilterByePago = (e) => {
	e.preventDefault();	
}


	return (
		<div className={styles.filterSearchView}>
			<div className={styles.container}>
				<h3>Filtrar busqueda</h3>
				<div className={styles.filter__container}>
					<div className={styles.select__container}>
						<h4>Ciudad:</h4>
						<select name="" id="" onChange={handleFilterByCity}>
							<option value="">Ciudad</option>
							{allCommerces.map((e)=>(<option value={e.city}>{e.city}</option>))}
						</select>
					</div>
					<div className={styles.select__container}>
						<h4>Categoria</h4>
						<select name="" id="" onChange={handleFilterByCategory}>
							<option value="">Categoria</option>
							{allCategories.map((e)=>(<option value={e}>{e}</option>))}
						</select>
					</div>
					<div className={styles.select__container}>
						<h4>Subcategoria:</h4>
						<select name="" id="" onChange={handleFilterBySubCategory}>
							<option value="">Subcategoria</option>
							{allCommerces.map((e)=>(<option value={e.subcategory}>{e.subcategory}</option>))}
						</select>
					</div>
					<div className={styles.select__container}>
						<h4>Medio de pago:</h4>
						<select name="" id="">
							<option value="">Medio de pago</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}
