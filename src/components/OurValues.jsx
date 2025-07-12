
const values = [
  {
    title: "Sales Support",
    description:
      "At Vireglow Inc., we provide end-to-end digital marketing solutions designed to enhance and grow your brand’s online visibility. Our services include:",
    icon: "/icons/headset-icon.png",
  },
  {
    title: "Sales Support",
    description:
      "At Vireglow Inc., we provide end-to-end digital marketing solutions designed to enhance and grow your brand’s online visibility. Our services include:",
    icon: "/icons/headset-icon.png",
  },
  {
    title: "Sales Support",
    description:
      "At Vireglow Inc., we provide end-to-end digital marketing solutions designed to enhance and grow your brand’s online visibility. Our services include:",
    icon: "/icons/headset-icon.png",
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
            <img
              src={values[0].icon}
              alt={values[0].title}
              className="mx-auto w-14 h-14 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{values[0].title}</h3>
            <p className="text-sm text-gray-700">{values[0].description}</p>
          </div>
        </div>

        {/* Bottom 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {values.slice(1).map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm text-center"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="mx-auto w-14 h-14 mb-4"
              />
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
