import { Component } from 'react';
import '../Style/Slides.css'; // Assuming you have a CSS file named Slides.css

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  componentDidMount() {
    this.showSlides();
  }

  showSlides = () => {
    let { slideIndex } = this.state;
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
      slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";  
    this.setState({ slideIndex });
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }

  render() {
    return (
      <div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            {/* <div className="numbertext">1 / 5</div> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png" alt="Image 1"/>
          
          </div>
          <div className="mySlides fade">
         
            <img src="https://1000logos.net/wp-content/uploads/2022/10/Lenskart-Logo.png" alt="Image 2"/>
        
          </div>
          <div className="mySlides fade">
           
            <img src="https://www.freepnglogos.com/uploads/microsoft-logo-png-blue-8.png" alt="Image 3"/>
            
          </div>
          <div className="mySlides fade">
           
            <img src="https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_3.png?$512_N_PNG$" alt="Image 4"/>
          
          </div>
          <div className="mySlides fade">
          
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" alt="Image 5"/>
           
          </div>
        </div>
        <br />
        <div style={{textAlign: "center"}}>
          <span className="dot"></span> 
          <span className="dot"></span> 
          <span className="dot"></span> 
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
}

export default Slideshow;
