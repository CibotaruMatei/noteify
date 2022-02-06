import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

const UserContext = createContext(null as any)

export const useAuth = () => {
    return useContext(UserContext)
}

type UserProviderType = {
    children: ReactNode
}

export const UserProvider = ({ children }: UserProviderType) => {
    const [currentUser, setCurrentUser] = useState(null as any)
    
    const register = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const listener = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return listener
    })

    return <UserContext.Provider value={{currentUser, register, login, logout}}>
        {children}
    </UserContext.Provider>
}