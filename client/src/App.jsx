import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  const whatsappNumber = "+213556648005";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/mohammed.amin_harroudj";

  return (
    <div className="text-lg relative">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-4 flex items-center justify-center transition-all duration-300"
            style={{ width: "60px", height: "60px" }}
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg rounded-full p-4 flex items-center justify-center transition-all duration-300"
            style={{ width: "60px", height: "60px" }}
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
