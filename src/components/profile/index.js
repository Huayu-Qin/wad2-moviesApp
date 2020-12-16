import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link, useHistory } from "react-router-dom"

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/movies/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Card classname="card-body">
                <Card.Body>
                    <h2 className="card-body text-center " color="white" id="profile">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/movies/update-profile" classname="btn btn-primary w-100 mt-4">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
