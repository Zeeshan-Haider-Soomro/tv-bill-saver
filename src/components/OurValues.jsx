import { FaPhoneAlt, FaBullhorn, FaChartLine } from 'react-icons/fa';

const values = [
  {
    title: "Sales Support",
    description:
      "At TV Bill Saver LLC, we offer comprehensive sales support solutions designed to increase conversions and customer engagement. Our expert team ensures every lead is handled with care, helping your business grow consistently and build long-term customer relationships.",
    icon: <FaPhoneAlt className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Telemarketing Support",
    description:
      "At TV Bill Saver LLC, we provide end-to-end telemarketing solutions tailored to engage prospects, drive sales, and strengthen customer relationships. Our trained agents deliver persuasive communication that converts leads into loyal customers — all while representing your brand with professionalism and impact.",
    icon: <FaBullhorn className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Digital Marketing Support",
    description:
      "At TV Bill Saver LLC, we offer comprehensive digital marketing solutions crafted to elevate your brand’s online presence and drive measurable growth. From strategic SEO and targeted advertising to social media management and content creation, our services are designed to attract, engage, and convert your ideal customers.",
    icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
  },
];

const OurValues = () => {
  return (
    <section className="bg-gradient-to-br from-[#f4f0f9] to-[#e3d3d2] py-16 px-4 md:rounded-t-[390px] rounded-t-[80px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-600">Values</span>
        </h2>

        {/* Top Card Centered */}
        <div className="flex justify-center mb-6">
          <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm text-center">
            <div className="flex justify-center">
              {values[0].icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{values[0].title}</h3>
            <p className="text-sm text-gray-700">{values[0].description}</p>
          </div>
        </div>

        {/* Bottom 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {values.slice(1).map((value, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer shadow-md rounded-xl p-6 w-full max-w-sm text-center"
            >
              <div className="flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
