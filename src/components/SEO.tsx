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
            <meta property="og:site_name" content="Compedex Trading Terminal" />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:image"
                content={
                    "https://res.cloudinary.com/doohfu9i4/image/upload/v1682441159/FtnP_p5XgAcdpMX_nd1emm.jpg"
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
                    "https://res.cloudinary.com/doohfu9i4/image/upload/v1682441159/FtnP_p5XgAcdpMX_nd1emm.jpg"
                }
            />
        </Head>
    );
};

export default SEO;
