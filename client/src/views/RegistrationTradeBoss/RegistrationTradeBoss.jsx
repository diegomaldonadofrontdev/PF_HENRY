import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import styles from "./RegistrationTradeBoss.module.css";
import useTradeBoss from "../../Hooks/useTradeBoss";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationTradeBoss() {

	const { sigin } = useTradeBoss();
	// const navigate = useNavigate();

	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		phone: "",
		active: false
	});

	// const tokenTradeBoss = window.localStorage.getItem("tokenTradeBoss");

	// useEffect(() => {
	// 	if (tokenTradeBoss) navigate("/adminowner");
	// }, [navigate, tokenTradeBoss])

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value
		})
	}

	const handleRegister = async (e) => {
		e.preventDefault();
		sigin(user);
	}

	// const handleSiginWhitGoogle = (e) => {
	// 	loginWithPopup();
	// };

	return (
		<>
			<div className={styles.registration__form}>
				<Header />
				<div className={styles.container}>
					<form onSubmit={handleRegister} action="" className={styles.form}>
						<div className={styles.twoColumns}>
							<div className={styles.input__container}>
								<label htmlFor="">Nombre</label>
								<input type="text" placeholder="" name="firstname" value={user.firstname} onChange={handleChange} />
							</div>
							<div className={styles.input__container}>
								<label htmlFor="">Apellido</label>
								<input type="text" placeholder="" name="lastname" value={user.lastname} onChange={handleChange} />
							</div>
						</div>
						<div className={styles.twoColumns}>
							<div className={styles.input__container}>
								<label htmlFor="">Email</label>
								<input type="text" placeholder="" name="email" value={user.email} onChange={handleChange} />
							</div>
							<div className={styles.input__container}>
								<label htmlFor="">Password</label>
								<input type="password" placeholder="" name="password" value={user.password} onChange={handleChange} />
							</div>
						</div>

						<div className={styles.twoColumns}>
							<div className={styles.input__container}>
								<label htmlFor="">Teléfono</label>
								<input type="text" placeholder="" name="phone" value={user.phone} onChange={handleChange} />
							</div>
						</div>

						<button type="submit" style={{ border: "none" }}><ButtonPrimary texto="CREAR CUENTA" /></button>

						{/* <div className={styles.other}> */}
						{/* <button style={{ border: "none" }} onClick={handleSiginWhitGoogle}><ButtonPrimary texto="Sing In con Google" /></button> */}
						{/* <ButtonPrimary texto="Sing In con Facebook" /> */}
						{/* </div> */}

						<Link to="/login/tradeboss"><h2>Si ya tienes una cuenta da click aqui</h2></Link>
					</form>
				</div>
			</div>
		</>
	);

}
