// NavBar.js

import { Link } from 'react-router-dom';
import '../Style/Navbar.css';
const NewNavBar = () => {
  return (
    <nav className="new-navbar-container">
      <ul className="new-navbar-list">
        <li className="new-navbar-list-item">
          <Link to="/" className="new-navbar-link">Banking </Link>
        </li>
        <li className="new-navbar-list-item">
          <Link to="/about" className="new-navbar-link">Manufacturing</Link>
        </li>
        <li className="new-navbar-list-item">
          <Link to="/services" className="new-navbar-link">HealthCare</Link>
        </li>
        <li className="new-navbar-list-item">
          <Link to="/contact" className="new-navbar-link">IT ITES</Link>
        </li>
        <li className="new-navbar-list-item">
          <Link to="/contact" className="new-navbar-link">Electronics</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NewNavBar;
