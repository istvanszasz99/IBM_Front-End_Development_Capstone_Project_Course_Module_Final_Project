import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component Landing_Page
const Landing_Page = () => {
  return (
    <section className="hero-section"> {/* Creating a section with class name 'hero-section' */}
      <div>
        <div data-aos="fade-up" className="flex-hero"> {/* Creating a div with data-aos attribute and class name 'flex-hero' */}
            
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
              <div className="blob-cont"> {/* Creating a div with class name 'blob-cont' */}
                  <div className="blue blob"></div> {/* Creating a blue blob inside the 'blob-cont' div */}
              </div>
              <div className="blob-cont"> {/* Creating another div with class name 'blob-cont' */}
                  <div className="blue1 blob"></div> {/* Creating a different blue blob inside the second 'blob-cont' div */}
              </div>
            <h4>
              "Embrace the art of self-care, for a healthy mind and body forge the foundation of a vibrant life.<br/>
              Wellness is not just a destination; it's a journey of a mindful choices and daily transformations. Nuture<br/>
              your health with love, and watch it bloom into a beacon of joy and vitality." {/* A quote about self-care and health solutions */}
            </h4>
            <Link to="/best-services"> {/* Creating a hyperlink to jump to the 'services' section */}
              <button className="button">Get Started</button> {/* Creating a button with class name 'button' */}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application