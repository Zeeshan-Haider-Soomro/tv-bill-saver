import CommonButton from "./CommonButton";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f4f0f9] to-[#f9f7f4] pt-16 px-6">
      <div className="max-w-7xl mx-auto py-15 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Lets Get Started</p>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Get in touch with Vireglow Inc. for IT solutions and marketing strategies tailored to your business.
          </p>
          <img
            src="/images/contact-team.jpg" // 🔁 Replace with actual image path
            alt="Team Discussion"
            className="rounded-[30px] shadow-md"
          />
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Contact Number</label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
         <CommonButton text="Submit →" link="/services" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
