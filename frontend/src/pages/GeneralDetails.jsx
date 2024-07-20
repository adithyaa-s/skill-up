// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

// eslint-disable-next-line react/prop-types
const GeneralDetails = ({ onNext }) => {
  const navigate = useNavigate(); 

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [qualification, setQualification] = useState('');
  const [preferredRole, setPreferredRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      fullName,
      address,
      phoneNumber,
      occupation,
      qualification,
      preferredRole,
    };

    
    if (onNext) {
      onNext(details);
      navigate('/');
    } 
  };

  return (
    <div>
      <h2>General Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Occupation:</label>
          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your occupation
            </option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
          </select>
        </div>
        {occupation === 'Student' && (
          <div>
            <label>Qualification:</label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
            />
          </div>
        )}
        {occupation === 'Working' && (
          <div>
            <label>Preferred Role:</label>
            <input
              type="text"
              value={preferredRole}
              onChange={(e) => setPreferredRole(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default GeneralDetails;
