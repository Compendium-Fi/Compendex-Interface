import { useIsClient } from "@/hooks/useIsClient";
import Head from "next/head";
//import { chainIconUrl, tokenIconUrl } from '~/utils'
//import { useIsClient } from '~/hooks'

interface SEOProps {
  name: string;
  description: string;
}

const SEO = ({ name, description }: SEOProps) => {
  const isClient = useIsClient();

  const windowURL =
    isClient && window.location.href ? window.location.href : "";

  return (
    <Head>
      <title>{name}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={windowURL} />
      <meta property="og:site_name" content="DefiLlama" />
      <meta
        property="og:description"
        content="DefiLlama is a DeFi TVL aggregator. It is committed to providing accurate data without ads or sponsored content, as well as transparency."
      />
      <meta
        property="og:image"
        content={
          "https://asset.cloudinary.com/doohfu9i4/4d67af902c174c565718927f9e7634ce"
        }
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="sol.compendex.xyz" />
      <meta property="twitter:url" content={windowURL} />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:site" content="@Compendexyz" />
      <meta name="twitter:creator" content="@Compendexyz" />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          "https://asset.cloudinary.com/doohfu9i4/4d67af902c174c565718927f9e7634ce "
        }
      />
    </Head>
  );
};

export default SEO;
