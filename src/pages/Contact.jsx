import { CheckCircle, GithubIcon, LinkedinIcon, Mail, PhoneCall,  Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section data-aos="fade-down" id="contact" className="py-20 px-6">
      <h2 data-aos="slide-right" className="text-blue-900 dark:text-white text-3xl font-bold text-center mb-10">
        Contact
      </h2>

      <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-white/80 space-y-4 max-w-3xl mx-auto shadow-xl rounded-3xl p-8 space-y-6 text-gray-700">
        
        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <div className="flex items-center gap-2 min-w-[140px]">
            <Mail size={20} className="text-blue-500" />
            <span className="font-semibold">Email :</span>
          </div>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=taibi@gmail.com" target="_blank" 
          className=" break-all hover:underline text-blue-500"> taibikenza1102@gmail.com</a>
        </div>
        {/* Téléphone */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <PhoneCall size={20} className="text-blue-500" />
          <span className="font-semibold min-w-[100px]">Téléphone :</span>
          <a href="tel:+33636065102" className=" hover:underline text-blue-500" > +33 6 36 06 51 02
          </a>
        </div>
        {/* LinkedIn */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <LinkedinIcon size={20} className="text-blue-500" />
          <span className="font-semibold min-w-[100px]">LinkedIn :</span>
          <a href="https://linkedin.com/in/kenza-taibi" target="_blank" rel="noopener noreferrer"
            className=" break-all hover:underline text-blue-500">linkedin.com/in/kenza-taibi
          </a>
        </div>
        {/* GitHub */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:translate-x-1 transition">
          <GithubIcon size={20} className="text-blue-500" />
          <span className="font-semibold min-w-[100px]">GitHub :</span>
          <a href="https://github.com/Kenzo2345"
            target="_blank" rel="noopener noreferrer"
            className=" hover:underline text-blue-500 "> Voir mes projets
          </a>
        </div>
        {/* CTA */}
       <div className="pt-4 flex justify-center items-center gap-2">
        <Sparkles size={18} className="animate-pulse text-blue-500" />
        <p className="text-sm font-medium text-blue-500"> Disponible pour opportunités</p>
      </div>

      </div>
    </section>
  );
}