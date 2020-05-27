import React from "react"
import {Link, NavLink} from "react-router-dom"
import * as yup from "yup"
import {useState} from "react"
import axios from "axios"

//Styling Imports
import StyledDiv from "./styledComponents/StyledDiv"
import StyledForm from "./styledComponents/FormStyle"

//Yup Schema
import formSchemaSignup from "./validation/SignupSchema"


const formSchema = yup.object().shape({
    username: 
        yup
        .string()
        .required('Please enter your name'),
    
        phone_number: 
        yup
        .string()
        .required('Please enter your phone number')
        .length(12,'Please enter a VALID phone number in the following format 123-123-1234'),
    
        password: 
        yup
        .string()
        
        .required('Please create a password')
        .min(4, "Your password must be 6 characters long")
        
    })


// Initial variables with blank items

function Signup(props) {
    // Slices of state
    const [formErrors, setFormErrors] = useState({
        username: "",
        password: "",
        phone_number: ""
      })  

    const [signupValues, setSignupValues] = useState({
        username: "",
        password: "",
        phone_number: ""
      })

    //onChange Handler/yup Validator
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

    //Login Handler/Login Axios Post Request
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
            props.history.push("/")
        })
        .catch(error =>{
            debugger
            console.log(error)
        })

    }

    return (
        <>
    <StyledDiv>
        <header className="header-nav">
            <Link to="/"><h2>Water My Plants</h2></Link> 
            <a href="/">Login</a>
            <a href="/signup">Sign Up</a>
            <div className="info">
                {/* Dummy Links */}
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
               
               
                <label name="password" className="label-text-2">Password:&nbsp;</label>
                <input 
                className="form-item-2"
                type="password"
                name="password"
                onChange={onChange}
                value={signupValues.password}
                />
           
                <label name="phone_number" className="label-text-4">Phone Number: &nbsp;</label>
                <input 
                className="form-item-4"
                type="number"
                name="phone_number"
                onChange={onChange}
                value={signupValues.phone_number}
                />
               
                <div className="form-schema-errors">
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.phone_number}</div>
                 </div>

                <button className="submit-btn">Sign Up</button>
                <p className="p-login">Already have an account? Log in <NavLink className="here-link" to="/login">here</NavLink>!</p>

            </div>
        </form>
    </StyledForm>
        </>
    )
}


export default Signup