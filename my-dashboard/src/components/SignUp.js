import React from "react"
import {Link} from "react-router-dom"

import StyledDiv from "./styledComponents/StyledDiv"
import StyledForm from "./styledComponents/FormStyle"

function Signup(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        errors,
    } = props
    return (
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
                <label name="phone" className="label-text-2">Phone Number: &nbsp;</label>
                <input 
                className="form-item-2"
                type="number"
                name="phone"
                onChange={onInputChange}
                value={values.phone}
                />

                <label name="password" className="label-text-3">Password:&nbsp;</label>
                <input 
                className="form-item-3"
                type="password"
                name="password"
                onChange={onInputChange}
                value={values.password}
                />

                <label name="confirm" className="label-text-4">Confirm Password: &nbsp;</label>
                <input
                className="form-item-4"
                type="password"
                name="confirm"
                onChange={onInputChange}
                value={values.confirmpassword}
                />

                <button className="submit-btn">Sign Up</button>

            </div>
        </form>
    </StyledForm>
        </>
    )
}


export default Signup