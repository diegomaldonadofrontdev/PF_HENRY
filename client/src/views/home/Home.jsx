import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroMain from "../../components/HeroMain/HeroMain";
import OpinionesContainer from "../../components/OpinionesContainer/OpinionesContainer";
import { getReview } from "../../redux/actions/actions";
import SliderSmall from "../../components/SliderSmall/SliderSmall";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReview());
	}, [dispatch]);

	return (
		<div>
			<Header />
			<HeroMain />
			<SliderSmall />
			<Features />
			<OpinionesContainer />
			<Footer />
			{/* <Hero />
			<Features />
			<MenuHome />
			<Opiniones /> */}
		</div>
	);
}
