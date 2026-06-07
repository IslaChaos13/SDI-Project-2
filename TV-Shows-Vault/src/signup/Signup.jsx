import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="addUser">
            <h3>Sign Up</h3>
            <form className = "addUserForm">
                <div className ="inputGroup">
                    <label htmlfor="name">Name: </label>
                    <input
                    type='text'
                    id="name"
                    autoComplete="off"
                    placeHolder="Enter your name"
                    />

                    <label htmlfor="email">Email: </label>
                    <input
                    type='text'
                    id="email"
                    autoComplete="off"
                    placeHolder="Enter your email"
                    />

                    <label htmlfor="name">Password: </label>
                    <input
                    type='text'
                    id="password"
                    autoComplete="off"
                    placeHolder="Enter your password"
                    />

                    <button type="submit" class="btn btn-success">Sign Up</button>

                </div>
            </form>
            <div className="login">
                <p>Already have an account ?  </p>
                <Link to="/login" type="submit" class="btn btn-primary">Login</Link>
            </div>
        </div>
    )
}

export default Signup;