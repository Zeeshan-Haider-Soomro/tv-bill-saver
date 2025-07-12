import CommonButton from "./CommonButton";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f2eefc] to-[#fbeee8] py-34 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Boost Your Online Presence with Our Digital <br />
          Marketing & IT Services
        </h1>

        <p className="text-gray-700 text-base sm:text-lg mb-8 px-4 sm:px-0">
          VireGlow Inc empowers small and medium-sized businesses to thrive in the digital age.
          From reliable IT support to results-driven marketing campaigns, we provide tailored
          solutions to help your business scale online. Whether you're just starting out or looking
          to expand your reach, VireGlow Inc is your strategic growth partner.
        </p>
        <CommonButton text="Get Started →" link="/services" />
      </div>
    </section>
  );
};

export default HeroSection;
