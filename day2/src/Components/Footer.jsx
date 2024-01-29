// src/Footer.js
import '..Style/Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <nav>
        <ul className="footer-list">
          <li><a className="footer-link" href="#news">News</a></li>
          <li><a className="footer-link" href="#about">About</a></li>
          <li><a className="footer-link" href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;