import React from 'react';

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        
        <header className="profile-header">
          <h2>Student Profile</h2>
        </header>

        <div className="message-box"></div>

        
        <div className="profile-details">
          <div className="detail-row">
            <strong>Full Name:</strong>
            <span>Student Name</span>
          </div>
          <div className="detail-row">
            <strong>University Email:</strong>
            <span>student@university.edu</span>
          </div>
          <div className="detail-row">
            <strong>Department:</strong>
            <span>Student Department</span>
          </div>
          <div className="detail-row">
            <strong>Phone:</strong>
            <span>Phone Number</span>
          </div>

          <div className="profile-actions">
            <button type="button" className="btn-primary">Edit Profile</button>
            <button type="button" className="btn-secondary">Logout</button>
          </div>
        </div>

        
        <form className="profile-edit-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input type="text" name="department" placeholder="Enter your department" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="profile-actions">
            <button type="submit" className="btn-primary">Save Changes</button>
            <button type="button" className="btn-secondary">Cancel</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Profile;