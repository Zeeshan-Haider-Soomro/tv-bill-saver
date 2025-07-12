import { FaHeadset } from 'react-icons/fa';

const cards = [
  {
    title: 'Skilled Professionals',
    description:
      'Our certified professionals at Vireglow specialize in growth-focused digital marketing. From precision SEO to engaging social campaigns and converting content, we pair expertise with 24/7 support to ensure your business gets seen – and sold.',
  },
  {
    title: 'All-Inclusive Solution',
    description:
      'We offer complete solutions to elevate your brand including strategic planning, content creation, SEO, social media management, and paid advertising all tailored to your business goals.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_5px_10px_rgba(0,0,0,0.05)] p-6 text-center"
            >
              <div className="text-orange-400 text-3xl mb-4 flex justify-center">
                <FaHeadset />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Single Card Centered */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-[0_5px_10px_rgba(0,0,0,0.05)] p-6 text-center max-w-3xl w-full">
            <div className="text-orange-400 text-3xl mb-4 flex justify-center">
              <FaHeadset />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">24/7 Availability</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Vireglow Inc. helps businesses thrive in the digital space. Our experts boost your online
              visibility through strategic SEO and social media campaigns, while our sales optimization
              converts visitors into loyal customers. Backed by 24/7 dedicated support and data-driven insights,
              we provide end-to-end solutions that drive sustainable growth. Let us handle your digital
              transformation while you focus on what matters most — running your business successfully.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
