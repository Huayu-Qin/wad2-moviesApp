import React from 'react'
import UpdateProfile from "../components/updateProfile"
import { Container } from "react-bootstrap"



function updateProfilePage() {
    return (
        
            <Container
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <UpdateProfile />
                </div>
            </Container>
        
    )
}

export default updateProfilePage;