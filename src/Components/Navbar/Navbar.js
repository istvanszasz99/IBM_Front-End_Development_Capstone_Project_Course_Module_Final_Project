import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css' // Importing the CSS file for styling

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem("auth-token");
  const email = sessionStorage.getItem("email");
  // Extract username before @ if email exists
  const username = email ? email.split('@')[0] : '';

  // Placeholder for the menu icon click handler
  const handleClick = () => {
    // Add your menu toggle logic here
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  sessionStorage.setItem("email", email);

  return (
    <div>
      <nav>
        {/* Navigation logo section */}
        <div className="nav__logo">
          {/* Link to the home page */}
          <Link to="/">
            StayHealthy
            {/* Insert an SVG icon of a doctor with a stethoscope */}
            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: "#3685fb" }}>
              <title>Doctor With Stethoscope SVG icon</title>
              <g>
                <g>
                  {/* Path for the stethoscope icon */}
                  <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                  {/* Additional path for the icon */}
                  <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                  {/* Another path for the icon */}
                  <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...."></path>
                </g>
              </g>
            </svg>
          </Link>
          {/* A span element for styling purposes */}
          <span>.</span>
        </div>
        {/* Navigation icon section with an onClick event listener */}
        <div className="nav__icon" onClick={handleClick}>
          {/* Font Awesome icon for bars (hamburger menu) */}
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        {/* Unordered list for navigation links with 'active' class */}
        <ul className="nav__links active">
          {/* List item for the 'Home' link */}
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          {/* List item for the 'Appointments' link */}
          <li className="link">
            <Link to="#">Appointments</Link>
          </li>
          {/* Add Health Blog and Reviews links here */}
          <li className="link">
            <Link to="/#">Health Blog</Link>
          </li>
          <li className="link">
            <Link to="/#">Reviews</Link>
          </li>
          {/* List item for the 'Sign Up' link with a button */}
          {!isLoggedIn ? (
            <>
              <li className="link">
                <Link to="/signup">
                  <button className="btn1">Sign Up</button>
                </Link>
              </li>
              {/* List item for the 'Login' link with a button */}
              <li className="link">
                <Link to="/login">
                  <button className="btn1">Login</button>
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Username display */}
              <li className="link" style={{ marginRight: '10px', fontWeight: 'bold', color: '#3685fb' }}>
                {username}
              </li>
              <li className="link">
                <button className="btn1" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar