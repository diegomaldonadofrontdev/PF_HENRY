import { useCallback, useState } from "react";
import loginService from "../services/login";
import registerService from "../services/sigin";
import siginWhitGoogle from "../services/siginWhitGoogle";
import { useAuth0 } from "@auth0/auth0-react";

export default function useUser() {

    const { user } = useAuth0();
    const [token, setToken] = useState("");

    const login = useCallback(({ email, password }) => {
        loginService({ email, password })
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                window.localStorage.setItem('idUser', data[0]._id)
                setToken(data[1].token)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err)
            })
    }, [])

    const sigin = useCallback((user) => {
        registerService(user)
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                window.localStorage.setItem('idUser', data[0]._id)
                setToken(data[1].token)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err)
            })
    }, []);

    const registerWhitGoogle = useCallback(() => {
        const newUser = { firstname: user.given_name, lastname: user.family_name, password: "1", email: user.email, loginG: true }
        siginWhitGoogle(newUser)
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                window.localStorage.setItem('idUser', data[0]._id)
                setToken(data[1].token)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err)
            })
    }, [user])

    const logout1 = useCallback(() => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('idUser')
        setToken(null)
    }, [])

    const hrefcompra = window.localStorage.getItem('hrefcompra')

    return {
        isLogged: Boolean(token),
        login,
        logout1,
        sigin,
        registerWhitGoogle,
        loginFromCart: Boolean(hrefcompra)
    }

}