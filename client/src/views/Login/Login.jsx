import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import login from "../../services/login";
import { Link, useNavigate } from "react-router-dom";
// import Context from "../../Context/userContext";
import useUser from "../../Hooks/useUser";

export default function Login() {

    const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isLogged) navigate("/");
    }, [isLogged, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        login({ username, password });
    }

    return (
        <>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading && (
                <div className={styles.login}>
                    <div className={styles.container}>
                        {/* <ButtonPrimary texto="Registra tu negocio" /> */}
                        <h2>PEDI VERY</h2>
                        <form onSubmit={handleLogin} className={styles.form}>
                            <div className={styles.user}>
                                <label htmlFor="">Usuario</label>
                                <input type="text" value={username} name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className={styles.password}>
                                <label htmlFor="">Clave</label>
                                <input type="password" value={password} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {/* <div className={styles.options}>
                       <ButtonPrimary texto="Sing In" />
                       <ButtonPrimary texto="Login" />
                   </div> */}
                            <button>Login</button>
                        </form>
                        {/* <div className={styles.other}> */}
                        <Link to="/sigin"><ButtonPrimary texto="Sigin" /></Link>
                        {/* <ButtonPrimary texto="Sing In con Google" /> */}
                        {/* <ButtonPrimary texto="Sing In con Facebook" /> */}
                        {/* </div> */}

                        <div className={styles.faqs}>
                            <a href="/">Que es pedivery?</a>
                            <a href="/">Como funciona?</a>
                            <a href="/">Tutoriales</a>
                        </div>
                    </div>
                </div>
            )}
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}
