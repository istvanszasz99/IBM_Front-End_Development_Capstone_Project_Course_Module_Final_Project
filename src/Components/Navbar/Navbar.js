import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css' // Importing the CSS file for styling

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem("auth-token");
  const email = sessionStorage.getItem("email");
  // Extract username before @ if email exists
  const username = email ? email.split('@')[0] : '';

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
            <Link to="/review-form">Reviews</Link>
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
              {/* Username dropdown */}
              <li
                className="link nav-username-dropdown"
                style={{ marginRight: '10px', fontWeight: 'bold', color: '#3685fb', position: 'relative', cursor: 'pointer' }}
                ref={dropdownRef}
                onClick={() => setDropdownOpen((open) => !open)}
              >
                {username}
                <span style={{ marginLeft: 6, fontSize: 12 }}>▼</span>
                {dropdownOpen && (
                  <div className="nav-dropdown-menu">
                    <button className="nav-dropdown-item" onClick={() => { setDropdownOpen(false); navigate('/profile'); }}>
                      Profile
                    </button>
                    <button className="nav-dropdown-item" onClick={() => { setDropdownOpen(false); navigate('/reports'); }}>
                      Reports
                    </button>
                  </div>
                )}
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