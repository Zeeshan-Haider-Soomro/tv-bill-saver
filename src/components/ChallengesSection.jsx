import { FaTools, FaWordpress, FaChartLine, FaUsers } from "react-icons/fa";

const challenges = [
  {
    title: "Facing These Challenges?",
    description: "If your online presence is weak or your growth has stalled.",
    icon: <FaTools className="text-3xl" />,
    highlight: true,
  },
  {
    title: "Fix Your Website",
    description: "If your website is slow, outdated, or failing to convert visitors.",
    icon: <FaWordpress className="text-3xl" />,
  },
  {
    title: "Rank on Google",
    description: "Not appear in search results or seeing a drop in organic traffic?",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Fix Low Engagement",
    description: "Struggle to connect with audience or a loyal following?",
    icon: <FaUsers className="text-3xl" />,
  },
];

const ChallengesSection = () => {
  return (
    <section className="bg-white pt-16 px-4 md:rounded-t-[90px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {challenges.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 text-center transition-all duration-300 border shadow-md ${
              item.highlight
                ? "bg-[#3b6eb1] text-white"
                : "bg-white text-gray-800 hover:bg-[#3b6eb1] hover:text-white hover:border-white"
            }`}
          >
            <div className="mb-4 text-4xl mx-auto">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
