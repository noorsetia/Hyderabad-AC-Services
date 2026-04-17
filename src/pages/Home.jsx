import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesSection from "../components/ServicesSection";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      const timeoutId = window.setTimeout(() => {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }

    return undefined;
  }, [location.hash]);

  return <ServicesSection />;
}

export default Home;