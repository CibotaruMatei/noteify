import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./contexts/UserContexts"

export const Login: React.FunctionComponent = props => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [processing, setProcessing] = useState<boolean>(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const processLogin = async (event: any) => {
        event.preventDefault()

        try {
            setError('')
            setProcessing(true)
            await login(email, password)
        } catch (e) {
            setError('Could not log into account')
        }
        setProcessing(false)
        navigate('/')
    }

    return <>
        <h1> Login </h1>
        <input placeholder="Email" onChange={(event) => {
            setEmail(event.target.value)
        }}/>
        <input placeholder="Password" onChange={(event) => {
            setPassword(event.target.value)
        }}/>
        <button disabled={processing} onClick={processLogin}> Login </button>
        <br/>
        <Link to="/" className="btn btn-primary mt-3">Home</Link>
        <Link to="/register" className="btn btn-primary mt-3">Register</Link>
    </>
}