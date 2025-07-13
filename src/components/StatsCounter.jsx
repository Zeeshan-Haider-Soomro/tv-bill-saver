import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, label: "Average increase in sales", value: 50 },
  { id: 2, label: "Google & Facebook Certified", value: 83 },
  { id: 3, label: "On-Time Delivery Rate", value: 92 },
  { id: 4, label: "Leads generated so far...", value: 197000 },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-[#0000FF0D] rounded-4xl px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-md p-6 text-center transition hover:shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-600 underline underline-offset-4">
              {inView ? (
                <>
                  <CountUp end={stat.value} duration={3} separator="," />
                  {stat.id === 4 ? "+" : "%"}
                </>
              ) : (
                stat.id === 4 ? "0+" : "0%"
              )}
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-800">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
