import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useLang } from "../src/components/LangContext";
import {
  Briefcase,
  Building2,
  Handshake,
  Lightbulb,
  Scale,
  Trophy,
  User,
  Users,
} from "lucide-react";

type Props = {
  // Define any props if needed
};

const home1 = (props: Props) => {
  const { t } = useLang();
  return (
    <>
      <Head>
        <title>LawFirmPro - {t("home")}</title>
        <meta name="description" content={t("home_meta_desc")} />
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
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4  ">
              {t("hero_title")}
            </h1>
            <p className="text-lg md:text-2xl mb-6">{t("hero_subtitle")}</p>
            <Link
              href="#contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded shadow transition"
            >
              {t("request_consultation")}
            </Link>
          </div>
        </section>

        {/* Section 2: Practice Areas */}
        <section className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
            {t("practice_areas")}
          </h2>
          {/* Timeline/roadmap style */}
          <div className="relative border-x-4  border-blue-200 dark:border-blue-900 ml-6 md:ml-0">
            {[
              {
                title: t("corporate_law"),
                desc: t("corporate_law_desc"),
                icon: <Briefcase />,
              },
              {
                title: t("litigation"),
                desc: t("litigation_desc"),
                icon: <Scale />,
              },
              {
                title: t("intellectual_property"),
                desc: t("intellectual_property_desc"),
                icon: <Lightbulb />,
              },
              {
                title: t("real_estate"),
                desc: t("real_estate_desc"),
                icon: <Building2 />,
              },
              {
                title: t("family_law"),
                desc: t("family_law_desc"),
                icon: <Users />,
              },
              {
                title: t("employment_law"),
                desc: t("employment_law_desc"),
                icon: <User />,
              },
            ].map((area, idx) => (
              <div
                key={area.title}
                className={`relative mb-12 flex flex-col md:flex-row items-start md:items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon and line dot */}
                <div className="absolute -left-8 md:static md:ml-0 flex-shrink-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-700 dark:bg-blue-900 flex items-center justify-center text-3xl text-white shadow-lg border-4 border-white dark:border-gray-900">
                    {area.icon}
                  </div>
                </div>
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    idx % 2 === 1 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-2 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* Vertical line accent */}
            <div
              className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-200 dark:from-blue-900 to-transparent pointer-events-none"
              style={{ zIndex: 0 }}
            />
            <div
              className="absolute right-0 z-10 hidden md:block top-0 w-2 h-full bg-gradient-to-b from-blue-200 dark:from-blue-900 to-transparent pointer-events-none"
              style={{ zIndex: 0 }}
            />
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-blue-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
              {t("why_choose")}
            </h2>
            {/* Modern horizontal stepper/feature bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 relative">
              {/* Connecting line */}
              <div
                className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 z-0"
                style={{ transform: "translateY(-50%)" }}
              />
              {/* Features */}
              {[
                {
                  icon: <Users />,
                  title: t("experienced_attorneys"),
                  desc: t("experienced_attorneys_desc"),
                },
                {
                  icon: <Handshake />,
                  title: t("client_focused"),
                  desc: t("client_focused_desc"),
                },
                {
                  icon: <Trophy />,
                  title: t("proven_results"),
                  desc: t("proven_results_desc"),
                },
              ].map((feature, idx) => (
                <div
                  key={feature.title}
                  className=" min-h-full relative   flex flex-col items-center text-center   md:w-1/3"
                >
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl shadow-lg border-4 border-blue-200 dark:border-blue-700 mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base   leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Meet Our Team */}
        <section className="  mx-auto py-20 px-4">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
            {t("meet_our_team")}
          </h2>
          {/* Modern horizontal scrollable team showcase */}
          <div className="flex gap-8  flex-wrap  pb-4 md:justify-center scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900">
            {[
              {
                name: t("team_jessica_name"),
                role: t("team_jessica_role"),
                avatar: "/team1.jpg",
                initials: "JD",
                bio: t("team_jessica_bio"),
              },
              {
                name: t("team_michael_name"),
                role: t("team_michael_role"),
                avatar: "/team2.jpg",
                initials: "ML",
                bio: t("team_michael_bio"),
              },
              {
                name: t("team_priya_name"),
                role: t("team_priya_role"),
                avatar: "/team3.jpg",
                initials: "PP",
                bio: t("team_priya_bio"),
              },
              {
                name: t("team_david_name"),
                role: t("team_david_role"),
                avatar: "/team4.jpg",
                initials: "DK",
                bio: t("team_david_bio"),
              },
            ].map((member) => (
              <div
                key={member.name}
                className="min-w-[270px]  md:max-w-[300px] not-md:w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 dark:border-blue-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover object-top mb-4 border-4 border-blue-200 dark:border-blue-900 bg-blue-100 dark:bg-blue-900"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-200 dark:bg-blue-900 mb-4 flex items-center justify-center text-3xl text-blue-900 dark:text-blue-100 border-4 border-blue-100 dark:border-blue-900">
                    {member.initials}
                  </div>
                )}
                <h4 className="font-bold text-xl text-blue-800 dark:text-blue-100 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2 font-semibold">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Testimonials */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 py-20 px-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-2xl -z-10" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl -z-10" />
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
              {t("testimonials")}
            </h2>
            {/* Grid style testimonials */}
            <div className="relative flex flex-col items-center">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
                  {[
                    {
                      quote: t("testimonial1_quote"),
                      client: t("testimonial1_client"),
                      area: t("testimonial1_area"),
                      img: "/client1.jpg",
                      alt: "Business Client",
                    },
                    {
                      quote: t("testimonial2_quote"),
                      client: t("testimonial2_client"),
                      area: t("testimonial2_area"),
                      img: "/client2.jpg",
                      alt: "Family Law Client",
                    },
                    {
                      quote: t("testimonial3_quote"),
                      client: t("testimonial3_client"),
                      area: t("testimonial3_area"),
                      img: "/client3.jpg",
                      alt: "IP Client",
                    },
                    {
                      quote: t("testimonial4_quote"),
                      client: t("testimonial4_client"),
                      area: t("testimonial4_area"),
                      img: "/client4.jpg",
                      alt: "Real Estate Client",
                    },
                    {
                      quote: t("testimonial5_quote"),
                      client: t("testimonial5_client"),
                      area: t("testimonial5_area"),
                      img: "/client5.jpg",
                      alt: "Employment Client",
                    },
                    {
                      quote: t("testimonial6_quote"),
                      client: t("testimonial6_client"),
                      area: t("testimonial6_area"),
                      img: "/client6.jpg",
                      alt: "General Client",
                    },
                  ].map((testi, idx) => (
                    <div
                      className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full"
                      key={idx}
                    >
                      <svg
                        className="w-10 h-10 text-blue-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 002 2h0a2 2 0 002-2v-2z"
                        />
                      </svg>
                      <p className="italic text-lg text-gray-700 dark:text-gray-200 mb-4">
                        {testi.quote}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testi.img}
                          alt={testi.alt}
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                        />
                        <div>
                          <div className="font-semibold text-blue-800 dark:text-blue-100">
                            — {testi.client}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {testi.area}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Call to Action (CTA) */}
        <section
          id="contact"
          className="relative max-w-4xl mx-auto py-20 px-4 flex items-center justify-center"
        >
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl -z-10" />
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 rounded-3xl shadow-2xl p-12 text-center flex flex-col items-center border-4 border-white dark:border-blue-900">
            <svg
              className="w-16 h-16 mb-6 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M16 24h16M24 16v16"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
              {t("cta_title")}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg">
              {t("cta_desc")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-200 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition text-lg tracking-wide"
            >
              {t("cta_button")}
            </Link>
            <span className="mt-6 text-blue-200 text-sm">{t("cta_note")}</span>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default home1;
