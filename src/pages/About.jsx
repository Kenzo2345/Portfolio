import { Award, GraduationCap, Handshake  } from "lucide-react"
export default function About() {
  return (
    <section id="about" className="min-h-screen text-white flex flex-col justify-center items-center px-10 py-20">
      <h2 className="text-4xl font-bold mb-6">
        About Me
      </h2>
      {/* Bloc présentation */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-purple-100 shadow-xl rounded-3xl p-8 md:p-10 text-center leading-relaxed text-gray-700 space-y-6">
     <p className="mt-8  text-gray-700 flex flex-wrap justify-center gap-6">
          Étudiante en Master 1 Informatique spécialisée en calcul haute performance, intelligence artificielle et simulation numérique. Compétences en Python, C/C++, MPI, TensorFlow, traitement de données, calcul parallèle et modélisation scientifique. 
          
        </p>
        <p className="mt-4 text-gray-700 flex flex-wrap justify-center gap-6">
          Recherche une alternance à partir de septembre 2026 en IA, Data Science ou HPC.
        </p>
      </div>
     

      <div data-aos="fade-up" id="formations"className="text-gray-700 mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Formations */}
                <div className=" shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[350px]">
           <div className=" text-xs px-3 py-1 rounded-full font-medium shadow-sm transition">
           <h3 className="text-xl font-semibold justify-center text-center mb-4 flex items-center gap-2 hover:text-white">
           <GraduationCap size={22} />
            Formations
          </h3></div>
          
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="border-b pb-2">
            
            </li>

            <li className="border-b pb-2">
          
            </li>

            
          

          </ul>
        </div>

        {/* Certifications */}
        <div className="shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div className=""><h3 className="text-xl font-semibold justify-center text-center  mb-4 flex items-center gap-2 ">
             <Award size={22} />
            Certifications
          </h3></div>

          <div className="flex flex-wrap gap-2 mt-2">
<ul className="space-y-3 text-gray-700 text-sm">
              <li className="border-b pb-2"></li>
             
             
            </ul>
</div>
          
        </div>

       
      
      </div>
   

    </section>
  )
}   