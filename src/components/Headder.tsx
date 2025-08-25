import React from "react";
import { ModeToggle } from "./theme/ModeToggle";
import { MenuIcon, X as XIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

const Headder = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [homeDropdown, setHomeDropdown] = React.useState(false);
  const [servicesDropdown, setServicesDropdown] = React.useState(false);
  const [desktopHomeDropdown, setDesktopHomeDropdown] = React.useState(false);
  const [desktopServicesDropdown, setDesktopServicesDropdown] =
    React.useState(false);

  const homeRef = React.useRef<HTMLLIElement>(null);
  const servicesRef = React.useRef<HTMLLIElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click (desktop)
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        desktopHomeDropdown &&
        homeRef.current &&
        !homeRef.current.contains(e.target as Node)
      ) {
        setDesktopHomeDropdown(false);
      }
      if (
        desktopServicesDropdown &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setDesktopServicesDropdown(false);
      }
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
        setHomeDropdown(false);
        setServicesDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [desktopHomeDropdown, desktopServicesDropdown, mobileMenuOpen]);

  return (
    <header className="  bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="flex  justify-between h-16">
        <div className="font-bold text-2xl text-blue-900 items-center flex dark:text-blue-200">
          LawFirmPro
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex justify-end items-center focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          title={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center list-none m-0 p-0">
          {/* Home with dropdown (click only) */}
          <li className="relative" ref={homeRef}>
            <button
              className="flex items-center gap-1 cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
              type="button"
              onClick={() => {
                setDesktopHomeDropdown((v) => !v);
                setDesktopServicesDropdown(false);
              }}
              aria-expanded={desktopHomeDropdown}
            >
              Home <span className="ml-1">▾</span>
            </button>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 py-2 transition-opacity duration-150 z-20 ${
                desktopHomeDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href={"/home1"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Home 1
              </Link>
              <Link
                href={"/home2"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Home 2
              </Link>
            </ul>
          </li>
          {/* About Us */}
          <li>
            <Link
              href={"/about-us"}
              className="cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
            >
              About Us
            </Link>
          </li>
          {/* Services with dropdown (click only) */}
          <li className="relative" ref={servicesRef}>
            <button
              className="flex items-center gap-1 cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
              type="button"
              onClick={() => {
                setDesktopServicesDropdown((v) => !v);
                setDesktopHomeDropdown(false);
              }}
              aria-expanded={desktopServicesDropdown}
            >
              Services <span className="ml-1">▾</span>
            </button>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-48 py-2 transition-opacity duration-150 z-20 ${
                desktopServicesDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href={"/corporate-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Corporate Law
              </Link>
              <Link
                href={"/litigation-dispute-resolution"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Litigation & Dispute Resolution
              </Link>
              <Link
                href={"/intellectual-property"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Intellectual Property
              </Link>
              <Link
                href={"/real-estate-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Real Estate Law
              </Link>
              <Link
                href={"/family-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Family Law
              </Link>
              <Link
                href={"/employment-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                Employment Law
              </Link>
            </ul>
          </li>
          {/* Blog */}
          <li>
            <Link
              href={"/blog"}
              className="cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
            >
              Blog
            </Link>
          </li>
          {/* Contact Us */}
          <li>
            <Link
              href={"/contact-us"}
              className="cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          {/* Theme Toggle (desktop only) */}
          <div className="  ">
            <ModeToggle />
          </div>
          {/* Profile Avatar (desktop only) */}
          <button
            className="ml-4 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 focus:outline-none hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300 transition"
            aria-label="Profile"
          >
            RB
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow transition-all duration-200 ${
          mobileMenuOpen ? "max-h-[600px] py-2" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4">
          {/* Home with dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
              onClick={() => {
                setHomeDropdown((v) => !v);
                setServicesDropdown(false);
              }}
              type="button"
              aria-expanded={homeDropdown}
            >
              Home <span>▾</span>
            </button>
            {homeDropdown && (
              <ul className="pl-4">
                <Link
                  href={"/home-1"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Home 1
                </Link>
                <Link
                  href={"/home-2"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Home 2
                </Link>
              </ul>
            )}
          </li>
          {/* About Us */}
          <li>
            <Link
              href={"/about-us"}
              className="w-full py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none flex"
            >
              About Us
            </Link>
          </li>
          {/* Services with dropdown */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
              onClick={() => {
                setServicesDropdown((v) => !v);
                setHomeDropdown(false);
              }}
              type="button"
              aria-expanded={servicesDropdown}
            >
              Services <span>▾</span>
            </button>
            {servicesDropdown && (
              <ul className="pl-4   ">
                <Link
                  href={"/corporate-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Corporate Law
                </Link>
                <Link
                  href={"/litigation-dispute-resolution"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Litigation & Dispute Resolution
                </Link>
                <Link
                  href={"/intellectual-property"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Intellectual Property
                </Link>
                <Link
                  href={"/real-estate-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Real Estate Law
                </Link>
                <Link
                  href={"/family-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Family Law
                </Link>
                <Link
                  href={"/employment-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  Employment Law
                </Link>
              </ul>
            )}
          </li>
          {/* Blog */}
          <li>
            <Link
              href={"/blog"}
              className="w-full py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none flex"
            >
              Blog
            </Link>
          </li>
          {/* Contact Us */}
          <li>
            <Link
              href={"/contact-us"}
              className="w-full py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none flex"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile Theme Toggle and Profile */}
        <div className="flex  items-center gap-3 mt-4 md:hidden">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 focus:outline-none hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300 transition"
            aria-label="Profile"
          >
            RB
          </button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Headder;
