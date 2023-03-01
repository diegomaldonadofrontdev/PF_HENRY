import React from "react";
import Features from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MenuHome from "../../components/MenuHome/MenuHome";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<MenuHome />
		</div>
	);
}
