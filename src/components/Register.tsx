import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./contexts/UserContexts"

export const Register: React.FunctionComponent = props => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [processing, setProcessing] = useState<boolean>(false)
    const { register } = useAuth()
    const navigate = useNavigate()

    const processRegistration = async (event: any) => {
        event.preventDefault()

        if(password.length < 6) return setError('Password too short!')

        try {
            setError('')
            setProcessing(true)
            await register(email, password)
        } catch (e) {
            setError('Could not create account')
        }
        setProcessing(false)
        navigate('/')
    }

    return <form onSubmit={processRegistration}>
        <h1> Register </h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <input placeholder="Email" onChange={(event) => {
            setEmail(event.target.value)
        }}/>
        <input placeholder="Password" onChange={(event) => {
            setPassword(event.target.value)
        }}/>
        <button disabled={processing} onClick={processRegistration}> Register </button>
        <br/>
        <Link to="/" className="btn btn-primary mt-3">Home</Link>
        <Link to="/login" className="btn btn-primary mt-3">Login</Link>
    </form>
}