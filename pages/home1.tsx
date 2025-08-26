import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {
  // Define any props if needed
};

const home1 = (props: Props) => {
  return (
    <>
      <Head>
        <title>LawFirmPro - Home</title>
        <meta
          name="description"
          content="Expert Legal Advisors for Your Business and Personal Needs"
        />
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
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4  ">
              Your Trusted Legal Advisors
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Expertise. Integrity. Results.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded shadow transition"
            >
              Request Consultation
            </Link>
          </div>
        </section>

        {/* Section 2: Practice Areas */}
        <section className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-16 text-center tracking-tight">
            Our Practice Areas
          </h2>
          {/* Timeline/roadmap style */}
          <div className="relative border-x-4  border-blue-200 dark:border-blue-900 ml-6 md:ml-0">
            {[
              {
                title: "Corporate Law",
                desc: "Business formation, mergers, acquisitions, and compliance. We provide strategic legal counsel for startups and established companies, draft and review contracts, and ensure your business operates within the law at every stage.",
                icon: "\u{1F4BC}",
              },
              {
                title: "Litigation & Dispute Resolution",
                desc: "Expert representation in court and out-of-court settlements. Our litigators handle complex disputes, negotiate settlements, and advocate for your interests in civil, commercial, and regulatory matters.",
                icon: "\u{2696}\u{FE0F}",
              },
              {
                title: "Intellectual Property",
                desc: "Protect your ideas, trademarks, and patents. We help you secure, enforce, and defend your intellectual property rights, from registration to litigation, ensuring your innovations remain yours.",
                icon: "\u{1F4A1}",
              },
              {
                title: "Real Estate Law",
                desc: "Transactions, disputes, and property rights. Our team guides you through property purchases, sales, leasing, zoning, and development, resolving disputes and safeguarding your investments.",
                icon: "\u{1F3E2}",
              },
              {
                title: "Family Law",
                desc: "Divorce, custody, and family matters with compassion. We support you through life’s transitions, handling divorce, child custody, adoption, and domestic agreements with sensitivity and care.",
                icon: "\u{1F46A}",
              },
              {
                title: "Employment Law",
                desc: "Workplace rights, contracts, and disputes. We advise employers and employees on contracts, workplace policies, wrongful termination, discrimination, and labor relations to foster fair and lawful workplaces.",
                icon: "\u{1F464}",
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
              Why Choose LawFirmPro?
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
                  icon: "\u{2696}\u{FE0F}",
                  title: "Experienced Attorneys",
                  desc: "Our team brings decades of combined legal expertise across diverse practice areas. We provide knowledgeable, strategic counsel and dedicated advocacy to help you achieve the best possible outcome in every legal matter.",
                },
                {
                  icon: "\u{1F91D}",
                  title: "Client-Focused",
                  desc: "We prioritize your needs and goals, offering personalized solutions and clear communication at every step. Your peace of mind and satisfaction are at the heart of everything we do, from consultation to resolution.",
                },
                {
                  icon: "\u{1F3C6}",
                  title: "Proven Results",
                  desc: "Our track record speaks for itself—successful outcomes, satisfied clients, and a reputation for excellence. We are committed to delivering results and building lasting relationships based on trust and performance.",
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
            Meet Our Team
          </h2>
          {/* Modern horizontal scrollable team showcase */}
          <div className="flex gap-8  flex-wrap  pb-4 md:justify-center scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900">
            {[
              {
                name: "Jessica Davis",
                role: "Managing Partner",
                avatar: "/team1.jpg",
                initials: "JD",
                bio: "Jessica specializes in corporate and commercial law, guiding businesses through complex transactions and regulatory challenges.",
              },
              {
                name: "Michael Lee",
                role: "Senior Litigator",
                avatar: "/team2.jpg",
                initials: "ML",
                bio: "Michael is a seasoned litigator with a proven record in dispute resolution, representing clients in high-stakes cases.",
              },
              {
                name: "Priya Patel",
                role: "Family Law Expert",
                avatar: "/team3.jpg",
                initials: "PP",
                bio: "Priya brings empathy and expertise to family law, helping clients navigate sensitive matters with care and clarity.",
              },
              {
                name: "David Kim",
                role: "Real Estate & IP",
                avatar: "/team4.jpg",
                initials: "DK",
                bio: "David advises on real estate and intellectual property, ensuring clients’ assets and ideas are protected at every step.",
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
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-blue-900 bg-blue-100 dark:bg-blue-900"
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
              What Our Clients Say
            </h2>
            {/* Grid style testimonials */}
            <div className="relative flex flex-col items-center">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
                  {/* Testimonial 1 */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full">
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
                      "LawFirmPro guided us through a complex merger with
                      professionalism and care. Their expertise made all the
                      difference."
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/client1.jpg"
                        alt="Business Client"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                      />
                      <div>
                        <div className="font-semibold text-blue-800 dark:text-blue-100">
                          — Business Client
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Corporate Law
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full">
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
                      "Their team was always available and truly fought for my
                      family’s best interests. I felt supported every step of
                      the way."
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/client2.jpg"
                        alt="Family Law Client"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                      />
                      <div>
                        <div className="font-semibold text-blue-800 dark:text-blue-100">
                          — Family Law Client
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Family Law
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 3 */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full">
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
                      "I was impressed by their attention to detail and clear
                      communication. Every step was explained and handled with
                      care."
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/client3.jpg"
                        alt="IP Client"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                      />
                      <div>
                        <div className="font-semibold text-blue-800 dark:text-blue-100">
                          — IP Client
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Intellectual Property
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 4 */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full">
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
                      "The real estate team made my property transaction
                      seamless and stress-free. Highly recommended for their
                      professionalism."
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/client4.jpg"
                        alt="Real Estate Client"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                      />
                      <div>
                        <div className="font-semibold text-blue-800 dark:text-blue-100">
                          — Real Estate Client
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Real Estate Law
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 5 */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full">
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
                      "LawFirmPro’s employment law advice helped me resolve a
                      workplace dispute quickly and fairly. I’m grateful for
                      their support."
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/client5.jpg"
                        alt="Employment Client"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                      />
                      <div>
                        <div className="font-semibold text-blue-800 dark:text-blue-100">
                          — Employment Client
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Employment Law
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 6 */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col items-center border-2 border-blue-100 dark:border-blue-800 hover:scale-105 transition-transform duration-300 h-full">
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
                      "From start to finish, the team was responsive and
                      knowledgeable. I felt confident knowing my case was in
                      good hands."
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/client6.jpg"
                        alt="General Client"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300 dark:border-blue-700"
                      />
                      <div>
                        <div className="font-semibold text-blue-800 dark:text-blue-100">
                          — General Client
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          General Legal Services
                        </div>
                      </div>
                    </div>
                  </div>
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
              Secure Your Legal Success Today
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg">
              Don’t wait until it’s too late. Whether you’re facing a legal
              challenge or planning for the future, our expert team is ready to
              guide you every step of the way. Take the first step toward peace
              of mind and lasting results.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-200 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition text-lg tracking-wide"
            >
              Get Your Free Consultation
            </Link>
            <span className="mt-6 text-blue-200 text-sm">
              100% confidential &amp; no obligation
            </span>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default home1;
