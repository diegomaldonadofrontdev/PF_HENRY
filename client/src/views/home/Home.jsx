import React from "react";
import Features from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MenuHome from "../../components/MenuHome/MenuHome";
import Opiniones from "../../components/Opiniones/Opiniones";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<MenuHome />
			<Opiniones />
		</div>
	);
}
