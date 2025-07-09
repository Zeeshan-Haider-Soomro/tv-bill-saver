import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">Infinity X Dynamics</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/contact-us" className="hover:text-blue-600 transition">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
