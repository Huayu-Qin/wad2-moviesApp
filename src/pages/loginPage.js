import React from 'react'
import Login from "../components/login"
//import { Container } from "react-bootstrap"



function loginPage() {
    return (
       
            <div
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                
                    <Login />
                  
            </div>

    )
}

export default loginPage;
