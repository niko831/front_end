import React from "react"
import {Link} from "react-router-dom"

import StyledDiv from "./styledComponents/StyledDiv"
import StyledForm from "./styledComponents/FormStyle"

import formSchema from "./validation/formSchemaLogin"

function Login(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        errors,
    } = props

    return (
    
    //NavBar
    
    <>
    <StyledDiv>
        <header className="header-nav">
            <Link to="/"><h2>Plant Parenthood</h2></Link> 
            <a href="/">Login</a>
            <a href="/signup">Sign Up</a>
            <div className="info">
                <a href="/">Home</a>
                <a href="/">About</a>
            </div>
        </header>
    </StyledDiv>
    <StyledForm>
        <form onSubmit={onSubmit}>
             <div className="forms">
                 <div className="form-heading">
                    <h2 className="frm-heading-txt">Welcome Back!</h2>
                    <h3 className="frm-heading-txt">Log into your account</h3>
                 </div>
                 
                <label name="username" className="label-text-1">Username:&nbsp;</label>
                <input
                className="form-item-1"
                type="text"
                name="username"
                onChange={onInputChange}
                value={values.username}
                 />
                <br></br>
                <label name="password" className="label-text-3">Password:&nbsp;</label>
                <input 
                className="form-item-2"
                type="password"
                name="password"
                onChange={onInputChange}
                value={values.password}
                />
                

                <div className="form-schema-errors">
                 <div>{errors.username}</div>
                 <div>{errors.password}</div>
                 </div>


                <button className="submit-btn">NEXT</button>

            </div>
        </form>
    </StyledForm>
        </>
    )
}

export default Login;

