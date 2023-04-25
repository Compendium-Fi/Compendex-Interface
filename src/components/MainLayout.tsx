import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { SnackbarProvider } from "notistack";
import { useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { BitpieWalletAdapter } from "@solana/wallet-adapter-bitpie";
import { BloctoWalletAdapter } from "@solana/wallet-adapter-blocto";
import { ExodusWalletAdapter } from "@solana/wallet-adapter-exodus";
import { LedgerWalletAdapter } from "@solana/wallet-adapter-ledger";
import { MathWalletAdapter } from "@solana/wallet-adapter-mathwallet";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import {
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
} from "@solana/wallet-adapter-sollet";
import { ConnectionProvider, useConnectionConfig } from "../utils/connection";
import { ReferrerProvider } from "../utils/referrer";

import { GlobalSwapProvider } from "@/context/GlobalSwap";
import { SideBarProvider } from "@/context/SideBar";
import { JupStatsProvider } from "@/context/jupStat";
import { JupiterApiProvider } from "@/context/jupiter";
import { ViewportProvider } from "@/context/viewPort";
import { useViewportSize } from "@mantine/hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import SidebBar from "../components/Sidebar";
import SplTokenProvider from "../context/tokenList";
require("@solana/wallet-adapter-react-ui/styles.css");

function AppImpl({ children }: { children: any }) {
  const { endpoint } = useConnectionConfig();
  const { width } = useViewportSize();
  const network = useMemo(() => endpoint as WalletAdapterNetwork, [endpoint]);
  const theme = createTheme({
    spacing: 0,

    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: 0,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#E2E8F0 !important",
            },
          },
          textColorPrimary: {
            color: "red",
          },
        },
      },
    },
  });
  const queryClient = new QueryClient();
  const wallets = useMemo(
    () => [
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new PhantomWalletAdapter(),
      new MathWalletAdapter(),
      new ExodusWalletAdapter(),
      new BloctoWalletAdapter(),
      new BitpieWalletAdapter(),
    ],
    [network]
  );
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        primaryColor: "dark",
        fontFamily: "Roboto",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Notifications />
      <ConnectionProvider>
        <ReferrerProvider>
          <WalletProvider wallets={wallets}>
            <WalletModalProvider>
              <SplTokenProvider>
                <SnackbarProvider>
                  <JupStatsProvider>
                    <GlobalSwapProvider
                      globalFromMint={
                        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
                      }
                      globalToMint={
                        "5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr"
                      }
                    >
                      {" "}
                      <JupiterApiProvider>
                        <ThemeProvider theme={theme}>
                          <ViewportProvider>
                            <SideBarProvider>
                              <QueryClientProvider client={queryClient}>
                                <div className="page">
                                  {width < 1000 ? <SidebBar /> : <div></div>}

                                  {children}
                                </div>
                              </QueryClientProvider>
                            </SideBarProvider>
                          </ViewportProvider>
                        </ThemeProvider>
                      </JupiterApiProvider>
                    </GlobalSwapProvider>
                  </JupStatsProvider>
                </SnackbarProvider>
              </SplTokenProvider>
            </WalletModalProvider>
          </WalletProvider>
        </ReferrerProvider>
      </ConnectionProvider>
    </MantineProvider>
  );
}

const MainLayout = ({ children }: { children: any }) => {
  return (
    <ConnectionProvider>
      <AppImpl>{children}</AppImpl>
    </ConnectionProvider>
  );
};
MainLayout.ssr = false;
export default MainLayout;
