import { useState } from 'react';
import CommonButton from './CommonButton';

const tabs = [
  {
    id: 'transparency',
    title: 'Transparency',
    heading: '100% Campaign transparency',
    text:
      'We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.',
    image: '/images/ChatGPT Image Jul 13, 2025, 01_37_11 AM.png', // replace with your actual image path
  },
  {
    id: 'results',
    title: 'Results',
    heading: 'Guaranteed Results',
    text:
      'Our marketing strategies deliver measurable outcomes. With our data-driven approach and performance-based campaigns, your business will experience real growth and returns.',
    image: '/images/ChatGPT Image Jul 12, 2025, 07_19_36 PM.png',
  },
  {
    id: 'experts',
    title: 'Team Of Experts',
    heading: 'Dedicated Team of Experts',
    text:
      'Our team is composed of seasoned professionals who specialize in various aspects of digital marketing and IT services, ensuring your brand gets the best expertise available.',
    image: '/images/ChatGPT Image Jul 12, 2025, 10_58_12 PM.png',
  },
];

const WhyChooseTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="md:px-14 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="bg-[#f9f9f9] text-center p-6 rounded-3xl shadow-xl">
          <div className="flex justify-center gap-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab.id === tab.id ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {activeTab.heading}
          </h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {activeTab.text}
          </p>
          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-blue-600">Choose</span> Tv Bill Saver LLC. ?
          </h2>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
           TV Bill Saver LLC is a performance-driven sales and telemarketing company dedicated to helping businesses grow through targeted outreach and personalized customer engagement. We specialize in lead generation, customer retention, and 24/7 support services that foster strong client relationships and drive real conversions.
            <br /><br />
           At TV Bill Saver LLC, we combine strategic communication, proven sales techniques, and reliable technology to ensure your brand reaches the right audience—efficiently and effectively. Our mission is to deliver measurable results that scale your business and maximize ROI.
          </p>

<br />
        <CommonButton text="Learn More →" link="/services" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTabs;
