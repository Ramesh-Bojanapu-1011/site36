import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useLang } from "../src/components/LangContext";

const home2 = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>LawFirmPro - {t("home2_title")}</title>
        <meta name="description" content={t("home2_meta_desc")} />
      </Head>
      <main className="bg-white dark:bg-gray-900 caret-transparent">
        <Headder />

        {/* Hero Section: Modern Split */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[100vh] px-4 py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 overflow-hidden">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/law-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/law-hero-poster.jpg"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="md:w-1/2 z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200 mb-6">
              {t("home2_hero_title")}
            </h1>
            <p className="text-lg md:text-2xl text-blue-800 dark:text-blue-100 mb-8">
              {t("home2_hero_subtitle")}
            </p>
            <Link
              href="/about-us"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded shadow transition"
            >
              {t("home2_hero_button")}
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 z-20">
            <img
              src="/globe.svg"
              alt={t("home2_hero_img_alt")}
              className="w-80 h-80 object-contain drop-shadow-xl"
            />
          </div>
        </section>

        {/* Section 2: Our Values & Process */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-10 blur-3xl -z-10" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
              {t("home2_values_title")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Values List */}
              <div className="flex-1">
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-2xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                      🏛️
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100 mb-1">
                        {t("home2_value1_title")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base">
                        {t("home2_value1_desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-2xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                      🚀
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100 mb-1">
                        {t("home2_value2_title")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base">
                        {t("home2_value2_desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-2xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                      🤝
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100 mb-1">
                        {t("home2_value3_title")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base">
                        {t("home2_value3_desc")}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Process Timeline */}
              <div className="flex-1 mt-16 md:mt-0">
                <ol className="relative border-l-4 border-blue-200 dark:border-blue-900 ml-6">
                  {[
                    {
                      step: t("home2_process1_title"),
                      desc: t("home2_process1_desc"),
                      icon: "📞",
                    },
                    {
                      step: t("home2_process2_title"),
                      desc: t("home2_process2_desc"),
                      icon: "🧩",
                    },
                    {
                      step: t("home2_process3_title"),
                      desc: t("home2_process3_desc"),
                      icon: "🏆",
                    },
                  ].map((item, idx) => (
                    <li key={item.step} className="mb-12 ml-6 relative">
                      <span className="absolute -left-10 top-0 w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                        {item.icon}
                      </span>
                      <h4 className="font-bold text-blue-800 dark:text-blue-100 text-lg mb-1">
                        {item.step}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-base">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Client Success Stories */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-10 blur-3xl -z-10" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
              {t("home2_success_title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: t("home2_success1_name"),
                  result: t("home2_success1_result"),
                  img: "/file.svg",
                  tag: t("home2_success1_tag"),
                },
                {
                  name: t("home2_success2_name"),
                  result: t("home2_success2_result"),
                  img: "/next.svg",
                  tag: t("home2_success2_tag"),
                },
                {
                  name: t("home2_success3_name"),
                  result: t("home2_success3_result"),
                  img: "/vercel.svg",
                  tag: t("home2_success3_tag"),
                },
              ].map((story) => (
                <div
                  key={story.name}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 dark:border-blue-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                >
                  <span className="px-3 py-1 mb-3 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-semibold uppercase tracking-wide">
                    {story.tag}
                  </span>
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100 mb-2">
                    {story.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {story.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Awards & Recognition */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-12 text-center">
            {t("home2_awards_title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: t("home2_award1_title"),
                year: t("home2_award1_year"),
                icon: "🏆",
              },
              {
                title: t("home2_award2_title"),
                year: t("home2_award2_year"),
                icon: "💻",
              },
              {
                title: t("home2_award3_title"),
                year: t("home2_award3_year"),
                icon: "🌟",
              },
              {
                title: t("home2_award4_title"),
                year: t("home2_award4_year"),
                icon: "🏅",
              },
            ].map((award) => (
              <div
                key={award.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 flex flex-col items-center border border-blue-100 dark:border-blue-900 min-w-[250px] max-w-[300px]"
              >
                <span className="text-4xl mb-3">{award.icon}</span>
                <div className="font-bold text-blue-800 dark:text-blue-100 mb-1">
                  {award.title}
                </div>
                <div className="text-blue-500 dark:text-blue-300 text-sm">
                  {award.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Community Impact */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-10 blur-3xl -z-10" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
              {t("home2_community_title")}
            </h2>
            <ol className="relative border-l-4 border-blue-200 dark:border-blue-900 ml-6">
              {[
                {
                  year: t("home2_community1_year"),
                  title: t("home2_community1_title"),
                  desc: t("home2_community1_desc"),
                  icon: "🤲",
                },
                {
                  year: t("home2_community2_year"),
                  title: t("home2_community2_title"),
                  desc: t("home2_community2_desc"),
                  icon: "📄",
                },
                {
                  year: t("home2_community3_year"),
                  title: t("home2_community3_title"),
                  desc: t("home2_community3_desc"),
                  icon: "🎤",
                },
                {
                  year: t("home2_community4_year"),
                  title: t("home2_community4_title"),
                  desc: t("home2_community4_desc"),
                  icon: "💙",
                },
              ].map((item, _idx) => (
                <li key={item.title} className="mb-16 ml-6 relative">
                  <span className="absolute -left-20 top-0 w-12 h-12 rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-2xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                    {item.icon}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="font-bold text-blue-800 dark:text-blue-100 text-lg">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 dark:text-blue-200 text-xl mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 6: Book a Strategy Session (Modern CTA) */}
        <section className="relative mx-auto py-20 px-4 flex items-center justify-center">
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 text-center flex flex-col items-center border-4 border-blue-100 dark:border-blue-900">
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 dark:bg-blue-800 text-white text-4xl shadow-lg border-4 border-white dark:border-blue-900">
                📅
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-4 drop-shadow-lg">
              {t("home2_cta_title")}
            </h2>
            <p className="text-blue-800 dark:text-blue-100 mb-8 max-w-2xl text-lg">
              {t("home2_cta_desc")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-700 dark:bg-blue-800 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-800 dark:hover:bg-blue-900 transition text-lg tracking-wide"
            >
              {t("home2_cta_button")}
            </Link>
            <span className="mt-6 text-blue-400 dark:text-blue-200 text-sm">
              {t("home2_cta_note")}
            </span>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default home2;
