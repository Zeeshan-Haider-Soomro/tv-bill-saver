import { Link } from "react-router";
import CommonButton from "./CommonButton";

const ServiceHighlight = () => {
  return (
    <section className="bg-gradient-to-br from-[#f5f5ff] to-[#fff2e6] px-6 py-16 rounded-xl">
      <div className="max-w-7xl mx-auto py-15 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Solutions that Drive <span className="text-blue-600">Business</span> Growth
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            VireGlow Inc delivers high-impact digital and IT services that bridge creativity with performance. 
            Our expert team combines strategic insight, technical precision, and creative execution to provide 
            customized solutions that help businesses thrive in the digital world. Whether you’re looking to 
            expand your online presence, improve customer experience, or optimize business operations, we deliver 
            the tools and talent to achieve measurable results.
          </p>

       <CommonButton text="View All Solutions →" link="/services" />
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/images/vireglow-monitor.png" // replace with your actual image path
            alt="VireGlow monitor"
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
