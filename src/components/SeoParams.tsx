
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
        </Head>
    )
}

export default SeoParams