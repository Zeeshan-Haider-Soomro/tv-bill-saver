import { FaHeadset } from 'react-icons/fa';

const challenges = [
  { id: 1, title: 'Facing These Challenges?', subtitle: 'If your online presence is weak or your growth has stalled.' },
  { id: 2, title: 'Facing These Challenges?', subtitle: 'If your online presence is weak or your growth has stalled.' },
  { id: 3, title: 'Facing These Challenges?', subtitle: 'If your online presence is weak or your growth has stalled.' },
  { id: 4, title: 'Facing These Challenges?', subtitle: 'If your online presence is weak or your growth has stalled.' },
  { id: 5, title: 'Facing These Challenges?', subtitle: 'If your online presence is weak or your growth has stalled.' },
];

const FacingChallenges = () => {
  return (
    <section className="bg-white py-16 px-4 md:rounded-t-[90px] rounded-t-[60px]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {challenges.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#e8e6fd] rounded-2xl shadow-md w-full max-w-sm p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-orange-400 text-4xl mb-4 flex justify-center">
                <FaHeadset />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Centered Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {challenges.slice(3).map((item) => (
            <div
              key={item.id}
              className="bg-[#e8e6fd] rounded-2xl shadow-md w-full max-w-sm p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-orange-400 text-4xl mb-4 flex justify-center">
                <FaHeadset />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacingChallenges;
