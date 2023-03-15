import { createContext, useState } from "react";

export const Context = createContext({});

export function UserContextProvider({ children }) {

    const [token, setToken] = useState(
        () => window.sessionStorage.getItem('token')
    )

    return <Context.Provider value={{
        token,
        setToken,
    }}>
        {children}
    </Context.Provider>

}