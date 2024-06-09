import React from 'react'
import "./LoginSignUP.css"

export const LoginSignUP = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="login">
          <h2 className="Welcome">Welcome</h2>
          <label>Email</label>
          <input type="text" className="email" placeholder='enter your email'/>
          <label htmlFor="" className="password">Password</label>
          <input type="password" className="password" placeholder='Enter Password'/>
          <div className="subPart">
            <div className='r'><input type="checkbox" className="rememberme" />
            <span>Remember Me</span>
            </div>
            <a href="google.com" className="forgot">forgot passowrd</a>

          </div>
          <button className="button s-buttton">Sign IN</button>
          <button className="button s-buttton">Use Google</button>
        </div>
      </div>
    </div>
  )
}

