import {createContext} from "react";
import { useState } from "react";

const Context = createContext()

function AuthProvider({ children }) {
    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({
        name: '',
        image: ''
    })
    const [progress, setProgress] = useState(0)



    return (
        <Context.Provider value={{ token, setToken, userData, setUserData, progress, setProgress }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }