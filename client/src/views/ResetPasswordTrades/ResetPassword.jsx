import React from "react";
import Header from "../../components/Header/Header";
import styles from "./ResetPassword.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState  } from "react";
import { postNewPasswordTrades } from "../../redux/actions/postNewPasswordTrades";

export default function ResetPasswordTrades() {

	const {token} = useParams();
	const dispatch = useDispatch();
	const [newPassword, setNewPassword] = useState({
		password: ""
	}) 

	function handlerOnchange(e) {
		setNewPassword({
			...newPassword,
			[e.target.name]: e.target.value
		})
		console.log(newPassword);
	}

	function handlerSubmit(e){
		e.preventDefault()
		dispatch(postNewPasswordTrades(newPassword,token))
	}
	

	return (
		<div className={styles.resetPassword}>
			<Header />
			<div className={styles.container}>
				<form onSubmit={(e) => handlerSubmit(e)}>
					<input 
						type="text" 
						placeholder="ingresar nueva clave"
						name="password"
						value={newPassword.password}
						onChange={handlerOnchange}
					/>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
}
