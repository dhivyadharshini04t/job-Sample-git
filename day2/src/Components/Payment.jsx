import { useState } from 'react';
import '../Style/Form.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    survey: '',
    hearaboutus: '',
    comment: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const { name, email, survey, hearaboutus, comment } = formData;
    return name && email && survey && hearaboutus && comment;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      // Submit the form data (You can replace this with your actual submission logic)
      console.log("Form submitted successfully!");
      setFormSubmitted(true); // Set formSubmitted to true when submitted successfully
    } else {
      console.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="formform">
      <div className="container">
        <div className="image-container">
          {/* Left side image */}
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20220621/pngtree-join-our-team-recruitment-message-illuminated-on-cinematic-moody-background-light-box-photo-image_47206636.jpg" alt="Left Image" />
        </div>
        <div className="form-container">
          {/* Feedback form */}
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
                <label htmlFor="survey" className="label-age">
                  Address
                </label>
                <input
                  type="text"
                  id="survey"
                  name="survey"
                  className="input-age"
                  placeholder="Enter your permanent address"
                  value={formData.survey}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="hearaboutus" className="label-age">
                  Contact Information
                </label>
                <input
                  type="text"
                  id="hearaboutus"
                  name="hearaboutus"
                  className="input-age"
                  placeholder="Enter your Mobile Number"
                  value={formData.hearaboutus}
                  onChange={handleChange}
                />
              </div>
              <div className="formField">
                <label htmlFor="hearabout" className="label-age">
                  Studies
                </label>
                <input
                  type="text"
                  id="hearabout"
                  name="hearabout"
                  className="input-age"
                  // placeholder="Highest Education"
                  value={formData.hearabout}
                  onChange={handleChange}
                />
              </div>

              <div className="formField">
                <label htmlFor="comment">
                  Experience about previous Jobs?
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  className="input-comment"
                  placeholder="Enter your comment here"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>

              {!isFormValid() && (
                <div className="error-message">
                  Please fill in all the fields.
                </div>
              )}

              <div className="submitButton-container">
                <button
                  type="submit"
                  className="submitButton"
                  value="submit"
                  disabled={!isFormValid()}
                >
                  Submit
                </button>
              </div>
            </form>
            {formSubmitted && (
              // Display the success message below the form
              <div className="success-message">
                Form submitted successfully! Thank you.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
