import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LangProvider, useLang } from "../src/components/LangContext";
import { useEffect } from "react";

function InnerApp({ Component, pageProps }: AppProps) {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.dir =
      lang === "ar" || lang === "he" ? "rtl" : "ltr";
  }, [lang]);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <LangProvider>
      <InnerApp {...props} />
    </LangProvider>
  );
}
