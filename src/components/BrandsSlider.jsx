import { useEffect, useState } from 'react';

const brands = [
  '/images/brand1.png',
  '/images/brand2.png',
  '/images/brand3.png',
  '/images/brand4.png',
  '/images/brand5.png',
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
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        The best brands choose{' '}
        <span className="text-blue-600 font-bold">VireGlow Inc.</span>
      </h2>

      {/* Desktop: show all logos */}
      <div className="hidden md:flex justify-center gap-12 items-center">
        {brands.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index}`} className="h-10 grayscale hover:grayscale-0 transition" />
        ))}
      </div>

      {/* Mobile: show one logo at a time */}
      <div className="md:hidden flex justify-center">
        <img
          src={brands[activeIndex]}
          alt={`Brand ${activeIndex}`}
          className="h-10 grayscale transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default BrandsSlider;
