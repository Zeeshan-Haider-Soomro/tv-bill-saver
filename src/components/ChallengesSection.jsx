import { FaPhoneAlt, FaBullhorn, FaChartBar, FaUserSlash } from "react-icons/fa";

const challenges = [
  {
    title: "Low Sales or Conversions",
    description: "If you're struggling to convert leads into paying customers despite traffic.",
    icon: <FaChartBar className="text-3xl" />,
    highlight: true,
  },
  {
    title: "No Qualified Leads",
    description: "You're getting traffic, but the leads are unqualified or not engaging.",
    icon: <FaPhoneAlt className="text-3xl" />,
  },
  {
    title: "Outdated Outreach Strategy",
    description: "Still relying on cold calls or email blasts that don't deliver real ROI?",
    icon: <FaBullhorn className="text-3xl" />,
  },
  {
    title: "Weak Brand Credibility",
    description: "Customers aren’t responding due to poor visibility, inconsistency, or lack of trust.",
    icon: <FaUserSlash className="text-3xl" />,
  },
];

const ChallengesSection = () => {
  return (
    <section className="bg-white pt-16 px-4 md:rounded-t-[90px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {challenges.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl cursor-pointer p-6 text-center transition-all duration-300 border shadow-md ${
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
