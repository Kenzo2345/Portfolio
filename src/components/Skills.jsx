export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 transition-all duration-500">
      <h2 className="text-5xl font-bold mb-14 text-blue-900 dark:text-white">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Langages */}
        <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-5 text-blue-500">Langages</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "C",
              "C++",
              "Java",
              "JavaScript",
              "PHP",
              "SQL",
              "R",
            ].map((skill) => (
              <span
                key={skill} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Web */}
        <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-5 text-blue-500">Web</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML/CSS",
              "WordPress",
              "Angular",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Data & IA */}
        <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b]
        rounded-2xl p-8 shadow-lg hover:shadow-2xl
        hover:-translate-y-2 transition duration-300">

          <h3 className="text-2xl font-semibold mb-5 text-blue-500">
            Data & IA
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
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
              "Autoencodeurs",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-600 
                px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* HPC */}
        <div className="bg-white dark:bg-[#1e293b]
        rounded-2xl p-8 shadow-lg hover:shadow-2xl
        hover:-translate-y-2 transition duration-300">

          <h3 className="text-2xl font-semibold mb-5 text-blue-500">
            HPC & Simulation
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "MPI",
              "OpenMP",
              "multiprocessing",
              "threading",
              "gprof",
              "perf",
              "GPU",
              "CUDA",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-slate-100 dark:bg-slate-800
                text-slate-700 dark:text-slate-300
                px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="md:col-span-2 bg-white dark:bg-[#1e293b]
        rounded-2xl p-8 shadow-lg hover:shadow-2xl
        hover:-translate-y-2 transition duration-300">

          <h3 className="text-2xl font-semibold mb-5 text-blue-500">
            Soft Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Esprit d’initiative",
              "Leadership",
              "Travail en équipe",
              "Communication",
              "Esprit d’analyse",
              "Rigueur & organisation",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 dark:bg-blue-900/40
                text-blue-600 dark:text-blue-300
                px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}