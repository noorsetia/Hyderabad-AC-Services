import { useEffect, useState, useRef } from "react";
import "./AnimatedStats.css";

// Ease-out effect for smooth deceleration
const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const AnimatedCounter = ({ target, suffix = "", decimals = 0, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ensure it runs only once
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(easedProgress * target);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  // Format to string safely to avoid floating-point overflow rendering
  const formattedCount = Number(count).toFixed(decimals);

  return (
    <div className={`stat-item ${isVisible ? "animate-up" : ""}`} ref={elementRef}>
      <h3 className="stat-value">
        {formattedCount}
        <span className="stat-suffix">{suffix}</span>
      </h3>
      {label && <p className="stat-label">{label}</p>}
    </div>
  );
};

export default function AnimatedStats() {
  const stats = [
    { target: 4.9, decimals: 1, suffix: "", label: "Google Rating", delay: 100 },
    { target: 500, decimals: 0, suffix: "+", label: "Happy Customers", delay: 200 },
    { target: 10, decimals: 0, suffix: "+", label: "Years Experience", delay: 300 },
    { target: 24, decimals: 0, suffix: "/7", label: "Direct Support", delay: 400 },
  ];

  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className={`animated-stats-section ${isSectionVisible ? "fade-in" : ""}`} ref={sectionRef}>
      <div className="animated-stats-container">
        <h2 className="stats-heading">Trusted by Thousands in Hyderabad</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              target={stat.target}
              decimals={stat.decimals}
              suffix={stat.suffix}
              label={stat.label}
              duration={2500}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
