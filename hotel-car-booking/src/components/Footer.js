import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About EasyStay</h3>
            <p className="text-gray-400">
              Your premier booking platform for luxury stays and car rentals in Kenya.
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 EasyStay. All rights reserved.</p>
          <p>Payment methods accepted: Mpesa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
