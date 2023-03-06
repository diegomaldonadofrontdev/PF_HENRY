import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import login from "../../services/login";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const [user, setUser] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            setToken(user.token);
            navigate("/")
        }
    }, []);

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

            window.localStorage.setItem('loggedUser', JSON.stringify(user));
            setToken(user.token);

            setUser(user);
            setData({ username: "", password: "" })
            console.log("Usuario logueado:")
            console.log(user);
            navigate("/");
        } catch (error) {
            console.log("Usuario invalido, por favor registrese o ingrese bien los datos!")
        }
    }

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
