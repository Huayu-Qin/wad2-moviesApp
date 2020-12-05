import React from 'react'
import Signup from "../components/signUp"
import { Container } from "react-bootstrap"



function signUpPage() {
    return (
        
            <Container
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Signup />
                </div>
            </Container>
        
    )
}

export default signUpPage;