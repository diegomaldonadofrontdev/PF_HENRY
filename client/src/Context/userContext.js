import { createContext, useState } from "react";

export const Context = createContext({});

export function UserContextProvider({ children }) {

    const [token, setToken] = useState(
        () => window.sessionStorage.getItem('token')
    )

    const [dataUser, setDataUser] = useState({});

    return <Context.Provider value={{
        token,
        setToken,
        dataUser,
        setDataUser
    }}>
        {children}
    </Context.Provider>

}