import React from "react"
import {Link} from "react-router-dom"

function Signup() {
    return (
        <div className="login-container">
            <nav className="login-nav">
                <h1>Plant Parenthood</h1>
                <Link to="/">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
        </div>
    
        )
}


export default Signup