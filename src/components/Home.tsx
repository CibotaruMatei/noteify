import { Link } from "react-router-dom"
import { useAuth } from "./contexts/UserContexts"

export const Home = () => {
    const { currentUser, logout} = useAuth()
    
    return <>
        <h1 className="mt-3">Hello {currentUser && currentUser.email}</h1>
        <Link to="/register" className="btn btn-primary mt-3">Register</Link>
        <Link to="/login" className="btn btn-primary mt-3">Login</Link>
        <button className="btn btn-primary mt-3" onClick={logout}>Log out</button>
    </>
}