import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="Email">Email</label>
        <input 
        className="loginInput"  
        type="text"
        placeholder='Enter your email...' 
        />
        <label htmlFor="Password">Email</label>
        <input 
        className="loginInput"  
        type="password"
        placeholder='Enter your password...' 
        />
        <button className="loginButton">Login</button>
        

      </form>

      <button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login