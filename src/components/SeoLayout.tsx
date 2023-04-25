import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
import SEO from "./SEO";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
  defaultSEO?: boolean;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export default function SeoLayout({
  title,
  children,
  defaultSEO = false,
  ...props
}: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {defaultSEO && <SEO />}

      {children}
    </>
  );
}
