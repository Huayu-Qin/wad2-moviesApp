import React from 'react'
import Profile from "../components/profile"
import { Container } from "react-bootstrap"



function profilePage() {
    return (
        
            <Container
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100 m-5" style={{ maxWidth: "400px" }}>
                    <Profile />
                </div>
            </Container>
        
    )
}

export default profilePage;
