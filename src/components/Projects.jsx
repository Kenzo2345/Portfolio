export default function Projects() {
  return (
    <section id="projects" className="min-h-screen  text-blue-900 flex flex-col justify-center items-center">
      <h2 className="text-blue-900 dark:text-white text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Blockchain Rétractable</h3>
            <p className="text-gray-600 mb-4"> Étude et modélisation d’une blockchain rétractable basée sur des fonctions de hachage caméléon avec analyse sécurité, décentralisation et conformité RGPD.</p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> Cryptographie </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> Blockchain </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">Python</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Prototype théorique d’une blockchain modifiable sécurisée</span></p>
          </div>
          {/* Project 2 */}
          <div className="bg-gradient-to-br from-white to-blue-100   dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">GAN – Visages Synthétiques</h3>
            <p className="text-gray-600 mb-4"> Conception et entraînement d’un GAN sur CelebA pour générer des visages réalistes avec optimisation de l’entraînement et analyse des résultats. </p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> Python  </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">  TensorFlow </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">NumPy</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Génération de visages synthétiques réalistes</span></p>
          </div>
          {/* Project 3 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Simulation 3D OpenGL</h3>
            <p className="text-gray-600 mb-4"> Développement d’une scène 3D temps réel avec lumières dynamiques, textures, normal mapping et optimisation des performances.</p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> C++ </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">OpenGL</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">GLSL</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Scène 3D interactive temps réel optimisée</span></p>
          </div>
          {/* Project 4 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Sécurité Web – DVWA</h3>
            <p className="text-gray-600 mb-4"> Analyse et exploitation contrôlée de vulnérabilités XSS, SQL Injection et CSRF dans un environnement sécurisé DVWA.</p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> DVWA</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> PHP</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">SQL</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">Cybersécurité </span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Identification et exploitation contrôlée de failles web majeures</span></p>
          </div>
          {/* Project 5 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Simulations Multi-Agents</h3>
            <p className="text-gray-600 mb-4"> Développement d’un modèle SEIR parallèle avec MPI pour accélérer les simulations stochastiques et générer automatiquement les visualisations.</p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> C</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">MPI</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">Python</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">Matplotlib</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Accélération des simulations et génération automatique des visualisations</span></p>
          </div>
          {/* Project 6 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Systèmes Dynamiques Chaotiques</h3>
            <p className="text-gray-600 mb-4"> Simulation numérique avec solveur RK4 et modèle Deep Learning pour prédire l’évolution de trajectoires chaotiques.</p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> Python  </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">  TensorFlow </span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> SciPy</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Prédiction de trajectoires complexes via Deep Learning</span></p>
          </div>
          {/* Project 7 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Portfolio Développeuse Full Stack</h3>
            <p className="text-gray-600 mb-4"> Conception et développement d’un portfolio moderne responsive avec React, Tailwind CSS et Vite intégrant mode sombre, navigation dynamique,animations interactives et déploiement sur Vercel.</p>
            <p className="flex flex-wrap gap-2"> 
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> React</span>
              <span className="bg-blue-100  text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> Tailwind CSS</span>
              <span className="bg-blue-100  text-blue-400 text-sm px-3 py-1 rounded-full font-medium"> Vite</span>
              <span className="bg-blue-100  text-blue-400 text-sm px-3 py-1 rounded-full font-medium">JavaScript</span>
              <span className="bg-blue-100 text-blue-400 text-sm px-3 py-1 rounded-full font-medium">Vercel</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-500">Résultat : <span className="text-green-500 font-bold">Portfolio responsive moderne déployé en ligne</span></p>
            <div className="mt-4 flex justify-center">
              <a href="https://github.com/Kenzo2345/Portfolio" target="_blank" rel="noopener noreferrer" className=" px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition duration-300 shadow-md hover:shadow-lg"> GitHub</a>
            </div>
            
          </div>
        </div>
    </section>
    )
}
