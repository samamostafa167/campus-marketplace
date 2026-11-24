import React from 'react';

function Register() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Join UniTrade</h2>
          <p>Campus Marketplace for Students</p>
        </header>

    
        <div className="message-box"></div>

        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Enter your full name" 
              required 
            />
          </div>

          <div className="form-group">
            <label>University Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@std.cu.edu.eg" 
              required 
            />
          </div>

          <div className="form-group">
            <label>WhatsApp / Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="ENTER YOUR PHONE NUMBER" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="At least 6 characters" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Re-enter your password" 
              required 
            />
          </div>

          <button type="submit" className="btn-primary">Create Account</button>
        </form>

        <footer className="auth-footer">
          <p>Already have an account? <button type="button" className="btn-link">Login here</button></p>
        </footer>
      </div>
    </div>
  );
}

export default Register;