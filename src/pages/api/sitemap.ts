import { customMarketsList } from "@/utils/customMarkets";

import axios from "axios";
const convertObjectToArray = (obj: any) => {
    const array = Object.keys(obj).map((key) => ({
        value: obj[key],
        name: key,
    }));
    return array;
};
export default async function handler(req, res) {
    let { data } = await axios.get("https://tradingview.compendex.xyz/caching/");

    let mappedPairs: string[] = [];
    const tokens: any[] = await (
        await fetch("https://cache.jup.ag/tokens")
    ).json();
    //console.log("Data", data.result)
    if (data && data.success) {
        let { lastXVolumeByAddresses } = data.result;
        const pairs = convertObjectToArray(lastXVolumeByAddresses).map(
            (elm) => elm.name
        );
        mappedPairs = pairs.map((itm) => {
            const splitted = itm.split("/");
            console.log("SPlitted", splitted);
            const fromToken = tokens.find((tkn) => tkn.address == splitted[0]);
            const toToken = tokens.find((tkn) => tkn.address == splitted[1]);
            if (fromToken && toToken) {
                return `${fromToken.symbol}-${toToken.symbol}`;
            } else {
                return null;
            }

        });
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml");

    // Instructing the Vercel edge to cache the file
    res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
    <loc>https://sol.compendex.xyz/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>https://sol.compendex.xyz/analytics</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
    ${customMarketsList.map(
        (market) => ` <url>
    <loc>https://sol.compendex.xyz/market/${market.address}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )}
  <url>
    <loc>https://sol.compendex.xyz/toolbox</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>https://sol.compendex.xyz/swap</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  ${mappedPairs.filter(Boolean).map(
        (pair) => `<url>
  <loc>https://sol.compendex.xyz/swap?tokens=${pair}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>`
    )}
    </urlset>`;

    res.end(xml);
}
