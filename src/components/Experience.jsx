function Experience() {
  return (
     <section id="experience" className="min-h-screen  text-blue-900 flex flex-col justify-center items-center">
      <h2 className="text-blue-900 dark:text-white text-4xl font-bold mb-8">Experience</h2>
      {/* Expériences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-10">
        {/* Experience 1 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-blue-500"> Détection de Bugs Numériques via IA</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4"> Espace Dev UPVD • En cours </p>
            <p className="text-gray-600 leading-7"> Développement d’un prototype multi-agents basé sur des modèles de LLM afin d’identifier et analyser des bugs numériques. Travail autour de l’IA générative, l’analyse automatisée de code, la détection d’erreurs de calcul et l’optimisation d’outils d’automatisation.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"> IA Générative</span>
              <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"> LLM</span>
              <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"> Analyse de Code </span>
            </div>
          </div>
        {/* Experience 2 */}
        <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-blue-500"> Développement Web Fullstack</h3>
          <p className="text-sm text-gray-500 mb-4"> MTDS • Avril – Mai 2024</p>
          <p className="text-gray-600  leading-7"> Conception, développement fullstack et mise en ligne du site institutionnel mtds.com à partir d’une maquette graphique.
          Intégration responsive de l’interface utilisateur et développement des différentes pages du site.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs">HTML</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs">CSS</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs">JavaScript</span>
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"> Responsive Design</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience;
    