import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollPercent(scrolled);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 22;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
         style={{
          backgroundImage: `url('/images/bgbutton.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      className="fixed bottom-6 right-6 z-50 p-0 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg className="absolute w-14 h-14 rotate-[-90deg]">
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="28"
          cy="28"
        />
      </svg>
      <FaArrowUp className="text-white text-lg z-10" />
    </button>
  );
};

export default ScrollToTopButton;
