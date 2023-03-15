import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { currentCLient } from "../redux/actions/actions";
import { Context } from "../Context/userContext";
import loginService from "../services/login";
import registerService from "../services/sigin";
import siginWhitGoogle from "../services/siginWhitGoogle";
import { useAuth0 } from "@auth0/auth0-react";

export default function useUser() {

    const dispatch = useDispatch();
    const { token, setToken } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });
    const { user } = useAuth0();

    const login = useCallback(({ email, password }) => {
        setState({ loading: true, error: false })
        loginService({ email, password })
            .then(data => {
                window.sessionStorage.setItem('token', JSON.stringify(data[1].token))
                setState({ loading: false, error: false })
                setToken(data[1].token)
                dispatch(currentCLient(data[0]))
            })
            .catch(err => {
                window.sessionStorage.removeItem('token')
                setState({ loading: false, error: true })
                console.log(err)
            })
    }, [setToken, dispatch])

    const sigin = useCallback((user) => {
        setState({ loading: true, error: false })
        registerService(user)
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                setState({ loading: false, error: false })
                setToken(data[1].token)
                dispatch(currentCLient(data[0]))
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                setState({ loading: false, error: true })
                console.log(err)
            })
    }, [setToken, dispatch]);

    const registerWhitGoogle = useCallback(() => {
        const newUser = { firstname: user.given_name, lastname: user.family_name, password: user.email, email: user.email, country: user.locale, city: user.locale, address: user.locale, phone: "01233456789", status: true }
        const { firstname, lastname, email, password, country, city, address, phone, status } = newUser;
        siginWhitGoogle({ firstname, lastname, email, password, country, city, address, phone, status })
            console.log(user)
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                setToken(data[1].token)
                dispatch(currentCLient(data[0]))
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err)
            })
    }, [user, setToken, dispatch])

    const logout1 = useCallback(() => {
        window.sessionStorage.removeItem('token')
        setToken(null)
        dispatch(currentCLient({}))
    }, [setToken, dispatch])

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