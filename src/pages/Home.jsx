  import { Code, Database, ShieldCheck, Layers, Monitor, Hand, Download, FileText, GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="flex flex-col justify-center items-center px-3 py-10 ">
      <div className=" p-10 rounded-3xl shadow-lg max-w-4xl w-full animate-fadeIn">
        <div className="flex flex-col items-center">
          <Hand size={65} className=" animate-bounce mb-2" />
          <h1 className="md:text-6xl font-bold">Bonjour, je suis<span > TAIBI Kenza</span> </h1>
        
        </div>
        
        <div className="mt-8 flex justify-center">
          <a href="/TAIBI KENZA_CV.pdf"
            download className="group inline-flex items-center gap-2  px-6 py-3 rounded-xl shadow-md border border-transparent hover:bg-white   hover:scale-105 transition">
            <FileText size={18} className="animate-bounce  transition"/>Télécharger mon CV
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <a href="https://github.com/TaibiZineb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border   px-6 py-3 rounded-xl transition group">
          <GithubIcon size={20} className=" transition"/> GitHub</a>
        </div>
       
      </div>
    </section>
  );
}