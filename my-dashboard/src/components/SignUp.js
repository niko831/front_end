import React from "react"
import {Link} from "react-router-dom"
import * as yup from "yup"
import {useState} from "react"

import StyledDiv from "./styledComponents/StyledDiv"
import StyledForm from "./styledComponents/FormStyle"

import formSchemaSignup from "./validation/SignupSchema"

function Signup() {
    const initialSignupValues = {
        username: "",
        password: "",
        passwordconfirm : "",
        phone: ""
      }
      const initialErrorValues ={
        username: "",
        password: "",
        passwordconfirm: "",
        phone: ""
      }

    const [formErrors, setFormErrors] = useState(initialErrorValues)  
    const [signupValues, setSignupValues] = useState(initialSignupValues)

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
      
        yup
          .reach(formSchemaSignup, name)
          .validate(value)  
          .then(valid => {
              setFormErrors({
                  ...formErrors,
                  [name]: ""
                });
          })    
          .catch( err => { 
              console.log(err.error)
              setFormErrors({
                  ...formErrors,
                  [name]: err.errors[0]
                });
             
          })
      
        setSignupValues({
          ...signupValues,
          [name]: value
        })
      
      }

    const onSubmit = {

    }


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
                    <h2 className="frm-heading-txt">Lets get started!</h2>
                    <h3 className="frm-heading-txt">Create your account</h3>
                 </div>
                <label name="username" className="label-text-1">Username:&nbsp;</label>
                <input
                className="form-item-1"
                type="text"
                name="username"
                onChange={onChange}
                value={signupValues.username}
                 />
                <br></br>
                <label name="phone" className="label-text-2">Phone Number: &nbsp;</label>
                <input 
                className="form-item-2"
                type="number"
                name="phone"
                onChange={onChange}
                value={signupValues.phone}
                />

                <label name="password" className="label-text-3">Password:&nbsp;</label>
                <input 
                className="form-item-3"
                type="password"
                name="password"
                onChange={onChange}
                value={signupValues.password}
                />

                <label name="confirm" className="label-text-4">Confirm Password: &nbsp;</label>
                <input
                className="form-item-4"
                type="password"
                name="confirm"
                onChange={onChange}
                value={signupValues.confirmpassword}
                />



                <div className="form-schema-errors">
                    <div>{formSchemaSignup.username}</div>
                    <div>{formSchemaSignup.password}</div>
                    <div>{formSchemaSignup.confirmpassword}</div>
                    <div>{formSchemaSignup.phone}</div>
                 </div>

                <button className="submit-btn">Sign Up</button>

            </div>
        </form>
    </StyledForm>
        </>
    )
}


export default Signup