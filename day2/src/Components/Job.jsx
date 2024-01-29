import '../Style/Job.css';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import '..Style/Footer.css';
import '../Style/Slides.css'; // Import the Slides CSS file
import Slides from './Slides';
function App() {
  return (
    <div className="appjob-container">
      <div className="sidebar">
        <a href="#" className="sidebar-item">
          Link 1
        </a>
        <Link to="/BankList">
          <a href="#" className="dropdown-item">
            Banking
          </a>
        </Link>
        <a href="#" className="dropdown-item">
          Education
        </a>
        <a href="#" className="dropdown-item">
          Agriculture
        </a>
        <a href="#" className="dropdown-item">
          Construction
        </a>
        <a href="#" className="dropdown-item">
          HealthCare
        </a><a href="#" className="dropdown-item">
          IT-ITES
        </a><a href="#" className="dropdown-item">
         Logistics
        </a>
        <a href="#" className="dropdown-item">
          Media and Entertainment
        </a><a href="#" className="dropdown-item">
          Pharmaceuticals
        </a>
        <a href="#" className="dropdown-item">
          Textiles and Handlooms
        </a>
        
      </div>

      <div className="content">
        <div className="content1">
          <h2>JOB NEST</h2>
        </div>
       <div className="writing"><p>You can search and apply for a job with your own decision.</p>
        <p>
          A job application portal streamlines hiring by connecting job seekers with employers, enabling easy application submission and efficient recruitment
          management. It serves as a central platform for seamless job exploration and hiring processes.
         </p></div> 

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <h2><center>Recent Jobs</center></h2>
        {/* <div className="search-image-container">
          <img src="https://www.psd-dude.com/tutorials/resources-images/presentation-background/fun-powerpoint-background.jpg" alt="Search Image" className="search-image" />
        </div>
        <div className="search-image-container">
          <img src="https://www.psd-dude.com/tutorials/resources-images/presentation-background/fun-powerpoint-background.jpg" alt="Search Image" className="search-image" />
        </div>
        <div className="search-image-container">
          <img src="https://www.psd-dude.com/tutorials/resources-images/presentation-background/fun-powerpoint-background.jpg" alt="Search Image" className="search-image" />
        </div> */}
          <Link to="/Form" className="job-link">
  <div className="custom-job-listing-container">
    <img
      src="https://cdn6.aptoide.com/imgs/0/b/f/0bfaeb9f19a7c81f7a674e1e5b4d1085_icon.png"
      alt="Company 2"
      className="custom-company-image"
    />
    <div className="custom-job-details">
      <h3 className="custom-job-title">FIELD SALES OFFICERS</h3>
      <p className="custom-company-name">Voice Snap</p>
      <p className="custom-job-description">
        Posted Date : 03-01-2024
        <br /> Open Until : 24-01-2024
        <br />Salary:15,000 - 25,000 location:Kanniyakumari
      </p>
    </div>
  </div>
</Link>
      
<Link to="/Form" className="job-link">
  <div className="custom-job-listing-container">
    <img
      src="https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo-768x483.png"
      alt="Company 2"
      className="custom-company-image"
    />
    <div className="custom-job-details">
      <h3 className="custom-job-title">Jio Hiring </h3>
      <p className="custom-company-name">Jio</p>
      <p className="custom-job-description">
        Posted Date : 05-01-2024
        <br /> Open Until : 05-02-2024
        <br />Salary:25,000 - 32,000 location:Coimbatore
      </p>
    </div>
  </div>
</Link>
      
<Link to="/Form" className="job-link">
  <div className="custom-job-listing-container">
    <img
      src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
      alt="Company 2"
      className="custom-company-image"
    />
    <div className="custom-job-details">
      <h3 className="custom-job-title">LinkedIn Social Media Marketer</h3>
      <p className="custom-company-name">LinkedIn</p>
      <p className="custom-job-description">
        Posted Date : 10-01-2024
        <br /> Open Until : 10-02-2024
        <br />Salary:1,00,000 - 1,25,000 location:Kolkata
      </p>
    </div>
  </div>
</Link>
      

      <Link to="/Form" className="job-link">
  <div className="custom-job-listing-container">
    <img
      src="https://w7.pngwing.com/pngs/612/262/png-transparent-zomato-hd-logo-thumbnail.png"
      alt="Company 2"
      className="custom-company-image"
    />
    <div className="custom-job-details">
      <h3 className="custom-job-title">Delivery Executives </h3>
      <p className="custom-company-name">Zomato</p>
      <p className="custom-job-description">
        Posted Date : 25-01-2024
        <br /> Open Until : 02-03-2024
        <br />Salary:15,000 - 25,000 location:Chennai
      </p>
    </div>
  </div>
</Link>
    <Link to="/Form" className="topcompany-link">
    <h2><center>Job Opening in Top Companies</center></h2></Link>
<Slides/>
      <ul className="navbar">
        <Link to="/Profile"><li><a className="nav-link" href="#home">My Profile</a></li></Link>
        <li><a className="nav-link" href="#news">News</a></li>
          <li>
              <a className="nav-link" href="mailto:dhivyadharshini04t@gmail.com">Contact</a>
            </li>
        <li className="nav-right"><a className="nav-link" href="#about">About</a></li>
        {/* <li className="nav-right"><a className="nav-link" href="#profile">profile</a></li> */}
        <Link to ="/Payment"><li className="nav-right"><a className="nav-link blink" href="#premium">Premium Jobs</a></li></Link>
      </ul>
      {/* <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer> */}
      <footer className="custom-footer">
      <nav>
        <ul className="footer-list">
          <li><a className="footer-link" href="#news">News</a></li>
          <li><a className="footer-link" href="#about">About</a></li>
          <li><a className="footer-link" href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
    </div></div>
  );
}

export default App;
