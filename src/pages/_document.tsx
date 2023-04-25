import SeoParams from '@/components/SeoParams';
import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        {/* <SeoParams
          title="DEX Trading Terminal | Compendex"
          description=" Introducing the next generation of trading technology: an open-source, professional-grade trading terminal for Solana. This platform aggregates protocols and analytics across Solana to help improve market efficiency and equalize opportunities for all."
          keywords=""
        /> */}
        <Head />
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}