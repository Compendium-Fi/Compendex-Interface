import { useTokenList } from "@/context/tokenList";
import { initChartData, initTokenInfo } from "@/utils/tokenApi";
import { useQuery } from "react-query";
import { TokenInfo } from '@solana/spl-token-registry'
interface TokenData {
    tokenInfo: any;
    tokenHistory: any;
}
const useTokenInfoQuery = (type: string, tokenMint: string) => {
    const { splTokenList } = useTokenList();
    return useQuery<TokenData, Error>(
        [`tokenInfo-${type}`, tokenMint],
        async () => {
            const token: TokenInfo = splTokenList.find(
                (token: TokenInfo) => token.address === tokenMint
            );
            if (token) {
                const tokenInfo = await initTokenInfo(token.address, token.extensions.coingeckoId);
                const tokenHistory = await initChartData(token.extensions.coingeckoId);
                return { tokenInfo, tokenHistory };
            } else {
                return { tokenInfo: null, tokenHistory: null };
            }

        }
    );
};

export default useTokenInfoQuery;