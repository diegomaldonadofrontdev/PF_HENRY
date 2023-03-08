import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import OpinionCard from "../OpinionCard/OpinionCard";
import styles from "./OpinionesContainer.module.css";
import { getReview } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function OpinionesContainer() {
	const dispatch = useDispatch();

	const feedback = useSelector((state) => state.feedback);
	console.log(feedback);
	useEffect(() => {
		dispatch(getReview());
	}, [dispatch]);

	return (
		<div className={styles.opiniones__container}>
			<div className={styles.container}>
				<h3>Lo que opinan de nosotros</h3>
				{feedback.map((x) => (
					<OpinionCard
						name={x.name}
						opinion={x.opinion}
						rating={x.rating}
						image={x.image}
					/>
				))}
				{/* <OpinionCard
					name="Persona 1"
					opinion="La aplicacion esta muy buena, todo llego a tiempo y como lo pedi"
					rating="5"
				/> */}
			</div>
			<div className={styles.container}>
				<Link className={styles.boton} to="/opinion">
					<ButtonPrimary texto="Dejanos tu opinión" />
				</Link>
			</div>
		</div>
	);
}
