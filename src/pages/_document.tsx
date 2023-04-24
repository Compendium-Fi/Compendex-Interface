import SeoParams from '@/components/SeoParams'
import { Html, Head, Main, NextScript } from 'next/document'
//import Head from 'next/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <SeoParams
        title="DEX Trading Terminal | Compendex"
        description="Introducing the next generation of trading technology: an open-source, professional-grade trading terminal for Solana. This platform aggregates protocols and analytics across Solana to help improve market efficiency and equalize opportunities for all."
        keywords=""
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
