import { useCallback } from "react";
import loginService from "../services/trade/login";

export default function useTrade() {

    const login = useCallback(({ username, password }) => {
        loginService({ username, password })
            .then((data) => {
                window.localStorage.setItem('idTrade', data)
            })
            .catch((err) => {
                window.localStorage.removeItem('idTrade');
                console.log(err)
            })
    }, [])

    const logoutTrade = useCallback(() => {
        window.localStorage.removeItem('idTrade');
    }, [])

    const isTrade = window.localStorage.getItem('idTrade');

    return {
        login,
        logoutTrade,
        isLoggedTrade: Boolean(isTrade)
    }

}