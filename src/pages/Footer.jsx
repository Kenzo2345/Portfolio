
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 mt-20 bg-white/80 transition-all duration-500 dark:bg-[#303642cc]/80 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6 ">
        {/* Nom */}
        <h3 className="text-xl font-semibold ">TAIBI <span >Kenza</span></h3>
        {/* Icônes sociales */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Kenzo2345" className="hover:text-blue-500 transition">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/kenza-taibi" className="hover:text-blue-500 transition">
            <Linkedin size={22} />
          </a>
          <a href="mailto:taibikenza11@gmail.com" className="hover:text-blue-500 transition">
            <Mail size={22} />
          </a>
        </div>

        {/* Ligne */}
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full "></div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} TAIBI Kenza. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}