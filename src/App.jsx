import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BookServicePage from "./pages/BookService";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="app-shell" id="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/book-service" element={<BookServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;