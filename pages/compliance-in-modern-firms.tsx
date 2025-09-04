import React from "react";
import Head from "next/head";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import { useLang } from "../src/components/LangContext";

const ComplianceInModernFirms = () => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>{t("blog.posts.2.title")} - LawFirmPro</title>
        <meta name="description" content={t("blog.posts.2.excerpt")} />
      </Head>
      <main className="bg-white dark:bg-gray-900 caret-transparent">
        <Headder />
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 dark:text-blue-200 drop-shadow-lg">
              {t("blog.posts.2.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto text-blue-800 dark:text-blue-100">
              {t("blog.posts.2.excerpt")}
            </p>
          </div>
        </section>
        {/* Content Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            {t("compliance.sectionTitle") !== "compliance.sectionTitle"
              ? t("compliance.sectionTitle")
              : t("blog.posts.2.title")}
          </h2>
          <div className="space-y-10 text-lg text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH1") !== "compliance.sectionH1"
                  ? t("compliance.sectionH1")
                  : t("blog.posts.2.title")}
              </h3>
              <p>
                {t("compliance.sectionP1") !== "compliance.sectionP1"
                  ? t("compliance.sectionP1")
                  : "Modern law firms face a rapidly changing regulatory environment. Staying compliant means keeping up with new laws, industry standards, and client expectations—all while maintaining ethical integrity and operational efficiency."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH2") !== "compliance.sectionH2"
                  ? t("compliance.sectionH2")
                  : t("blog.posts.2.title")}
              </h3>
              <p>
                {t("compliance.sectionP2") !== "compliance.sectionP2"
                  ? t("compliance.sectionP2")
                  : "From data privacy to anti-money laundering, law firms must implement robust policies and training to avoid costly mistakes. Proactive compliance not only protects the firm, but also builds trust with clients and regulators."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH3") !== "compliance.sectionH3"
                  ? t("compliance.sectionH3")
                  : "Technology & Compliance"}
              </h3>
              <p>
                {t("compliance.sectionP3") !== "compliance.sectionP3"
                  ? t("compliance.sectionP3")
                  : "Technology is both a challenge and a solution. Digital tools can streamline compliance processes, but also introduce new risks. Law firms must balance innovation with vigilance to stay ahead of regulatory changes."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH4") !== "compliance.sectionH4"
                  ? t("compliance.sectionH4")
                  : "Building a Culture of Compliance"}
              </h3>
              <p>
                {t("compliance.sectionP4") !== "compliance.sectionP4"
                  ? t("compliance.sectionP4")
                  : "A culture of compliance starts at the top. Leadership must set clear expectations, provide ongoing education, and encourage open communication about risks and responsibilities. This ensures every team member is empowered to uphold the highest standards."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH5") !== "compliance.sectionH5"
                  ? t("compliance.sectionH5")
                  : "Global Standards & Local Nuances"}
              </h3>
              <p>
                {t("compliance.sectionP5") !== "compliance.sectionP5"
                  ? t("compliance.sectionP5")
                  : "International law firms must navigate both global standards and local regulations. Understanding the nuances of each jurisdiction is essential for compliance and for building trust with clients across borders."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH6") !== "compliance.sectionH6"
                  ? t("compliance.sectionH6")
                  : "Continuous Improvement"}
              </h3>
              <p>
                {t("compliance.sectionP6") !== "compliance.sectionP6"
                  ? t("compliance.sectionP6")
                  : "Compliance is not a one-time task. Law firms must regularly review policies, update training, and adapt to new regulations to maintain the highest standards and avoid risk."}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("compliance.sectionH7") !== "compliance.sectionH7"
                  ? t("compliance.sectionH7")
                  : "Continuous Improvement"}
              </h3>
              <p>
                {t("compliance.sectionP7") !== "compliance.sectionP7"
                  ? t("compliance.sectionP7")
                  : "Compliance is not a one-time task. Law firms must regularly review policies, update training, and adapt to new regulations to maintain the highest standards and avoid risk."}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ComplianceInModernFirms;
