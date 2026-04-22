import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function Ducting() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <p className="service-page-quote">"Smart Ducting. Seamless Airflow. Precision Cooling Starts Here."</p>
          <h1>DUCTING CONTRACTORS IN HYDERABAD</h1>
        </div>
        
        <div className="service-page-content service-page-content--split">
          <div className="service-page-text">
            <p>
              At Hyderabad AC Services, we specialize in custom ducting solutions for HVAC systems—designed for efficiency, durability, and noise-free airflow. Whether you're setting up a Centralized AC System, Ventilation System, Commercial Exhaust Setup, or industrial exhaust, we deliver precision and performance.
            </p>
            
            <h2 className="service-page-subtitle">We offer complete ducting solutions, including:</h2>
            
            <ul className="service-page-list service-page-list--arrow">
              <li>Air Duct Installation, Design & Layout Planning</li>
              <li>Exhaust Duct Installation & Maintenance</li>
              <li>Fabrication & Installation of AC Ducts</li>
              <li>Diffuser, Grill, and Damper Installation</li>
            </ul>
            
            <div className="service-page-cta">
              <a href="/contact" className="service-page-button">CONTACT US</a>
            </div>
          </div>
          
          <div className="service-page-image">
            <img src="/images/Exhaust Ducting.jpg" alt="Ducting Services" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Ducting;
