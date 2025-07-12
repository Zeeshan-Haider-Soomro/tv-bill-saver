const SectionDivider = () => {
  return (
    <div className="relative w-full h-24 bg-white">
      {/* SVG curve line */}
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
      >
        <path
          d="M0,50 C400,0 800,100 1200,50"
          fill="transparent"
          stroke="#d4d4d4"
          strokeWidth="2"
        />
      </svg>

      {/* Centered text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[15%] bg-white px-4 text-gray-700 font-medium">
        Blogs
      </div>
    </div>
  );
};

export default SectionDivider;
