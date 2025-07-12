import CommonButton from "./CommonButton";

const SmartMarketingSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f4f0f9] to-[#e3d3d2] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Left Section - Heading */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-700 mb-2">Marketing solutions Provider</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            We're a <span className="text-blue-600">Leader</span> in <br />
            Smart Digital <br />
            <span className="text-blue-600">Marketing</span> Solutions
          </h2>
        </div>

        {/* Right Section - Paragraph + CTA */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-800 mb-6 text-sm md:text-base">
            At VireGlow Inc, we don't just follow marketing trends — we set them.
            With years of hands-on experience, we understand that every digital channel
            offers its own strengths. But the real magic happens when they're combined
            with strategy, creativity, and performance-driven execution.
          </p>

         <CommonButton text="View All Solutions →" link="/services" />
        </div>
      </div>
    </section>
  );
};

export default SmartMarketingSection;
