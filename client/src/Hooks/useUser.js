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
    const { user } = useAuth0();

    const login = useCallback(({ email, password }) => {

        loginService({ email, password })
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                setToken(data[1].token)
                dispatch(currentCLient(data[0]))
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err)
            })
    }, [setToken, dispatch])

    const sigin = useCallback((user) => {
        registerService(user)
            .then(data => {
                window.localStorage.setItem('token', JSON.stringify(data[1].token))
                setToken(data[1].token)
                dispatch(currentCLient(data[0]))
            })
            .catch(err => {
                window.localStorage.removeItem('token')
                console.log(err)
            })
    }, [setToken, dispatch]);

    const registerWhitGoogle = useCallback(() => {
        const newUser = { firstname: user.given_name, lastname: user.family_name, password: "1", email: user.email, loginG: true }
        siginWhitGoogle(newUser)
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
        window.localStorage.removeItem('token')
        setToken(null)
        dispatch(currentCLient({}))
    }, [setToken, dispatch])

    return {
        isLogged: Boolean(token),
        login,
        logout1,
        sigin,
        registerWhitGoogle
    }

}