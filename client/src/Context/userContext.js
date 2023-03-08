import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export function UserContextProvider({ children }) {

    
    const navigate = useNavigate();

    const [token, setToken] = useState(
        () => window.sessionStorage.getItem('token')
    )

    useEffect(() => {
        if (!token) navigate("/login")
    }, [token, navigate])

    return <Context.Provider value={{
        token,
        setToken
    }}>
        {children}
    </Context.Provider>

}