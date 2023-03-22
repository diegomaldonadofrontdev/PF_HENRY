import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
	const { isAuthenticated, loginWithPopup } = useAuth0();
	const { loginFromCart, isLogged, login, registerWhitGoogle } = useUser();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const trade = window.localStorage.getItem("hrefcompra");

	useEffect(() => {
		if((isLogged || isAuthenticated) && loginFromCart) {
			// window.location.href = `https://pf-henry-two.vercel.app${trade}`
			// window.location.href = `http://localhost:3000${trade}`
			window.localStorage.removeItem('hrefcompra')

			
		} 
		if(isLogged || isAuthenticated) navigate("/");
		if (isAuthenticated) registerWhitGoogle();
	}, [
		isAuthenticated,
		isLogged,
		loginFromCart,
		navigate,
		registerWhitGoogle,
		trade,
	]);

	const handleLogin = async (e) => {
		e.preventDefault();
		login({ email, password });
	};

	const handleSiginWhitGoogle = (e) => {
		loginWithPopup();
	};

	return (
		<>
			<div className={styles.login}>
				<Header />
				<div className={styles.container}>
					{loginFromCart ? (
						<h2>Debes iniciar sesion para continuar con la compra</h2>
					) : (
						<h2>Registrá o ingresá para continuar</h2>
					)}
					<ButtonPrimary texto="Registra tu negocio" />
					<form onSubmit={handleLogin} className={styles.form}>
						<div className={styles.user}>
							<label htmlFor="">Usuario</label>
							<input
								type="text"
								value={email}
								name="email"
								placeholder="Ingrese su usuario"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className={styles.password}>
							<label htmlFor="">Clave</label>
							<input
								type="password"
								value={password}
								name="password"
								placeholder="Ingresa tu contraseña"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className={styles.options}>
							<Link to="/registration">
								<ButtonPrimary texto="Sing In" />
							</Link>
							<button style={{ border: "none" }}>
								<ButtonPrimary texto="Login" />
							</button>
						</div>
					</form>
					<div className={styles.other}>
						<button style={{ border: "none" }} onClick={handleSiginWhitGoogle}>
							<ButtonPrimary texto="Sing In con Google" />
						</button>
						{/* <ButtonPrimary texto="Sing In con Facebook" /> */}
					</div>
					<Link to="/resetpassword" className={styles.resetpassword}>
						¿Olvidaste tu contraseña?
					</Link>

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
