
const Home = () => {
  return (
     <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">TvBillSaver</div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button className="quote-button">Request a Quote</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Boost Your Online Presence with Our Digital Marketing & IT Services</h1>
        <p>
          VireGlow Inc empowers small and medium-sized businesses to thrive in the digital age...
        </p>
        <button className="primary-button">Get Started →</button>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="challenge-card">Facing These Challenges?</div>
        <div className="challenge-card">Facing These Challenges?</div>
        <div className="challenge-card">Facing These Challenges?</div>
        <div className="challenge-card">Facing These Challenges?</div>
        <div className="challenge-card">Facing These Challenges?</div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>Your Partner in <span>Digital Growth</span></h2>
        <p>We provide comprehensive IT solutions...</p>
        <div className="about-cards">
          <div className="card">Skilled Professionals</div>
          <div className="card">All-Inclusive Solution</div>
          <div className="card">24/7 Availability</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h3>Data-driven, <span>customer-centric</span> digital services</h3>
        <button className="secondary-button">View All Services →</button>
        <div className="services-grid">
          <div className="service-card">Sales Support</div>
          <div className="service-card">Sales Support</div>
          <div className="service-card">Sales Support</div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h4>Why <span>Choose</span> VireGlow Inc?</h4>
        <p>100% Campaign Transparency, End-to-End Services, Skilled Experts...</p>
        <button className="primary-button">Learn More →</button>
      </section>

      {/* Trusted Brands Section */}
      <section className="trusted">
        <h5>The best brands choose <span>VireGlow Inc.</span></h5>
        <div className="brand-logos">
          <img src="/logo1.png" alt="Brand 1" />
          <img src="/logo2.png" alt="Brand 2" />
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="blogs">
        <h5>Think further with our <span>expert</span> insights</h5>
        <div className="blog-cards">
          <div className="blog-card">Why Every Small Business Needs an SEO Plan</div>
          <div className="blog-card">Why Every Small Business Needs an SEO Plan</div>
          <div className="blog-card">Why Every Small Business Needs an SEO Plan</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">50% Average increase in sales</div>
        <div className="stat">50% Average increase in sales</div>
        <div className="stat">50% Average increase in sales</div>
        <div className="stat">50% Average increase in sales</div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h6>QUICK LINKS</h6>
            <p>Home<br/>Customer Support<br/>Contact Us</p>
          </div>
          <div>
            <h6>OUR SERVICES</h6>
            <p>Sales Support<br/>SEO<br/>Social Media Marketing</p>
          </div>
          <div>
            <h6>CONNECT WITH US</h6>
            <p>📞 +92 321 3456781<br/>✉️ contact@tvbillsaver.com<br/>📍 Karachi, Pakistan</p>
          </div>
        </div>
        <div className="copyright">
          © 2025 VireGlow Inc. All rights reserved | Privacy Policy | Terms of Service
        </div>
      </footer>
    </div>
  )
}

export default Home