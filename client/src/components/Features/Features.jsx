import React from "react";
import styles from "./Features.module.css";
import logo from "../../images/logo.png";
import CardPrimary from "../CardPrimary/CardPrimary";
import useUser from "../../Hooks/useUser";

export default function Features() {

	const { isLogged } = useUser();
	const idUser = window.localStorage.getItem('idUser');

	return (
		<div className={styles.features}>
			<div className={styles.container}>
				<div className={styles.features__header}>
					<h2>
						Unite a <img src={logo} alt="" />
					</h2>
				</div>

				<div className={styles.features__container}>
					<CardPrimary
						titulo={"Registrá tu restaurante"}
						texto="Descubrí los beneficios que tiene pertenecer a nuestro equipo."
						img={
							"https://foodandtravel.mx/wp-content/uploads/2022/07/Comer-en-la-Condesa.jpg"
						}
						to="/registration_commerce"
					/>
					<CardPrimary
						titulo={"Registrá tu comercio"}
						texto="Accedé a los muchísimos usuario de Pedi-Very."
						img={
							"https://d3nqlc6zkdn9bc.cloudfront.net/wp-content/uploads/2021/01/29181504/e-commerce-jelpit-marketing-digital.jpg"
						}
						to="/registration_commerce"
					/>
					{!idUser && !isLogged &&
						<CardPrimary
							titulo={"Unite como usuario"}
							texto="Crea un perfil y pedí lo que quieras cuando quieras."
							img={
								"https://media.istockphoto.com/id/613241758/id/foto/wanita-muda-bekerja-pada-laptop.jpg?s=612x612&w=0&k=20&c=p1ReR76DS4RsqL5ojvCwGd3KsMbbtReKLJ43YY931AA="
							}
							to="/registration"
						/>}
				</div>
			</div>
		</div>
	);
}
