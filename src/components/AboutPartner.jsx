import CommonButton from "./CommonButton"; // Make sure this path is correct

const AboutPartner = () => {
  return (
    <section className="bg-white py-16 px-5 md:px-18">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Trusted  {" "}
            <span className="text-blue-600">Sales & Telemarketing</span> Partner
          </h2>
        </div>

        {/* Right Description */}
        <div className="flex-1">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            At TV Bill Saver LLC, we provide comprehensive sales and telemarketing solutions to help businesses grow, specializing in customer acquisition, lead generation, and performance-driven outreach strategies.
          </p>
          <CommonButton text="More About Us →" link="/about" />
        </div>
      </div>
    </section>
  );
};

export default AboutPartner;
