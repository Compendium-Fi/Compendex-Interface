import { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { getAccount } from "@solana/spl-token-v2";
import { useConnection } from "@/utils/connection";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTokenList } from "@/context/tokenList";
import { TokenInfo } from "@solana/spl-token-registry";
type TokenBalance = {
  decimals: number;
  amount: number;
};

export const useTokenAccountBalance = (
  tokenAccountAddress: string
): TokenBalance | undefined => {
  const [balance, setBalance] = useState<TokenBalance>();
  const connection = useConnection();
  const wallet = useWallet();
  const { splTokenList } = useTokenList();

  useEffect(() => {
    const tokenAccountPubkey = new PublicKey(tokenAccountAddress);
    const tokenInfo: TokenInfo = splTokenList.find(
      (elm: TokenInfo) => elm.address == tokenAccountAddress
    );

    const fetchBalance = async () => {
      try {
        const walletAccountInfo = await connection.getAccountInfo(
          wallet.publicKey
        );
        if (!walletAccountInfo) {
          console.error(
            `Could not retrieve account info for wallet: ${wallet.publicKey.toBase58()}`
          );
          return;
        }

        const tokenAccountInfo = await getAccount(
          connection,
          tokenAccountPubkey
        );
        const tokenAmount =
          Number(tokenAccountInfo.amount) / Math.pow(10, tokenInfo.decimals);

        setBalance({
          decimals: tokenInfo.decimals,
          amount: tokenAmount,
        });
      } catch (err) {
        console.error(`Failed to retrieve token balance: ${err}`);
      }
    };

    fetchBalance();

    const intervalId = setInterval(() => {
      fetchBalance();
    }, 5000); // Refresh balance every 5 seconds

    return () => clearInterval(intervalId);
  }, [tokenAccountAddress]);

  return balance;
};

  
