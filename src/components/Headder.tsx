import React, { use } from "react";
import { useLang } from "./LangContext";
import { ModeToggle } from "./theme/ModeToggle";
import { MenuIcon, X as XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

interface User {
  // Define user properties as needed, for example:
  lastname: string;
  firstName: string;
  email: string;
  registerTime: string;
  loginTime: string;
  logoutTime?: string;
}

const Headder = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [homeDropdown, setHomeDropdown] = React.useState(false);
  const [servicesDropdown, setServicesDropdown] = React.useState(false);
  const [desktopHomeDropdown, setDesktopHomeDropdown] = React.useState(false);
  const [desktopServicesDropdown, setDesktopServicesDropdown] =
    React.useState(false);
  const [desktopLangDropdown, setDesktopLangDropdown] = React.useState(false);
  const [langDropdown, setLangDropdown] = React.useState(false);
  const langRef = React.useRef<HTMLLIElement>(null);
  const homeRef = React.useRef<HTMLLIElement>(null);
  const servicesRef = React.useRef<HTMLLIElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  const { lang, setLang, t } = useLang();

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
        desktopLangDropdown &&
        langRef.current &&
        !langRef.current.contains(e.target as Node)
      ) {
        setDesktopLangDropdown(false);
      }
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
        setHomeDropdown(false);
        setServicesDropdown(false);
        setLangDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [
    desktopHomeDropdown,
    desktopServicesDropdown,
    desktopLangDropdown,
    mobileMenuOpen,
  ]);

  // Separate dropdown state for desktop and mobile
  const [desktopProfileDropdown, setDesktopProfileDropdown] =
    React.useState(false);
  const [mobileProfileDropdown, setMobileProfileDropdown] =
    React.useState(false);
  const desktopProfileRef = React.useRef<HTMLDivElement>(null);
  const mobileProfileRef = React.useRef<HTMLDivElement>(null);
  const [user, setUser] = React.useState<User | null>(null);

  // Close profile dropdown on outside click
  // Desktop profile dropdown close
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        desktopProfileDropdown &&
        desktopProfileRef.current &&
        !desktopProfileRef.current.contains(e.target as Node)
      ) {
        setDesktopProfileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [desktopProfileDropdown]);

  // Mobile profile dropdown close
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        mobileProfileDropdown &&
        mobileProfileRef.current &&
        !mobileProfileRef.current.contains(e.target as Node)
      ) {
        setMobileProfileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileProfileDropdown]);
  React.useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const userObj: User = JSON.parse(user);
      setUser(userObj);
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    if (user) {
      const logoutTime = new Date().toISOString();
      const updatedUser: User = { ...user, logoutTime };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("isAdmin");
      setDesktopProfileDropdown(false);
      setMobileProfileDropdown(false);
      setUser(null);
      window.location.replace("/auth");
    } else {
      window.location.replace("/auth");
    }
  };

  console.log("User", user);

  return (
    <header className="  bg-white dark:bg-gray-900 sticky top-0 z-50">
      <nav className="flex items-center  justify-between sm:px-6 lg:px-8 px-4 h-16">
        <div className="font-bold text-2xl text-blue-900 items-center flex dark:text-blue-200">
          <Image
            src="/logo-stackly.png"
            alt="LawFirmPro"
            width={100}
            height={100}
          />
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
          {/* Language Dropdown (desktop) */}
          <li className="relative" ref={langRef}>
            <button
              className="flex items-center gap-1 cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
              type="button"
              onClick={() => {
                setDesktopLangDropdown((v) => !v);
                setDesktopHomeDropdown(false);
                setDesktopServicesDropdown(false);
              }}
              aria-expanded={desktopLangDropdown}
            >
              {t("language")} <span className="ml-1">▾</span>
            </button>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 py-2 transition-opacity duration-150 z-20 flex flex-col ${
                desktopLangDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <button
                onClick={() => {
                  setLang("en");
                  setDesktopLangDropdown(false);
                }}
                className={`px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100 text-left${
                  lang === "en" ? " font-bold" : ""
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLang("ar");
                  setDesktopLangDropdown(false);
                }}
                className={`px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100 text-left${
                  lang === "ar" ? " font-bold" : ""
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => {
                  setLang("he");
                  setDesktopLangDropdown(false);
                }}
                className={`px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100 text-left${
                  lang === "he" ? " font-bold" : ""
                }`}
              >
                עברית
              </button>
            </ul>
          </li>
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
              {t("home")} <span className="ml-1">▾</span>
            </button>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 py-2 transition-opacity duration-150 z-20 flex flex-col ${
                desktopHomeDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href={"/home1"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("home1")}
              </Link>
              <Link
                href={"/home2"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("home2")}
              </Link>
            </ul>
          </li>
          {/* About Us */}
          <li>
            <Link
              href={"/about-us"}
              className="cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
            >
              {t("about")}
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
              {t("services")} <span className="ml-1">▾</span>
            </button>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-48 py-2 transition-opacity duration-150 z-20 flex flex-col ${
                desktopServicesDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href={"/services"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 border-b border-blue-100 dark:border-blue-900 cursor-pointer dark:text-gray-100"
              >
                {t("all_services")}
              </Link>
              <Link
                href={"/corporate-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("corporate_law")}
              </Link>
              <Link
                href={"/litigation-dispute-resolution"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("litigation")}
              </Link>
              <Link
                href={"/intellectual-property"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("intellectual_property")}
              </Link>
              <Link
                href={"/real-estate-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("real_estate")}
              </Link>
              <Link
                href={"/family-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("family_law")}
              </Link>
              <Link
                href={"/employment-law"}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100"
              >
                {t("employment_law")}
              </Link>
            </ul>
          </li>
          {/* Blog */}
          <li>
            <Link
              href={"/blog"}
              className="cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
            >
              {t("blog")}
            </Link>
          </li>
          {/* Contact Us */}
          <li>
            <Link
              href={"/contact-us"}
              className="cursor-pointer font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          {/* Theme Toggle (desktop only) */}
          <div className="  ">
            <ModeToggle />
          </div>
          {/* Profile Avatar with Dropdown (desktop only) */}
          <div className="ml-4 relative" ref={desktopProfileRef}>
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 focus:outline-none hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300 transition"
              aria-label="Profile"
              onClick={() => setDesktopProfileDropdown((v) => !v)}
            >
              {user?.firstName ? user.firstName[0].toUpperCase() : ""}
              {user?.lastname ? user.lastname[0].toUpperCase() : ""}
            </button>
            {/* Dropdown */}
            <ul
              className={` absolute  ${
                lang !== "en" ? "left-0" : "right-0"
              }       mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 py-2 transition-opacity duration-150 z-30 flex flex-col ${
                desktopProfileDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <button
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100 text-left w-full"
              >
                Logout
              </button>
            </ul>
          </div>
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
          {/* Language Dropdown (mobile) */}
          <li>
            <button
              className="w-full flex items-center justify-between py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none"
              onClick={() => {
                setLangDropdown((v) => !v);
                setHomeDropdown(false);
                setServicesDropdown(false);
              }}
              type="button"
              aria-expanded={langDropdown}
            >
              {t("language")} <span>▾</span>
            </button>
            {langDropdown && (
              <ul className="pl-4 flex flex-col">
                <button
                  onClick={() => {
                    setLang("en");
                    setLangDropdown(false);
                  }}
                  className={`py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100 text-left${
                    lang === "en" ? " font-bold" : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLang("ar");
                    setLangDropdown(false);
                  }}
                  className={`py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100 text-left${
                    lang === "ar" ? " font-bold" : ""
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => {
                    setLang("he");
                    setLangDropdown(false);
                  }}
                  className={`py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100 text-left${
                    lang === "he" ? " font-bold" : ""
                  }`}
                >
                  עברית
                </button>
              </ul>
            )}
          </li>
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
              {t("home")} <span>▾</span>
            </button>
            {homeDropdown && (
              <ul className="pl-4 flex flex-col">
                <Link
                  href={"/home1"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("home1")}
                </Link>
                <Link
                  href={"/home2"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("home2")}
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
              {t("about")}
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
              {t("services")} <span>▾</span>
            </button>
            {servicesDropdown && (
              <ul className="pl-4 flex flex-col">
                <Link
                  href={"/corporate-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("corporate_law")}
                </Link>
                <Link
                  href={"/litigation-dispute-resolution"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("litigation")}
                </Link>
                <Link
                  href={"/intellectual-property"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("intellectual_property")}
                </Link>
                <Link
                  href={"/real-estate-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("real_estate")}
                </Link>
                <Link
                  href={"/family-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("family_law")}
                </Link>
                <Link
                  href={"/employment-law"}
                  className="py-2 cursor-pointer hover:text-blue-900 dark:hover:text-blue-300 dark:text-gray-100"
                >
                  {t("employment_law")}
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
              {t("blog")}
            </Link>
          </li>
          {/* Contact Us */}
          <li>
            <Link
              href={"/contact-us"}
              className="w-full py-2 font-medium text-gray-800 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-300 focus:outline-none flex"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
        {/* Mobile Theme Toggle and Profile */}
        <div className="flex  items-center gap-3 mt-4 md:hidden">
          {/* Profile Avatar with Dropdown (mobile) */}
          <div className="relative" ref={mobileProfileRef}>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 focus:outline-none hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300 transition"
              aria-label="Profile"
              onClick={() => setMobileProfileDropdown((v) => !v)}
            >
              {user?.firstName ? user.firstName[0].toUpperCase() : ""}
              {user?.lastname ? user.lastname[0].toUpperCase() : ""}
            </button>
            {/* Dropdown */}
            <ul
              className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 py-2 transition-opacity duration-150 z-30 flex flex-col ${
                mobileProfileDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <button
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-100 text-left w-full"
              >
                Logout
              </button>
            </ul>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Headder;
