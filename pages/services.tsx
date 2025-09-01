import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useLang } from "../src/components/LangContext";

type Props = {};

const services = (props: Props) => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{t("services_title")} - LawFirmPro</title>
        <meta name="description" content={t("services_meta_desc")} />
      </Head>

      <main className="bg-white dark:bg-gray-900 caret-transparent">
        <Headder />

        {/* Hero Section with Background Video */}
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/law-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/law-hero-poster.jpg"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("services_hero_title")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              {t("services_hero_subtitle")}
            </p>
          </div>
        </section>

        {/* Section 2: Our Core Services */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-10 text-center">
            {t("services_core_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t("corporate_law"),
                desc: t("services_corporate_desc"),
                icon: "🏢",
                href: "/corporate-law",
              },
              {
                name: t("litigation"),
                desc: t("services_litigation_desc"),
                icon: "⚖️",
                href: "/litigation-dispute",
              },
              {
                name: t("family_law"),
                desc: t("services_family_desc"),
                icon: "👨‍👩‍👧‍👦",
                href: "/family-law",
              },
              {
                name: t("real_estate"),
                desc: t("services_realestate_desc"),
                icon: "🏠",
                href: "/real-estate",
              },
              {
                name: t("intellectual_property"),
                desc: t("services_ip_desc"),
                icon: "💡",
                href: "/intellectual-property",
              },
              {
                name: t("employment_law"),
                desc: t("services_employment_desc"),
                icon: "🧑‍⚖️",
                href: "/employment-law",
              },
            ].map((service) => (
              <div
                key={service.name}
                className="group bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 dark:border-blue-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                <span className="text-5xl mb-4">{service.icon}</span>
                <h3 className="font-bold text-nowrap text-xl text-blue-800 dark:text-blue-100 mb-2 group-hover:underline">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {service.desc}
                </p>
                <Link
                  href={service.href}
                  className="text-blue-700 dark:text-blue-300 text-xs font-semibold mt-2 group-hover:underline"
                >
                  {t("services_learn_more")}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-blue-50 dark:bg-gray-800 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
              {t("services_why_title")}
            </h2>
            <ul className="grid md:grid-cols-3 gap-8">
              <li className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
                <span className="text-3xl mb-2">🌟</span>
                <h4 className="font-semibold mb-1">{t("proven_results")}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {t("services_why1_desc")}
                </p>
              </li>
              <li className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
                <span className="text-3xl mb-2">🤝</span>
                <h4 className="font-semibold mb-1">
                  {t("services_why2_title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {t("services_why2_desc")}
                </p>
              </li>
              <li className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
                <span className="text-3xl mb-2">💡</span>
                <h4 className="font-semibold mb-1">
                  {t("services_why3_title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {t("services_why3_desc")}
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Client Success Stories */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            {t("services_success_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-lg p-8 border border-blue-100 dark:border-blue-900">
              <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
                {t("services_success1_quote")}
              </p>
              <span className="block text-blue-700 dark:text-blue-300 font-semibold">
                {t("services_success1_client")}
              </span>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-lg p-8 border border-blue-100 dark:border-blue-900">
              <p className="text-lg text-blue-900 dark:text-blue-100 mb-4">
                {t("services_success2_quote")}
              </p>
              <span className="block text-blue-700 dark:text-blue-300 font-semibold">
                {t("services_success2_client")}
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: Our Process */}
        <section className="bg-blue-50 dark:bg-gray-800 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
              {t("services_process_title")}
            </h2>
            <ol className="relative border-l-4 border-blue-200 dark:border-blue-800 ml-4 space-y-10">
              <li className="ml-6">
                <div className="absolute w-6 h-6 bg-blue-100 dark:bg-blue-900 border-4 border-blue-300 dark:border-blue-800 rounded-full -left-8 top-1.5 flex items-center justify-center text-2xl">
                  📝
                </div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-1">
                  {t("services_process1_title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("services_process1_desc")}
                </p>
              </li>
              <li className="ml-6">
                <div className="absolute w-6 h-6 bg-blue-100 dark:bg-blue-900 border-4 border-blue-300 dark:border-blue-800 rounded-full -left-8 top-1.5 flex items-center justify-center text-2xl">
                  🔍
                </div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-1">
                  {t("services_process2_title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("services_process2_desc")}
                </p>
              </li>
              <li className="ml-6">
                <div className="absolute w-6 h-6 bg-blue-100 dark:bg-blue-900 border-4 border-blue-300 dark:border-blue-800 rounded-full -left-8 top-1.5 flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-1">
                  {t("services_process3_title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("services_process3_desc")}
                </p>
              </li>
              <li className="ml-6">
                <div className="absolute w-6 h-6 bg-blue-100 dark:bg-blue-900 border-4 border-blue-300 dark:border-blue-800 rounded-full -left-8 top-1.5 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-100 mb-1">
                  {t("services_process4_title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("services_process4_desc")}
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="relative max-w-3xl mx-auto py-20 px-4 flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 rounded-3xl shadow-2xl p-12 text-center flex flex-col items-center border-4 border-white dark:border-blue-900">
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
              {t("services_cta_title")}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg">
              {t("services_cta_desc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-200 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition text-lg tracking-wide"
            >
              {t("request_consultation")}
            </a>
            <span className="mt-6 text-blue-200 text-sm">
              {t("services_cta_note")}
            </span>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default services;
