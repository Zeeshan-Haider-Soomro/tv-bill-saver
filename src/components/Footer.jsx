import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start space-y-2">
          <img src="/images/FooterLogo.png" alt="Logo" className="h-50" />
          {/* <span className="text-2xl font-signature text-[#0000FF] italic font-semibold">
            TvBill<span className="text-[#0000FF] font-bold">Saver</span>
          </span> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#0000FF]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#0000FF]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#0000FF]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#0000FF]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#0000FF]">
                Get a Proposal
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">OUR SERVICES</h3>
          <ul className="space-y-2">
            <li>Sales Support</li>
            <li>Customer Support</li>
            <li>Social Media Marketing</li>
            <li>Web Development</li>
            <li>PPC Advertising</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-bold mb-3">CONNECT WITH US</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <HiOutlinePhone className="text-[#0000FF]" />
              <span>+92 321 8456611</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineMail className="text-[#0000FF]" />
              <a
                href="mailto:contact@infinityxdynamics.com"
                className="hover:text-[#0000FF]"
              >
                contact@infinityxdynamics.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineLocationMarker className="text-[#0000FF]" />
              <span>Infinity X Dynamics, Karachi, Pakistan</span>
            </li>
          </ul>

          <div className="flex space-x-4 mt-5">
            <a
              href="#"
              className="text-[#0000FF] border border-[#0000FF] rounded-full p-2 hover:bg-[#0000FF] hover:text-white transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="text-[#0000FF] border border-[#0000FF] rounded-full p-2 hover:bg-[#0000FF] hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="text-[#0000FF] border border-[#0000FF] rounded-full p-2 hover:bg-[#0000FF] hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="text-[#0000FF] border border-[#0000FF] rounded-full p-2 hover:bg-[#0000FF] hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center border-t border-gray-200 py-4 text-md">
        © {new Date().getFullYear()} VireGlow Inc. All rights reserved ·
        <Link href="#" className="hover:text-[#0000FF] ml-1">
          Privacy Policy
        </Link>{" "}
        ·
        <Link href="#" className="hover:text-[#0000FF] ml-1">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
