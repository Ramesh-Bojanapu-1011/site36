import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to LawFirmPro</title>
        <meta
          name="description"
          content="LawFirmPro - Legal Solutions for Law Firms and Advisors"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 flex items-center justify-center">
        <section className="max-w-5xl mx-auto text-center py-24 px-6 rounded-3xl shadow-2xl bg-white dark:bg-gray-900 border-2 border-blue-100 dark:border-blue-800">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200 mb-6">
            Welcome to LawFirmPro
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
            Your trusted partner for legal solutions. Please login to access
            your dashboard.
          </p>
          <a
            href="/auth"
            className="inline-block bg-blue-700 dark:bg-blue-900 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-800 dark:hover:bg-blue-950 transition text-lg tracking-wide"
          >
            Go to Login
          </a>
        </section>
      </main>
    </>
  );
}
