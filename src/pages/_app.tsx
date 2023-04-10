import { GlobalStyle } from "@/components/global_style";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/Header";
import React from "react";
import "@/styles/App.less";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from 'next/script'
import { SSRProvider } from '@react-aria/ssr';
if (!process.browser) React.useLayoutEffect = React.useEffect;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <MainLayout>
        <Head>
          <script src="/static/datafeeds/udf/dist/bundle.js" />
          <link rel="shortcut icon" href="/static/imgs/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
          <title>{process.env.NEXT_PUBLIC_WEBSITE_TITLE}</title>
        </Head>
        <GlobalStyle />
        <MainHeader /> <Component {...pageProps} />
      </MainLayout>
    </SSRProvider>

  );
}
