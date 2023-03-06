import { useState } from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import login from "../../services/login";
import { Link } from "react-router-dom";
import Home from "../../views/home/Home";

const LoginForm = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const [user, setUser] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await login(data);
            setUser(user);
            setData({ username: "", password: "" })
            console.log("Usuario logueado:")
            console.log(user);
            return <Link to="/"/>
        } catch (error) {
            console.log("Usuario invalido, por favor registrese o ingrese bien los datos!")
        }

    }

    const loginForm = () => {
        return (
            <div className={styles.login}>
                <div className={styles.container}>
                    {/* <ButtonPrimary texto="Registra tu negocio" /> */}
                    <h2>PEDI VERY</h2>
                    <form onSubmit={handleLogin} className={styles.form}>
                        <div className={styles.user}>
                            <label htmlFor="">Usuario</label>
                            <input type="text" value={data.username} name="username" placeholder="Username" onChange={handleChange} />
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="">Clave</label>
                            <input type="password" value={data.password} name="password" placeholder="Password" onChange={handleChange} />
                        </div>
                        {/* <div className={styles.options}>
                        <ButtonPrimary texto="Sing In" />
                        <ButtonPrimary texto="Login" />
                    </div> */}
                        <button>Login</button>
                    </form>
                    <div className={styles.other}>
                        <Link to="/sigin"><ButtonPrimary texto="Sigin" /></Link>
                        <ButtonPrimary texto="Sing In con Google" />
                        <ButtonPrimary texto="Sing In con Facebook" />
                    </div>

                    <div className={styles.faqs}>
                        <a href="/">Que es pedivey?</a>
                        <a href="/">Como funciona?</a>
                        <a href="/">Tutoriales</a>
                    </div>
                </div>
            </div>
        )
    }

    const changeHome = () => {

    }

    return (
        !user ? loginForm() : <Home/>
    )

}

export default LoginForm;