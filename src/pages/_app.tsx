import MainHeader from "@/components/Header";
import MainLayout from "@/components/MainLayout";
import SEO from "@/components/SEO";
import SeoParams from "@/components/SeoParams";
import { GlobalStyle } from "@/components/global_style";
import "@/styles/App.less";
import "@/styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
if (!process.browser) React.useLayoutEffect = React.useEffect;
export default function App({ Component, pageProps }: AppProps) {
  const { openGraphData = [] } = pageProps;
  return (
    <SSRProvider>
      <SEO
        name="DEX Trading Terminal | Compendex"
        description="Introducing the next generation of trading technology: an open-source, professional-grade trading terminal for Solana. This platform aggregates protocols and analytics across Solana to help improve market efficiency and equalize opportunities for all."
      />
      <MainLayout>
        <Head>
          <script src="/static/datafeeds/udf/dist/bundle.js" />
          <link rel="shortcut icon" href="/static/imgs/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <GlobalStyle />
        <MainHeader />
        <Component {...pageProps} />
      </MainLayout>
    </SSRProvider>
  );
}
