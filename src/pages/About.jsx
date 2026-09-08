import { Award, GraduationCap, Handshake, FileText  } from "lucide-react"
export default function About() {
  return (
    <section id="about" className="min-h-screen text-white flex flex-col justify-center items-center px-10 py-20">
      <h2 className="text-blue-900 text-4xl font-bold mb-6 dark:text-white">À propos</h2>
      {/* Bloc présentation */}
      <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-white/80 max-w-5xl mx-auto shadow-xl rounded-3xl p-8 md:p-10 text-center leading-relaxed text-gray-700 space-y-6">
        <p className="mt-8  text-gray-700 flex flex-wrap justify-center gap-6">
          Étudiante en Master 2 Informatique spécialisée en calcul haute performance, intelligence artificielle et simulation numérique. Compétences en Python, C/C++, MPI, TensorFlow, traitement de données, calcul parallèle et modélisation scientifique.
        </p>
        <p className="mt-4 text-gray-700 flex flex-wrap justify-center gap-6">
          Recherche d'un stage de 6 mois à partir de février 2027 en IA, Data Science ou HPC.
        </p>
      </div>

      <div data-aos="fade-up" id="formations"className="flex justify-center text-gray-700 mt-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Formations */}
        <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-white/80 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[350px]">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-white to-blue-100 text-xs px-5 py-2 rounded-full font-medium shadow-sm transition dark:from-[#0f172a] dark:to-[#1e3a8a]">
              <h3 className="text-xl font-semibold flex items-center justify-center gap-2 text-center dark:text-white"> <GraduationCap size={22} className="text-blue-500" />Formations</h3>
            </div>
          </div>
          {/* Content */}
          <ul className="space-y-5 text-sm ">
            {/* Master CHPS */}
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-gray-900e"> Master Calcul Haute Performance & Simulation</h4>
              <p className="text-blue-500 font-medium">Université Perpignan Via Domitia | 2025 – Aujourd’hui
              </p>
              <p className="text-gray-700 font-semibold mt-2">Major de promotion (M1)</p>
              <p className="text-gray-600 mt-2">
                MPI, Architectures et modèles de calcul, Optimisation des performances, Modélisation numérique, Simulation, Programmation C & Python.</p>
            </li>
            {/* Master Limoges */}
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-gray-900"> Master Informatique – Synthèse Image & Conception Graphique
              </h4>
              <p className="text-blue-500 font-medium"> Université de Limoges | 2024 – 2025</p>
              <p className="text-gray-600 mt-2">
                IA, Vision par ordinateur, Traitement d’images, Statistique des données, Optimisation combinatoire, Bases de données avancées, GPGPU.</p>
            </li>
            {/* Licence */}
            <li>
              <h4 className="font-semibold text-gray-900"> Licence en Informatique – Mention Assez Bien</h4>
              <p className="text-blue-500 font-medium">  Université de Limoges | 2021 – 2024</p>
              <p className="text-gray-600 mt-2">
                IA, Développement mobile, Systèmes d’exploitation, Sécurité informatique, Théorie des graphes, Théorie des jeux, Génie logiciel.</p>
            </li>
          </ul>
          <a
            href="/RN_kenza-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-blue-500 hover:text-blue-700 transition"
          >
            <FileText size={14} />
            Relevé de notes (PDF)
          </a>
        </div>
       {/* Certifications */}
        <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
        {/* Title */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-white to-blue-100 dark:from-[#0f172a] dark:to-[#1e3a8a] px-5 py-2 rounded-full shadow-sm">
              <h3 className="text-xl font-semibold flex items-center justify-center gap-2 text-center text-gray-900 dark:text-white"><Award size={22} className="text-blue-500" />Certifications
              </h3>
            </div>
          </div>
          {/* Content */}
          <ul className="space-y-5 text-sm">
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-gray-900 ">PCEP – Python Institute</h4>
              <p className="text-gray-600 mt-2"> Certification officielle validant les bases du langage Python et préparation à la certification PCAP.</p>
            </li>
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4"> 
              <h4 className="font-semibold text-gray-900 "> Python Essentials – Cisco</h4>
              <p className="text-gray-600  mt-2"> Concepts fondamentaux du langage Python : syntaxe, variables, structures de données et fonctions.</p>
            </li>
            <li className="border-b border-gray-200 dark:border-gray-700 pb-4"> 
              <h4 className="font-semibold text-gray-900">  Machine Learning Crash Course – Google AI </h4>
              <p className="text-gray-600 mt-2"> Régression logistique, descente de gradient,
              régularisation et introduction à TensorFlow.</p>
            </li>
            <li>
              <h4 className="font-semibold text-gray-900"> SecNumAcadémie – ANSSI</h4>
              <p className="text-gray-600 mt-2"> Sécurité des systèmes d’information : authentification, sécurité Internet, sécurité des postes de travail et panorama SSI.
              </p>
            </li>
          </ul>
        </div>
      </div>
   

    </section>
  )
}   