import { useState } from "react";
import CommonButton from "./CommonButton";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form sending delay
    setTimeout(() => {
      alert("Form submitted!");
      setIsSubmitting(false);
    }, 2000); // ⏱ simulate delay
  };

  return (
    <section className="bg-gradient-to-br from-[#f4f0f9] to-[#f9f7f4] pt-16 px-6">
      <div className="max-w-7xl mx-auto py-15 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side Content */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Let’s Get Started</p>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Get in touch with TV Bill Saver LLC for IT solutions and sales-driven marketing strategies tailored to your business.
          </p>
          <img
            src="/images/ChatGPT Image Jul 13, 2025, 01_28_09 AM.png"
            alt="Team Discussion"
            className="rounded-[30px] object-cover w-full h-95 shadow-md"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input type="text" required placeholder="Enter your first name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input type="text" required placeholder="Enter your last name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input type="email" required placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Contact Number</label>
              <input type="tel" required placeholder="Enter your contact number" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea rows="4" required placeholder="Enter your message" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
                     style={{
          backgroundImage: `url('/images/bgbutton.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
              className="w-full text-white font-semibold rounded-md px-6 py-3 flex items-center justify-center gap-2 transition disabled:opacity-60"
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {isSubmitting ? "Sending..." : "Submit →"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
