import { useCallback, useState } from "react";
import loginService from "../services/trade/login";

export default function useTrade() {

    const [id, setId] = useState("");

    const login = useCallback(({ username, password }) => {
        loginService({ username, password })
            .then((data) => {
                window.localStorage.setItem('idTrade', data._id)
                setId(data)
            })
            .catch((err) => {
                window.localStorage.removeItem('idTrade');
                console.log(err)
            })
    }, [])

    const logoutTrade = useCallback(() => {
        window.localStorage.removeItem('idTrade');
        setId(null)
    }, [])

    return {
        login,
        logoutTrade,
        isLoggedTrade: Boolean(id)
    }

}