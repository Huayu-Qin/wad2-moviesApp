import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link } from "react-router-dom"

export default function ForgetPassword() {

    const emailRef = useRef()
    //const passwordRef = useRef()
    //const passwordConfirmRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for futher instrustions')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
        <>
            <Card classname>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Button diaabled={loading} classname="w-100" type="submit">
                            Reset Password
                    </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/movies/login">Log in</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/movies/signup">Sign Up</Link>
            </div>
        </>
    )
}