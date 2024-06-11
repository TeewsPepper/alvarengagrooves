import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTopButton) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="scroll-btn text-white p-2 shadow-lg"
    >
      Ir al inicio
    </button>
  );
};

export default ScrollToTopButton;
