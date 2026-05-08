import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-white transition-all duration-500">
      <Navbar />
          {/* Scroll automatique + bouton */}
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          {/* Page d’accueil (avec plusieurs sections) */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                {/*<Engagement />*/}
                <Contact />
              </>
            }
          />

          {/* Page séparée pour Compétences */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          {/* Page séparée pour Expériences */}
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
     
      <Footer />
    </div>
    
  );
}

export default App