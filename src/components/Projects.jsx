export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h2 className="dark:text-white text-4xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">
        {/* Project 1 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">
            AI Research Project
          </h3>
          <p className="text-gray-400 mb-4">
            Conducted research on deep learning algorithms for natural language processing, resulting in a publication in a top-tier conference.
          </p>
          <a href="#" className="text-blue-400 hover:underline">
            View Project
          </a>
        </div>              
        {/* Project 2 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">
            HPC Simulation
          </h3>

            <p className="text-gray-400 mb-4">      


                Developed a high-performance computing simulation for fluid dynamics, achieving a 10x speedup compared to traditional methods.



            </p>
          <a href="#" className="text-blue-400 hover:underline">
            View Project
          </a>
        </div>          
        {/* Project 3 */}

        <div className="bg-gray-800 rounded-lg p-6">

            <h3 className="text-2xl font-semibold mb-4">

                Software Engineering Project
                
            </h3>
            <p className="text-gray-400 mb-4">
                
                Led the development of a web application for data visualization, utilizing React and D3.js to create interactive dashboards for users.

            </p>
            <a href="#" className="text-blue-400 hover:underline">
                View Project
            </a>
        </div>
        </div>
    </section>
    )
}
