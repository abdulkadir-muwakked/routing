import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"


const Home = () => {
    const authCtx = useContext(AuthContext)
    console.log(authCtx)
    return (
        <h1>Welcome to our website {authCtx.token}</h1>
    )
}

export default Home