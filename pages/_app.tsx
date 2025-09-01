import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LangProvider } from "../src/components/LangContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </LangProvider>
  );
}
