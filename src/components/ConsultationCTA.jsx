import { Link } from "react-router";
import CommonButton from "./CommonButton";

const ConsultationCTA = () => {
  return (
    <section className="bg-gradient-to-t from-white to-[#f3edf7] py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 relative text-center">

        {/* Megaphone Icon Top Right */}
        <img
          src="/images/Speaker.png" // 🔁 Replace with actual path to megaphone image
          alt="megaphone"
          className="w-16 absolute -top-6 right-6 md:right-8"
        />

        {/* Google Partner Heading */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-4xl font-bold text-gray-600">G+</span>
          <h4 className="text-lg font-medium text-gray-800">Google Partner</h4>
        </div>

        {/* Main Call to Action */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Schedule Your Free {" "}
          <span className="text-blue-600">Strategy Session</span>
        </h2>

        {/* Button */}
     <CommonButton text="Get A Proposal →" link="/services"/>
      </div>
    </section>
  );
};

export default ConsultationCTA;
