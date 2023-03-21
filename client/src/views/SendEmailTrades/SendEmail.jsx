import React from "react";
import Header from "../../components/Header/Header";
import styles from "./SendEmail.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postSendEmailPasswordTrades} from '../../redux/actions/index' 


export default function SendEmailTrades() {
	const dispatch = useDispatch()
	
	const [ newPassword, setEmail] = useState({
		email: "",
	})

	function handlerOnchange(e){
		setEmail({
			...newPassword,
			[e.target.name]: e.target.value
		})
		console.log(newPassword);
	}
	
	function handlerSubmit(e){
		e.preventDefault()
		dispatch(postSendEmailPasswordTrades(newPassword))
	}

	return (
		<div className={styles.sendEmail}>
			<Header />
			<div className={styles.container}>
				<form onSubmit={(e) => handlerSubmit(e)}>
					<input 
						type="text" 
						placeholder="ingresar mail" 
						name="email"
						value={newPassword.email}
						onChange={handlerOnchange}
					/>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
}
