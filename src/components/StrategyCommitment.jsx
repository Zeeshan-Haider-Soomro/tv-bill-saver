import { Link } from "react-router";
import CommonButton from "./CommonButton";

const StrategyCommitment = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="/images/ChatGPT Image Jul 13, 2025, 01_18_34 AM.png" // replace with actual image path
            alt="VireGlow Strategy"
            className="w-full h-130 rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Where your  <span className="text-blue-600">Strategy </span> meets dedicated action.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          TV Bill Saver LLC delivers high-impact sales and telemarketing services that blend performance with personalized customer engagement. Our expert team combines strategic outreach, data-driven insights, and human-centric communication to help businesses increase conversions, improve client retention, and scale operations efficiently. Whether you're aiming to boost sales, streamline support, or maximize campaign ROI, we provide the tools, team, and tactics to drive measurable business growth.
          </p>

 <CommonButton text="View All Solutions →" link="/services" />
        </div>
      </div>
    </section>
  );
};

export default StrategyCommitment;
