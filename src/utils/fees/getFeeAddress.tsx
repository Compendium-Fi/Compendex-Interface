import { Connection, PublicKey } from "@solana/web3.js";
import {

  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
} from "@solana/spl-token-v2";
//import { FEES } from "../../settings/fees";
export const FEES = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
export const FEES_BPS = parseInt("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
export const getFeeAddress = async (
  connection: Connection,
  mint: PublicKey,
  payer: PublicKey
) => {
  const ata = await getAssociatedTokenAddress(mint, FEES);
  const info = await connection.getAccountInfo(ata);

  if (!info || !info.data) {
    const ix = createAssociatedTokenAccountInstruction(payer, ata, FEES, mint);
    return { pubkey: ata, ix };
  }

  return { pubkey: ata, ix: undefined };
};
