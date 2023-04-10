//import { InlineResponseDefaultMarketInfos } from "@jup-ag/api";
import { TokenInfo } from "@solana/spl-token-registry";
import { formatTokens, formatRoute } from "../../../utils/swap-route";
import clsx from "clsx";
import { useSwapStyles } from "@/components/styles";

export const SwapRoute = ({
  selected,
  route,
  tokenMap,
  amount,
  isBestRoute,
}: {
  selected: boolean;
  route: any[];
  tokenMap: Map<string, TokenInfo>;
  amount: number;
  isBestRoute?: boolean;
}) => {
  const { classes, cx } = useSwapStyles();
  return (
    <div
      className={selected ? classes.routeStyleSelected : classes.routeStyle}
    >


      <div style={{ display: 'flex', flexDirection: 'column', padding: "0.2em", justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <span style={{ fontWeight: '500', 'fontFamily': 'Roboto', 'color': '#FFF', fontSize: 14, textAlign: "left" }}>{formatRoute(route)}</span>
        <span style={{ fontWeight: '500', 'fontFamily': 'Roboto', 'color': '#FFF', fontSize: 14, textAlign: "left" }}>
          {formatTokens(tokenMap, route)}
        </span>
      </div>
      {/* Output amount */}
      <h5 style={{
        marginBottom: "0.5em",
        color: "rgba(255, 255, 255, 0.85)",
        fontWeight: "bold",
        fontSize: '1.25rem'
      }}>{amount}</h5>

    </div>
  );
};
