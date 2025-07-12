
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
            Digital marketing{" "}
            <span className="text-blue-600">solutions</span> designed to
            generate revenue for your{" "}
            <span className="text-blue-600">business</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At VireGlow Inc., we deliver end-to-end digital growth solutions
            combining innovative marketing with dedicated support. Our expert
            team crafts custom SEO strategies, manages high-converting PPC
            campaigns, and builds performance-driven websites – all while
            optimizing your sales funnel and providing 24/7 customer support.
            From first click to final sale, we power your business growth with
            data-driven strategies and white-glove service tailored to your
            unique needs.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/images/vireglow-man.png" // Replace with your image path
            alt="About Us - VireGlow"
            className="rounded-[30px] shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
