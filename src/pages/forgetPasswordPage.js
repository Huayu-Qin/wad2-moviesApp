import React from 'react'
import ForgetPassword from "../components/forgetPassword"
import { Container } from "react-bootstrap"



function forgetPasswordPage() {
    return (
        
            <Container
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <ForgetPassword />
                </div>
            </Container>
        
    )
}

export default forgetPasswordPage;