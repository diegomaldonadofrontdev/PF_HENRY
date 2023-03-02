import React from "react";
import HeroForm from "../../components/HeroForm/HeroForm";
import styles from "./HomeLocal.module.css";
import { Link } from "react-router-dom";
import ButtonPrimary from "./../../components/ButtonPrimary/ButtonPrimary";
import img from "../../images/icon.webp";

export default function HomeLocal() {
	return (
		<div className={styles.home__local}>
			<header className={styles.header}>
				<div className={styles.container}>
					<h1>Pedi Very</h1>
					<div>
						<Link>Como funcionamos?</Link>
						<Link>Preguntas frecuentes</Link>
						<ButtonPrimary texto="Registrar mi negocio" />
					</div>
				</div>
			</header>
			<HeroForm />
			<div className={styles.features__owner}>
				<div className={styles.container}>
					<h2>
						Comenzar a <span>vender</span> es asi de simple
					</h2>
					<div className={styles.features}>
						<div className={styles.feature}>
							<p>1</p>
							<img src={img} alt="" />
							<p>Registra tus datos y la informacion necesaria</p>
						</div>
						<div className={styles.feature}>
							<p>2</p>
							<img src={img} alt="" />
							<p>Registra tus datos y la informacion necesaria</p>
						</div>
						<div className={styles.feature}>
							<p>3</p>
							<img src={img} alt="" />
							<p>Registra tus datos y la informacion necesaria</p>
						</div>
						<div className={styles.feature}>
							<p>4</p>
							<img src={img} alt="" />
							<p>Registra tus datos y la informacion necesaria</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.historia}>
				<div className={styles.container}>
					<h3>
						Quienes <br />
						<span>somos</span>
					</h3>
					<p>
						Te compartirmos una de las tantas historias de exitos de nuestros
						socios comercailes. Vos tambien podes hacer crecer tu negocio.{" "}
					</p>
					<button>Registrarme ya</button>
					<div className={styles.video}>
						<iframe
							width="1280"
							height="720"
							src="https://www.youtube.com/embed/rV9qCCwuvGw"
							title="Tutorial Onboarding Digital PedidosYa - Facturación"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
