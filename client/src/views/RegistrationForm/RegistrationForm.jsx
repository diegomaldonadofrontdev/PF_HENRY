import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Header from "../../components/Header/Header";
import styles from "./RegistrationForm.module.css";
import useUser from "../../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RegistrationForm() {

	const { sigin, isLogged } = useUser();
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth0();

	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		country: "",
		city: "",
		address: "",
		phone: "",
		active: false
	});

	useEffect(() => {
		if (isLogged || isAuthenticated) navigate("/");
	}, [isAuthenticated, isLogged, navigate])

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
		console.log(user);
	}

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
								<label htmlFor="">País</label>
								<input type="text" placeholder="" name="country" value={user.country} onChange={handleChange} />
							</div>
							<div className={styles.input__container}>
								<label htmlFor="">Ciudad</label>
								<input type="text" placeholder="" name="city" value={user.city} onChange={handleChange} />
							</div>
							<div className={styles.input__container}>
								<label htmlFor="">Dirección</label>
								<input type="text" placeholder="" name="address" value={user.address} onChange={handleChange} />
							</div>
						</div>

						<div className={styles.twoColumns}>
							<div className={styles.input__container}>
								<label htmlFor="">Teléfono</label>
								<input type="text" placeholder="" name="phone" value={user.phone} onChange={handleChange} />
							</div>
						</div>

						<button style={{ border: "none" }}><ButtonPrimary texto="CREAR CUENTA" /></button>
					</form>
				</div>
			</div>
		</>
	);

}
