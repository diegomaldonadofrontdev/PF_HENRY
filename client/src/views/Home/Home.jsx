// React and Hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { getTrades } from "../../redux/actions/index";
import getClient from "../../redux/actions/getClient";

// Components
import Header from "../../components/Header/Header";
import HeroMain from "../../components/HeroMain/HeroMain";
import SliderSmall from "../../components/SliderSmall/SliderSmall";
import Features from "../../components/Features/Features";
import FeedbackContainer from "../../components/FeedbackContainer/FeedbackContainer";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const idUser = window.localStorage.getItem("idUser");
	const idTrade = window.localStorage.getItem("idTrade");
	const allCommerces = useSelector((state) => state.allCommerces);

	useEffect(() => {
		if(idTrade) navigate("/adminowner")
	}, []);

	useEffect(() => {
		if (idUser) {
			dispatch(getClient(idUser));
		}
	}, [dispatch, idUser]);

	useEffect(() => {
		dispatch(getTrades());
	}, [dispatch]);

	return (
		<div>
			<Header />
			<HeroMain />
			<SliderSmall commerces={allCommerces} />
			<Features />
			<FeedbackContainer />
			<Footer />
		</div>
	);
}
