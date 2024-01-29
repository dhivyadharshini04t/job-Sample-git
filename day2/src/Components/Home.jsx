// import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';
import '../Style/Footer.css';
import '../Style/Slides.css'; // Import the Slides CSS file
import Slides from './Slides'; // Import the Slideshow component

const CombinedComponent = () => {
  return (
    <>
      <div className="overall">
        <div className="combined-container">
          <div className="side-panel-container">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/Form">Form</Link></li>
              <li><Link to="/JobListing">Job Listing</Link></li>
              <li><Link to="/Job">Job</Link></li>
              <li><Link to="/Slides">Slides</Link></li>
              <li><Link to="/Payment">Payment</Link></li>
              <li><Link to="/Start">Start</Link></li>
              <li><Link to="/Profile">Profile</Link></li>
            </ul>
          </div>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                JobNest
              </Link>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-links">
                    Premium Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/jobs" className="nav-links">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/applications" className="nav-links">
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-links">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Slideshow Component */}
      <Slides />

      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li>
              <a>
                About
              </a>
            </li>
            <li>
              <a>
                Terms and Conditions
              </a>
            </li>
            <li>
              <a>
                Case Studies
              </a>
            </li>
            <li>
              <a>
                FAQs
              </a>
            </li>
            <li>
              <Link to="/Feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default CombinedComponent;
