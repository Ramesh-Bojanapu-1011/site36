import React from "react";
import { useLang } from "./LangContext";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const { t } = useLang();
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
            {t("footer_about")}
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            {t("quick_links")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/home1"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("home")}1
              </Link>
            </li>
            <li>
              <Link
                href="/home2"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("home")}2
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            {t("services")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/corporate-law"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("corporate_law")}
              </Link>
            </li>
            <li>
              <Link
                href="/litigation-dispute-resolution"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("litigation")}
              </Link>
            </li>
            <li>
              <Link
                href="/intellectual-property"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("intellectual_property")}
              </Link>
            </li>
            <li>
              <Link
                href="/real-estate-law"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("real_estate")}
              </Link>
            </li>
            <li>
              <Link
                href="/family-law"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("family_law")}
              </Link>
            </li>
            <li>
              <Link
                href="/employment-law"
                className="hover:text-blue-700 dark:hover:text-blue-300 text-gray-600 dark:text-gray-300"
              >
                {t("employment_law")}
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
            {t("contact")}
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <span className="font-medium">{t("phone")}</span>{" "}
              <Link
                href="tel:+1234567890"
                className="hover:text-blue-700 dark:hover:text-blue-300"
              >
                +1 234 567 890
              </Link>
            </li>
            <li>
              <span className="font-medium">{t("email")}</span>{" "}
              <Link
                href="mailto:info@lawfirmpro.com"
                className="hover:text-blue-700 dark:hover:text-blue-300"
              >
                info@lawfirmpro.com
              </Link>
            </li>
            <li>
              <span className="font-medium">{t("address")}</span> 123 Legal Ave,
              Suite 100, City, Country
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-100 dark:border-gray-800">
        © {new Date().getFullYear()} LawFirmPro. {t("all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
