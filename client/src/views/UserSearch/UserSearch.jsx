import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTrades } from "../../Redux/actions/actions";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter__SearchView from "../../components/Filter__SearchView/Filter__SearchView";
import ComercioCard from "../../components/ComercioCard/ComercioCard";
import styles from "./UserSearch.module.css";


export default function UserSearch() {
  const dispatch = useDispatch()

	const comercios = useSelector((state) => state.allCommerces);

	const [category, setCategory] = useState('')
	const [city, setCity] = useState('')
	const [subcategory, setSubCategory] = useState('')


useEffect(()=>{
	dispatch(getTrades())
}, [dispatch])
	
	

	

	return (
		<>
			<Header />
			<div className={styles.banner}>
				<div className={styles.container}>
					<h2>Encontrá lo que buscás</h2>
				</div>
			</div>


			<div className={styles.search__container}>
				<div className={styles.filtros__container}>
					<Filter__SearchView setCity={setCity} setCategory={setCategory} setSubCategory={setSubCategory}/>
				</div>

				<div className={styles.cards__container}>
					<div className={styles.search__results}>
						<p>{comercios.length} Locales encontrados:</p>
						{comercios.map((e) => (
							<Link to={`/comercio/${e.id}`}><ComercioCard id={e.id} name={e.commerceName} rating={e.rating}/></Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
