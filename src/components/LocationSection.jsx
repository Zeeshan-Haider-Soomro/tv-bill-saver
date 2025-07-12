
const LocationSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f4f0f9] to-[#f9f7f4] md:py-16 px-6">
      <div className="max-w-6xl py-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-600">Our</span> Location
          </h2>
          <p className="text-gray-700 mb-6">
            Reach out to Vireglow Inc for expert IT solutions and marketing strategies tailored to your business needs in the digital landscape.
          </p>
          <div className="mb-4">
            <p className="font-semibold">Location</p>
            <p className="text-gray-700">201 W 93RD ST 9D New York, NY 10025 - 7420</p>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="text-gray-700">9 AM - 5 PM</p>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div>
          <iframe
            title="VireGlow Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.3621542673715!2d-77.34712952415857!3d38.66558107266525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65c464518fcf1%3A0xd7d07d0f2b382d1f!2s13041%20Thrift%20Ln%2C%20Woodbridge%2C%20VA%2022193%2C%20USA!5e0!3m2!1sen!2s!4v1720771367895"
            width="100%"
            height="300"
            className="rounded-2xl shadow-xl border-2 border-blue-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
