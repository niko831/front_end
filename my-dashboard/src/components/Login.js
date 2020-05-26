import React from "react"
import {Link} from "react-router-dom"

import StyledDiv from "./styledComponents/StyledDiv"

function Login(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        errors,
    } = props

    return (
    
    //NavBar
    <StyledDiv>
        <header className="header-nav">
        <h2>Plant Parenthood</h2>
        <a href="/">Login</a>
        <a href="/signup">Sign Up</a>
        </header>
    </StyledDiv>
    


    )
}

export default Login;

