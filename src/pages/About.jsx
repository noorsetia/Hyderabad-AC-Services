import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  const whyChooseUs = [
    {
      num: "01",
      title: "Experienced Engineers & Certified Technicians",
      text: "Our team is fully certified and trained in HVAC systems for all residential and commercial needs."
    },
    {
      num: "02",
      title: "Serving All Areas of Hyderabad",
      text: "From Banjara Hills to HiTech City — we cover every part of Hyderabad and surrounding areas."
    },
    {
      num: "03",
      title: "Transparent Pricing — No Hidden Charges",
      text: "You'll know the full cost before we start. No surprises, no fine print."
    },
    {
      num: "04",
      title: "Fast Response & Same-Day Service",
      text: "AC emergency? We offer same day service so you're never left sweating for long."
    },
    {
      num: "05",
      title: "Eco-Friendly Practices & Responsible Recycling",
      text: "We follow responsible refrigerant handling and eco-safe disposal practices on every job."
    },
    {
      num: "06",
      title: "Customer Satisfaction Guaranteed",
      text: "We don't consider a job done until you're completely happy with the result."
    }
  ];

  const services = [
    { title: "AC Installation", text: "Split, window, and centralized cooling systems installed with precision and care." },
    { title: "AC Repair", text: "Fast diagnosis, reliable fixes — for every brand, every problem." },
    { title: "Preventive Maintenance", text: "Annual and seasonal AMC plans that keep your AC running like it's brand new." },
    { title: "Ducting Systems", text: "Efficient air duct layout for better flow, lower energy bills, and cleaner air." },
    { title: "Kitchen Exhaust", text: "Restaurant-grade exhaust systems built for heat, grease, and heavy daily use." },
    { title: "VRF / VRV Systems", text: "Smart multi-zone cooling for large offices, hotels, and commercial buildings." }
  ];

  const steps = [
    { num: "01", title: "You Call. We Listen.", text: "Tell us your situation. We ask the right questions — not to waste your time, but to show up fully prepared." },
    { num: "02", title: "We Assess. You Decide.", text: "A certified engineer visits, evaluates your space, and gives you a clear, honest quote. No pressure." },
    { num: "03", title: "We Work. You Relax.", text: "Our team handles everything — on time, safely, and with a clean finish you'll actually notice." },
    { num: "04", title: "Done. But Not Gone.", text: "We follow up. We check in. We're available if anything feels off. That's just how we work." }
  ];

  const testimonials = [
    {
      text: "My AC went out over the weekend. They showed up within two hours, had the part on hand, and fixed everything. Technicians were professional, punctual, and excellent. Will definitely return.",
      name: "Sangita",
      role: "Chartered Accountant",
      initials: "SG"
    },
    {
      text: "Friendly, professional, and always honest. They explain exactly what they're doing and what your options are. Fair prices, quality work. I highly recommend giving them a call.",
      name: "Aijaz Khan",
      role: "Software Engineer",
      initials: "AK"
    },
    {
      text: "Within two hours of calling, they were at my door. Extremely professional — they explained everything clearly, worked quickly, and fixed it for a reasonable price. Will only use them from now on.",
      name: "Raju",
      role: "Doctor",
      initials: "RJ"
    }
  ];

  const servingAreas = [
    "Homes & Apartments", "Corporate Offices", "Restaurants & Kitchens", "Hospitals & Clinics",
    "Retail Showrooms", "Warehouses", "Industrial Facilities", "Commercial Buildings"
  ];

  return (
    <div className="about-page">
      <div className="about-container">

        {/* HERO SECTION */}
        <section className="hero-split">
          <div className="hero-content">
            <span className="section-eyebrow">About Us</span>
            <h1 className="hero-title">
              <span>Complete AC &amp; HVAC</span>
              <span>Services</span>
              <span>Across Hyderabad.</span>
            </h1>
            <p className="hero-description">
              At Hyderabad AC Services, we provide complete Air Conditioning and HVAC Services in Hyderabad.
              With years of experience, we specialize in AC installation, repair, maintenance, ducting,
              centralized cooling, restaurant kitchen exhaust installation, and annual maintenance for
              both residential and commercial clients.
            </p>
            <div className="mission-box">
              <p>Our mission: keep every customer cool and comfortable with reliable, affordable, and professional AC Services.</p>
            </div>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">Get a Free Consultation</a>
              <a href="tel:+918712322475" className="btn-secondary">Call +91 8712322475</a>
            </div>
          </div>

          <div className="stats-card">
            <span className="stats-card-badge">TRUSTED HVAC PARTNER</span>
            <p className="stats-card-text">
              From split and window ACs to centralized ducting and VRF/VRV systems — we deliver end-to-end cooling solutions for homes, offices, restaurants, hospitals, and more.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Support Availability</p>
              </div>
            </div>
            <div className="rating-line">
              4.9 <span>/ 5 average rating across 500+ clients</span>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="info-section">
          <div className="info-header">
            <span className="section-eyebrow">Who We Are</span>
          </div>
          <div className="info-body">
            <h2 className="info-title">
              <span>Certified HVAC professionals</span>
              <span>committed to quality work.</span>
            </h2>
            <p>
              Hyderabad AC Services is a team of certified HVAC engineers and professionals dedicated to
              delivering top-quality cooling solutions. From split and window ACs to centralized ducting
              and VRF/VRV systems, we provide end-to-end services tailored to your specific needs.
            </p>
            <p>
              Whether it's a home, office, restaurant, hospital, retail showroom, or industrial facility —
              we ensure every project is executed with precision, safety, and efficiency.
            </p>
            <p>
              Whether you're installing a new system, upgrading to centralized cooling, or just need
              seasonal maintenance — we're here to keep you cool, comfortable, and worry-free.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="grid-section grid-section--why">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="grid-title grid-title--why">
            <span>Six reasons customers trust us</span>
            <span>with their AC</span>
          </h2>
          <div className="cards-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-item">
                <span className="card-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="grid-section grid-section--services">
          <div className="services-intro">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="grid-title grid-title--services">Everything HVAC. Under one roof.</h2>
            <p className="services-intro-text">
              Whether it's a simple repair or a complex centralized system — we've done it, certified for it, and ready for it.
            </p>
          </div>
          <div className="cards-grid">
            {services.map((service, index) => (
              <div key={index} className="card-item">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="process-section process-section--primary">
          <div className="process-header">
            <span className="section-eyebrow section-eyebrow--light">How It Works</span>
            <h2>Four steps. Zero stress.</h2>
            <p>We've made the whole experience simple — from the first call to the final check.</p>
          </div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-card">
                <span className="card-num card-num--light">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="grid-section grid-section--testimonials">
          <span className="section-eyebrow">REAL WORDS. REAL CLIENTS.</span>
          <h2 className="grid-title">Don't take our word for it</h2>
          <div className="cards-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="card-item testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHERE WE SERVE */}
        <section className="grid-section">
          <span className="section-eyebrow">WHERE WE SERVE</span>
          <h2 className="grid-title">Every kind of space. Every kind of need.</h2>
          <div className="serving-grid">
            {servingAreas.map((area, index) => (
              <div key={index} className="serving-item">{area}</div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="process-section process-section--cta">
          <div className="process-header process-header--compact">
            <span className="section-eyebrow section-eyebrow--light">LET'S TALK</span>
            <h2 className="process-cta-title">
              <span>Ready to get your AC</span>
              <span>sorted?</span>
            </h2>
            <p className="process-cta-text">
              No forms to fill, no waiting around. Just call or drop us a message — and we'll have someone with you faster than you'd expect.
            </p>
          </div>
          <div className="hero-actions">
            <a href="/contact" className="btn-primary btn-primary--white">Book a Free Visit</a>
            <a href="tel:+918712322475" className="btn-secondary btn-secondary--outline-light">Call +91 8712322475</a>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default About;
