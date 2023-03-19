import { useCallback, useState } from "react";
import loginService from "../services/tradeBoss/login";
import registerService from "../services/tradeBoss/sigin";
import siginWhitGoogle from "../services/tradeBoss/siginWhitGoogle";
import { useAuth0 } from "@auth0/auth0-react";

export default function useTradeBoss() {
    const { user } = useAuth0();
    const [token, setToken] = useState("");

    const login = useCallback(({ email, password }) => {
        loginService({ email, password })
            .then((data) => {
                window.localStorage.setItem("tokenTradeBoss", JSON.stringify(data[1].token))
                window.localStorage.setItem("idTradeBoss", data[0]._id);
                setToken(data[1].token)
            })
            .catch((err) => {
                window.localStorage.removeItem("tokenTradeBoss");
                console.log(err);
            })
    }, []);

    const sigin = useCallback((user) => {
        registerService(user)
            .then((data) => {
                window.localStorage.setItem("tokenTradeBoss", JSON.stringify(data[1].token))
                window.localStorage.setItem("idTradeBoss", data[0]._id);
                setToken(data[1].token)
            })
            .catch((err) => {
                window.localStorage.removeItem("tokenTradeBoss");
                console.log(err);
            })
    }, []);

    const registerWhitGoogle = useCallback(() => {
        const newUser = {
            firstname: user.given_name,
            lastname: user.family_name,
            password: "1",
            email: user.email,
            loginG: true,
        };
        siginWhitGoogle(newUser)
            .then((data) => {
                window.localStorage.setItem("tokenTradeBoss", JSON.stringify(data[1].token))
                window.localStorage.setItem("idTradeBoss", data[0]._id);
                setToken(data[1].token)
            })
            .catch((err) => {
                window.localStorage.removeItem("tokenTradeBoss");
                console.log(err);
            })
    }, [user]);

    const logoutTradeBoss = useCallback(() => {
        window.localStorage.removeItem("tokenTradeBoss");
        window.localStorage.removeItem("idTradeBoss");
    }, []);

    return {
        isLoggedTradeBoss: Boolean(token),
        login,
        logoutTradeBoss,
        sigin,
        registerWhitGoogle
    }
}