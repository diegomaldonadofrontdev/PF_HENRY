import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroMain from "../../components/HeroMain/HeroMain";
import OpinionesContainer from "../../components/OpinionesContainer/OpinionesContainer";
import SliderSmall from "../../components/SliderSmall/SliderSmall";
import { getCLient } from "../../redux/actions/actions";

export default function Home() {

	const dispatch = useDispatch(); 

	const idUser = window.localStorage.getItem('idUser')

	useEffect(() => {
		if(idUser) {
			dispatch(getCLient(idUser))
		}
	},[dispatch, idUser])

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
