import React from "react";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroMain from "../../components/HeroMain/HeroMain";
import OpinionesContainer from "../../components/OpinionesContainer/OpinionesContainer";
import SliderSmall from "../../components/SliderSmall/SliderSmall";
import { useSelector } from "react-redux";

export default function Home() {

	const currentClient = useSelector(state => state.currentClient)
	console.log(currentClient);

	return (
		<div>
			<Header />
			<HeroMain />
			<SliderSmall />
			<Features />
			<OpinionesContainer />
			<Footer />
		</div>
	);
}
