import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import React from "react";
import { useLang } from "@/components/LangContext";

const Blog = () => {
  const { t } = useLang();
  const blogPosts = [
    {
      slug: "future-of-law-firms",
      title: t("blog.posts.0.title"),
      excerpt: t("blog.posts.0.excerpt"),
      image: "/blog1.jpg",
    },
    {
      slug: "building-client-trust",
      title: t("blog.posts.1.title"),
      excerpt: t("blog.posts.1.excerpt"),
      image: "/blog2.jpg",
    },
    {
      slug: "compliance-in-modern-firms",
      title: t("blog.posts.2.title"),
      excerpt: t("blog.posts.2.excerpt"),
      image: "/blog3.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>{t("blog.title")}</title>
        <meta name="description" content={t("blog.metaDescription")} />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <Headder />

        {/* Hero Section with Background Video */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/blog-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("blog.heroTitle")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              {t("blog.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: Featured Blogs */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-12 text-center">
            {t("blog.featuredTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/${post.slug}`}
                className="group block bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-block bg-blue-700 dark:bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 dark:hover:bg-blue-950 transition">
                    {t("blog.readMore")}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section 3: Why Follow Our Blog */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-14 text-center">
              {t("blog.whyFollowTitle")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
              <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-2 border-blue-400 dark:border-blue-700">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-xl tracking-wide">
                  {t("blog.whyFollow.0.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center text-base">
                  {t("blog.whyFollow.0.desc")}
                </p>
              </div>
              <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-2 border-blue-400 dark:border-blue-700">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-xl tracking-wide">
                  {t("blog.whyFollow.1.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center text-base">
                  {t("blog.whyFollow.1.desc")}
                </p>
              </div>
              <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-2 border-blue-400 dark:border-blue-700">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-xl tracking-wide">
                  {t("blog.whyFollow.2.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center text-base">
                  {t("blog.whyFollow.2.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-14 text-center">
            {t("blog.testimonialsTitle")}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
            <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900">
              <p className="text-lg text-blue-900 dark:text-blue-100 mb-2 font-medium">
                {t("blog.testimonials.0.quote")}
              </p>
              <span className="text-blue-700 dark:text-blue-300 font-semibold">
                {t("blog.testimonials.0.client")}
              </span>
            </div>
            <div className="flex-1 min-w-[260px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900">
              <p className="text-lg text-blue-900 dark:text-blue-100 mb-2 font-medium">
                {t("blog.testimonials.1.quote")}
              </p>
              <span className="text-blue-700 dark:text-blue-300 font-semibold">
                {t("blog.testimonials.1.client")}
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: Blog Process / How We Curate */}
        <section className="bg-blue-50 dark:bg-gray-800 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-14 text-center">
              {t("blog.processTitle")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("blog.process.0.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("blog.process.0.desc")}
                </p>
              </div>
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("blog.process.1.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("blog.process.1.desc")}
                </p>
              </div>
              <div className="flex-1 min-w-[220px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-2 border-blue-200 dark:border-blue-800">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-100 text-lg tracking-wide">
                  {t("blog.process.2.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t("blog.process.2.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="relative max-w-3xl mx-auto py-20 px-4 flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 rounded-3xl shadow-2xl p-12 text-center flex flex-col items-center border-4 border-white dark:border-blue-900">
            <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
              {t("blog.ctaTitle")}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg">
              {t("blog.ctaDesc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-200 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition text-lg tracking-wide"
            >
              {t("blog.ctaButton")}
            </a>
            <span className="mt-6 text-blue-200 text-sm">
              {t("blog.ctaNote")}
            </span>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
