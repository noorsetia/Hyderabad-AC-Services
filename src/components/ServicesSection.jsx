import { Link } from "react-router-dom";

const services = [
  {
    title: "AC Repair",
    description:
      "Expert diagnosis and repair for all AC brands. We handle compressor issues, gas leaks, cooling problems, electrical faults, and more. Same-day service available for emergencies.",
    highlights: ["All brands supported", "Same-day service", "Genuine spare parts", "90-day warranty"],
    image: "/images/AC repair.jpg",
  },
  {
    title: "AC Installation",
    description:
      "Professional installation of split, window, cassette, and central AC units. We ensure optimal positioning, proper copper piping, and perfect setup for maximum efficiency.",
    highlights: ["Site assessment included", "All unit types", "Copper piping & insulation", "Testing & commissioning"],
    image: "/images/AC Installation.jpg",
  },
  {
    title: "AC Service & Maintenance",
    description:
      "Regular deep cleaning, filter washing, gas pressure check, coil cleaning, and drainage maintenance. Keeps your AC efficient and extends its lifespan.",
    highlights: ["Deep cleaning", "Gas top-up", "Performance check", "Reduces power bills"],
    image: "/images/AC Service & Maintenance.jpg",
  },
  {
    title: "AC Uninstallation",
    description:
      "Safe removal and shifting of AC units. Proper gas recovery, dismounting, and packaging for relocation. We handle it with care to prevent damage.",
    highlights: ["Gas recovery", "Safe dismounting", "Relocation support", "Damage-free process"],
    image: "/images/AC Uninstallation.jpg",
  },
  {
    title: "Annual Maintenance Contracts",
    description:
      "Comprehensive AMC plans for worry-free AC maintenance. Scheduled servicing, priority repairs, and discounted parts replacement throughout the year.",
    highlights: ["Scheduled visits", "Priority repairs", "Discounted parts", "Custom plans available"],
    image: "/images/Annual Maintenance Contracts.jpg",
  },
  {
    title: "Exhaust Ducting",
    description:
      "Design and installation of exhaust ducting systems for kitchens, factories, and commercial spaces. Proper ventilation solutions for improved air quality.",
    highlights: ["Custom design", "Commercial grade", "Kitchen exhaust", "Factory ventilation"],
    image: "/images/Exhaust Ducting.jpg",
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-hero">
        <div className="services-hero-backdrop" aria-hidden="true" />
        <div className="services-hero-grid">
          <div className="services-hero-content">
            <p className="services-hero-kicker">OUR SERVICES</p>
            <h1>Our Services</h1>
            <p className="services-hero-subheading">
              Reliable, affordable, and expert air conditioning solutions tailored for your home and business.
            </p>
            <p className="services-hero-description">
              We provide complete AC services including installation, repair, maintenance, and system upgrades. Our certified technicians ensure fast, efficient, and long-lasting cooling solutions.
            </p>

            <ul className="services-hero-points">
              <li>Certified &amp; experienced technicians</li>
              <li>Same-day service availability</li>
              <li>Affordable pricing with transparency</li>
              <li>Service for all AC brands</li>
            </ul>

            <div className="services-hero-actions">
              <Link className="services-hero-button services-hero-button--primary" to="/book-service">
                Book Service
              </Link>
              <Link className="services-hero-button services-hero-button--secondary" to="/contact">
                Get Free Quote
              </Link>
            </div>

            <div className="services-hero-trust">Trusted by 1000+ customers in Hyderabad</div>
          </div>
        </div>
      </div>

      <div className="services-page-list" id="services-list">
        {services.map((service, index) => {
          const reverse = index % 2 === 1;

          return (
            <article
              key={service.title}
              className={`service-row ${reverse ? "service-row--reverse" : ""}`}
              aria-label={service.title}
            >
              <div className="service-row-media">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>

              <div className="service-row-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="service-row-highlights">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link
                  className="service-row-cta"
                  to={`/book-service?service=${encodeURIComponent(service.title)}`}
                >
                  Book This Service
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
