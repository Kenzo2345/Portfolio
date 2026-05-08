import { useState, useEffect } from "react";
import {Menu, X, Github, Linkedin, FileText, Moon, Sun,Code2, MonitorCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const normalClass =
  "hover:text-blue-500 transition duration-300";

const activeClass =
  "text-blue-500 font-semibold";
    const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark"
);
    const location = useLocation();
      useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#111827]/80 border-b border-gray-200 dark:border-gray-700 transition-all duration-500">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 lg:px-12">
        {/* Logo */}
      
        <div className="flex items-center gap-2">
          <MonitorCheck size={27} className="text-blue-500" />
          <Code2 size={27} className="text-blue-500" />
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-all duration-500">Kenza<span className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">.</span></h1>
        </div>

        {/* Menu */}
        <ul className=" hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-700 dark:text-gray-200 transition-all duration-500 ">
          <li>
            <Link to="/"className={location.pathname === "/" && !location.hash ? activeClass : normalClass} hover:text-blue-500 hover:scale-105 transition-all duration-300>
              Accueil
            </Link>
          </li>

          <li>
            <HashLink smooth to="/#about"
              className={location.pathname === "/" && location.hash === "#about" ? activeClass : normalClass} hover:text-blue-500 transition duration-300>
              À propos
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#formations"
              className={location.pathname === "/" && location.hash === "#formations" ? activeClass : normalClass} hover:text-blue-500 transition duration-300>
              Formations
            </HashLink>
          </li>

          <li>
            <Link to="/projects" className={location.pathname === "/projects" ? activeClass : normalClass} hover:text-blue-500 transition duration-300>
              Projets
            </Link>
          </li>

          <li>
            <Link to="/experience" className={location.pathname === "/experience" ? activeClass : normalClass} hover:text-blue-500 transition duration-300>
              Expériences
            </Link>
          </li>

          <li>
            <Link to="/skills" className={location.pathname === "/skills" ? activeClass : normalClass} hover:text-blue-500 transition duration-300>
              Compétences
            </Link>
          </li>

          <li>
              <HashLink smooth to="/#contact"
              className={location.pathname === "/" && location.hash === "#contact" ? activeClass : normalClass}
              hover:text-blue-500 transition duration-300>
              Contact
            </HashLink>
          </li>

        </ul>
        
         <div className="flex items-center gap-4">
          <div onClick={() => setDarkMode(!darkMode)} className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${darkMode ? "bg-gradient-to-r from-blue-500 to-sky-400" : "bg-gray-400"}`}>
            {/* Lune à gauche */}
            <Moon size={14} className="absolute left-1 text-white" />
            {/* Soleil à droite */}
            <Sun size={14} className="absolute right-1 text-yellow-300" />
            {/* Bouton */}
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${darkMode ? "translate-x-7" : "translate-x-0"}`}/>
          </div>
          {/* Bouton hamburger (mobile) */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {/* Icône hamburger */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
            </svg>
          </button>
        </div>
       

      </div>



     
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 bg-[#111827]/80 backdrop-blur-md  p-6 rounded-2xl shadow-lg flex flex-col gap-5">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>À propos</HashLink></li>
          <li><HashLink smooth to="/#formations" onClick={() => setIsOpen(false)}>Formations</HashLink></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/experience" onClick={() => setIsOpen(false)}>Expériences</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Compétences</Link></li>
          <li><HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar