
import Head from "next/head"
type SeoParams = {
    title: string;
    description: string;
    keywords: string;
}

const SeoParams = ({ title, description, keywords }: SeoParams) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content="Your page image URL" /> */}
            <meta property="og:url" content="sol.compendex.xyz" />
        </Head>
    )
}

export default SeoParams