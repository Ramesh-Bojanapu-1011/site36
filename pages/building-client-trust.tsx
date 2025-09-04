import React from "react";
import Head from "next/head";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import { useLang } from "../src/components/LangContext";

const BuildingClientTrust = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{t("blog.posts.1.title")} - LawFirmPro</title>
        <meta name="description" content={t("blog.posts.1.excerpt")} />
      </Head>
      <main className="bg-white dark:bg-gray-900 caret-transparent">
        <Headder />
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 dark:text-blue-200 drop-shadow-lg">
              {t("blog.posts.1.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto text-blue-800 dark:text-blue-100">
              {t("blog.posts.1.excerpt")}
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            {t("buildingClientTrust.sectionTitle") !==
            "buildingClientTrust.sectionTitle"
              ? t("buildingClientTrust.sectionTitle")
              : t("blog.posts.1.title")}
          </h2>
          <div className="space-y-10 text-lg text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("buildingClientTrust.sectionH1") !==
                "buildingClientTrust.sectionH1"
                  ? t("buildingClientTrust.sectionH1")
                  : t("blog.posts.1.title")}
              </h3>
              <p>
                {t("buildingClientTrust.sectionP1") !==
                "buildingClientTrust.sectionP1"
                  ? t("buildingClientTrust.sectionP1")
                  : "Trust is the foundation of every successful legal practice. Law firms that prioritize transparency, clear communication, and consistent results build lasting relationships with their clients. By understanding client needs and delivering exceptional value, firms can foster loyalty and stand out in a competitive market."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("buildingClientTrust.sectionH2") !==
                "buildingClientTrust.sectionH2"
                  ? t("buildingClientTrust.sectionH2")
                  : t("blog.posts.1.title")}
              </h3>
              <p>
                {t("buildingClientTrust.sectionP2") !==
                "buildingClientTrust.sectionP2"
                  ? t("buildingClientTrust.sectionP2")
                  : "Effective communication, transparency, and consistent results are key to building trust. Law firms should focus on understanding client needs and delivering exceptional value to foster loyalty and stand out in a competitive market."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("buildingClientTrust.sectionH3") !==
                "buildingClientTrust.sectionH3"
                  ? t("buildingClientTrust.sectionH3")
                  : "Empathy & Listening"}
              </h3>
              <p>
                {t("buildingClientTrust.sectionP3") !==
                "buildingClientTrust.sectionP3"
                  ? t("buildingClientTrust.sectionP3")
                  : "Empathy and active listening help law firms understand the unique concerns of each client. By showing genuine care and adapting solutions to individual needs, firms can build deeper trust and long-term partnerships."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("buildingClientTrust.sectionH4") !==
                "buildingClientTrust.sectionH4"
                  ? t("buildingClientTrust.sectionH4")
                  : "Delivering Results"}
              </h3>
              <p>
                {t("buildingClientTrust.sectionP4") !==
                "buildingClientTrust.sectionP4"
                  ? t("buildingClientTrust.sectionP4")
                  : "Consistently delivering positive outcomes and keeping promises reinforces client confidence. Law firms that go above and beyond in service and results become trusted advisors for years to come."}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default BuildingClientTrust;
