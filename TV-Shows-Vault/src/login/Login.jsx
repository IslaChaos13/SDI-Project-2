import React from 'react'
// import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="addUser">
            <h3>Sign In</h3>
            <form className = "addUserForm">
                <div className ="inputGroup">


                    <label htmlFor="email">Email: </label>
                    <input
                    type='text'
                    id="email"
                    autoComplete="off"
                    placeHolder="Enter your email"
                    />

                    <label htmlFor="password">Password: </label>
                    <input
                    type='text'
                    id="password"
                    autoComplete="off"
                    placeHolder="Enter your password"
                    />

                    <button type="submit" class="btn btn-primary">Sign In</button>

                </div>
            </form>
            <div className="forgotPassword">
                <p>Don't have an Account ? </p>
                <Link to="/signup" type="submit" class="btn btn-primary">Sign Up </Link>
            </div>
        </div>
    )
}

export default Login;