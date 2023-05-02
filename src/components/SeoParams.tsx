import { NextSeo } from 'next-seo';
import Head from 'next/head';

type SeoParams = {
    title: string;
    description: string;
    keywords: string;
    image?: string;
};

const SeoParams = ({ title, description, keywords }: SeoParams) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    title,
                    description,
                    url: 'https://sol.compendex.xyz',
                    site_name: 'Your Site Name',
                    images: [
                        {
                            url: "https://res.cloudinary.com/doohfu9i4/image/upload/v1631305017/Compendiumfi_pigseo_banner_n6iauy.png",
                            width: 1200,
                            height: 630,
                            alt: title,
                        },
                    ],
                    type: 'website',
                    locale: 'en_US',
                }}
            />
            <Head>
                <meta name="keywords" content={keywords} />
            </Head>
        </>
    );
};

export default SeoParams;