
const AboutUsSection = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto py-15 flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Sales and Telemarketing {" "}
            <span className="text-blue-600">Strategies </span> Engineered to
            drive real revenue for your{" "}
            <span className="text-blue-600">Business.</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At TV Bill Saver LLC, we deliver complete growth solutions that combine powerful telemarketing with strategic sales support. Our trained agents handle every lead with precision, converting interest into loyal customers through persuasive communication and performance-focused outreach. From lead generation to customer retention, we optimize every step of your sales funnel. Backed by real-time data insights and 24/7 support, our team ensures consistent revenue growth and unmatched service—tailored to your business goals.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/images/ChatGPT Image Jul 13, 2025, 01_01_43 AM.png" // Replace with your image path
            alt="About Us - VireGlow"
            className="rounded-[30px] shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
