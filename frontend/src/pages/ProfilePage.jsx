import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData)); // Retrieve data from localStorage
    }
  }, []);

  if (!userData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <div className="profile-card">
        <div className="profile-detail">
          <strong>Full Name:</strong> {userData.fullName}
        </div>
        <div className="profile-detail">
          <strong>Address:</strong> {userData.address}
        </div>
        <div className="profile-detail">
          <strong>Phone Number:</strong> {userData.phoneNumber}
        </div>
        <div className="profile-detail">
          <strong>Occupation:</strong> {userData.occupation}
        </div>
        {userData.occupation === 'Student' && (
          <div className="profile-detail">
            <strong>Qualification:</strong> {userData.qualification}
          </div>
        )}
        {userData.occupation === 'Working' && (
          <div className="profile-detail">
            <strong>Preferred Role:</strong> {userData.preferredRole}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
