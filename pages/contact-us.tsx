import Head from "next/head";
import { useLang } from "../src/components/LangContext";
import Headder from "../src/components/Headder";
import Footer from "../src/components/Footer";
import React from "react";

const ContactUs = () => {
  const { t } = useLang();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong.");
    }
  };
  return (
    <>
      <Head>
        <title>{t("contact.title")}</title>
        <meta name="description" content={t("contact.metaDescription")} />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <Headder />

        {/* Section 1: Hero with Background Video */}
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/contact-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.heroTitle")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              {t("contact.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: Contact Form */}
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            {t("contact.formTitle")}
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xovlekvg"
            method="POST"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-800 flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder={t("contact.form.subject")}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows={5}
              placeholder={t("contact.form.message")}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-700 dark:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 dark:hover:bg-blue-950 transition"
            >
              {t("contact.form.submit")}
            </button>
            {success && (
              <p
                id="successMessage"
                style={{ color: "green", marginTop: "10px" }}
              >
                {t("contact.form.success")}
              </p>
            )}
          </form>
        </section>

        {/* Section 3: Our Offices */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-200 mb-12 text-center tracking-tight">
            {t("contact.officesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Office Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-2xl p-8 border-2 border-blue-200 dark:border-blue-800 hover:-translate-y-2 hover:shadow-blue-300 dark:hover:shadow-blue-900 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-700 dark:text-blue-300 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-blue-800 dark:text-blue-100 text-xl mb-2 tracking-wide">
                {t("contact.offices.0.city")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                {t("contact.offices.0.address")}
              </p>
              <p className="text-blue-700 dark:text-blue-300 font-semibold">
                {t("contact.offices.0.phone")}
              </p>
            </div>
            {/* Office Card 2 */}
            <div className="group bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-2xl p-8 border-2 border-blue-200 dark:border-blue-800 hover:-translate-y-2 hover:shadow-blue-300 dark:hover:shadow-blue-900 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-700 dark:text-blue-300 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-blue-800 dark:text-blue-100 text-xl mb-2 tracking-wide">
                {t("contact.offices.1.city")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                {t("contact.offices.1.address")}
              </p>
              <p className="text-blue-700 dark:text-blue-300 font-semibold">
                {t("contact.offices.1.phone")}
              </p>
            </div>
            {/* Office Card 3 */}
            <div className="group bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-2xl p-8 border-2 border-blue-200 dark:border-blue-800 hover:-translate-y-2 hover:shadow-blue-300 dark:hover:shadow-blue-900 transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-700 dark:text-blue-300 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.4 15a1.65 1.65 0 01-1.4.8H6a1.65 1.65 0 01-1.4-.8L3 12V7a2 2 0 012-2h14a2 2 0 012 2v5l-1.6 3z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-blue-800 dark:text-blue-100 text-xl mb-2 tracking-wide">
                {t("contact.offices.2.city")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                {t("contact.offices.2.address")}
              </p>
              <p className="text-blue-700 dark:text-blue-300 font-semibold">
                {t("contact.offices.2.phone")}
              </p>
            </div>
          </div>
        </section>
        {/* Section 4: Testimonials - Modern Carousel Look */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-200 mb-12 text-center tracking-tight">
            {t("contact.testimonialsTitle")}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
            {/* Testimonial Card 1 */}
            <div className="relative flex-1 min-w-[260px] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-2xl p-10 border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-blue-300 dark:hover:shadow-blue-900 transition-all duration-300">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <img
                  src="/avatar1.png"
                  alt="Client Avatar"
                  className="w-16 h-16 rounded-full object-top border-4 border-blue-200 dark:border-blue-700 shadow-lg bg-white object-cover"
                />
              </div>
              <p className="text-lg text-blue-900 dark:text-blue-100 mb-4 font-medium mt-10">
                <svg
                  className="inline w-6 h-6 text-blue-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.001 5.001 0 002 11c0 2.76 2.24 5 5 5v2c-3.87 0-7-3.13-7-7a7 7 0 017-7v2zm9.66 0A5.001 5.001 0 0011 11c0 2.76 2.24 5 5 5v2c-3.87 0-7-3.13-7-7a7 7 0 017-7v2z" />
                </svg>
                {t("contact.testimonials.0.quote")}
              </p>
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-base">
                {t("contact.testimonials.0.client")}
              </span>
            </div>
            {/* Testimonial Card 2 */}
            <div className="relative flex-1 min-w-[260px] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-2xl p-10 border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-blue-300 dark:hover:shadow-blue-900 transition-all duration-300">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <img
                  src="/avatar2.png"
                  alt="Client Avatar"
                  className="w-16 h-16 rounded-full object-top  border-4 border-blue-200 dark:border-blue-700 shadow-lg bg-white object-cover"
                />
              </div>
              <p className="text-lg text-blue-900 dark:text-blue-100 mb-4 font-medium mt-10">
                <svg
                  className="inline w-6 h-6 text-blue-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.001 5.001 0 002 11c0 2.76 2.24 5 5 5v2c-3.87 0-7-3.13-7-7a7 7 0 017-7v2zm9.66 0A5.001 5.001 0 0011 11c0 2.76 2.24 5 5 5v2c-3.87 0-7-3.13-7-7a7 7 0 017-7v2z" />
                </svg>
                {t("contact.testimonials.1.quote")}
              </p>
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-base">
                {t("contact.testimonials.1.client")}
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: Map Location */}
        <section className="  mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
            {t("contact.mapTitle")}
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="flex-1 min-w-[320px]">
              <iframe
                title="LawFirmPro Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870353726771!2d-74.00601568459344!3d40.71277577933059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c7e5e5b%3A0x7c2e8e8e8e8e8e8e!2s123%20Main%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1693574400000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  borderRadius: "1rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-2">
                {t("contact.offices.0.city")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t("contact.offices.0.address")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t("contact.offices.0.phone")}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ContactUs;
