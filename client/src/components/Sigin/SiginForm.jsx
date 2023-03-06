import { useState } from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import sigin from "../../services/sigin";

const SiginForm = () => {

    const [data, setData] = useState({
        username: "",
        password: "",
        nombre: "",
        id: "",
        email: ""
    })

    const [user, setUser] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSigin = async (e) => {
        e.preventDefault();
        try {
            const user = await sigin(data);
            setUser(user);
            setData({ username: "", password: "", nombre: "", id: "", email: "" })
            console.log("Usuario logueado:")
            console.log(user);
        } catch (error) {
            console.log("Usuario invalido, por favor registrese o ingrese bien los datos!")
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                {/* <ButtonPrimary texto="Registra tu negocio" /> */}
                <h2>PEDI VERY</h2>
                <form onSubmit={handleSigin} className={styles.form}>
                    <div className={styles.user}>
                        <label htmlFor="">Usuario</label>
                        <input type="text" value={data.username} name="username" placeholder="Username" onChange={handleChange} />
                    </div>
                    <div className={styles.user}>
                        <label htmlFor="">Nombre</label>
                        <input type="text" value={data.nombre} name="nombre" placeholder="Nombre" onChange={handleChange} />
                    </div>
                    <div className={styles.user}>
                        <label htmlFor="">Email</label>
                        <input type="text" value={data.email} name="email" placeholder="E-mail" onChange={handleChange} />
                    </div>
                    <div className={styles.user}>
                        <label htmlFor="">Id</label>
                        <input type="text" value={data.id} name="id" placeholder="Id" onChange={handleChange} />
                    </div>
                    <div className={styles.password}>
                        <label htmlFor="">Clave</label>
                        <input type="password" value={data.password} name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    {/* <div className={styles.options}>
                        <ButtonPrimary texto="Sing In" />
                        <ButtonPrimary texto="Login" />
                    </div> */}
                     <ButtonPrimary texto="Sing In" />
                    {/* <button>Sigin</button> */}
                </form>
                <div className={styles.other}>
                    
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

export default SiginForm;