import { useEffect, useState } from 'react';

const brands = [
   "https://theinternetproviders.com/wp-content/uploads/2024/09/Earthlink-1.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Frontier-1.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Spectrum-1.svg",
    "https://theinternetproviders.com/wp-content/uploads/2024/09/Quantum.svg",  
    "https://theinternetproviders.com/wp-content/uploads/2024/09/wind_logo.svg",
    "/images/Optimum.png",

];

const BrandsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="bg-white md:py-30 py-15 text-center">
      <h2 className="text-3xl md:text-4xl px-8 md:pb-5 font-semibold md:mb-15 mb-8">
        The best brands choose{' '}
        <span className="text-blue-600 font-bold">Tv Bill Saver LLC.</span>
      </h2>

      {/* Desktop: show all logos */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 items-center">
        {brands.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index}`} className="h-10 cursor-pointer hover:grayscale-0 transition" />
        ))}
      </div>

      {/* Mobile: show one logo at a time */}
      <div className="md:hidden flex justify-center">
        <img
          src={brands[activeIndex]}
          alt={`Brand ${activeIndex}`}
          className="h-10  transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default BrandsSlider;
