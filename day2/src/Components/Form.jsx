import { useState } from 'react';
import '../Style/Form.css';
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    mobileNumber: '',
    studies: '',
    experience: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const { name, email, address, mobileNumber, studies, experience } = formData;
    return name && email && address && mobileNumber && studies && experience;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted successfully!");
      // Add your submission logic here
    } else {
      console.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="formform">
      <div className="container">
        <div className="image-container">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/91/83/we-are-hiring-banner-in-blue-vector-34649183.jpg" alt="Left Image" />
        </div>
        <div className="form-container">
          <div className="Stef feedbackFormContainer">
            <h1 className="formTitle">JOB APPLICATION FORM</h1>
            <form id="form" onSubmit={handleSubmit}>
              <div className="formField">
                <label htmlFor="name" className="label-name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="email" className="label-email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="address" className="label-age">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="input-age"
                  placeholder="Enter your permanent address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="mobileNumber" className="label-age">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="input-age"
                  placeholder="Enter your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="studies" className="label-age">
                  Studies
                </label>
                <input
                  type="text"
                  id="studies"
                  name="studies"
                  className="input-age"
                  placeholder="Enter your highest education"
                  value={formData.studies}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="experience">
                  Experience about previous Jobs?
                </label>
                <textarea
                  name="experience"
                  id="experience"
                  className="input-comment"
                  placeholder="Enter your comment here"
                  value={formData.experience}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="submitButton-container">
                <button
                  type="submit"
                  className="submitButton"
                  disabled={!isFormValid()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
