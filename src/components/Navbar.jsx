import { Github, Linkedin, FileText } from "lucide-react"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Navbar() {
  return (
    <nav className="w-full  backdrop-blur-md border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">
        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-wide">Kenza<span className="text-blue-400">.</span></h1>
        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <li>
          
             <a href="#home" className="hover:text-blue-400 transition duration-300">
              Accueil
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition duration-300">
              À propos
            </a>
          </li>

          <li>
            <a href="#formations" className="hover:text-blue-400 transition duration-300">
              Formations
            </a>
          </li>

          <li>
            <Link to="/projects" className="hover:text-blue-400 transition duration-300">
              Projets
            </Link>
          </li>

          <li>
            <Link to="/experience" className="hover:text-blue-400 transition duration-300">
              Experience
            </Link>
          </li>

          <li>
            <Link to="/skills" className="hover:text-blue-400 transition duration-300">
              Compétences
            </Link>
          </li>

          <li>
              <HashLink smooth to="/#contact">Contact</HashLink>
          </li>

        </ul>

       

      </div>

    </nav>
  )
}

export default Navbar