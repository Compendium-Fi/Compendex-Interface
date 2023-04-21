import axios from "axios";

export const fetchTokenPrice = async (tokenId: string) => {
  try {
    let res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/" + tokenId
    );

    let token = {
      symbol: res.data.symbol,
      name: res.data.name,
      image: res.data.image.large,
      marketData: res.data.market_data,
      id: tokenId,
    };
    return token;
  } catch (error: any) {
    console.log("error", error.message);
    return {
      symbol: null,
      name: null,
      image: null,
      marketData: null,
      id: tokenId,
    };
  }
};
export const getTokenTickers = async () => {
  try {
    let result = await axios.get(
      `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-ecosystem&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`,
      {
        headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
      }
    );
    let { data } = result;
    return data;
  } catch (err) { }
};
export const getTrendingTokensCharts = async (chartType: any) => {
  try {
    const [
      solResp,
      msSolResp,
      stSolResp,
      rayResp,
      orcaResp,
      bonkResp,
      cmfiResp,
    ] = await Promise.all([
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/msol/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/lido-staked-sol/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/raydium/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/orca/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/bonk/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
      axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/compendium-fi/market_chart?vs_currency=usd&days=${chartType}`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      ),
    ]);
    return {
      solanaChart: solResp.data,
      msSolChart: msSolResp.data,
      stSolChart: stSolResp.data,
      rayChart: rayResp.data,
      orcaChart: orcaResp.data,
      bonkChart: bonkResp.data,
      cmfiChart: cmfiResp.data,
    };
  } catch (err) {
    return {
      solanaChart: [],
      msSolChart: [],
      stSolChart: [],
      rayChart: [],
      orcaChart: [],
      bonkChart: [],
      cmfiChart: [],
    };
  }
};
export const getUsersTokenSolScan = async (address) => {
  try {
    const { data } = await axios.get(
      `https://public-api.solscan.io/account/tokens?account=${address}`,
      {
        headers: {
          token:
            process.env.NEXT_PUBLIC_SOLSCAN_TOKEN,
        },
      }
    );
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("TOKENS ERROR", error.message);
  }
};
export const initTokenInfo = async (mint, coingeckoId) => {
  try {
    let result = await axios.post(`https://devnetdex.compendium.fi/mapper/`, {
      token: mint,
      coingeckoId: coingeckoId,
    });
    //console.log("Result", result.data);
    if (!result.data.error) {
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("ERR", error);
  }
};
export const initChartData = async (fromId) => {
  try {
    let fromTokenResult = await axios.get(
      `https://pro-api.coingecko.com/api/v3/coins/${fromId}/market_chart?vs_currency=USD&days=7`,
      {
        headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_COINGECKO_PRO_KEY },
      }
    );
    console.log("Prices", fromTokenResult);
    return fromTokenResult.data.prices;
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const initTokenChartData = async (tokenId) => {
  try {
    let fromTokenResult = await axios.get(
      `https://pro-api.coingecko.com/api/v3/coins/${tokenId}/market_chart?vs_currency=USD&days=7`,
      {
        headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_COINGECKO_PRO_KEY },
      }
    );

    return fromTokenResult.data.prices;
  } catch (error) {
    console.log("Error", error.message);
    return null;
  }
};