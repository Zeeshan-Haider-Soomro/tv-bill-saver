const blogs = [
  {
    title: "Why Every Small Business Needs an SEO Plan",
    description:
      "We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.",
    image: "/images/blog-img.jpg", // Replace with your image path
  },
  {
    title: "Why Every Small Business Needs an SEO Plan",
    description:
      "We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.",
    image: "/images/blog-img.jpg",
  },
  {
    title: "Why Every Small Business Needs an SEO Plan",
    description:
      "We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.",
    image: "/images/blog-img.jpg",
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
            className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
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
