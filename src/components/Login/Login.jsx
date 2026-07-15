import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      {/* Back button positioned absolutely */}
      <Link to="/" className="close-btn">×</Link>

      <div className="login-card">
        <form className="login-form">
          <h2 className='title'>Login to MakeWith</h2>
          <input type="email" placeholder="Email" className='card'/>
          <input type="password" placeholder="Password" />
          <button type="submit" className="waitlist btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;