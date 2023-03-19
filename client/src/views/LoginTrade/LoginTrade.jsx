import { useEffect, useState } from "react";
import styles from "./LoginTrade.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import useTrade from "../../Hooks/useTrade";

export default function LoginTradeBoss() {

	const { login } = useTrade();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const idTrade = window.localStorage.getItem('idTrade');

	useEffect(() => {
		if (idTrade) navigate("/adminowner");
	}, [idTrade, navigate]);

	const handleLogin = async (e) => {
		e.preventDefault();
		login({ username, password });
	};

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
							<input type="text" value={username} name="email" placeholder="Ingrese su usuario" onChange={(e) => setUsername(e.target.value)} />
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
