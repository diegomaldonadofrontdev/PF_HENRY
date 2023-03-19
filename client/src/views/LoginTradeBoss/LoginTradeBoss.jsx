import { useEffect, useState } from "react";
import styles from "./LoginTradeBoss.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import useTradeBoss from "../../Hooks/useTradeBoss";

export default function LoginTradeBoss() {

	const { login } = useTradeBoss()
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const idTradeBoss = window.localStorage.getItem('idTradeBoss');

	useEffect(() => {
		if (idTradeBoss) navigate("/adminowner");
	}, [idTradeBoss, navigate]);

	const handleLogin = async (e) => {
		e.preventDefault();
		login({ email, password });
	};

	// const handleSiginWhitGoogle = (e) => {
	// 	loginWithPopup();
	// };

	return (
		<>
			<div className={styles.login}>
				<Header />
				<div className={styles.container}>
					<h2>Inicio de sesion de comerciante</h2>
					<ButtonPrimary texto="Registra tu negocio" />
					<form onSubmit={handleLogin} className={styles.form}>
						<div className={styles.user}>
							<label htmlFor="">Usuario</label>
							<input type="text" value={email} name="email" placeholder="Ingrese su usuario" onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className={styles.password}>
							<label htmlFor="">Clave</label>
							<input type="password" value={password} name="password" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className={styles.options}>
							<Link to="/registration/tradeboss"><ButtonPrimary texto="Sing In" /></Link>
							<button style={{ border: "none" }} ><ButtonPrimary texto="Login" /></button>
						</div>
					</form>
					<div className={styles.other}>
						{/* <button style={{ border: "none" }} onClick={handleSiginWhitGoogle}><ButtonPrimary texto="Sing In con Google" /></button> */}
						{/* <ButtonPrimary texto="Sing In con Facebook" /> */}
					</div>

					<div className={styles.faqs}>
						<a href="/">Que es pedivey?</a>
						<a href="/">Como funciona?</a>
						<a href="/">Tutoriales</a>
					</div>
				</div>
			</div>
		</>
	);
}
