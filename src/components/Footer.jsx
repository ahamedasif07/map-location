import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Hotel<span className="text-blue-500">Finder</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Find the best hotels, compare prices, and explore locations with
              our interactive map experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Hotels</li>
              <li className="hover:text-white cursor-pointer">Map View</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +880 1234 567890
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@hotelfinder.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
                <Instagram size={18} />
              </a>
              <a className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
                <Twitter size={18} />
              </a>
              <a className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} HotelFinder. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
