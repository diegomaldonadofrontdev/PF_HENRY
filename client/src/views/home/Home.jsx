import React from "react";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HeroMain from "../../components/HeroMain/HeroMain";
import MenuHome from "../../components/MenuHome/MenuHome";
import Opiniones from "../../components/Opiniones/Opiniones";
import OpinionesContainer from "../../components/OpinionesContainer/OpinionesContainer";
import SliderSmall from "../../components/SliderSmall/SliderSmall";

export default function Home() {
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
