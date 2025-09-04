import React from "react";
import Head from "next/head";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import { useLang } from "../src/components/LangContext";

const FutureOfLawFirms = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{t("future_law_title")} - LawFirmPro</title>
        <meta name="description" content={t("future_law_meta_desc")} />
      </Head>
      <main className="bg-white dark:bg-gray-900 caret-transparent">
        <Headder />
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 dark:text-blue-200 drop-shadow-lg">
              {t("future_law_hero_title")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto text-blue-800 dark:text-blue-100">
              {t("future_law_hero_subtitle")}
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            {t("future_law_section_title")}
          </h2>
          <div className="space-y-10 text-lg text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("future_law_section_h1")}
              </h3>
              <p>{t("future_law_section_p1")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("future_law_section_h2")}
              </h3>
              <p>{t("future_law_section_p2")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("future_law_section_h3")}
              </h3>
              <p>{t("future_law_section_p3")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("future_law_section_h4")}
              </h3>
              <p>{t("future_law_section_p4")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("future_law_section_h5")}
              </h3>
              <p>{t("future_law_section_p5")}</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default FutureOfLawFirms;
