import React from "react";
import ComercioCard from "../ComercioCard/ComercioCard";
import styles from "./CardStoreContainer.module.css";

export default function CardStoreContainer() {
	const comercios = [
		{
			id: 1,
			commerceName: "Los hijos de fruta",
			category: "verduleria",
			description: "Las verduras frescas de mejor calidad de la zona",
			userName: "verdulagas",
			email: "loshijosdefruta@gmail.com",
			password: "verdu123",
			country: "Argentina",
			city: "Rosario",
			address: "belgrano 1324",
			phone: "03428901929",
			active: true,
			pagoOnline: false,
			rating: 1,
			img: "",
		},
		{
			id: 2,
			commerceName: "Farmacito",
			category: "farmacia",
			description: "los precios mas baratos ante cualquier urgencia",
			userName: "farmaboys",
			email: "farmacito08@gmail.com",
			password: "farma321",
			country: "Paraguay",
			city: "Asuncion",
			address: "Romero 3543",
			phone: "01245009483",
			active: true,
			pagoOnline: true,
			rating: 2,
			img: "",
		},
		{
			id: 3,
			commerceName: "Fregadito",
			category: "limpieza",
			description: "los productos para el hogar, al precio mas accesible",
			userName: "lavaditoelmate",
			email: "fregandoporunmañana@gmail.com",
			password: "detergen3",
			country: "Argentina",
			city: "Tucuman",
			address: "Juan Manuel Dorrego 2394",
			phone: "029348510",
			active: true,
			pagoOnline: false,
			rating: 3,
			img: "",
		},
		{
			id: 4,
			commerceName: "Hambur-heros",
			category: "hamburgueseria",
			description:
				"Las mejores promociones en hamburguesas, que incluyen juguetes para los mas chicos",
			userName: "ironburger",
			email: "losaburgers@gmail.com",
			password: "hulkvegano123",
			country: "Colombia",
			city: "Medellin",
			address: "Bolivar 857",
			phone: "08958839219",
			active: true,
			pagoOnline: true,
			rating: 4,
			img: "",
		},
		{
			id: 5,
			commerceName: "La Pizza-Nostra",
			category: "Pizzeria",
			description: "Si te contaramos nuestras recetas,no podriamos alimentarte",
			userName: "muzzacorleone",
			email: "vitoycalabresa@gmail.com",
			password: "tonyjamone",
			country: "Uruguay",
			city: "Montevideo",
			address: "Artigas 2563",
			phone: "028575643",
			active: true,
			pagoOnline: false,
			rating: 5,
			img: "",
		},
		{
			id: 6,
			commerceName: "El pinar",
			category: "Restaurant",
			description: "los mejores platos, a delivery y en el lugar",
			userName: "pinito4215",
			email: "araucariasno@gmail.com",
			password: "araucan0s",
			country: "Argentina",
			city: "Posadas",
			address: "Entre Rios 6329",
			phone: "045829394",
			active: true,
			pagoOnline: true,
			rating: 5,
			img: "",
		},
		{
			id: 7,
			commerceName: "Pizzteros",
			category: "Pizzeria",
			description:
				"Si no llega tu pedido en tiempo y forma, te devolvemos la plata",
			userName: "hondaypizza",
			email: "harleypizzason@gmail.com",
			password: "ducatiprovolone",
			country: "Argentina",
			city: "Buenos Aires",
			address: "Rosas",
			phone: "074372894",
			active: true,
			pagoOnline: true,
			rating: 6,
			img: "",
		},
	];
	return (
		<div>
			{comercios.map((x) =>
				x.active ? (
					<ComercioCard
						name={x.commerceName}
						pagoOnline={x.pagoOnline}
						rating={x.rating}
						img={x.img}
						id={x.id}
						key={x.id}
						category={x.category}
					/>
				) : null
			)}
		</div>
	);
}
