export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Programming Languages
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Tools & Frameworks
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Teamwork</li>
            <li>Problem-solving</li>
            <li>Communication</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  )
}