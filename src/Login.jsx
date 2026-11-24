import React from 'react';

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your UniTrade account</p>
        </header>

        <div className="message-box"></div>

        <form className="auth-form">
          <div className="form-group">
            <label>University Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your university email" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="btn-primary">Login</button>
        </form>

        <footer className="auth-footer">
          <p>Don't have an account? <button type="button" className="btn-link">Register now</button></p>
        </footer>
      </div>
    </div>
  );
}

export default Login;