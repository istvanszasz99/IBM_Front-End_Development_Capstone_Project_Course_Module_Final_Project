import React from 'react'
import { Link } from 'react-router-dom'
import './Sign_Up.css' // Importing the CSS file for styling

function Sign_Up() {
  return (
    <div className="container" style={{ marginTop: '5%' }}>
      {/* Main container with margin-top */}
      <div className="signup-grid">
        {/* Grid layout for sign-up form */}
        <div className="signup-text">
          {/* Title for the sign-up form */}
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text">
          {/* Text for existing members to log in */}
          Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}>Login</Link></span>
        </div>
        <div className="signup-form">
          {/* Form for user sign-up */}
          <form>
            {/* Form group for user's name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            {/* Form group for user's phone number */}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                maxLength={10}
              />
            </div>
            {/* Form group for user's email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            {/* Form group for user's password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            {/* Button group for form submission and reset */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sign_Up