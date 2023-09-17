import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface AuthContext {
    login: () => any,
    logout: () => any,
    userData: {
        id: number,
        email: string,
        admin: number
    }
}

interface AuthContextProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    //@ts-ignore
    const [currentUser, setCurrentuser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    // Logout user
    const logout = async () => {
        await axios.get("http://localhost:8080/logout-user", {withCredentials: true})
        setCurrentuser(null)
    }

    // Update localstorrage each time user change
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return <AuthContext.Provider value={{currentUser, setCurrentuser, logout}}>{children}</AuthContext.Provider>
}