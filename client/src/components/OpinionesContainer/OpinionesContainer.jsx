import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import OpinionCard from "../OpinionCard/OpinionCard";
import styles from "./OpinionesContainer.module.css";
import { getReview } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function OpinionesContainer() {
	const dispatch = useDispatch();

	const feedback = useSelector((state) => state.feedback);
	
	useEffect(() => {
		dispatch(getReview());
	}, [dispatch]);

	const [indexCarrusel, setIndexCarrusel] = useState(0);

	function avanzarSlider() {
		console.log(indexCarrusel);

		if (indexCarrusel === 3) {
			setIndexCarrusel(0);
		} else {
			setIndexCarrusel(indexCarrusel + 1);
		}
	}

	function retrocederSlider() {
		console.log(indexCarrusel);

		if (indexCarrusel === 0) {
			setIndexCarrusel(3);
		} else {
			setIndexCarrusel(indexCarrusel - 1);
		}
	}

	return (
		<div className={styles.opiniones__container}>
			<div className={styles.container}>
				<h3>Lo que opinan de nosotros</h3>
				<div className={styles.carrusel__container}>
					<div>
						<div
							className={styles.btn__arrow}
							onClick={() => {
								retrocederSlider();
							}}
						>
							<i class="bx bxs-left-arrow"></i>
						</div>
						{feedback.length ? (
							<OpinionCard
								name={feedback[indexCarrusel].name}
								opinion={feedback[indexCarrusel].opinion}
								rating={feedback[indexCarrusel].rating}
								image={feedback[indexCarrusel].image}
							/>
						) : null}
						<div
							className={styles.btn__arrow}
							onClick={() => {
								avanzarSlider();
							}}
						>
							<i class="bx bxs-right-arrow"></i>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container__button}>
				<Link className={styles.boton} to="/opinion">
					<ButtonPrimary texto="Dejanos tu opinión" />
				</Link>
			</div>
		</div>
	);
}
