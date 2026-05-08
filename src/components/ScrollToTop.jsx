import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll automatique en haut lors du changement de page
useEffect(() => {
  // Scroll seulement si pas de hash (#about, #contact...)
  if (!window.location.hash) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [pathname]);

  // Afficher le bouton après scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Bouton manuel
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="bg-blue-500 fixed bottom-6 right-6 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-white"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}