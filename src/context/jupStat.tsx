import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import axios from "axios";
import { useTokenList } from "./tokenList";
interface JupStatsContextProps {
    volumeByPairs: any[];
    topTokens: any[];
    topBuys: any[];
    topSells: any[];
}
const JupStatsContext = createContext<JupStatsContextProps>({
    volumeByPairs: [],
    topTokens: [],
    topBuys: [],
    topSells: [],
});

const JupStatsProvider = ({ children }: { children: any }) => {
    const [volumeByPairs, setVolumesByPairs] = useState<any[]>([]);
    const [topTokens, setTopTokens] = useState([]);
    const [topBuys, setTopBuys] = useState([]);
    const [topSells, setTopSells] = useState([]);
    const {splTokenList} = useTokenList(); 
    const convertObjectToArray = (obj: any) => {
        const array = Object.keys(obj).map((key) => ({
            value: obj[key],
            name: key,
        }));
        return array;
    };
    const initJupStat = useCallback(async () => {
        try {
            let { data } = await axios.get(
                "https://tradingview.compendex.xyz/caching/"
            );
            if (data && data.success) {
                let { lastXVolumeByAddresses, lastXTopTokens, lastXTopBuy, lastXTopSell } =
                    data.result;
                const pairs = 
                setVolumesByPairs(convertObjectToArray(lastXVolumeByAddresses));
                setTopTokens(lastXTopTokens);
                setTopBuys(lastXTopBuy);
                setTopSells(lastXTopSell);
            }
        } catch (error) { }
    }, []);
    useEffect(() => {
        initJupStat();
    }, [initJupStat]);
    return (
        <JupStatsContext.Provider
            value={{ volumeByPairs, topTokens, topBuys, topSells }}
        >
            {children}
        </JupStatsContext.Provider>
    );
};
const useJupStat = () => {
    const { volumeByPairs, topTokens, topBuys, topSells } =
        useContext(JupStatsContext);
    return {
        volumeByPairs,
        topTokens,
        topBuys,
        topSells,
    };
};
export { JupStatsProvider, useJupStat };
