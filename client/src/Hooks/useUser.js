import { useCallback, useContext, useState } from "react";
import { Context } from "../Context/userContext";
import loginService from "../services/login";
import registerService from "../services/sigin";
import siginWhitGoogle from "../services/siginWhitGoogle";
import { useAuth0 } from "@auth0/auth0-react";

export default function useUser() {

    const { token, setToken } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });
    const { isAuthenticated, user } = useAuth0();

    const login = useCallback(({ username, password }) => {
        setState({ loading: true, error: false })
        loginService({ username, password })
            .then(token => {
                window.sessionStorage.setItem('token', JSON.stringify(token))
                setState({ loading: false, error: false })
                setToken(token)
                console.log(token)
            })
            .catch(err => {
                window.sessionStorage.removeItem('token')
                setState({ loading: false, error: true })
                console.log(err)
            })
    }, [setToken])

    const sigin = useCallback(({ firstname, lastname, username, email, password, country, city, address, phone, status }) => {
        setState({ loading: true, error: false })
        registerService({ firstname, lastname, username ,email, password, country, city, address, phone, status })
            .then(token => {
                window.localStorage.setItem('token', JSON.stringify(token))
                setState({ loading: false, error: false })
                setToken(token)
                console.log(token)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                setState({ loading: false, error: true })
                console.log(err.response)
            })
    }, [setToken]);

    const registerWhitGoogle = useCallback(() => {
        // setState({ loading: true, error: false })
        console.log(user);
         // const newUser = {firstname: user.given_name, lastname: user.family_name, username: user.nickname, email: user.email}
        const { name, email} = user;
        console.log(isAuthenticated)
        siginWhitGoogle({ name, email })
            .then(token => {
                window.localStorage.setItem('token', JSON.stringify(token))
                // setState({ loading: false, error: false })
                setToken(token)
                console.log(token)
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                // setState({ loading: false, error: true })
                console.log(err.response)
            })
    }, [user, setToken, isAuthenticated])

    const logout1 = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setToken(null)
    }, [setToken])

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