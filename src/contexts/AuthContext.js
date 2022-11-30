import { createContext, useState } from "react";

export const AuthContext = createContext()

const UserManager = ({children}) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const signIn = (userData, userToken) => {
        setUser(userData)
        setToken(userToken)
    }
    return (
        <AuthContext.Provider value={{
            user: user,
            token: token,
            signIn: signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserManager