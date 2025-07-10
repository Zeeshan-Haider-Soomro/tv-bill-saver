import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 m-5 z-50 bg-white shadow-[0_4px_20px_rgba(255,165,0,0.4),0_4px_30px_rgba(0,0,255,0.3)] rounded-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-50 h-1">
            <Link to="/">
              <img src="/images/Logo.png" alt="Logo" className="absolute -top-18 h-36 w-36" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
            {["/", "/about", "/services", "/contact-us"].map((path, i) => {
              const names = ["Home", "About", "Services", "Contact Us"];
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative group hover:text-[#FFA500] transition"
                >
                  {names[i]}
                  <span className="absolute left-1/2 bottom-[-4px] w-0 h-1 rounded-full bg-gradient-to-r from-[#0000FF] to-[#FFA500] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Hidden on small screens */}
          <div className="hidden md:block">
            <button
              className="text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer"
              style={{
                backgroundImage: `url('/images/bgbutton.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Request A Quote
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-3xl text-[#0000FF]"
            onClick={() => setIsOpen(true)}
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-600">
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center p-5 space-y-4 text-gray-700 font-medium">
          {["/", "/about", "/services", "/contact-us"].map((path, i) => {
            const names = ["Home", "About", "Services", "Contact Us"];
            return (
              <Link
                key={path}
                to={path}
                className="hover:text-[#FFA500] transition"
                onClick={() => setIsOpen(false)}
              >
                {names[i]}
              </Link>
            );
          })}

          <button
            className="mt-6 text-white font-semibold px-4 py-2 rounded-full cursor-pointer"
            style={{
              backgroundImage: `url('/images/bgbutton.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => setIsOpen(false)}
          >
            Request A Quote
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
