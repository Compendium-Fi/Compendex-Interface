// TODO: replace this whole file with something more modern. This is all copied
//       from sollet.

import * as BufferLayout from "buffer-layout";
import { BN } from "@project-serum/anchor";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  AccountInfo as TokenAccount,
} from "@solana/spl-token-v1";
import { Connection, PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
export async function getOwnedAssociatedTokenAccounts(
  connection: Connection,
  publicKey: PublicKey
) {
  let filters = getOwnedAccountsFilters(publicKey);
  // @ts-ignore
  let resp = await connection.getProgramAccounts(TOKEN_PROGRAM_ID, {
    commitment: connection.commitment,
    filters,
  });

  const accs = resp
    .map(({ pubkey, account: { data, executable, owner, lamports } }: any) => ({
      publicKey: new PublicKey(pubkey),
      accountInfo: {
        data,
        executable,
        owner: new PublicKey(owner),
        lamports,
      },
    }))
    .map(({ publicKey, accountInfo }: any) => {
      return { publicKey, account: parseTokenAccountData(accountInfo.data) };
    });

  return (
    (
      await Promise.all(
        accs
          // @ts-ignore
          .map(async (ta) => {
            const ata = await Token.getAssociatedTokenAddress(
              ASSOCIATED_TOKEN_PROGRAM_ID,
              TOKEN_PROGRAM_ID,
              ta.account.mint,
              publicKey
            );
            return [ta, ata];
          })
      )
    )
      // @ts-ignore
      .filter(([ta, ata]) => ta.publicKey.equals(ata))
      // @ts-ignore
      .map(([ta]) => ta)
  );
}

const ACCOUNT_LAYOUT = BufferLayout.struct([
  BufferLayout.blob(32, "mint"),
  BufferLayout.blob(32, "owner"),
  BufferLayout.nu64("amount"),
  BufferLayout.blob(93),
]);

export function parseTokenAccountData(data: Buffer): TokenAccount {
  // @ts-ignore
  let { mint, owner, amount } = ACCOUNT_LAYOUT.decode(data);
  // @ts-ignore
  return {
    mint: new PublicKey(mint),
    owner: new PublicKey(owner),
    amount: new BN(amount),
  };
}

function getOwnedAccountsFilters(publicKey: PublicKey) {
  return [
    {
      memcmp: {
        // @ts-ignore
        offset: ACCOUNT_LAYOUT.offsetOf("owner"),
        bytes: publicKey.toBase58(),
      },
    },
    {
      dataSize: ACCOUNT_LAYOUT.span,
    },
  ];
}
export function isScientificNotation(num: number) {
  return num.toString().includes('e');
}
export function countTrailingZeros(num: number, exp: number) {
  console.log("Exp", exp)
  const realNum = num * Math.pow(10, exp);
  console.log("Real Number", realNum);
  const numStr = realNum.toString();
  const decimalIndex = numStr.indexOf('.');
  if (decimalIndex === -1) {
    return 0;
  }
  let count = 0;
  for (let i = numStr.length - 1; i > decimalIndex; i--) {
    if (numStr.charAt(i) === '0') {
      count++;
    } else {
      break;
    }
  }
  return count;
}
export function formatNumberWithSubscripts(num: number, trailingZeros: number) {
  const subscripts = ['\u2080', '\u2081', '\u2082', '\u2083', '\u2084', '\u2085', '\u2086', '\u2087', '\u2088', '\u2089'];
  const formattedNum = num.toFixed(trailingZeros).replace(/0|1|2|3|4|5|6|7|8|9/g, function (match) {
    const digit = Number(match);
    const subscriptIndex = Math.min(trailingZeros, subscripts.length - 1);
    return digit === 0 ? '0' : subscripts[digit] + subscripts[subscriptIndex];
  });
  return `0.${formattedNum}`;
}
export const getExponentiel = (num: number) => {
  const numStr = num.toString(); // Convert the number to a string
  const exponent = parseInt(numStr.substring(numStr.indexOf('e') + 1));
  return exponent;
}
export const convertNumber = (number: string) => {
  const num = new BigNumber(number);
  const numStr = num.toFixed(20); // Set the number of decimal places to 20
  console.log("STR", numStr)
  const match = numStr.match(/^0\.0+([1-9][0-9]*)$/); // Find the exponent using a regular expression
  if (match) {
    const exponent = parseInt(match[1], 10); // Extract the exponent as an integer
    const zeros = '0'.repeat(exponent - 1); // Create a string of zeros with length (exponent - 1)
    const numWithoutExp = numStr.replace(/e-\d+/, ''); // Remove the exponent from the string
    const formattedNum = `0.${zeros}${numWithoutExp}`; // Concatenate the zeros and the number
    console.log(formattedNum); // Output: 0.0₇15086
  }
}
function extractTrailingZerosAndDigits(numberString) {
  let integerPart = "";
  let trailingZeros = "";
  let nonZeroDigits = "";
  
  const decimalIndex = numberString.indexOf(".");
  if (decimalIndex >= 0) {
    const digits = numberString.slice(decimalIndex + 1);
    digits.split("").forEach((digit) => {
      if (digit === "0" && !nonZeroDigits) {
        trailingZeros += digit;
      } else {
        nonZeroDigits += digit;
      }
    });
    integerPart = numberString.slice(0, decimalIndex);
  } else {
    nonZeroDigits = numberString;
  }

  return [integerPart, trailingZeros, nonZeroDigits];
}
function getSubscriptForNumber(number) {
  const subscriptMap = {
    "0": "\u2080",
    "1": "\u2081",
    "2": "\u2082",
    "3": "\u2083",
    "4": "\u2084",
    "5": "\u2085",
    "6": "\u2086",
    "7": "\u2087",
    "8": "\u2088",
    "9": "\u2089",
  };

  let subscriptString = "";
  for (let digit of String(number)) {
    subscriptString += subscriptMap[digit];
  }
  return subscriptString;
}
export function convert(n) {
  let str = "";
  var sign = +n < 0 ? "-" : "",
    toStr = n.toString();
  if (!/e/i.test(toStr)) {
    str = n;
  }
  var [lead, decimal, pow] = n.toString()
    .replace(/^-/, "")
    .replace(/^([0-9]+)(e.*)/, "$1.$2")
    .split(/e|\./);
  str = +pow < 0 ?
    sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal :
    sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
  const [integerPart, trailingZeros, nonZeroDigits] = extractTrailingZerosAndDigits(str);
  console.log("INT",integerPart); // Output: "123"
  console.log("TRAILING",trailingZeros); // Output: "0000000"
  console.log("ZERO",nonZeroDigits); // Output: "11586"
  console.log("SubSript",getSubscriptForNumber(trailingZeros.length))
  return `${integerPart}.0${getSubscriptForNumber(trailingZeros.length)}${nonZeroDigits}`;
}

export function formatNumber(number) {
  // Remove the exponent from the number.
  var exponent = number.match(/e-(\d+)/)[1];
  number = number.slice(0, -exponent);

  // Multiply the number by 10 raised to the exponent.
  number *= Math.pow(10, exponent);

  // Convert the number to a string.
  var stringNumber = number.toString();

  // Pad the number with zeros to the left if it is less than 1.
  if (stringNumber.length < 7) {
    stringNumber = "0".repeat(7 - stringNumber.length) + stringNumber;
  }

  // Replace the decimal point with a ₇.
  stringNumber = stringNumber.replace(".", "₇");

  // Return the formatted number.
  return stringNumber;
}
export function displayTrailingZeros(numberString) {
  console.log("Numbers", numberString);
  const match = numberString.match(/\.?0*$/);
  if (match) {
    const numZeros = match[0].length;
    const subscriptZeros = numZeros.toString().split("").map(d => String.fromCharCode(8320 + parseInt(d))).join("");
    const nonZeroDigits = numberString.replace(/\.?0*$/, "").replace(/^0+/, "");
    return `0.0${subscriptZeros}${nonZeroDigits}`;
  }
  return numberString;
}