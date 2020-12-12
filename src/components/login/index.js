import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link, useHistory } from "react-router-dom"

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    //const passwordConfirmRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [msg, setMsg] = useState("")

    const judgeMent = (e) => {

        if (emailRef.current.value !== null && emailRef.current.value.indexOf("@") < 0 ) {
            setMsg("There should be a @ in email")
        } else if(emailRef.current.value !== null && passwordRef.current.value !== null ){
            setMsg("")
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }

    return (
        <div classname="w-50">
            <Card classmame>
                <Card.Body >
                    <h2 className="text-center mb-1" id="login">Log In</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit} classname="w-50">
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required classname="w-50" />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required classname="w-50" />
                        </Form.Group>

                        <div onClick={judgeMent}>
                            <p>{msg}</p>
                            <Button disabled={loading} classname="d-flex align-items-center justify-content-center" type="submit">
                                Log In
                        </Button>
                        </div>
                    </Form>
                    {/* <div className="w-100 text-center mt-3">
                        <Link to="/movies/forget-password">Forgot Password?</Link>
                    </div> */}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/movies/signup">Sign Up</Link>
            </div>
        </div>
    )
}
