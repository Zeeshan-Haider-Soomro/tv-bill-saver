import CommonButton from "./CommonButton";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f2eefc] to-[#fbeee8] py-34 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Expand Your Business with Expert Sales & Telemarketing Solutions
        </h1>

        <p className="text-gray-700 text-base sm:text-lg mb-8 px-4 sm:px-0">
          TV Bill Saver LLC empowers small and medium-sized businesses to succeed through strategic sales and telemarketing solutions. From professional customer engagement to lead generation campaigns, we offer customized services that help your business grow. Whether you're building your client base or aiming to boost conversions, TV Bill Saver LLC is your trusted partner for sustainable business growth.
        </p>
        <CommonButton text="Get Started →" link="/services" />
      </div>
    </section>
  );
};

export default HeroSection;
