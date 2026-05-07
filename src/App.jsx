import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
       <About/>
      <Footer />  
     
    
    </div>
  )
}

export default App