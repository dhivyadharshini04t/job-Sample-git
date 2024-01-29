import { useState } from 'react';
import '../Style/Profile.css';

const MyProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the profile data to the server
    console.log("Submitted:", { username, email, qualification, experience, gender, mobileNumber, age });
  };

  return (
    <center><div className="farewell-box">
      <div className="farewell-form">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="farewell-select"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="farewell-select"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              className="farewell-select"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="experience">Experience:</label>
            <input
              type="text"
              id="experience"
              className="farewell-select"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="gender">Gender:</label>
            <select
              id="gender"
              className="farewell-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              className="farewell-select"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="farewell-section">
            <label className="farewell-label" htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              className="farewell-select"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="farewell-button">Save</button>
        </form>
      </div>
    </div></center>
  );
};

export default MyProfile;
