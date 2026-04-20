import { Link } from "react-router-dom";

const services = [
  {
    title: "AC Repair",
    image: "/images/AC repair.jpg",
    description:
      "Rapid diagnostics and dependable repairs to minimize downtime for critical cooling infrastructure.",
    points: ["All brands supported", "Genuine spare parts", "Same-day service", "90-day warranty"],
    queryTitle: "AC Repair",
  },
  {
    title: "AC Installation",
    image: "/images/AC Installation.jpg",
    description:
      "Precision installation for split, ducted, and central AC systems with optimal airflow planning.",
    points: ["Site assessment included", "Expert mounting and setup", "Leak-proof copper piping", "Performance testing"],
    queryTitle: "AC Installation",
  },
  {
    title: "AC Service & Maintenance",
    image: "/images/AC Service & Maintenance.jpg",
    description:
      "Preventive maintenance that improves efficiency and extends unit lifespan for homes and businesses.",
    points: ["Deep coil and filter cleaning", "Gas pressure checks", "Drainage and airflow tuning", "Seasonal performance inspection"],
    queryTitle: "AC Service",
  },
  {
    title: "HVAC Systems",
    image: "/images/Exhaust Ducting.jpg",
    description:
      "End-to-end HVAC planning, integration, and optimization for commercial and industrial spaces.",
    points: ["Commercial duct and airflow planning", "Zoned cooling architecture", "Energy optimization", "Long-term maintenance planning"],
    queryTitle: "Exhaust Ducting",
  },
];

function ServicesSection({ showPageCta = false }) {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-shell">
          <div className="services-header">
            <p className="services-kicker">Our Services</p>
            <h2 className="services-title">Reliable AC Solutions for Homes &amp; Businesses</h2>
            <div className="services-divider" aria-hidden="true" />
            <p className="services-subtitle">
              Expert installation, maintenance, and repair services tailored to your needs. We serve
              residential and commercial properties with precision and professionalism.
            </p>
          </div>

          <ul className="services-trust-strip" aria-label="Service trust highlights">
            <li>Certified AC Specialists</li>
            <li>Same-Day Response</li>
            <li>Commercial &amp; Residential Coverage</li>
          </ul>

          <div className="services-bands" aria-label="Service offerings">
            {services.map((service, index) => {
              const reverse = index % 2 === 1;

              return (
                <article key={service.title} className={`service-band ${reverse ? "service-band--reverse" : ""}`}>
                  <div className="service-band-media">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>

                  <div className="service-band-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <ul className="service-band-points">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <Link className="service-band-cta" to={`/book-service?service=${encodeURIComponent(service.queryTitle)}`}>
                      Book This Service
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {showPageCta && (
            <section className="services-bottom-cta" aria-label="Book service call to action">
              <h3>Need Expert AC Service?</h3>
              <Link className="services-bottom-cta-button" to="/book-service">
                Book Now
              </Link>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
