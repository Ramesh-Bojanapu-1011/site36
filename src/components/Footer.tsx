import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700  ">
      <div className="  mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-3">
            <img
              src="/Logo-fav-icon.png"
              alt="LawFirmPro Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="font-bold text-xl text-blue-900 dark:text-blue-200">
              LawFirmPro
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Professional legal solutions for individuals and businesses. Trusted
            advisors for all your law needs.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Corporate Law
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Litigation & Dispute Resolution
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Intellectual Property
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Real Estate Law
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Family Law
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                Employment Law
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-blue-700 dark:hover:text-blue-300"
              >
                +1 234 567 890
              </a>
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@lawfirmpro.com"
                className="hover:text-blue-700 dark:hover:text-blue-300"
              >
                info@lawfirmpro.com
              </a>
            </li>
            <li>
              <span className="font-medium">Address:</span> 123 Legal Ave, Suite
              100, City, Country
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-100 dark:border-gray-800">
        © {new Date().getFullYear()} LawFirmPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
