import { NextSeo } from 'next-seo';
import Head from 'next/head';

type SeoParams = {
    title: string;
    description: string;
    keywords: string;
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
                }}
            />
            <Head>
                <meta name="keywords" content={keywords} />
            </Head>
        </>
    );
};

export default SeoParams;