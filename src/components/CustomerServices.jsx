import { FaHeadset } from 'react-icons/fa';
import CommonButton from './CommonButton';

const services = [
  "Sales Support",
  "Customer Support",
  "Social Media Marketing",
  "Web Development",
  "PPC Advertising",
  "SEO Optimization",
];

const CustomerServices = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-white">
      {/* 🔵 Background Decorations */}
      <img
        src="/images/bg-blur-orange.png"
        alt="orange"
        className="absolute bottom-[-200px] right-[-100px] w-[500px] opacity-70 blur-3xl z-0 pointer-events-none"
      />
      <img
        src="/images/bg-blur-blue.png"
        alt="blue"
        className="absolute top-[-150px] left-[-100px] w-[400px] sm:w-[500px] opacity-70 blur-3xl z-0 pointer-events-none"
      />
      <img
        src="/images/bg-blur-orange-2.png"
        alt="orange-2"
        className="absolute top-[30%] right-[40%] w-[400px] opacity-70 blur-3xl z-0 pointer-events-none"
      />

      {/* 🔠 Section Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-14">
        <p className="text-gray-600 text-sm mb-2">Our Capabilities</p>
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Data-driven,{" "}
          <span className="text-blue-600">customer-centric</span> digital
          services
        </h2>

        {/* 🔘 Button */}
        <br />
      <CommonButton text="View All Services →" link="/services" />
      </div>

      {/* 🟩 Service Cards */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition hover:shadow-2xl"
            >
              <div className="text-orange-500 text-4xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service}
              </h3>
              <p className="text-sm text-gray-600">
                At Vireglow Inc., we provide end-to-end digital marketing solutions
                designed to enhance and grow your brand’s online visibility.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerServices;
