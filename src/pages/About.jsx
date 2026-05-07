export default function About() {
  return (
    <section id="about" className="min-h-screen text-white flex flex-col justify-center items-center px-10 py-20">
      <h2 className="text-4xl font-bold mb-6">
        About Me
      </h2>
      {/* Bloc présentation */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-purple-100 shadow-xl rounded-3xl p-8 md:p-10 text-center leading-relaxed text-gray-700 space-y-6">
     <p className="text-lg text-gray-400 max-w-3xl text-center">
        I am a passionate software engineer with a strong background in AI, HPC, and simulation. I have experience working on a variety of projects, from developing machine learning models to optimizing high-performance computing applications. I am always eager to learn new technologies and take on challenging problems.
      </p>
      </div>
     

      <div data-aos="fade-up" id="formations"className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Formations */}

      </div>
   

    </section>
  )
}   