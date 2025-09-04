import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import React from "react";
import { useLang } from "@/components/LangContext";

const FamilyLaw = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{t("familyLaw.title")}</title>
        <meta name="description" content={t("familyLaw.metaDescription")} />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <Headder />

        {/* Hero Section with Background Video */}
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/family-law-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("familyLaw.heroTitle")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              {t("familyLaw.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: What We Offer */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-12 text-center">
            {t("familyLaw.ourServices")}
          </h2>
          <div className="relative">
            <div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 dark:bg-blue-800 rounded-full -z-10"
              style={{ transform: "translateY(-50%)" }}
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-700 dark:text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M16 3v4M8 3v4" />
                    </svg>
                  ),
                  title: t("familyLaw.services.0.title"),
                  desc: t("familyLaw.services.0.desc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-700 dark:text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    </svg>
                  ),
                  title: t("familyLaw.services.1.title"),
                  desc: t("familyLaw.services.1.desc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-700 dark:text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M17 8a5 5 0 0 1-10 0" />
                      <path d="M12 13v7" />
                      <path d="M9 20h6" />
                      <path d="M7 8V6a5 5 0 0 1 10 0v2" />
                    </svg>
                  ),
                  title: t("familyLaw.services.2.title"),
                  desc: t("familyLaw.services.2.desc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-700 dark:text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  ),
                  title: t("familyLaw.services.3.title"),
                  desc: t("familyLaw.services.3.desc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-700 dark:text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="3" y="7" width="18" height="13" rx="2" />
                      <path d="M16 3v4M8 3v4" />
                      <path d="M9 17v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                    </svg>
                  ),
                  title: t("familyLaw.services.4.title"),
                  desc: t("familyLaw.services.4.desc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-700 dark:text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2v20" />
                    </svg>
                  ),
                  title: t("familyLaw.services.5.title"),
                  desc: t("familyLaw.services.5.desc"),
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center text-center md:w-1/6 group"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-1 text-blue-800 dark:text-blue-100">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.desc}
                  </p>
                  {idx < 5 && (
                    <div
                      className="hidden md:block absolute right-0 top-1/2 w-full h-1 bg-blue-200 dark:bg-blue-800 -z-10"
                      style={{
                        left: "100%",
                        width: "calc(100% + 2rem)",
                        transform: "translateY(-50%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Family Law Clients Choose Us */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-14 text-center">
              {t("familyLaw.whyChooseTitle")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
              {/* Card 1 */}
              <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-2 border-blue-400 dark:border-blue-700 relative hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40 transition-all duration-300">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 via-blue-100 to-white dark:from-blue-900 dark:via-blue-800 dark:to-gray-900 border-4 border-blue-100 dark:border-blue-800 shadow-lg mb-6 -mt-16 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-xl tracking-wide">
                  {t("familyLaw.whyChoose.0.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center text-base">
                  {t("familyLaw.whyChoose.0.desc")}
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-2 border-blue-400 dark:border-blue-700 relative hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40 transition-all duration-300">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mb-6 -mt-16 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-xl tracking-wide">
                  {t("familyLaw.whyChoose.1.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center text-base">
                  {t("familyLaw.whyChoose.1.desc")}
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-2 border-blue-400 dark:border-blue-700 relative hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40 transition-all duration-300">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-gray-900 border-4 border-blue-100 dark:border-blue-800 shadow-lg mb-6 -mt-16 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-xl tracking-wide">
                  {t("familyLaw.whyChoose.2.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center text-base">
                  {t("familyLaw.whyChoose.2.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Case Studies / Success Stories */}
        <section className="mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-14 text-center">
            {t("familyLaw.successStoriesTitle")}
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-100 dark:bg-blue-800 rounded-full" />
            <div className="space-y-16 ml-12">
              {/* Testimonial 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center border-4 border-blue-100 dark:border-blue-800 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                    <path d="M4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1" />
                  </svg>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900 flex-1">
                  <p className="text-lg text-blue-900 dark:text-blue-100 mb-2 font-medium">
                    {t("familyLaw.successStories.0.quote")}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="w-10 h-10 rounded-full bg-blue-300 dark:bg-blue-800 flex items-center justify-center text-xl font-bold text-blue-900 dark:text-blue-100">
                      {t("familyLaw.successStories.0.initials")}
                    </span>
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">
                      {t("familyLaw.successStories.0.client")}
                    </span>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center border-4 border-blue-100 dark:border-blue-800 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                    <path d="M4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1" />
                  </svg>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900 flex-1">
                  <p className="text-lg text-blue-900 dark:text-blue-100 mb-2 font-medium">
                    {t("familyLaw.successStories.1.quote")}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="w-10 h-10 rounded-full bg-blue-300 dark:bg-blue-800 flex items-center justify-center text-xl font-bold text-blue-900 dark:text-blue-100">
                      {t("familyLaw.successStories.1.initials")}
                    </span>
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">
                      {t("familyLaw.successStories.1.client")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Our Family Law Process */}
        <section className="bg-blue-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-14 text-center">
              {t("familyLaw.processTitle")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
              {/* Step 1 */}
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800 relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("familyLaw.process.0.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("familyLaw.process.0.desc")}
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800 relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("familyLaw.process.1.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("familyLaw.process.1.desc")}
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800 relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 20h9" />
                    <path d="M12 4h9" />
                    <rect x="3" y="8" width="6" height="8" rx="1" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("familyLaw.process.2.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("familyLaw.process.2.desc")}
                </p>
              </div>
              {/* Step 4 */}
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800 relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700 dark:text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("familyLaw.process.3.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("familyLaw.process.3.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="relative max-w-3xl mx-auto py-20 px-4 flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 rounded-3xl shadow-2xl p-12 text-center flex flex-col items-center border-4 border-white dark:border-blue-900">
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
              {t("familyLaw.ctaTitle")}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg">
              {t("familyLaw.ctaDesc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-200 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition text-lg tracking-wide"
            >
              {t("familyLaw.ctaButton")}
            </a>
            <span className="mt-6 text-blue-200 text-sm">
              {t("familyLaw.ctaNote")}
            </span>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default FamilyLaw;
