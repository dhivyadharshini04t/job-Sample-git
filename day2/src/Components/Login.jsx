import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setIsLoggedIn(false); // Ensure isLoggedIn is false on invalid input
      return;
    }

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setIsLoggedIn(false); // Ensure isLoggedIn is false on invalid input
      return;
    }

    // If both email and password are valid
    setErrorMessage("");
    console.log("Login submitted:", { email, password });

    // Simulate successful login (you would perform actual authentication here)
    setIsLoggedIn(true);
  };

  return (
    <div className="itsme">
    <div className="login-container">
      <div className="login-form-container">
        <h2>LOGIN</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email@gmail.com"
            id="login-email"
            name="login-email"
          />
          <label htmlFor="login-password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=""
            id="login-password"
            name="login-password"
          />
          <Link to="/Job">
          <button type="submit" className="login-submit-button">
            LOG IN
          </button></Link>
          {errorMessage && <p className="login-error-message">{errorMessage}</p>}
        </form>
        {isLoggedIn && <p className="login-success-message">Login successful! Welcome, {email}.</p>}
        <br />
        <Link to="/Register">
          <button className="login-link-button"> Dont have an account? Register here.</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
