import React from "react"
import {Link} from "react-router-dom"
import * as yup from "yup"
import {useState} from "react"
import axios from "axios"

import axiosWithAuth from "../utils/axiosWithAuth"

import StyledDiv from "./styledComponents/StyledDiv"
import StyledForm from "./styledComponents/FormStyle"

import formSchemaSignup from "./validation/SignupSchema"

const initialSignupValues = {
    username: "",
    password: "",
    phone_number: ""
  }


  const initialErrorValues = {
    username: "",
    password: "",
    phone_number: ""
  }

function Signup(props) {
  

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
          [name]: value,
         })
    }

    
    

    const onSignup = event => {
        event.preventDefault()
        const newUser = {
            username : signupValues.username,
            password : signupValues.password,
            phone_number : signupValues.phone_number,
          }
        axios
        .post("https://wmplants-db.herokuapp.com/api/auth/register/", newUser)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            debugger
            console.log(error)
        })

    }

    // const newUserSet = () => {
    //     setNewUser(signupValues)
    //     onSignup()
    // }

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
        <form onSubmit={onSignup} >
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
               
               
                <label name="password" className="label-text-2">Password:&nbsp;</label>
                <input 
                className="form-item-2"
                type="password"
                name="password"
                onChange={onChange}
                value={signupValues.password}
                />


                {/* <label name="confirm" className="label-text-3">Confirm Password: &nbsp;</label>
                <input
                className="form-item-3"
                type="password"
                name="confirm"
                onChange={onChange}
                value={signupValues.confirm}
                /> */}
                


                <label name="phone_number" className="label-text-4">Number: &nbsp;</label>
                <input 
                className="form-item-4"
                type="number"
                name="phone_number"
                onChange={onChange}
                value={signupValues.phone_number}
                />
               


                <div className="form-schema-errors">
                    <div>{formSchemaSignup.username}</div>
                    <div>{formSchemaSignup.password}</div>
                   {/* <div>{formSchemaSignup.confirmpassword}</div> */}
                    <div>{formSchemaSignup.phone_number}</div>
                 </div>

                <button className="submit-btn">Sign Up</button>

            </div>
        </form>
    </StyledForm>
        </>
    )
}


export default Signup