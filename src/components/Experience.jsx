function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20" id="experience">
      <h2 className="text-3xl font-bold mb-10 text-center">Expériences</h2>
      <div className="space-y-8">
        {/* Expérience 1 */}
        <div className="bg-[var(--card)] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Développeuse Web - Stage</h3>
          <p className="text-gray-400">Entreprise XYZ | Juin 2023 - Août 2023</p>
          <ul className="list-disc list-inside mt-4 text-gray-300">
            <li>Développement d’une application web en React pour la gestion de projets.</li>
            <li>Collaboration avec l’équipe de design pour créer une interface utilisateur intuitive.</li>
            <li>Optimisation des performances de l’application, réduisant les temps de chargement de 30%.</li>
          </ul>
        </div>

        {/* Expérience 2 */}
        <div className="bg-[var(--card)] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Assistante de Recherche en IA</h3>
          <p className="text-gray-400">Université ABC | Septembre 2022 - Mai 2023</p>
          <ul className="list-disc list-inside mt-4 text-gray-300">       

            <li>Conception et entraînement de modèles de machine learning pour la classification d’images.</li>



            <li>Publication d’un article dans une conférence internationale sur l’intelligence artificielle.</li>
          </ul>
        </div>

        {/* Expérience 3 */}
        <div className="bg-[var(--card)] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Développeuse de Logiciels - Projet Personnel</h3>
          <p className="text-gray-400">Janvier 2021 - Présent</p>
          <ul className="list-disc list-inside mt-4 text-gray-300">   
            <li>Création d’une application mobile pour la gestion des tâches en utilisant Flutter.</li>
            <li>Intégration d’une API de reconnaissance vocale pour permettre la saisie de tâches par la voix.</li>
            <li>Lancement de l’application sur le Play Store avec plus de 1 000 téléchargements en 3 mois.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
    