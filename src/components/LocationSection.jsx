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
            Reach out to TV Bill Saver LLC for expert IT solutions and results-driven sales and telemarketing strategies — tailored to help your business grow in today’s digital landscape.
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
            title="TV Bill Saver LLC Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7691319154227!2d-73.9728698237759!3d40.793448971380094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25884e7baff6b%3A0x6f3090f2be967a61!2s201%20W%2093rd%20St%20%239D%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2sus!4v1720913404162"
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
