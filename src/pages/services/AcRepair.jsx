import React from "react";
import Footer from "../../components/Footer";
import "../../styles/services-pages.css";

function AcRepair() {
  return (
    <>
      <main className="service-page-container">
        <div className="service-page-header">
          <h1>BEAT THE HEAT—FIX AC GAS LEAKS FAST WITH OUR EXPERT AC REPAIR SERVICES IN HYDERABAD!</h1>
        </div>
        
        <div className="service-page-content">
          <div className="service-page-text">
            <p>
              Is your air conditioner not cooling like it used to? You may be facing a refrigerant gas leak - one of the most common yet often overlooked issues affecting AC performance. At Hyderabad AC Services, we specialize in AC Gas Leak Rectification Service designed to:
            </p>
            
            <ul className="service-page-list service-page-list--dots">
              <li>Detect leaks accurately using advanced tools</li>
              <li>Seal and repair leaks permanently</li>
              <li>Recharge gas to optimal levels</li>
              <li>Improve cooling efficiency and extend AC life</li>
              <li>Reduce electricity bills</li>
            </ul>
            
            <p>
              Our trained AC technicians ensure a safe, environmentally compliant, and cost-effective solution for homes, offices, and commercial spaces.
            </p>
            
            <h2 className="service-page-subtitle">All AC Types Covered</h2>
            <p>Split AC, Cassette AC, Ductable AC, Centralized AC Systems, and more.</p>
            
            <h2 className="service-page-subtitle">On-Site Reporting</h2>
            <p>Immediate results with leak confirmation.</p>
            
            <div className="service-page-cta">
              <a href="/contact" className="service-page-button">CONTACT US</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AcRepair;
