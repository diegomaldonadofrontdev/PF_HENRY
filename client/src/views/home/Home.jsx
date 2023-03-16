import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroMain from "../../components/HeroMain/HeroMain";
import OpinionesContainer from "../../components/OpinionesContainer/OpinionesContainer";
import SliderSmall from "../../components/SliderSmall/SliderSmall";
import {
	getCLient,
	getTrades,
	getTradesCategories,
} from "../../redux/actions/actions";


export default function Home() {
	const dispatch = useDispatch();

	const idUser = window.localStorage.getItem("idUser");
	const allCommerces = useSelector((state) => state.allCommerces);

	useEffect(() => {
		if (idUser) {
			dispatch(getCLient(idUser));
		}
	}, [dispatch, idUser]);

	useEffect(() => {
		dispatch(getTrades());
		dispatch(getTradesCategories());
	}, []);

	return (
		<div>
			<Header />
			<HeroMain />
			<SliderSmall commerces={allCommerces} />
			<Features />
			<OpinionesContainer />
			<Footer />
		</div>
	);
}
