import { FaHeadset, FaHandsHelping, FaFacebookMessenger } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { BsBarChartLine } from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';

const services = [
  {
    title: "Sales Support",
    description:
      "TV Bill Saver LLC offers strategic sales support to boost your conversions and close more deals efficiently.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Customer Support",
    description:
      "Our 24/7 customer support ensures seamless service, improving satisfaction and customer loyalty.",
    icon: <FaHeadset />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage your audience and grow your online community with our data-driven social media campaigns.",
    icon: <FaFacebookMessenger />,
  },
  {
    title: "PPC Advertising",
    description:
      "Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.",
    icon: <BsBarChartLine />,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search rankings and visibility with our proven, white-hat SEO strategies.",
    icon: <AiOutlineLineChart />,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#fdf4ef]">
      {/* Background blur images */}
      <img
        src="/images/bg-blur-orange.png"
        alt="orange-blur"
        className="absolute bottom-[-200px] right-[-100px] w-[500px] opacity-50 blur-3xl z-0 pointer-events-none"
      />
      <img
        src="/images/bg-blur-blue.png"
        alt="blue-blur"
        className="absolute top-[-150px] left-[-100px] w-[500px] opacity-50 blur-3xl z-0 pointer-events-none"
      />
      <img
        src="/images/bg-blur-orange-2.png"
        alt="orange-blur-2"
        className="absolute top-[30%] right-[40%] w-[500px] opacity-50 blur-3xl z-0 pointer-events-none"
      />

      {/* Section content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-1">
          At TV Bill Saver LLC, we provide end-to-end sales and customer engagement solutions designed to elevate your brand’s reach and boost revenue.
        </p>
        <p className="text-gray-600 mb-10">Our services include:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-xl"
            >
              <div className="text-orange-500 text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
