import { useCallback, useContext, useState } from "react";
import { Context } from "../Context/userContext";
import loginService from "../services/login";
import registerService from "../services/sigin";
import siginWhitGoogle from "../services/siginWhitGoogle";
import { useAuth0 } from "@auth0/auth0-react";

export default function useUser() {

    const { token, setToken, setDataUser } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });
    const { user } = useAuth0();

    const login = useCallback(({ username, password }) => {
        setState({ loading: true, error: false })
        loginService({ username, password })
            .then(user => {
                const { firstname, lastname, username, email, password, country, city, address, phone, status, token } = user;
                window.sessionStorage.setItem('token', JSON.stringify(token))
                setState({ loading: false, error: false })
                setToken(token)
                setDataUser({ firstname, lastname, username, email, password, country, city, address, phone, status })
                console.log(user);
            })
            .catch(err => {
                window.sessionStorage.removeItem('token')
                setState({ loading: false, error: true })
                console.log(err)
            })
    }, [setToken, setDataUser])

    const sigin = useCallback(({ firstname, lastname, username, email, password, country, city, address, phone, status }) => {
        setState({ loading: true, error: false })
        registerService({ firstname, lastname, username, email, password, country, city, address, phone, status })
            .then(user => {
                const { firstname, lastname, username, email, password, country, city, address, phone, status, token } = user;
                window.localStorage.setItem('token', JSON.stringify(token))
                setState({ loading: false, error: false })
                setToken(token)
                setDataUser({ firstname, lastname, username, email, password, country, city, address, phone, status })
                console.log(user)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                setState({ loading: false, error: true })
                console.log(err.response)
            })
    }, [setToken, setDataUser]);

    const registerWhitGoogle = useCallback(() => {
        const newUser = { firstname: user.given_name, lastname: user.family_name, username: user.nickname, email: user.email, country: "Not found", city: "Not found", address: "Not found", phone: "Not found", status: "Not found" }
        const { firstname, lastname, username, email, country, city, address, phone, status } = newUser;
        siginWhitGoogle({ firstname, lastname, username, email, country, city, address, phone, status })
            .then(user => {
                const { firstname, lastname, username, email, country, city, address, phone, status, token } = user;
                window.localStorage.setItem('token', JSON.stringify(token))
                setToken(token)
                setDataUser({ firstname, lastname, username, email, country, city, address, phone, status })
                console.log(user)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err.response)
            })
    }, [user, setToken, setDataUser])

    const logout1 = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setToken(null)
        setDataUser({})
    }, [setToken, setDataUser])

    return {
        isLogged: Boolean(token),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout1,
        sigin,
        registerWhitGoogle
    }

}