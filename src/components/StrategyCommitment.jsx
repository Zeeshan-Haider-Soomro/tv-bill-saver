import { Link } from "react-router";

const StrategyCommitment = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="/images/vireglow-committed.png" // replace with actual image path
            alt="VireGlow Strategy"
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            We are <span className="text-blue-600">committed</span> to your strategy
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            VireGlow Inc delivers high-impact digital and IT services that bridge creativity 
            with performance. Our expert team combines strategic insight, technical precision, 
            and creative execution to provide customized solutions that help businesses thrive 
            in the digital world. Whether you’re looking to expand your online presence, improve 
            customer experience, or optimize business operations, we deliver the tools and talent 
            to achieve measurable results.
          </p>

          <Link to="/services">
            <button
              className="text-white px-6 py-2 rounded-full font-medium transition hover:opacity-90"
              style={{
                backgroundImage: `linear-gradient(to right, #1a237e, #d500f9)`,
              }}
            >
              View All Solutions →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrategyCommitment;
