import CommonButton from "./CommonButton";

const ServiceHighlight = () => {
  return (
    <section className="bg-gradient-to-br from-[#f5f5ff] to-[#fff2e6] px-6 py-16 rounded-xl">
      <div className="max-w-7xl mx-auto py-15 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Revenue-Driven<span className="text-blue-600">Sales & Telemarketing</span> Solutions
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            TV Bill Saver LLC delivers high-impact sales, customer support, and telemarketing solutions that merge strategy with results. Our team blends industry insight, process efficiency, and proven sales techniques to help businesses grow fast. From boosting customer engagement to driving qualified leads and improving client retention, we offer scalable solutions built for measurable impact.
          </p>

       <CommonButton text="View All Solutions →" link="/services" />
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/images/ChatGPT Image Jul 13, 2025, 01_15_03 AM.png" // replace with your actual image path
            alt="VireGlow monitor"
            className="w-full h-100 rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
