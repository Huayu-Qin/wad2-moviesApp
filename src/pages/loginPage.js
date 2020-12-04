import React from 'react'
import Login from "../components/login"
import { Container } from "react-bootstrap"



function loginPage() {
    return (
        <div >
            <Container
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Login />
                </div>
            </Container>
        </div>
    )
}

export default loginPage;
