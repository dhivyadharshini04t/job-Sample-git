import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/BankList.css'; // Import the CSS file

const App = () => {
  return (
  
        <div className="app-container">
      
     
        <div className="job-listing-container job1">
          <img
            src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Relationship Manager </h3>
            <p className="company-name">Hdfc Bank Limited</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Coimbatore
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"><button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
     

      {/* Add similar Link components for other job listings */}

      
        <div className="job-listing-container job2">
          <img
            src="https://companieslogo.com/img/orig/CSBBANK.NS-648e76f9.png?t=1604067032"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Customer  Officer</h3>
            <p className="company-name">CSB Bank</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Chennai
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
    
        <div className="job-listing-container job2">
          <img
            src="https://companieslogo.com/img/orig/MUTHOOTFIN.NS-276f7615.png?t=1603305807"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Banking Executive</h3>
            <p className="company-name">Muthoot Finance</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Dindigul
              <br/> Half time
            </p>
            <Link to="/Form" className="job-link"><button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
     
        <div className="job-listing-container job2">
          <img
            src="https://media.licdn.com/dms/image/C560BAQGtnC2FrB-qig/company-logo_200_200/0/1630669861023/xpert_hunt_logo?e=2147483647&v=beta&t=nyR95uyPo3KCfLZFNm-MSHYhUSsmp0L6IE2-wFU2MEk"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Investment Analyst</h3>
            <p className="company-name">XpertHunt</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Bengaluru
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      
        <div className="job-listing-container job2">
          <img
            src="https://assets.stickpng.com/images/627ccde01b2e263b45696ab7.png"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Credit Manager</h3>
            <p className="company-name">kotak Mahindra Bank</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:karnataka
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      
    </div>
  );
};

export default App;
