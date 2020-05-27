import React from "react"
import {Link} from "react-router-dom"
import * as yup from "yup"
import {useState} from "react"

import StyledDiv from "./styledComponents/StyledDiv"
import StyledForm from "./styledComponents/FormStyle"

import formSchemaLogin from "./validation/LoginSchema"


function Login() {
    const initialErrorValues ={
        username: "",
        password: "",
      }
      
      const initialLoginValues = {
        username : "",
        password : ""
      }

    
    const [formErrors, setFormErrors] = useState(initialErrorValues)
    const [loginValues, setLoginValues] = useState(initialLoginValues)
   
    const values = loginValues;

   

   const onSubmit = {

   }

    //onChange Handler
const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
  
    yup
      .reach(formSchemaLogin, name)
      .validate(value)  
      .then( valid => {
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
  
    setLoginValues({
      ...values,
      [name]: value
    })
  
  }
  
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
                 <div>{formSchemaLogin.username}</div>
                 <div>{formSchemaLogin.password}</div>
                 </div>


                <button className="submit-btn">NEXT</button>

            </div>
        </form>
    </StyledForm>
        </>
    )
}

export default Login;

