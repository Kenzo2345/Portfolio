export default function Projects() {
  return (
    <section id="projects" className="min-h-screen  text-blue-900 flex flex-col justify-center items-center">
      <h2 className="text-blue-900 dark:text-white text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Blockchain Rétractable</h3>
            <p className="text-gray-600 mb-4"> Étude et modélisation d’une blockchain rétractable basée sur des fonctions de hachage caméléon avec analyse sécurité, décentralisation et conformité RGPD.</p>
            <p className="text-sm text-blue-400"> Cryptographie • Blockchain • Python</p>
          </div>
          {/* Project 2 */}
          <div className="bg-gradient-to-br from-white to-blue-100   dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">GAN – Visages Synthétiques</h3>
            <p className="text-gray-600 mb-4"> Conception et entraînement d’un GAN sur CelebA pour générer des visages réalistes avec optimisation de l’entraînement et analyse des résultats. </p>
            <p className="text-sm text-blue-400"> Python • TensorFlow • NumPy</p>
          </div>
          {/* Project 3 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Simulation 3D OpenGL</h3>
            <p className="text-gray-600 mb-4"> Développement d’une scène 3D temps réel avec lumières dynamiques, textures, normal mapping et optimisation des performances.</p>
            <p className="text-sm text-blue-400"> C++ • OpenGL • GLSL</p>
          </div>
          {/* Project 4 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Sécurité Web – DVWA</h3>
            <p className="text-gray-600 mb-4"> Analyse et exploitation contrôlée de vulnérabilités XSS, SQL Injection et CSRF dans un environnement sécurisé DVWA.</p>
            <p className="text-sm text-blue-400"> DVWA • PHP • SQL • Cybersécurité </p>
          </div>
          {/* Project 5 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Simulations Multi-Agents</h3>
            <p className="text-gray-600 mb-4"> Développement d’un modèle SEIR parallèle avec MPI pour accélérer les simulations stochastiques et générer automatiquement les visualisations.</p>
            <p className="text-sm text-blue-400"> C • MPI • Python • Matplotlib</p>
          </div>
          {/* Project 6 */}
          <div className="bg-gradient-to-br from-white to-blue-100 dark:bg-[#1e293b] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500"> Systèmes Dynamiques Chaotiques</h3>
            <p className="text-gray-600 mb-4"> Simulation numérique avec solveur RK4 et modèle Deep Learning pour prédire l’évolution de trajectoires chaotiques.</p>
            <p className="text-sm text-blue-400"> Python • TensorFlow • SciPy </p>
          </div>
        </div>
    </section>
    )
}
