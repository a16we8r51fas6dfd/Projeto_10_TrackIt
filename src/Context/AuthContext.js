import {createContext} from "react";
import { useState } from "react/cjs/react.development";

const Context = createContext()

function AuthProvider({ children }) {
    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({
        name: '',
        image: ''
    })

    return (
        <Context.Provider value={{ token, setToken, userData, setUserData }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }