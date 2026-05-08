import {
  Code,
  Globe,
  Brain,
  Cpu,
  Users
} from "lucide-react";

export default function Skills() {

  const skills = [

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <Code size={22} className="text-blue-500" />
          Langages
        </div>
      ),

      items: [
        "Python",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "PHP",
        "SQL",
        "R",
      ]
    },

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <Globe size={22} className="text-blue-500" />
          Web
        </div>
      ),

      items: [
        "HTML/CSS",
        "WordPress",
        "Angular",
      ]
    },

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <Brain size={22} className="text-blue-500" />
          Data & IA
        </div>
      ),

      items: [
        "Pandas",
        "NumPy",
        "SciPy",
        "Matplotlib",
        "TensorFlow",
        "Scikit-learn",
        "Machine Learning",
        "Deep Learning",
        "Analyse Exploratoire",
        "GAN",
      ]
    },

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <Cpu size={22} className="text-blue-500" />
          HPC & Simulation
        </div>
      ),

      items: [
        "MPI",
        "OpenMP",
        "multiprocessing",
        "threading",
        "gprof",
        "perf",
        "GPU",
        "CUDA",
      ]
    },

    {
      category: (
        <div className="flex items-center gap-3 font-semibold">
          <Users size={22} className="text-blue-500" />
          Soft Skills
        </div>
      ),

      items: [
        "Esprit d’initiative",
        "Leadership",
        "Travail en équipe",
        "Communication",
        "Esprit d’analyse",
        "Rigueur & organisation",
      ]
    },

  ];

  return (
    <section
      data-aos="fade-up"
      id="skills"
      className="py-20 px-6"
    >

      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-center text-blue-900 dark:text-white mb-10"
      >
        Compétences
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {skills.map((section, index) => (

          <div
            key={index}
            className="
              bg-gradient-to-br
              from-white
              to-blue-100
              dark:bg-[#1e293b]

              border border-blue-100
              dark:border-gray-700

              shadow-md
              p-6
              rounded-2xl

              hover:shadow-xl
              hover:-translate-y-1

              transition duration-300
            "
          >

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5">
              {section.category}
            </h3>

            {/* Skills */}
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">

              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-500">•</span>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}