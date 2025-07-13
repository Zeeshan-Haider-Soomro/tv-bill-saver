import React, { useEffect, useRef } from "react";

const AutoScrollSlider = () => {
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);

  const startAutoScroll = () => {
    const slider = sliderRef.current;
    scrollInterval.current = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
      }
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();
    const slider = sliderRef.current;

    const pause = () => clearInterval(scrollInterval.current);
    const resume = () => setTimeout(startAutoScroll, 3000);

    slider.addEventListener("touchstart", pause);
    slider.addEventListener("touchend", resume);

    return () => {
      slider.removeEventListener("touchstart", pause);
      slider.removeEventListener("touchend", resume);
      clearInterval(scrollInterval.current);
    };
  }, []);

  const images = [
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Earthlink-1.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Frontier-1.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Spectrum-1.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Quantum.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Xfinity-1.svg",
  ];

  return (
    <div className="bg-[#121a2c]">
      <div className="slider-row">
        <div className="slider-images" ref={sliderRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} />
          ))}
        </div>
      </div>

      <style>{`
    .slider-row {
  
  width: 80%;
  padding: 20px 20px;
  background-color: white;
  margin: 0 auto; /* to center */
  border-radius: 10px;
}


        .slider-images {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          gap: 20px;
          padding: 10px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .slider-images::-webkit-scrollbar {
          display: none;
        }

        .slider-images img {
          max-height: 100px;
          max-width: 150px;
          height: auto;
          width: auto;
          flex-shrink: 0;
          scroll-snap-align: center;
          object-fit: contain;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .slider-images img {
            max-width: 80%;
            max-height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default AutoScrollSlider;
