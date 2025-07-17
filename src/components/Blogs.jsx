const blogs = [
  {
    title: "Why Every Small Business Needs a Sales Support Strategy",
    description:
      "We build a foundation of clear communication and trust in everything we do. With our dedicated sales support solutions, you’ll always know how your leads are being managed and how your business is progressing — we keep you informed, empowered, and in control every step of the way.",
    image: "/images/ChatGPT Image Jul 12, 2025, 11_07_07 PM.png", // Replace with your image path
  },
  {
    title: "Why Every Small Business Needs a Telemarketing Support Plan",
    description:
      "Direct communication drives results. With dedicated telemarketing support, your business can engage leads in real-time, build strong customer relationships, and close more deals. We prioritize transparency and collaboration—keeping you informed every step of the way as we represent your brand with professionalism and precision.",
    image: "/images/ChatGPT Image Jul 13, 2025, 12_25_21 AM.png",
  },
  {
    title: "Why Every Small Business Needs a Digital Marketing Strategy",
    description:
      "In today’s fast-paced online world, visibility is everything. We create a transparent and collaborative environment where you’re always informed. With our strategic digital marketing support, you’ll stay in control—watching your brand grow with clear insights, real results, and campaigns that truly connect.",
    image: "/images/ChatGPT Image Jul 13, 2025, 12_31_15 AM.png",
  },
];

const Blogs = () => {
  return (
    <section className="py-6 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Think further with our <span className="text-blue-600">expert</span> insights
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer rounded-3xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <h3 className="text-md font-semibold mb-3">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-2xl mt-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
