import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - LawFirmPro</title>
        <meta
          name="description"
          content="About LawFirmPro - Trusted Legal Advisors"
        />
      </Head>
      <main className="bg-white caret-transparent dark:bg-gray-900">
        <Headder />
        {/* Hero Section with Background Video */}
        <section className="relative h-[100vh] flex items-center justify-center">
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
              About LawFirmPro
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              Your trusted legal advisors, committed to integrity, innovation,
              and results for every client.
            </p>
          </div>
        </section>

        {/* Section 2: Our Story */}
        <section className="  mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex-shrink-0 mb-8 md:mb-0">
              <Image
                src="/about-story.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-lg w-full h-72 object-cover object-center border-4 border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-900"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                Founded by a team of passionate attorneys, LawFirmPro was
                created to redefine the legal experience. We believe in making
                high-quality legal services accessible, transparent, and
                client-focused. Our journey began with a vision to combine deep
                legal expertise with a modern, approachable style.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Over the years, we have grown into a full-service law firm,
                serving individuals, families, and businesses with dedication
                and care. Our story is one of continuous learning, adaptation,
                and a relentless pursuit of justice for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Mission & Values */}
        <section className="bg-blue-50 dark:bg-gray-800 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-6">
              Our Mission & Values
            </h2>
            <ul className="grid md:grid-cols-3 gap-8">
              <li className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
                <span className="text-3xl mb-2">⚖️</span>
                <h4 className="font-semibold mb-1">Integrity</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We uphold the highest ethical standards in every case and
                  every client relationship.
                </p>
              </li>
              <li className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
                <span className="text-3xl mb-2">💡</span>
                <h4 className="font-semibold mb-1">Innovation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We embrace technology and creative thinking to deliver modern
                  legal solutions.
                </p>
              </li>
              <li className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center">
                <span className="text-3xl mb-2">🤝</span>
                <h4 className="font-semibold mb-1">Client Focus</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Your needs and goals are at the heart of everything we do.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Meet Our Team */}
        <section className="  mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="flex gap-8   pb-4 md:justify-center scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900">
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
                className="min-w-[270px] bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 dark:border-blue-900 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                {member.avatar ? (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-blue-900 bg-blue-100 dark:bg-blue-900"
                    width={96}
                    height={96}
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

        {/* Section 5: Community Commitment */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-10 blur-3xl -z-10" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-12 text-center">
              Community Commitment
            </h2>
            <div className="relative">
              {/* <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 dark:bg-blue-800 rounded-full -translate-x-1/2" /> */}
              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 relative">
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mx-auto md:mx-0">
                    <span className="text-4xl">🤝</span>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                      Annual Legal Aid Drives
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                      Our team organizes yearly legal aid drives, providing free
                      legal advice and support to underserved communities.
                    </p>
                  </div>
                </div>
                {/* Timeline Item 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:gap-8 relative">
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mx-auto md:mx-0">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <div className="mt-6 md:mt-0 md:mr-8 text-center md:text-right">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                      Free Community Seminars
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                      We host educational seminars and workshops to empower
                      individuals with knowledge about their legal rights.
                    </p>
                  </div>
                </div>
                {/* Timeline Item 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 relative">
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mx-auto md:mx-0">
                    <span className="text-4xl">⚖️</span>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                      Pro Bono Representation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                      Our attorneys dedicate time to pro bono cases, ensuring
                      access to justice for those who need it most.
                    </p>
                  </div>
                </div>
                {/* Timeline Item 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:gap-8 relative">
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-200 dark:border-blue-800 shadow-lg mx-auto md:mx-0">
                    <span className="text-4xl">💙</span>
                  </div>
                  <div className="mt-6 md:mt-0 md:mr-8 text-center md:text-right">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                      Charity Fundraisers
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                      We actively participate in and sponsor charity events,
                      raising funds for local causes and organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact & Consultation CTA */}
        <section className="relative py-20 px-4 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-300 dark:bg-blue-800 rounded-full opacity-10 blur-3xl -z-10" />
          <div className="relative w-full mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 md:p-16 text-center border-4 border-blue-100 dark:border-blue-900 flex flex-col items-center">
            <div className="flex gap-6 mb-8 justify-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-800 text-3xl shadow">
                📞
              </span>
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-800 text-3xl shadow">
                💬
              </span>
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-200 dark:border-blue-800 text-3xl shadow">
                📧
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-4 drop-shadow-lg">
              Let's Connect
            </h2>
            <p className="text-blue-800 dark:text-blue-100 mb-8 max-w-xl text-lg">
              Have a legal question or need expert advice? Our team is ready to
              help—reach out for a confidential, no-obligation consultation.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-700 dark:bg-blue-800 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-800 dark:hover:bg-blue-900 transition text-lg tracking-wide mb-4"
            >
              Request Consultation
            </Link>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
              <span className="text-blue-700 dark:text-blue-200 text-sm flex items-center gap-2">
                <span className="text-lg">🔒</span> 100% confidential
              </span>
              <span className="text-blue-700 dark:text-blue-200 text-sm flex items-center gap-2">
                <span className="text-lg">⏱️</span> Quick response
              </span>
              <span className="text-blue-700 dark:text-blue-200 text-sm flex items-center gap-2">
                <span className="text-lg">💼</span> No obligation
              </span>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
