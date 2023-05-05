import { CustomMarketInfo, MarketInfo } from "./types";

// export const customMarketsList: CustomMarketInfo[] = [
//   {
//     address: "GREiyoFSEM7zMce3VugkCggdUYXVK5MijJgGwn7DkVPF",
//     name: "ETHBULL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "ETHBULL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "J2eCTuKaABG91kCzJset2UfQRoggHcY2Cq7Stu7natXr",
//     name: "IBVOL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "IBVOL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "EnDY66AMMan9FFntp2nNrLW8E8qsXK9Cxi6GZ5QCgRXz",
//     name: "BCHBULL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BCHBULL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "7ygqNwjA94Qu8YKxB8j2ePXYEFyWLcYGUUCVzV9puAhJ",
//     name: "MAPSPOOL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MAPSPOOL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "G1uoNqQzdasMUvXV66Eki5dwjWv5N9YU8oHKJrE4mfka",
//     name: "OXYPOOL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "OXYPOOL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "3V2sfA9rCnBwjfqGca2UDxD4fVvPXW9GNAQCqAepKC9Q",
//     name: "RAYPOOL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "RAYPOOL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "CjsuF2gB28KqgniogCbbpp7FDMBwAkTawEN3gYKsgfS8",
//     name: "SECO/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SECO",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9MFFsTVgw6gKPZ1rpc6CSJSLaiNAonChcS7zCCMrAwEP",
//     name: "CEL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "CEL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "GJWnwZJ599xjf7cRPP93aaVKqD5xUG5PBLNypHgPxitF",
//     name: "PAXG/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "PAXG",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "E6umfgnsastaGANjpvzb15jaXdZH1wsg4ENHARgbjqUz",
//     name: "GRT/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "GRT",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "QzB9DfWbNAUpfkwLNMLGfkK1AM2zttkMYGSwx5iCnGe",
//     name: "HOLY/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "HOLY",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "4FPFh1iAiitKYMCPDBmEQrZVgA1DVMKHZBU2R7wjQWuu",
//     name: "LQID/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "LQID",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "7AHAKkL94Mx2VAkQb2kk74oNsxDnQ6aab4XwKwisfFdB",
//     name: "PERP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "PERP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "CAww1itfT8rFeTCJCLZqTq9anZ7FpC8NzULNLcJMG4Qa",
//     name: "AAVE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "AAVE",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Dbyf1PPrAXfMe1LdEq57QW9GY1D4nNEt2fKVGEo6S3MU",
//     name: "COMP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "COMP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep",
//     name: "RAY/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "RAY",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Cm4MmknScg7qbKqytb1mM92xgDxv3TNXos4tKbBqTDy7",
//     name: "RAY/SRM",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "RAY",
//     quoteLabel: "SRM",
//   },
//   {
//     address: "6jx6aoNFbmorwyncVP5V5ESKfuFc9oUYebob1iF6tgN4",
//     name: "RAY/ETH",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "RAY",
//     quoteLabel: "ETH",
//   },
//   {
//     address: "C6tp2RVZnxBPFbnAsfTjis8BN9tycESAT4SgDQgbbrsA",
//     name: "RAY/SOL",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "RAY",
//     quoteLabel: "SOL",
//   },
//   {
//     address: "3BqiaptVkdDCJWz3gea31z1tC3qYfBktUffrSjXjYHWy",
//     name: "IBVOL/USDT",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "IBVOL",
//     quoteLabel: "USDT",
//   },
//   {
//     address: "9wH4Krv8Vim3op3JAu5NGZQdGxU8HLGAHZh3K77CemxC",
//     name: "FIDA/RAY",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "FIDA",
//     quoteLabel: "RAY",
//   },
//   {
//     address: "Fcxy8qYgs8MZqiLx2pijjay6LHsSUqXW47pwMGysa3i9",
//     name: "KIN/RAY",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "KIN",
//     quoteLabel: "RAY",
//   },
//   {
//     address: "HcVjkXmvA1815Es3pSiibsRaFw8r9Gy7BhyzZX83Zhjx",
//     name: "OXY/RAY",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "OXY",
//     quoteLabel: "RAY",
//   },
//   {
//     address: "7Q4hee42y8ZGguqKmwLhpFNqVTjeVNNBqhx8nt32VF85",
//     name: "MAPS/RAY",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MAPS",
//     quoteLabel: "RAY",
//   },
//   {
//     address: "4Sg1g8U2ZuGnGYxAhc6MmX9MX7yZbrrraPkCQ9MdCPtF",
//     name: "ROPE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "ROPE",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "97qCB4cAVSTthvJu3eNoEx6AY6DLuRDtCoPm5Tdyg77S",
//     name: "STEP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "STEP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "6xC1ia74NbGZdBkySTw93wdxN4Sh2VfULtXh1utPaJDJ",
//     name: "YFI/SRM",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "YFI",
//     quoteLabel: "SRM",
//   },
//   {
//     address: "CDvQqnMrt9rmjAxGGE6GTPUdzLpEhgNuNZ1tWAvPsF3W",
//     name: "FTT/SRM",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "FTT",
//     quoteLabel: "SRM",
//   },
//   {
//     address: "HfsedaWauvDaLPm6rwgMc6D5QRmhr8siqGtS6tf2wthU",
//     name: "BTC/SRM",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BTC",
//     quoteLabel: "SRM",
//   },
//   {
//     address: "FGYAizUhNEC9GBmj3UyxdiRWmGjR3TfzMq2dznwYnjtH",
//     name: "SUSHI/SRM",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SUSHI",
//     quoteLabel: "SRM",
//   },
//   {
//     address: "FafaYTnhDbLAFsr5qkD2ZwapRxaPrEn99z59UG4zqRmZ",
//     name: "LINK/SRM",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "LINK",
//     quoteLabel: "SRM",
//   },
//   {
//     address: "FR3SPJmgfRSKKQ2ysUZBu7vJLpzTixXnjzb84bY3Diif",
//     name: "SAMO/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SAMO",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "FfiqqvJcVL7oCCu8WQUMHLUC2dnHQPAPjTdSzsERFWjb",
//     name: "MEDIA/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MEDIA",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "8GufnKq7YnXKhnB3WNhgy5PzU9uvHbaaRrZWQK6ixPxW",
//     name: "TULIP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "TULIP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "GqQLxU1Dc6a7NYWRWdgbcGSTHirjy4quFivxXJGDzDCz",
//     name: "MERPOOL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MERPOOL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "GekRdc4eD9qnfPTjUMK5NdQDho8D9ByGrtnqhMNCTm36",
//     name: "SLIM/SOL",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SLIM",
//     quoteLabel: "SOL",
//   },
//   {
//     address: "Eg35DZcYLx6JvZfrEAWgDPfSXJbx2N7hbEwVD56RiXnk",
//     name: "SNYPOOL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SNYPOOL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "GX26tyJyDxiFj5oaKvNB9npAHNgdoV9ZYHs5ijs5yG2U",
//     name: "APEX/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "APEX",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "FLKUQGh9VAG4otn4njLPUf5gaUPx5aAZ2Q6xWiD3hH5u",
//     name: "LIQ/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "LIQ",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "7gZNLDbWE73ueAoHuAeFoSu7JqmorwCLpNTBXHtYSFTa",
//     name: "CCAI/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "CCAI",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Cud48DK2qoxsWNzQeTL5D8sAiHsGwG8Ev1VMNcYLayxt",
//     name: "FAB/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "FAB",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "8N1KkhaCYDpj3awD58d85n973EwkpeYnRp84y1kdZpMX",
//     name: "ORCA/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "ORCA",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Aubv1QBFh4bwB2wbP1DaPW21YyQBLfgjg8L4PHTaPzRc",
//     name: "SUNNY/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SUNNY",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "7MmPwD1K56DthW14P1PnWZ4zPCbPWemGs3YggcT1KzsM",
//     name: "BOP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BOP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "2Si6XDdpv5zcvYna221eZZrsjsp5xeYoz9W1TVdMdbnt",
//     name: "FROG/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "FROG",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "CwK9brJ43MR4BJz2dwnDM7EXCNyHhGqCJDrAdsEts8n5",
//     name: "WOOF/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "WOOF",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "FhiqrjSsQuEEe2FUMxzkwFadsAwA9ea9YMJLivEFKFbQ",
//     name: "sCAT/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "sCAT",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "7MtgLYSEgsq626pvcEAwaDqs2KiZsaJUX2qGpRZbcDWY",
//     name: "DGEN/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "DGEN",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "4zffJaPyeXZ2wr4whHgP39QyTfurqZ2BEd4M5W6SEuon",
//     name: "SOLAPE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SOLAPE",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9fe1MWiKqUdwift3dEpxuRHWftG72rysCRHbxDy6i9xB",
//     name: "CATO/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "CATO",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9G2bAA5Uv8JyPZteuP73GJLUGg5CMbhMLCRSBUBLoXyt",
//     name: "SHBL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SHBL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "HSpeWWRqBJ4HH2FPyfDhoN1AUq3gYoDenQGZASSqzYW1",
//     name: "MOLA/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MOLA",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "HSfEpP3ciPBC5bBdtjBDa8BxsUW32zUzRGLPpPuDyVY4",
//     name: "SLIM/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SLIM",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "6hwK66FfUdyhncdQVxWFPRqY8y6usEvzekUaqtpKEKLr",
//     name: "SAIL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SAIL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "4vvPk9cDzYVSs2rygf2gWAhRVo5DFYtFMSgz5FzypCcs",
//     name: "BHOG/SOL",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BHOG",
//     quoteLabel: "SOL",
//   },
//   {
//     address: "E3U6GzZwQMDXtd7ABdsfxYx6oeLyaeh6dc6Ez91ZXQrG",
//     name: "ACMN/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "ACMN",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "J4oPt5Q3FYxrznkXLkbosAWrJ4rZLqJpGqz7vZUL4eMM",
//     name: "NINJA/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "NINJA",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "BeF2PKq2jmTJraWEhP28H8BQHUVtuzTyFogtKkxi6D6",
//     name: "LARIX/USDT",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "LARIX",
//     quoteLabel: "USDT",
//   },
//   {
//     address: "CsNZMtypiGgxm6JrmYVJWnLnJNsERrmT3mQqujLsGZj",
//     name: "PRT/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "PRT",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "2Ux1EYeWsxywPKouRCNiALCZ1y3m563Tc4hq1kQganiq",
//     name: "WOO/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "WOO",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9cuBrXXSH9Uw51JB9odLqEyeF5RQSeRpcfXbEW2L8X6X",
//     name: "SYP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SYP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "DNxn3qM61GZddidjrzc95398SCWhm5BUyt8Y8SdKYr8W",
//     name: "ALM/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "ALM",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Gne8eeLRXF4PgY3N3L2sMsaWDGJgoWZuPDTm7n6p1oe8",
//     name: "MEOW/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MEOW",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "G3Bss3a2tif6eHNzWCh14g5k2H4rwBAmE42tbckUWG5T",
//     name: "INU/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "INU",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "KrGK6ZHyE7Nt35D7GqAKJYAYUPUysGtVBgTXsJuAxMT",
//     name: "CAVE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "CAVE",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Ak1UDskYAjztX5YkxW8dmERjLwS9fYmk1b3G6fpWDxp6",
//     name: "POLE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "POLE",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9tr5uMYHgtJ5yG4SeqHA6kJUdzXrK6QCNGYgewQevuuS",
//     name: "BIP/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BIP",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "7oFXusrpvDzbY6gMM81RjS6YEALETXTwWdUKXXBVojgu",
//     name: "BULL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BULL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9oCx3vFm5ERDVdjmJHsqE5BJ4eLP4g1aTpf5T4RyRqVy",
//     name: "CKG/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "CKG",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "eju5JDyaf29jYNfq7VrVAocVxGayDEHVHHiM7MYc331",
//     name: "WAGMI/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "WAGMI",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "4M1uP9mYnbraCvw4JuiqFas63K1o74LeoJwpVDW3AAmG",
//     name: "FUM/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "FUM",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "4JP75nztBEo5rYhW1LTQyc4qfjPB33jMWEUvp2DGrQQR",
//     name: "FTR/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "FTR",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "Dvm8jjdAy8uyXn9WXjS2p1mcPeFTuYS6yW2eUL9SJE8p",
//     name: "BOKU/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "BOKU",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9oXkdAWFyjDH8BbYrDVJ77r6GWPmUWo9ZYYpE25SZ2td",
//     name: "KURO/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "KURO",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "2wgi2FabNsSDdb8dke9mHFB67QtMYjYa318HpSqyJLDD",
//     name: "GOFX/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "GOFX",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "BHqcTEDhCoZgvXcsSbwnTuzPdxv1HPs6Kz4AnPpNrGuq",
//     name: "WAG/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "WAG",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "HYM1HS6MM4E1NxgHPH4Wnth7ztXsYTpbB2Rh9raje8Xq",
//     name: "SOLC/USDT",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SOLC",
//     quoteLabel: "USDT",
//   },
//   {
//     address: "85CTDt8gNfJhmqE3Xm2smDm54HmeT1jvLfPVBTkX8BTX",
//     name: "CAPE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "CAPE",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "3DEfX1JPAPWKgeBW2XUr7Z1ztNNwbYhhD5EinGC7x1Lf",
//     name: "WEED/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "WEED",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "8pJg7JGfvEfBc14a9wtfAi39doTEeyJHMwqdJrtxsqVx",
//     name: "SINU/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SINU",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "ArKuemtzjpqP5H3P4S21nzhtLZtsq7nMCN6ecA9yvMX9",
//     name: "SCUM/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SCUM",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "6zH7zwXKyTCUFEGGSjzr4ndegLLPGRAhT2mfcWc6wP1w",
//     name: "KINGSHIB/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "KINGSHIB",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "HY9J1nsJxrem6w4uBRaWi2A7iNruNFEooMFopfM584Mv",
//     name: "PART/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "PART",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "91WiupLKLjP8ENihdgiZ53j49aosNm1EYXdLbRD6GAY4",
//     name: "SHIBETOSHI/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SHIBETOSHI",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9BrQcZ8wMDJ7ibsQKckCd85x5mkqEXL56hnTuvyziPY3",
//     name: "SolBullDog/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "SolBullDog",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "ESd3PskTov69tkW5MmfdV8K7hXR35EXRYorWMNn61dD3",
//     name: "PIXL/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "PIXL",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "HCvX4un57v1SdYQ2LFywaDYyZySqLHMQ5cojq5kQJM3y",
//     name: "RUN/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "RUN",
//     quoteLabel: "USDC",
//   },
//   {
//     address: "9d2NsCGUidYc4b4JD8vc9hbhm1HdTfGpCByUAUakGHCB",
//     name: "MONGOOSE/USDC",
//     programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
//     baseLabel: "MONGOOSE",
//     quoteLabel: "USDC",
//   },
// ];

export const customMarketsList: CustomMarketInfo[] = [
  {
    address: "B2na8Awyd7cpC59iEU43FagJAPLigr3AP3s38KM982bu",
    name: "USDT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDT",
    quoteLabel: "USDC"
  },
  {
    address: "8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "72h8rWaWwfPUL36PAFqyQZU8RT1V3FKG7Nc45aK89xTs",
    name: "RLB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RLB",
    quoteLabel: "USDC"
  },
  {
    address: "12AfsfsLBp2cFPNSdQYNJndyPBfvgA14VXzzq6hX699n",
    name: "ISC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ISC",
    quoteLabel: "USDC"
  },
  {
    address: "CFW3YFB4uN1NWFDYmcKmT9qA3iyi3L5Bz9QJNjKQAWeS",
    name: "PRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRT",
    quoteLabel: "USDC"
  },
  {
    address: "EUwL9Lgxcx4V3r8tRQVb5N79XUQQRHwffSjUHcR12nw9",
    name: "GOD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOD",
    quoteLabel: "USDC"
  },
  {
    address: "DZjbn4XC8qoHKikZqzmhemykVzmossoayV9ffbsUqxVj",
    name: "RAY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "USDC"
  },
  {
    address: "ArqzdSawkYQQNXUsef2Ndj6fcnNktgyzPuT1ouNZwj4E",
    name: "PRISM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRISM",
    quoteLabel: "USDC"
  },
  {
    address: "GpHbiJJ9VHiuHVXeoet121Utrbm1CSNNzYrBKB8Xz2oz",
    name: "RAY/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "USDT"
  },
  {
    address: "9Lyhks5bQQxb9EyyX55NtgKQzpM4WK7JCmeaWuQ5MoXD",
    name: "mSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "mSOL",
    quoteLabel: "USDC"
  },
  {
    address: "3NnxQvDcZXputNMxaxsGvqiKpqgPfSYXpNigZNFcknmD",
    name: "MNGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNGO",
    quoteLabel: "USDC"
  },
  {
    address: "7vLJCTpXcF4Tr4Nt42PyPQCcQud3MMQ6cuYd9bqzfxbQ",
    name: "xLFNTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "xLFNTY",
    quoteLabel: "USDC"
  },
  {
    address: "JCKa72xFYGWBEVJZ7AKZ2ofugWPBfrrouQviaGaohi3R",
    name: "stSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "stSOL",
    quoteLabel: "USDC"
  },
  {
    address: "2AdaV97p6SfkuMQJdu8DHhBhmJe7oWdvbm52MJfYQmfA",
    name: "SOL/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDT"
  },
  {
    address: "8rUvvjhtyjiJYTVhNn8usWDAQn1RHwt2adChzk7ANeT4",
    name: "SOLAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAPE",
    quoteLabel: "USDC"
  },
  {
    address: "CQyhWBaaVRgtLfRegX94JjMxixxKun4Eq3r7wbDSW7LZ",
    name: "LSTAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LSTAR",
    quoteLabel: "USDC"
  },
  {
    address: "8PhnCfgqpgFM7ZJvttGdBVMXHuU4Q23ACxCvWkbs1M71",
    name: "Bonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "USDC"
  },
  {
    address: "FfP1cFGHeUfJmJKWhEvA8eUArCQvVgVHodt2AfLdWMdf",
    name: "BASIS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BASIS",
    quoteLabel: "USDC"
  },
  {
    address: "Epg66q6wPQbNyyegh8ZiP3iAgway4XFPS99UU3fzMaee",
    name: "LMDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDA",
    quoteLabel: "USDC"
  },
  {
    address: "4JGMRnbJY6cLTwptAtCiP7YotNWkHJcriJKfwM6VwXpm",
    name: "SHDW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHDW",
    quoteLabel: "USDC"
  },
  {
    address: "BwHHudndUcnsTJSivMwfTywaZMd9gFp3tMTAV5YKdmga",
    name: "HADES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HADES",
    quoteLabel: "USDC"
  },
  {
    address: "xLUHbyZwW6DYSnnhzJQMmRoDqQGdT2wAqwAwPbivb9R",
    name: "PCN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PCN",
    quoteLabel: "USDC"
  },
  {
    address: "6YJNt7nvB6WpFDPD7nBcun31QnHcmYRxomHD63TjehSq",
    name: "CMPN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMPN",
    quoteLabel: "USDC"
  },
  {
    address: "FWa74cVQcMA4BjiJnb9vrTFLZsFSRNzDcTFwyNYcXfqX",
    name: "DEO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEO",
    quoteLabel: "USDC"
  },
  {
    address: "BbJgE7HZMaDp5NTYvRh5jZSkQPVDTU8ubPFtpogUkEj4",
    name: "ETH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ETH",
    quoteLabel: "USDC"
  },
  {
    address: "HFZtxFAKcrEwjgUTrmCHhHWbVtDAWMV491QLQkXADBRq",
    name: "DXL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DXL",
    quoteLabel: "USDC"
  },
  {
    address: "3BAKsQd3RuhZKES2DGysMhjBdwjZYKYmxRqnSMtZ4KSN",
    name: "WBTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WBTC",
    quoteLabel: "USDC"
  },
  {
    address: "9PMryTdkTLZ1A1bDmyB1ydeQpKCmWfThmoAd4Jrev7LL",
    name: "FOXY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXY",
    quoteLabel: "USDC"
  },
  {
    address: "Hs97TCZeuYiJxooo3U73qEHXg3dKpRL4uYKYRryEK9CF",
    name: "Bonk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "SOL"
  },
  {
    address: "FZxi3yWkE5mMjyaZj6utmYL54QQYfMCKMcLaQZq4UwnA",
    name: "ETH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ETH",
    quoteLabel: "USDC"
  },
  {
    address: "H6rrYK3SUHF2eguZCyJxnSBMJqjXhUtuaki6PHiutvum",
    name: "DUAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUAL",
    quoteLabel: "USDC"
  },
  {
    address: "9tJB1d9LMt6rbZyYxivKGzKKFogfsxyroJpkYLsSN13Z",
    name: "FTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FTR",
    quoteLabel: "USDC"
  },
  {
    address: "3vtRgLDesutQdwotnoUuSMuKKj8YJAE85s938mGKfxXZ",
    name: "scnSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "scnSOL",
    quoteLabel: "USDC"
  },
  {
    address: "DyxxAFYmM8BEBmKYAmY2BYHjwKXyfXEibtUYiX6G1K4J",
    name: "LMDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDA",
    quoteLabel: "USDC"
  },
  {
    address: "GRrKTLEdEBDQuk6fw9NM7smPwL7CVfUR1C1MpLPx4fM2",
    name: "JELLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JELLY",
    quoteLabel: "USDC"
  },
  {
    address: "JAmhJbmBzLp2aTp9mNJodPsTcpCJsmq5jpr6CuCbWHvR",
    name: "JitoSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JitoSOL",
    quoteLabel: "USDC"
  },
  {
    address: "VbyGHa4d5g7WPf142Wafmsn2kwLfMQe1pC91uqUpkG2",
    name: "$LUV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "$LUV",
    quoteLabel: "USDC"
  },
  {
    address: "9fD2u4PbBoN8y3vvAtLMpVDFw2ThPWA11PV6CcsiSnu5",
    name: "DOGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "USDC"
  },
  {
    address: "H6gnTgzKBMAMK9t4LXYuV2pXu2iT9jPPtDSK8YWzsTKL",
    name: "SAIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAIL",
    quoteLabel: "USDC"
  },
  {
    address: "5vxmzF9aTVFxzpTfSKpSVa6VbzZ4nDNBh8Tfrj6Xcptp",
    name: "TAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TAKI",
    quoteLabel: "USDC"
  },
  {
    address: "CxmAnSE9FeHfmMzwqC2YTPWQH7gxkX5SVZQF2mm1nVsG",
    name: "RRR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RRR",
    quoteLabel: "USDC"
  },
  {
    address: "5xCudgPvVetTL3M4ExtPuAFTnCr2hdQ3cte9LhGAuBee",
    name: "ARB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARB",
    quoteLabel: "USDC"
  },
  {
    address: "ByHRAM6pcfmrqyfSJtJ3JLsrEhkmTsWk86Urt2sjXZWo",
    name: "DROID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DROID",
    quoteLabel: "USDC"
  },
  {
    address: "63XwffQkMcNqEacDNhixmBxnydkRE3uigV7VoLNfqh9k",
    name: "GUAC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GUAC",
    quoteLabel: "USDC"
  },
  {
    address: "7oVs3vhJyyrog5BATkdbykEM94e9xdBT5M74sAPK4rMY",
    name: "BOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOO",
    quoteLabel: "USDC"
  },
  {
    address: "Gmjq4394AB5eVtL4ELTraDVgXAn62Mk4r58H3xW5aTAe",
    name: "SDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "E5AmUKMFgxjEihVwEQNrNfnri5EexYHSBC4HkicVtfxG",
    name: "SAMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMO",
    quoteLabel: "USDC"
  },
  {
    address: "HWvGEZcF6kQD4DoqMDbSQhFaLJhU7yy5ZicLUEkTirpt",
    name: "Solge/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solge",
    quoteLabel: "USDC"
  },
  {
    address: "HTHMfoxePjcXFhrV74pfCUNoWGe374ecFwiDjPGTkzHr",
    name: "SLND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLND",
    quoteLabel: "USDC"
  },
  {
    address: "GfVBNfqWbEUpJcjDbxUcnzRZcPvyt85o2K4Y6tMUifCT",
    name: "XSB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XSB",
    quoteLabel: "USDC"
  },
  {
    address: "EWbvXyL8q8fW2VckujQFbBimknfwvmQFt8bLUakkdvJG",
    name: "FISHY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FISHY",
    quoteLabel: "SOL"
  },
  {
    address: "v2VwSbCzfUyCgTPGVq9AFUZ9KTiY4nZQ7kLx4tFLga7",
    name: "RUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUFF",
    quoteLabel: "USDC"
  },
  {
    address: "AYhLYoDr6QCtVb5n1M5hsWLG74oB8VEz378brxGTnjjn",
    name: "mSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "mSOL",
    quoteLabel: "SOL"
  },
  {
    address: "HH9grkdW6LPTebSZugQtNd5ZVyC1rHYdYn9jwvTeNan4",
    name: "UXP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UXP",
    quoteLabel: "USDC"
  },
  {
    address: "ARjaHVxGCQfTvvKjLd7U7srvk6orthZSE6uqWchCczZc",
    name: "bSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bSOL",
    quoteLabel: "USDC"
  },
  {
    address: "HpGFNsL52wCh62ojajqpka4AMrL4ngkwMoVDiUEF2qPR",
    name: "FLTH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLTH",
    quoteLabel: "USDC"
  },
  {
    address: "HNpTdCRyqJwUKeh4cRb9fwmmSh6ekDm8rnP8VV21xN7A",
    name: "RLB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RLB",
    quoteLabel: "SOL"
  },
  {
    address: "BUmTXSXPJcwSFthUxdpNHqHYp8GezyHRUMdcbFgXATGY",
    name: "USH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USH",
    quoteLabel: "USDC"
  },
  {
    address: "56ZNe9c73XrizrXXqzPd9xdjNPGpxsWbiV4RszFKfBL8",
    name: "RAY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "USDC"
  },
  {
    address: "BEhRuJZiKwTdVTsGYjbHRh9RmGbKBtT6xo7yPqxLiSSY",
    name: "ORCA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORCA",
    quoteLabel: "USDC"
  },
  {
    address: "68PcB6aNMDnXfSjTsT2uCZvzDj8cecsGhFvZNDvjpRiB",
    name: "DXE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DXE",
    quoteLabel: "USDC"
  },
  {
    address: "5GFprHJYh8vEyR5424eKqxZfW79r7cY1SeSGhusFwTE3",
    name: "PPMAX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPMAX",
    quoteLabel: "USDC"
  },
  {
    address: "4mpA41oqnUzBC3Pe238hhCASdHqUSRZ2XzGSGvD6DDd5",
    name: "KINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINU",
    quoteLabel: "USDC"
  },
  {
    address: "7aKqVcg1ShteRq4xagVkJQDU6V7J95CCWZWhY7b6kUSf",
    name: "YAKU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YAKU",
    quoteLabel: "SOL"
  },
  {
    address: "ARGpHsbV4Q6LNdfWhbrut3eWY7UzYPLxugSk42qU2GKG",
    name: "SWOLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWOLE",
    quoteLabel: "USDC"
  },
  {
    address: "67sQMpGvvDC2wqQpVF74pY9z2rcp6YbXQykoyDWadh5n",
    name: "RRR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RRR",
    quoteLabel: "USDC"
  },
  {
    address: "CrT8zNvnXGGtjKB7vfwhEpZHCLFYyLMiu3VdTMJXHjWX",
    name: "Bonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "USDC"
  },
  {
    address: "955tee81FpayQorU5JkHHBUqmFN6diKKGRupf9fRUDGU",
    name: "NAXAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NAXAR",
    quoteLabel: "USDC"
  },
  {
    address: "E856D5pa4xqrd8VH762jDQhTt3ty8e4MtqxPwxyGvj39",
    name: "AXXO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AXXO",
    quoteLabel: "USDC"
  },
  {
    address: "DgqN7pf28wRTburaPkADuQffaGWTdAEp1xosYAEibeLv",
    name: "CATO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATO",
    quoteLabel: "USDC"
  },
  {
    address: "C3Hv6qZfoB2TxDQBy8UWJ3y1q4kZhMHsp1goLq3sb7xu",
    name: "NRA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NRA",
    quoteLabel: "USDC"
  },
  {
    address: "GVr5TwCrSxEkjoWXLbCubw9W3f2UN8Pad1TUkVRaKpt8",
    name: "KNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNK",
    quoteLabel: "USDC"
  },
  {
    address: "HE1nibjUq5cTi6Zer5679od58PDAjtPAjTetUuV5XMPn",
    name: "MOLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOLA",
    quoteLabel: "USDC"
  },
  {
    address: "2eSZySzRb6w7RrwbgVgrcPYLvtp5v8jBjsp387FbFtNn",
    name: "scnSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "scnSOL",
    quoteLabel: "SOL"
  },
  {
    address: "iufycE4CrRMVHkgym27q28SEyCZ3ZHsN3rLxbPXA7m2",
    name: "WOOF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOF",
    quoteLabel: "USDC"
  },
  {
    address: "2Phc2CveyCvDoweTyG7oAzzPc8hgeSQB1u1M5pwZySYn",
    name: "sAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sAPE",
    quoteLabel: "USDC"
  },
  {
    address: "Ec9RC6WcUWftYvAcc5Ykys1XcMRvtDfqi7QY4c6dLiPs",
    name: "DUST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUST",
    quoteLabel: "USDC"
  },
  {
    address: "C5CXMmfViPnfcdN1Tac5SMGnwD1JCfhxd847i7JdNGpu",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "CK1X54onkDCqVnqY7hnvhcT7EosnjiLTwPBXAMLxkA2A",
    name: "HNT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNT",
    quoteLabel: "USDC"
  },
  {
    address: "8hbciUHgDWP8nvRWZBkrnWqyc94HqVhnUsRW76m75oMd",
    name: "VIVAION/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VIVAION",
    quoteLabel: "USDC"
  },
  {
    address: "FV5VC1EPe8phpEDfyHDaBPBGKhyjC6YmS3qMWimmbG5j",
    name: "dabloons/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "dabloons",
    quoteLabel: "USDC"
  },
  {
    address: "ANfsxYcGZrG73yHQ767UXNNtzDNvo2EBqrKUC3VxLyeg",
    name: "HALO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HALO",
    quoteLabel: "USDC"
  },
  {
    address: "AX3cVYQvPsUXSLaR57T8Fxrn7mir2HJdoDgwdfa6nVGA",
    name: "RAY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "SOL"
  },
  {
    address: "9zbwg2AnUNmD3jhuGDqL3YHtBvD1q9mVmWNVTfXcngoH",
    name: "WOB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOB",
    quoteLabel: "USDC"
  },
  {
    address: "39riMgb5VMiLR4vRC9gHnG5BPufha7sRf7o3K4dntFzG",
    name: "RLB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RLB",
    quoteLabel: "USDC"
  },
  {
    address: "7w5egrQCAaRKvgBbVuFCPt4A2S1EjvLCoYtout8X6uv8",
    name: "YAKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YAKU",
    quoteLabel: "USDC"
  },
  {
    address: "EgKZvdkgBaLou42YFwgFQdydcTsdiZ69VhiRK8n6bRYr",
    name: "TUNE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TUNE",
    quoteLabel: "USDC"
  },
  {
    address: "GYzKEcWKo5LJ3GxguJGLw1qQyEeL2CbEmUuZR9HdDALB",
    name: "ETH/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ETH",
    quoteLabel: "USDT"
  },
  {
    address: "3vBX5vv4cdaNkYzFznwk2EGT8RuZLuJyVB78G9D9duLA",
    name: "SLND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLND",
    quoteLabel: "USDC"
  },
  {
    address: "BNjAHrQnNuMwXorkQtsEhQhEd6oAD8XMxf5c2RnbWkk",
    name: "GST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GST",
    quoteLabel: "USDC"
  },
  {
    address: "GMhMvAVkE1nvnsdV1rV2Whw2AxHsKGQ9z3kB53X9WURE",
    name: "WBTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WBTC",
    quoteLabel: "USDC"
  },
  {
    address: "493N7GusNrCzHKCWuJxVkpHF6qyyAYHs9MmDFudHkTwS",
    name: "BOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOO",
    quoteLabel: "USDC"
  },
  {
    address: "DWHZ25X5BPwHRkDGGcffVLey41adWABpnNK9tyjyNaH9",
    name: "DUST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUST",
    quoteLabel: "USDC"
  },
  {
    address: "HCoguCk7WFARMZxZNyAfqTjxaWft5QDStuYbN4JpU1iS",
    name: "HONEY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HONEY",
    quoteLabel: "USDC"
  },
  {
    address: "8BadC3RwT7dgX9VK5BGM99vaPk27bHf3WSwY41F2vQqZ",
    name: "MAYO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAYO",
    quoteLabel: "USDC"
  },
  {
    address: "5mWtpKm3j8Mh6XANBDozwfBfTeELREKJUAP2MsusWdWx",
    name: "JitoSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JitoSOL",
    quoteLabel: "USDC"
  },
  {
    address: "6QNusiQ1g7fKierMQhNeAJxfLXomfcAX3tGRMwxfESsw",
    name: "bSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bSOL",
    quoteLabel: "SOL"
  },
  {
    address: "5XRc8PY76VsK7x2KAr7a3j1NoNBxPTVRf8oHRnr2gJcz",
    name: "HNT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNT",
    quoteLabel: "SOL"
  },
  {
    address: "8LYhQ86qBGUYVqysDSpyQaFb93wpsKU96D6sCCQyn6L4",
    name: "Dognk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Dognk",
    quoteLabel: "USDC"
  },
  {
    address: "xfGvkmFh7MNfXQrDinNEtCcowS7JBt54rbahkwQWfzi",
    name: "ACS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ACS",
    quoteLabel: "USDC"
  },
  {
    address: "8EapfK6wCoRy5sFXZX9gudi8j3m5nLZcuDgxDGWVLgSd",
    name: "CMPN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMPN",
    quoteLabel: "USDC"
  },
  {
    address: "8EkT2jzErNR7xnKkAYtWq98NF9hwiYHi9UVXtDSAtksQ",
    name: "FLWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLWR",
    quoteLabel: "USDC"
  },
  {
    address: "4GRykxizof6XtML8qjqR5NtvPqQz5EhrU878KUjBqwY1",
    name: "MILK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MILK",
    quoteLabel: "USDC"
  },
  {
    address: "HbQAZWTZZ1ep7hDk5o7YbaZU2CnTCLE4DeKcfn7RtqfK",
    name: "IOS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IOS",
    quoteLabel: "SOL"
  },
  {
    address: "EuHkFsc78TWfZJnEWcdaVZiNj5j16QdL4s1ZMN9o7f7i",
    name: "HADES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HADES",
    quoteLabel: "USDC"
  },
  {
    address: "FdLbXTnipoKWJamyDe6sq22fzhMiNkyfVxxtM9nLRnYK",
    name: "PUDLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUDLE",
    quoteLabel: "USDC"
  },
  {
    address: "CgYMAsTJidMNowkPJXxGkFK8ccs9TbHtcjJcLsM434u5",
    name: "smol/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "smol",
    quoteLabel: "USDC"
  },
  {
    address: "55nsvbq2bgGLyA19FHaK4QE2AVgLshsMQvcDjDfspGss",
    name: "MAGIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDC"
  },
  {
    address: "5N7jU3zRoQ1StDhqt1wKSdG5dTgBH4kBgeqpwACuQHTU",
    name: "AGIX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGIX",
    quoteLabel: "USDC"
  },
  {
    address: "AFZCyLvUMegTxrXNGMJpEDVEhiYX7A8ev4PSTJXKBRP",
    name: "LUSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUSH",
    quoteLabel: "USDC"
  },
  {
    address: "4wZpNcRjMbTb1u3qmmqwVHX2nSU9KhmKdo6WhXGt4vNL",
    name: "MEAN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEAN",
    quoteLabel: "USDC"
  },
  {
    address: "8ybAadAtaPsemMrgdonW1YZWTQz59ZQgoSFJEhZHfWiq",
    name: "NASTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NASTY",
    quoteLabel: "USDC"
  },
  {
    address: "CLuEVPMuHA8yuPFz1JMC6DpzT5hYdG6JBnjL999YekdL",
    name: "HXD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HXD",
    quoteLabel: "USDC"
  },
  {
    address: "4WrYb4hjYREE4QfCSeS85959b1Rv7JuZk5jaR9wHE8Jh",
    name: "CMFI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMFI",
    quoteLabel: "SOL"
  },
  {
    address: "9mvvT8cBMSs2Vb1Z5rnbn1WQQXqbC7BkWmWwjGdFu6Xi",
    name: "POVT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POVT",
    quoteLabel: "USDC"
  },
  {
    address: "89J1zAgKFHCk5f3XM5JdybC75TELUcpA4SX8nNpfoNvz",
    name: "CATSYARD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATSYARD",
    quoteLabel: "SOL"
  },
  {
    address: "5htN4SgESqSnZVTEbLJMxHq7UFe7Mswn1eDWhsHe7YCe",
    name: "KNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNK",
    quoteLabel: "USDC"
  },
  {
    address: "84Mf8a9k2qVKM8o3BTNsvNBmyxBymngAM87vE8ZbAiaQ",
    name: "AURY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AURY",
    quoteLabel: "USDC"
  },
  {
    address: "Wjkv6mADbvuoJYER8r7w1P5zuZ8KxjNCh92Ke4AsDUy",
    name: "JESUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JESUS",
    quoteLabel: "USDC"
  },
  {
    address: "ATRb8TfeAGvze6DurB6trEms8ysiCk2AXtrZVrbhCHwC",
    name: "STEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEP",
    quoteLabel: "USDC"
  },
  {
    address: "4wzhuws72gXymKv4RRjBvNozoBJYsde1aKMoFuV2oWvA",
    name: "COPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "SOL"
  },
  {
    address: "yd7V2w7gJTSYmaTncsPp5wr1hkuNLfDREPB68LZ6XvE",
    name: "FRAKT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRAKT",
    quoteLabel: "USDC"
  },
  {
    address: "3encwsh3sx4fZVEp7i1tMR7YMkpbtcuctheqDvkvKWd2",
    name: "BOO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOO",
    quoteLabel: "SOL"
  },
  {
    address: "6rCUWUARtiXZEmGcFCbhwJAA3JdTmXKpdDMu1EPyGUrz",
    name: "FLTH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLTH",
    quoteLabel: "USDC"
  },
  {
    address: "BJwA4zuTaF7CSUnsCNjY5diyBYKLGZyc66dCNEz4VpVq",
    name: "POG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POG",
    quoteLabel: "USDC"
  },
  {
    address: "CNtBxd1vmgLJLs5EevWECqb97BN2fqsoJybx1cTSpuD5",
    name: "DSPC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DSPC",
    quoteLabel: "USDC"
  },
  {
    address: "K1s6748KAcEK3KQu9pThrZtajkwH4WHmR6wactnExy6",
    name: "NAXAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NAXAR",
    quoteLabel: "USDC"
  },
  {
    address: "CPVRgZzg5vTsesznVWjS9x3Xjjo3T6cqVnVsbyfM3Keo",
    name: "BONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONG",
    quoteLabel: "USDC"
  },
  {
    address: "BHDA6WYVsnd8wc3LmvRWSpxLJKRNJZvLzouVC4qh2iHv",
    name: "KITSUNE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KITSUNE",
    quoteLabel: "USDC"
  },
  {
    address: "9dtZDYkDAGDNCd59ZnXNFH6c2QT7piK34Wbd2FJcT1RS",
    name: "XPF/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XPF",
    quoteLabel: "USDT"
  },
  {
    address: "nxQ23AifoP4xqoZtr7kzQNeG8SPkN3u3VJzgAWdJz9P",
    name: "DEEZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEEZ",
    quoteLabel: "USDC"
  },
  {
    address: "5aXWjmpz6fXQxSZvptHaaCoT2awMziQRCTScNx1C2fyD",
    name: "FTT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FTT",
    quoteLabel: "SOL"
  },
  {
    address: "83z9KhnF42UzF2U3jN25JHXAbCAzLar3BQXCnngC9awA",
    name: "UGS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UGS",
    quoteLabel: "SOL"
  },
  {
    address: "3UK8a6tZ8b2aZVT6Jifjv2d5yW11WYGzmAWPsbm8k4Et",
    name: "WKND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WKND",
    quoteLabel: "USDC"
  },
  {
    address: "BCzuare5wRUh2mvA6v192XjmEvPeUYYGEM2tobnBA5CQ",
    name: "RNDR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RNDR",
    quoteLabel: "USDC"
  },
  {
    address: "BWExsLwZuJ8Zi37Mjb2jSL8m9P1dwdn6xHTKCjJ5uMJZ",
    name: "SWOLEHIMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWOLEHIMA",
    quoteLabel: "USDC"
  },
  {
    address: "HyJUaYCxw5drWWtK1mL6amJSYKSJLivqzNq4facPUXNa",
    name: "RRR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RRR",
    quoteLabel: "USDC"
  },
  {
    address: "BEaMEL9qi1ubRAf5j9UuFMtHwZtjaCJaPVUKRrihmyFg",
    name: "NEXT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEXT",
    quoteLabel: "USDC"
  },
  {
    address: "BG8ZpcJUFfZpsyXbmGRF2dmdRzz8zHbqVwVQYV9UJ9LT",
    name: "XCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XCH",
    quoteLabel: "USDC"
  },
  {
    address: "Cnw1Xzad6Yhx58Fwv22MHA7Ng9gTfnfSb6PU9okVyLv7",
    name: "GLTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GLTR",
    quoteLabel: "USDC"
  },
  {
    address: "dsirxWn18FULFz4SEpU2jKn7uy2UdNpe6JYT5yw1jQa",
    name: "WOOFL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOFL",
    quoteLabel: "USDC"
  },
  {
    address: "5A8r1voa69gPh1WYNdemuNVyQTH9rrb3BBqD8zQGdD6W",
    name: "LAMBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAMBONK",
    quoteLabel: "USDC"
  },
  {
    address: "GQSr1AhofeZGD8oEexwgGDNJYWDJbHghyzzJeMQQu5yn",
    name: "SOLV2/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLV2",
    quoteLabel: "USDT"
  },
  {
    address: "4pyjTqwxwJX2YZK7P7jH7NoghuNj8bpUH6bw1jvSnvG7",
    name: "PESKYP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PESKYP",
    quoteLabel: "SOL"
  },
  {
    address: "Hq7sukd4QkAPoWvMgEJVKYnnsBV83DekqUemmy7vKeRB",
    name: "SHARX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHARX",
    quoteLabel: "SOL"
  },
  {
    address: "GzaM9gf3EUz1URjQRnbhKxS424L8BjyGX6thgFHt1m9V",
    name: "O5O/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "O5O",
    quoteLabel: "USDC"
  },
  {
    address: "C9C9G8Y1SZ9iyqFHdKeQumhafF1KJF5iy8shCZZpvxUD",
    name: "DLP8/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DLP8",
    quoteLabel: "USDC"
  },
  {
    address: "HxyLqqMzKfTe2YDEKor5uAaA2vaNjU8yHxuTGLXvrBoD",
    name: "GP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GP",
    quoteLabel: "USDC"
  },
  {
    address: "HazhsV9NktPMdv7CfC2SL4kbXFRnNPSp7upEDUgWaccf",
    name: "SHUK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHUK",
    quoteLabel: "USDC"
  },
  {
    address: "C5Jmd5eT6CrusWWRp6wph3UYj8KjD6TGER4N5D8T7ZrU",
    name: "ZARC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZARC",
    quoteLabel: "USDC"
  },
  {
    address: "8VkxpDrhFfgXSN2JVcujTVSB8P1xP78nMHpXkUJm6UKF",
    name: "A2M/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "A2M",
    quoteLabel: "USDC"
  },
  {
    address: "94a57gxJA9ekoyiFTDdeMH3Fa8nkuqNP2fTadKNPugL3",
    name: "SBX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBX",
    quoteLabel: "USDC"
  },
  {
    address: "ByHezKqkGngcMFRdyfW2SzSqwWMapcZMN1GrkAYtoFs7",
    name: "BANANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANANA",
    quoteLabel: "USDC"
  },
  {
    address: "ASqUUjXVony54p3GRzhmnmC5uTn2FtfAQ4m8aoAPGUfj",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "CfNDiBYcPiQC2X3xajwxdM98YhAzsmYA88ZCwRpxbJdr",
    name: "Eggs/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Eggs",
    quoteLabel: "USDC"
  },
  {
    address: "GF6wnStjCqYnYRADr3FZMV24KWXoBdUzvW69VuC8Cx91",
    name: "Clack/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Clack",
    quoteLabel: "USDC"
  },
  {
    address: "7UyfyyVwdMp5JUpKG6pKTtdGwAhraKKKthpQKHqEBCHD",
    name: "MTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTR",
    quoteLabel: "USDC"
  },
  {
    address: "6BaxwQnuwJabq6HGke2pSVz5Rynvh467AfyX7bpenGf6",
    name: "1SP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "1SP",
    quoteLabel: "USDC"
  },
  {
    address: "6Gck1NwBcbXmiMrFzFbfNAotkoBuzamC3inGCfUxkdmR",
    name: "SLOW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLOW",
    quoteLabel: "SOL"
  },
  {
    address: "BZsS3Gr4FPRcaqLS93UDLBMnqx4rvf4yDbUcFwjsqaUx",
    name: "ADAM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ADAM",
    quoteLabel: "USDC"
  },
  {
    address: "BLFxn6wCKQZ8y8dD661z3dhTbdjv7217an7Ppndxu3wX",
    name: "BANANA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANANA",
    quoteLabel: "SOL"
  },
  {
    address: "9ynXjxs3Jp4X3hcuPfK6BU7KpVFEuUcTe3jU863Z59Ez",
    name: "zzi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "zzi",
    quoteLabel: "USDC"
  },
  {
    address: "HwmsXw7cuv5fJDZsQhzcUwqE1fV9VdSiSZehJr7YY8Zj",
    name: "BEARCOIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEARCOIN",
    quoteLabel: "USDC"
  },
  {
    address: "5ocDy8umA4irjVZndz4fpr2BoqLhNENa2F2NEXwphLJ",
    name: "MASON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MASON",
    quoteLabel: "USDC"
  },
  {
    address: "BkxVHc7TirqVXrjESBj1iJu739KTv4KyRihpqvYSSPNm",
    name: "DownBad/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DownBad",
    quoteLabel: "USDC"
  },
  {
    address: "E9kZJweopTgQXt8LGgSaxXdqjxhTBGDMWR5DaQDUnWm4",
    name: "EGG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EGG",
    quoteLabel: "USDC"
  },
  {
    address: "A93gPTBKn3JiWHKUpT5QoLeNk9ZHkw4HLfs6rnpTyJfn",
    name: "RTRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RTRO",
    quoteLabel: "USDC"
  },
  {
    address: "3FMQ4nZnSzGofbpMmSK9ueBLNxu8kZ4zy3zMzPVVvGJF",
    name: "SIMMPLE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIMMPLE",
    quoteLabel: "SOL"
  },
  {
    address: "BFEmEWwn2hL78ebYBV4Xb6mWoQz2TSW4gcupqP6qPwys",
    name: "BSOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSOGE",
    quoteLabel: "USDC"
  },
  {
    address: "A9BfFEaaUv1p8emW6fzknFKF2vaJ64VC4GGK97bvRVgt",
    name: "DUST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUST",
    quoteLabel: "SOL"
  },
  {
    address: "9P8RGZGugjd98TrJwZjfktMD9c99dAyRuqRfphPo8SLY",
    name: "Bonk/MEAN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "MEAN"
  },
  {
    address: "Bh7NbZHwyurQzSVwbPa5rRkbWKZHG9EvVbK4XU1izmNC",
    name: "WOJAK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOJAK",
    quoteLabel: "USDC"
  },
  {
    address: "Fwye2xED5QCVU87v72upJhoXoiNNiXXT9z83qdWpuRC6",
    name: "SK3Y/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SK3Y",
    quoteLabel: "SOL"
  },
  {
    address: "FUtP3q6foA4iT7taTtiqav4G2BkmNSvNcPskeZycduuT",
    name: "THEA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "THEA",
    quoteLabel: "USDC"
  },
  {
    address: "DpkovU4bUw6rmFoTL1mJcnNWYXL6XfEnvEYcHVZhL3EQ",
    name: "SBEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBEAR",
    quoteLabel: "USDC"
  },
  {
    address: "CM8jCXNYpKvh5wWm3Fn8eWcpkKR2Sc2HjsjvHYwgKzn8",
    name: "YOM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YOM",
    quoteLabel: "USDC"
  },
  {
    address: "5Yxm77H4v4sL8efpjG42ioFukUqcVkY5wVBaa3VX2ZVT",
    name: "MASOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MASOL",
    quoteLabel: "SOL"
  },
  {
    address: "GnWeRDNk2GzotmCcy3ifsh2VrKSEwDQHw1BStV7SAT5u",
    name: "BEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE",
    quoteLabel: "USDC"
  },
  {
    address: "2wGK3eGS2gEJMEoWY4F7xhUtWDReiuaJgDVDpAV3rDz1",
    name: "SOL/AIART",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "AIART"
  },
  {
    address: "8gzkDugmHC1QeSoZhrktpTh41ALeQwrVcGPzZuJ4W12n",
    name: "TOAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOAD",
    quoteLabel: "USDC"
  },
  {
    address: "3YBEhXXDJhjCvTtz5RnmQvSaNrxLZ2WxZryg2736ruKZ",
    name: "FAMED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAMED",
    quoteLabel: "USDC"
  },
  {
    address: "H6Mi1WfLFP24s2Hbh2k8j6Ufn4JwsuD3jNfPZZa6FYQq",
    name: "PPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPP",
    quoteLabel: "USDC"
  },
  {
    address: "BaNaD1MJU4kKioWuHVwLcJJAHNEZjp7fLB1JMd51jwkZ",
    name: "NEOHUNT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEOHUNT",
    quoteLabel: "SOL"
  },
  {
    address: "E1A9wktvJJSTyEWW35DiPF5QgrHUxhvR4VXZ6v5YjRGw",
    name: "BHIMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BHIMA",
    quoteLabel: "USDC"
  },
  {
    address: "Hn1qJegKjztfrtSN6gwsiMQCqAMeoEJX8hLb8fmj1NMc",
    name: "TRUSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRUSH",
    quoteLabel: "USDC"
  },
  {
    address: "ESMwTvG8E1RukV4ns8c7bj6rUtZc7JNvvgJRMqjYBboW",
    name: "LUCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUCK",
    quoteLabel: "USDC"
  },
  {
    address: "HAeLjkRc3KEAsjdnEQw9x6iCPZgbifcWqr1bxirZLWqN",
    name: "BEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAR",
    quoteLabel: "USDC"
  },
  {
    address: "95PgauuxqSAwMYuw2K5dmTtmEqg5DDgFzz6t2vse4bku",
    name: "MRC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MRC",
    quoteLabel: "USDC"
  },
  {
    address: "Gg2mtfeVUbi7wsY8vL8sDM1cDiMqEQmUL7SY132o4P24",
    name: "BPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "845V9rv5AhkiGdDi5v9qFSWCECNjZzFSu5Kddkh7677f",
    name: "AICAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AICAT",
    quoteLabel: "USDC"
  },
  {
    address: "2yw2vatXBCQyLtyDYkA1ytkVm2LsWfPShdrXrBnVzB56",
    name: "ARB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARB",
    quoteLabel: "SOL"
  },
  {
    address: "WkqK3xHV7q3gZauYo2Yx9Sv1xYyV2zHLHZmYvjcLbN5",
    name: "POX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POX",
    quoteLabel: "USDC"
  },
  {
    address: "Bkx5YNY5jUKkc7rrWr5UMW2dgutWWSH8fiYbfp57k6A",
    name: "YINYANG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YINYANG",
    quoteLabel: "USDC"
  },
  {
    address: "2ikmhKuUrcZ3XLzkAT2dC1kNof2vctwBR2BAvCktAoG7",
    name: "SOL/USDH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDH"
  },
  {
    address: "C4FMrbYjcWXFrrUfYjpxgqseac3ktwnWN12RBoJW9Zeq",
    name: "SAUL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAUL",
    quoteLabel: "USDC"
  },
  {
    address: "77A6JhyecPFrmkdDGvgKgoHLEvx4TjxTdSPK4rRsN7EL",
    name: "AVDO/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AVDO",
    quoteLabel: "USDT"
  },
  {
    address: "G9CWowmz77JBsbdrHZ9qYbaoooprMWRygbPQeBvFyF6S",
    name: "SIGMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIGMA",
    quoteLabel: "USDC"
  },
  {
    address: "CxUJ2G5q9GAMg9J43XGMVFfEDr1JC8WAhjzxkfWmPQRG",
    name: "PTCS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PTCS",
    quoteLabel: "USDC"
  },
  {
    address: "7UQibtXEJk2NK2h8Lbamn9e8F1CsP57qdb9FvCZquEBz",
    name: "SOLVM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLVM",
    quoteLabel: "USDC"
  },
  {
    address: "fAWh3Ut2H2ym7wEEuBnZHMa5TngqUzBPRnZay3rCUNA",
    name: "ENRX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ENRX",
    quoteLabel: "USDC"
  },
  {
    address: "HJtNJ8nte5wvhW5tNzDGGcVtVSxtE6okyx8TC3rn8sZe",
    name: "ISOLQ3/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ISOLQ3",
    quoteLabel: "USDC"
  },
  {
    address: "Be7hQCXa7xkmjXDkVXoQkwKhMghRKL2HVqLCdMuguQAz",
    name: "SOL/SATOSHIB",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SATOSHIB"
  },
  {
    address: "HQemfKjpwWHZ1ZPW3vXgksxANNaG7hH5rSF3snoBduwS",
    name: "SOL/SALTY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SALTY"
  },
  {
    address: "RRicowmXJZnf7b8pbMUU8PMXZequvh5JmZENho794dY",
    name: "BabySollam/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BabySollam",
    quoteLabel: "USDC"
  },
  {
    address: "91TxATTv2NA9UfSGQBtMRBv29r9H3VuauBBa9X7t1tPM",
    name: "PAW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAW",
    quoteLabel: "USDC"
  },
  {
    address: "CjzgZAUsmTsSUCrv5gYYWx7uERj3ZUq1HJtXtchMoRLS",
    name: "JETME/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JETME",
    quoteLabel: "USDC"
  },
  {
    address: "32sSxfA9sEhKadq3GXCZ4jxMxzieDtPpd4aQf9GD2jon",
    name: "DLOVE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DLOVE",
    quoteLabel: "SOL"
  },
  {
    address: "CbX9mqEupxrMuV8QKFUcxwBebrLaDpyWepFjTQiDeQDD",
    name: "PANDA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PANDA",
    quoteLabel: "SOL"
  },
  {
    address: "4powQjhcLUp28Bqg3myfS8fAudwXGEBZzSubyiJT4igB",
    name: "BELE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BELE",
    quoteLabel: "SOL"
  },
  {
    address: "CxYeSjwUBirGXg6fHDpQAu3UQFEy75qUZFgcHgtpDAqU",
    name: "BLOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOW",
    quoteLabel: "USDC"
  },
  {
    address: "Hyz9g3D5zXkdeEK4N9VfubU3Umj1B3HNczAU25EbLFvb",
    name: "SAITAMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAITAMA",
    quoteLabel: "USDC"
  },
  {
    address: "G6BYFSSnQEMRCfGZ7hxtSiGAYD318xXCkdVQhu8YDaqh",
    name: "CROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROW",
    quoteLabel: "USDC"
  },
  {
    address: "GR5pVbvAzhem7RuM1mChtU71cmGsHinExHNXUkVLL68d",
    name: "CHECKS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHECKS",
    quoteLabel: "USDC"
  },
  {
    address: "H7tsEJmDBrH2jquB4hZ9LP99B3TjZmweFHc2PWL4dCoE",
    name: "MOLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOLA",
    quoteLabel: "USDC"
  },
  {
    address: "Gy8gyWsRMRWP4CTen6wU6H8adFz7U3zMEvVnpapSFiYo",
    name: "DFX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DFX",
    quoteLabel: "USDC"
  },
  {
    address: "8JziH8Nx71K7rr4av9wJcqd84ViermxKJBwSpTru1hCs",
    name: "SOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SOL"
  },
  {
    address: "5X2z7mc9JPfbLaZX4p6h92YmaZrwPF8uYksQUB3ypzV4",
    name: "KONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONK",
    quoteLabel: "USDC"
  },
  {
    address: "CX6wdMTTZLK7XriXG1CKbpX5PUNAkpnkujwUuhQiuXYN",
    name: "DOGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGS",
    quoteLabel: "USDC"
  },
  {
    address: "ENDEe8SwEyQU87TZt5xdEoj8LWX2UTKsFvEZEykyq3g3",
    name: "ssr/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ssr",
    quoteLabel: "USDC"
  },
  {
    address: "E5fpRJWxCo32dZvKMv5ZhQ7o7xh8E41dmpCjJw735aTk",
    name: "BONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONE",
    quoteLabel: "USDC"
  },
  {
    address: "EfkVt69jeizFG1vgKYcbyDyASfvJSy8N1xHezdy6bA2T",
    name: "BAPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAPE",
    quoteLabel: "SOL"
  },
  {
    address: "AkFkprancdDY4geo2819mDrWkJ8KanGEpuyVn2QXy8kE",
    name: "STONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STONK",
    quoteLabel: "USDC"
  },
  {
    address: "Abb6fS5R1jL3UgZfUAG8TjY7RcB6mVjZZ9cUCEJs27ty",
    name: "CORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "USDC"
  },
  {
    address: "CY2Hi5qTVDmZEVEpSVAD8YgR9pkcdWJQAUk1G9WBPGAo",
    name: "SHCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHCAT",
    quoteLabel: "USDC"
  },
  {
    address: "7MJH4zPHA2KLpy1crcJrtZB4fwFMLje6tRgncubbGAP2",
    name: "QISAP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QISAP",
    quoteLabel: "USDC"
  },
  {
    address: "H5L7xP3QMghfMevdXHbN2VneW3pofxnwawa37EzF4WsE",
    name: "BISOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BISOL",
    quoteLabel: "USDC"
  },
  {
    address: "3UuQ3obvPxgpxAyKtTmv4jw3pJuUJ4e8LaWohJxmBfr4",
    name: "MFROG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MFROG",
    quoteLabel: "USDC"
  },
  {
    address: "CjipxRNjepZyzk31SJszz4DxX6US2YQj8QxD1wT7dkdx",
    name: "USDC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOL"
  },
  {
    address: "2ZjM2qca1Xn3xX5mf5nFNr8kFoPfkShBHTuTDg7ZC3kT",
    name: "BBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBONK",
    quoteLabel: "SOL"
  },
  {
    address: "FHcVvfqKgT4PZYph1Hp46yeXJpMd8YittF9tWLLA1gvu",
    name: "RABT/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABT",
    quoteLabel: "Bonk"
  },
  {
    address: "DYh8TtRb2kvSf2wUjqAXQcKatYXfqz23gepxrnr4ucmd",
    name: "SOLAFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAFF",
    quoteLabel: "USDC"
  },
  {
    address: "4Ma1KB8zgcgeMsRuTxK6BSAb3B3wzDaKeG7cmBkiCn56",
    name: "ZILLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZILLA",
    quoteLabel: "USDC"
  },
  {
    address: "8pZtXduNU7j92j5oBRN9KqUSg7uhodjhavjXhtvEqzC4",
    name: "RBL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBL",
    quoteLabel: "USDC"
  },
  {
    address: "CdutffFt2p55zJpjCtGA242DH8Y5k7gZ12w3uRXXtUaw",
    name: "NOUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NOUN",
    quoteLabel: "USDC"
  },
  {
    address: "rmjYM6ciMMezKCF1sco5SVV9XNPaAgwnQY8iRFKKgtd",
    name: "BCHIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCHIL",
    quoteLabel: "USDC"
  },
  {
    address: "7VwZjfpSKKFnAwos6oU4jMQLbsdhF5PppwHsntynoRcR",
    name: "MYTHIC/DUSA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MYTHIC",
    quoteLabel: "DUSA"
  },
  {
    address: "D9eu6kJdvtgEWNidH3Y1kyYmLByrbSyPX8cw8Yk7ZjcR",
    name: "DLP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DLP",
    quoteLabel: "SOL"
  },
  {
    address: "Gk3Wuc6zsXoG4mn7fS9RPNNPnKZgUF28qKtvxTVZZX1P",
    name: "RACC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACC",
    quoteLabel: "USDC"
  },
  {
    address: "DgfUZT2wGcJ5bf6RtDxqnPkDtB1NZoaa5HyMQ145VpgY",
    name: "SAFUU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFUU",
    quoteLabel: "SOL"
  },
  {
    address: "BR3kf4BuvYc3PwwM4uczx7MW33knvnpUfuz8nkh4ACKz",
    name: "FAPPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAPPE",
    quoteLabel: "USDC"
  },
  {
    address: "7v5ggYikFry36W1yFjdF8b2FpAzXVtMpwv9tvvrtHh18",
    name: "Sloki/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sloki",
    quoteLabel: "USDC"
  },
  {
    address: "5KjDHBrs8hv7qN1dcmGBzpuXZ2XTpaVY6eyZsGDP96sQ",
    name: "DGK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGK",
    quoteLabel: "USDC"
  },
  {
    address: "EAghrCVH7nkgJ5LgUsagSAkQG4QfAAVbdJanrYdchqoy",
    name: "ORDINAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORDINAL",
    quoteLabel: "USDC"
  },
  {
    address: "62V9XGvrsDgAuhLrtDqy1RRYRu1BXAFcHnU7wULRAd31",
    name: "BONDX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONDX",
    quoteLabel: "SOL"
  },
  {
    address: "96MLRbQMNu3WEjkiGyQTwfdEnqmFnu4xCEPpavJcTuNE",
    name: "USDC/BTCST",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "BTCST"
  },
  {
    address: "GgEpy2ZcGkNkXA81cMyMzR3mHc5Dyq8R917u8mrmDGsx",
    name: "CULT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CULT",
    quoteLabel: "USDC"
  },
  {
    address: "BJXdeHtvfm2RvvSb4wUqsrLxgkpahTju9c95PMCoDueB",
    name: "NINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NINU",
    quoteLabel: "USDC"
  },
  {
    address: "646Z7ca9mVaTwEPdbmb3EZRgSrY2ErbBTjJkeKzo1SE",
    name: "GMSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GMSOL",
    quoteLabel: "USDC"
  },
  {
    address: "2hjmPoycVakENqqY8b7Ttr7LF6A35htuFFjDHXCf47Ey",
    name: "KIWI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIWI",
    quoteLabel: "USDC"
  },
  {
    address: "8KY9dDAzZQDyw3r8eRSePpJJcYPWaJ3suscnM1kTNvBU",
    name: "LMDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDA",
    quoteLabel: "USDC"
  },
  {
    address: "F2RyeAubDmtaAE6VX4DtPB6TqZCwECehtknRZzyhiYLt",
    name: "VOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VOLT",
    quoteLabel: "USDC"
  },
  {
    address: "Bs8bxxViwdKjNTC8nhuikb9vhGyih8M1FhWqABRqdBtE",
    name: "ABC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ABC",
    quoteLabel: "SOL"
  },
  {
    address: "FAgHzYYSckQHQLga9j9gNUt2Pigq7UWfqDc8VDgrbKK5",
    name: "BSHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSHI",
    quoteLabel: "SOL"
  },
  {
    address: "BYKKz3vk6QddZJ2wFHWKALpevnojMmasxmi6ghYfpCx3",
    name: "SLM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLM",
    quoteLabel: "USDC"
  },
  {
    address: "CzoSMQcFtWdKx1qiiQwgZfvpB7ZNqfr4pXsmu8ykkhsk",
    name: "PORK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PORK",
    quoteLabel: "SOL"
  },
  {
    address: "AcaRDqMhJhyLsA9Z9gzLMJVFXH3XjL8AyRGVd8UsqVQw",
    name: "CBT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBT",
    quoteLabel: "USDC"
  },
  {
    address: "71ihK9Kietn45Sr75iVXQ2ymrrbUrBFnVbzpvQBodiza",
    name: "CATT/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATT",
    quoteLabel: "Bonk"
  },
  {
    address: "E77f2ik6fjCE6WmbH9gwN7ogZ916eHDFbz44UuK5EVuw",
    name: "POTA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POTA",
    quoteLabel: "USDC"
  },
  {
    address: "78PK3uG4D7KbeRYtcP3DhBaJt8qRXaxKzb4BYx62uhWT",
    name: "CSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CSOL",
    quoteLabel: "USDC"
  },
  {
    address: "G8ouHZLLjpcmv8XtKTFHN1MPCeTqreC6fVqpQDAUfN2R",
    name: "MONKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKE",
    quoteLabel: "SOL"
  },
  {
    address: "46DJHgSrrLS27dswNMBUeAk4ELCeas5YonK4zeL2hrVp",
    name: "POBOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POBOT",
    quoteLabel: "USDC"
  },
  {
    address: "ENvqNUDPxGTMx6XN8XCef1784gbNqgPo4tNHS4YhWLDm",
    name: "DOGOB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGOB",
    quoteLabel: "USDC"
  },
  {
    address: "DLRoSyygT3VCAA8FbH52STkkdT5dLEuHdEEyGMd7k2eK",
    name: "BLOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOW",
    quoteLabel: "USDC"
  },
  {
    address: "C66wdg4Yht8raFX6GfhpRSW53ecNv2uEeHcbGiYkn11u",
    name: "CORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "USDC"
  },
  {
    address: "6Pv8fgaMKzADQmWkbQBzAYnUWrudttWXtwFJyCfH7zU2",
    name: "CINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CINU",
    quoteLabel: "USDC"
  },
  {
    address: "J6gcsqi6EbbYkRbKYGgFWM6cqQu8UppayWz2iCkkW6ir",
    name: "bSHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bSHIK",
    quoteLabel: "USDC"
  },
  {
    address: "DCNjg548pj5yphsMM8vusxnJtcD1Wv49bJruZEALK1NA",
    name: "HAMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HAMI",
    quoteLabel: "USDC"
  },
  {
    address: "BXpNhqCFfSkGcJdYct3p73CpLs7AFPXj4AYQyP1cKgkn",
    name: "Frog/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Frog",
    quoteLabel: "USDC"
  },
  {
    address: "4go6XjVwYt1PpyPzytAoJBs1SRykm6Xc7RVk6v3ME14M",
    name: "KATSU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KATSU",
    quoteLabel: "SOL"
  },
  {
    address: "76wucVaFbFDdRkLAs6xSkLq4prh7wDDJjeBx7twbpNtR",
    name: "SOL/KYS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KYS"
  },
  {
    address: "9duZASVgxhXSYKnxvzMc7EixA23HmV2bZ3c6aqaJ7ZAZ",
    name: "SONGB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SONGB",
    quoteLabel: "USDC"
  },
  {
    address: "9ZNA7Yu3eDMbNTo4ZYEVRJAUwnVjfRdPMmhy1dcuFHmB",
    name: "Mbonk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Mbonk",
    quoteLabel: "SOL"
  },
  {
    address: "b954xBU9J2YqqVK7MDneZ83bngKm3yijBTxoWY8rhCW",
    name: "MONKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKY",
    quoteLabel: "USDC"
  },
  {
    address: "7nMr28qUfhyFgm6KnmizqcbKYL4AvC2DSJzdAL47iXic",
    name: "SOL/Froggo",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Froggo"
  },
  {
    address: "7nx2tXmUr2Gip2JthoE55NNp2H21CVzvWg2Bnjprq1Nb",
    name: "SCULT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCULT",
    quoteLabel: "SOL"
  },
  {
    address: "BXXLD3Y3btjdztpUjsBVozg2WfkQcxDNtREZdsotNYJY",
    name: "LEVITICUS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEVITICUS",
    quoteLabel: "SOL"
  },
  {
    address: "BLHKTsc5G3fgofmwh8uWnLcz6TUVpZjjyyYZEpxj6AR3",
    name: "SPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPP",
    quoteLabel: "USDC"
  },
  {
    address: "GfXKKwpmGsoSGbfr7Q7UjmhbjZggRevdsn51NNdy9azp",
    name: "TFINE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TFINE",
    quoteLabel: "SOL"
  },
  {
    address: "DXVZZE98sBke9LTgDqWPHtC7h4W9T9GG9YsCt2SppVk6",
    name: "PCHIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PCHIL",
    quoteLabel: "USDC"
  },
  {
    address: "BA1LS3VWSifiTkebrMUKG1sKezMyCox6YumdSTv5nwYo",
    name: "WAGBO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAGBO",
    quoteLabel: "SOL"
  },
  {
    address: "GSNGPpzQY43Mr8Kq4MRscZtkxjPcwTi5DzqvtTYeCPLR",
    name: "SOL/STEAK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "STEAK"
  },
  {
    address: "D676cGQk22Xf6DaYTYK2Am22AidFQ7YVU77rm42uU46y",
    name: "TT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TT",
    quoteLabel: "USDC"
  },
  {
    address: "GZnNDtnQFPqXB6FJu7vtTdgdUZpu3RXzAvHdutDJKGTA",
    name: "Grape/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Grape",
    quoteLabel: "SOL"
  },
  {
    address: "F7GLe7EjZ6MfUbWMmGiuL4XLFh2yVERizLcrMV4CrQSS",
    name: "CANTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CANTO",
    quoteLabel: "USDC"
  },
  {
    address: "GdTBUCpkC473KTLmoRuPtGrnEXtGrPcbCJK2n81fmGfq",
    name: "LLAMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LLAMA",
    quoteLabel: "SOL"
  },
  {
    address: "J2zcF6YWxB2JnhBNvVFykNyAfhXPmxK4ampHA49KBG7C",
    name: "LANAS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LANAS",
    quoteLabel: "USDC"
  },
  {
    address: "9myKV97exfFbW2WetJ5cYr2wUtXJP36zwqes15mV7Lwa",
    name: "MAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAD",
    quoteLabel: "USDC"
  },
  {
    address: "5q96vRFwRf7UcMB4Zm8KXLhvoNuetudeaztZcosrNtzf",
    name: "BonkS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkS",
    quoteLabel: "USDC"
  },
  {
    address: "AsJZCfERmYa7iGi6UMVXBGhs4dd1DQ8CrMmSNYyL3bQE",
    name: "BSOLG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSOLG",
    quoteLabel: "USDC"
  },
  {
    address: "E8dwYj5dDJs256YtNmCrEFvThnNQL2opWsV4YNhtetQB",
    name: "TROLL/Fronk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "Fronk"
  },
  {
    address: "Ffce8Skekz2vSR3aoB9f18TQqfiMnC53HxPbMviN9iH7",
    name: "atan/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "atan",
    quoteLabel: "USDC"
  },
  {
    address: "A9c1BGBLuFNoKWsAchH92FhQA2QypkttnjBoKXqBGfqg",
    name: "SIMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIMO",
    quoteLabel: "USDC"
  },
  {
    address: "2DjabQXSdoFod2uaogv8o8o4RoPhSLiEWbWuizrunFXu",
    name: "Shitz/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Shitz",
    quoteLabel: "USDC"
  },
  {
    address: "HjpHS8ogxcWCqQMQwfRcE4CDEy24X9N1YgycVDtzpvmw",
    name: "MEOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEOW",
    quoteLabel: "USDC"
  },
  {
    address: "97QyvHtAes8zC7DVZhLoRNf3ZrRcS81qQ4YNz1bbVEjX",
    name: "SLAPA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLAPA",
    quoteLabel: "USDC"
  },
  {
    address: "GT61UGdPJrE5MpK95u9HQhkbttF14qmRYt3pGE4FcSi4",
    name: "OKURI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKURI",
    quoteLabel: "SOL"
  },
  {
    address: "6iAfMNxVRSBW9S4YRd26Vo7r4XMuHtUBFk5nyeHwY3bZ",
    name: "DGEEKS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGEEKS",
    quoteLabel: "SOL"
  },
  {
    address: "C4NJc7oQKM8KS5WK84ZgQGYQvPV7U6jn5B32BGXmiLkW",
    name: "SLB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLB",
    quoteLabel: "SOL"
  },
  {
    address: "DLezThvyYRxGrUh77pafGejLMjrF8ZvvUPxgMbc4rkHJ",
    name: "CYBER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CYBER",
    quoteLabel: "USDC"
  },
  {
    address: "GuXF1JqZro5partSHjBcmHwWcKb9ck1oeyGMnx7xKD4T",
    name: "STR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STR",
    quoteLabel: "USDC"
  },
  {
    address: "6T7s5fSGfyEMmGFYcZTxmTxaYxzURjPEvT9zxhuUsN3d",
    name: "FLOUR/MILK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOUR",
    quoteLabel: "MILK"
  },
  {
    address: "8MrCLGY1y1PKwLG7S6QtXNr7zAvd992aYGfSL76zGW9R",
    name: "KNGAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNGAL",
    quoteLabel: "USDC"
  },
  {
    address: "9RuV6pSceuyGrVqSReGqKTuMvcyptDg8wo4pMvpr5baw",
    name: "BANAN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANAN",
    quoteLabel: "USDC"
  },
  {
    address: "8G2XXcNKKic2WRyZsAyWp7E8FDMvfD2MBz9ep9zWqQr9",
    name: "OG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OG",
    quoteLabel: "SOL"
  },
  {
    address: "GnE2Ls7NqyGpqS4VFrhhERa2nXnFgpRz4sf6eckony8Y",
    name: "CFL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CFL",
    quoteLabel: "USDC"
  },
  {
    address: "GqD57LtXd7bFtXeVc6SmR6vDHszAmdSLLS11Dgdfotx5",
    name: "WAIFU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAIFU",
    quoteLabel: "USDC"
  },
  {
    address: "aGzAHh9vHdu1V4KjFJTAmyew5duYfWbNyhsNLoMuLrT",
    name: "69/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "69",
    quoteLabel: "SOL"
  },
  {
    address: "GL9PinobaHhuPxepMLuUbNLLxLW4AfW9UwAWUjuYPXXw",
    name: "DOOZIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOOZIE",
    quoteLabel: "USDC"
  },
  {
    address: "Akhu25PYzC6dLpGzuX4Vy22ENRCUHPWbYs46GMQNjuFs",
    name: "COCO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COCO",
    quoteLabel: "USDC"
  },
  {
    address: "5aY8PxhYqfiCY2ggrBMHSiRrszN4ucQLEFTqBMK7jDRX",
    name: "COWL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COWL",
    quoteLabel: "SOL"
  },
  {
    address: "Ta7LMzr97d63xpYr1Hca3bm5nMJmxrVJK19Enhjt7Vn",
    name: "CHOOP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHOOP",
    quoteLabel: "SOL"
  },
  {
    address: "3Hg2vT5eALJGm3mveV99eKif8fCUuVUE3vD6Uvo5VSd4",
    name: "SOL/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "RAY"
  },
  {
    address: "28HSzZsj2MMUkc17fQccLPb1BTb2kZ3ZN6h1wtyZFfaZ",
    name: "ECL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ECL",
    quoteLabel: "USDC"
  },
  {
    address: "BQ3mvUxyGJnGy8HcmdvWGuDgYPdJ3ZiLDAi5tc5ws1Gv",
    name: "Pronk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pronk",
    quoteLabel: "SOL"
  },
  {
    address: "4vAdMdq3CTtoT6JZxFXpZxwjSb7DRN4aQiGuf65MANuD",
    name: "CRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "USDC"
  },
  {
    address: "9T7iaLN4fb75dqLLun3GdjoLuzy524RJiQ1GJn2ej1un",
    name: "CUTED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUTED",
    quoteLabel: "USDC"
  },
  {
    address: "Ev2qgGpMETv3zSf95PFwKgB89GNNiDMkcG6M3aMUQNuw",
    name: "ELITE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELITE",
    quoteLabel: "USDC"
  },
  {
    address: "AG7jqhgewJwGV6PnGZKvEYJ6XHXgg1EnbgwxAj9zDJm2",
    name: "CROPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROPS",
    quoteLabel: "USDC"
  },
  {
    address: "7cEmXSiFqQrxJnP4g59ZcvGuNe9NQ2GuyafquruyLXvR",
    name: "HORSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORSE",
    quoteLabel: "USDC"
  },
  {
    address: "Ak1xTVUTPYfxnMdskk1d946jYGxakbvxUj6mLkQ4PB6W",
    name: "HONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HONK",
    quoteLabel: "USDC"
  },
  {
    address: "7n6gBqh1sfxETj5gzkYkruszFsB51rJECEEmHu1umYMM",
    name: "TURD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TURD",
    quoteLabel: "SOL"
  },
  {
    address: "4syxZBY9W51K6jr9MP4q5RRPhLH5guNUCYE1Njz2Tsnd",
    name: "LUMAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUMAI",
    quoteLabel: "USDC"
  },
  {
    address: "7NWFRpMKo3xPjWZNyK36on37PXQ4hyJXn8LCpc2htfZc",
    name: "MeMe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MeMe",
    quoteLabel: "USDC"
  },
  {
    address: "cjfKmJxVnoU2MYweEibY9AEmueskp6fyzj6Nx9Su6y4",
    name: "DONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONK",
    quoteLabel: "USDC"
  },
  {
    address: "9W8XWTRksF3nxBXS6rNYLRyApHCEdjcZff37PSfHNTFf",
    name: "BCORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCORG",
    quoteLabel: "USDC"
  },
  {
    address: "8fLy9mDEi6LXakjwphBrukHp3JHrBBV5BPczBYpJXPN9",
    name: "SAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAKI",
    quoteLabel: "USDC"
  },
  {
    address: "ivQ9DX9DxuT8u2ZXFrSMPEU5QaN7a2cNSAgp1BetFYq",
    name: "ATLAS/POLIS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATLAS",
    quoteLabel: "POLIS"
  },
  {
    address: "TYC6RZTmG1ZyFgA1QNmcrYvU8UX75vLXYHix5YBauTm",
    name: "SOL/RAIN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "RAIN"
  },
  {
    address: "DzWucgYPRMezLiYXh9GCWFz81pEVvixtvVBXRve4t9pL",
    name: "MFRNK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MFRNK",
    quoteLabel: "SOL"
  },
  {
    address: "5ZPXpw5ty2XSyyNLSKav3iJ8Cagw2RSbAYwJ24wL8UPL",
    name: "SOL/Sbosu",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Sbosu"
  },
  {
    address: "HNtmVH4QLgjjMYi4wn44bavxGWSSQmEP479GAx3kPUqC",
    name: "PANDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PANDA",
    quoteLabel: "USDC"
  },
  {
    address: "F9tX53aK5xeSpECpFu66ypbQNEGcAKQzSmzSLhdDSq2m",
    name: "POGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POGO",
    quoteLabel: "USDC"
  },
  {
    address: "8b9r5TfvfGjDuTtwtsT1TnvFLnbKixqreWjyMYJHKtsa",
    name: "SHIK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "SOL"
  },
  {
    address: "ADqMVy8p14UP4tZpmcWmmDuNs3AQ7xx9LCnGgjiXqAJU",
    name: "Pling/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pling",
    quoteLabel: "USDC"
  },
  {
    address: "DSuTDwm5wQLURBWf9qm6mzZiYg7hFA8JHMzZh9BVgaAL",
    name: "Bread/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bread",
    quoteLabel: "SOL"
  },
  {
    address: "HMKPcXbj7JfKqqoUNRsutAs15qbgDjjrNTRopURZpZNp",
    name: "CRONK/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "Bonk"
  },
  {
    address: "7vbNHuYuXnRXBW8FrQqXQB5KF7GrLMjKpynMy9Lk3sqW",
    name: "INKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INKY",
    quoteLabel: "USDC"
  },
  {
    address: "8pyf4v6V1udYSSfLCU774tYvL7TNbDBiqumR3eRqm6Y6",
    name: "BEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAR",
    quoteLabel: "USDC"
  },
  {
    address: "5ybwM5b1AS8bXo1z27MVHPwuFSGnptbqW6LEKvrR42Gp",
    name: "CR7/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CR7",
    quoteLabel: "USDC"
  },
  {
    address: "53Bs3nD5Rpb1GWqPtweJrELDaLTFithR5JUjnuvYZyNB",
    name: "DEJI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEJI",
    quoteLabel: "SOL"
  },
  {
    address: "6C1qWCnSEid5fNuLd3c1dwu851eHUp6B9rhJHzKax9kw",
    name: "BANC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANC",
    quoteLabel: "USDC"
  },
  {
    address: "B9CDKrzxJxvi8YdRoQMGieazy1P2kTgq3JvvUzcn337b",
    name: "STRLK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STRLK",
    quoteLabel: "USDC"
  },
  {
    address: "97veYjWjvzQTBdhZk236UqRCmY3ctVR5fAutq9VqGNmj",
    name: "TREND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TREND",
    quoteLabel: "USDC"
  },
  {
    address: "7MiThVft8Q9S2QJ7ZnCWprMtnBtnpufZeRJgSMSQBoEe",
    name: "JDE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JDE",
    quoteLabel: "USDC"
  },
  {
    address: "E3oTtDZSqbKQ3woznbHH4uiRBFvkc5gyPWsX85svZWP3",
    name: "Pew/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pew",
    quoteLabel: "USDC"
  },
  {
    address: "H7GE9astcRAwTDRPAAPb39yHAN46R6zothAR2H47n8ag",
    name: "SHIBGPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBGPT",
    quoteLabel: "SOL"
  },
  {
    address: "EPHRux3q3RLBuGsZYS7M5UhMgnspnM5oBVij2KQZKo8E",
    name: "MMAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MMAI",
    quoteLabel: "USDC"
  },
  {
    address: "8unNFyfUToEMi4G8SeWvQu9EPR2FyrPAdqpsHc4KSrxv",
    name: "XZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XZ",
    quoteLabel: "SOL"
  },
  {
    address: "4foD2LkAwZbdsHEz5uBJdohscsJ9thBq1TaZYGLSk1nT",
    name: "PEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "SOL"
  },
  {
    address: "Dxjyxh4m4RZe9DLRXiuK6niSdVm7vxMHZFdoG1AevgS1",
    name: "DEEZN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEEZN",
    quoteLabel: "USDC"
  },
  {
    address: "3Dmrtv3KDybxgPeLUv81CaoxFyCT6GmAWxzii7Gy9YDC",
    name: "Alien/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Alien",
    quoteLabel: "USDC"
  },
  {
    address: "49AMjGkS2CnSibKErTvbT4A83KGEpvta2QGoDyJYjtF2",
    name: "COPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "USDC"
  },
  {
    address: "XCobDNEaQi937v3Q66175zDMiG5Zijvg3x6Np7hTm2m",
    name: "CROC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROC",
    quoteLabel: "SOL"
  },
  {
    address: "2Gyk38TqBijK8PXRauavJYMgsL8TzKEF6fZ8xz5JQTmW",
    name: "Bean/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bean",
    quoteLabel: "USDC"
  },
  {
    address: "3VSk3A4pGxcwj482QKgyu2ZFp56ik6S84VvS8ExhcHrA",
    name: "mSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "mSOL",
    quoteLabel: "SOL"
  },
  {
    address: "EGgeuc4Si4ZX4TNHQ3EvhkaccFzFcEtSYGHb9cjZ1Wpn",
    name: "NEU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEU",
    quoteLabel: "USDC"
  },
  {
    address: "J9Fyisr8woAcGhSC1w1UFKNLsbzTdbV8mkXTXMhgR9pj",
    name: "AGXAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGXAI",
    quoteLabel: "USDC"
  },
  {
    address: "GFeeC2PhCVd5yAsitoC1ynwascinYCDSeMfcUBpsKqum",
    name: "KERMIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KERMIT",
    quoteLabel: "SOL"
  },
  {
    address: "AsL1dBMVZXVDpqbADwBZxrcyMHn5VYtS7z68CPmj3voq",
    name: "GWA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GWA",
    quoteLabel: "SOL"
  },
  {
    address: "BahcMe8AvAFehZdMbYPDQDACamX9Rv4p97BAFU99aR49",
    name: "CORGI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGI",
    quoteLabel: "USDC"
  },
  {
    address: "8sU1LYjrkfkQx8ZZdJu1ktKBVPGEJYfx4B9NGPebjzGa",
    name: "FIRE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FIRE",
    quoteLabel: "USDC"
  },
  {
    address: "8b4ct7JHGMiooUZwk8zmW6tJ3oiUrfWTAPQL9EY3MGKh",
    name: "KING/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KING",
    quoteLabel: "USDC"
  },
  {
    address: "EPvzzxPaTzh1MFVhStHsFhQPsLVyBVKGeKtBRBKyqW5W",
    name: "RYUKYU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RYUKYU",
    quoteLabel: "USDC"
  },
  {
    address: "3dGJ4hBXyWhnp6MLDfxixYoi5qqLnWVCXThL1D3LwVoX",
    name: "SHRIMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRIMP",
    quoteLabel: "USDC"
  },
  {
    address: "Dp6qJHTWkzw8HuyC5nfG9vCMeb4HFcJDUsoyZzbzzxsH",
    name: "CHOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHOW",
    quoteLabel: "USDC"
  },
  {
    address: "8X9iY5HtwTXTnrF5LiwcVPeBqkk2Y4tTRt4g8AqQgu9h",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "ABtBEPzXMxNzKonk97AKsFmRfcjPJD2zuzdTeBZ2NCy7",
    name: "XMOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XMOON",
    quoteLabel: "USDC"
  },
  {
    address: "H6MHpVyFx6QDaV5FTPXX1KYwtLoxaR2QKwTv2b4nKoPX",
    name: "RICHD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RICHD",
    quoteLabel: "USDC"
  },
  {
    address: "3S5YZYCaijjLJLWvZgDY5bFaBEwZvxgXbWjPE861LUFG",
    name: "INKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INKY",
    quoteLabel: "USDC"
  },
  {
    address: "49PtZkT9i4VCybzhaFS61QfuhvDbWuwShFTSvAAPzSFC",
    name: "YATCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YATCH",
    quoteLabel: "USDC"
  },
  {
    address: "3MDDGsxXBM6iwSPqD4C5xzKTsi3WbMz8bKrsipVELNU8",
    name: "CMYK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMYK",
    quoteLabel: "USDC"
  },
  {
    address: "BWzLf13QHL1vGPhTczSUqR5a6C9PT1dBEHSjQYRYxXt9",
    name: "S2023/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "S2023",
    quoteLabel: "SOL"
  },
  {
    address: "9edpkhb7zqGHX8tD8UAocQfbbuoAFqoUEhbfeEbFw59e",
    name: "Godz/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Godz",
    quoteLabel: "USDC"
  },
  {
    address: "FqFFEFSZGs3QRRdi2xC9v3uFS4nvWduE72GEA3bujKMh",
    name: "RBIZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBIZ",
    quoteLabel: "SOL"
  },
  {
    address: "Hhtd7zJGWA5RQsgB7hHDszrBWYAhH7guh3z3PKwaxeuy",
    name: "Agr/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Agr",
    quoteLabel: "USDC"
  },
  {
    address: "6tiK7vQTg6mKL6h5YYqL4J2jkMKCAW9e5S762BuRUqcF",
    name: "TRLSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRLSH",
    quoteLabel: "USDC"
  },
  {
    address: "LrsB5cfGrvaXTufczidxSCKyZWXgqzpucXiGN1wFfB7",
    name: "POX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POX",
    quoteLabel: "SOL"
  },
  {
    address: "D19Dv19WC8C5FosVJ3BdHxf8eoXd87QHZMWKiqdRM3ja",
    name: "MSHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MSHIB",
    quoteLabel: "USDC"
  },
  {
    address: "7qR9uQKgabf8ghtFggrRzgLsXoWVbt3sSxhawekCWAx7",
    name: "NFAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NFAI",
    quoteLabel: "USDC"
  },
  {
    address: "6negRy4FGvdjGRawVpicPoGkjCBcEwsVH1UGLgvLqkE1",
    name: "BPEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPEPE",
    quoteLabel: "SOL"
  },
  {
    address: "2VbQDZFJauLn9Cg1c6Hsu2c5h7LMTxRemS8wv8QxfykV",
    name: "ANT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANT",
    quoteLabel: "SOL"
  },
  {
    address: "2fKrCTr5HyM6ra3Z7tgzXzuX889mmY1dnJgvoUSpbrQS",
    name: "SOL/Port",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Port"
  },
  {
    address: "DfEdzKm7kV9zmEAYx1YMggNnwTWYfJsCoXHKu9CE38Fr",
    name: "KTEN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KTEN",
    quoteLabel: "SOL"
  },
  {
    address: "2ed2ErSRVeqEoWXBAx1xQti5UfuDsh1MQD9YPhELSWWi",
    name: "MND/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MND",
    quoteLabel: "SOL"
  },
  {
    address: "H4dg94THQRGTtzKwRkUR8ZXEeZmAVwooQUMxNy27tJea",
    name: "CHURO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHURO",
    quoteLabel: "USDC"
  },
  {
    address: "8PiFMnPwDzddcxCvdMEDucBuVK2YZ8VKgDRoQ1w6jPWQ",
    name: "BOX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOX",
    quoteLabel: "USDC"
  },
  {
    address: "5ET8P9GJ5FrevuugncvPDZxoCjfBsANGA8AAku76mNc8",
    name: "RYL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RYL",
    quoteLabel: "USDC"
  },
  {
    address: "BmwjDNbxGqp8YtydDUfmrStum4YE4GFBPMSCQedzpE2H",
    name: "TEXAS/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TEXAS",
    quoteLabel: "USDT"
  },
  {
    address: "4QSvaywhcHvTbB5p22ZuXbJBEDqv1ULKURtdkijiMW6J",
    name: "BSI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSI",
    quoteLabel: "USDC"
  },
  {
    address: "FiEUxNpA1tzYLstFb7sVxsKje8LMp96KGs9T8VeyZx74",
    name: "SHINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHINU",
    quoteLabel: "SOL"
  },
  {
    address: "5xbNLEpE8tLaMcnn6BtUMmDcvf8mDs1TnzgxvcS6Pwhr",
    name: "WOD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOD",
    quoteLabel: "USDC"
  },
  {
    address: "8fsjdpWnZNA5gZELZaXSMRq4J7JiGBx6Wx7iDW2eeVVk",
    name: "BUILD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUILD",
    quoteLabel: "USDC"
  },
  {
    address: "7g1x1g7GeAUtmbThFCBxRQqG1Rs7JCxhZLxNi5bKqPiH",
    name: "USDC/MONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "MONK"
  },
  {
    address: "GY6bGFY6GxHKK7mXzoLaVqG8vnSUkptXDBwWhzZWNbys",
    name: "DOODS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOODS",
    quoteLabel: "USDC"
  },
  {
    address: "CEezUyMqqZJYXn851kW872crRD1eEMW9PSXo6xpvCq2n",
    name: "XoX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XoX",
    quoteLabel: "USDC"
  },
  {
    address: "67HcVXkvz5aq74vfYvyebftDqh9ejDvF59ZKuHQYPYKw",
    name: "STEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEP",
    quoteLabel: "USDC"
  },
  {
    address: "5Av5i22WjtbkRwzEzwio5H9nd24XFWwe1X8oNjTXVMdx",
    name: "USDC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "USDC"
  },
  {
    address: "4xja4GzenaPN9zDxdnir9WQPZdKATvGgnWaJx2sheAxm",
    name: "BUFF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUFF",
    quoteLabel: "SOL"
  },
  {
    address: "8tjCA5j6ovawpxWZtt7BQTH17W1tXHKaDCPcj5DrJazr",
    name: "SWASIH/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWASIH",
    quoteLabel: "USDT"
  },
  {
    address: "7mW9vMgpTXAfRc3XTsu41Tu2Kkh8KyPkhDnJ7DRnUBXZ",
    name: "Cute/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cute",
    quoteLabel: "SOL"
  },
  {
    address: "5Vi7XJA91LxY4wo8FKKGAfortcjiekFrbxybTUHvRg8j",
    name: "ORBN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORBN",
    quoteLabel: "USDC"
  },
  {
    address: "Dw4NQjFM3oSa9fc2Mkuu25a3ceUqZYA5HErg6xAbSkKt",
    name: "FLRK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLRK",
    quoteLabel: "SOL"
  },
  {
    address: "6NfoKD2tyArRnTnz4fMMfRrh1GSq926sgHJMptxJWfbz",
    name: "KHINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KHINU",
    quoteLabel: "SOL"
  },
  {
    address: "EEbFbM5GsSePNf2rz8DUfUNhYBfNH5FoFJJJdFTosa1g",
    name: "ICOPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICOPE",
    quoteLabel: "SOL"
  },
  {
    address: "HcTLzfnV8poqXBjZebVn3BvAGqvDDxdvxtuUxRi9pahU",
    name: "USDC/Ainu",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Ainu"
  },
  {
    address: "6kkRiCj929hMnkevm4zrpcz7F9gwyTgGirPQrXTYBuqc",
    name: "MULAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MULAN",
    quoteLabel: "SOL"
  },
  {
    address: "fPSuc6vCBzWRGohWGWGC92XnaDaNGcsoLNKvAtswTEb",
    name: "BRGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRGR",
    quoteLabel: "USDC"
  },
  {
    address: "Et5Qvnm29AMagojf4L8RyJF1SXvevtGnkakeqwwhPPVk",
    name: "FLONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLONK",
    quoteLabel: "USDC"
  },
  {
    address: "7qMFnkRUhqSS5czLZLjD1Je8LNhFJwutknGu9oxACyPo",
    name: "SQTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQTY",
    quoteLabel: "USDC"
  },
  {
    address: "DMqqhuFb5mKxcobrqWf1PjDGjkT8SLhpBLSh732rCLBU",
    name: "GOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOT",
    quoteLabel: "USDC"
  },
  {
    address: "J5HHw72iMEqAzPupiCAgPRQVmaPA1yxR9MJ3HoUG3Bwr",
    name: "BC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BC",
    quoteLabel: "SOL"
  },
  {
    address: "8xdJAfFMP6C53GZLZ7JadB3yCPX2PMKDqYbSxug3R8hZ",
    name: "MGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MGS",
    quoteLabel: "USDC"
  },
  {
    address: "6Mpc8gtFf8ErmLQ3dHMK1eitBXjRzn9JAwhm1ebMFNay",
    name: "SGK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGK",
    quoteLabel: "USDC"
  },
  {
    address: "9akwDW3znH9y2hiRH7HxQp2HHTZf1jBs333x5pvt14AS",
    name: "FLECO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLECO",
    quoteLabel: "SOL"
  },
  {
    address: "GKuAGcmA8k8ZDW2Fa4Uascn2QF5rsGRYAP9Va5M1EF39",
    name: "USDC/TONA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "TONA"
  },
  {
    address: "76opEKw6PLJhf1yzPfK6p9HNqT18uVtJvu8KeDNEKxx9",
    name: "MALA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MALA",
    quoteLabel: "SOL"
  },
  {
    address: "FVYWcBAWKdQVZUTsBEkH4P5YqBm1pVPLXFUM9hbVVuqq",
    name: "DAKKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DAKKO",
    quoteLabel: "USDC"
  },
  {
    address: "5U2Rd8z2jgJ54qVJKoqLTuWBzQ4NfwbmSQkC86UhuXcn",
    name: "HOWL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOWL",
    quoteLabel: "USDC"
  },
  {
    address: "7XyGma6rC1jL1YxWZPSU8ojjpjEaGGVZdLWrTeWL5NXt",
    name: "GRMC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRMC",
    quoteLabel: "USDC"
  },
  {
    address: "Fmjraf46Cgoq8axzLqvAR5knEJtf6hVPL8HcmLgVrcSu",
    name: "USDC/SOLFI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOLFI"
  },
  {
    address: "BPwsCQkj1qXruStNxt1S6uZst9V1NdkgetQBj8oiDaKr",
    name: "INJ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INJ",
    quoteLabel: "USDC"
  },
  {
    address: "55ovCF3dfq511gpYp4xkJ9cZJC7eL2d1CfuFhMTcpfRY",
    name: "MORGA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MORGA",
    quoteLabel: "USDC"
  },
  {
    address: "DTYidgZae6XSe6bCHmqt9moXHvjrTgjDEYKhaBYHEMZe",
    name: "DNUTS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DNUTS",
    quoteLabel: "USDC"
  },
  {
    address: "Cx7nxRcRnNPbQdK8NupxoEZw7uHVmSZNhGV9JQuzS78P",
    name: "Pi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pi",
    quoteLabel: "USDC"
  },
  {
    address: "DdkCvSCLLWB89zyKJxu7sr4MWpbcf6x835rzzmFfkbLQ",
    name: "SOLBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLBA",
    quoteLabel: "SOL"
  },
  {
    address: "69u611xVQiu6rP9qYGLbo9wZJ2Fw8Uz61gKEtAw1MASU",
    name: "CCS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCS",
    quoteLabel: "USDC"
  },
  {
    address: "DdPjzy2oGbFzAYZEAcrK9QJ9Gb2XkNmMCemfCrMpNQHG",
    name: "YUMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YUMI",
    quoteLabel: "USDC"
  },
  {
    address: "HEFSPJ5qtZ14B9wL2nE1YyYZKZeBg72E84UDvQ9DQHzC",
    name: "ESOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ESOL",
    quoteLabel: "SOL"
  },
  {
    address: "EzF96AC2LHLTzj5Z7asAmiiJP42Z2EUFptKoGntoT6f2",
    name: "CP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CP",
    quoteLabel: "USDC"
  },
  {
    address: "9F6s9RPUAV2zcbFtCi3woYqsMBdAWsjE7hmszZUJB2vC",
    name: "EGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EGPT",
    quoteLabel: "USDC"
  },
  {
    address: "GkG2HxN9cKzjJquVovtfY8hGkHJuoEk3QxJ9Z39q2jqJ",
    name: "NFTL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NFTL",
    quoteLabel: "USDC"
  },
  {
    address: "6CHijXoVfywzb3eVzJ19i5v4TuYyyBdF6LK6uhFctMMa",
    name: "USDC/SOFE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOFE"
  },
  {
    address: "DtXjxPw8hgKyz1dALfYeEYDegXmU7HeQqpcAvBvjhw8y",
    name: "DERP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DERP",
    quoteLabel: "USDC"
  },
  {
    address: "BcxLoJyD23CTfRDrRsTFjm9fw7HPqNTCNxHJY66XXUN9",
    name: "Nova/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Nova",
    quoteLabel: "USDC"
  },
  {
    address: "BhorzKT21XxUAXfj5AfPogAkzbBN7TksEnWoQaX6KaEX",
    name: "RUG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUG",
    quoteLabel: "SOL"
  },
  {
    address: "6nTN1VRiieTfaMT57zTocEj5g172sTW5JKMwBJ2wBDnn",
    name: "BYODA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BYODA",
    quoteLabel: "USDC"
  },
  {
    address: "3uNBx8NmK3Cua5htkztmhHtYbu8PNUPNgb8Mh3yReLbo",
    name: "SGROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGROW",
    quoteLabel: "USDC"
  },
  {
    address: "56TrTRgrmmb5XjYzJy8hnCAFPK9ksukmv23gpRe2ss2z",
    name: "ARENA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARENA",
    quoteLabel: "USDC"
  },
  {
    address: "GVzoCCvs7xqghRb5TbaWs7DapCLbyo9sJC4S8ouEq2LJ",
    name: "PRISM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRISM",
    quoteLabel: "USDC"
  },
  {
    address: "AawzP1xzUA9BPbiXyDcoHcXDtRVM7AvoFs14meyuK6en",
    name: "SAIKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAIKO",
    quoteLabel: "SOL"
  },
  {
    address: "GSopqxDMYVAUgVi31jCfs54QGjiPXpipfUFc67QPSJbQ",
    name: "BEAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAR",
    quoteLabel: "SOL"
  },
  {
    address: "2a5d5BQSBnL1URtDrP2uxMupDYed3yteoRKtRtrwz4jz",
    name: "SDD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDD",
    quoteLabel: "USDC"
  },
  {
    address: "AYj8uZuRYzjTAkkHzE5Faz5docr8F8264hDVCpwpB6As",
    name: "CHEW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEW",
    quoteLabel: "USDC"
  },
  {
    address: "9WjwBkchherNfVLdvi6ewA1P3eDCK7CiFnrek3P1u2f9",
    name: "SPUMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPUMA",
    quoteLabel: "USDC"
  },
  {
    address: "5aqbuSK4QHJFfiaALdFvgDkAenR3cjBBU8BQEtXnsy3k",
    name: "SAFE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFE",
    quoteLabel: "SOL"
  },
  {
    address: "7jirXf7zuGAv3T9zEcPk61LTiQK1q99t5ftbnV1jU8C4",
    name: "SOLSB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLSB",
    quoteLabel: "SOL"
  },
  {
    address: "DcTfdKdZNgGr88uDpKitYHRfXSV5CbpXUbcDxhCJYHuL",
    name: "KMOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KMOON",
    quoteLabel: "USDC"
  },
  {
    address: "C7s3GnJArczVyBd5c7hNx8Erudk3svXQiqk3NUCqTWfU",
    name: "AIVIRX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIVIRX",
    quoteLabel: "USDC"
  },
  {
    address: "4PbQGSvzcvgo9h9F1FvbeEuECLgS8ocSBxS7QgqxqGQD",
    name: "SATE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SATE",
    quoteLabel: "USDC"
  },
  {
    address: "5MqEvBNSzSSVWbD4GyadyBdidTt5LDGA1b2ZJkNRa6RP",
    name: "Dik/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Dik",
    quoteLabel: "USDC"
  },
  {
    address: "CyUn57uzmjJErc8YtCkv5Sg4Kk5bdrVb7hF4e3s6xNat",
    name: "YOSA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YOSA",
    quoteLabel: "USDC"
  },
  {
    address: "6CAE3P8oFq8HzqGj4zfX8QMYVFSZb6b1Hyf7FZsatuwk",
    name: "PYRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PYRO",
    quoteLabel: "USDC"
  },
  {
    address: "5R4yDCwhFVVGQWjcpn32HuynC9Qs2GEyQgwTgqpLwuPM",
    name: "AHF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AHF",
    quoteLabel: "SOL"
  },
  {
    address: "Ejbxw6sFixMb8BBSaCBz5DTjgWERK8E21GMZmv67SrAf",
    name: "INKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INKY",
    quoteLabel: "USDC"
  },
  {
    address: "D7S61bG2c5FvZ4LjPu8HH1nGbcsHa2BAgnDwTLGdttCg",
    name: "MONSTA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONSTA",
    quoteLabel: "USDC"
  },
  {
    address: "9memy8ykpoShDJAcVBQckkFdRhaQyiaD7khymNDgXCQi",
    name: "YFC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YFC",
    quoteLabel: "USDC"
  },
  {
    address: "D4xwpJV7ihHJgqDXPxstLvJDqSkLFfYKuw1Cb7f2q5dw",
    name: "UPDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UPDOG",
    quoteLabel: "USDC"
  },
  {
    address: "DSGYCbqJsf9QtFA7dS4zyp431h3iznxYAdqXuQG5UJ5F",
    name: "FUD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUD",
    quoteLabel: "SOL"
  },
  {
    address: "BCuQgRqKa7oUvEZBj6SzawxdqpAfYoeWJKKJPTzkDQD5",
    name: "420/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "420",
    quoteLabel: "USDC"
  },
  {
    address: "6M3dqEVSUZE5f41Hdoyms1n22uRiKYPhuLX7WAQZwQwV",
    name: "SUNLI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUNLI",
    quoteLabel: "USDC"
  },
  {
    address: "6k9UBo4baQWcMjqa53EoGhHZxq6cXCEFXekQRnRbSMBH",
    name: "PUGY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUGY",
    quoteLabel: "USDC"
  },
  {
    address: "A84qX4rxW7vUaf3YWyC5XHa1iePfj8UNuqG9hHpqcjWV",
    name: "Lambo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Lambo",
    quoteLabel: "USDC"
  },
  {
    address: "Gw6zTpsyy267qPdJT9bLSRjHwmFAh7cYPYWTw8RftwqR",
    name: "SOL/Sloki",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Sloki"
  },
  {
    address: "D5zvuAsE2VTACyNFQZMRnyveevgLmhmGLyvsyWcbuevj",
    name: "Sman/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sman",
    quoteLabel: "USDC"
  },
  {
    address: "EA88yTE9JooNnpvUHdprHRrCJRX764QfkiRx33ALMPG7",
    name: "KWECK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KWECK",
    quoteLabel: "USDC"
  },
  {
    address: "EvxT43ryavaWczSHQXHyu11LCHzSr64nwCjt5BH53Vdo",
    name: "FLARE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLARE",
    quoteLabel: "USDC"
  },
  {
    address: "CtVMPcqAhfbiuwzrw95VxdU2AYFFcxymZ39pJTCfzRvu",
    name: "SOLP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLP",
    quoteLabel: "USDC"
  },
  {
    address: "ES833kt627WmwJ1AnNa3sZ7kN3HvABwRbUSjMP1nEbgg",
    name: "Taro/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Taro",
    quoteLabel: "SOL"
  },
  {
    address: "7BPg67mM5mgw525S1U9WGnrYhkDXDCh2V3x6Sz47ctZi",
    name: "AIR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIR",
    quoteLabel: "USDC"
  },
  {
    address: "5hzxy62vtxR46D4N7CjoXLRHLUqYMnQrkajus3VKviDM",
    name: "PUMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUMP",
    quoteLabel: "USDC"
  },
  {
    address: "8SvurH6G3jGrsUSkf5LjaXiUfJynhvsSWMpbPG6Cv51R",
    name: "Mocha/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Mocha",
    quoteLabel: "USDC"
  },
  {
    address: "3aChfozBN1uKwkNrqMi1XQpwRjXx3jP8CJfM5FS43KC7",
    name: "HBOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HBOT",
    quoteLabel: "USDC"
  },
  {
    address: "5GYpZZBBSnMDBmdnmsSdSb3Ea9ZxQ5VewVVpnG2yudpR",
    name: "SOL/SOLSHIB",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SOLSHIB"
  },
  {
    address: "2JvgEvp7s1KNnBNmtDhDfPGaBbDnFxWF4Qkyh6CihzPm",
    name: "bro token/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bro token",
    quoteLabel: "SOL"
  },
  {
    address: "AU7T3gc36tS9dpG8WeBfBi82ir8Pfp3PJZHwNrXpGHe9",
    name: "SQUID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQUID",
    quoteLabel: "USDC"
  },
  {
    address: "BxH66hbEwyXQavDxbnFRTLJsqbP8bw3mQFAkSi6zbp6R",
    name: "COPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "SOL"
  },
  {
    address: "8u8cDT2HLeA1qkRnmJHTn5axWeCChh3uyUdV96XwjXBW",
    name: "SOLAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAR",
    quoteLabel: "SOL"
  },
  {
    address: "3NLzsegbcCRCjsx373DqYFRXYcQk3PCQKUn55xEY76N7",
    name: "BANGZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGZ",
    quoteLabel: "USDC"
  },
  {
    address: "8QEtB9TCvHkSKLWZ2BVHijpcHrphEtW9wtpEcezr5Dpr",
    name: "MICKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MICKY",
    quoteLabel: "USDC"
  },
  {
    address: "4LpwR8bH6NjqBnJB3FhTrNz3EtgrKFnmKbFLKwGiXkKV",
    name: "FLOFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOFF",
    quoteLabel: "USDC"
  },
  {
    address: "yv2bnuRxrTfVrdj2fCnUKKTF1ZZy3XDJKuSSdM69tBQ",
    name: "CHIPS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIPS",
    quoteLabel: "SOL"
  },
  {
    address: "4axvG2gSgjdEaDVkvXAQSVVhiLsv8whyksxvJWvA2zCX",
    name: "SAMS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMS",
    quoteLabel: "USDC"
  },
  {
    address: "A8TffRMy4xiiyAaHa6pQv4gr54Trg5WiNCZzq5gJsPeR",
    name: "KONG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "SOL"
  },
  {
    address: "AMVDEDkRSCZ7C51t98vgs6UsBJgqL2XJ9ZuzGYnavFWf",
    name: "PI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PI",
    quoteLabel: "SOL"
  },
  {
    address: "HtaMsyJG1LYD8UAGpP4Euau9gNPV756U5hoGMw7CszQM",
    name: "OKANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKANA",
    quoteLabel: "USDC"
  },
  {
    address: "4Doa4JEFSB7rvDoL36CXHmAbNxmvtBXEaMHhia91KU6R",
    name: "PIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIK",
    quoteLabel: "USDC"
  },
  {
    address: "BscS73T7CbZRHViftyyYCJnyBicbvG1TYmU7Bnutkau2",
    name: "ROAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROAR",
    quoteLabel: "USDC"
  },
  {
    address: "Aaf4bHHiMn8K67DB7226k4ZBoNKxj9VpyC9KTounk6a2",
    name: "Bakr/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bakr",
    quoteLabel: "USDC"
  },
  {
    address: "CzW3NxLynN3eyvEDxxgUq7ydFXWJY6mibtVwgBBcM6G4",
    name: "MONKI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKI",
    quoteLabel: "SOL"
  },
  {
    address: "FWhNFbGkdvbfrT2ixfcWjXvJsPsjAcuFdhCt7fcyHLiE",
    name: "SLOW/mSOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLOW",
    quoteLabel: "mSOL"
  },
  {
    address: "DeBQqUs1ohPCS91jyer9g8UESToY45w8CM4KF4X3Fu1q",
    name: "FOXB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXB",
    quoteLabel: "USDC"
  },
  {
    address: "5YHmmszWwxzwaDKi21set8cD3JJsbSwn8spXp4Qhm1iX",
    name: "TEM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TEM",
    quoteLabel: "USDC"
  },
  {
    address: "DnDGku5mSrwwGt7tx4S1imfgiCQ4GJqGbnB8519q6DE1",
    name: "PANAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PANAI",
    quoteLabel: "USDC"
  },
  {
    address: "FEyqbmgjr3amPjradwyfnZHtRVf7tDyxoL2VbLjsuQJS",
    name: "GOAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOAT",
    quoteLabel: "USDC"
  },
  {
    address: "Gpoa9k2vpt61gQc8AKZ9xyFn6dAzWVCwFUx2C4NV4yYj",
    name: "SMRAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMRAT",
    quoteLabel: "USDC"
  },
  {
    address: "B4BSvQ3hMw1MHyeD51ZAPAN3NDPG94i3hXRk3YKyjcLA",
    name: "PAWB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAWB",
    quoteLabel: "USDC"
  },
  {
    address: "DWNiDFKMrkQo7cXCfTHztDJgoYv1XMVGfoQsUQepcBgK",
    name: "SMOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOON",
    quoteLabel: "SOL"
  },
  {
    address: "HkZHCfvdG2C4J17k4ew74d9CGKz8mX1QTtgas4EwHXvc",
    name: "ONIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ONIC",
    quoteLabel: "USDC"
  },
  {
    address: "DnHjymKDqZQDhDJRNYbJGJK3XFobhiwLCPLDMZXLmpHE",
    name: "CHIKS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIKS",
    quoteLabel: "USDC"
  },
  {
    address: "76uPeWZzw8Um566hBnSsh17Sxz11bzWf1D3gchwUvGsv",
    name: "TRC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRC",
    quoteLabel: "USDC"
  },
  {
    address: "CfcoyayuqmGhM18hawE5mcTKrKRnip4umZcEPkCZGAX8",
    name: "CROCO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROCO",
    quoteLabel: "USDC"
  },
  {
    address: "78LFUyXWLsxKbrqzBMwLxCjGMfb6FeVxrGLai1EDqU9h",
    name: "SHAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHAB",
    quoteLabel: "USDC"
  },
  {
    address: "7VxnRw6fJh4bRAqe6Y7yLU6N5CkTrZGdwYef8FT5NfpS",
    name: "SPARTA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPARTA",
    quoteLabel: "SOL"
  },
  {
    address: "HhwYFUfEZg9FooFiDUEfGPR7TyJyHcxXRy3QpEdpVXi5",
    name: "MMDS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MMDS",
    quoteLabel: "USDC"
  },
  {
    address: "Gdi9JvcxkLsbeyPPrGfxNdGBSNDtVCcjtzUxG7en4RAS",
    name: "SSDAO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSDAO",
    quoteLabel: "USDC"
  },
  {
    address: "Aoa5pC2pouRRPzwKBuM6S4PwJVqiAzESoTNPk6a8zMx3",
    name: "BAGS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAGS",
    quoteLabel: "SOL"
  },
  {
    address: "H6xfiXobkVQ7YhmJJMJPK9FtL7uLU6B91jt7uB2JsMLV",
    name: "Whi/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Whi",
    quoteLabel: "SOL"
  },
  {
    address: "JCXrAamNyeWU4JxQTGAKkeMNusnnh3HvUD6Lie1LhU6i",
    name: "MAGIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDC"
  },
  {
    address: "Dc1j5WUGayjM1ZbsMgs1HQqkUyYqbJnB9rjN73acZm9u",
    name: "CCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCAT",
    quoteLabel: "USDC"
  },
  {
    address: "Gp228vqpx15tEpKfgVhwomMdvL84GaTRRbUv8UqXfAMH",
    name: "JOJO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JOJO",
    quoteLabel: "USDC"
  },
  {
    address: "3fMwaX1keKVp7V9XBAnPPNJyPpHMXmwGbWEtceG7EPHQ",
    name: "KIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIN",
    quoteLabel: "SOL"
  },
  {
    address: "FN95TDgnotycg8q4o3KDyxJiPspgQpfAn6Cqp59Wgsex",
    name: "POO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POO",
    quoteLabel: "USDC"
  },
  {
    address: "8LSWAS3bHPTmfZEmfFTWjzRfx6FvPDKESTZ55DKCXucb",
    name: "Polar/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Polar",
    quoteLabel: "USDC"
  },
  {
    address: "F3eZByH3K7RRNUESqSRNTXbCNLKUe7FBkD9ZVKbmZAtf",
    name: "KNIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNIT",
    quoteLabel: "SOL"
  },
  {
    address: "CNKxQnYbufiRxZDYgec1NyUQAWVMja27dMWCmPKG42qL",
    name: "SHIBN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBN",
    quoteLabel: "USDC"
  },
  {
    address: "CBJxopcNHzManHBNAyKM2JmFDWw6pw4THqGMktopL5Nr",
    name: "MEMU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEMU",
    quoteLabel: "USDC"
  },
  {
    address: "AGwZ4oHcjkxwUtQbyQaWGCjdRWR6ogizMoPy3jidhkk4",
    name: "MATRIX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MATRIX",
    quoteLabel: "USDC"
  },
  {
    address: "HBQwrpENKkt8yEZpkwerY6n7jqpNzmbXJgmaB4cbFwWz",
    name: "RAINBOW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAINBOW",
    quoteLabel: "SOL"
  },
  {
    address: "5fY4e9rwyy5Rwrh8LfX9dTveQrUFKbAmbnFdohg7fjrK",
    name: "AXX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AXX",
    quoteLabel: "SOL"
  },
  {
    address: "CnTtRQvQHYw73JtnX3ckcptPPMPqFRrUfLRUiuvF2oFt",
    name: "OHMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OHMI",
    quoteLabel: "USDC"
  },
  {
    address: "A2tiSreCNdLVU77ecMD8t3GivhwVrRUvo3EsmkEgkHh2",
    name: "DOGCE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGCE",
    quoteLabel: "USDC"
  },
  {
    address: "FpuXv9e9E9EMPN9kiLaqHPnK7FB9vko2wM31zmd6c6zV",
    name: "DOGGO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "SOL"
  },
  {
    address: "3qPmkMY1NGvHypKwyztSmttNkgQJw7avFRT5tjxMTyAh",
    name: "APSO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APSO",
    quoteLabel: "USDC"
  },
  {
    address: "2YnAa5QdCUok5Gixs2BgTtBnEU6mX2CXrwpNgpcVbZnM",
    name: "ABC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ABC",
    quoteLabel: "USDC"
  },
  {
    address: "7k9TwBucSrtTx3RYK9e2KHK2NUiC8cgpfN53QUqBqw1z",
    name: "TAIYO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TAIYO",
    quoteLabel: "USDC"
  },
  {
    address: "8WdmKZ4qQbdCpyMyw6dUcfC9FVMKLchna1rz36aHbA7h",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "HFNXXZVfqNNDEXNysSzHaZkKxRRYYc5c1cr1FTYxyJTE",
    name: "FOXT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXT",
    quoteLabel: "USDC"
  },
  {
    address: "8tBSdWGGbU9hwKxCWPG7JEGT8n196V2CmHU6h1hvWvmw",
    name: "BST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BST",
    quoteLabel: "SOL"
  },
  {
    address: "GXvrTEL16vVYNrsDrxbaLYrSSWzrHdYDz2uGirH3Earu",
    name: "NEWTON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEWTON",
    quoteLabel: "USDC"
  },
  {
    address: "B8vHX477E5GsaQs1PudNQU8RdbrcsxaZUaYmck22gru2",
    name: "EYE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EYE",
    quoteLabel: "SOL"
  },
  {
    address: "71V8jsA4bffEgroERNArQxURacWafN7a4w5FQn3sR2iW",
    name: "BURGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURGR",
    quoteLabel: "USDC"
  },
  {
    address: "DsiiyPVBDryEWiVyXfN1Ys6nU2B8LvCu1HVrKNAnSEgD",
    name: "SOL/Ski",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Ski"
  },
  {
    address: "5J25FF6z9gR7bzmPznVRfpRWChHvuKopyKMtdQPo5zb8",
    name: "BPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "G3kXAof2ZRwwsBtvD1aK7fRdVcct8iDrUMTTMpskETiG",
    name: "OCTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OCTO",
    quoteLabel: "USDC"
  },
  {
    address: "BweTLdK1AcVDCFbRfdJwYRLCtkiYXiSfKbVWb24LLTqw",
    name: "DOGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "USDC"
  },
  {
    address: "7EbiyMiwRQGNEUSWC6PQr472c4VvKNzwxLYJgMesAxBs",
    name: "CHICO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHICO",
    quoteLabel: "USDC"
  },
  {
    address: "6hTYPYF8TUeQnRSHJqyfcU9hR5kXNNev5F3mKskZ18iv",
    name: "BINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BINU",
    quoteLabel: "SOL"
  },
  {
    address: "ztX4qTpHWJN7WbT4Q5s98GuoFybmDDQhxrH8mWdqBGP",
    name: "OGG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OGG",
    quoteLabel: "USDC"
  },
  {
    address: "4K5gB8ahW9KP7sScPLAnjsehwvbBELmwAVQDMg2KpDFZ",
    name: "BDG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDG",
    quoteLabel: "USDC"
  },
  {
    address: "2RDCk1g7wkV7WPWaW5o98MEewiDyAGmNkxHDBL7yeBUU",
    name: "SOL/SBONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SBONK"
  },
  {
    address: "DPFCGf8UtFw2D4L311hb44rzx3DXSVCaDU4MGiV671uJ",
    name: "TOSHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOSHI",
    quoteLabel: "USDC"
  },
  {
    address: "5gUJcAogTXwtyDW13qPq6AGmcYt7DMUcFZEEwqK7odxC",
    name: "JUV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JUV",
    quoteLabel: "USDC"
  },
  {
    address: "BzfZ1gtQzh9FKcbaU5gqQMqmzX6y2rPW3WgS1oK5RL5y",
    name: "STBL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STBL",
    quoteLabel: "USDC"
  },
  {
    address: "D9i6ux5fVuRdqwdz3ZkiayVKoKwWiEwCeJz8SxdAoavz",
    name: "MOONR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOONR",
    quoteLabel: "USDC"
  },
  {
    address: "44GWrwnbA7iKzEriGgh5CghX6a8MDLhwydWTWtxrvU2X",
    name: "BUMPP/BATT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUMPP",
    quoteLabel: "BATT"
  },
  {
    address: "8xjxNFvgc1uXQUaN3ZktRLBw5g89rLznQipgy7rYwWRQ",
    name: "CUJO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUJO",
    quoteLabel: "USDC"
  },
  {
    address: "3M5TEhYkwwvqdvG5CLExcDrr3umVTyDgz7EQy3mmSr3h",
    name: "USDC/ONEPIECE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "ONEPIECE"
  },
  {
    address: "ghKytBomSYDVfeciy1qzu6zbR3KRUaeCyQmJva3ui1V",
    name: "AXXO/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AXXO",
    quoteLabel: "Bonk"
  },
  {
    address: "DafL9fKCfDwmka2MAF7NJ2aCJkZhXoYMEPAEGnDXgQva",
    name: "PUMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUMP",
    quoteLabel: "USDC"
  },
  {
    address: "64dHa5meeYXgAtchep4UgKGnssUKmAvgNDrT3DcyUCYQ",
    name: "MEGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEGO",
    quoteLabel: "USDC"
  },
  {
    address: "GZfhKSAAUNBHWifPBfTZDRtVbw8ihoQ19psnAN51WDqa",
    name: "CANDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CANDY",
    quoteLabel: "USDC"
  },
  {
    address: "xbXuadTtw9YJLb6ta9DEYSKyBAyxLixehaW5y1MEccg",
    name: "SOL/BLUE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BLUE"
  },
  {
    address: "HUqhU5W3kX7rNKAyvNZWVEywLUu1p1T7YUvEM6tXWcBC",
    name: "SEEMS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SEEMS",
    quoteLabel: "USDC"
  },
  {
    address: "6dWZLJif98xeyCUPvAEm5asiRENnBc2giELQ7wYMc9DF",
    name: "SWIM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWIM",
    quoteLabel: "USDC"
  },
  {
    address: "5oKufnbWfjUhJjEyX2XoiWG8pgyVov3Xo4KQge5f4DiL",
    name: "SOL/HACHIKO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "HACHIKO"
  },
  {
    address: "7NPxoWzAkzFVjJ9hCjvMbwg4Gb1KP1FQeBGRm1Coh1re",
    name: "RUSTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUSTY",
    quoteLabel: "USDC"
  },
  {
    address: "5KYEeoJfAfUojz2wo9YSFUTctYD8SFpFbLqkuAjUmGet",
    name: "SPepe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPepe",
    quoteLabel: "USDC"
  },
  {
    address: "4MBH8okgokyjzhE6jiDhrG6VCHk4u1BTYtji9F76wi9b",
    name: "BOREDINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOREDINU",
    quoteLabel: "USDC"
  },
  {
    address: "7TjNAw4ssPnf5bFqqu7wYVumkpSGQqhLGxJHzRehsjfS",
    name: "USDC/MINU",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "MINU"
  },
  {
    address: "7Ghy5hMFacz75YrNhdnV31TMv4w4y7rAE32XF84zXbeE",
    name: "HOT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOT",
    quoteLabel: "SOL"
  },
  {
    address: "9ZgfMY5Thu6bGWei9Z46WEGGGFpNrVEoKhdmbqrwYtFP",
    name: "KANGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KANGO",
    quoteLabel: "USDC"
  },
  {
    address: "2n8UuSpXssJLZJMReiPfHdZUBhh7aZKw9UxqhkUjrDsm",
    name: "SINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINU",
    quoteLabel: "USDC"
  },
  {
    address: "86uKru98PdVMJ1yJU2vy2H2sdiMb61fvW7a1zAZM9PA4",
    name: "SOLRS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLRS",
    quoteLabel: "SOL"
  },
  {
    address: "2jGjksjuyL4JDANf1ChDCYYsJDDTKU3Guegtph7xbXLb",
    name: "PULP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PULP",
    quoteLabel: "USDC"
  },
  {
    address: "G6JFiQ2qhH5AZwSJUeKH34TkKpZnyfXfXEuNb5d9yaqp",
    name: "Mpepe/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Mpepe",
    quoteLabel: "SOL"
  },
  {
    address: "CbHNyxFJUERTooqEzurwC9d1LhRfioC19UpaxTqkF2hk",
    name: "Rick/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Rick",
    quoteLabel: "SOL"
  },
  {
    address: "ubfPD3jwac6Xmnxipug4xzqqX4kzDgktUXGDDAH6wS8",
    name: "ALPHA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALPHA",
    quoteLabel: "SOL"
  },
  {
    address: "48FqPFqGfVyTUXe4thXcMc3pyGhQavSqLyRvvsc8fx6L",
    name: "100x/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "100x",
    quoteLabel: "USDC"
  },
  {
    address: "BfWZaGngPewnUzn7pszPP7rSMMNA5sQd1qGrMxC9KUfR",
    name: "MIKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIKA",
    quoteLabel: "USDC"
  },
  {
    address: "352UcHBCoHPfbGDvohqM7R89ECq3xZTPs273jJKS1TnW",
    name: "Sai/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sai",
    quoteLabel: "USDC"
  },
  {
    address: "AfFo8P3G8NayufXjjk1DeopvVevSahjqhRDYhZyHQrsy",
    name: "GURU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GURU",
    quoteLabel: "USDC"
  },
  {
    address: "5mUrTFPq4jhy4j2kUg3DpSTgEa4iDp3fTfXC6b6s5m3N",
    name: "ABDG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ABDG",
    quoteLabel: "USDC"
  },
  {
    address: "FqFyP3jp75jBLyKR68FuhasJgeD6VxRiPuFvGsgkMNPS",
    name: "RAC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAC",
    quoteLabel: "USDC"
  },
  {
    address: "6gM5MDQj3ix4wZNAM1ViFeD93G8Uhdi2DCTVSJXzGVsr",
    name: "SAUR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAUR",
    quoteLabel: "USDC"
  },
  {
    address: "2Fpg7ZbYtN4Rf4bDzg17AVWXk1WtzoFdWpSv5qz6andy",
    name: "SAFUU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFUU",
    quoteLabel: "SOL"
  },
  {
    address: "7YjT3h6SDabg2EhpujwsmUjPVjftPLj2ia1Y89NjxY95",
    name: "SAPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAPE",
    quoteLabel: "SOL"
  },
  {
    address: "3DsrLymZdnE36VunGdLXSrMBBmAHb71H1fbG3MVuViUx",
    name: "PIGGY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIGGY",
    quoteLabel: "USDC"
  },
  {
    address: "CG8Tg6YEsNF3thpHpg1pCs2kYJrhMinAtbEDjnN72nAj",
    name: "HART/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HART",
    quoteLabel: "SOL"
  },
  {
    address: "8PrP9XaxGZqGrrnHekduyDk8BiFqFDr1YnihU5mUByiJ",
    name: "SND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SND",
    quoteLabel: "USDC"
  },
  {
    address: "C73ybTEFm6rHE2Sq7wTp782gpowoxmKT1knFxd3E7hEn",
    name: "BonkSam/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkSam",
    quoteLabel: "USDC"
  },
  {
    address: "C9cWi7jXQLWU3Nn8wpAi2nJUrRWxZSkBcpU8QkV7YoBt",
    name: "SOLSC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLSC",
    quoteLabel: "USDC"
  },
  {
    address: "AX5jPKMFAwSeqDs14nLj7JZHVYDaJQaKskWsps7opMMP",
    name: "TROLL/NANA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "NANA"
  },
  {
    address: "5CFyxsUXYLY3ziwvStXQ354LsLn8rkjatTo8RU7SeeGx",
    name: "GIZMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GIZMO",
    quoteLabel: "USDC"
  },
  {
    address: "HP6UqQ9e1HeP3x9KigSUskchHrCnG8wJWaFFtssWS2Cx",
    name: "GMB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GMB",
    quoteLabel: "SOL"
  },
  {
    address: "3EhQU4ZY6uxxoe5hi27FvKLnLX9pKnMrMEAZVrqJdnfx",
    name: "FDog/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FDog",
    quoteLabel: "SOL"
  },
  {
    address: "6YXGSrcC8LT3RtdTTWpwGMs7aWSjTBMwBG9na7h3FgJA",
    name: "MAGIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDC"
  },
  {
    address: "2Uzk7CWiGLNdjP3DzB7Z9DQs23EZZ6H34GdeW51xfmkt",
    name: "TET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TET",
    quoteLabel: "SOL"
  },
  {
    address: "3bcm6mPqaZUfJDkMoLD6Qn2jAgmaujjzbTGj397a1k5p",
    name: "SHINO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHINO",
    quoteLabel: "USDC"
  },
  {
    address: "BUnrChBeH9EDBxmqDecvB2r4jjaQXDRgUenKswcCvBWP",
    name: "OBS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OBS",
    quoteLabel: "USDC"
  },
  {
    address: "DDJUXFQsYu1fQHijtE1hqbZUbqgBxYU9wCpohcnaQsmH",
    name: "PMILK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PMILK",
    quoteLabel: "USDC"
  },
  {
    address: "B5WjFRCgnW6yMdW3Ww9wkV2xYVpVk48XxdP8p3QydizT",
    name: "PCN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PCN",
    quoteLabel: "SOL"
  },
  {
    address: "4NhjQhQDEk61TxRgTU1uhYerm6vVgJvY1EZoDRhg21ar",
    name: "BUTTER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUTTER",
    quoteLabel: "USDC"
  },
  {
    address: "qXdJFGKXQWLzcPKmE52VDLqP4ogBMZ24gNBuR126RZW",
    name: "DDOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DDOGE",
    quoteLabel: "SOL"
  },
  {
    address: "5zyJhifDDLgZBqgEVH7UzqdhXsNuXuRW1N8UQ4Unb1FY",
    name: "BLOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOW",
    quoteLabel: "USDC"
  },
  {
    address: "5hfu1CGedRDyFkymcdup2mec1z2craLijF8FhV2UqTsT",
    name: "BORED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BORED",
    quoteLabel: "USDC"
  },
  {
    address: "FNr7JqUsDTySUti99ofTgy4afUh3uzCjL9MSexv3wveZ",
    name: "NINJA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NINJA",
    quoteLabel: "USDC"
  },
  {
    address: "33R8DKejSaVkPmkV7vTHQkpTKmeZnPNaiCBgjDFTkJJK",
    name: "DUST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUST",
    quoteLabel: "SOL"
  },
  {
    address: "85ZWD7w2uRUrqQHoRmQsBjTApKHB774zKh6PbjHX5y85",
    name: "MAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAI",
    quoteLabel: "USDC"
  },
  {
    address: "FxahCRThAS2E1iBKfgTTjWHWduPnXCn5bJTKvd3cVtSJ",
    name: "UWU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UWU",
    quoteLabel: "USDC"
  },
  {
    address: "14EDx2fMDZS78McbQo9UkwcZhh3NBbHXQppeCbazozkV",
    name: "idb/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "idb",
    quoteLabel: "USDC"
  },
  {
    address: "BF5tFwVgtpfv4EadwZkwDp33BbohXXiiZTnW4R6MFKed",
    name: "FRKm/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRKm",
    quoteLabel: "USDC"
  },
  {
    address: "EJfjvzgGCcafpEK8DCHUW3EaS3CPf42HyS1QF2Mn4nxQ",
    name: "STR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STR",
    quoteLabel: "USDC"
  },
  {
    address: "3wnJxhr6UareqWLrZV3HUAeU3qn8K43ijGpJD8XGCieK",
    name: "SCHAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCHAD",
    quoteLabel: "USDC"
  },
  {
    address: "9sn7fTdZuAbDy5VZgRtyPYhAdxSKgTaGMVvWH8awfdfZ",
    name: "BAPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAPE",
    quoteLabel: "SOL"
  },
  {
    address: "6398HExCVBDf5qo1vq52m3BafbtmQwC37bJ7i977cN7Z",
    name: "SFROG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFROG",
    quoteLabel: "SOL"
  },
  {
    address: "7F3RdHaJ4gdt3fU4fmEjnAgv5KPmDDjQAdVCcwhPRX7e",
    name: "COPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "USDC"
  },
  {
    address: "4mLUZcQZXid4hTsedT3VNFGuppUjgRRyZ9hxXgGB9b4g",
    name: "DMDL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DMDL",
    quoteLabel: "USDC"
  },
  {
    address: "GDfZhncqQGWerBB2Y7MV2KgUZ5opkzkmcQWVGnRRdDtF",
    name: "Twizz/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Twizz",
    quoteLabel: "SOL"
  },
  {
    address: "FHNK8BTU3zEa9Fw7iLhfFcTEcwL8YCJdXe1JFjwJQSer",
    name: "HTMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HTMP",
    quoteLabel: "USDC"
  },
  {
    address: "7sCNoY9zEpPyqXqy2TCiknC6rk7uomhWL75hhU2bYzVg",
    name: "MING/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MING",
    quoteLabel: "USDC"
  },
  {
    address: "FKa49zQpwgDQB2SMy6AtaFFPN9wnghES4TWMwdiHtXPM",
    name: "GARY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GARY",
    quoteLabel: "USDC"
  },
  {
    address: "DB5csEJjjvMRPtfHVu7BLSpPSh9V9AkzjAWqE2wMPHgv",
    name: "CMC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMC",
    quoteLabel: "SOL"
  },
  {
    address: "Akh6KNEDX99XXc6vrHCC9dRZs1qsrekE7DaPVney4rCt",
    name: "MNKZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNKZ",
    quoteLabel: "USDC"
  },
  {
    address: "HivQDHionBaQFyAAvzZuiWzkS5xTpLkANGGGJZNAHCRX",
    name: "BRAWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRAWR",
    quoteLabel: "USDC"
  },
  {
    address: "5AdMPvwn2nd4vs34M9uYaNZ53BC3FBHzXYig1ZgeXJd7",
    name: "JACK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JACK",
    quoteLabel: "USDC"
  },
  {
    address: "Hr1CSGoxPBbWfK3ofrPHKuXTT81L7Hq2W3uPsMwTMZw1",
    name: "BLSNR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLSNR",
    quoteLabel: "USDC"
  },
  {
    address: "qCPvnDnnSJgetcDN3WMyTDySEQYB8VCHt97keX9ipov",
    name: "UFO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UFO",
    quoteLabel: "USDC"
  },
  {
    address: "EVtz5dTdNx5mzptNY2naR4rZt5JK5HWiiCedRWHftFtK",
    name: "LSR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LSR",
    quoteLabel: "USDC"
  },
  {
    address: "7RFNRgX7cx8Uy8cQLT6qrc8iVyTzCwPWTb4KNgsZmEDr",
    name: "BOSS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOSS",
    quoteLabel: "SOL"
  },
  {
    address: "8kBPB1hnaYKDvMGo2hRkTzZs9LzuaMuWzv5uwVZWWhNS",
    name: "KNKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNKO",
    quoteLabel: "SOL"
  },
  {
    address: "GUc24LEvFCwFDwPcACEbBSsUnGPGchaTFLNTggdyctjL",
    name: "Fluff/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fluff",
    quoteLabel: "SOL"
  },
  {
    address: "2BVEMCeSn3fzzL5U7h6rnvDKdT8HAFSsTvutxDWdPkjb",
    name: "EPCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EPCT",
    quoteLabel: "USDC"
  },
  {
    address: "Ap8jFpwcp1t5ahkkSJVbvoYUZbeYAuwT1TBnqmMw9T9x",
    name: "CROCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROCK",
    quoteLabel: "USDC"
  },
  {
    address: "8FEQz4oV4cvpMPoASmGjycTKog6YyUJSqfbAgTBEssB",
    name: "SBANK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBANK",
    quoteLabel: "USDC"
  },
  {
    address: "5jULkxSj4kcfHeMQrqryT73beMP11jAtTymaLsob8D4u",
    name: "TBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TBONK",
    quoteLabel: "USDC"
  },
  {
    address: "8kA8pYi6ssmC7WKXDDjK9RWwUQDcuu14Wp8432xkwXo2",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "577BUZanbvuKJKRFQh4kNEPKFza8ukygMZuRhQdpdKRH",
    name: "CROCO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROCO",
    quoteLabel: "SOL"
  },
  {
    address: "6wVEYK4WwXmzByDG3NK1o58AZbcRkxtdJA9Bi82CHsqH",
    name: "IOT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IOT",
    quoteLabel: "SOL"
  },
  {
    address: "GVhvHCPaE3TaddKc9AnkyfQAy9SR6jCyXs6LC2SdNyzZ",
    name: "WWHALES/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WWHALES",
    quoteLabel: "SOL"
  },
  {
    address: "8DSLQtHE49hyni6k7gt6TcYrTwJUNoGQALua2csJxA9h",
    name: "BURN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURN",
    quoteLabel: "USDC"
  },
  {
    address: "E2vGTYbtdcDCkFPhqswuSuMVKF7ajyBfPcUJzPJUUqE8",
    name: "SQRL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQRL",
    quoteLabel: "USDC"
  },
  {
    address: "GW2KLaxhyyunsmHFc4JmmvcA3yiqiFKJAPzn7Vx9iRLD",
    name: "SHARK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHARK",
    quoteLabel: "USDC"
  },
  {
    address: "C3fGkZgCHfSwHdKtRyWPQEChRMtyhDPETEZzZz2svFGN",
    name: "MINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MINU",
    quoteLabel: "SOL"
  },
  {
    address: "CEQmXfJtvb4imWHcmQLgxdADvUX9RceMpDJkfKo8CS8J",
    name: "Horse/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Horse",
    quoteLabel: "USDC"
  },
  {
    address: "CNiAcN6xPqZ2eC7eme77T9FLFbAFC7du1mxHSaNuqojn",
    name: "BINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BINK",
    quoteLabel: "USDC"
  },
  {
    address: "6pEv91kwCTedb3wE2J3P5Angt6qNwqsaLUL8mnFRsps1",
    name: "IBIS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IBIS",
    quoteLabel: "SOL"
  },
  {
    address: "3bKvew2X8PrM4bZvaTqpr9Wzpkfch2ywjH8vodTqa3NY",
    name: "EBIRDS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EBIRDS",
    quoteLabel: "SOL"
  },
  {
    address: "8Qt4ZTj7ZC6J4Fzd4KXZquvz8iYPMivRp4VpXp99ixXJ",
    name: "LIPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LIPS",
    quoteLabel: "USDC"
  },
  {
    address: "HEyGZ4SXzz1ZrbgQ6KduNpRJf7uUvDZTkvGdUxDTenSx",
    name: "SOL/SCRAP",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SCRAP"
  },
  {
    address: "F8csBSVvT5RLVStZ6Qbs3QoaGbNbGUjJSJMREPonjS7",
    name: "USDC/SOLD",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOLD"
  },
  {
    address: "9AEWUoq7unkbiLKWT7PnEwDQySnYFUN6knUPST9Svhzc",
    name: "PUP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUP",
    quoteLabel: "USDC"
  },
  {
    address: "Dx1KXARp8zqDeAmR9zEKvp5LxK7kRYMHVpBfdg9wptKY",
    name: "SRV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRV",
    quoteLabel: "USDC"
  },
  {
    address: "3VFudNhHevjE3jxjbdxj8EWoctEeEHks9G6S3mRUijNJ",
    name: "MTRIX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTRIX",
    quoteLabel: "SOL"
  },
  {
    address: "2SBkeNeV2HokKaUBtEjs3nuNMy6RX9oZpdqeSSSCHU6d",
    name: "APE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APE",
    quoteLabel: "SOL"
  },
  {
    address: "CPvYrSeFhgQ5WvNGTejEwJsyw8G5mbQHmoMbmjxhGPN7",
    name: "SHINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHINU",
    quoteLabel: "SOL"
  },
  {
    address: "7LxRaCAr4xm59PX4qk6Eu3ZGr7udunY72Rxr42Jqstw3",
    name: "ELONS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELONS",
    quoteLabel: "USDC"
  },
  {
    address: "9To8F6fEzkdHAoBoLMD8owjkY46EFG5Q13met9qmvJhc",
    name: "RRACE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RRACE",
    quoteLabel: "USDC"
  },
  {
    address: "E4zCNmbRHnrxVihx42hAxms5b9muCNrsw1N3BZzFzhJ9",
    name: "BINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BINK",
    quoteLabel: "USDC"
  },
  {
    address: "8phdE29QyRgECeT5AMJkeaRmcSWC9XDhdidKuba9tNdm",
    name: "LEO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEO",
    quoteLabel: "SOL"
  },
  {
    address: "GGSafBY4W2paTiaRNeGnj9Y1YGMfzxH3iVVmRnTzumPd",
    name: "HBB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HBB",
    quoteLabel: "USDC"
  },
  {
    address: "CJop47BNY4yYhmyXpxcEKJpqfDhBcX9r8Y8GTw142ZWj",
    name: "DUST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUST",
    quoteLabel: "USDC"
  },
  {
    address: "H1LHQUh6ZQNphq5MnqAMst5YjUJy4t2tBeezBUQjiubR",
    name: "LEND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEND",
    quoteLabel: "USDC"
  },
  {
    address: "HtXvsZpngeETuezSQcdnqPXSXiqXUSTrmK18GE8pbwzA",
    name: "BTW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BTW",
    quoteLabel: "SOL"
  },
  {
    address: "Bn4917vLqEe87TNbRa39ZaTcTjKiFC5BD1MPgsnhEBF7",
    name: "JDBOT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JDBOT",
    quoteLabel: "SOL"
  },
  {
    address: "41VgA8k2ypXnDL1vdKLBVK2aqqH7o8wiMpJzXwpcmQ6H",
    name: "TACO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TACO",
    quoteLabel: "USDC"
  },
  {
    address: "6ERrnBYtuj7LY1W2R8JGozLqUGwZop4dCM6qGJoVvtCt",
    name: "BULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULL",
    quoteLabel: "USDC"
  },
  {
    address: "9pf37kcNniAm4LzrWjpeHS4cVhQo4TBu6ZKYJSvRLmXH",
    name: "HGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HGE",
    quoteLabel: "USDC"
  },
  {
    address: "Ck7z8sz1ppRmri66ZqgsX6kky4DW96KuUY8Ba88Mkwjn",
    name: "BBMO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBMO",
    quoteLabel: "SOL"
  },
  {
    address: "C46bNAfUJ1L1c4YXbZMCMsnuDX54XBzPCe1gz6YiuPaJ",
    name: "HON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HON",
    quoteLabel: "USDC"
  },
  {
    address: "A91auZH61nVAUKuhsKpib53zTV15MbJXkGKgM4FyjuTg",
    name: "HACHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHI",
    quoteLabel: "USDC"
  },
  {
    address: "3s7FSY3fqMAkLm75gjrCiATz5oXyXraX319jg3dwJVt7",
    name: "OHIO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OHIO",
    quoteLabel: "USDC"
  },
  {
    address: "CxutWNhP4YCdLqfhkfWq2FHFBWvpt8gzNcMePAD9pm38",
    name: "HOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOGE",
    quoteLabel: "SOL"
  },
  {
    address: "2HN5RfVKRh7WeFgtYu4Zn93vFcDPznx8qMMCn6fFAQ8w",
    name: "DONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONK",
    quoteLabel: "SOL"
  },
  {
    address: "EzNC1MWZDSxetCsojmes5LQZneTDB7Fnh9DjWkmjVsHU",
    name: "SWT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWT",
    quoteLabel: "USDC"
  },
  {
    address: "DRREwPGRNEyjFcfTqKkZNPvvWwhaGUwsw9gwha6gKRj5",
    name: "KERMIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KERMIT",
    quoteLabel: "USDC"
  },
  {
    address: "AhMgStUGAheLXpThVMF4xCpQYVTiHboxQsCTwvvZmCrW",
    name: "BONKD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKD",
    quoteLabel: "USDC"
  },
  {
    address: "D8Lk64rvtuEKFJ12fwsrn8aUzQhPEzP8pTouUzpF2cWq",
    name: "DONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONK",
    quoteLabel: "SOL"
  },
  {
    address: "f4Mf7Eba6iiuyZg6wSXsMLXmxRCPhPbg9ADwJK9Exu6",
    name: "PMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PMI",
    quoteLabel: "USDC"
  },
  {
    address: "5LgsJUuwRhJSFqnBxA1eRfzQoUvwKkm1gyv4mRT3eFEr",
    name: "DINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DINU",
    quoteLabel: "USDC"
  },
  {
    address: "5ucnLA39GP3nCktKPQTt3wwfp9oARZoxydj52uaXyjvz",
    name: "SPORE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPORE",
    quoteLabel: "USDC"
  },
  {
    address: "AQTf7Xvr8m3rfXS4E5TgFSzasCi14tSQqPZVwncFnogJ",
    name: "ZOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZOO",
    quoteLabel: "USDC"
  },
  {
    address: "7pQRrZMrhj6U19pj2stssAYyQdL7htYj6SGNGxwMvB6T",
    name: "CHILI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "USDC"
  },
  {
    address: "CNjDtiW4uZsJjjnNDJYLHZoUaKr1J4n789dgUstmREHY",
    name: "AI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AI",
    quoteLabel: "SOL"
  },
  {
    address: "9152cFVB6DXcrbrveZZ7SkgitNLGDdnzgSykRR7oHKKu",
    name: "SOL/SOLAMA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SOLAMA"
  },
  {
    address: "C6C5LoaatrLtSZzTBaftAvnF6uRTowudjdPn27dBtLMH",
    name: "MEOW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEOW",
    quoteLabel: "SOL"
  },
  {
    address: "GKfyrbWQkMnhuWFMHzNV5v9P4nt9tCwTH4hJd5v5Vsij",
    name: "CK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CK",
    quoteLabel: "USDC"
  },
  {
    address: "5kzRbd1GgXJDHLdq8NLnt1fkVXhT2QzrUHfG2nsZMcr9",
    name: "BULA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULA",
    quoteLabel: "USDC"
  },
  {
    address: "Crm2DgJXiiMXtFr752XDjAZFcXXZJ89oygyp3Ew2Zgu9",
    name: "LAFA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAFA",
    quoteLabel: "USDC"
  },
  {
    address: "3YxpJHx1YYPbEF38TotC99Lk7u4Czj31H3m66QS9AySQ",
    name: "KRS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KRS",
    quoteLabel: "USDC"
  },
  {
    address: "9BwZntmvT1kR4ZCLRwtiiFN5a6GjZmPPSKj2HC9uwQzT",
    name: "MKILL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MKILL",
    quoteLabel: "SOL"
  },
  {
    address: "9BMRcLjeUeYhszcpBBXM4MC3rkyqZgTq6WD24NtdukTy",
    name: "APE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APE",
    quoteLabel: "SOL"
  },
  {
    address: "6ikkaR7efsuDp1n4tAeZt5C3BFjcCZJYkErWY6DU6p65",
    name: "VRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VRO",
    quoteLabel: "USDC"
  },
  {
    address: "9AZgyGYcozu6KgGRkkRQ1bNKfzNntbRFzTyud7cd2WJe",
    name: "PINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINU",
    quoteLabel: "USDC"
  },
  {
    address: "AZjvxo2KRkzFzYfmmzAq7ULaFwBhLtYwfd4RAvgjYGq5",
    name: "SMILE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMILE",
    quoteLabel: "USDC"
  },
  {
    address: "2wVkp6nqSMEpPvjMixVpjurGXxwCekwuxitJiEkd5qtA",
    name: "PDI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PDI",
    quoteLabel: "USDC"
  },
  {
    address: "4xJUDMFpgmY55bkscSDpqtG4rvy5myRWsgPUrNeGkJpv",
    name: "SOULO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOULO",
    quoteLabel: "USDC"
  },
  {
    address: "Fh66a9yddeqh8fKudEzuPesrhir5xtKA9E6Q76MvRH99",
    name: "SKD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKD",
    quoteLabel: "USDC"
  },
  {
    address: "Dua1YkeMj3tcYchxEvnTm1ou94LMg3AsvjJW5zCqHJjY",
    name: "BRGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRGR",
    quoteLabel: "USDC"
  },
  {
    address: "Cm2juAFeQmSZSAB66kMTnupgdZWVXbRd2DPwd6WjNVZu",
    name: "RPTL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RPTL",
    quoteLabel: "USDC"
  },
  {
    address: "ES97RQV7tY1piFk73QecbcdJ8opfS8amd3hd2uQ6xFZ2",
    name: "Iron/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Iron",
    quoteLabel: "USDC"
  },
  {
    address: "9NGuu9SPkFBAXMgf16zmvBcRmPjjnE3BHR9vsSmvTFm5",
    name: "MET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MET",
    quoteLabel: "SOL"
  },
  {
    address: "6tqFoeZ7RoQWYFUdwRZpjRLthAsNZxJnfdRyHwCVw8up",
    name: "LUNCA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUNCA",
    quoteLabel: "USDC"
  },
  {
    address: "EcWEXf2ccLmXS9guAToagxdHDA2EU7auf5QV5Mkg3VhQ",
    name: "CETUS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CETUS",
    quoteLabel: "SOL"
  },
  {
    address: "EtXCXSR4pFqUGexq8TyqAJVSBt2LziPxJ1CfEUV8u2YT",
    name: "SIS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIS",
    quoteLabel: "SOL"
  },
  {
    address: "CrHuy8ZmeHBLaT2WDCt7q3L3WUJ9AgnvmFPaKewAhn5q",
    name: "STEAK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEAK",
    quoteLabel: "SOL"
  },
  {
    address: "4tHzC4jv1rneqpjGgVrX8YNfBdMrMQSuEzq9oXHaK71T",
    name: "KONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONK",
    quoteLabel: "USDC"
  },
  {
    address: "3aR55Rt9VKWhewkwcteTYDJSkhHyD42pAz3oMpkKLicK",
    name: "Monki/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Monki",
    quoteLabel: "USDC"
  },
  {
    address: "FpfVbh5mJuWtNwaGcdcQAp5f7mJ56fGAvS48WPiasSWi",
    name: "KWECK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KWECK",
    quoteLabel: "USDC"
  },
  {
    address: "4GL8S5RRCnGUSJP6wYWKQVmUQWhkCufxSa2ADjbed3gf",
    name: "DUMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUMP",
    quoteLabel: "USDC"
  },
  {
    address: "2LqRqT42Dpk7TzToUYHqSYyy7ug3KWazfgSaqFHmsJYd",
    name: "SFROG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFROG",
    quoteLabel: "USDC"
  },
  {
    address: "B2dT2i82oWdnQorKfpDMMQRcRHq5g5MWiJXPbPpwm5XX",
    name: "KIMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIMO",
    quoteLabel: "USDC"
  },
  {
    address: "62FxMxjsfWBgiZmPC1B7tRjpNhuZoX3pU7WSu56Tv4pE",
    name: "AIBISOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIBISOL",
    quoteLabel: "USDC"
  },
  {
    address: "7kHEPHC5JsGmNdZXQKAcnkUi4Q9hCpoHopMC1GiEbB5u",
    name: "BOBO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOBO",
    quoteLabel: "SOL"
  },
  {
    address: "DG6Z4VHS1nCvjNqmrXUpZRPLeR1S4vDe6ak2F38HT8Za",
    name: "ASTRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASTRO",
    quoteLabel: "USDC"
  },
  {
    address: "3QNAYuZc6F4qRip7PM4eQHMi72XRvD1x3BC7sU99a3iY",
    name: "TRUMP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRUMP",
    quoteLabel: "SOL"
  },
  {
    address: "7ZLXLQuFdegzUwwhMcuBvjMHAiEZ8G8PzjmuRSjkjkxf",
    name: "Quonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Quonk",
    quoteLabel: "USDC"
  },
  {
    address: "DbbSVoZdWgPDjNCrEQWTTXQATZtG1aRqoP2LwJjE7ZMT",
    name: "KITTI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KITTI",
    quoteLabel: "SOL"
  },
  {
    address: "8DCHX9mDR5fbE9sDSinbaz2HyzvdUcFfQKghtvsTLou3",
    name: "SHIBORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBORG",
    quoteLabel: "USDC"
  },
  {
    address: "GyhofDtzW9ZPLPHCcmH4wy8xkms55aQ6WFAemcgayAQe",
    name: "PEPELEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPELEPE",
    quoteLabel: "SOL"
  },
  {
    address: "9Sxdb22rQ4AD4L3ySgbsJtUhVTFEfnRBbRYEWDPLBSfp",
    name: "MONA /SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONA ",
    quoteLabel: "SOL"
  },
  {
    address: "H9LWuhCcTT1Qy7ShDNbeDqLyCfqvcUoh1suiBt634Lo7",
    name: "CCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCAT",
    quoteLabel: "USDC"
  },
  {
    address: "9TgAeWYN4i3AxLPpYhSof6RuoWMBMShb4Eu7HdZ5KJh7",
    name: "CPUNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CPUNK",
    quoteLabel: "USDC"
  },
  {
    address: "7ijS1W2xs6sQpnivnsZ1TE8nUcCLYZkVoTM3S8geTqVc",
    name: "SOL/GONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GONK"
  },
  {
    address: "gs53yr6sJReexriqq1TwRphGjG9RRc4vyGjNGQNp9ab",
    name: "FROGG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGG",
    quoteLabel: "USDC"
  },
  {
    address: "5JRodgageFTZV5jVZSoHNA4xkLb8joWVF3E6hxehGmQw",
    name: "SHAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHAN",
    quoteLabel: "SOL"
  },
  {
    address: "27mzWwPKRtgZwWV5PpTAyyqcvahw3K8VnpuQ355Zf8JX",
    name: "APPLE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APPLE",
    quoteLabel: "SOL"
  },
  {
    address: "AoDRvtoRvJ1KDFeTgdYYH9nAE84Ba9iS1QwZDWKYVwhm",
    name: "COSHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COSHI",
    quoteLabel: "USDC"
  },
  {
    address: "6XmGPijwreQwRStPjdMjSSn1E5anmLf8sN7FiTwWhCjR",
    name: "BIRD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BIRD",
    quoteLabel: "USDC"
  },
  {
    address: "FCNYjqFJVaDYakvKCgQPKFS31yXPSqH2pGBLSbGT5Gcv",
    name: "SOL/sXEN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "sXEN"
  },
  {
    address: "ACVS7ByWp9TVvb8X9t8dYePyyPdrXEa2cFyW6RHJMEW2",
    name: "Toodd/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Toodd",
    quoteLabel: "USDC"
  },
  {
    address: "tBpFGv3YaKtLt4VDDVvRWhtoYTcsRoHfUFghg8aQyvC",
    name: "LUSH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUSH",
    quoteLabel: "SOL"
  },
  {
    address: "4TLPXUP55gZVz9yVisPZZKMvENdPD6iHuwxB65u7Yv2A",
    name: "SCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCT",
    quoteLabel: "USDC"
  },
  {
    address: "619tEN6ZG5SKZnFH7J5dZbVvKAsiLQESydFvTNpx9Ek3",
    name: "LOOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LOOL",
    quoteLabel: "USDC"
  },
  {
    address: "GJmZErUkPi7HERVxpq6Twu4C9bj9mJp8J9nuKqTv2RBP",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "4PPwpqjRA4VATgfsiR3ZETEoekhSwQRjSKhDsDwWHg2z",
    name: "SHRIMP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRIMP",
    quoteLabel: "SOL"
  },
  {
    address: "5arvKWCScoDWzUvyyKVjj82BRwDHfYxkBG78KC5fQanh",
    name: "ADOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ADOGE",
    quoteLabel: "SOL"
  },
  {
    address: "AwTXT2L5zbCwDhGLVLTCG1JMyf9JQThsevpK3qXqXujN",
    name: "SHAMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHAMI",
    quoteLabel: "USDC"
  },
  {
    address: "CDfGKevdr7N1ufBgevB4iAGg9eVMC6GA4ut1LqVZxmA6",
    name: "CHILI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "SOL"
  },
  {
    address: "7Juw8iVzph4rE4agTePfE12Nex74aTsxpHGyqZUwB47W",
    name: "NFTHOOK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NFTHOOK",
    quoteLabel: "SOL"
  },
  {
    address: "6ADkk8FoqBdU1EiMdCR3cSU6qJv8w8xY9PSnMToUjpBj",
    name: "4GPNG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "4GPNG",
    quoteLabel: "USDC"
  },
  {
    address: "7R3fXySgiokNmDxkWQBjD269hYnQZbDEyhKDeUhWMatw",
    name: "DEOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEOS",
    quoteLabel: "USDC"
  },
  {
    address: "ByuMoFYcmu1NVvT3KUiYo7DGbbgUargN8z9j7XYPwZR1",
    name: "Solge/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solge",
    quoteLabel: "USDC"
  },
  {
    address: "G1YV7qRbmzBc5WRU8Lb4SdyoVPCZcm6Jt1MPgqRaj6M1",
    name: "KPTC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KPTC",
    quoteLabel: "SOL"
  },
  {
    address: "NufoDmorkutV5Jag9v39bRfQoDfQ2S4ypnHPWxMgWfX",
    name: "BBAP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBAP",
    quoteLabel: "USDC"
  },
  {
    address: "88W61Vse8vYy323wyNVZemryHa3xTmScTk6uBNLoqdTu",
    name: "SLM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLM",
    quoteLabel: "USDC"
  },
  {
    address: "86jQnPcBk2iTsHkZdmoSQaJ5qVv7M4FQMy8Z7tQx11s9",
    name: "HOOK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOOK",
    quoteLabel: "USDC"
  },
  {
    address: "2i5RmZqjPrRJKRYCGkpP8yhNgtr13MEagfGdzFqU93Q9",
    name: "RATH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RATH",
    quoteLabel: "USDC"
  },
  {
    address: "8fTdE7hY9v3yxSCF9VKGE4PTpvUuFEfbimZykBLQ335e",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "DEYQPC5VFnk8s4XL53Lax7YZa8pwUdpVUf2CkF5qsVHi",
    name: "KABOOM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KABOOM",
    quoteLabel: "USDC"
  },
  {
    address: "ED8iiZh4fhuPw5hzSkv9qFUCdcKnqcB7GwCy1pM7U8BW",
    name: "RDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "FHhQ3Uv8iaKzsJMDKaWDE34nyuHXnZPF7vyuS4mcBxdu",
    name: "CBEARS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBEARS",
    quoteLabel: "USDC"
  },
  {
    address: "C3ZX2NkStmjJKsNE3UUL9SXMpqZ1udn2WtWicdNZdZtq",
    name: "DC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DC",
    quoteLabel: "USDC"
  },
  {
    address: "5y6oN3DcAfkwDcZFKVfi9n2hxu3dDDyAKjsVst3cJpgW",
    name: "DSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DSOL",
    quoteLabel: "USDC"
  },
  {
    address: "6jndYnfJdCZRWqynEqC2ihkbTX6qeGB7gMhPKH11zZz4",
    name: "INKY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INKY",
    quoteLabel: "SOL"
  },
  {
    address: "CDh12RyxhGHku74KURe1X3ki5LzfEQC5XNSg8QhLKVsP",
    name: "FRIJO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRIJO",
    quoteLabel: "USDC"
  },
  {
    address: "Gv8TWX5PiFzdcZksXKhDQgraMzEgzs1vAUc3jBJQtiJs",
    name: "Sodon/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sodon",
    quoteLabel: "USDC"
  },
  {
    address: "8ybFxcq2gu3ERhA34fFtR4W8Hm4xq1c8DGVk6XfzjJBL",
    name: "SBF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBF",
    quoteLabel: "USDC"
  },
  {
    address: "ABtSAAEg6LehPnxETMdrPFhsk8jQ7mWM3sY925njh3ux",
    name: "STRATA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STRATA",
    quoteLabel: "USDC"
  },
  {
    address: "Cpj3E3cKWNA2jgPAJ24YNc6N9mfBf54DrkCeakrRnRbq",
    name: "QOUTE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QOUTE",
    quoteLabel: "USDC"
  },
  {
    address: "8ZuKqFi5NpTHdmFgECuPnSZcLgQNHAx1WvXwXSv39wD2",
    name: "WOJAK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOJAK",
    quoteLabel: "USDC"
  },
  {
    address: "EVTTHz4czfs6pQhYBdzXaMqd7rckuCqUAsCw9ktDGV2h",
    name: "CAKE/MILK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKE",
    quoteLabel: "MILK"
  },
  {
    address: "7Ze8VJJDgPWXEHEB6331jnvcdDmZtZxdN2oNsrGyfdPp",
    name: "YAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YAKI",
    quoteLabel: "USDC"
  },
  {
    address: "958EHUosjnW6LBcVqKACNLTiELXLkSmvaTB96RL9NJcb",
    name: "Memo/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Memo",
    quoteLabel: "SOL"
  },
  {
    address: "FeuE8HjJMizzcsgW5Sb3WLanVP46iqq8vco7HcVvDgXc",
    name: "ONE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ONE",
    quoteLabel: "SOL"
  },
  {
    address: "3vhrjhbC46ir8mS8XcLBB7WzvUvu8gRJxBU1EdkF1Q7Z",
    name: "MWorm/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MWorm",
    quoteLabel: "USDC"
  },
  {
    address: "53UX3F174HAGQV1sEjZAy9gGn82kjgj6JAf8CYyeQgjP",
    name: "TROLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "SOL"
  },
  {
    address: "Hc3fozaigWNc5yZEy2hioxJmNN75hbYaYMtjA9QKEGCH",
    name: "FUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUN",
    quoteLabel: "USDC"
  },
  {
    address: "HKu23thCzS9FnaWgjRu65vSeekzNTnKPSWYJkTtkFKQS",
    name: "CHILI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "USDC"
  },
  {
    address: "GdEGLmBB1HitkNZDVyM5Rs6gQ2MC7qcFoiLYAVdGUNRg",
    name: "MRBC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MRBC",
    quoteLabel: "SOL"
  },
  {
    address: "3Tqdf2XZRLfwMuMyWvw95bcmYZ8CZHwmVcMoaJ4Y24Pt",
    name: "WOW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOW",
    quoteLabel: "SOL"
  },
  {
    address: "9CdQRtqigJHHif5a7e8BZAp7aQrVrktHjHnavFTmYLEf",
    name: "DOZY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOZY",
    quoteLabel: "SOL"
  },
  {
    address: "56Eg7eFafq8ArRmSvfTqjCV9jkPzgSkZM2wghJ4eRp6i",
    name: "WFIO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WFIO",
    quoteLabel: "USDC"
  },
  {
    address: "3k6ET38xSWVcFKRa1CFfjYLPV6JiPxmY2zovFt571ioD",
    name: "STH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STH",
    quoteLabel: "USDC"
  },
  {
    address: "6RYegpin4UARZm7tg4ii7AARgsEiekPrJVk8PqLWKVUz",
    name: "FYRE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FYRE",
    quoteLabel: "SOL"
  },
  {
    address: "Ej9aQztiM58H7t9g7ckRh2ZtHoxj8xPezzzxKK36Aufv",
    name: "BBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBONK",
    quoteLabel: "USDC"
  },
  {
    address: "HmnkhyHnDKUQZy6GhC8nNvryPx3STChT4FmDec2aY5jD",
    name: "SOLVT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLVT",
    quoteLabel: "USDC"
  },
  {
    address: "EGZB74j8tW2rLt3UbNqBt4aSjTQR6aLBewP8LScoWKzt",
    name: "Neki/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Neki",
    quoteLabel: "SOL"
  },
  {
    address: "GzqhWguyxVbeQMvkGFSz56P4PeYvXgfzmvvHxAmb7BCG",
    name: "EduInu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EduInu",
    quoteLabel: "USDC"
  },
  {
    address: "F24vBjJwzJvAtdHZwkzrxr3DNQbTE3yEyGRfpT3LTD26",
    name: "ABONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ABONK",
    quoteLabel: "USDC"
  },
  {
    address: "GNtrSZDroS6BttzqyM2o75BU1v9Vw4YibATdcT9WtZHy",
    name: "BKIL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BKIL",
    quoteLabel: "SOL"
  },
  {
    address: "DFASTDBsNzmYv2rAu9aSHQq7P8Gi8LYe8tJ87QqVuYLY",
    name: "EBONK/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EBONK",
    quoteLabel: "Bonk"
  },
  {
    address: "BcdshFS91Uc9L2kKQ3PhXjN3AWmjky6kg1yqyLsoCR63",
    name: "SHIK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "SOL"
  },
  {
    address: "HR5PaX8PCokBFQjdozcETKYkmoutrCD27SSBZ8JAWeHA",
    name: "BLOOD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOOD",
    quoteLabel: "SOL"
  },
  {
    address: "4LrYbCoE3ma5VxFd9RyGAxFAWqTHCYjQkGXcnARcd3qd",
    name: "USDC/DOGE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "DOGE"
  },
  {
    address: "B8BmZBoCV2X9wRxZgzhocRuN9f3CXmA8BbLEFcFYrEUU",
    name: "JELLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JELLY",
    quoteLabel: "USDC"
  },
  {
    address: "Dw9zZ4QVHJJJWR9sKQKAHqH1qkNDXxt9AZYkmSrRyoyo",
    name: "SQUIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQUIL",
    quoteLabel: "USDC"
  },
  {
    address: "DevJAdiVwDprz3qKs18C57AuXD5iN9sm1ustLUHFuNvU",
    name: "BONKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKA",
    quoteLabel: "USDC"
  },
  {
    address: "HzY6gybF1HMBuk9sYUS8oA9iCy13BwHNgmNUv3cDDAom",
    name: "KINGC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINGC",
    quoteLabel: "USDC"
  },
  {
    address: "H16HGUh46qBbYbYMsMqARbybfcPF8wwzW7tfYtoCNwjY",
    name: "Fosa/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fosa",
    quoteLabel: "USDC"
  },
  {
    address: "BBMJ7uQ7RFPTBZd6bjTihdKPwiKWUitWbtXyzWJrLHGr",
    name: "KPepe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KPepe",
    quoteLabel: "USDC"
  },
  {
    address: "JDbtfnoiK7NmLewLeXRKBfkw9Y92ENxNs1rYT1HimQcW",
    name: "SOL/SOLAMA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SOLAMA"
  },
  {
    address: "FPrGueDCaYYGvo6hcfrV44yeCwsn17Lmx47nUZuw3bzw",
    name: "BASHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BASHI",
    quoteLabel: "USDC"
  },
  {
    address: "3cQqJZRfmXeA3qoPKcu3wmbEenx2s7SuZPbWPVMsM85t",
    name: "RUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUN",
    quoteLabel: "USDC"
  },
  {
    address: "6FYbDW1rmC8FU2X9py7NScQfFXmkjaBWBgxHda8NNAY2",
    name: "SOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLT",
    quoteLabel: "USDC"
  },
  {
    address: "3SPu9hp69nLcRQFzLiV5ujBpz1c7BEvnXjgXiBVP8TyF",
    name: "PIDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIDOG",
    quoteLabel: "USDC"
  },
  {
    address: "FLLGUL1Xpa3YRFGwAsdzAxRmmaEhQrU4EEBysk4Tyqj5",
    name: "SFren/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFren",
    quoteLabel: "SOL"
  },
  {
    address: "GAaCvuPc1hGSmaaiLeQxr3RrdSdptrnEqggAX3dfAN2W",
    name: "FTB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FTB",
    quoteLabel: "USDC"
  },
  {
    address: "8jc2khGmxnRrBsbQE74DZuow9ZJZsoLrfTicx2kMYNfB",
    name: "PEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "USDC"
  },
  {
    address: "HFrTV6SH9cx2atbL9SfPm5uGpDfGGMPdEgEcgtkgsFAb",
    name: "BOGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOGS",
    quoteLabel: "USDC"
  },
  {
    address: "5pCSKBopeamMgtTHzmrGvkSYGmWgGX89JEwBw4g4DUkD",
    name: "BONKBET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKBET",
    quoteLabel: "USDC"
  },
  {
    address: "HEtPpSNTjL8g86pmmbamtPVo4PE7SeXuEheNpfEgodfb",
    name: "RABBIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABBIT",
    quoteLabel: "USDC"
  },
  {
    address: "3eFLAtXKED8gjC4DNCL5eFnwWcQ2jacJUoa6vQKxn4Ec",
    name: "SHIBGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBGPT",
    quoteLabel: "USDC"
  },
  {
    address: "672KMTAEAhQ4TQUNwi6tAwoS4NRiRQW5ybn6jd6QtsSc",
    name: "MTAG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTAG",
    quoteLabel: "USDC"
  },
  {
    address: "HHky9Kak7CsjK3cbJ4WkF98hS6PA5wPvhcrG4uowuGyS",
    name: "BEAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAR",
    quoteLabel: "SOL"
  },
  {
    address: "FUSehmHGkFa9gd87ZwP6PLKir5cZNXps7grPQ55GpkX",
    name: "FROGS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGS",
    quoteLabel: "SOL"
  },
  {
    address: "6YWjbeGBasNZMv4muaWJEPPmfHio3g5iAQhCPcE6QyvJ",
    name: "DogeAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DogeAI",
    quoteLabel: "USDC"
  },
  {
    address: "4NQSVV2QtGVr9qEK7QFcSYtwaQ6XRwW9w2FJKQKcuqUQ",
    name: "LMDA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDA",
    quoteLabel: "SOL"
  },
  {
    address: "6T8eM2A8o1FTfSqPPcvB1yo2cmNC7fLf1EMPzR5TQeww",
    name: "APEGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APEGPT",
    quoteLabel: "USDC"
  },
  {
    address: "8ADo1c2zr35uj5n8vqipez94Lp9sxZBhjQiaxk2N7dLk",
    name: "MPAY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MPAY",
    quoteLabel: "SOL"
  },
  {
    address: "6tjTdpy3cYYpfd1kXJYj6m89qXGr6Vo8phNEW3w3PfJr",
    name: "GOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOL",
    quoteLabel: "SOL"
  },
  {
    address: "3ugtXjoMQaRk4JCa7fU1PQVd9MDugoD5Ma23Yc5KALHP",
    name: "NEKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEKO",
    quoteLabel: "SOL"
  },
  {
    address: "4vpdU3zMQKExTks2sZYrHdTxhaVr3Zgg3YcBjm7Y4w64",
    name: "ADS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ADS",
    quoteLabel: "USDC"
  },
  {
    address: "57AvPGF4segM1SvBUuXMEKLA17kEXHNrpiC5fdSmVJWA",
    name: "USA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USA",
    quoteLabel: "USDC"
  },
  {
    address: "A3WzuekhhCWjPFTgyiggNtTPdKAWm9DCbVuURGXc83JX",
    name: "STAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STAR",
    quoteLabel: "USDC"
  },
  {
    address: "F4zX6JxtvyophSYkDJHSzsNSB5wzRzatGeToaKq79mEe",
    name: "PAPER/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAPER",
    quoteLabel: "SOL"
  },
  {
    address: "8wvvGfGzV4qp5ArEcA7uHREdoHnKbhvPt2Db6G6oWCEj",
    name: "DFROG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DFROG",
    quoteLabel: "USDC"
  },
  {
    address: "4KR4cZTYWL6Jnk7cu9RKaW5i72z9wGKLUtFFxPg7pwDu",
    name: "FOGC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOGC",
    quoteLabel: "USDC"
  },
  {
    address: "ERguENwL9JfXTUhr3HBTG3WeEUzcF3MTC2NuTHyndRLs",
    name: "CRCL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRCL",
    quoteLabel: "SOL"
  },
  {
    address: "DMKgzfcSSb7CdUVUvJMfzd4LyzeTGCUD3wgM2fLCpszn",
    name: "BATS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BATS",
    quoteLabel: "USDC"
  },
  {
    address: "gcKnXzZESZvNoL8kiHF1Uukoh1iPq6uWSP9fruxD8X4",
    name: "USDC/Crab",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Crab"
  },
  {
    address: "2nYqNohctRVjNVzho3GbzoYtWUfwPB5uEryqaedC7evt",
    name: "BUTTZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUTTZ",
    quoteLabel: "USDC"
  },
  {
    address: "6XFhfJDA7s6Y9KoS3kPEp6thpiKQTbxcFVvXsaL2pukt",
    name: "MADOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MADOG",
    quoteLabel: "USDC"
  },
  {
    address: "G5p4gtnGEkQuKQvF36WyReJ2WuubXYC9Asnr3WmEJgGS",
    name: "KART/LUSH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KART",
    quoteLabel: "LUSH"
  },
  {
    address: "DQpn2fXJzhtzrNn6Zn21UmJbx96ZuEBRDmSf3Pe5BDz",
    name: "KBR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KBR",
    quoteLabel: "USDC"
  },
  {
    address: "Eqn76GZugxnwrCWxE36jcgRPxYEmdYtkzTP28u7an43a",
    name: "GRAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRAPE",
    quoteLabel: "USDC"
  },
  {
    address: "3tiG7AaS7MfC5MGdVqdyrQCXJKxCNomhHiXZH5Tzihu5",
    name: "GRD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRD",
    quoteLabel: "USDC"
  },
  {
    address: "GRVyx96eyn8cep4G8cohgJYnWDkytNpkKu3TJJtYpP4f",
    name: "DINOB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DINOB",
    quoteLabel: "USDC"
  },
  {
    address: "DEN7TRLdiJCGhTXCZeDdP6PA1bCCoVAswNrvRT5L2CS3",
    name: "MrTW /USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MrTW ",
    quoteLabel: "USDC"
  },
  {
    address: "F6GuqS2t8ywejnX5V6z4VCXgM7kwJiSEirRrKsUu3Rus",
    name: "BCope/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCope",
    quoteLabel: "USDC"
  },
  {
    address: "H2GhnCWLoJeEyxMPbGnTaihuTS7GP6xZ8FNNHaeFaFot",
    name: "IMRTL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IMRTL",
    quoteLabel: "SOL"
  },
  {
    address: "Bqc91rbWkVqcGtdHLTUxPXg9E5D2fzGZaN39G2HBgjEn",
    name: "RHINO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RHINO",
    quoteLabel: "USDC"
  },
  {
    address: "FYehmMR7LC8eKX5Dco5FCzLmbBqfz39XvhtzYzXJtqcs",
    name: "DGK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGK",
    quoteLabel: "USDC"
  },
  {
    address: "7h4rd16TBRiLW3nwfYmpnCUzYwGswup44EuWyxq761dR",
    name: "FAG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAG",
    quoteLabel: "SOL"
  },
  {
    address: "5NCgnuHVtipeBmyXuvZGr7zYvf2P9th3LyT7QztHEpXg",
    name: "HWORLD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HWORLD",
    quoteLabel: "SOL"
  },
  {
    address: "DGb9wVrheYrTphXLSSU1JpKmq4s3774EVK5ydpsNmXe1",
    name: "FHH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FHH",
    quoteLabel: "USDC"
  },
  {
    address: "Cx6KEhGBSUqAgtAW6FAHWieLp225zBprdR9f6NkdYMWX",
    name: "HODL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HODL",
    quoteLabel: "USDC"
  },
  {
    address: "svK5DrsdKY2g7vLP8UTbtKk4kpUCAGJNH4ghjEVzPqp",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "RAc5zm78RX7Uq8ajexZviZ9kV5MAHDBhuKJpME6c63V",
    name: "ARC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARC",
    quoteLabel: "USDC"
  },
  {
    address: "5d4xvbxb4ChgPBbGPQdfHUBpURwmn9GJzSLEzUxLGT3u",
    name: "MADBEARS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MADBEARS",
    quoteLabel: "SOL"
  },
  {
    address: "TN8hWS6V6pdLr57CA5VMdvWpzH6yGUGtYPpxjd45FzD",
    name: "SOLAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAR",
    quoteLabel: "SOL"
  },
  {
    address: "CxFZc3qN4sZdk8AtgUbx33Jevr52CR5yf7mBpZanFUK8",
    name: "CATO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATO",
    quoteLabel: "USDC"
  },
  {
    address: "5AWuXsxCydCBZLs7h1FNTFUX1YcZT5wSCyBc3U76wuK",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "G9GAunb6n6G8y58mepUeQkp8NP6PrjwkgwwxQc3beo5Y",
    name: "Bong/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bong",
    quoteLabel: "USDC"
  },
  {
    address: "DnA8F7AtNBYgUy6oExQAcYH1oKAx6HaVc4vkeBUjeFVc",
    name: "MIKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIKA",
    quoteLabel: "SOL"
  },
  {
    address: "EvHGKUx5rhFXFyVmoswEjAvvCmW1kucBtF7hnv3VLn4w",
    name: "HNCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNCT",
    quoteLabel: "USDC"
  },
  {
    address: "dh1Wx8Azf1g3yBurtsNqxJWcG4NBsHgAaPu9yBZ2ZuK",
    name: "KAPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KAPE",
    quoteLabel: "SOL"
  },
  {
    address: "7W8L8Bs63fd2cLy3R5JHQo367cS17W21JVjRM9qkuszJ",
    name: "Thor/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Thor",
    quoteLabel: "USDC"
  },
  {
    address: "DrLymwsPwGfhtKsPskL82ZcpSiNR7iYqzSMAb7f8DLPs",
    name: "KBINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KBINU",
    quoteLabel: "SOL"
  },
  {
    address: "4KrnHMErabmHdzA8miAsWkfiGm2Dw613qYQXeYr8j1V4",
    name: "PDLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PDLE",
    quoteLabel: "USDC"
  },
  {
    address: "EfAqdJosVSyaoUHxLmWKjB5nKceAAXauxUJdgAqz2qmL",
    name: "SEEDS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SEEDS",
    quoteLabel: "SOL"
  },
  {
    address: "5HVXrziZ8f2x7QtgLfeG6T87TCk8uazadmhj9M3Pk9Fv",
    name: "SANTA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SANTA",
    quoteLabel: "USDC"
  },
  {
    address: "FTdPhEfbHf5JCNXRij7AzdukbSeMBLZWaZj1h6hRQr3y",
    name: "NEKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEKO",
    quoteLabel: "USDC"
  },
  {
    address: "7YkiYrRoyctnYdFemiUsYCxPHGRVrSdWViwfX5kru5ep",
    name: "PBSMY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBSMY",
    quoteLabel: "USDC"
  },
  {
    address: "DvqpkGMh4Nru99sLMoidN8oLDnwwgK85CCabSqLBJwho",
    name: "Y00TS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Y00TS",
    quoteLabel: "SOL"
  },
  {
    address: "9Guxt1RigZs336mCRsZCxTwMxjQ9F5k2vpEBCTm7fEdy",
    name: "CHRIS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHRIS",
    quoteLabel: "USDC"
  },
  {
    address: "8dxsRNSBiJXHfVmVoHG4eLzBgvsQV4sRQrj82dLE2F49",
    name: "CANME/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CANME",
    quoteLabel: "USDC"
  },
  {
    address: "CxtwxUoZ73FARLYS4niUGwLiW28pJLiLuVXQTfbNGuyn",
    name: "smol/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "smol",
    quoteLabel: "SOL"
  },
  {
    address: "24QJSQwNBio517tWGrqxwrdoF4s1n98HnpTYwW56cKLE",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "Hq3ZcBgtPyX9STaVosyBw8wHhb87y5QhYb8KTyQnJgTm",
    name: "BB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BB",
    quoteLabel: "USDC"
  },
  {
    address: "RnE6Cxj6qhnq8pfRpwDTTTPxb2T3vJJAw1j5dg2JYSc",
    name: "AIEYE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIEYE",
    quoteLabel: "SOL"
  },
  {
    address: "3fnTdKd9DzmK8DuQXQ8Gtsay85VTFTihFYZ1F8YJrFbT",
    name: "SRICE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRICE",
    quoteLabel: "USDC"
  },
  {
    address: "EAvQ2DPvbts1nvGpTS2VUUzi7nyM4oaoeUq2mdB5LgkJ",
    name: "SOLKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLKA",
    quoteLabel: "USDC"
  },
  {
    address: "3aQskovEsc2dK3KFutsASTRzzbZQUsy2J5Y9M7BwqKUT",
    name: "DOGNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGNK",
    quoteLabel: "USDC"
  },
  {
    address: "Dh6s7dUaK1QSWx9VbKn8DGBSsJ9HB9MqPwZUHzBJr72u",
    name: "RBI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBI",
    quoteLabel: "SOL"
  },
  {
    address: "q6zZFzYE3or5em5fMEQFRhN9wi5qKSNj7aQTExdmkig",
    name: "SDOO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDOO",
    quoteLabel: "SOL"
  },
  {
    address: "8p13if1M2KRkSjXhDRQskZTYTcD2farw8je3afsLevJU",
    name: "USDC/SSDAO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SSDAO"
  },
  {
    address: "5rgAMQpzJxv5C4sjLDL2mU2bXB4ppo4WyzuLAXhqmZK8",
    name: "WTF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "SOL"
  },
  {
    address: "AtKATrWvEaiNqef6GcxcfQ5UZxkxn57UYKe3XUk3p8Us",
    name: "DRAGL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRAGL",
    quoteLabel: "USDC"
  },
  {
    address: "G6RJ5xviF98GUTxD3oZNxVEHgv9EzSBAHXxEPiBdBDM8",
    name: "HOP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOP",
    quoteLabel: "USDC"
  },
  {
    address: "A5xP4KPNKx6AyKRKMRVWwozvh352zQg8p6kdtwzHArGP",
    name: "BFRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFRONK",
    quoteLabel: "USDC"
  },
  {
    address: "AjN5MfR4cDrHZJR4VwcFn8cSZozF4WHxkRuxE91eVfgt",
    name: "BASTET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BASTET",
    quoteLabel: "SOL"
  },
  {
    address: "2HGVBPA2psL4MZQ5dYgAwsPWoreWLJBXn2NkC9HwSu4R",
    name: "SLIZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLIZ",
    quoteLabel: "USDC"
  },
  {
    address: "ATXs9Q1h5vVUY36GZTvswF9tQ7aPuECm2g7YVZ3hU51n",
    name: "KFC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KFC",
    quoteLabel: "USDC"
  },
  {
    address: "9wemHwu2T1QTTD1AaRqLjQcaM4YtyQ4tfmo27o5h84Jz",
    name: "FAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAN",
    quoteLabel: "SOL"
  },
  {
    address: "J9DvbTPaTxMmi7VuEt7RPU574aiYtXaHSSncrxAoxwui",
    name: "Chihu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Chihu",
    quoteLabel: "USDC"
  },
  {
    address: "28PrnhmL13BGPpjVch8AUc1WKWcqPdZX1sZrMDWnz3Le",
    name: "MONKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKE",
    quoteLabel: "USDC"
  },
  {
    address: "7TDgtM3LMyG3YfSA7Cs7GuaVYJCuo2XFykWLLYC6x23u",
    name: "OKAGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKAGE",
    quoteLabel: "USDC"
  },
  {
    address: "DrKZJvheJQCZntUBhR6DRzhdG1U2RQ4KmKQpDxJGcFM5",
    name: "NYAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NYAN",
    quoteLabel: "SOL"
  },
  {
    address: "J27aUz91eZzxQDhHGMhdvJAqs9W6BBq6yerW9fNU9zxc",
    name: "CUSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUSE",
    quoteLabel: "USDC"
  },
  {
    address: "Fvp92vUTSsPTd6n4tt8jPXN8U4gquaGB2t9hWd3ytsQE",
    name: "TB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TB",
    quoteLabel: "SOL"
  },
  {
    address: "apnu5Mx6F1MEuLbTWZLRhnw5V7rh5GEWViqijSiRuaa",
    name: "DOZY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOZY",
    quoteLabel: "SOL"
  },
  {
    address: "C5LANRdN2dYeMzuWecSPDhtrW3E5WBEugVcrobPdVzGr",
    name: "SPYRO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPYRO",
    quoteLabel: "SOL"
  },
  {
    address: "j16vumYTBWsE4uMSomxokfmTE9fvatZvQyUjveseUjx",
    name: "DORA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DORA",
    quoteLabel: "USDC"
  },
  {
    address: "9rrjgFwrm8b56URZA5JxxayNfh2tC8VuvLtooABmiV83",
    name: "BAGET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAGET",
    quoteLabel: "USDC"
  },
  {
    address: "F2ZXCzkKhT8V2xXFQHrwPSN6zdLXprDvFMiHyivhbNJY",
    name: "BLOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOW",
    quoteLabel: "USDC"
  },
  {
    address: "A7caWgUN6mvRtyKNeF6e2eNgDbb8hu7cqQnMooPjyYtQ",
    name: "KART/ATLAS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KART",
    quoteLabel: "ATLAS"
  },
  {
    address: "5QAbViTYT17ZQr7yTL9vsQdr6oqo2s88NJDNwPeEEopr",
    name: "TTT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TTT",
    quoteLabel: "USDC"
  },
  {
    address: "GxUmvgsz6ztSnCeCpgpy4ZrwGsW2LFkMvfZtVaSdVjw1",
    name: "NINTA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NINTA",
    quoteLabel: "USDC"
  },
  {
    address: "E7ug59X82cJqB1ot1EjDgdogPLoSuoeWD8TDHx1EhHLw",
    name: "BANANA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANANA",
    quoteLabel: "SOL"
  },
  {
    address: "7xKCYGMyUD4iZuqYUGiwqkiQqBzQSYB8DswgRxQJHcdz",
    name: "INFINITY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INFINITY",
    quoteLabel: "SOL"
  },
  {
    address: "5FarpQ7KDoPNksZnuChSwtta7DEujXJh297Q4yFd5DEH",
    name: "HPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HPS",
    quoteLabel: "USDC"
  },
  {
    address: "DCoqGPY1ZySBkVj4fJKb2yBXGVhpZvuYGvVfkN4Hk7XG",
    name: "AIFLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIFLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "DSdHtkH72YGSbHULqmBWr6xRPbYDZC1RgAbxnQf7SPem",
    name: "GRIZZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRIZZ",
    quoteLabel: "USDC"
  },
  {
    address: "8qk4d6buNMqxbMusyG7XugLkv3nncwVrzq3ey8JcpX4n",
    name: "FREN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FREN",
    quoteLabel: "USDC"
  },
  {
    address: "BJn8Nn3sG8hnyb98jGzFqAmHAonLEPbAbJQJ4j5JmmKZ",
    name: "SOLDA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLDA",
    quoteLabel: "SOL"
  },
  {
    address: "7RAfjFBqeirVEDWaEDGwBg7EJh8EyTa5xGgGcZg7TRMD",
    name: "SOLLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLLA",
    quoteLabel: "USDC"
  },
  {
    address: "27FmUAvkev6X2qgFgUcYvtgdwD2SAdpVxfu8rYXEB6QM",
    name: "REJECT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "REJECT",
    quoteLabel: "SOL"
  },
  {
    address: "BwUEydqxbNKRsWoox3ZzhG8FsPJ89RfLfE21ix3463QF",
    name: "SOMIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOMIC",
    quoteLabel: "USDC"
  },
  {
    address: "GFGi26yooPCuWu2h5GXcmLP2r7WXvsfMp1aXyvwTiBVX",
    name: "SMOKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOKE",
    quoteLabel: "SOL"
  },
  {
    address: "ESTomeDPRRYX94ytZQLGa9c8K3LAg3QY2zSH2xw88MrD",
    name: "PINKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINKE",
    quoteLabel: "USDC"
  },
  {
    address: "AA4JqXfwyRgoFYmLeq6rtSgtjbJZ9MgXz9eNJFYSALSD",
    name: "GY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GY",
    quoteLabel: "USDC"
  },
  {
    address: "9obMHdsZLkkBs7ngRvMZnNs7PXVyJwEXPTWPdaJZZZAg",
    name: "LoL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LoL",
    quoteLabel: "SOL"
  },
  {
    address: "2dQSvdzqcopBxedCEU5EtcLLXRRsBS22HWWBwUGj5FAU",
    name: "PLEB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLEB",
    quoteLabel: "SOL"
  },
  {
    address: "35v9hz4TrxEj3dNAt3u8ZeUqaswr22zQZ3d4kXXqp1c8",
    name: "DLPHS/WHALE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DLPHS",
    quoteLabel: "WHALE"
  },
  {
    address: "DAX2Jq7sC3MeDQcLg8je5qhFwaJswmwSMpCNBRHXtDsV",
    name: "BabyP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BabyP",
    quoteLabel: "USDC"
  },
  {
    address: "6hHhJYRE3Ezh5by12zCMJmcmzMibBGZb732Z7N4qeVCt",
    name: "SID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SID",
    quoteLabel: "USDC"
  },
  {
    address: "FXhNgDSr7C2ee5dXco3RuztVaMamDLDFtiZ3Nw28MuDJ",
    name: "BCOPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCOPE",
    quoteLabel: "SOL"
  },
  {
    address: "4oK2tPBQEiA6aosUGggWFz7W5dzC6t9x4hYVwQC17Dgm",
    name: "777/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "777",
    quoteLabel: "USDC"
  },
  {
    address: "96tcDVcirn3n6tvUUkxWxpA4xFDmu8vdtPvm1s8aRwkQ",
    name: "PepeScan/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PepeScan",
    quoteLabel: "SOL"
  },
  {
    address: "3pDSJPLDbttAAVuztzNovVhjMR9biQvxHy1Z81HGsCxk",
    name: "RABBIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABBIT",
    quoteLabel: "USDC"
  },
  {
    address: "8wzi8QfToA5pcfCCEVru8j1RrtHisfYqGAoVBRBA4duv",
    name: "Solub/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solub",
    quoteLabel: "USDC"
  },
  {
    address: "3pN5TaCUYWsfeHLUg784vaJJYbJaxbSzGNTqW21S9FLt",
    name: "SLUNA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLUNA",
    quoteLabel: "SOL"
  },
  {
    address: "FVCN6vEhU7tnavP35Hihn5NPuxLVwjqcEU59KY4YhNAe",
    name: "SMILE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMILE",
    quoteLabel: "SOL"
  },
  {
    address: "8xWKJrDBY1839ncB6vSmMN7hR51Z8TJW5nizzo3N4rWB",
    name: "MARY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MARY",
    quoteLabel: "SOL"
  },
  {
    address: "6kUJ1yBscTjAgXpyEfbUftpDVv5wdbEPEXns7tsZW1gd",
    name: "TAMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TAMA",
    quoteLabel: "SOL"
  },
  {
    address: "23HL9U8C7Mk7D1n3XtMoyGtGbpk8F3prLEVTYvBsKEd2",
    name: "Lotus/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Lotus",
    quoteLabel: "USDC"
  },
  {
    address: "4kLMM7BXjMr8eayRCY8VVUk8h9Vyt5jHGW7p1esYqPWm",
    name: "MSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MSOL",
    quoteLabel: "USDC"
  },
  {
    address: "9FQXJtRCvtvLnfwB597SYsx6nrREvZ7af9KJUzmX7CEw",
    name: "HOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOGE",
    quoteLabel: "USDC"
  },
  {
    address: "6PEHC8KsUqX7D3CwgbSfuuyu7PrQEq923KwPBU56eLVS",
    name: "TODOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TODOS",
    quoteLabel: "USDC"
  },
  {
    address: "A4sWfxh1hUpAxTPAFBbsd9pHwV59CZdzqr8obVqn3zXG",
    name: "AGXAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGXAI",
    quoteLabel: "USDC"
  },
  {
    address: "6o2Ft99vuu1v8SH8Lx1PGMoZXvCGs6Fk2sFmrFV9zQCu",
    name: "SHIK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "SOL"
  },
  {
    address: "256PousckG7tYZvmVyT7RH767LrC63LutfSftTetuK8r",
    name: "USDC/CHAD",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CHAD"
  },
  {
    address: "2AvMCgAq8ag6KnpTFuBJySN9gy6xQqoGGbeec88PgJf8",
    name: "FOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOO",
    quoteLabel: "USDC"
  },
  {
    address: "EcAntQQZcURDdnuRt45Qrzok2czRMShb29D1wPwWy9A3",
    name: "vBLSH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "vBLSH",
    quoteLabel: "SOL"
  },
  {
    address: "GCkZZvZe9KmhJyokNbbGZ1yZWcdqNHFZi2fLoNdPJKPP",
    name: "USDT/PUGAI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDT",
    quoteLabel: "PUGAI"
  },
  {
    address: "E6EEA85eEaDk85cNq571Y2DNUw44p7sU2txC5NGGhTFT",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "BDYcf3FUQrfcdx8VYicoDcB4UC66eDD6BKmVH6sA82zU",
    name: "POPY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POPY",
    quoteLabel: "USDC"
  },
  {
    address: "HgSiHb1xaGcGLy66B4TUr754rXkABMCUAsSnti6hedHm",
    name: "KIBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIBA",
    quoteLabel: "USDC"
  },
  {
    address: "HH7xBPcRLmviVutFaHFVrSZUkiT7FQqdpiJm4dBpdWee",
    name: "GALA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GALA",
    quoteLabel: "USDC"
  },
  {
    address: "Aik8qLTT6ZeHrYJqaUrMizwqr9c719fSdZZAACkFGqzh",
    name: "CHAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHAD",
    quoteLabel: "USDC"
  },
  {
    address: "Gz2H7R96THicLDu48xh5QHWtFGj6vGPqM8QwPhhdTmGW",
    name: "IBIS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IBIS",
    quoteLabel: "USDC"
  },
  {
    address: "4fjTKSn6zPW6jkzVcAH81Xd7WwZ7guZEMMLb9xEFU4sz",
    name: "SHRMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRMP",
    quoteLabel: "USDC"
  },
  {
    address: "sCYx9wRCpKyaFT3jF5idyedSHjYmz2N2AsPo5A26ueq",
    name: "SHBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHBONK",
    quoteLabel: "USDC"
  },
  {
    address: "6jqxngJUwiKzx2e7AaZJy9PVu8NDFq1adzVHoM9aJXb6",
    name: "CAKES/FLOUR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKES",
    quoteLabel: "FLOUR"
  },
  {
    address: "JCu6kRpesY6Ku7o87e7zyLkozpufazxYh5xw53wQGbX7",
    name: "DRGN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRGN",
    quoteLabel: "USDC"
  },
  {
    address: "6ZLhUdFb88C4tFNBEzBKAkuEpUZaGME8fsJrYnoyxT7y",
    name: "RABONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABONK",
    quoteLabel: "USDC"
  },
  {
    address: "8VhWBdF425qYBbwDzUZXyobjoXoVVwYPCKvXcA6xBsuf",
    name: "O5O/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "O5O",
    quoteLabel: "USDC"
  },
  {
    address: "HtkYmL7mfJNpbkzVdKrUC1kEWspa72hZ4G1iPabQQM26",
    name: "MPUG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MPUG",
    quoteLabel: "USDC"
  },
  {
    address: "HSUHGJFm79CaRoYesQ65b4CfZu6WF8ws65CHYzUdZ4G6",
    name: "SOL/SIBH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SIBH"
  },
  {
    address: "Fo6YrWaceoE4Csovg9kGX3UzopfmSPVzaYP9BD7ndK9h",
    name: "COSHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COSHI",
    quoteLabel: "SOL"
  },
  {
    address: "9MqGYfLS5b6Ykk8pgNAJp7oNJJMLhQcFUpQ4L4zyUby3",
    name: "Clock/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Clock",
    quoteLabel: "USDC"
  },
  {
    address: "2UKbfxxNvvwfNrSGQY86dQ7BTkW925apmsKVGin3iisk",
    name: "PLEB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLEB",
    quoteLabel: "USDC"
  },
  {
    address: "DxnaemnnkEYzKqMYGLzBSB8SWqLSQ6Z5c6T9wNmScRLP",
    name: "FLECO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLECO",
    quoteLabel: "SOL"
  },
  {
    address: "CLwr42PsMMydfLKqJsHaU1iVstWqCJdiZn42JAJRdP6i",
    name: "BBI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBI",
    quoteLabel: "USDC"
  },
  {
    address: "3q7oUpEm2bQcAJbEDkAG9cUaoEnFhCVdSfhRjKb6w7gH",
    name: "NopBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NopBONK",
    quoteLabel: "USDC"
  },
  {
    address: "GcmvUDxEzb1brnn4vdmQXNJdMtmqovAB42x6jxsnhkKW",
    name: "BART/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BART",
    quoteLabel: "Bonk"
  },
  {
    address: "EzJiSz7Gv7ymp69mev4dwJZtSfkyyhXRADFNa487gNF6",
    name: "UDG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UDG",
    quoteLabel: "USDC"
  },
  {
    address: "6fwaczaowejJDBz9ir6UJm8kutUptYmYkkdJbk5EaFmb",
    name: "JIYUU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JIYUU",
    quoteLabel: "USDC"
  },
  {
    address: "R4owkM6Ez72rAacz5aXBagj3xGZoJKD2yww2A6wzqPA",
    name: "SAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAPE",
    quoteLabel: "USDC"
  },
  {
    address: "EXvmAVDM4sYattqfXzmpjEQuwmYNeBEyoVU6k7CWFAN9",
    name: "HOLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOLY",
    quoteLabel: "USDC"
  },
  {
    address: "GCWxhts7bd5zXfRnBzB1jYEgS4Md3SXFE5ZRsyQVYUje",
    name: "ASYS/TENDER",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASYS",
    quoteLabel: "TENDER"
  },
  {
    address: "J5GNg68c58Hp1C33CKMbtA6FoRGujds9hfBXFffxy7pd",
    name: "KAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KAPE",
    quoteLabel: "USDC"
  },
  {
    address: "9wodsaGn8zuEFDiPzimev8yZPFVJGu4TbSqNeQAtYeAS",
    name: "SLK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLK",
    quoteLabel: "SOL"
  },
  {
    address: "CsYnMs1KkUFi8bmycjYQJBzjJCSLzrsfYGN4NeZo8Qrt",
    name: "USDC/SR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SR"
  },
  {
    address: "7K1i48rsozdu5As8oVMazqd6sztcYtBvcpT6vRY15wQz",
    name: "CEO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CEO",
    quoteLabel: "USDC"
  },
  {
    address: "AYscnLpvjaXq2YJkxjzXDrdojZ8Qofobom1GrsfXoJos",
    name: "sSWAP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sSWAP",
    quoteLabel: "SOL"
  },
  {
    address: "855YP9QTuvY16hY96ynWY2Z6SXCsisreEfenCPVTiM98",
    name: "EAGLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EAGLE",
    quoteLabel: "USDC"
  },
  {
    address: "DbjB5co1ESJU752Zr56iHgdiJgSR5sPj4A2Uyw2cL2hZ",
    name: "bBREAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bBREAD",
    quoteLabel: "USDC"
  },
  {
    address: "Wm1tpXJX6i3MDWoRjuM44sGjNdv2LMQtwwh8eX5MKV7",
    name: "Lona/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Lona",
    quoteLabel: "SOL"
  },
  {
    address: "Ekur1A6AgqazEksjKsF6fTtiWfL8KAHrputNppyJtGRv",
    name: "ESC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ESC",
    quoteLabel: "SOL"
  },
  {
    address: "66RLtboeYSPb73KLt9eLqkEwpphV629uKcfn97VzUEHN",
    name: "SOL/SEED",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SEED"
  },
  {
    address: "9rv8nV5hWRf6Cz24jdH5gkLGrUJ8ZTm4NYhKCFspU2Kh",
    name: "SOLAM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAM",
    quoteLabel: "USDC"
  },
  {
    address: "H9gYHiQPi8HuieD8PfM2Nd1fiumCyhPXNfqrmwrLaqmx",
    name: "BFRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFRONK",
    quoteLabel: "USDC"
  },
  {
    address: "9b7HNXD5bZjuPdfTzuCrosb6Q6tpPqnjRtA8H39jETJ4",
    name: "PNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PNK",
    quoteLabel: "USDC"
  },
  {
    address: "7AoKENUbCCR9FeRT3bVFY1nmbmt7Rp5JbDFcf7kHVo1s",
    name: "BANGERZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGERZ",
    quoteLabel: "USDC"
  },
  {
    address: "2MqSpfYwdQq6ypPhjwVGwpD9RjkNyLHDR6m281hYHDzS",
    name: "Monke/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Monke",
    quoteLabel: "SOL"
  },
  {
    address: "EJ8gekg2dcbx9TnS5vGZvMpDQgvJxxA2WGhSsYReSKE9",
    name: "SIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIN",
    quoteLabel: "SOL"
  },
  {
    address: "AJmPDKoDBhN99Tc3SkUyUyNKb6nVWZnA9kJ3EJwDCJyo",
    name: "TFBK/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TFBK",
    quoteLabel: "USDT"
  },
  {
    address: "HMuPoFqZWcTqgfyzvVJMLY6grZTbyUxHKtsubtJT7wQ6",
    name: "SOL/NEKO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "NEKO"
  },
  {
    address: "2ucpqpkRhbHR9PLQGt43Lbb9o8scrDKwYpMviDNYYnYB",
    name: "DONUT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONUT",
    quoteLabel: "USDC"
  },
  {
    address: "2GGrKdv8rxR2TxCXP6UG61QD7V2dJTFJY7CZokfYtQoW",
    name: "PUM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUM",
    quoteLabel: "USDC"
  },
  {
    address: "9BZMU25xfdtM19KPM5NZjQ2BUwEYcrsZi2qCVp9Gc2P9",
    name: "SCRYP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCRYP",
    quoteLabel: "USDC"
  },
  {
    address: "Evr6TA976XRcDJrsGyCYwzjoxDh5iNvp8ghfbCXzfRXT",
    name: "FAMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAMO",
    quoteLabel: "USDC"
  },
  {
    address: "Fg4feEmSjuun8RMkWGBvnnUyXmAKPWizRuRMS4udKGH",
    name: "WAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAR",
    quoteLabel: "USDC"
  },
  {
    address: "4FCcFEFey2TVysvdVWzVDy6d4NGAJ6ZN8JdE45R953Bs",
    name: "SCH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCH",
    quoteLabel: "SOL"
  },
  {
    address: "A7g4axPBT9Tvps2sre21XHYpAvZ1xeEecw9g19EmMTwV",
    name: "CHIMPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIMPS",
    quoteLabel: "USDC"
  },
  {
    address: "B6VK9XHonLq5cUpdqP9NN8Vw89n8bAXwya11jGH652ZW",
    name: "APSO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APSO",
    quoteLabel: "SOL"
  },
  {
    address: "4wVz9pDRWe9q5Q4xRcPG2zJDVQBCFU2xaLvtJCWaVjtJ",
    name: "SABON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SABON",
    quoteLabel: "USDC"
  },
  {
    address: "6CJuU5RF1FJrEu5Y27rdF9fmhpMwG8Jr1BYuBu5Uc9HB",
    name: "SNOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNOW",
    quoteLabel: "USDC"
  },
  {
    address: "7FrgP9EiUvVbZ6RV8PJmBK9LLN7eTxAbX4BZBXqzoxq6",
    name: "MINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MINU",
    quoteLabel: "USDC"
  },
  {
    address: "Hrw6qBRJEdwDypbKE4kckm1C9XKMWJ83Y3qAUpCUjUjW",
    name: "WARTHOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WARTHOG",
    quoteLabel: "USDC"
  },
  {
    address: "C8a8Yk92CgEdoZRgcRmqcMpBfhTn3enBZYxFHaagqG8",
    name: "SKULL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKULL",
    quoteLabel: "SOL"
  },
  {
    address: "ApniumHLBPt8YSVRwr6YxGZxYAcwij9eh9VibhDSGYbk",
    name: "BURN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURN",
    quoteLabel: "SOL"
  },
  {
    address: "CaDMHFqMfFQdpuLJTjKV639mHA1MqEwAAiWei13b6jxK",
    name: "SHIBI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBI",
    quoteLabel: "USDC"
  },
  {
    address: "SZE3tPUUtg2a8cQVqQf3beAKPLMCB77K6MRdve4nRyv",
    name: "EARTH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EARTH",
    quoteLabel: "USDC"
  },
  {
    address: "BbWfsjwFszMAduPoXErnXt78tBYAb4vEMPZjrPPHCVfP",
    name: "iBoy/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "iBoy",
    quoteLabel: "USDC"
  },
  {
    address: "GB282LwTgz8hVJspS5GnYrveCNPzQecWXwNhscMqJTwa",
    name: "WTFX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTFX",
    quoteLabel: "USDC"
  },
  {
    address: "2XpHoTBXEd4DdArPDfXqzFRnbGTKvLibJEnyHEtGu5K9",
    name: "SOL/DOGGO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "DOGGO"
  },
  {
    address: "7LEoHuwaz5KPjx3yAE1c7dxjGfxvtNSovpMJm3SWYo2r",
    name: "GMT/GST",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GMT",
    quoteLabel: "GST"
  },
  {
    address: "CPwqJXJDQ9YARRQaGZGGyNQxq5ZGEVEwR63tekNoxnwG",
    name: "Nord/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Nord",
    quoteLabel: "SOL"
  },
  {
    address: "9twuvTYboTYwUL7NfKaKsPkUqfX4LWcxZsqXpnDj2mot",
    name: "TTTS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TTTS",
    quoteLabel: "USDC"
  },
  {
    address: "HxjwG8Fq4UF7HB1KkWbu2SPs7JQjveuUw8RTZ71EoEgm",
    name: "BEAGLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAGLE",
    quoteLabel: "USDC"
  },
  {
    address: "4U5UnDGzWTuDSYYG6dsv9N1JQCQE3mSKftxkh1qFSDiu",
    name: "COFFE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COFFE",
    quoteLabel: "USDC"
  },
  {
    address: "3HZyvGDbANadNGf8Fxx4VEKC8E6iNtzp721s4X8XY4Ha",
    name: "CR7/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CR7",
    quoteLabel: "USDC"
  },
  {
    address: "GB72GnWUi82X9aZLuUxmnoZxvRy5e1yt3d1jvWKx358A",
    name: "SKYFL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKYFL",
    quoteLabel: "USDC"
  },
  {
    address: "5ivGiqMSLScMzMLVZUcfKNCcXLZgk9y55TGiU3bQ6GVW",
    name: "SHINJ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHINJ",
    quoteLabel: "USDC"
  },
  {
    address: "5n3r6geoT2czAoHDzCiazkRgDhaYYSyzsuEZiKNpG5aS",
    name: "POGI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POGI",
    quoteLabel: "USDC"
  },
  {
    address: "EPw4oSXgKbiPHtQ7CF1tjAgmLxbvkBp6Yfcvu9eGRLT9",
    name: "BLAZE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLAZE",
    quoteLabel: "USDC"
  },
  {
    address: "H3CdvWGU9crLkWsqWyfNAacaW9T6hhxcJefkCsDAZ9c2",
    name: "PEBO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEBO",
    quoteLabel: "USDC"
  },
  {
    address: "CEoc8y3TsWhL2MmZW4Xp5s94bs6v8eUHqPJrtDNR2VBF",
    name: "KKK3/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KKK3",
    quoteLabel: "USDC"
  },
  {
    address: "8uvdsd7pa5DDrfKefN7k9dvBDjpvkhqocsXnwSnJYDZb",
    name: "DOWGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOWGE",
    quoteLabel: "SOL"
  },
  {
    address: "4m88jkEDrWNSSKiF7C659G3TCZAsWd3qpwymQyomhAAW",
    name: "SOL/Kong",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Kong"
  },
  {
    address: "FrFGr2R9bpnB1uWcJMEd6T672LRxcXxPKLKkWCYm3NGC",
    name: "BOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOPE",
    quoteLabel: "USDC"
  },
  {
    address: "94QCf765z3qbAQsBDZsFM6MhcPYEKVGr4XsUTgm5CAmF",
    name: "COOKIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COOKIE",
    quoteLabel: "USDC"
  },
  {
    address: "C8inQqtvXKm83moEKarUP4HLwB3A8YjYLmnXZBRp2z8X",
    name: "OXA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OXA",
    quoteLabel: "USDC"
  },
  {
    address: "7hDVbN5JdAouzNNQYL7GT3Jy6seX8gBrM1LTvjHWboWt",
    name: "HAMS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HAMS",
    quoteLabel: "SOL"
  },
  {
    address: "3qdb4TaGuZrp28d1LkLjyQGovBNe44tSMqa8HwBHD6aV",
    name: "RNF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RNF",
    quoteLabel: "USDC"
  },
  {
    address: "9XTZWQbUV3SZo8xpoGGL3vH5BgBkVJUnQfhXWikMEQRj",
    name: "SMILE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMILE",
    quoteLabel: "USDC"
  },
  {
    address: "3sVPVm8mu3jAg6p4aqiSV15y5tGvMxTyJUPrVAttbTUe",
    name: "CROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROW",
    quoteLabel: "USDC"
  },
  {
    address: "3MBkrUUGoAWFcRbVRExtrRpDTjojGcuB5UryzuGSEeAu",
    name: "KHABY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KHABY",
    quoteLabel: "USDC"
  },
  {
    address: "7EFTHwbWU5xFBPLSnyucNQFtLddwSAbSCC534NMGvQht",
    name: "LADB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LADB",
    quoteLabel: "USDC"
  },
  {
    address: "CRaa6nS6U3WDeGHKpPukNhEzoYNtocvhG7oH5DP1ufnw",
    name: "DMEME/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DMEME",
    quoteLabel: "USDC"
  },
  {
    address: "6W8fv8PiUa7LSXvnDH6j1ojB5meMwVSRDkDEurTNZBbV",
    name: "USDC/EGL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "EGL"
  },
  {
    address: "3ob44r5ZAvxEmL5CJK7QfEGLcY1xUAvDnVAc8MTbh243",
    name: "BDE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDE",
    quoteLabel: "USDC"
  },
  {
    address: "3sKTVuT1zNbNDJVShpKwGq2PJTBJJ74uRrp74hm7gZw1",
    name: "Dogie/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Dogie",
    quoteLabel: "USDC"
  },
  {
    address: "5RSintr94mW4YzPv9LTZRnyqZPtTysfZ5sEWCM8jfTC1",
    name: "FLIPGIRLS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLIPGIRLS",
    quoteLabel: "SOL"
  },
  {
    address: "HwrX34K1SKwGEdNjgA5boQG2VYkFJVV1WFNCGphzAymw",
    name: "FrogC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FrogC",
    quoteLabel: "SOL"
  },
  {
    address: "PvUD16NY3qqiiChnQiCdjwZs9cVCkWHK1Vt4NMbMaBM",
    name: "SOLMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLMI",
    quoteLabel: "USDC"
  },
  {
    address: "SLWeJdcD7jFQDQR5jDSzvCiqGdC2ekHndm8duM6m1Wk",
    name: "MBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MBONK",
    quoteLabel: "USDC"
  },
  {
    address: "9c5A4BThTa9LbM6KQXL7Asiv7b7rxww8KnwV28E9mAGH",
    name: "CILO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CILO",
    quoteLabel: "USDC"
  },
  {
    address: "8P849ZtZftUSnShDJihaCaQuGkvz2grDeGdAWnfWZH6d",
    name: "MPEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MPEPE",
    quoteLabel: "SOL"
  },
  {
    address: "BE2ptnkVod48Qefcne4RJPDWRon75yERDBibqnH58jSz",
    name: "RETRI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RETRI",
    quoteLabel: "SOL"
  },
  {
    address: "3f8QLbUVpG7TZeKPTxLoRwoBkWPfuyN8fZhzmBQfBHWY",
    name: "OBETO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OBETO",
    quoteLabel: "USDC"
  },
  {
    address: "AsbddqpiT72AEAp5qoGUdzCZj1r6J91CbguMMSCJgyA9",
    name: "FLOAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOAI",
    quoteLabel: "USDC"
  },
  {
    address: "AWJoVbW5qzRGgBt2ygHs95x6PA8o8rLpXQXqd8tFqRz4",
    name: "SAPY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAPY",
    quoteLabel: "SOL"
  },
  {
    address: "FwNSFhvXFMgrtBu51rCkuq5uAvWwXQwjKvyRFo24Mc2G",
    name: "PCM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PCM",
    quoteLabel: "USDC"
  },
  {
    address: "9L7mmMNxaHZKXJnvb4XNnWYRnKPd59CpNUyA8jArhEGs",
    name: "SOLJK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLJK",
    quoteLabel: "USDC"
  },
  {
    address: "F3456TRpGryNGfHFX4hAeKQryFzFRTn5E4MwDzt7yprH",
    name: "SOL/SOLAMA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SOLAMA"
  },
  {
    address: "12jcVNBTFAvghpuYRCwxnxdK6g81eUAyBYcn8R4xb5VA",
    name: "PRISM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRISM",
    quoteLabel: "USDC"
  },
  {
    address: "BnUvhrEpm1hGUiNfVyRWb1fZ1SzPDQEzwpQ1L8ZFMtcG",
    name: "ZAZU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZAZU",
    quoteLabel: "USDC"
  },
  {
    address: "9EinugHBq6S8ujRJ9NZGLeW4WS5k6biPW68X3yPLEg2X",
    name: "BOOBS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOOBS",
    quoteLabel: "USDC"
  },
  {
    address: "ECwBajkHnd9rT4D5qgYeixr8cGWxRVoWwkCfmjtzPvDe",
    name: "SANSU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SANSU",
    quoteLabel: "USDC"
  },
  {
    address: "8NF4XJXoQURheyhAwthqjbVhSBpcARmoo7U8LEp7rv5c",
    name: "SCATE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCATE",
    quoteLabel: "SOL"
  },
  {
    address: "4Xztyq5Dwnh712RLp23U9eaNRJ3FXkAjtpFaDhmxCaVL",
    name: "Fable/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fable",
    quoteLabel: "USDC"
  },
  {
    address: "Hp319DT43C6Pm3XY9bQsUaSwUqSLYf5MndSmssXCw9MN",
    name: "WAGYU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAGYU",
    quoteLabel: "SOL"
  },
  {
    address: "8n2K3nQr4CzcnPWpWBjhFF7qz8ixb7d8tyDh1nTozX4b",
    name: "SHIB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIB",
    quoteLabel: "SOL"
  },
  {
    address: "4pWdJfYsQPMq61XtLWRFAdmU14r8du1eN4xVGUxSHMEG",
    name: "SUNY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUNY",
    quoteLabel: "SOL"
  },
  {
    address: "EnoAV2DyttD7ZmQ65fY3JXYXtoEyxJt1FHL8DdCrqA5T",
    name: "NYWN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NYWN",
    quoteLabel: "USDC"
  },
  {
    address: "EA6gqv28BuWPdGTaqiwzdiaDcfi8hKiGSSs3oPd1BKzH",
    name: "Sheep/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sheep",
    quoteLabel: "USDC"
  },
  {
    address: "4z9f7syPFPWJ3EWGygY5U6cuhvCGZzpCSepN77bqqAgi",
    name: "PI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PI",
    quoteLabel: "USDC"
  },
  {
    address: "H3eLWfN9yUExwoNQvCXnf6xpUL5i6bAUEnUDv4NhPMk3",
    name: "MEOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEOW",
    quoteLabel: "USDC"
  },
  {
    address: "jyZbT25mh3yD5r8UygU4awZgx7MRGfJSymCQg2W6P36",
    name: "SOL/SDOO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SDOO"
  },
  {
    address: "4UB5uQfRWyX1FQJpGbdM4gMj224N1FqBQ7TQsbrLUmtT",
    name: "VITA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VITA",
    quoteLabel: "USDC"
  },
  {
    address: "GVg5SmM1diUdSwCkg8Q7kGyD86atA36NPgXhDp3NWwG9",
    name: "SONA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SONA",
    quoteLabel: "USDC"
  },
  {
    address: "78S8iPmNG9JiPb2FMGZT1qfzeqX7UBqm1tHg16adN9Tz",
    name: "GKoz/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GKoz",
    quoteLabel: "SOL"
  },
  {
    address: "7WHDcdeU3zDeN5hz4uNPVK1oguBjr6Dbk25Fe1w9jtSp",
    name: "BAMB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAMB",
    quoteLabel: "USDC"
  },
  {
    address: "VBb89zpKhsp5FrTkG7Bcrer2vGKkitJZSFJiZQ67wMp",
    name: "DIAMOND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DIAMOND",
    quoteLabel: "USDC"
  },
  {
    address: "JDgnM6oDazRbs9dmGA4Krf4URb854skD1f5Nv5cEDXGk",
    name: "SMART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMART",
    quoteLabel: "USDC"
  },
  {
    address: "GNSXWHf8UooM3hUPHiPLJ2y5XMSwqSwFfy2EZtgUYTcs",
    name: "BVV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BVV",
    quoteLabel: "USDC"
  },
  {
    address: "DrjLFyjK44CFp3eJq75jxhQMqLSg6CVRTobwqUdxKWxP",
    name: "TSUKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TSUKA",
    quoteLabel: "SOL"
  },
  {
    address: "8HJnarc9H6KbHyBvUsg9GDqKyELQjMqVKcQxqPkkxFY9",
    name: "COWARDLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COWARDLY",
    quoteLabel: "USDC"
  },
  {
    address: "65ZgPRE3mWSPW84G8SkhmXXBZHMnPo5hD1gzNraLqGUd",
    name: "WOJAK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOJAK",
    quoteLabel: "USDC"
  },
  {
    address: "9NvUkoyW2usDFvJzuRZHjFvkcg8tz12gGVFtKQvHGg9W",
    name: "Immortals/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Immortals",
    quoteLabel: "USDC"
  },
  {
    address: "7XYh7QzCVFLLqXhrK8NgBuVxh8ydJYef1smcEYfhmG1F",
    name: "CRAZY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRAZY",
    quoteLabel: "USDC"
  },
  {
    address: "2nStyvu7v6B28gbYxwsmkE2or7YZZJGXNr6grNSuBR4y",
    name: "USDC/SLR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SLR"
  },
  {
    address: "Gxohh35FAbP4nuGpyygfqA3n4xi7y2Znx7wacF5STNuB",
    name: "BOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOLT",
    quoteLabel: "USDC"
  },
  {
    address: "9TMPvoSGx8HJYi5FVWFXzRetXBE885E9RqS4QoWLufEA",
    name: "ATEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATEN",
    quoteLabel: "USDC"
  },
  {
    address: "7fFSZ3rhjWi8RW4294fu1zjYaTxCV3Eko2hYR65cxgsx",
    name: "LOCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LOCK",
    quoteLabel: "USDC"
  },
  {
    address: "BPCZUD7doPBETHGzMMVTTgmJ4KsvfbTowqf8Vzn1tDMZ",
    name: "SBURN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBURN",
    quoteLabel: "SOL"
  },
  {
    address: "J1SgPX1ehdS5Bq13AJafyKwNHXAqt9mdHT6cJb3DiZBx",
    name: "RAINB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAINB",
    quoteLabel: "USDC"
  },
  {
    address: "EeG555ooQkuX65C3tB3XyFGo65pBqz3AfwoP6q5725FQ",
    name: "Toast/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Toast",
    quoteLabel: "USDC"
  },
  {
    address: "H2dYess8PkMb2B3G15eFBuxA8Ng6M9cUaAq82RnghVoo",
    name: "KEYS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KEYS",
    quoteLabel: "USDC"
  },
  {
    address: "8CRpCpsjkESKZtc4cZLd7sDdqJPsouwnukR6UqYGqdK1",
    name: "DONKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONKE",
    quoteLabel: "USDC"
  },
  {
    address: "3iXABixNDvPFAm427s6jNmJJy7wjdQmPvgNo77RwTRhC",
    name: "SKG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKG",
    quoteLabel: "USDC"
  },
  {
    address: "8E5tRhKqUzyy5PaaLTBwvjcyiF72snY6TgNF85Zo44xu",
    name: "RAWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "USDC"
  },
  {
    address: "Bs6V1c6nYWV4REsNYHbgwAEb2nP7nJLa8c3YJmtzG3NT",
    name: "SIMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIMO",
    quoteLabel: "USDC"
  },
  {
    address: "45ELTDWFti6mLxnHuDnphMfvJy11xoQjYKEjckyGtXAU",
    name: "Lina/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Lina",
    quoteLabel: "SOL"
  },
  {
    address: "C5YaCe8o1rGXV3WSAY24eFiWbTpJ6xE1DjVgsGihXgyH",
    name: "RATOSHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RATOSHI",
    quoteLabel: "SOL"
  },
  {
    address: "33ksNZQAXoYZpWtxdQ57d7JhGbSpgYhvo2sPjopywSUP",
    name: "PINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINU",
    quoteLabel: "USDC"
  },
  {
    address: "JAhKBDNaJ3vpxNuqb2rwXuS8ERfWPgkXVwSSp6AtVjan",
    name: "RAY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "SOL"
  },
  {
    address: "E78wU2gYoAD9HWWKDk9yvcXi2tWf8ZeeyejWS5htYAMm",
    name: "PUG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUG",
    quoteLabel: "SOL"
  },
  {
    address: "AwA6PwCdCTnvtxWPJ3bGDWkSdbLtTK1bxfDroQwRrTEg",
    name: "MEGAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEGAB",
    quoteLabel: "USDC"
  },
  {
    address: "876s9nPQSUBXaL4xuthWdNoHkfmDCymndo7vpDKkHS1G",
    name: "CDAO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CDAO",
    quoteLabel: "USDC"
  },
  {
    address: "432qX9MuT9RkNewhpANFCjzk25D1xvrEG8jVBuhti8os",
    name: "BURR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURR",
    quoteLabel: "USDC"
  },
  {
    address: "Azn6CkPPXbboLxiFpr3rB9dmnyk9L8rLAfRSbonECFRe",
    name: "Spiral/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Spiral",
    quoteLabel: "USDC"
  },
  {
    address: "7rviG9KzDhHkRUM97rRu8QTCa6QbzyiZHWxbkaJGLDB1",
    name: "KASHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KASHI",
    quoteLabel: "SOL"
  },
  {
    address: "8wbdW9n8c3RoT8JFxDVrNN86E9KzeHCSWG8PkR8SDiuB",
    name: "NCHO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NCHO",
    quoteLabel: "SOL"
  },
  {
    address: "BP8hGHuEFod93mCvLqqnrfjKXMkBMsTWdu7ZwZQvB6gn",
    name: "DogKAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DogKAKI",
    quoteLabel: "USDC"
  },
  {
    address: "7xCoeDcdCT3qXyhBUVLxPPJnZYVz63zepsBtFmKfYEKW",
    name: "GC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GC",
    quoteLabel: "USDC"
  },
  {
    address: "E8aU5wwvgZ2nGbTqEsnfv9JczzjJ893sqLW3L9hhArP4",
    name: "DIGIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DIGIE",
    quoteLabel: "USDC"
  },
  {
    address: "GTvZghrAeU1pxVq4vonvuDmhdeKsMa51w9V1LWaVCN1G",
    name: "HOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOGE",
    quoteLabel: "SOL"
  },
  {
    address: "3JQBU1fsZxKVXTsznv5xmQ9U7JmPc86tdsgBuBHVLCBF",
    name: "sOre/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sOre",
    quoteLabel: "SOL"
  },
  {
    address: "83rhbnfVS6srriasdFPimTjobE9yAMxpjoU2Zi5vUg2c",
    name: "NIGHTLY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NIGHTLY",
    quoteLabel: "SOL"
  },
  {
    address: "H1Ej44sjrYdPpXQZeAWRupgSLDFNsipqvKgCFkZh6nqq",
    name: "SFM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFM",
    quoteLabel: "USDC"
  },
  {
    address: "ED7SofqCSbqtR52PvLxbKCYZEfvXEN8uJbJLDvoo91Km",
    name: "BREX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BREX",
    quoteLabel: "USDC"
  },
  {
    address: "FzoBYYu786E2NDLk1Y4MHUxWQ4eMnbeky6wjbYYgpcC4",
    name: "MAGIC/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDT"
  },
  {
    address: "7R4bGSfJNyrFyoWAgGBH2YxXcgpeMNEK3hyZLN5Cmoe8",
    name: "FROGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGE",
    quoteLabel: "USDC"
  },
  {
    address: "3VQWpg3PLKjL9Mowv6yBToPwbexhmKfD9pUqjMyo8Tr7",
    name: "413/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "413",
    quoteLabel: "SOL"
  },
  {
    address: "2DUZczD9n3jaShHghD2G1v84ur2Wai1u4z6bqyduMkBQ",
    name: "TGF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TGF",
    quoteLabel: "USDC"
  },
  {
    address: "HkLTo7jdi5mDniuEcjqhzwsZkSTPKCZWiiZjSBEY6BaH",
    name: "MOUSE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOUSE",
    quoteLabel: "SOL"
  },
  {
    address: "8UsAR9iE9SufQGUEMihf8e1KfcEJp6aA2a5m7FCk5Rp9",
    name: "TCL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TCL",
    quoteLabel: "USDC"
  },
  {
    address: "HjdgRVfSpYw194xkYL8n7QjqsKrjQjcMhopTpdPkBFD4",
    name: "PAPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAPE",
    quoteLabel: "SOL"
  },
  {
    address: "GxjewRBRf6sAEtXUc6bsWCS9kcLGAENYorrMViVaPk7P",
    name: "QUONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUONK",
    quoteLabel: "USDC"
  },
  {
    address: "5bxAcxWZo4DmNbuCAKb97zgGYpbQQS1dhu2fmmkGDSJC",
    name: "WOOP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOP",
    quoteLabel: "SOL"
  },
  {
    address: "EZ2JfG1nHzustk7sf2ugHew6ySrcEB8ci5QatuMMdH8L",
    name: "MAIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAIL",
    quoteLabel: "USDC"
  },
  {
    address: "czqYUdc1EHHTYh1NZhC5qmapN2ovUEQ6DvgCMV4rbbJ",
    name: "SOL/HONEY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "HONEY"
  },
  {
    address: "EnGTSgaZD1JDqpzP1YyXnMd4gK6kCXZCDU7Y1N1cNP1t",
    name: "bSamo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bSamo",
    quoteLabel: "USDC"
  },
  {
    address: "2ik13nphvGV7HXnq7Tx67RyNwqnYD9GXABnJfbcAWm6m",
    name: "USDC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "USDC"
  },
  {
    address: "C9xD4ANEu9hNVFnHmTvwJyaj1jPF74KhRSj62YsuK48Y",
    name: "QUICK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUICK",
    quoteLabel: "SOL"
  },
  {
    address: "Bs44EMepdVqnhfpRWeEtnVj1YhK7rMuk4iRAshPx7KPm",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "6d3EGFz9CqedVaggewjPhuv146CRS6cipZbvMaRxwWjn",
    name: "WMOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WMOON",
    quoteLabel: "SOL"
  },
  {
    address: "GwEZFSKszVCZyFKW3ENkk4QAvCCgsDPEXq6jekYUrJup",
    name: "koala/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "koala",
    quoteLabel: "USDC"
  },
  {
    address: "AF9MUbgsUUxHwHwkag67ZsPWwQ4wjxhkUsBXyhDZeiPb",
    name: "SCLIF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCLIF",
    quoteLabel: "USDC"
  },
  {
    address: "78XEZnGiABvdm7Sft6FVEWsZTLskupGkirkG9JmL8Fpb",
    name: "RAVE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAVE",
    quoteLabel: "USDC"
  },
  {
    address: "D9XYQZ7V7HidbnZBfimWfWrchu29PeP8V1gXwdwYPvSA",
    name: "TATE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TATE",
    quoteLabel: "USDC"
  },
  {
    address: "5vdd1vNFCa5rBjXm71ByuSdDykHHrMjDry2LKT1mXvdB",
    name: "BONK2/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONK2",
    quoteLabel: "USDC"
  },
  {
    address: "3UreL6ngwsmQHms4gt2Gqc3jvLDE9drGe5a61PmQUwfz",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "6pahz7X6WGiXoWzTjppVRUvZuZNJBsqY7CDJPAsianHs",
    name: "BCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCT",
    quoteLabel: "USDC"
  },
  {
    address: "HYcUx82mN5RGdctZRWujmNbXPy1tirU34H9Y8MBmvhNA",
    name: "USDC/Akai",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Akai"
  },
  {
    address: "F6hmQTHBmGdgG87acgYfxQHdHPjv7T4mbLGu92c3KAzW",
    name: "TABOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TABOO",
    quoteLabel: "USDC"
  },
  {
    address: "DnBV1wDfdKtvvSrDQg8CpaqavbLPZEcYoKKZTXbumo56",
    name: "POINT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POINT",
    quoteLabel: "USDC"
  },
  {
    address: "FhBxS4gh5SjYjB41oPgRRWnXkgeqF29Jk3AQ2ayPXsWf",
    name: "Meow/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Meow",
    quoteLabel: "SOL"
  },
  {
    address: "C2GDNWgCArfnwkrtdS5EVrS35XGgLxokQyYztwu4DVw5",
    name: "SCAKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCAKE",
    quoteLabel: "SOL"
  },
  {
    address: "JBv8oY2B8AuQvNRuzNPJ8AY7jh2SgfeE5g2o3Y6GYnAr",
    name: "DUKET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUKET",
    quoteLabel: "USDC"
  },
  {
    address: "CScXKHDHPQBj3JSdZM5WPwL5F2t4nPi1V98iX2xVkov4",
    name: "NIGHT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NIGHT",
    quoteLabel: "USDC"
  },
  {
    address: "GNPcyUufNDDBa1NRDDN27x1EZBLeDw7GfoY2WdXhnAEy",
    name: "BLA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLA",
    quoteLabel: "SOL"
  },
  {
    address: "AMLMWPU9FZZyK75tYaL8ELrKGENLjJ58y2aGH9oVYDbt",
    name: "BIG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BIG",
    quoteLabel: "SOL"
  },
  {
    address: "HXFZMN6Q4MLJ4Rp4ujsPY5HMUaGndSxWdkKbHfbQDW9Y",
    name: "YGMIS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YGMIS",
    quoteLabel: "USDC"
  },
  {
    address: "Cc6gM6J1ejZCesZFtK6ANJ68zCcUqQRgW3rL1vcUrnkf",
    name: "RABER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABER",
    quoteLabel: "USDC"
  },
  {
    address: "HkVmkVGPYJisUquQY2AGu3XmNTuDTfSqja6Lgo6TznpQ",
    name: "PUSSY INU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUSSY INU",
    quoteLabel: "USDC"
  },
  {
    address: "CWTPYMbmWL8qLRx13KkXzHXi6UTVYFeL6XyhFfD231dk",
    name: "LeSol/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LeSol",
    quoteLabel: "SOL"
  },
  {
    address: "2y8c4SDykKcvNrQgXheHcqPA5YCGLc7wVe7x6FKQzp38",
    name: "SSHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSHIB",
    quoteLabel: "USDC"
  },
  {
    address: "D1soLaPoMi4UGADyDFywC263yidSv92dZMbyBBBWBdxK",
    name: "ALF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALF",
    quoteLabel: "SOL"
  },
  {
    address: "7sz6hDHVYAC5hpGA2TqGvFuz4jYp4jYQTVNZCE3wCqQk",
    name: "WILD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WILD",
    quoteLabel: "USDC"
  },
  {
    address: "3so9Jcbu8k1ZCoCFnhvGnr3BVNPt1DUFk53UrSb9KFyA",
    name: "ANU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANU",
    quoteLabel: "USDC"
  },
  {
    address: "61RGcxgr9AjX4v5eNEtgAST7mBmRr29rKvEgGbRa66Yt",
    name: "SBOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBOL",
    quoteLabel: "USDC"
  },
  {
    address: "H1zasV8LG9UK8WUp4nbUyZeGGUGxnaahxeuMqmiHkbSr",
    name: "TUITX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TUITX",
    quoteLabel: "USDC"
  },
  {
    address: "GpjwLXZd96CvgJbgB8wHX9FMxhkDx6WkRqwtgpFoazBo",
    name: "SAFEBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFEBONK",
    quoteLabel: "USDC"
  },
  {
    address: "E3Ykv1WzcWwGG3SoagZcoHQEsQWqdFm46CNSsVBMeN4h",
    name: "TABOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TABOO",
    quoteLabel: "USDC"
  },
  {
    address: "85gUV9Cs41jkA8m41LNfEGE7N8y5arSqX42LVUCnvknW",
    name: "KEKW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KEKW",
    quoteLabel: "USDC"
  },
  {
    address: "CNEX7H2kzVZoQvAAK3a4GCoo4P9rJhMnZJWUvSbtVFyV",
    name: "BLOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOW",
    quoteLabel: "USDC"
  },
  {
    address: "4mz6yrPRoZZChhVMR11ffXkqAqrN7gNR54LS9aqp7RTp",
    name: "FRONG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRONG",
    quoteLabel: "SOL"
  },
  {
    address: "G6wnw5T2JMP1QB56PW12Qu6UvswzL5WCg1nfJd7YtQdN",
    name: "BARKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BARKU",
    quoteLabel: "USDC"
  },
  {
    address: "H9NQa9vgzTU4ShdjcgB3YdXDi9psBXDs7V9f8WRGx7SK",
    name: "CHEEMS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEEMS",
    quoteLabel: "SOL"
  },
  {
    address: "5Pw42Qk23HurpNDCvrw5MECHAaq3VjaXeQTZNCSH95vW",
    name: "GRID/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRID",
    quoteLabel: "SOL"
  },
  {
    address: "fuoWeppm2Qe8KqzjTPRscDSRsHQrUYEzpY48H2Y4BJn",
    name: "SLST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLST",
    quoteLabel: "USDC"
  },
  {
    address: "7xfUkLCfEqWNGwHVoNun3hgVfsPhfrZC69e3jMS18jy2",
    name: "Polar/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Polar",
    quoteLabel: "USDC"
  },
  {
    address: "EwdShKikJkAwg5UjdKb9Nqd6KebfqLnWjEuJAf21nJVh",
    name: "Larva/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Larva",
    quoteLabel: "USDC"
  },
  {
    address: "4VYS3YZX262kzyebfB6j5tRN9EMFfgJk7M39k1NmkdW3",
    name: "MYI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MYI",
    quoteLabel: "USDC"
  },
  {
    address: "HHzso4CgyPSEHSP837gmH6wp1gzva8PXhKqjv59E48cP",
    name: "SOL/FEET",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "FEET"
  },
  {
    address: "3As3gXxs3dGqbCimJQmeP1gHjiPKrDRPcPoXG2Xa1bSG",
    name: "AMBR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AMBR",
    quoteLabel: "USDC"
  },
  {
    address: "B8xETJ1YYuF2FpmsPrDpVuyycX2gTLnR6btVSwHrt8ng",
    name: "COBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COBA",
    quoteLabel: "USDC"
  },
  {
    address: "HWhoRP2mJXFPpBepou6oYTMk3rMF2egGXWR9BHrLfnqV",
    name: "Dogie/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Dogie",
    quoteLabel: "SOL"
  },
  {
    address: "FN9ZnDjzC2eMZXCVGKAHjXEKJAc51XAzR5tducvWxjhG",
    name: "MOO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOO",
    quoteLabel: "SOL"
  },
  {
    address: "2k2W8EakfHmwYpDjjGTjXkZZRiwpUAmb1VjzDSYffCuu",
    name: "OKAMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKAMI",
    quoteLabel: "USDC"
  },
  {
    address: "CmZbCo1j5nfWnR5c72wGv1FwUh4xvwQof4xsnWffyZ4s",
    name: "MOAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOAI",
    quoteLabel: "USDC"
  },
  {
    address: "5kAPeZq6vfv1PxYygt1s4QzRsHaUjQuvTWLjNPHo4iGj",
    name: "CATS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATS",
    quoteLabel: "USDC"
  },
  {
    address: "36EbDRjzgiesYiLHWMZLros4guYFPGNi3PsBMihU2Z1A",
    name: "ZoGe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZoGe",
    quoteLabel: "USDC"
  },
  {
    address: "FoZ9HasxNGT3jeh8YwatQdxWw1xFX21rW272FMBDX1ek",
    name: "CHEMY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEMY",
    quoteLabel: "USDC"
  },
  {
    address: "4oBGAuz3e3Hmgffhf2LzpZ1zyFzobMvRFt6rdvcgS8yZ",
    name: "GBL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GBL",
    quoteLabel: "SOL"
  },
  {
    address: "HFXaDXakBWRiPaCsRBJjEaodu8HfCjnx7LbZauxp7Tfa",
    name: "MJERY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MJERY",
    quoteLabel: "USDC"
  },
  {
    address: "EuGo8HTp11DbiFJ7kkKoQiLkqFtuQM2A2avAJ5FZT6gw",
    name: "BDOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDOGE",
    quoteLabel: "SOL"
  },
  {
    address: "GgaqfM8yhpURrFu2BWW7XK6ZtMXBmMxz3t91bZW7QVpW",
    name: "FUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUN",
    quoteLabel: "USDC"
  },
  {
    address: "4doXpYyy5QbwDUmtNeaChbRcQ3SkC6sG8Zxw3c1Jjey4",
    name: "RAINB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAINB",
    quoteLabel: "USDC"
  },
  {
    address: "Gdh35JTs9djH6hGR3Tr9XuBJBTPdjDwiRhQUBEL2pfqG",
    name: "BCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCT",
    quoteLabel: "USDC"
  },
  {
    address: "DpzgtsddMTLTtHzMK7BgouMTxci7HAh5o1aWfqpyB5ME",
    name: "Corn/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Corn",
    quoteLabel: "USDC"
  },
  {
    address: "GcjpeXoEt6QXWBjMUZLHsv3eCt6yvyQjJAgcXBM4cBpB",
    name: "TOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOON",
    quoteLabel: "SOL"
  },
  {
    address: "CLCtMNEdZNg7RbzHPXUc4jMxTtb5VUyGNM2wHNkLV1Ka",
    name: "BAKED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAKED",
    quoteLabel: "USDC"
  },
  {
    address: "6myFfPuB9pjEzfpQAjjU3wSDrZycK5rJcwDxAQn7vUSD",
    name: "NYAN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NYAN",
    quoteLabel: "USDC"
  },
  {
    address: "EwueWvq9bk8aee45BLxu8sV1dYE8UHiPE1qKvsnZFTGf",
    name: "BEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEPE",
    quoteLabel: "USDC"
  },
  {
    address: "7JEaqPVmjqHaBsztyfC79etTExDgpsWYRk9TGKyqF4Sd",
    name: "CCO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCO",
    quoteLabel: "USDC"
  },
  {
    address: "4msoZ6Nf6rxh2wdbxDTBYcDiWGVc5nMTrxZ5AX9PwyYy",
    name: "SBULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBULL",
    quoteLabel: "USDC"
  },
  {
    address: "9x2V9n3zQVax5j5PLsYrRtu3Xcwxc4ycgPNDVeF2gCiE",
    name: "TMB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TMB",
    quoteLabel: "USDC"
  },
  {
    address: "CbwKiZGXS4VPrdqrBds1AijF24pMzqbE5o4HBByDy3ns",
    name: "T500/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "T500",
    quoteLabel: "USDC"
  },
  {
    address: "58fPXAxEeEps2AcegRxARFAwUK6tKAvt9qQf25gA2kv5",
    name: "UMF2/UM",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UMF2",
    quoteLabel: "UM"
  },
  {
    address: "7JNtu7erUGshPTmM5LSUFsL2hn3tgqcPof7LyTEihUug",
    name: "RIZZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RIZZ",
    quoteLabel: "SOL"
  },
  {
    address: "2sNG5kPiUrL1f9iAdkeE6Xrg5hCGqQcKst97kh9K9UWk",
    name: "BOBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOBA",
    quoteLabel: "USDC"
  },
  {
    address: "AQcaNbQRBnBC9cEZL23aAv2TH1q3cZRdJVpm8zRNKKSP",
    name: "SBTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBTC",
    quoteLabel: "USDC"
  },
  {
    address: "GkZNMqtaV3ETB39SgaqFW3JPScVpmCx6BvyyLW52GYn4",
    name: "SOL/BIU",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BIU"
  },
  {
    address: "7E5c5FPw2Pog4neH67iSfLKM5uvxMcAxxawPaqetqpwQ",
    name: "ARTLV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARTLV",
    quoteLabel: "USDC"
  },
  {
    address: "CrwnnqHq28ModwijYgXvAsqmpB9V2kfbFwQpyQkYnEQQ",
    name: "MNO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNO",
    quoteLabel: "USDC"
  },
  {
    address: "8iesSWKcGErr4oezjTzjs6baQcCbLEUdbkGNhJyn9EDE",
    name: "GOP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOP",
    quoteLabel: "SOL"
  },
  {
    address: "8unQoQwiMTDFNfg5ZfYBuhmmTdThSSosUHkqzRnh6uqE",
    name: "TROLL/mSOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "mSOL"
  },
  {
    address: "CUekcsymEZJihKUPxPziJpukGvnWfnR2EDdxWeYNJMN1",
    name: "ICE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICE",
    quoteLabel: "USDC"
  },
  {
    address: "Atb9NyHRgYm1mv6Q25kzXAcQcFCpJKqMrpcLNJTLvwk4",
    name: "KANU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KANU",
    quoteLabel: "SOL"
  },
  {
    address: "6sFzKqbtXHgVgCQHYXCMN9en5cewcUhCnaudhQzseYdj",
    name: "COCKS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COCKS",
    quoteLabel: "USDC"
  },
  {
    address: "ExpgwhxSnHm9GfQzeioEnXeV5udAWw3JKoikQKtQBS6c",
    name: "BCHIP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCHIP",
    quoteLabel: "USDC"
  },
  {
    address: "DcWf2vttH3BJssgKMwbPjoh3xkxWRY9Gj7wqLBumAFzL",
    name: "MTR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTR",
    quoteLabel: "SOL"
  },
  {
    address: "BnpJpgwzBqqydzSzuFsKVnmUqMUkUia88hd9DQa2Nwh5",
    name: "AKITA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AKITA",
    quoteLabel: "SOL"
  },
  {
    address: "5fWY7wUdDGPgBqCYiWkEkURiv1vrUma26X9uoKdinksc",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "DPhVkHgPx1kMcuBceDSvAphSN7vezrnqZwiLPPL5c19u",
    name: "GUCCI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GUCCI",
    quoteLabel: "USDC"
  },
  {
    address: "CFUK1VgAxLM4Pox6Jfir71QwD4Cpe1VdT8tiUvJ8tuh5",
    name: "ARP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARP",
    quoteLabel: "USDC"
  },
  {
    address: "5Wk6seqUKdgUrPWCFfT2yXNCNJpFRAfLB3gPkhMiNYD5",
    name: "NEXT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEXT",
    quoteLabel: "USDC"
  },
  {
    address: "GTuqhFkMFcnha1qukAD8phczxHcvp2p5rt6Qs2ErNMV2",
    name: "AMEB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AMEB",
    quoteLabel: "USDC"
  },
  {
    address: "5EEs12FvLEmcoXmsRfC6ucf1DQtDwgwH4nTH8PNMf1TP",
    name: "Bonky/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonky",
    quoteLabel: "SOL"
  },
  {
    address: "DLN5kKrRaFQkLsdbLqSXwyzXnh88SMd4RTrmNaDSuWZJ",
    name: "FINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FINU",
    quoteLabel: "USDC"
  },
  {
    address: "67DeX2tAxVovTBJ9wZnZZXm7fFZ4cJ1TzUoDpp4rNw34",
    name: "MOONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOONK",
    quoteLabel: "SOL"
  },
  {
    address: "4fZgFWSRKwYTWVk1Fw3tQks2jHEPyLHjiNb2nZnqMGzV",
    name: "RABIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABIT",
    quoteLabel: "USDC"
  },
  {
    address: "4MN24UC33T35tNmsp1wEWufiWAYMUnEPPRNiD29uSxSa",
    name: "KART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KART",
    quoteLabel: "USDC"
  },
  {
    address: "BhFmK3iBpG9zUrGcFTW5rCDm3DCHyb3EEmBzTxYzqM3r",
    name: "MEX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEX",
    quoteLabel: "SOL"
  },
  {
    address: "CPJVAcYb5sc4iK5RRs2znCXCVyhg4fSUbLPbZN8LnXZd",
    name: "sAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sAI",
    quoteLabel: "SOL"
  },
  {
    address: "GPNmZDRwcC4BWp3SHkc3ANygLs6i9g6j9b3VTZ7Pcmj1",
    name: "DGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGPT",
    quoteLabel: "USDC"
  },
  {
    address: "DpY3Pn5pPrbpmuc6w19tHXFQeDL96GoMG5BcUCYsJYAi",
    name: "SLONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLONK",
    quoteLabel: "USDC"
  },
  {
    address: "6VgmaEm1Tgp3URhurJWKLRKLA3PDGM9xNC3yWtQ1SMRo",
    name: "FLOUR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOUR",
    quoteLabel: "SOL"
  },
  {
    address: "BdHJRifxGNDcoosLEx4Htdacjh3wMaSgorczGRPiW5xf",
    name: "BPRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPRT",
    quoteLabel: "USDC"
  },
  {
    address: "8w6XYo3L9bdBEZaWNDLFNcqhPerLLo9i1aTgLM1LJ9AE",
    name: "Red/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Red",
    quoteLabel: "SOL"
  },
  {
    address: "257v7RXaV3gPBSzvMXQ63B4PAyJswtTXQogjb2jbk91p",
    name: "HOOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOOT",
    quoteLabel: "USDC"
  },
  {
    address: "BBzLvyATfYMjdevQW8eZ6aq5F9JXMUzTyeHFZq2zEVQ",
    name: "COW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COW",
    quoteLabel: "USDC"
  },
  {
    address: "EZnnvjoZLALmUGEy3UQ3JJUDzib49KgG5XeRVeyQfPsA",
    name: "RABIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABIT",
    quoteLabel: "USDC"
  },
  {
    address: "ApHezsYSWxQJcryB77GmgZnzADbHkLDU5nxD9veQU8yR",
    name: "HNT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNT",
    quoteLabel: "USDC"
  },
  {
    address: "E4xbQSQYJnEoav9LaVxfoJrJzAmJG9ycwruKytDYCZZL",
    name: "tOm/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "tOm",
    quoteLabel: "USDC"
  },
  {
    address: "7YpDUVvPsvtFz8rqExE3uvQRTDwoqjmhncFYfBXKRyM3",
    name: "Crab/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Crab",
    quoteLabel: "USDC"
  },
  {
    address: "XbdrnPmSu2YP5h88LbjmXu6Uum4rcZ7PGXtz2V7gjvf",
    name: "MOONR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOONR",
    quoteLabel: "USDC"
  },
  {
    address: "2xroKyGabtfmBm4xv2ZcW75cFUPbgvxPhrkzvj6TZLLW",
    name: "ART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ART",
    quoteLabel: "USDC"
  },
  {
    address: "2ePZNpca2m8ZvjV9pLBY9eDeDtH8SFLvS6iF4uvj8vPD",
    name: "SLOCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLOCK",
    quoteLabel: "SOL"
  },
  {
    address: "6pXrMhiMGusvsVDGiAj5xjaaAMWQaPcd27UwCL7oTrSD",
    name: "WLONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WLONK",
    quoteLabel: "USDC"
  },
  {
    address: "6SsCC81vfDXkisGLeKcfhnPoNrY9Ea4nQMz1fAtjdizi",
    name: "GAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAI",
    quoteLabel: "USDC"
  },
  {
    address: "D6b1G8Qjh3kekj3YoNfMkavvCQrucQZrcTMEngRBWHmr",
    name: "SOL/FOXY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "FOXY"
  },
  {
    address: "3jSQtQVA9m5YQTQ8kXCLf2bp61re9AGLEv6phcUBLQVB",
    name: "SOL/BKG",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BKG"
  },
  {
    address: "6D1Dac4TwDbb9bw44zbYvnGXDGonGGarKWbLxT2U72LR",
    name: "KEKW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KEKW",
    quoteLabel: "USDC"
  },
  {
    address: "4rqYVe8RrGq3t6ui5RbHbvfwHfDd6AEuRBUStSH4ekht",
    name: "AMTAC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AMTAC",
    quoteLabel: "USDC"
  },
  {
    address: "3HFBr23R3nSm3FCGkRksBkwCKnJVtd2ZqMbUiUyGLYoG",
    name: "Bonk/CLOWNS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "CLOWNS"
  },
  {
    address: "3equ9SUmKBtynpVkeBKoztmCCkCU1mygKtuzcT9t1qFm",
    name: "AKITA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AKITA",
    quoteLabel: "SOL"
  },
  {
    address: "DHM9tGeM2UPN9psLHEon8yLuyDe17tdDFwDLTmg7bcVt",
    name: "ONI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ONI",
    quoteLabel: "USDC"
  },
  {
    address: "DfhD7QUG9kanry1oVpXzbJLsMEACCdvAmHK4UcRHxK8U",
    name: "LIONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LIONK",
    quoteLabel: "USDC"
  },
  {
    address: "EYmBNanJnDynFsj9Vh32Bzs5nN46GRdoQk9BEMJjRiEG",
    name: "LBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LBONK",
    quoteLabel: "USDC"
  },
  {
    address: "Bn4nkCkbvEvVGb9KE62rEJcaHk9naB3wiRhBZoX1n6A8",
    name: "ORCAH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORCAH",
    quoteLabel: "USDC"
  },
  {
    address: "ZsZBH8GbH7cNT74pPM6Fy9FCdgijSEzoPuykUnqGfZD",
    name: "TACO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TACO",
    quoteLabel: "USDC"
  },
  {
    address: "DVjYbHFbLiXmyj1bkcr4kNvr2wZnXTZb6uisdLLRs3To",
    name: "GC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GC",
    quoteLabel: "USDC"
  },
  {
    address: "AYGEDEVWvcYYzvSa97GQXJSN8XM4S47GbWWBiovW6JZL",
    name: "BITLANA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BITLANA",
    quoteLabel: "SOL"
  },
  {
    address: "4hDk36sYuSuprVpowaSaFJK6EagdVSSUvnUCaURhfNos",
    name: "SHARK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHARK",
    quoteLabel: "USDC"
  },
  {
    address: "2k5d3Mwqo9FEQ97WPRM5qPF2ZAY36ZRZ3ER4zuUWYUzU",
    name: "SHIBS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBS",
    quoteLabel: "USDC"
  },
  {
    address: "HiQBtVx3jFKWPDJe5R3PJiASSH2hkXEZSAtbqoW552cV",
    name: "PARA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PARA",
    quoteLabel: "USDC"
  },
  {
    address: "HYQwJ8XFovctGXmnpMhEYp4ZDyf6zGdvfZAag6mYu4SV",
    name: "MONTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONTY",
    quoteLabel: "USDC"
  },
  {
    address: "88ydNs2Pq7fzpenNWU6Dof3SKeNkUS2rj7h3XuT3nfn4",
    name: "sBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sBonk",
    quoteLabel: "USDC"
  },
  {
    address: "D1bZi5n9jShVCdQwKD53tc3b3zs9zb5sLCZqcZABwxsv",
    name: "ASS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASS",
    quoteLabel: "USDC"
  },
  {
    address: "4n31PcJPxcAQPRMyR1k6HABoF87YckMM3Eo1cZ5zywRV",
    name: "PONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PONK",
    quoteLabel: "SOL"
  },
  {
    address: "E5UaBddUS44BNyYiK12h5WQ5y9TrrwnQPD5uVrFSGixb",
    name: "DCAP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DCAP",
    quoteLabel: "SOL"
  },
  {
    address: "B8DHKKG9cptmv4WcAL8jK7m3FKuR634znCY9N8QMxz9K",
    name: "ZTONS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZTONS",
    quoteLabel: "USDC"
  },
  {
    address: "6W79NBhf8G2CPnUq1bGuNHouH8Eteg93hjHBoR5soPk2",
    name: "USDC/batpe",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "batpe"
  },
  {
    address: "57cAwnns8CD8gRcNKbQb9YGxKffLsKQ3uiYd3c6prDW9",
    name: "KABS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KABS",
    quoteLabel: "USDC"
  },
  {
    address: "GDQ2Awf2Pg2MbLAcNVSqwW4kyKDssyGWZ7rQa7p9BBKH",
    name: "BullB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BullB",
    quoteLabel: "SOL"
  },
  {
    address: "Fic7vGCuJdLja7iDGNLyJWLgk1pR6pMLFZe9v7Xbswjq",
    name: "SQUIGGLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQUIGGLE",
    quoteLabel: "USDC"
  },
  {
    address: "FofUueUPGRpXjoaN25rzbw11tYnftia8UoTcE1QeJR61",
    name: "ARI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARI",
    quoteLabel: "USDC"
  },
  {
    address: "DHS9zSrxtDPZCAcW6nqLMXKzGndmtPu8eBNjobEbNrdQ",
    name: "XGLI/xALGO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XGLI",
    quoteLabel: "xALGO"
  },
  {
    address: "4XEVRHqDpUTTiaCLvuxdjxzaXMNXkKhSuhLAMzC8e8EB",
    name: "GROOT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GROOT",
    quoteLabel: "SOL"
  },
  {
    address: "EEZLzxrHoZxjZKugXH8u6RAxzF3Lb8pyYzwVJvU6B4T2",
    name: "BEER/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEER",
    quoteLabel: "SOL"
  },
  {
    address: "HZwtqBC8dBjJkiRAXNm5nr29hy2oZ2q3WXKkdBauGoNw",
    name: "REX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "REX",
    quoteLabel: "USDC"
  },
  {
    address: "34CpyDQ5o8jiaQgEHTFjSjPaakBvu479RKE1nKRYN4pN",
    name: "PUDEL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUDEL",
    quoteLabel: "USDC"
  },
  {
    address: "ALXPqRZN51C25CSYipqa4Y2GHkHHBHi5t8bdwpWGPPjv",
    name: "LCAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LCAT",
    quoteLabel: "SOL"
  },
  {
    address: "AxxvUinHxso7dxMMVCon4Kz5jmdwtC35noBvTz7Uv4iE",
    name: "QUONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUONK",
    quoteLabel: "SOL"
  },
  {
    address: "ABqx6JSN9pt29iRfNixMPVedzFoCMfP9NREMuPNBVGu8",
    name: "LBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LBONK",
    quoteLabel: "SOL"
  },
  {
    address: "GHtrxR2Z3YLaXUNiV2ippT9guQjamCe3ChxsTWHtErj8",
    name: "BORED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BORED",
    quoteLabel: "USDC"
  },
  {
    address: "FmDXNHXLFHPg3WaJdKzQQj4AWL6JY26k9jC4i984YyzS",
    name: "METO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "METO",
    quoteLabel: "USDC"
  },
  {
    address: "HHY5fsRgdpJXgRVUhMEdHys1UHZRkMKDJ26VPxY94VeW",
    name: "BONC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONC",
    quoteLabel: "USDC"
  },
  {
    address: "Bs9wsC9hzFkhef85Xix6MFnUyVve7mQeExXz4RTHbQdE",
    name: "DDOGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DDOGS",
    quoteLabel: "USDC"
  },
  {
    address: "46DEHDtPSk6gF2nbrsfaJfpXqvZRTFLybnRL5LQEhsTt",
    name: "Beans/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Beans",
    quoteLabel: "USDC"
  },
  {
    address: "9hPTyd482t41x9waTcs3aEUHPAUYMQmzfJfrWoun2hw5",
    name: "RUBY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUBY",
    quoteLabel: "USDC"
  },
  {
    address: "4dBjVadRaPJG25H49s6L98tUXo5CYxbJwrBqAKbiaXn5",
    name: "SACHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SACHI",
    quoteLabel: "USDC"
  },
  {
    address: "Aqrt6s3e9EYZ9sPWbkcmgDNmiETcBc8vdvUZcCFg8eUg",
    name: "COWARDLY/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COWARDLY",
    quoteLabel: "RAY"
  },
  {
    address: "BNp957c9iXJMdnAkMjaUMVRwWL7pCArDvR9ciwDZatyH",
    name: "BUNTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNTR",
    quoteLabel: "USDC"
  },
  {
    address: "54tfs5BHgPS3ymViMmNR7wEqwS1oQJoysLH6Y6VmMyv4",
    name: "D23/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "D23",
    quoteLabel: "USDC"
  },
  {
    address: "2twzbysmpuhH7GxM4VFgajNtzzSti7TigXiWGgA4UiPk",
    name: "TENS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TENS",
    quoteLabel: "USDC"
  },
  {
    address: "B6rXJ1Qv6wf6WPkfquBWa1jBcE5nqi4W3tiEM5vjS5Fe",
    name: "USSR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USSR",
    quoteLabel: "USDC"
  },
  {
    address: "CpcfBeyU1UGmp9xiQabCGGEzUMBP39MdNmJrwZUQXHdf",
    name: "USDC/TRASH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "TRASH"
  },
  {
    address: "Ecq2K8LK5Gr5QWtMUcmnQgorEBA9UFzZMAR3mYmJuQrm",
    name: "HCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HCAT",
    quoteLabel: "USDC"
  },
  {
    address: "48gqPs3SpR249St5JXJYp32bJ6ms8dCzsP3XYg5bAiPS",
    name: "KNJT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNJT",
    quoteLabel: "USDC"
  },
  {
    address: "5YunB3oe9aLx358amRfZueJ1DuHd7dt4KCNdepW6eCWy",
    name: "MCD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MCD",
    quoteLabel: "USDC"
  },
  {
    address: "8Rv1z1HUkDWpr5DLuBqwT4nV1D84rT3LU5EtaGUHBzBA",
    name: "SYP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SYP",
    quoteLabel: "USDC"
  },
  {
    address: "CfEShB6MX1Xi2pVC7vvKYTjFxvqJtWbi7nHa7gfPtrtf",
    name: "MEMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEMO",
    quoteLabel: "USDC"
  },
  {
    address: "f5DMa6KBiJGVDoncyfjQFQmHqjpF7xpAoFS4Q1F7Uza",
    name: "CHICK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHICK",
    quoteLabel: "USDC"
  },
  {
    address: "FNSM2C33xZkvpJ43DjWXBBmt6MmNNGYepMB1KXfaToVW",
    name: "Kiwi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Kiwi",
    quoteLabel: "USDC"
  },
  {
    address: "8sSSub8nc9hua5j4HSEUMLHQxh7DxeNT48q83uZu6RzG",
    name: "ZSDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZSDOG",
    quoteLabel: "USDC"
  },
  {
    address: "Du8pgbU191z7PntCCMqYqR188XPpUXBXBP6mKXeAMn8W",
    name: "ARCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARCH",
    quoteLabel: "USDC"
  },
  {
    address: "9aeywJr5Gk8sGsdfiSN8KbjnpKrCFViz2sVqVhkVyhap",
    name: "KINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINU",
    quoteLabel: "USDC"
  },
  {
    address: "65EeM1SLnR4M2bUv7KDRfcA4ftQydP6TU8hxVsfDvLS2",
    name: "RBN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBN",
    quoteLabel: "USDC"
  },
  {
    address: "EDiB6wZLwxRec6n4vrS6H1wPJud8gdFTVRfwYv4LWwhk",
    name: "SOLR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLR",
    quoteLabel: "USDC"
  },
  {
    address: "HZWH1UNqRVkJiLd7Ut2f48Tx23jfyjLS4KubP7TuTXXn",
    name: "BCORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCORG",
    quoteLabel: "SOL"
  },
  {
    address: "4YbmnsUAfbKmGPyxNvBiZ17w8vsJNbo72rFordeTRS3L",
    name: "HOT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOT",
    quoteLabel: "SOL"
  },
  {
    address: "FHfNiz2hcxQhi23aefBZd3Q9yav8GEwmNMYTj4FgndKT",
    name: "AGVZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGVZ",
    quoteLabel: "USDC"
  },
  {
    address: "FUCCQFEh8CWeQoxEFV5WGMPqAaGCC2DsZzwpuYsEv37",
    name: "FUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUN",
    quoteLabel: "USDC"
  },
  {
    address: "BczjZX2mb5jiPn5sgfBAgGM16z6ESYdYUP71pWDkqS5B",
    name: "PaoH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PaoH",
    quoteLabel: "USDC"
  },
  {
    address: "D1bLQSh3uzrUF9auXiCPJkvAWr6cSJGikAMebvazc9qB",
    name: "POV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POV",
    quoteLabel: "USDC"
  },
  {
    address: "2t8rSH3EGy4i27W4qgbSAfpE3pQiXqNb13RxmH5ywSBv",
    name: "spooder/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "spooder",
    quoteLabel: "USDC"
  },
  {
    address: "BU6iknXyViE6XHg5q1PewBURanKDaxLj8gNigUS5H9uE",
    name: "SQRL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQRL",
    quoteLabel: "USDC"
  },
  {
    address: "6o2uniweU7RFfGoUhNcwMyRye59AQmHmYj9BcQEs4Bws",
    name: "BOB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOB",
    quoteLabel: "USDC"
  },
  {
    address: "Cx5BWLoL65HjCUjgk5phQWzqKyfwvPLFFeqTAJKeYVKi",
    name: "BEAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAI",
    quoteLabel: "USDC"
  },
  {
    address: "EK8QmKWh1z5d2DFCWWmTgRCtisyuvyxxq9DVH9oP8GRW",
    name: "SOL/BBYC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BBYC"
  },
  {
    address: "CMfGnXr8uit3WHjTcL2QfjfnqJLBU8DRqXqd7ftZPy5v",
    name: "PIKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIKA",
    quoteLabel: "USDC"
  },
  {
    address: "4BW3CQgn2soZKNjKv7At8yuCQGq3jkB5KVrKVMjdxirJ",
    name: "CHILI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "USDC"
  },
  {
    address: "Fm6uZ1numf6Ddo2hvQsvEr84B6v5GBJQkq8GAC8jdeNf",
    name: "SOLGO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLGO",
    quoteLabel: "SOL"
  },
  {
    address: "7kU5eXL8XEVc1DCQoqkiNZWFHMsrxLU6xA3y1c9AhqBT",
    name: "SANI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SANI",
    quoteLabel: "USDC"
  },
  {
    address: "AfowyrG2v3fMcMKScEP48qZkncYK5PYu9KFK7VouMVZ8",
    name: "USDC/SP",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SP"
  },
  {
    address: "67dnEchQhx2vLuhBk7EmcfHwZibJAvit66tJCowWY9Ea",
    name: "PINKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINKU",
    quoteLabel: "USDC"
  },
  {
    address: "CDzU7BG6vuMjdRGVS3C1KzhYPfKENQbXerH6drGep9JC",
    name: "CSICK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CSICK",
    quoteLabel: "USDC"
  },
  {
    address: "5ykpVvSxuhX7xqZofMVTBUoe3EQfz6cPCAYhNzBt1GPg",
    name: "KCRT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KCRT",
    quoteLabel: "SOL"
  },
  {
    address: "3Z9eLzyhXtXji3kNjPumDwRkdbptBxBRnoXo2941TQCD",
    name: "DOGIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGIE",
    quoteLabel: "USDC"
  },
  {
    address: "WP5CJNLD74XrgKHV5Kcj5sTx65L48886b1fArCh78VB",
    name: "BALE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BALE",
    quoteLabel: "USDC"
  },
  {
    address: "APSUkUsY3TqHsiaLiHgd96hG6CJTKtMMcx3RKqfe7qLd",
    name: "PENA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PENA",
    quoteLabel: "USDC"
  },
  {
    address: "31cd4pTYihS4kQM95uxdwRRkqwVgFypNPp8Espp9tXJQ",
    name: "YKAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YKAI",
    quoteLabel: "USDC"
  },
  {
    address: "GJydftoGgHpMsTdg6xi5ZNNEUMa6c8jxcHhXuzVwnHna",
    name: "PLUTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLUTO",
    quoteLabel: "USDC"
  },
  {
    address: "FGGZeWvAhznU87nonZE1kWZEkpBjQYQPsT8q5xd9oxGn",
    name: "RPEPL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RPEPL",
    quoteLabel: "USDC"
  },
  {
    address: "4MsCTC18gpEAgZWtB39R5JyfLd4EcqJxQ73QZPvRCDCg",
    name: "Bonk/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "RAY"
  },
  {
    address: "2KrxcMHfE5WitxdSA3jx1B5wQhidSkjMhMZYQHBxLXMZ",
    name: "LPFi/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LPFi",
    quoteLabel: "SOL"
  },
  {
    address: "7QhZrCDeq1VXLECvPGRaCyLmaQzV1BtfLxj8NqeCpzQ8",
    name: "SFAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFAI",
    quoteLabel: "USDC"
  },
  {
    address: "735whKu7FG2ny7qTQ345ekDAPP7Tf9yEbmASDxWKfTab",
    name: "SOLC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLC",
    quoteLabel: "USDC"
  },
  {
    address: "GoLesEiTzT6kPXL4ZV2BFAeSR7iSJuLLrJsWG15t8yNg",
    name: "PAWMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAWMP",
    quoteLabel: "USDC"
  },
  {
    address: "AhLGybwTvbeWQbVH7jsqB4qY9M224E5MT6bPXo4gvfn2",
    name: "SOL/ACS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "ACS"
  },
  {
    address: "6WMruUt4kPeK8B2czXZ1WS2RSCb1gvv7GccnAvDzNGqL",
    name: "laineSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "laineSOL",
    quoteLabel: "SOL"
  },
  {
    address: "CVBhV3aEqoVJgTcyPe43kcxSgPxQEYq2bKXJx456Ven5",
    name: "SHRIMP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRIMP",
    quoteLabel: "SOL"
  },
  {
    address: "AMM8UXXm7zMnkQ2Mw7ucd6wsYZimmuZBF931R7GAhkm2",
    name: "DEGOD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEGOD",
    quoteLabel: "USDC"
  },
  {
    address: "CYZMK3296kLqyDuNzk72BDK7tApk2QVf1QDn8GCAq5a1",
    name: "DELON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DELON",
    quoteLabel: "USDC"
  },
  {
    address: "73R9ULKK38wQuxD398EwJg1TaQVyQr5AtZgYF7Ak4p1d",
    name: "HACHIKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHIKO",
    quoteLabel: "USDC"
  },
  {
    address: "6iVZ3R7gXum4KDXGdscqpmUHhrEtz1zHqevumoT5mhFs",
    name: "CAPTBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAPTBONK",
    quoteLabel: "USDC"
  },
  {
    address: "DvtaHAvfzFLx6qiGuQvQSvpBXCg3HXRtnFCHXsaxpyCa",
    name: "Pronk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pronk",
    quoteLabel: "SOL"
  },
  {
    address: "6mzZQ18MAGg2q1NGdpv5fck2RSyzCpA5Q9qbrSmMaJ7p",
    name: "PEAH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEAH",
    quoteLabel: "SOL"
  },
  {
    address: "Dt4yZKtEGH7b8cuBFrRFNZYmvfEmNkCJU9UwhwDQ8LWo",
    name: "MINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MINU",
    quoteLabel: "SOL"
  },
  {
    address: "EsTuvXLoBkD7riZWDGSCRegDBtn3vGJz4ePWPfohv2bC",
    name: "RAIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAIN",
    quoteLabel: "USDC"
  },
  {
    address: "32cohVWzeERFqQf3GGp4R3xZqQnM32vpqWiNkwjRA8pE",
    name: "WASB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WASB",
    quoteLabel: "USDC"
  },
  {
    address: "5PfcHkERxeQC3gTTmN4E4jGLVt2ic6DkkdSYvHTsnuC1",
    name: "SHIP/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIP",
    quoteLabel: "USDT"
  },
  {
    address: "G4pcHHYDRc5iSc3bbbXfhQAeTXbXJQ2Ct9eHwMRoeDrc",
    name: "DOOMS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOOMS",
    quoteLabel: "USDC"
  },
  {
    address: "CnnqFdbuLDLytBYZKJzDhGZc42rUuGTsbmpVVXFYEMor",
    name: "GGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GGPT",
    quoteLabel: "USDC"
  },
  {
    address: "FhEyiZJJRaX2Co1TqfVvwjGqdAKvbx8qjpsgAisRUGQW",
    name: "DOM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOM",
    quoteLabel: "SOL"
  },
  {
    address: "3vLA6ESxqaPoNTUzCbPj9TgQuJFXpDwo8kSTppFAdpuf",
    name: "ERNIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ERNIE",
    quoteLabel: "USDC"
  },
  {
    address: "6gWuYhV8ELtL9iw32pinr7srxa2jq9AbxEWTvizVEoUf",
    name: "FUCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUCK",
    quoteLabel: "SOL"
  },
  {
    address: "FSwD6Z4qs5o6ZHQdGFFJAA2uCRFkFbkigaHkhYE1HqWm",
    name: "HOBBY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOBBY",
    quoteLabel: "USDC"
  },
  {
    address: "9Q98LHZgacuSAje3TRTM9F9XG8UFtJexKajZaWa3UtFr",
    name: "OWL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OWL",
    quoteLabel: "USDC"
  },
  {
    address: "6yLFGK7LQihbZKwmcHBwV4UpyJx74UZsaVVz6HWtmzWb",
    name: "NYWN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NYWN",
    quoteLabel: "SOL"
  },
  {
    address: "CazkTEzC7ZziM8XEiLtry5oQ7mBPE8PZ47nTqmhUkz8u",
    name: "EYES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EYES",
    quoteLabel: "USDC"
  },
  {
    address: "FAnpNTguKv4ZSZqx6d8Y68dyeQ5WCCr2aGH5nHJQiQyf",
    name: "MADOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MADOG",
    quoteLabel: "USDC"
  },
  {
    address: "J681Y7AghRycsN6PAChGDjXCdJ6pmq3gAWz6e2ZhZL5x",
    name: "BSHIB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSHIB",
    quoteLabel: "SOL"
  },
  {
    address: "CTeKeBwgo2WnBkZztzWb4TTwsAzREPNbrzZGXQbKzVwf",
    name: "SOL/FONKBONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "FONKBONK"
  },
  {
    address: "4UQgFEU5vR4UX7xL9Dr9vsFhCyjYMnQtYjr2wqAKWdDh",
    name: "Bored/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bored",
    quoteLabel: "USDC"
  },
  {
    address: "H3kiUEHF3ZstN9MVb3bjT9WiWn6PnwNEih8FZpMgHZi",
    name: "BONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONE",
    quoteLabel: "USDC"
  },
  {
    address: "B2PujxH7up46wZD3Ro1vmNrvT8jDYCqxFrbQTLcgyvgU",
    name: "BLOC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLOC",
    quoteLabel: "SOL"
  },
  {
    address: "FpXYCW4DVL2unfFLYL3fEHcgrF1PzY9RiopzbusCtw7B",
    name: "Bronk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bronk",
    quoteLabel: "SOL"
  },
  {
    address: "9VNDsbsx7Cym7fD7qsAvFJ5dTeesKyZttMxKhuWs8w7r",
    name: "CLOUT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLOUT",
    quoteLabel: "USDC"
  },
  {
    address: "3x7nWYHshpE5ofRMjh3b8JPnJ5sEY7mohjUmhWUD5ZyR",
    name: "CROCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROCK",
    quoteLabel: "SOL"
  },
  {
    address: "HRsk7pHAZuuHS7fuobbtXczh8SoKEeHT84coK29r6ZwV",
    name: "LYCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LYCAT",
    quoteLabel: "USDC"
  },
  {
    address: "3QgPBkvVh2sMpikmSaCNZbawP26S7af8XFB9SvB48wHk",
    name: "PIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIT",
    quoteLabel: "USDC"
  },
  {
    address: "A8PkySAHbdkgmVXC8wBJ1iUyM9EpXv987GazDAPRQN4V",
    name: "IGLOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IGLOO",
    quoteLabel: "USDC"
  },
  {
    address: "GnVqWZeuwVuZvwpGs2VpdbQfGYcgwRJHCEtnMVNqwBA4",
    name: "SCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCAT",
    quoteLabel: "USDC"
  },
  {
    address: "5bUGaqpXGbpS3Wox6ocfd5JUmDH9s5NnZrYPVB8Kv3gh",
    name: "BHADES/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BHADES",
    quoteLabel: "SOL"
  },
  {
    address: "2XwgQCMrvGHtysVUtpm81M936QZ6bPuU8hW7oSgofEDA",
    name: "BAO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAO",
    quoteLabel: "USDC"
  },
  {
    address: "ECJ4NrjSFNNqcwN5GJgezBEJH98fFi6pQ2uJzJRcuR9r",
    name: "PINK /USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINK ",
    quoteLabel: "USDC"
  },
  {
    address: "7mVpCBNCUDWmJ11cPDV9MNqk1m65NtoAUKekpxhVYdHr",
    name: "POOGY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POOGY",
    quoteLabel: "USDC"
  },
  {
    address: "H7hjXWkzRrbaxMkjy6UDaSrcPS42fRRASs3VmLcGJthb",
    name: "ASTRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASTRO",
    quoteLabel: "USDC"
  },
  {
    address: "61ZUpw1srufRiH9hf3U8R1CEGHrGxqBovQgKMcdkxima",
    name: "BFG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFG",
    quoteLabel: "USDC"
  },
  {
    address: "FVvWCcbgm9S4zVmJj9L3kMjZeXm5McqSamdG9tzeDaYX",
    name: "Cobra/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cobra",
    quoteLabel: "USDC"
  },
  {
    address: "EHm6vSuuvqiszsQMHL4vpnXWDnXqKp1rFzYcWfuq9rKw",
    name: "CATONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATONK",
    quoteLabel: "USDC"
  },
  {
    address: "4LuXwnhj9QkFW4U9qUan8xhpGHCKjd9RDXMjTQmdKqf7",
    name: "SOL/SInu",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SInu"
  },
  {
    address: "SbfTeM2yJcWTGujejgC3BJcAhcKyHQMYnaAhiNHTKKx",
    name: "ELOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELOS",
    quoteLabel: "USDC"
  },
  {
    address: "6iffW8WL2uWBFUPKzoU6NyQDLBvVsCrtED2w3XZDAdWf",
    name: "ECS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ECS",
    quoteLabel: "USDC"
  },
  {
    address: "HEHMYCjTqKgrgKyRqqQ3hVMtsfNLD5RDKT7jYarkSzwB",
    name: "SDC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDC",
    quoteLabel: "USDC"
  },
  {
    address: "DTtyTyMmmtBecfQkFk7Lg8vbUSL1WComTJqgohF37FWL",
    name: "LEASH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEASH",
    quoteLabel: "SOL"
  },
  {
    address: "3ucQ7JMpvfkTfrAjYk8QDiZ8UhAJvqzJCGDqueg2AGYS",
    name: "PITBO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PITBO",
    quoteLabel: "USDC"
  },
  {
    address: "6kSaA1JusFuWqXPNXoWXE86eHSvHAdFxTwzDyfQADMiw",
    name: "TOMTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOMTO",
    quoteLabel: "USDC"
  },
  {
    address: "tiRmrxv86YMjpyzMXSsYZhie78TmCuyVP5FJSCBrsyy",
    name: "FRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRONK",
    quoteLabel: "USDC"
  },
  {
    address: "TWLYGfPwFXGmAYZtwrt6jvsvwJ3iKb6JCxjmryhrWJg",
    name: "RBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBONK",
    quoteLabel: "USDC"
  },
  {
    address: "58APiAr6ipJnFjgCS3FBJWS4Jo4hvv66p5gc99KsKw22",
    name: "KIM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIM",
    quoteLabel: "USDC"
  },
  {
    address: "9YrwErtCz1YHATJpRPeYyKU7iPktRnnbZyxf6T6jJowE",
    name: "LTX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LTX",
    quoteLabel: "SOL"
  },
  {
    address: "HR6Nv9u7q3oDoqR7D6pAkazuFu5wV5Yn7fLKWmyxVLgK",
    name: "DRAGONA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRAGONA",
    quoteLabel: "USDC"
  },
  {
    address: "8cwXCCKfBgecmixKC6tJtFrQB3VUFh5QuWeZTzHCJ2Ww",
    name: "NBLE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NBLE",
    quoteLabel: "SOL"
  },
  {
    address: "HFi8aWeEpB26f3BqyGseFadFfb64hR1PgdbgJ8MHsd8v",
    name: "DBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "USDC"
  },
  {
    address: "7za93XopDy73E6vxbj5xPeZEJhGcdhQCvEMp8jd6HVEL",
    name: "PEPEZILLA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEZILLA",
    quoteLabel: "SOL"
  },
  {
    address: "6unqv1w5L9JgAczQ7z7zGXbKEkatymvS6PqNwkLzr9aA",
    name: "Bio/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bio",
    quoteLabel: "SOL"
  },
  {
    address: "92jWX7oBytsFBz9onxfYuXW9fw3vxirUTBM94CfiQZT3",
    name: "ICY/ICY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICY",
    quoteLabel: "ICY"
  },
  {
    address: "FDfmSqgXkoHwKa28rirLSZYbuavjkrF8ahUxTpFF7qVV",
    name: "DOGEC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGEC",
    quoteLabel: "USDC"
  },
  {
    address: "A9FGAsmAy5WZgo4yuoj27E4h4xT4GWheZJiZa3wJUR6G",
    name: "OWL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OWL",
    quoteLabel: "USDC"
  },
  {
    address: "CBf1t6h5yvVwToYrjJQh29HMvCEoUWt5Z5wZAMkbZtAx",
    name: "SGEMS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGEMS",
    quoteLabel: "SOL"
  },
  {
    address: "3tt4sd3oVKJs7bfMq97kZ3hU3BXzUksvF4vmsnuUsu9Z",
    name: "MIDAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIDAI",
    quoteLabel: "USDC"
  },
  {
    address: "EgYQEobDzQxVaFhhJtg8VwYrkHCDP4iFhwkkZggBK5Zo",
    name: "SCAKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCAKE",
    quoteLabel: "USDC"
  },
  {
    address: "HeVcFiFGsTiDYsHyATTm8pK3vbW4dfvexUTzoWgsc97T",
    name: "SSHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSHIB",
    quoteLabel: "USDC"
  },
  {
    address: "Faw21trAifHbRRjtijFRRKLsfqxuqvcKXxpvpomMgLoJ",
    name: "NEON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEON",
    quoteLabel: "USDC"
  },
  {
    address: "98iKYqhkAjVrVnDtDKbPdCNsQuo6TZyJYoJQC6hN1yki",
    name: "DUCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCK",
    quoteLabel: "USDC"
  },
  {
    address: "7v3rAtE98jDiAeVmHBeBjue8FMbTNxCXgLdQtYMoyYq6",
    name: "LBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LBONK",
    quoteLabel: "USDC"
  },
  {
    address: "BgyNbGt1z1wJD2NYp4yq6vVkg5ErCWPTqUpvQCTah639",
    name: "NeXuS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NeXuS",
    quoteLabel: "USDC"
  },
  {
    address: "9mBhXohWEh5ivjVmFpWHbKyS2CNi6Vn7pNhBwoomwc9W",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "DLoS7ABHVKzTs4Rggc6H6LrDF4zdy8mRpLfAfTCUKE9K",
    name: "6/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "6",
    quoteLabel: "SOL"
  },
  {
    address: "Bw7dfapuTnQTFhU5zuKZu3vDwskTnQcBRXwCSNdhRD4A",
    name: "PST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PST",
    quoteLabel: "SOL"
  },
  {
    address: "BYi9eZJt11sgMHBthG9PGh84WaWwG5UFr6sF2Z6NsCMc",
    name: "LION/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LION",
    quoteLabel: "SOL"
  },
  {
    address: "EsgYadhKjS5bg36WNKvDknnjwQqvpsdBAJ7m3HkJbtv1",
    name: "CNF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CNF",
    quoteLabel: "USDC"
  },
  {
    address: "ABYAUK1C4XhG4gmWuDWYvQSeCs7GA9cZXjKuhBj4yMbt",
    name: "ROID/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROID",
    quoteLabel: "SOL"
  },
  {
    address: "8Xs6u55fBQZqMqGbQ8fiDrUi7gqakSy4J78Yx67S5uu6",
    name: "DEATH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEATH",
    quoteLabel: "USDC"
  },
  {
    address: "H15PS7wiNt2MTwdoDst98izQDY43HJx2ngo7Qh3BvVxf",
    name: "BULLANA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULLANA",
    quoteLabel: "SOL"
  },
  {
    address: "9xUvLP4AK5cHaLBsyN8AMP8uQ8jJUiFKgbu9M9m1d73y",
    name: "NEB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEB",
    quoteLabel: "SOL"
  },
  {
    address: "33K1Ee5nnouZCtXS8pALpBqyaxnVocF7EEM7R8ZPMcHL",
    name: "HEIST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEIST",
    quoteLabel: "USDC"
  },
  {
    address: "Dvumc1ZUFBuXRNFxybHw6D1aP1HaTkBQoLBZfjUYiK5E",
    name: "BAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAR",
    quoteLabel: "USDC"
  },
  {
    address: "CiSfxbfbG6bmiV6M9CN6dGwAAXEKi6gTYeZTJVhabkWB",
    name: "CHICK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHICK",
    quoteLabel: "SOL"
  },
  {
    address: "D7fLZb88hWSukJ5L4K2zLrjcmBHdqyW29CnJgE37p3da",
    name: "LMDADEV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDADEV",
    quoteLabel: "USDC"
  },
  {
    address: "3zVbExvJDqP6dRG3BGpY2RwDX9Q2cWKpPF1Ct6VPUrTf",
    name: "REFI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "REFI",
    quoteLabel: "USDC"
  },
  {
    address: "3mEx13aDRUyC4N4GW15EAtzu61rVdUMdqsn9wWdD1JUd",
    name: "RAMEN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAMEN",
    quoteLabel: "SOL"
  },
  {
    address: "FhDQpnH3mqW3CDGDqusKbEQgvNDGAWS3SdvvRwVsQaA",
    name: "Solfy/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solfy",
    quoteLabel: "USDC"
  },
  {
    address: "BkaEdpZHjLfpwyRRRhcvoEQnLtu4Ce3EYVyd7VDqT6mT",
    name: "CATCE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATCE",
    quoteLabel: "USDC"
  },
  {
    address: "2TJ4yxFMF2dbgVrbv3Lyf7B9oQHY1oeGnVBuhASNM5Vz",
    name: "Stama/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Stama",
    quoteLabel: "SOL"
  },
  {
    address: "97EgptD1mPPRcmeTzoeHJixdtmn5SBawqwzx6N3AeVBq",
    name: "NEKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEKO",
    quoteLabel: "USDC"
  },
  {
    address: "9XP1FWANfVwFSbKuq18G9gw5VFLAhZxbn3vkYXLhUe7B",
    name: "HACHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHI",
    quoteLabel: "USDC"
  },
  {
    address: "E4bymJ97iqN8PteHj4fQdMGjhAN8KmrfDACT8YBGQWn3",
    name: "BONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONK",
    quoteLabel: "USDC"
  },
  {
    address: "4DeAYU71AvF1L7vLqoL6HuiaSSKYfUa3wk8A4UqAhtxx",
    name: "SOLR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLR",
    quoteLabel: "USDC"
  },
  {
    address: "A9AFvYXLmYiDYjpmYcCPXMXhERihEUCJ4Jqaj4CyRqxz",
    name: "ZIPPO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZIPPO",
    quoteLabel: "USDC"
  },
  {
    address: "CBV134XNZB7dsXCkoZuRj4kTSeBV5o7vKC2yAAT2bRD7",
    name: "BREAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BREAD",
    quoteLabel: "USDC"
  },
  {
    address: "HqPbGGUMmKHjNkc2KBXz5p6ERsdoiWEaD5pGBPResie1",
    name: "WAS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAS",
    quoteLabel: "SOL"
  },
  {
    address: "8MGeVc38TNrp9FsQ8ZgqMA7guWgrJPMCstYF3GpXpPax",
    name: "SPONGS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPONGS",
    quoteLabel: "SOL"
  },
  {
    address: "61SXbvif6786ScLgvqK4fHXvXsqYqp6Ar5NKEK5ajaJR",
    name: "ATC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATC",
    quoteLabel: "USDC"
  },
  {
    address: "2mJoe9eYqwy5zhU9ei7vSoykbd97azoCrG14vvtepTri",
    name: "MOMY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOMY",
    quoteLabel: "USDC"
  },
  {
    address: "9rk1Wt2UicaF7jxmaKHquoLc7CqcAKmand9paAS71rRn",
    name: "HIB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HIB",
    quoteLabel: "SOL"
  },
  {
    address: "Gj4trHQ475zFDoyGosUu1baELhJasv659iywqY6fdZoq",
    name: "smol/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "smol",
    quoteLabel: "SOL"
  },
  {
    address: "HW8SjBTcTzy4AC39irQEe9LzXTWkYcrkjUR5gYepymh9",
    name: "CBI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBI",
    quoteLabel: "USDC"
  },
  {
    address: "9QYYnQPtGXWXcevbovXpb3sn5MpjJLustYMpLtdeFqpK",
    name: "MCPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MCPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "35BPCkrnEPCVsuPSTB4fVCAryYV1cV8u62YhW55tK1kC",
    name: "HOUND/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOUND",
    quoteLabel: "SOL"
  },
  {
    address: "8waUGj2Jhe3UgtYo6hZHn1X24QpnRr1EFHsppEySXApK",
    name: "TRONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRONK",
    quoteLabel: "SOL"
  },
  {
    address: "HCRcZM4fFut24YUSJQcH7xd7XBTQjDKxucAeb8uMtBDw",
    name: "DOGPAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGPAD",
    quoteLabel: "USDC"
  },
  {
    address: "2JGuU1nwj8vJVRwdQDhhgZ43rgt9LqzVhPNZDgwGTeqT",
    name: "WOLFIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOLFIE",
    quoteLabel: "USDC"
  },
  {
    address: "2jtUUqNukyowdW8Vc6K3GH9wPr6yGsFQqBvQDHgAp27X",
    name: "BANGZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGZ",
    quoteLabel: "USDC"
  },
  {
    address: "FSKBBptb6QVWEK7QBHWdSFJLc9AMqSe8AQpVghoZ13o6",
    name: "BIRDB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BIRDB",
    quoteLabel: "USDC"
  },
  {
    address: "3i9BAr8sJDYcuXwTLg25LrV4Y1ceQgA3nEuZwUGoAysk",
    name: "STBR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STBR",
    quoteLabel: "USDC"
  },
  {
    address: "4ssLbhCbPX65kMCjzFdpfHKHVepFybV1MuRGrc6fZSH4",
    name: "BBUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBUN",
    quoteLabel: "USDC"
  },
  {
    address: "EGY9KeM8SEPQDsm6fWemu8WXkgnE9YoWob8SQNsSUBv8",
    name: "GECKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GECKO",
    quoteLabel: "USDC"
  },
  {
    address: "2JFC6TcbngoUrj5tD7hg8HruQP7PHZygcSymeqeiquty",
    name: "SPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "6dGHhYSQgr3chE6wrDaQFCTZiEUrvYMNqCrPyk9JiqsC",
    name: "FOLKS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOLKS",
    quoteLabel: "USDC"
  },
  {
    address: "3rUkr9kKLkFpp75fVUkP66ZibSKsqVVJbLTjEiMvSYRq",
    name: "xLFNTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "xLFNTY",
    quoteLabel: "USDC"
  },
  {
    address: "5ReC2zKf6QHFK4rorhwMbS4frKo1cevgdYTyvMhWkKiH",
    name: "Kebab/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Kebab",
    quoteLabel: "USDC"
  },
  {
    address: "Fb9b54jqdwa9GPoa23ngejMRGQq36HHxsFXUbp4JCMSf",
    name: "DOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOPE",
    quoteLabel: "USDC"
  },
  {
    address: "H8D7FpHPRvrFW3PYLY9Ga3jcaTERyA2tHB6Z3ZTp6ELs",
    name: "PPI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPI",
    quoteLabel: "USDC"
  },
  {
    address: "hEczfh2o4vv8nU4RmCAhzi64arCXExcD6mHWYPnhnab",
    name: "ROCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROCK",
    quoteLabel: "USDC"
  },
  {
    address: "9fu7TQkHGJdhoKnRmgfFQ7T57cxQA2vZP7jZJ3aPgQ7a",
    name: "SHIKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIKI",
    quoteLabel: "USDC"
  },
  {
    address: "8x1EhhHKVKATW9aed1eAb89gZDQe5mXNNgfKtrua1CaD",
    name: "PRQ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRQ",
    quoteLabel: "USDC"
  },
  {
    address: "GaztgeZX66EjBbu8yrQrRsUnXzDddGS8Y7UUwgZUpUyL",
    name: "SPEED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPEED",
    quoteLabel: "USDC"
  },
  {
    address: "5kNtBwPNBxodYyQdbuchoURjNfnytPmsnNSksUCbHmxX",
    name: "OSHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OSHIB",
    quoteLabel: "USDC"
  },
  {
    address: "25QGJ3Vr15L9imUZVc7z3e8vuMVsAAt5nhd8VSnL5FXj",
    name: "UNI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UNI",
    quoteLabel: "SOL"
  },
  {
    address: "GgryfWR6FTPYSeZzxLrqdp3JdYGxpUtcydtvMUsggLT9",
    name: "DBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "USDC"
  },
  {
    address: "BPSTGeRa5SRmff5c3UkLrizyjLsRUZahUcDTAZGQcdgk",
    name: "GRIMACE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRIMACE",
    quoteLabel: "USDC"
  },
  {
    address: "BFEbDmKS6QVr4ktNmU2cZRYoju3QRtCiwz4baa4ZfGHP",
    name: "MONKz/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKz",
    quoteLabel: "USDC"
  },
  {
    address: "5wzfd5vPTzBoip35kqqHnjQZkYPCePqtLu1JKr8j8F19",
    name: "SHAN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHAN",
    quoteLabel: "USDC"
  },
  {
    address: "7C5SVhrmVV4sNMaP8gJnM6xUTT2uMUPo6kTHfoWZuvWe",
    name: "BREAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BREAD",
    quoteLabel: "USDC"
  },
  {
    address: "GmUiGmQLTvH7HEPgRja7zKKN1vLdhUC6U8YwcZZqgd45",
    name: "PET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PET",
    quoteLabel: "USDC"
  },
  {
    address: "15iErn2YNKBrqGcocQWBtHr4ELMz4mCsX267bBjEsqq",
    name: "SPACE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPACE",
    quoteLabel: "USDC"
  },
  {
    address: "E86CBfXHCFwZ1M32gNgZZmHkM8Mu8bGhaV1Cg2iwCr9B",
    name: "TBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TBONK",
    quoteLabel: "USDC"
  },
  {
    address: "HyMgvpMJnVqrRQ61FEa31nhEfzkWhGsHzgCqzZnoWTwe",
    name: "DOGGIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGIE",
    quoteLabel: "USDC"
  },
  {
    address: "3F7K3AWPp6QSxz7MLnc3vjEuwf1zfNs76Hg9M5w3fA1C",
    name: "SINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINU",
    quoteLabel: "USDC"
  },
  {
    address: "HdTvzkcYneLGk22Xt1rrYSYEeqjmZSPHzhCaxjcbRYG7",
    name: "PSYD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PSYD",
    quoteLabel: "USDC"
  },
  {
    address: "3XzcPbMUFu35FTBFsHR474RjC1GnUg19y5f1xYw1GvVK",
    name: "BUNG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNG",
    quoteLabel: "USDC"
  },
  {
    address: "75sHWjbu5t2i6ojccTrWpTjCXb5Uy69FfPW6fJyyyTxj",
    name: "SBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "SOL"
  },
  {
    address: "3bS4icmbgCE8cY6mXjrTNWfhPWyrMTx5pATQUbiMrPcZ",
    name: "SOL/Curl",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Curl"
  },
  {
    address: "7YmucHMBJghLkJrR4jBtJgKpL6htjzVZs4XtNpfixfKR",
    name: "DOJ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOJ",
    quoteLabel: "USDC"
  },
  {
    address: "2RYGBK3wcB2pceBNfuY4KvxV56pRvwxQVynKw8QGGCNF",
    name: "Snack/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Snack",
    quoteLabel: "USDC"
  },
  {
    address: "Hf4dmRM83CeCbSe57jnJDqyG88i4xTQF1p4rjnBorB51",
    name: "SNAKE/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNAKE",
    quoteLabel: "Bonk"
  },
  {
    address: "7KzGfhkio8E731oaVYq8TiSp2wRv7PN5BYjyT1irGFuD",
    name: "USDC/NOSELL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "NOSELL"
  },
  {
    address: "9kNRb7tFfpESJsBEbzELbPiURjFb9vFgDrnaCSByrDvt",
    name: "FBI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FBI",
    quoteLabel: "USDC"
  },
  {
    address: "5DABTBwPcLSV7tHuSUSLmFYnDWmZCM8sj19Pz9QzQZPi",
    name: "DOGGY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGY",
    quoteLabel: "USDC"
  },
  {
    address: "7uookBQLEBd7nNgmnHHFM7p3RvUEoJcy648gkPF8E7BR",
    name: "Sonu/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sonu",
    quoteLabel: "RAY"
  },
  {
    address: "E2u3RWk94zcAUKqqGYHrunu6u88iT5aNy7g9whvC5yDw",
    name: "ERNIE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ERNIE",
    quoteLabel: "SOL"
  },
  {
    address: "6uhJjcsGZdefyFwVh6LqjHgc62uWqN9sBJWL6qrP6gUW",
    name: "DGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGPT",
    quoteLabel: "USDC"
  },
  {
    address: "6EhknkS8dDvwHYy3sq6Rv9Z82VGqFBkYTvEeaaa5enjp",
    name: "SOL/MOONB",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "MOONB"
  },
  {
    address: "91DDupvsXYF2TLbBfbRL62dU2XcDDUK8XQUaReBZ7QD",
    name: "CUTE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUTE",
    quoteLabel: "USDC"
  },
  {
    address: "7fv75F5GRBkQft9mp9sDEZcCPVoHXBadvfsrCYfStCBx",
    name: "RUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUFF",
    quoteLabel: "USDC"
  },
  {
    address: "8C9Gkb9Qt5oD167Jv45YzDuKdDBjTqiNvAF4DAKxKMDo",
    name: "SOLCR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLCR",
    quoteLabel: "USDC"
  },
  {
    address: "HSoWdwhL8u9nRBh6NKNNQPjaYRWuMDf4hWkAhSdVCskc",
    name: "Chple/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Chple",
    quoteLabel: "USDC"
  },
  {
    address: "HcM58iPmF8tKqrFXxaTkdnxH6YqQFfWgn1HTmV9nZC4x",
    name: "BDEGEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDEGEN",
    quoteLabel: "USDC"
  },
  {
    address: "45Nc5xYTnTm5rE1KRyqs49uUUUT6xsGpVhXCrVF2sZfU",
    name: "MARA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MARA",
    quoteLabel: "SOL"
  },
  {
    address: "CR2fxn4eHkpMePq3bkTH2a8ZnmGuDQS1h18T7cUvsSzf",
    name: "SOL/CHILI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "CHILI"
  },
  {
    address: "658RDqsKPS48y9hyy5onEUXmWK8eoehSYJ1Z9CQtVSZ",
    name: "TITS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TITS",
    quoteLabel: "USDC"
  },
  {
    address: "3Zqc6qoW4q8CDQ6u8SZ5SWvm4ftsFac71BHd5H6uPega",
    name: "CLOWN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLOWN",
    quoteLabel: "USDC"
  },
  {
    address: "9R5TXAUyW15obUEAGJLpp5kmZU6JSjhznHdk5vmUysQm",
    name: "DRAGL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRAGL",
    quoteLabel: "USDC"
  },
  {
    address: "GRHB7zQgcCSzFWkUH5tGTRsTq5yCgWqnyD5ZMa62bHKQ",
    name: "BMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BMI",
    quoteLabel: "USDC"
  },
  {
    address: "HBY2hJWSFyLzCmpyguZU1a4fx6i2BYo134idxiWAJsN7",
    name: "COPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "USDC"
  },
  {
    address: "9wqcVR4GZaDxjpzCqsJbSALNBmgsAN9X8cZ8hcGw47gL",
    name: "SUPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "A1ZNoWeQYZYgovuBKwbAbn1DkHWKYguq3TafUnR217Wk",
    name: "LZC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LZC",
    quoteLabel: "USDC"
  },
  {
    address: "DQ3yffVK2awbTZUXxa4aAmpxZFjqkFViB5esa1GSuz3B",
    name: "DRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRONK",
    quoteLabel: "USDC"
  },
  {
    address: "GtiLEoVAncRFysUC7i9qFaXLfxJA37ktenzbSKeL5pkV",
    name: "RACC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACC",
    quoteLabel: "SOL"
  },
  {
    address: "5tkaYT3nC1nFsfLhbNsLQfWTr52TqyMRh3KAtP9TKd7i",
    name: "PGOAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PGOAT",
    quoteLabel: "SOL"
  },
  {
    address: "AQ9StdaeoC2HbHHByd1PLcXNyqgEUmguSe8hQwSiErRY",
    name: "SOLKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLKA",
    quoteLabel: "USDC"
  },
  {
    address: "4SL7BaLP5T39VziC8Ci7KWWLxEVXqcieLjM65cxVRndY",
    name: "WAG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAG",
    quoteLabel: "SOL"
  },
  {
    address: "8x8hPCdbfQxAPZb66x2VEeKMUmFbXjz5xxZrxTUmRoWC",
    name: "KATA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KATA",
    quoteLabel: "USDC"
  },
  {
    address: "7fJBCc2mJMVDJZsYkWWhRrdkuQ7CekTX4qczze9DPWkz",
    name: "NBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NBONK",
    quoteLabel: "USDC"
  },
  {
    address: "85Yr1MBx6dxsLGLtTPspCVWwZV5nVz6kQDDs5yvWGbNq",
    name: "HBOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HBOT",
    quoteLabel: "USDC"
  },
  {
    address: "VTBrXdnNgQARbQdNFUhaBYw5mtoNgwe8yun11mG116q",
    name: "SHAK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHAK",
    quoteLabel: "SOL"
  },
  {
    address: "nkdYrsL4tCpTEXfjWkY9uQ62xrQ4fLzVW1pUKnsZsLv",
    name: "STR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STR",
    quoteLabel: "USDC"
  },
  {
    address: "DmwPFLBrzCCZs9JmxsKDXPruFJSeFft7UpKC3hUeJF6j",
    name: "FUCKYOU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUCKYOU",
    quoteLabel: "SOL"
  },
  {
    address: "3BMj4S8TRA1M5xUy2RjDYcu3GLAoJykVZx7StPUVCGJv",
    name: "SOLANA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLANA",
    quoteLabel: "SOL"
  },
  {
    address: "6JEMPhQar6KmDnRrPzN2bniNxc5hAaeA5xu7VeGyJCdk",
    name: "SLM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLM",
    quoteLabel: "SOL"
  },
  {
    address: "6QjHsd2cTEQpbk7Tqy8346Gn2eJximtgmZfS1SM8fukR",
    name: "KRAMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KRAMA",
    quoteLabel: "USDC"
  },
  {
    address: "9TBXpHih3QJC9z5zXpu67me9KibSDREyFTPp9cEKZChX",
    name: "GAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAPE",
    quoteLabel: "USDC"
  },
  {
    address: "FyvUwgmrWkq3LuxFjYJNEjQKon5jbp7wkYNfMwrzMvPF",
    name: "BCHIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCHIL",
    quoteLabel: "USDC"
  },
  {
    address: "CPcSfM5gpntBAJZGwN1gJZmSZeHikrMvQwavRaqksNXB",
    name: "PHON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PHON",
    quoteLabel: "USDC"
  },
  {
    address: "DDSLCWvn8knx6Cxrs8Z3VRv5ZocpTZsU4t7uxRBXXkCS",
    name: "SOL/STONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "STONK"
  },
  {
    address: "JtoK1YQwnJdyiB4w6GDtkvkydCxuj897ZQVHk3uBNuy",
    name: "CSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CSOL",
    quoteLabel: "SOL"
  },
  {
    address: "C8EDdmKxWy338T7b9dTjP2mNNyjb3TnyweqG9UEBdwz6",
    name: "LMDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDA",
    quoteLabel: "USDC"
  },
  {
    address: "BwgjMXLpEpp96d5WAzhopDfgZZHAXitZ7aPF9HjF9XkV",
    name: "GV/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GV",
    quoteLabel: "SOL"
  },
  {
    address: "tPCZoUUZagAP1d4dxoJJchRZnnkkwUBCeRsN71Yt4Zj",
    name: "BATSx/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BATSx",
    quoteLabel: "SOL"
  },
  {
    address: "XQuLJy2yvPeuBLsDz2XpZBzT91s8CNxmjn9ULPFMZWT",
    name: "CHOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHOW",
    quoteLabel: "USDC"
  },
  {
    address: "5H3gVC6WoVewWha8kHDoAfXRR92XA6TxnNLDJASm5jUh",
    name: "ZLABZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZLABZ",
    quoteLabel: "SOL"
  },
  {
    address: "B4Th6NfKjZin2FPS7rKp1w3E1ywV2MBGgk6R3KC7cLmn",
    name: "WHAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHAT",
    quoteLabel: "USDC"
  },
  {
    address: "Ckixh2XeAEiAti1pUSKFqihPb1whMVZhaH3BSxuBAMEU",
    name: "SBUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBUFF",
    quoteLabel: "USDC"
  },
  {
    address: "DnjBARqPcTiwvw5RBbPemnMxknESVFxFtJ6BZMAAoaMi",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "4H5cmS8tA35j19xZ8fnoFAHsvZyV3XU4cb2zJLn23GqT",
    name: "SDAS2/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDAS2",
    quoteLabel: "SOL"
  },
  {
    address: "5cFgmoJdMFU5JYQGsnsGaxWMmiDXDShiorGbjsx4ZWYt",
    name: "SPUMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPUMP",
    quoteLabel: "USDC"
  },
  {
    address: "CsXsmf6QXSys9qmvCZazypzTwcezktPr5scndvBkPg7",
    name: "biGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "biGPT",
    quoteLabel: "USDC"
  },
  {
    address: "3NxWTWMHinYe2ouft18jCLMJid8qHJ3RGFLd5CaFZjAU",
    name: "DEATHOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEATHOS",
    quoteLabel: "USDC"
  },
  {
    address: "3GrNvLrtcxxqF3pQbaDbQxZBQW9EsoqRh3TV1FS9rpjD",
    name: "GUARD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GUARD",
    quoteLabel: "USDC"
  },
  {
    address: "3vhstJHgDBmeAburhmxmpNR7S9KRfX4YiyS8wxEwkZCA",
    name: "XSB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XSB",
    quoteLabel: "SOL"
  },
  {
    address: "Dx7qrXYfqv1MRcQsZK31Nehgt2CFE65BY9mVkACwFugk",
    name: "USEL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USEL",
    quoteLabel: "USDC"
  },
  {
    address: "4Ages61mWd5NuvzSQZJtHtaK31XkxQCmB8MWYcXxMPkT",
    name: "RONINS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RONINS",
    quoteLabel: "USDC"
  },
  {
    address: "8qmq9z551fXe2ZcD8nGayRTnS5VrkJsnJqN6CbcszVi3",
    name: "LONKM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LONKM",
    quoteLabel: "USDC"
  },
  {
    address: "2HyHGaSsowKWirHJtbn5uu8ZokPPgXjx3yX4kcUVofQ2",
    name: "GODD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GODD",
    quoteLabel: "USDC"
  },
  {
    address: "5XUrhVvazcBcoXJMPVV6xYUiR8ogeGaCrT3JdHFmqiku",
    name: "nggyu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "nggyu",
    quoteLabel: "USDC"
  },
  {
    address: "9zyQdjJQtrrM58fPyAxvnndnPuUxpyyW1XpShWx2KDU5",
    name: "PUFF/BREAD",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUFF",
    quoteLabel: "BREAD"
  },
  {
    address: "3EeqHNyFKuQDGXsZ59e2S37dU8uxXENRPxeXv8vQEPsR",
    name: "ANS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANS",
    quoteLabel: "USDC"
  },
  {
    address: "2msmuK743hFSH44gSYTzdbwMrEH2ANqaFxCmfUeHtQrZ",
    name: "VIRTU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VIRTU",
    quoteLabel: "USDC"
  },
  {
    address: "B6DEcDVMDrg63o9ttFYgEVf3BcFGMw9XHq9ReyY3x6ji",
    name: "KROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KROW",
    quoteLabel: "USDC"
  },
  {
    address: "BK18m7CJt7MrVivyhE15MYk1sK8jbWaNnq8T2u53kdWq",
    name: "CRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRT",
    quoteLabel: "USDC"
  },
  {
    address: "DNTeE2aXe8b5h1ka87ZDqpLPo3HJs8yPe1AWL63eCzoF",
    name: "egg/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "egg",
    quoteLabel: "USDC"
  },
  {
    address: "Aw2tFKvLrmiem64RZKA2UXspbNu89Sw5EfsB7rhJcSrY",
    name: "SOL/CONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "CONK"
  },
  {
    address: "8pMzmYD3PNa475VCPty852WzRJEQfaFNvJFs1xwSFtqt",
    name: "BANANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANANA",
    quoteLabel: "USDC"
  },
  {
    address: "7HDZJyuz3pBxUVpKyYzdyRPnRQEpw92ey7a3A9Shwjuk",
    name: "FREN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FREN",
    quoteLabel: "USDC"
  },
  {
    address: "6QnQD9K8vRJLdruGjwzCJcCSSzeYuFnPuzmuqjin3cDJ",
    name: "PVRSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PVRSE",
    quoteLabel: "USDC"
  },
  {
    address: "GkMbS5pdXUsNexYT1NZdgcmaSWbsefG29ABPTcsVFuYp",
    name: "CANDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CANDY",
    quoteLabel: "USDC"
  },
  {
    address: "3jg8kYCHUkYKJ5maBdog2RQS2F3tHco7QUWpCawjsjbJ",
    name: "FARMR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FARMR",
    quoteLabel: "USDC"
  },
  {
    address: "4y5VAnSh9bCmFSnxUfDZPUffpj4AMumginUg4TYm4HWo",
    name: "TIGER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TIGER",
    quoteLabel: "USDC"
  },
  {
    address: "826o95935vr9HyES5Wt1wniYXwgpCZ9tYXfvevZUujyW",
    name: "TROLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "SOL"
  },
  {
    address: "HthxCkN283qNJvp1Ah5wMgnjWyREs4nUE7nYU1vFxy5j",
    name: "Anubi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Anubi",
    quoteLabel: "USDC"
  },
  {
    address: "HDwpKCNpB9JvcGrZv6TWcXjFvzxxfzq7ci6kQ1Kv8FMY",
    name: "CROWN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROWN",
    quoteLabel: "USDC"
  },
  {
    address: "A8yUN5Wt8SA5TcEzPq81cUZkz6p4mUSnh7XH7dFV6x78",
    name: "PFOTE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PFOTE",
    quoteLabel: "USDC"
  },
  {
    address: "Cgv9B7MGMxkxsF7NCHrm86vVMy7dgxZQfMUrgobVuUCj",
    name: "HIMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HIMA",
    quoteLabel: "SOL"
  },
  {
    address: "5umYPyqJhLPpZYL2JnEAho7WHK5V4XAP7UmujAGPkVpH",
    name: "PGN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PGN",
    quoteLabel: "USDC"
  },
  {
    address: "9WE22ro6AyKWBbK8V5noZaXiRA4XYb9XiDT7EbkXTBeh",
    name: "SHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIB",
    quoteLabel: "USDC"
  },
  {
    address: "F7h7cgnpUAsywaufcCmjw78Gq8aQYhhDZSZJANYEYyAz",
    name: "ZAY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZAY",
    quoteLabel: "USDC"
  },
  {
    address: "NeY9oNg1wJGyDDbKjVeW9abRwggHCN7G4zXMZ3ajvwx",
    name: "USDC/wass",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "wass"
  },
  {
    address: "DnhCQfHUoDZF2vomz5Q789mZQb4NcL1HgRdyN6qGVL6A",
    name: "SPRSW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPRSW",
    quoteLabel: "USDC"
  },
  {
    address: "G5VRCZnAE9oxpLpypHzTJBqJnCuiJwtMapGwzwhmAjV3",
    name: "BLK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLK",
    quoteLabel: "USDC"
  },
  {
    address: "5d7h4BNrhNAFQv3NYTTZwdT4jDiQaKbQQbV3ETNZ3ZfL",
    name: "GREEDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GREEDY",
    quoteLabel: "USDC"
  },
  {
    address: "U194JgLeYakhAkUgpNZzbSqVsk5cCmJhXb4ME2UGY5R",
    name: "PUGAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUGAI",
    quoteLabel: "USDC"
  },
  {
    address: "A5PtuF7xGQFDkGoYYRLvpMzzaJDZmbAPgBnpKrbSgHeB",
    name: "GRIM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRIM",
    quoteLabel: "SOL"
  },
  {
    address: "4sQQp3QXgS1xyxdg5wMp6PJLmgUWMkqghxWkWwGeQBJm",
    name: "PSYD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PSYD",
    quoteLabel: "USDC"
  },
  {
    address: "6RjSgSFHoN842xGG7xECffDDuvzLvZBYFSHPfnqVAd54",
    name: "PINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINU",
    quoteLabel: "SOL"
  },
  {
    address: "AL83M5sWFnc1cWpf8mkVwWRHzizouj3eohwje9Q4v7QZ",
    name: "Brel/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Brel",
    quoteLabel: "USDC"
  },
  {
    address: "F6nc3CcWLie5hkcyTAejs39Btg5MJKaneKAaDnMukTpj",
    name: "SHRMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRMP",
    quoteLabel: "USDC"
  },
  {
    address: "EwwPfa3d7FrUAjWV8vTvgyQmGpSpy2yP9xD5bzoKQuk3",
    name: "honk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "honk",
    quoteLabel: "SOL"
  },
  {
    address: "4qBjTmhcVByaRmLoujBMod8bT9h8d8Qmf2o1HR2ZCKxw",
    name: "KART/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KART",
    quoteLabel: "Bonk"
  },
  {
    address: "Dv1gEpYeLubiMocoPAY9MDRPLwYAYDQPmQ16RCwa6E9m",
    name: "TONKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TONKA",
    quoteLabel: "SOL"
  },
  {
    address: "BjfSP4eYzA8MSaCh82WmKgdgM7LhMFqXpYoNNFpHvqbM",
    name: "HandS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HandS",
    quoteLabel: "USDC"
  },
  {
    address: "BNJgotmZNHyFRkDKrCr1jGd7pcvsUTuWWErHxo4C1A4c",
    name: "FROYO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROYO",
    quoteLabel: "USDC"
  },
  {
    address: "BJYdMqppuw4fDuiwF8ArCwudkuYaoRDQRPdwpcquTgJs",
    name: "LOCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LOCK",
    quoteLabel: "USDC"
  },
  {
    address: "BgdDuhUoU4GWp473DEy41RfPvMzEhwHADvyzS4Y36gC6",
    name: "ALIEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALIEN",
    quoteLabel: "USDC"
  },
  {
    address: "Cbkg22Lyn1ZPgjwmYycMiiA5996n1ngoj7LdDjaNp6wc",
    name: "SOLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLS",
    quoteLabel: "USDC"
  },
  {
    address: "2tpXZfVqwH5VmEky3oF4egZeBZEBCJvGdbSAmj2WvE4p",
    name: "LONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LONK",
    quoteLabel: "USDC"
  },
  {
    address: "5HrEz8mKmV4FP1HJdfvMfqqksbRSoHMvVKkFxrwKf8Pi",
    name: "SBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "SOL"
  },
  {
    address: "GFt8pMAv1QsgQLf9hvbWbKANswRVDCtyZLZAPDnR1ETn",
    name: "RILL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RILL",
    quoteLabel: "USDC"
  },
  {
    address: "3xi4kxdWg8cwxeTk4a1tyFfH9VQq2dSJgp7tgnfN665v",
    name: "SWASIH/IDRK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWASIH",
    quoteLabel: "IDRK"
  },
  {
    address: "ayw8Lb427gaKZt6P25Jb58xD8pCvQKRRusKP4gHEv61",
    name: "GOAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOAT",
    quoteLabel: "USDC"
  },
  {
    address: "7FWauLwEK2FTmSFRW6yhy3rwZK8Qii51RR4MkEwDUi4h",
    name: "BULL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULL",
    quoteLabel: "SOL"
  },
  {
    address: "BrFRYGQ1dGThTiSREuQdeNdDYGjMS2nNzMgWSXc85RqB",
    name: "AZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AZA",
    quoteLabel: "USDC"
  },
  {
    address: "BrCotevLgYoBHVTFbAcP9diazjVwBnV5Mqk2bu9JBcCS",
    name: "PIG/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIG",
    quoteLabel: "Bonk"
  },
  {
    address: "EFX4dngYLpUoBC2rSw4fV71MjrodAkX4CLwxNE8ruoLL",
    name: "BBull/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBull",
    quoteLabel: "SOL"
  },
  {
    address: "BTnA9UxMqcagWtox1U4KYDnZhSFwqaN3VHAuadTUuYMm",
    name: "DUCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCK",
    quoteLabel: "USDC"
  },
  {
    address: "3x7WXa3JAiAb3NNnmSMWaVJxg8UXXSEpq7bncnjz1weJ",
    name: "PESOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PESOS",
    quoteLabel: "USDC"
  },
  {
    address: "4nD3rx8pK8pWZEy6yHosbrg2c1YbogbAxuG4wPhCGP3d",
    name: "SOSHU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOSHU",
    quoteLabel: "SOL"
  },
  {
    address: "HSorRCW5T16wwr8RbJ8QsrQpEm6W4GBKYtG2tjMz6Fgc",
    name: "FAMED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAMED",
    quoteLabel: "USDC"
  },
  {
    address: "3PYsuQ3VP8UeqCGEQcV84jbrRMSRAQybgeUS4pFVJfn4",
    name: "M3GAN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "M3GAN",
    quoteLabel: "USDC"
  },
  {
    address: "CTqG4sWiD2DR7uWff8iKtWQ9pjbfiWD2oRfW6ccmkMLv",
    name: "RAWR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "SOL"
  },
  {
    address: "Fqphsd1CrRDexgTpTCAXeMoTN3BBoJjwbefzKPKxE9mk",
    name: "SMKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMKE",
    quoteLabel: "USDC"
  },
  {
    address: "ErQMmU97vJjbNT1jEV1tD6mf8UeMVB9JErnQwegak7Um",
    name: "BCOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCOPE",
    quoteLabel: "USDC"
  },
  {
    address: "EuUS3bMKgHHN5QTUd9PHqWVisHgVXp2doYPRrs8qXXwS",
    name: "Apes/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Apes",
    quoteLabel: "USDC"
  },
  {
    address: "5rS1c4jUNvn2Nk5bmZfrqnVYGgJ7M8LMBxCfPQUWHV81",
    name: "FSC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FSC",
    quoteLabel: "USDC"
  },
  {
    address: "5EFKAJNo54gDDNZSisTfjJH7ezhxuRvv3jfzFTNUHHnh",
    name: "KRS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KRS",
    quoteLabel: "SOL"
  },
  {
    address: "2aZ4yfZ7ZM61zokeLkic22DCfDzoTN48dMQzXjDoURoY",
    name: "SOLs/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLs",
    quoteLabel: "USDC"
  },
  {
    address: "DmZJ8gT5PyYwAZYaoRhxKFS8gNEhW5u8hFLBPTTfoa4d",
    name: "CLOWN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLOWN",
    quoteLabel: "SOL"
  },
  {
    address: "2TSUodxCGivXvDs25VqYdVYntoN9ADnThFWzHrxciQR7",
    name: "QPL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QPL",
    quoteLabel: "USDC"
  },
  {
    address: "7nYQZXQTbgou5ms9gYGxnBaeNNGBkef79B9GcM18VEFf",
    name: "RAIN/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAIN",
    quoteLabel: "USDT"
  },
  {
    address: "Ej4Gj7zcKxyftDcFzW446PM7kmpeZCFAhvHmYEY8Q4NY",
    name: "sMEAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sMEAN",
    quoteLabel: "SOL"
  },
  {
    address: "5Pnkux3e44VaFPvDd5TzUnxkt4UYQ1WyYgS82kwGMVE",
    name: "KINGCOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINGCOPE",
    quoteLabel: "USDC"
  },
  {
    address: "J8audSa2KBf2gjsYpr4JuiF9GYzoL5Hno6bEvAV4qMtN",
    name: "AID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AID",
    quoteLabel: "USDC"
  },
  {
    address: "6gYtA66KyyLrUJQUptWWtV9J2zWTwZuZpa9XpoA3GPYg",
    name: "USDC/MOYAI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "MOYAI"
  },
  {
    address: "5NS424A2ABLyGpXY6hA72Ptng5EmJzhycUderDhoE4kK",
    name: "SOLC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLC",
    quoteLabel: "USDC"
  },
  {
    address: "CSkYroDfRka7EGtVtsAmKESnSHpkYypT6UgwKvjjaBoN",
    name: "sBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sBonk",
    quoteLabel: "USDC"
  },
  {
    address: "GM9GQwUCnUsyefR13SjsRXpt5BjdnWDJVgACPMzed64x",
    name: "Weed/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Weed",
    quoteLabel: "USDC"
  },
  {
    address: "Emi76FFeq9ewaMuDhCnomXeoknk4wH9wvT5xemFja8Mu",
    name: "SRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRONK",
    quoteLabel: "USDC"
  },
  {
    address: "Bjob4Az9Ka44NfmbbwsSC23JDTntoNnaTCG8wTyCN1WY",
    name: "PNGFI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PNGFI",
    quoteLabel: "SOL"
  },
  {
    address: "H4y2CERAP3J8DQ7YmuykpVmANV6BuzR19kZqwSgV6Q4x",
    name: "Ashera/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Ashera",
    quoteLabel: "SOL"
  },
  {
    address: "AwQjRJacWfKqsuwbP5cLTGgWKFeD16XkeKv2ra3qjm6M",
    name: "CAKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKE",
    quoteLabel: "USDC"
  },
  {
    address: "9VoLPb7ykXJVp21zHQPqn7JeePH3gWa9YPNwCxsBRGGF",
    name: "BUND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUND",
    quoteLabel: "USDC"
  },
  {
    address: "EZNXdSdwVqq61gQRbfUK12JUMEmb8FPvwHgxYLqRcudd",
    name: "Solub/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solub",
    quoteLabel: "USDC"
  },
  {
    address: "5NqXxmbCPkrPNAfBMTcD8izEqUNkbagDHxmagRswPmyG",
    name: "PENIS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PENIS",
    quoteLabel: "SOL"
  },
  {
    address: "5EcmjNpYpF92WKEqyChP5EdLJkPSQUgEraLtiQKzctBp",
    name: "ROCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROCK",
    quoteLabel: "USDC"
  },
  {
    address: "H1WaqSgpBP6n1JabdqZuGbawHmVgYZqtJLfrJKmu3nU6",
    name: "ZILLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZILLA",
    quoteLabel: "USDC"
  },
  {
    address: "7Kb64ejpPk38REA33fRdXnVo45qPFx6M9QKK34QPKhNe",
    name: "BURNZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURNZ",
    quoteLabel: "USDC"
  },
  {
    address: "Fs2mHsGaWTHzuPvPHMmPycsx31Nx5TgM2Mr4TzgADtvE",
    name: "ALF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALF",
    quoteLabel: "SOL"
  },
  {
    address: "AwUcTegycWFTUE8DwLtmLGy3BMnjYjjmRGV5ZUWMVHnz",
    name: "UNIQO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UNIQO",
    quoteLabel: "USDC"
  },
  {
    address: "5zQ5JFDKMQ12oLYyuTivaxoTi2uZFMLqxuSYd1aE7L9o",
    name: "BGZMO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BGZMO",
    quoteLabel: "SOL"
  },
  {
    address: "4qbpxKDvU2qdA7LQ5aD9PG4qCyY4skXZXj7uYxBwTJMJ",
    name: "GROW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GROW",
    quoteLabel: "SOL"
  },
  {
    address: "DBVLwHV6GZARdnVsZ9LRXeKi7Hkw8Bk42pawm8wzXUmn",
    name: "SHEEP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEEP",
    quoteLabel: "SOL"
  },
  {
    address: "GMLokD1k3kvNmquGyLUNggzcSMrgeqQzKMi5a2TZ4MFG",
    name: "USDC/LAMP",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "LAMP"
  },
  {
    address: "4y7SocXPvWeiEJhCc317K3Y7PaL7NN5JtHBFQnAkjvSp",
    name: "POOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POOT",
    quoteLabel: "USDC"
  },
  {
    address: "A7sG7q4vRFLHaLrZ3QpqTwq886eHb44fQZcVvRQ8nPgg",
    name: "RAWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "USDC"
  },
  {
    address: "3tRgbkZ4W82vByYffsJkfB2KgCcmZ9VKsJscQgqvUuVs",
    name: "ALIEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALIEN",
    quoteLabel: "USDC"
  },
  {
    address: "5NciUypjaWArenouh2bq6ectbQcM6Hkk3Bz46mdBKrb",
    name: "Maple/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Maple",
    quoteLabel: "USDC"
  },
  {
    address: "AX88WkrsBo92m1CTALvPnp9btSxpzHPKuQJ9HghrMMqw",
    name: "Kape/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Kape",
    quoteLabel: "SOL"
  },
  {
    address: "7vVPuXb3m6nZ1LMEFqcRc8czSyRf22Z8EvYoSCACU9Fm",
    name: "DOGA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGA",
    quoteLabel: "SOL"
  },
  {
    address: "66CoPN72MoqpfrfHQAngUWD47hz69G4ZF1eQoE5cpHvh",
    name: "GUH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GUH",
    quoteLabel: "USDC"
  },
  {
    address: "ARYCjcDkxDtfEhDFPLRjCMtUso6WRjU94zMbPZyncm46",
    name: "CATE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATE",
    quoteLabel: "USDC"
  },
  {
    address: "8pckCD6NdPbZudCJjXJPC6e8m662gUz4tNXyoRdRkGrJ",
    name: "POG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POG",
    quoteLabel: "SOL"
  },
  {
    address: "7XtezMeufQndRo6nquB2zoVg3iV22NzSyKDtrGoS7CXS",
    name: "MOCHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOCHI",
    quoteLabel: "USDC"
  },
  {
    address: "6YBxwNjDoJ26z75wjSWzBmRg5a8rBZf7ywo2YyFEMibM",
    name: "SOL/FLONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "FLONK"
  },
  {
    address: "DdL15GVXeJEGzZtBRTRaqnjTHweLNYwhpwgUfRL9XsVX",
    name: "Pog/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pog",
    quoteLabel: "SOL"
  },
  {
    address: "KFm2pRwFLkegLPB1VZixM4GegwgJYXJ9yrXJih2dxNC",
    name: "SOOOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOOOL",
    quoteLabel: "SOL"
  },
  {
    address: "6RmxDVD4i3g2pHs2eJDJUUAsjGPwD447s6rgm1QT2jum",
    name: "SOLGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLGE",
    quoteLabel: "USDC"
  },
  {
    address: "8GRQt9rpXEHs5LAw3iCyYGEWzLUAVE8wjZfVBXkuGuNG",
    name: "GOAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOAT",
    quoteLabel: "USDC"
  },
  {
    address: "H7KymMkRpgxVTP9vZUmcmaRSbq7bxDBQoGaGWtHoZ9Au",
    name: "WHL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHL",
    quoteLabel: "SOL"
  },
  {
    address: "Hcrjq1x2TB5nZroY3NMECem4mSyotbYogV4QT56HB71p",
    name: "RF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RF",
    quoteLabel: "USDC"
  },
  {
    address: "AY3gE4hvaHakxDHMLpoRUKWG1p1SXFhbtsxwz3LW9Law",
    name: "MMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MMO",
    quoteLabel: "USDC"
  },
  {
    address: "3cEY6iuMk82Uw1X7ELhm3gZgzyhMvGZ7N6KWyrG2pT4k",
    name: "GIO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GIO",
    quoteLabel: "USDC"
  },
  {
    address: "FoMy96ivsKKHrwQe39VoyWFmi7nhzmJwaYJnsmKkz2sK",
    name: "CMAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMAI",
    quoteLabel: "USDC"
  },
  {
    address: "6AGcwjydmKkq9fPvBCtsKtRWXwp15YGa3HpC1dR6PVkz",
    name: "HEROES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEROES",
    quoteLabel: "USDC"
  },
  {
    address: "14A5Su29ZYA9Yoev1VNwVZkmt5CnuWsvtz9HfQHV7BJG",
    name: "LION/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LION",
    quoteLabel: "USDC"
  },
  {
    address: "2ircavYPKHnsJcmuTpCfvkzqqaBrcUN8xSPwqo829CJw",
    name: "AI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AI",
    quoteLabel: "USDC"
  },
  {
    address: "Bp9J7D19H38M6B118xSweZPrQ2Ydth8BGFZooL2VPKcj",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "FkoN5Td4vpSxefQ4AGrZUqsuFqkG6gxAqYPNm6RtbZv4",
    name: "BANGZ/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGZ",
    quoteLabel: "USDT"
  },
  {
    address: "5dBLhiQ1dkLeY6PJrtmTTFP4tEFdZ4VzvhDq61ADdRLi",
    name: "KSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KSH",
    quoteLabel: "USDC"
  },
  {
    address: "AFLJvs1c1BsqcbYRq7Dc4AAq46r46jP5S5pBjqPvyFya",
    name: "NEXA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEXA",
    quoteLabel: "USDC"
  },
  {
    address: "j3gwonnm3ZAVUbvYFkMtVQtgux7eorWBzUtEb6yx2iC",
    name: "CHINS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHINS",
    quoteLabel: "USDC"
  },
  {
    address: "FjuikuWetXa6Zi1Zcz9WsfjMd6ZtLcu1F4KV8wLswJxs",
    name: "BBIRD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBIRD",
    quoteLabel: "USDC"
  },
  {
    address: "9z5FQC4r2odLdBrC2b3woVHtVBXn87SU4Vru242ffzg1",
    name: "BABA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABA",
    quoteLabel: "USDC"
  },
  {
    address: "A4WNyBfDAM9ggmPUDikSoV1CzSFZUtjYufHz5NHhBUiX",
    name: "DGODS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGODS",
    quoteLabel: "USDC"
  },
  {
    address: "5RtGVAVEN8BWsSbDC6rVxkMugBrDgGmWrjouzV3egk1F",
    name: "SOL DAO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL DAO",
    quoteLabel: "SOL"
  },
  {
    address: "4ZTXgqsMRfED9b2ihopmxiRd44wVri7b6aJkgVzmEhtF",
    name: "CUJO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUJO",
    quoteLabel: "USDC"
  },
  {
    address: "xwr7mY8vLdxNkN9RSLMJp6pH9mBLmw5yizMDcHUMdfW",
    name: "DOGRX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGRX",
    quoteLabel: "USDC"
  },
  {
    address: "4J6soi4uf3xeJTftDh2cEvjYvTJ266ssGmor3jQwTvw6",
    name: "SSD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSD",
    quoteLabel: "USDC"
  },
  {
    address: "EyvGMe1FH2pLH5fRMb3C7UrSufrJ3RqGju9MArCs2be1",
    name: "BOWL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOWL",
    quoteLabel: "SOL"
  },
  {
    address: "CC6eFKLqGN8BQygbuq4rSbZwWRW1AgSQUTZdaVGxAkRq",
    name: "CBR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBR",
    quoteLabel: "USDC"
  },
  {
    address: "FmN7jqc6RXCci6QBg8UhGSzvSh6ZBLjWVb9ty8rLCdhL",
    name: "Atom/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Atom",
    quoteLabel: "SOL"
  },
  {
    address: "5WhLj8BgBbciAwiYffTdJbf9eNPUoXXFjiniKoqtAsWW",
    name: "MAGIC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "SOL"
  },
  {
    address: "GrReMnLdCjNxtt9kWVCYBab6gddbyiK4BMNjE7YPp7p3",
    name: "HDI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDI",
    quoteLabel: "USDC"
  },
  {
    address: "FKKB11hNVPw6AueUJdGXaoNpTVB61kdKnFUsALr8NSP",
    name: "GFM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GFM",
    quoteLabel: "USDC"
  },
  {
    address: "F4EnxLi8Kj3CcQynHcNzBn2eF96StxLYaUCGEPvimkHi",
    name: "ZINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZINU",
    quoteLabel: "USDC"
  },
  {
    address: "8TPgKG5oN9gJgBinVv3b1Ho3Tq6m5Q8v1pfi1h3F2jyW",
    name: "USDC/PEPE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "PEPE"
  },
  {
    address: "HdQSxvM7pzXCD1DS4B5MoTmkfV4s4Mm1rgBPjQd21fFZ",
    name: "JUP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JUP",
    quoteLabel: "USDC"
  },
  {
    address: "Go7rQPBLUK5epVWXqMt4QLiigG93RKBX1jga9WuYZobD",
    name: "CUMINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUMINU",
    quoteLabel: "USDC"
  },
  {
    address: "H4YarHihYnG29G5AsVJrDkuSRg6R9SXPSAcQEAUbMNKy",
    name: "WLLMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WLLMA",
    quoteLabel: "USDC"
  },
  {
    address: "7sdvNB26M8mt3iTQ12GfLiQ9Sr16FqUKiZCdTw8nKb3K",
    name: "APEYC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APEYC",
    quoteLabel: "USDC"
  },
  {
    address: "BDBANSm3pxYFsSKnjPVZSZqviZ7db1Mx7tL1EsRSwTUU",
    name: "BOND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOND",
    quoteLabel: "USDC"
  },
  {
    address: "HfDYT8rNx9esox2kjRH8wcHYJaJtT8QojCpPwnvw58k7",
    name: "LUNAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUNAR",
    quoteLabel: "USDC"
  },
  {
    address: "9SWfn9qSM3MhemicEbaXJf2nodLzGzitjQkfUx1SEwV6",
    name: "USDC/SOLT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOLT"
  },
  {
    address: "7mBwyfcT4adwsT25vfREmXEnQ2hr5ArRtDfLNBuSALzK",
    name: "MFIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MFIN",
    quoteLabel: "USDC"
  },
  {
    address: "CDvUy2EfqsSEMhTQkMsgyc3pDk9HAAWZFjvDk8HZ5q5p",
    name: "NBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NBONK",
    quoteLabel: "USDC"
  },
  {
    address: "Ar7q6UszSPL9jxV5oVxWFtV9bHopi6wcoU1Mgt2jGGA4",
    name: "HODL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HODL",
    quoteLabel: "SOL"
  },
  {
    address: "2tBLn8ZHnEE8KHSmkbMWN9nviMEHvdjBRkXB5ogre82e",
    name: "SOLO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLO",
    quoteLabel: "USDC"
  },
  {
    address: "68JrNtxorBxtFKBuFkdZ1BDxAnKi3pL4dRo3Xu1KQaU2",
    name: "DEINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEINU",
    quoteLabel: "USDC"
  },
  {
    address: "59YMMMoqHn4xQsEEXBGfp9GLRwZhox1yW4uS2HBNnSt",
    name: "NEKUG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEKUG",
    quoteLabel: "USDC"
  },
  {
    address: "E6WXNztAyu1njBMHCqppgxS4iE1Mrx3wqTQ7Y5bAJLud",
    name: "MILO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MILO",
    quoteLabel: "USDC"
  },
  {
    address: "93HaPAquWc2XP3peZAVCr24fBDhhR6ra5vEsqktvGms8",
    name: "SMOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOON",
    quoteLabel: "USDC"
  },
  {
    address: "8PgKtoGT3qn6GHxTibF3Uf7ahUBVKSsqFZtJeTtFfDdp",
    name: "LUSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUSH",
    quoteLabel: "USDC"
  },
  {
    address: "5oY143HQ9Ma4KBMHfWeVS5QrWC2h5qQtwCEjpWXanRrL",
    name: "POS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POS",
    quoteLabel: "SOL"
  },
  {
    address: "g9iF83wW2picXDFvDYKpzTyqpgFeyqsikGA6LuyTKFt",
    name: "SELON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SELON",
    quoteLabel: "USDC"
  },
  {
    address: "GK28PWSTmWc8KohrYY5attEe5wGaJVwe6q1TGrdeWvG6",
    name: "PENNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PENNY",
    quoteLabel: "USDC"
  },
  {
    address: "BPzRu4yqGR8ZYfHZdpvqKxb4SvCAmwSpKDm3vqcB4oj8",
    name: "NAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NAPE",
    quoteLabel: "USDC"
  },
  {
    address: "CrQj3U7EfwhMCjNGnkr7B6Dm526J3Ucu1qxDt4jDCqa5",
    name: "DGF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGF",
    quoteLabel: "USDC"
  },
  {
    address: "C4SGqJvq4DWDmixmdU6M6PKPt6dEFqYfmSjuboSkdj6U",
    name: "USDC/Bpepe",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Bpepe"
  },
  {
    address: "BBaUzECiky699M1s51NdugUTwnrpD5KRPTtzmEKvLJbq",
    name: "ROUGH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROUGH",
    quoteLabel: "SOL"
  },
  {
    address: "Em7jEBhWik3o7svTGRye2YVvVwLaxkxkkY3zVaBv7WpV",
    name: "JAM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JAM",
    quoteLabel: "USDC"
  },
  {
    address: "6vmyAn7dCJ1GBkrAwFSPozwPLFedARULSaNmWA21NquE",
    name: "SAMONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMONK",
    quoteLabel: "USDC"
  },
  {
    address: "58mGqz6Fr53LYqqy6GAH9ANJeQwQ7DqyiakWvF9pza6y",
    name: "LEAFS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEAFS",
    quoteLabel: "USDC"
  },
  {
    address: "5zj8xNWZ2HgTuq7rQXoekm9ZB61pQVEZvk2qCjJ9BpxM",
    name: "ATEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATEN",
    quoteLabel: "USDC"
  },
  {
    address: "CKPqNXyaLtETFaoUD54h2B96F2ZnvjBBo3vFLmETL7Je",
    name: "ALISA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALISA",
    quoteLabel: "USDC"
  },
  {
    address: "2mmsrDqhY9UBnxh6TjntJD7rKdREzb6yxwmx3qbMfpLh",
    name: "HUSKAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKAI",
    quoteLabel: "USDC"
  },
  {
    address: "B5vWisqtvvP2pdVep6ngVvZm5iRXXXAdn4c3MPunsHWf",
    name: "MONKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKY",
    quoteLabel: "USDC"
  },
  {
    address: "8mD8DBpKNjvSFgidJo6vXJpdFQvtasFWkJCnJLww2Usg",
    name: "SBM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBM",
    quoteLabel: "SOL"
  },
  {
    address: "B3sSm9Bud3mfB7NBLBd7NQsH3A9DyJhv9xXJ7r3TNLAK",
    name: "MILK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MILK",
    quoteLabel: "USDC"
  },
  {
    address: "GcMjLE54gWxwViiyQf29t5xzFW6iojLmn7b1ujNVpvXW",
    name: "BONKER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKER",
    quoteLabel: "USDC"
  },
  {
    address: "AxJQ898QnLWLaCgHLd2hfneLtC7hgmQtxFzMUcP9X6cV",
    name: "PBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBONK",
    quoteLabel: "USDC"
  },
  {
    address: "GbisDokyuX97xFHmHyKtjmFQaigZAMmtaYy1K4aoKNJP",
    name: "KABO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KABO",
    quoteLabel: "SOL"
  },
  {
    address: "2s8Zg6dZ7Ky9deJzf6mxyv6H7bVxRpF76e6JTPYp6yhV",
    name: "ROBOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROBOT",
    quoteLabel: "USDC"
  },
  {
    address: "HRyZVhJjmkbny5BunQTj7vRZZAUEkiKWGaWsAUcmccha",
    name: "KINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINU",
    quoteLabel: "USDC"
  },
  {
    address: "2Yo9Z7FVeF5j6yFTCVinhvUYf3iDSPqt5fzHwMht5BLG",
    name: "BlueR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BlueR",
    quoteLabel: "USDC"
  },
  {
    address: "5SF7cVTG8pxWmi41xdZcPuzsjYW5DdTon51vFJTGXeyY",
    name: "CATMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATMO",
    quoteLabel: "USDC"
  },
  {
    address: "4UPoJpXXjs1xX7z4xuja4ctBYZhEVQ4HDS7Fk2pkVmrv",
    name: "CRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "USDC"
  },
  {
    address: "GnU6F5W6cC4KXFoAeiCcXDfnVf5TxxRmkBKG2rMe3C5D",
    name: "SELNE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SELNE",
    quoteLabel: "SOL"
  },
  {
    address: "3YiDMjAmvvehf7m4w7s6wNiHvGFsLEY6LWxzcVuPG66q",
    name: "POODL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POODL",
    quoteLabel: "USDC"
  },
  {
    address: "FryPrbgPoD9tDaFdDpTs24rby2TUhC7FuJDFRBse3gqV",
    name: "WANU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WANU",
    quoteLabel: "USDC"
  },
  {
    address: "68wrDsL2nnoREwGfH3CVo9uRtsDjHELJdR2ww3ZsBKWg",
    name: "RPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RPS",
    quoteLabel: "USDC"
  },
  {
    address: "Em2M2SyDscU1FsTeLCmNCiDbKWV3kam7Sb4NGsksFFvv",
    name: "EVO AI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EVO AI",
    quoteLabel: "SOL"
  },
  {
    address: "D4rdTUdezgo22AYMuM4Kxr9sdg9P9qAMTyY4iRmsjZto",
    name: "WOOP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOP",
    quoteLabel: "USDC"
  },
  {
    address: "Er5xaiFjjGG5rbNCRsvsR59N6GT2SBrbkB6mHMRKvdn6",
    name: "GBEER/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GBEER",
    quoteLabel: "SOL"
  },
  {
    address: "FX9CzR9FTQVfr92qRxRYKjxCoCpaRuoDbcU2zVXddMGW",
    name: "GRL/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRL",
    quoteLabel: "USDT"
  },
  {
    address: "78sJxWL8FrBrCUyL9jJjQSqSNxueYFHUXbbGMGbhSmXN",
    name: "TOY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOY",
    quoteLabel: "USDC"
  },
  {
    address: "DL78CFETSJphmb6upmMZpktBfr42zNT9UdvAc1iWNDSP",
    name: "TROLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "SOL"
  },
  {
    address: "GJAaYzeEYXbEGCdr7U2L3g7MqNxkvZgoAp1Rgch8BQ9i",
    name: "VACUM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VACUM",
    quoteLabel: "USDC"
  },
  {
    address: "5VJa7x6ti8SY8iKmta6VKxokC75AmrN76z9f5D4ncCxV",
    name: "SOL/GRID",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GRID"
  },
  {
    address: "SimXweZCYjJvzMLwJyPPXWuLL9a6B3zA8SLGr1eq73A",
    name: "BBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBONK",
    quoteLabel: "USDC"
  },
  {
    address: "8RFxSWaRfNu962LCNfp2PA9pnXZ3EaBRV8Em3NnPzmfy",
    name: "SGON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGON",
    quoteLabel: "USDC"
  },
  {
    address: "4MnDNLsKgVTqdpFxttiUjgpgg9t5JsDAhW7HsvHjmxjE",
    name: "WOOF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOF",
    quoteLabel: "USDC"
  },
  {
    address: "94JRvEQaE67g7TT8bUXecTX4ruYfWmusxqdNCYvpxPKB",
    name: "RATS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RATS",
    quoteLabel: "SOL"
  },
  {
    address: "4JJboQpnFtRSDA8XDxv7jerbMb4t9iTNHNxN3AkmhQbV",
    name: "CHUNGUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHUNGUS",
    quoteLabel: "USDC"
  },
  {
    address: "Hngqb66CjrjTAaabXKUFD74RxLUEoY4GkNJ7Py2mJ58H",
    name: "PROOF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PROOF",
    quoteLabel: "SOL"
  },
  {
    address: "DvxKtnSTaRHw5jF6DcwcggGe7G7K54xQeSC85hLyg2Cr",
    name: "HYD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HYD",
    quoteLabel: "USDC"
  },
  {
    address: "2pEijjJUy6NKwPXT7HNn2nsrBuQvX1zUGqLcbNd7FWhL",
    name: "BonkP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkP",
    quoteLabel: "SOL"
  },
  {
    address: "FPyX9mEXxpmHgMLmXZ3WYox9QVVw6AEGE2oZJhv88zUh",
    name: "BLUE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLUE",
    quoteLabel: "SOL"
  },
  {
    address: "BXt8nGHs6ViM3qFNnihNRqpWQVLDkPyFod5yXQQrhPqT",
    name: "USDC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOL"
  },
  {
    address: "LFqySe3AWGD8M94my872amwihdqujvqJC9TXjyWiXUB",
    name: "KOOLA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOOLA",
    quoteLabel: "SOL"
  },
  {
    address: "HqETJY4J5vpLnJSuXM1nsu267xtzHKZ3uFAxExRBYNJi",
    name: "UTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UTC",
    quoteLabel: "USDC"
  },
  {
    address: "7nVESzq5164cGpEyLoo1PUbFCHKsDnT97Y7M3n2gt7wJ",
    name: "OOGA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OOGA",
    quoteLabel: "USDC"
  },
  {
    address: "FRt7xWNsBeyCbuYCUHHB2BT8Z9VYjj98gDtD7XTfqZpc",
    name: "MEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEE",
    quoteLabel: "USDC"
  },
  {
    address: "6bLLqWGdMkXe3d187vGcdehUtM2LKDX2jVTFa5vWBtBo",
    name: "AGVZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGVZ",
    quoteLabel: "SOL"
  },
  {
    address: "2vjvU7UKdQm45e9QWMNANGCX3CPSpJHuSmB8tAPdV4sq",
    name: "OWL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OWL",
    quoteLabel: "USDC"
  },
  {
    address: "5ojMtLZ5Bj2E1xdbX5A8nFuCdmJwLqPrtvhx92cNs9pA",
    name: "bbb/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bbb",
    quoteLabel: "USDC"
  },
  {
    address: "Eeq1p4i2ynjfbVe2C4KP7u8y3G243M6TttxQEd3YHPd3",
    name: "DGNFT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGNFT",
    quoteLabel: "USDC"
  },
  {
    address: "5qNjXTQGgLcAADB8zKCNs7ZoWSMSrTta5ioG5mruJhNE",
    name: "CABAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CABAL",
    quoteLabel: "USDC"
  },
  {
    address: "A3roKJ5d23mnMd5iZLPo8YNH5oHtxhkge443UaK7Xb83",
    name: "NOBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NOBONK",
    quoteLabel: "USDC"
  },
  {
    address: "8GGRTQBhF1EwawKz4c2Uay59U16gRiayKLNa2oVBk7Ka",
    name: "SKULL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKULL",
    quoteLabel: "SOL"
  },
  {
    address: "44udyUr6peE4fkCukbmkekEw9rWZ8S6PTsoaof5St78Y",
    name: "IMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IMI",
    quoteLabel: "USDC"
  },
  {
    address: "2HHpeNKMUbAJvgcMBEebEhKFk9oiEMX7G7GjyrUJNEaS",
    name: "Akita/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Akita",
    quoteLabel: "Bonk"
  },
  {
    address: "58EtZhAUhL3tA6ieKeia33jMST26hjs1mfhYF4pkVrmL",
    name: "HARA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HARA",
    quoteLabel: "USDC"
  },
  {
    address: "2dE93q6nLLhy88d5suPtRyp5qDzAGYBVdEKN3LJJCnA8",
    name: "NJINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NJINU",
    quoteLabel: "USDC"
  },
  {
    address: "8CGGDcsXQMTPytLJqcr8ZADnpni5CqZdrifeh6qiq59y",
    name: "FROGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGO",
    quoteLabel: "USDC"
  },
  {
    address: "DAvru29F95nNRX28YTmBLbog2nmEmmbyc4PU8sueTzZF",
    name: "BFRONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFRONK",
    quoteLabel: "SOL"
  },
  {
    address: "7QwVePde6E7aQKxGqt3kQUENzK3uSrvv4zmqHpAiXCPp",
    name: "KITTIG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KITTIG",
    quoteLabel: "USDC"
  },
  {
    address: "E3bxDes8qa46jmbP8GuTB9jmxNoPNwJhazeVLSF5jLcR",
    name: "BBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBONK",
    quoteLabel: "USDC"
  },
  {
    address: "Czrymb4G2Sq1HDJ72joWebnNVyY3nLvGBGjsch6uV4T7",
    name: "LoGe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LoGe",
    quoteLabel: "USDC"
  },
  {
    address: "GdX39fHFXcWvm5eM9r1zGnAhzXoiVvQd9A8LRqFaGzoe",
    name: "MUTT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUTT",
    quoteLabel: "SOL"
  },
  {
    address: "AsxG3P6fvF9cYYnA2pcjg2uSqizUqHLxEJrF4QGDHqcj",
    name: "DOGGO/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "RAY"
  },
  {
    address: "CZ2JnFqLsGKD3a58kRVRNmt5VBizEqkLT1Ha6JTjiVVn",
    name: "HOA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOA",
    quoteLabel: "USDC"
  },
  {
    address: "9BErTVPYxoVMpm6wUHgvAdgsLf7SarCMjnF5JFaWbsrF",
    name: "TSTS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TSTS",
    quoteLabel: "USDC"
  },
  {
    address: "6e9byUmU1mKwEyv3HRtSVdmn5ZaLKrGN4tpuuz1h8s59",
    name: "PUNKL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUNKL",
    quoteLabel: "USDC"
  },
  {
    address: "BCj3xf5XSek2f9pQAuB323NUtuVCAW6nFnzvzUrwyN4P",
    name: "TCASH/TCASH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TCASH",
    quoteLabel: "TCASH"
  },
  {
    address: "3mV8EHPwyMUyMnhJKvEtUgDNU6c1WkbMijmmHQKTSWcc",
    name: "KART/BATT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KART",
    quoteLabel: "BATT"
  },
  {
    address: "5MWbv5p1zHNGMuq95VtsvCpnpQ7MhrsWwdr49HnrfB1C",
    name: "DUCKZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCKZ",
    quoteLabel: "USDC"
  },
  {
    address: "DMpqoNeTWwYDUVCbLiFUzvzXxyn3fKYUNUJ3uZrEjdQR",
    name: "Chimp/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Chimp",
    quoteLabel: "USDC"
  },
  {
    address: "D1zFAp8M1chsjBrEoiNVctcEhYmqdJh121oHJAFCCDXD",
    name: "eDRAGON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "eDRAGON",
    quoteLabel: "USDC"
  },
  {
    address: "7627dEoLv6p4tB49yr6reVFAHzDnZwDpCfx6NnTbUiSZ",
    name: "PNG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PNG",
    quoteLabel: "SOL"
  },
  {
    address: "DzeeDokdM4UEKij4WYZ85pPtvuJfKdcGdBaPUZ3VNEmV",
    name: "SCOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCOPE",
    quoteLabel: "USDC"
  },
  {
    address: "CpvYsykhry1S86dNCM85uQCu2gpsWQwXW7KAeqkQBjCn",
    name: "SOL/Tuzi",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Tuzi"
  },
  {
    address: "4dPXLCydzafxw9KAneg8WL9iBmcwwF7H2QTUZGq3GJAY",
    name: "DICE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DICE",
    quoteLabel: "USDC"
  },
  {
    address: "7ieoToE3bf2GnGbjkw1kEPfTmNhiykckn6DbgM6yB1xG",
    name: "DOGELON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGELON",
    quoteLabel: "USDC"
  },
  {
    address: "9S3RZd2bwsXoXur87JGiB19n4duWbC1padhzsUpnU4Ae",
    name: "ET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ET",
    quoteLabel: "USDC"
  },
  {
    address: "DAq4DNeaJsA7K7URm6pd2yLbuFSxgERRehjre5XtrLNv",
    name: "MKR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MKR",
    quoteLabel: "USDC"
  },
  {
    address: "EoejJi2FoKX7frx6mc7obbAWvgBKrfkf6frNk75cLMk4",
    name: "SOLSO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLSO",
    quoteLabel: "SOL"
  },
  {
    address: "HgqV3Jf3AdYgGgM4tvYa8LiYheTBpSi8AGQbgnoG5wN9",
    name: "gm/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "gm",
    quoteLabel: "USDC"
  },
  {
    address: "3kSkjpbpNVnA2UH6gD89ZteBes4qNg2dchjMjnQsD22x",
    name: "galhl/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "galhl",
    quoteLabel: "USDC"
  },
  {
    address: "FZdy4tifLQ4PDZvKM5S57JRssFFL7CkJGUHYCYy1tLUu",
    name: "AIRI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIRI",
    quoteLabel: "SOL"
  },
  {
    address: "AhDCoUoxzwjhZTxqPFogVxaFUEDn3TCbEBf7HnrXrAFG",
    name: "Sloge/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sloge",
    quoteLabel: "SOL"
  },
  {
    address: "8dU9u9zzywPG2rqFwgHQksVH381xqjitP5KyV1DeQcKQ",
    name: "BULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULL",
    quoteLabel: "USDC"
  },
  {
    address: "C76MPJ6EJnJkuKHikq67K7Zs4jmPvJ2yUbBfaQCZHGpd",
    name: "ONI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ONI",
    quoteLabel: "USDC"
  },
  {
    address: "DM8Dc3AAkCEBJbXU36Wg2ScQCCmUmKobWPbwwbfqkGLg",
    name: "DOOGL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOOGL",
    quoteLabel: "USDC"
  },
  {
    address: "AQfp8exe3vqYYDBnkAZHw1DEocB6KcGHhBLVJZxYYZ5L",
    name: "ICY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICY",
    quoteLabel: "USDC"
  },
  {
    address: "892wkj9WRqb8rbbb6ycGr9181cFGvKANQxQCDfRGFfTq",
    name: "FREN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FREN",
    quoteLabel: "USDC"
  },
  {
    address: "H4udL86A2UzXC5GvggChGcbuzi61s5vvxrCuWzVdxCn",
    name: "PELON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PELON",
    quoteLabel: "USDC"
  },
  {
    address: "EizJmvBV6wbGdzKVY1i5tcnQ7cyuBaQoKNTtsc9CRMnm",
    name: "SCATE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCATE",
    quoteLabel: "USDC"
  },
  {
    address: "66AEqeK8svSAqgQJ71wrKzMHUNMdMXcqg9DKjCBrEEv1",
    name: "DGN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGN",
    quoteLabel: "SOL"
  },
  {
    address: "3dd5tmpyojmKeSWihUfKT2VtcmufdmJX6Ej5rUhfX3yt",
    name: "SOL/Vita",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Vita"
  },
  {
    address: "2d6vnPYuGL8vCkRfz1L4oAwrZ7NxmRcVnKePoAqe9H8s",
    name: "HACHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHI",
    quoteLabel: "SOL"
  },
  {
    address: "2W5rQvRkWzj1abC7gkXnuZjY4CTFuFUFg4L8Jays2zEi",
    name: "CHIHU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIHU",
    quoteLabel: "USDC"
  },
  {
    address: "zCHGsEtKMeEHQ47jWq1rZ6DD82p5HKWR6o1N296v5ff",
    name: "BSHIK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSHIK",
    quoteLabel: "SOL"
  },
  {
    address: "HcQQXDkTJkCpj2RTFwJ4j5dYfsAGtumq8s4PNhNcbsh6",
    name: "ANCDA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANCDA",
    quoteLabel: "SOL"
  },
  {
    address: "7wwcZpUBvvU4jaTzRpfTrF6bbN8yffz9q752Cwv9N6kq",
    name: "LVL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LVL",
    quoteLabel: "USDC"
  },
  {
    address: "Hu3oTXLfAiZwfJYVQjSjXfQEbxQ4poD28x6hjnVnZHEC",
    name: "MAGIC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "SOL"
  },
  {
    address: "FUXvufLB2vhmNpLTmxsjf7ZGjZKAuUcFbt4r2eaA9Myq",
    name: "SHIBE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBE",
    quoteLabel: "USDC"
  },
  {
    address: "GBW8Gm8rwA81NF2LPFsLnTqTd497qGLcdrJUuudrNNTZ",
    name: "MINDS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MINDS",
    quoteLabel: "USDC"
  },
  {
    address: "6HwCtZffnHqNtBDbafYrWmZ3LZTd4hUgxDFrHqUuDMnz",
    name: "PBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBONK",
    quoteLabel: "USDC"
  },
  {
    address: "EtERFMyNWg817qu6dRbqVEQ7isVGUQFTRVqLrTmNDvba",
    name: "SBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "SOL"
  },
  {
    address: "H4VKgyPFUy9vXC1zA8xnt1NP7RjcQqdeJnxbhMNgjuBS",
    name: "SPARTANS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPARTANS",
    quoteLabel: "USDC"
  },
  {
    address: "HAanHV9Bkmh4nCawTeS7CedUAtdzWUo9VMEfrJpwgSzu",
    name: "AST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AST",
    quoteLabel: "SOL"
  },
  {
    address: "83qK4i87KKNiGA3KyeDJ8ViMHvU5AHQ55Z14GMgi7w3x",
    name: "GRZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRZ",
    quoteLabel: "USDC"
  },
  {
    address: "63Gx8JroriqNLPv7BzDx3VSgPnZ6PfLoZKyCS8cHR4zx",
    name: "CATT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATT",
    quoteLabel: "USDC"
  },
  {
    address: "7qS5Pfu9NNvQB4HF1Yk8WUe9oqrKzFk1hrWHndC67ChG",
    name: "MOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOO",
    quoteLabel: "USDC"
  },
  {
    address: "5mQ9j27xrGdzgcEfGB96ggUDDuv8RKxekf3Y7Gc34bTw",
    name: "BONKC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKC",
    quoteLabel: "SOL"
  },
  {
    address: "4bNhj9nW9MrsuJLWTNxC5H1Dfy5tqN72caWoXUxTihhE",
    name: "SCAM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCAM",
    quoteLabel: "USDC"
  },
  {
    address: "7EBma8Gf35otLY9vKzVeUhwng7wdGYtzZuMWuudPSrFG",
    name: "DICK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DICK",
    quoteLabel: "SOL"
  },
  {
    address: "GcGjxYKzTcVJxK98EwfnTpkUrBPc5rT8QHHyqKHHBvWg",
    name: "PIXELDUDE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIXELDUDE",
    quoteLabel: "SOL"
  },
  {
    address: "6iKvmdnjf68h4Ssknr2vpyD7c5SpMeBGKEfpfASNrP93",
    name: "METASOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "METASOL",
    quoteLabel: "SOL"
  },
  {
    address: "FThjCK6yPq8ySqxTWjEbY3XYARdNBHYt3eAvjomMR5jS",
    name: "PHX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PHX",
    quoteLabel: "SOL"
  },
  {
    address: "NWSPcj6AJuY4n1urrf87rHVa8TfRDFAG4U6XGVpKNZn",
    name: "SOL/testa",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "testa"
  },
  {
    address: "Cbr2kS3G4YHpVAe1Jb4j3SKqTNchu1LakmM5osa6Xvn7",
    name: "DINKY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DINKY",
    quoteLabel: "SOL"
  },
  {
    address: "GNb8NfkyKQvsPMJvttm8y2xSpK5ZukTa7nBZ8LMSL3fz",
    name: "WOOD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOD",
    quoteLabel: "USDC"
  },
  {
    address: "DHF4feQH7PJUu84ehasuDtQpp9F3MEEQYoHhyin97B9n",
    name: "GFLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GFLY",
    quoteLabel: "USDC"
  },
  {
    address: "GGcAoY7sywj7Stcm3jwMkeRur2yBwSWuMPYnzRcWKui1",
    name: "BST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BST",
    quoteLabel: "USDC"
  },
  {
    address: "3xAGdhifkHnQg3Q8CkT9CSJYUwHi53uMbTCpkJiCwMCa",
    name: "PRISM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRISM",
    quoteLabel: "USDC"
  },
  {
    address: "DSwvVLvk4TREDTRSS9hdvY7C77uGykL7imJWKmMePzkf",
    name: "RAWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "USDC"
  },
  {
    address: "km3eC6uQx4A7QZPZQQB5gwBsTxcVrjafmwvPSMPEzZF",
    name: "SHREK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHREK",
    quoteLabel: "SOL"
  },
  {
    address: "4ndCG96auRUTHCUFeGyqAZ61GjRftjekffsuVJJdcTqN",
    name: "KPTC/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KPTC",
    quoteLabel: "RAY"
  },
  {
    address: "9YkCrTFD3zjyvmyzYzHUuTuT8jaKZh83TRvnbKqqBWfB",
    name: "CRYPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRYPT",
    quoteLabel: "SOL"
  },
  {
    address: "VyUfTXavzvjkrQV2WCWPb3C1av9ePTHzwnyeGPCvnKd",
    name: "USDC/HPIUM",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "HPIUM"
  },
  {
    address: "G4fxCLEBdKF44TXgtEmdfSM5sgbyH6MdkeEKAwmovS7p",
    name: "WSBET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WSBET",
    quoteLabel: "SOL"
  },
  {
    address: "7gaurz1TocmrG2u6qqwdjxwtggzT5y3PsVSThm3UVqi4",
    name: "PLEB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLEB",
    quoteLabel: "USDC"
  },
  {
    address: "E16PWYBMLypdMCXj9yJK5H4EVumDLNxFDjock2x6H3k7",
    name: "VONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VONK",
    quoteLabel: "USDC"
  },
  {
    address: "Fo87QDiSsUNRtit6LL9fGhEs8NLxPyDLh9qCZ6yQqmcx",
    name: "USDC/HADES",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "HADES"
  },
  {
    address: "Ahdxz4ULiekLNsBr2F86ym1zynGi7qJc3mzbNicEmSrb",
    name: "TCZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TCZ",
    quoteLabel: "USDC"
  },
  {
    address: "7c6fbAQL2b7f59XaP6vTWh7LhKhpSu9t9GM7vdmRM4VT",
    name: "AGXAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGXAI",
    quoteLabel: "SOL"
  },
  {
    address: "9aUJZms4wJeVJxw943V2dXsjWNaHGP4qX4ekbJds4z3s",
    name: "PUNK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUNK",
    quoteLabel: "SOL"
  },
  {
    address: "DUuf2JVGea9enUmaNRSFvWXEnNaY1E1xsFWdscKBUPyP",
    name: "ROBOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROBOT",
    quoteLabel: "USDC"
  },
  {
    address: "ATi6Xu97JjW5ZwxdhGGiEmMmXMSS58numMjZxX2h9RpU",
    name: "BOSM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOSM",
    quoteLabel: "USDC"
  },
  {
    address: "EhBJqfGgDXVdH9YDrcgqSCwyjV3JR4UDUhN8WqJT1BvB",
    name: "BOOZ/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOOZ",
    quoteLabel: "USDT"
  },
  {
    address: "2STSChFCzndVEZ7TBGdni4brozat1cwsQKJZFCwUNDzT",
    name: "Astaf/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Astaf",
    quoteLabel: "USDC"
  },
  {
    address: "7izCZWXgtjSFMKMy6cCidnkogmGgzZGPHQS9wjp3rN3M",
    name: "CHILI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "USDC"
  },
  {
    address: "8kJeTymMuEbTMXRw9hHaMvMPEDXopU2gEXH5AV57bUyt",
    name: "CAKES/SUGAR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKES",
    quoteLabel: "SUGAR"
  },
  {
    address: "9ffV6vXhoSSFWSUzyztQNS2euJtWPoYhuvz4R2Lwtd35",
    name: "Neemo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Neemo",
    quoteLabel: "USDC"
  },
  {
    address: "BnTprcghcNPvm1u2NhEwDrwchmUuayJyzyfGTQaGAgsQ",
    name: "BDUCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDUCK",
    quoteLabel: "SOL"
  },
  {
    address: "D6TL4YMx3HKKFe8TE1riWnS9ja28KUT6Vrpds7ZqUfcB",
    name: "TLion/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TLion",
    quoteLabel: "SOL"
  },
  {
    address: "8EKgdb55f1z84fMcsbzkxd53S5suZyn332Exvtixhcsx",
    name: "USDC/CHI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CHI"
  },
  {
    address: "86zVNE5Y9C9TT2rkb3JfkAtkyJbx8gFQU7C7W3w36cwj",
    name: "RAMEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAMEN",
    quoteLabel: "USDC"
  },
  {
    address: "J19onAqEG3PgyAyAoJLz1b3PQwgt3mG6LrUmEEdX6nip",
    name: "PARMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PARMA",
    quoteLabel: "USDC"
  },
  {
    address: "7NxvJNaveyCs28HSymEAABTBt6B4fd5Xrmzn6aDGnvAz",
    name: "Gods/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Gods",
    quoteLabel: "USDC"
  },
  {
    address: "ANhQu4N6ZMMnECUBBMP9YUx1PvZ74hSxyd736uB1HK9Z",
    name: "NGN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NGN",
    quoteLabel: "USDC"
  },
  {
    address: "6Lay5tCqNii6gfuQ8Z8CoBD3oHY9C9BP1PACtCk9qCJG",
    name: "C2023/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "C2023",
    quoteLabel: "USDC"
  },
  {
    address: "6zyNYera4PqA3k7c6hJ9GdCt7uvps9peU7fz5FXdmjb9",
    name: "ANUB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANUB",
    quoteLabel: "USDC"
  },
  {
    address: "6QbytKEDULBCPvR9dWitZPMBkjvSHL12rwws8TK8YDTX",
    name: "USDC/JIZZ",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "JIZZ"
  },
  {
    address: "CamKqi8WqTKCikUVFWaCKKaF4AXRpBschbR72MfMXdZ5",
    name: "POS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POS",
    quoteLabel: "USDC"
  },
  {
    address: "8eEXmEgHXnFVytfH4K8fT8ZqeEexGASK82QEZHVQEHwG",
    name: "SHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHI",
    quoteLabel: "USDC"
  },
  {
    address: "6u3btM6SRQ1NxvfeeZtnQhfSGNxao2LBGrPHX6Tdc1eL",
    name: "FLUF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLUF",
    quoteLabel: "SOL"
  },
  {
    address: "6ga6cCSSyPZrLy72Wh1z3Ms9S5jK2bt7GnJgHHk2FXMf",
    name: "SOBAK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOBAK",
    quoteLabel: "USDC"
  },
  {
    address: "YCQEK4rSZJHAPUXb3hvpDtrXfkTVfjUeW3qT5c7VEFQ",
    name: "SDR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDR",
    quoteLabel: "SOL"
  },
  {
    address: "31DssMd7cJhr9jyUx5DMA1MiW1HGJRWCNaHXfQyxVEpf",
    name: "SAM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAM",
    quoteLabel: "SOL"
  },
  {
    address: "6g9pJ671eDRj5qH7ogGLRVRpyiqE54RQsPgzGr2ir5BY",
    name: "DGK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGK",
    quoteLabel: "SOL"
  },
  {
    address: "2QgcqxDtHsisUwnFsBs73cm5uGNErCs5aV9MDwokD7La",
    name: "SOL/Chunk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Chunk"
  },
  {
    address: "ARhjpPVen3DpXrvMjoGeD5tM7Y2Pta3qoqb2VUPVq16k",
    name: "BYET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BYET",
    quoteLabel: "SOL"
  },
  {
    address: "688257WyvbX2B17WibUvm5yggBz2orC8egcoEqXsLDR3",
    name: "RBIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBIT",
    quoteLabel: "SOL"
  },
  {
    address: "8Qpqos7YVGAqbabvf7HnRcgFecgq6SdjCKhxkSJJJpW1",
    name: "Rumpp/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Rumpp",
    quoteLabel: "SOL"
  },
  {
    address: "EQpkG5ckKykDAxeXB8D85NxpbNnWBSEjrXMsVgzkk9uv",
    name: "FACE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FACE",
    quoteLabel: "USDC"
  },
  {
    address: "BdnEvRP4nP898JpFMQnGiWEZc9xFi9nZZyfYwvrQ9WMP",
    name: "MOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOON",
    quoteLabel: "USDC"
  },
  {
    address: "2gbpKbqk2yyN9hi5mJAt4nnmiVUqhPy3m2X2www2KGbW",
    name: "DC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DC",
    quoteLabel: "SOL"
  },
  {
    address: "335mndNxEXv9Tb28PFXGbM82ChpvcUxW4NiY8BGEe5wq",
    name: "DOGNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGNK",
    quoteLabel: "USDC"
  },
  {
    address: "96AsyYAmccmZdFdRJvo35E6TBHxCC2iFE1nZ18goxoe",
    name: "SOL/CHDOGE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "CHDOGE"
  },
  {
    address: "EtochjBqB7KqWRZDLY2yZVDqSX1QmQYWieEFN7FBEy2x",
    name: "PEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "USDC"
  },
  {
    address: "91sBZghYZCkM3vbHGeiG8MdWF6oYC4XL2QWdR5DbMLX3",
    name: "NUKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NUKE",
    quoteLabel: "USDC"
  },
  {
    address: "GWYfbCugkP2UrtiWm7aTSGTPFRsnfxpVqjnNaaHoRX5G",
    name: "EVY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EVY",
    quoteLabel: "USDC"
  },
  {
    address: "5j8JABeGjNddUUtpBSUuCvq3YAh2SUoDfMzqrEUTiSaY",
    name: "OPTI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OPTI",
    quoteLabel: "USDC"
  },
  {
    address: "eeFviB3TxyXFRx1HPQETKcdheRy3hqjAoeVriJgds3G",
    name: "ERNIE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ERNIE",
    quoteLabel: "SOL"
  },
  {
    address: "rbxKP89wAkkNnmE6jXvrJJpCyGyf3ygNM7dYEfSSdRz",
    name: "ALF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALF",
    quoteLabel: "USDC"
  },
  {
    address: "Cx95KU3UqbbXka4BAzWd3SfKjCXkQhSF7QHCT75U1UGo",
    name: "FOXX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXX",
    quoteLabel: "USDC"
  },
  {
    address: "6tinKFEtEmvPDxJ7yYPdABTENhKQKW76Yf17uSjYcmQx",
    name: "Soli/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Soli",
    quoteLabel: "SOL"
  },
  {
    address: "6ar15ariidx64nqtd18BgUBuWrc3M7GcNgoNusfZwYmW",
    name: "SOLO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLO",
    quoteLabel: "SOL"
  },
  {
    address: "2bBueoFV9WUrYJKMGFiVwS21fUBPeytArNujx8AJt8CS",
    name: "YAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YAKI",
    quoteLabel: "USDC"
  },
  {
    address: "GWGY8mKj8UyEKzewaHp8TbrqKpUQXMH1tUZHzX7gXj2v",
    name: "DOINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOINK",
    quoteLabel: "USDC"
  },
  {
    address: "HBpStUqS2xFThJ2vrwmPW3YMgy26c7zUYRKMziVDgVCn",
    name: "HXD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HXD",
    quoteLabel: "SOL"
  },
  {
    address: "85d9rA9LDkurTDiyNgxkVDfPP3xAxDWbAK1DNp4hyEDa",
    name: "UPDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UPDOG",
    quoteLabel: "USDC"
  },
  {
    address: "4K7Ssr9VsSP4F643MSZNYSbyHNCD1kNCYEyDTGShQFdQ",
    name: "CABAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CABAL",
    quoteLabel: "USDC"
  },
  {
    address: "AKoCerLZ1KRzgXCGdqiwKUMpgg4PSuRXs6XRPrN4RK3f",
    name: "SIUU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIUU",
    quoteLabel: "USDC"
  },
  {
    address: "Ftutehfj9NofLjGD3rQ94mLaSPAn92pxWJmfJW286BrC",
    name: "CROCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROCK",
    quoteLabel: "USDC"
  },
  {
    address: "6NQ6xsVwCEyXDzFrXZoXUBGMBFTBR7nGeFRsWcgV3aEA",
    name: "SPOM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPOM",
    quoteLabel: "USDC"
  },
  {
    address: "GviXnaE3oEt5PUq8Df34iu3oJ876yEwUYcvfKANQF4Hd",
    name: "MFB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MFB",
    quoteLabel: "USDC"
  },
  {
    address: "67V3iAPUy47vshJYVw1V6qA3Vga4fiEBAY9aZAbfqo9V",
    name: "DEGEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEGEN",
    quoteLabel: "USDC"
  },
  {
    address: "BSXmP9Eb9TGRxK8m5r22RWPooq4RVTqAs6yFS8uxcNmf",
    name: "KOMO/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOMO",
    quoteLabel: "USDT"
  },
  {
    address: "2s9FsyKQp5zCNK4vpwjejBTj47a6wg3Yiexw4x3mUxPw",
    name: "RBIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBIT",
    quoteLabel: "SOL"
  },
  {
    address: "Db2qR2Se56pSzaVbGddL8YiLWfxYj48MKTeM3hZKai4M",
    name: "SMONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMONK",
    quoteLabel: "USDC"
  },
  {
    address: "5G1jdyDb9Nwy3vWw1pJDaqwE6PbDT27wcnNVAwbdPgnW",
    name: "FMUSK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FMUSK",
    quoteLabel: "USDC"
  },
  {
    address: "FQNavW1mUBLWT8fs9PGroR8WYryua1qXURRuYruUdG9a",
    name: "sPROOF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sPROOF",
    quoteLabel: "SOL"
  },
  {
    address: "8uLYk8R8gCvfBZRKfb4aaDGPp4UrG2UbJyc7ifEjMtxF",
    name: "BTCNE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BTCNE",
    quoteLabel: "USDC"
  },
  {
    address: "FHY9Dcn64UhiALSjn5bZixAJcM2cz5GcMpkfpgXi6837",
    name: "KWECK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KWECK",
    quoteLabel: "USDC"
  },
  {
    address: "EFRCUKRAru7FUQtvVJZyR7NAZ7uUtHmHh1q3r4fkN8BM",
    name: "BEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE",
    quoteLabel: "USDC"
  },
  {
    address: "DJ6YMbjrpaXxbDiEzW8ei8JjRaGYdLL38aiUtfpT5V1M",
    name: "HIPPO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HIPPO",
    quoteLabel: "USDC"
  },
  {
    address: "EieFKo9EjirAYbxiBu6gMdBJDjmo7AkTFUkprqBewB5M",
    name: "CAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAT",
    quoteLabel: "SOL"
  },
  {
    address: "CxjmfUwyVV87Np8Egu6pVSKMJAxnqp5EhGuE1Lb2NSkY",
    name: "CGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CGPT",
    quoteLabel: "USDC"
  },
  {
    address: "2DXqqpBY5oSaHRLYfPDG7dh3WHWfzBmt88WDGPFSMXF9",
    name: "STEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEP",
    quoteLabel: "USDC"
  },
  {
    address: "13BddzJQQW2hcP3gbmoBYiseGRuEMfuV4uGxrHHsrKAm",
    name: "GOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOL",
    quoteLabel: "USDC"
  },
  {
    address: "5HsmKjXrrkVhnP2xoFSyoHudLbYsmntE3N1Cc4VnF1HE",
    name: "AMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AMA",
    quoteLabel: "USDC"
  },
  {
    address: "3eF5ov5biiieKbMbf4xbrgAmmK6G275EBW863fY3RnRW",
    name: "TRTLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRTLE",
    quoteLabel: "USDC"
  },
  {
    address: "53QkTzxXUzS1EiDkJqAfiJkwkovzQM12snBRUEPNBkbS",
    name: "ID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ID",
    quoteLabel: "USDC"
  },
  {
    address: "4rSVQkSuxAjhsSamBpkefLdRrkhMevKvWEhkqtjJJTJv",
    name: "FATT/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FATT",
    quoteLabel: "Bonk"
  },
  {
    address: "FSAbUqUdAnsLBgQ1mVxpdzQQNFXGvqJqWxUFJ8TPp2WN",
    name: "MHL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MHL",
    quoteLabel: "USDC"
  },
  {
    address: "6gk5Ki44hLkDkDq3BDERhwBGNoHnoLG5vj9PmeWtJm57",
    name: "Sumo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sumo",
    quoteLabel: "USDC"
  },
  {
    address: "CkDV3rvFErzMhxaN8HwBJKvgbrWxnnPqX2aLMQc5wpiM",
    name: "SMoon/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMoon",
    quoteLabel: "SOL"
  },
  {
    address: "ALcQnW7jhwmbS4z18w96zJbTffYm4L3edASMDNKiedYW",
    name: "PLEX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLEX",
    quoteLabel: "USDC"
  },
  {
    address: "4Nepivifvx5b3pYo4KRQbzgucekyqTb5p7S8CLvW6dXy",
    name: "FOMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOMO",
    quoteLabel: "USDC"
  },
  {
    address: "C1TS1iAKh94uXjikLS6CSYg8MDeok1mGcp7YHgCLNRAe",
    name: "SOL/Nift",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Nift"
  },
  {
    address: "PUfFzHuiLFhiY4oAGM1dKdiwSpGeZEpsfGEnGzYb8rn",
    name: "p00g/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "p00g",
    quoteLabel: "USDC"
  },
  {
    address: "Bi8s6LwedHiFXJU8ysoDJzYMSxMJKLcY1dNnHmQX9fqA",
    name: "SOLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLE",
    quoteLabel: "USDC"
  },
  {
    address: "2EqWtZhGTF2EaFvFgBAJStupkBmkmrNRqmoSpX2mMDcQ",
    name: "TENDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TENDY",
    quoteLabel: "USDC"
  },
  {
    address: "4EppuzS4eM1Ex9zsiD96zTLB2CoHfZptoEw8QqGDKPqQ",
    name: "ROID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROID",
    quoteLabel: "USDC"
  },
  {
    address: "FVbkuKEvBBdis6xLx9o7SkYcN3vJHrMKojeL8ozo5u1Q",
    name: "PANDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PANDA",
    quoteLabel: "USDC"
  },
  {
    address: "GT4WepEtZwTD2zvd8QHQ2q4mcT9uWPj5ByXsUr8rPVTw",
    name: "BASE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BASE",
    quoteLabel: "USDC"
  },
  {
    address: "E9NFHgV37yARBzarBocmqHFgTGcbQ5h2y64yh5VGaRkH",
    name: "SCOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCOW",
    quoteLabel: "USDC"
  },
  {
    address: "FR38o97TeQReVD3BPrgeYs8Mc2bt8ms5p55CGrTj7sUf",
    name: "LaMDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LaMDA",
    quoteLabel: "USDC"
  },
  {
    address: "2XG7ucev5mv6nWnC8wA6hmvBtvCVJdNaRfwp2PugwWEn",
    name: "DOODS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOODS",
    quoteLabel: "USDC"
  },
  {
    address: "AWjKQWcpGUZfzEjKqDoSF1jdPAjq8kT2GBgDaKNYS9c2",
    name: "CHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHI",
    quoteLabel: "USDC"
  },
  {
    address: "BdCSKDyB9S2Ea8tem7VrYkcESecwAekECbwGwnyvWeDw",
    name: "SOL/JitoSOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "JitoSOL"
  },
  {
    address: "3rbLXN6ihweBJJjwPw6hC9Ah32kL6LBuUdujFf2RPaZX",
    name: "Whales/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Whales",
    quoteLabel: "USDC"
  },
  {
    address: "FeocJ2hGrw26ZxuGawBnh4JpD5QHRy1fS1o2bJWxqd5d",
    name: "SHIBC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBC",
    quoteLabel: "SOL"
  },
  {
    address: "67cKqc4ZZUBxhnvk5eb3WVj5SNZHLfT3yvM2bST22Gab",
    name: "HDOG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDOG",
    quoteLabel: "SOL"
  },
  {
    address: "3UUx6s2768z8qMW2UbiCMUxwgBq4Jvso2dwiBWzwctxW",
    name: "Boba/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Boba",
    quoteLabel: "USDC"
  },
  {
    address: "2BiXSBFaE7VWBbGU5cwSeCR4bQ8xksNv5Ce7Qm97ptbm",
    name: "bMONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bMONK",
    quoteLabel: "USDC"
  },
  {
    address: "Cojx3SBrvnFRGmoajH32poAqrMbqJ5MFxseywX2f1DUm",
    name: "EGEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EGEP",
    quoteLabel: "USDC"
  },
  {
    address: "3VTFeLhwpZzRuPJkWzoXfxcD2psnj4aiFiZRz2v515tP",
    name: "KTN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KTN",
    quoteLabel: "SOL"
  },
  {
    address: "9thDZZWpriuqL1vXv6JR28cRTk8iY28WeLASrrxhZkcF",
    name: "CORGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGE",
    quoteLabel: "SOL"
  },
  {
    address: "CvVWE8ia5vnSYv4HVNrgZQez7759L7L1Fo14Gry3VCne",
    name: "FROGC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGC",
    quoteLabel: "USDC"
  },
  {
    address: "8rswSv6zmSm26tuBACDD7m67wZGFgjFCZyaDugGwZ7ex",
    name: "PPI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPI",
    quoteLabel: "USDC"
  },
  {
    address: "AGEJrKYjn2zJBn45zXn24L79Tc1JBX5s9LJCvvmavvJx",
    name: "CALL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CALL",
    quoteLabel: "SOL"
  },
  {
    address: "763rXUrJT5TCPKXMuuYCzPAhVeNTRHVr1xYycr9gTZj2",
    name: "SATYR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SATYR",
    quoteLabel: "USDC"
  },
  {
    address: "BqARyGUFuCSuyYdH3KtEzF8qManifEUfVT7rv33dma1Y",
    name: "BRISE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRISE",
    quoteLabel: "USDC"
  },
  {
    address: "BXSvVsfHczgLW8jQVBShA6gGfeJGKBMe5AgRZjhvubd1",
    name: "HUMMUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUMMUS",
    quoteLabel: "USDC"
  },
  {
    address: "984G9upfTUk76rfaue94yCbUnDV7TRkeGCi82bRUpdyD",
    name: "TWEET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TWEET",
    quoteLabel: "USDC"
  },
  {
    address: "HkkZkUDNsyha2RainvN42bcvSwmrW5NvxjX2oD8mnre6",
    name: "BEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE",
    quoteLabel: "USDC"
  },
  {
    address: "D7GxwCU1haS7vw3fWCWBYn5MjdATNyra8VKcJsvLTQh",
    name: "SOLGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLGE",
    quoteLabel: "USDC"
  },
  {
    address: "8kE3z12NwsuPcawwgiiquCcwWAGX4LEPVgQs9sZ6ZvP",
    name: "HACHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHI",
    quoteLabel: "USDC"
  },
  {
    address: "G3vxcWUgSvXx6NYnhfQak7yooNpnLzUhT1UjsWsgss8d",
    name: "RRACE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RRACE",
    quoteLabel: "USDC"
  },
  {
    address: "FNiXApPzzhvsfXnJe77KMwhGAhg2gA4g8q2Ju7tSXCKr",
    name: "PMON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PMON",
    quoteLabel: "USDC"
  },
  {
    address: "7dHq2YpBdDFfwaGeyKsxzz8wc1XZKUj5ZpZq6QiHXmrq",
    name: "DOINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOINK",
    quoteLabel: "USDC"
  },
  {
    address: "F8FB5uRv2GNP4LaQxkneLtYEKiGXsQhJEjzYfa85YrYb",
    name: "Bonk/ARB",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "ARB"
  },
  {
    address: "GxJZRzKSQ4frbkXj4PjKDWyTycUSdJg9cyqq1p61Vygw",
    name: "CHES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHES",
    quoteLabel: "USDC"
  },
  {
    address: "4qxYSsEb1PZc6RyXhXhb85iEzw3pBVTST3sNb8o6o6QK",
    name: "DOBO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOBO",
    quoteLabel: "SOL"
  },
  {
    address: "6rtizwrrCrRMcRSrVoiauANAwY4BoVdopr3fo5q6GETu",
    name: "VEIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VEIT",
    quoteLabel: "USDC"
  },
  {
    address: "4UMw6QDDER4VnXBjYiD6FHnV2Fq4BS5MjLdiuKzUt3mW",
    name: "POLCE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POLCE",
    quoteLabel: "USDC"
  },
  {
    address: "BoimHePhLnhSQbdc7Z914wbFXiDRg1ibidkCfZZ3ffPq",
    name: "BAMB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAMB",
    quoteLabel: "USDC"
  },
  {
    address: "J5uQZLvPUskmQMkVRwumvYbgb8hHNF4vx7LEqzYsnk9N",
    name: "CLC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLC",
    quoteLabel: "USDC"
  },
  {
    address: "49cimASvjK3vSx6GWVPA8DnuSvZUcz9wjFHaGk5En5PX",
    name: "KINE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINE",
    quoteLabel: "USDC"
  },
  {
    address: "DXWzygwKsw6Ufna5ZpWCYGv23vphV5doZ8eGJGx3xdWA",
    name: "DONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONK",
    quoteLabel: "SOL"
  },
  {
    address: "CYFVuoT6iB9QbFtQkQQriXhEPKF5mPrB6rT7tctfMV83",
    name: "GREG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GREG",
    quoteLabel: "USDC"
  },
  {
    address: "3HGbsjhDwoHf4JNp8Z5GcgbVex98s1BSFEjSMrhzbEmh",
    name: "MDAO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MDAO",
    quoteLabel: "SOL"
  },
  {
    address: "8vuWpPV1HwT8opzZWoDMiSpD66wqxuTGSNVQvyP5ag7W",
    name: "CHIPFUNK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIPFUNK",
    quoteLabel: "SOL"
  },
  {
    address: "GNR954CVdzx5ELqP2TYT21yWKdXrrpGRFKRXW5twdau5",
    name: "USDC/ATC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "ATC"
  },
  {
    address: "Eh7a8jv9zbqJdERZBJzX7TMXJNLtfXzBZvnU2BK1odeS",
    name: "GOLDEN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOLDEN",
    quoteLabel: "SOL"
  },
  {
    address: "HzoTGbcEAZaT5cQpAVQx68A8KtESX6BiQGbMMFHv3eZt",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "8n61WM5B3PsSLQRwfzcUveiY1RGeLFruBrmzGPYYN2tn",
    name: "COPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "USDC"
  },
  {
    address: "6V6G9f6eSMAwmjVfhaVgRcPzzmf2mYLyPCLL9nUQLKRC",
    name: "YAKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YAKU",
    quoteLabel: "USDC"
  },
  {
    address: "8r15m29f9fAaRgfCSMvxjJqcwbhvXzSSx37sodacjxVV",
    name: "HENO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HENO",
    quoteLabel: "USDC"
  },
  {
    address: "4UyVFEL7Vw2Pw97NahQKCXiog3G5zyTnyPsqE8dxmGus",
    name: "DOGES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGES",
    quoteLabel: "USDC"
  },
  {
    address: "DuuVumzNWtoLu3hYi2rBPSG4noBR8dWKjV8LaVwx6qeG",
    name: "CABAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CABAL",
    quoteLabel: "USDC"
  },
  {
    address: "DvRmQYbX6yKeDCyevqKKih61nuzQ9Y2mGwroC5R5fyyQ",
    name: "FRKm/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRKm",
    quoteLabel: "SOL"
  },
  {
    address: "8kPvfsovsnXt1bDmE1ZvjJhyciX1YPN8mV4pFjT1hRqM",
    name: "FECAS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FECAS",
    quoteLabel: "USDC"
  },
  {
    address: "D9HHi2voJAYT7V7rnAhdCL5fXeHPLFQWSKWGNXV5MkqR",
    name: "LORDR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LORDR",
    quoteLabel: "USDC"
  },
  {
    address: "CbFzQeTUDikVz8i45JkrdEFnVkL4xu9KPqeFBd34nX4U",
    name: "STC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STC",
    quoteLabel: "USDC"
  },
  {
    address: "GDJhcYUTGPjmSojtxrV95dCm88VicGXJAke3e88GV9RD",
    name: "MOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOON",
    quoteLabel: "USDC"
  },
  {
    address: "7z7giw6nkkjjJXwbRNay1jMoeb3budBXfP46HXWu9t8a",
    name: "Skita/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Skita",
    quoteLabel: "SOL"
  },
  {
    address: "Dm6aZ6VVsh9F7FYxFVt4EvLR1jxWH2DPgxPQuFSyEnfc",
    name: "Otter/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Otter",
    quoteLabel: "USDC"
  },
  {
    address: "8iCru5Q3tS2sXfmaHcd7YNXhXqbSvsCfZtwC2VVWdBPX",
    name: "DoKEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DoKEN",
    quoteLabel: "USDC"
  },
  {
    address: "AwF9piRsdR7v9nHrtManigSgEi9eHkn11gWAr12SR6Nj",
    name: "EPCT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EPCT",
    quoteLabel: "SOL"
  },
  {
    address: "DpTnNCnRRrwZUQBjbBYjd2eGAfVx85kGa9w1dA5G49hA",
    name: "Noid/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Noid",
    quoteLabel: "SOL"
  },
  {
    address: "6RPsb9xcfr54pxzFRS9EGm2PE1htZtsfiHQpTjbextL5",
    name: "CHIPS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIPS",
    quoteLabel: "SOL"
  },
  {
    address: "3fGM8vSNBA28rKiEc1hMKX34kbrKmhM9qZjEyzdPFfM3",
    name: "POLIS/ATLAS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POLIS",
    quoteLabel: "ATLAS"
  },
  {
    address: "AxwVFCX8Jv1RnL6BDtatFveTxPruWFaVbg3tQgWH8DAB",
    name: "YANI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YANI",
    quoteLabel: "USDC"
  },
  {
    address: "4PoVX8qA5Mnsq8W2YS4mUf4ZxPtW4urD36jU2zcLpJX4",
    name: "SOL/JSONC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "JSONC"
  },
  {
    address: "GUx7gFdg3RFGUupoEf11S5thgAwV4P47G1wndqeFxc7C",
    name: "KOALA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOALA",
    quoteLabel: "SOL"
  },
  {
    address: "74eZVfovKS87RJDTjuEq9tXp64BMcUdb1g5DkzUGYvoZ",
    name: "MBonk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MBonk",
    quoteLabel: "SOL"
  },
  {
    address: "E2ixpvrrB7hw4Zj3AZye4cUvAUpgwJwg78ooz4CSHSJz",
    name: "HACHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHI",
    quoteLabel: "USDC"
  },
  {
    address: "DtZsUAKQcogffPjvq1JAGC9oH1C4qCBoAUxiFL2tu39n",
    name: "SFB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFB",
    quoteLabel: "USDC"
  },
  {
    address: "EJf5eXqQ9XLhzcYycyMNHvyoUbzuo2tc9KfrZbbysi4Y",
    name: "DOGONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGONK",
    quoteLabel: "USDC"
  },
  {
    address: "FFXPVcqToUr2jwaxaQopQz1yZNHPx5BQX2nr7EFd3o3F",
    name: "SOPUS/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOPUS",
    quoteLabel: "Bonk"
  },
  {
    address: "3hYjwi6KgQEPtugncGg2YH4BUV4jhMPDSXotn1R2Hj1Z",
    name: "SRY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRY",
    quoteLabel: "SOL"
  },
  {
    address: "FcUm6AcrJErxiMUHsk6my6U8qkXNx477BvMjm1R16UnK",
    name: "JADE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JADE",
    quoteLabel: "SOL"
  },
  {
    address: "7KoiUQRtG6N6coXLmLFtM3HkMXjbJ8z1ztJNPCjkTN3s",
    name: "DOGGO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "SOL"
  },
  {
    address: "7q6uLjSPK6fohSqfpM5zP9QygZBopnctit1q6GxpLCwY",
    name: "SAFE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFE",
    quoteLabel: "USDC"
  },
  {
    address: "CWQ6zbW74X7iPJKaWzwY1y5uzWxLjB2Lngz7fCVz7WaK",
    name: "BEE /SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE ",
    quoteLabel: "SOL"
  },
  {
    address: "EBkw6aYvEtnmQFr7j2jAuSCNUX9Y2d8hyX2VFwmn2QjX",
    name: "LPM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LPM",
    quoteLabel: "USDC"
  },
  {
    address: "Fq2WkvtRGfsKJSZbakBkx92d5sBZnUUtAPSBW4rmShvw",
    name: "FSBF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FSBF",
    quoteLabel: "USDC"
  },
  {
    address: "BNjk4zAafboqxjoBfL5RahmnAXZGm6xZn2c34pz7iYCw",
    name: "MTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTC",
    quoteLabel: "USDC"
  },
  {
    address: "E5kvpQ3V2EEeJXobufVpwqMfjV83ZBrosjvfRcBCK4e7",
    name: "SCORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCORG",
    quoteLabel: "SOL"
  },
  {
    address: "A9j5BgFJMfg85xQqEEBasm2G269ydxxb4tYBKCTNFoNu",
    name: "UHC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UHC",
    quoteLabel: "USDC"
  },
  {
    address: "7ykPkTWQzztMGyg3AXWqAYEiDdxqMZxqWhQwYcM2GmcA",
    name: "AXXO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AXXO",
    quoteLabel: "SOL"
  },
  {
    address: "CDBJRrcCWWLE1Hyu92Rzo1L76B4ngNxcizrWsnjuTKFt",
    name: "GOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOT",
    quoteLabel: "USDC"
  },
  {
    address: "31TPFWGY4E6rJheeKRCVd5CSdCBc781GpwT8HXw8Qdcf",
    name: "CHONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHONK",
    quoteLabel: "USDC"
  },
  {
    address: "MUBRyqQytpUgvmdgyT8ygcmdcdfM7J1Q9YgcpyLXuyb",
    name: "ONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ONE",
    quoteLabel: "USDC"
  },
  {
    address: "3RmDYyR1pNJRkqA2hEPhLAmd8vrmtLdNSiDyDZwA5xvZ",
    name: "ARB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARB",
    quoteLabel: "USDC"
  },
  {
    address: "4cYZRvT4SWHqqLwUu4vCPGbSM2FAgxyhg6XAuY7cBYYy",
    name: "CATS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATS",
    quoteLabel: "USDC"
  },
  {
    address: "CUk1MEGo9ivAj8DF1hrRt57B1AZst1tMupn7tD3ZAxp2",
    name: "DBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "SOL"
  },
  {
    address: "48qptVuKHV8p5SHjLdgQU6zyux1pqJat1mmsYjdh6WnC",
    name: "CASH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CASH",
    quoteLabel: "USDC"
  },
  {
    address: "H2mc9PZeAEpKftq8P4wtBZKjGX7KELmvYeFmQPz9uf4i",
    name: "Chip/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Chip",
    quoteLabel: "USDC"
  },
  {
    address: "AFCvNNwFHUiBQNujLSqD4rULDMYatJWB1XzyXbfXZtTm",
    name: "TENDER/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TENDER",
    quoteLabel: "SOL"
  },
  {
    address: "3es78MaVMSNX2YXNtbaZsHk4dJTptaijbgEa35xYff5t",
    name: "FNR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FNR",
    quoteLabel: "USDC"
  },
  {
    address: "7Ai1VizGoESxmQT4urWgKTBNQ5Hw5JTMYUhtuXwq6QUU",
    name: "SHIBS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBS",
    quoteLabel: "USDC"
  },
  {
    address: "Hr5TeZF1omMmkgpjKKoPe6cRx2BkbxQbMosi5BUFgCUN",
    name: "SUPERD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUPERD",
    quoteLabel: "USDC"
  },
  {
    address: "FCgPmJ9HgaxF5NPzau3k36ZHseom8ZFNwpkVfj1LSTFu",
    name: "KONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "USDC"
  },
  {
    address: "4QPnPrUGeCvd8MyyXRErWWKCRNrd3ZcJHdqPFkLkPKHT",
    name: "USDC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "USDC"
  },
  {
    address: "DgGiANLfcnH6ZVabrkStecWAR45sGdbnP71mPQwjtVbp",
    name: "MYPLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MYPLY",
    quoteLabel: "USDC"
  },
  {
    address: "7faRR4ttNz3h3VYahPsjMFSrTU3b4GhCCf9HkD5Fyw7o",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "35Suvyg44yGefxx2piohqZq7qKmUm9qEqLBzHvxSC1q8",
    name: "FSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FSOL",
    quoteLabel: "USDC"
  },
  {
    address: "5AFQdVXP5ihyVTToTzv4HFBhbrjun8tG5JY9zmDe7WGL",
    name: "LAMBO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAMBO",
    quoteLabel: "USDC"
  },
  {
    address: "EcLhqTkadFR96ZqVq1S7PRpG6Z5ZST8HwUdFf9AFVVdn",
    name: "TOSHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOSHI",
    quoteLabel: "USDC"
  },
  {
    address: "Hkz2arxWwr4BTc6SFnM5gV1T6XQduoSEzLg2ELkw8ip9",
    name: "PIGT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIGT",
    quoteLabel: "USDC"
  },
  {
    address: "2M64HpZqJHfQ8oKZkqJEPnFdo3MUFcn19cTn19ksMfwH",
    name: "ROPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROPE",
    quoteLabel: "USDC"
  },
  {
    address: "8Aa28kg6SumMAxPXyoxAfmj337bC1kGQooSTyWbqovfs",
    name: "TENU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TENU",
    quoteLabel: "SOL"
  },
  {
    address: "DoHB9AAT9o83NyTimdWSrBCu2gcXcxZHytCMDjAhkgYN",
    name: "CORGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGE",
    quoteLabel: "USDC"
  },
  {
    address: "AwBvPqSyoBDFcHTegnSfa9RLnTUkiwZ27HcRv4hJ6jmh",
    name: "USDC/CRYPT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CRYPT"
  },
  {
    address: "GEY8TT7r9ivQgiJp3uhpLRivSQZYJbg9APJ1EbQKcNMT",
    name: "CAKES/EGGS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKES",
    quoteLabel: "EGGS"
  },
  {
    address: "8ejieFRpvJQyDDYqBcUewtrycXTug59o6TzSkzcnNML",
    name: "CLO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLO",
    quoteLabel: "USDC"
  },
  {
    address: "4aLRqa3cteYtkgRp6cqHjwXkRAgtCUnFDGZS3hAFWBKd",
    name: "SMOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOON",
    quoteLabel: "SOL"
  },
  {
    address: "FLUDeyzndHSBJPC5a4HdadH6w5rnxLXPLqPPXMx6FUrt",
    name: "CR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CR",
    quoteLabel: "USDC"
  },
  {
    address: "HZYCRAKVpC2M6o88W2MNJoLvayMuEeyashcjkhwJwbce",
    name: "Fronk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "SOL"
  },
  {
    address: "An78zoSz1aLycAEtn9GevCJLMU6ir6MGFKJxWbyFxc5Y",
    name: "GARI2/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GARI2",
    quoteLabel: "USDC"
  },
  {
    address: "26fv2J8NB9UQRuz2pUYJFAvbhhB68gg5ou89kCS84BwR",
    name: "SOL/tests",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "tests"
  },
  {
    address: "4ZeCQsvgJ9LzRoMKMV3sQ8KHKPDYwzHg2DCYfsBeuHCu",
    name: "SBeast/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBeast",
    quoteLabel: "USDC"
  },
  {
    address: "12kzbJFyCT2wEuroibSHzEWUN8mTQsBhC2FDq2HXsK2c",
    name: "CAPY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAPY",
    quoteLabel: "SOL"
  },
  {
    address: "3BweHLxpVtkouTLSrqjmaCNyrjSRjjWAnRxsfZ3T7bcW",
    name: "TSTS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TSTS",
    quoteLabel: "USDC"
  },
  {
    address: "DQ31gWBUf1dDgwJrNVPxdNLZMTmNJ3dWikvSGFkyQ6dt",
    name: "Fbonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fbonk",
    quoteLabel: "USDC"
  },
  {
    address: "3YqQqt5uFZWS6rBzRdMcc61ae9UPxB8Vq65uJAWXg5kt",
    name: "Shiko/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Shiko",
    quoteLabel: "USDC"
  },
  {
    address: "EYe9Qtig9UKRrLCjdmbi7GnWyAX3UW4zsfVNSZWGKVZi",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "2pzTD2eRWcT5wjCJg1TkEsJ2RuT436PdBqfFFaeJRxYP",
    name: "BOBARA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOBARA",
    quoteLabel: "SOL"
  },
  {
    address: "FV8LpuqE8YsJZu87KDXWuadznNDQtFDwUqAKwjFMNjY8",
    name: "BINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BINK",
    quoteLabel: "USDC"
  },
  {
    address: "6DJoxfmbwJYXAZLqN7k4q2j1ybrQ5NSBWKMdk6NCxwKC",
    name: "Pug/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pug",
    quoteLabel: "SOL"
  },
  {
    address: "FnKKuP4XJNWrdb6Ki28j3eQkK6gMosyPetvgVkLELwHm",
    name: "INJ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INJ",
    quoteLabel: "USDC"
  },
  {
    address: "2KT5WhXiBQK2GMUaEtywfTcy7czjmVwiFyp2oSARKYcq",
    name: "FREE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FREE",
    quoteLabel: "USDC"
  },
  {
    address: "3711dVJ928FibJQXeG2ik18AYUAuS2BcbpF85Rjz5afh",
    name: "uBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "uBONK",
    quoteLabel: "USDC"
  },
  {
    address: "fJzvfHUND5qfrYf2B1Y4RavjFmQUhjTkPeqHruefnas",
    name: "PPEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPEPE",
    quoteLabel: "SOL"
  },
  {
    address: "3V6AS164iAf7SyY1hmjuhGZK74w514WUgdZSwiKbdLcA",
    name: "TURD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TURD",
    quoteLabel: "SOL"
  },
  {
    address: "FMzYnEGsEwGgVdYzTg64o6K2JCMqxZZkYLgK1spDeinT",
    name: "MU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MU",
    quoteLabel: "USDC"
  },
  {
    address: "BXUwZwWoTK863z7oUaCzdCL7stsmJUZJNLhpT964TcEc",
    name: "DGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGR",
    quoteLabel: "USDC"
  },
  {
    address: "C5Tqxs5uRdHqmKozu5Yg6U2jiHGdEi511JWSwRtg4VNv",
    name: "SOL/CHAD",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "CHAD"
  },
  {
    address: "41UveKwaifuJBdCWA5yUykRRiKAnpWCbptYrwM2DSEFq",
    name: "PIPAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIPAL",
    quoteLabel: "USDC"
  },
  {
    address: "J2xc6HMNMs49nMb8Nz1dX8S9BoBKU1npzVSqVygfczBZ",
    name: "JEWEL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JEWEL",
    quoteLabel: "USDC"
  },
  {
    address: "BdNSD6oPv7Jsu1bzmUcToGSWK2S2AinMt8xCxaTk3jfj",
    name: "CHICO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHICO",
    quoteLabel: "USDC"
  },
  {
    address: "HvwQcPD7cAAS4xXMe4BrdBkbznR1oCcTqHYDQkyrvecb",
    name: "CABAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CABAL",
    quoteLabel: "USDC"
  },
  {
    address: "GxY8NJYdCVQx11XKeyGMhsZbrotNBrskLEsxpPkYeimV",
    name: "BKT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BKT",
    quoteLabel: "USDC"
  },
  {
    address: "3WbWHw8shSZZ4MZBXk58fCvZUEwAdFHcbKGbT63Yr4om",
    name: "WEED/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WEED",
    quoteLabel: "SOL"
  },
  {
    address: "HBfCmAEWjXDLueAZpJ6P5zz3BNgvj5Rzy9eq58oPMNw8",
    name: "SEAL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SEAL",
    quoteLabel: "SOL"
  },
  {
    address: "JAb2HkX3T7yhXEWmxRNWy7CSCtmmj5pX5NQXNZmoS5KX",
    name: "USDC/BOZO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "BOZO"
  },
  {
    address: "ArVKZUJbdPsxGWwAuDB2J8gaYXvBDCDaqsy2ASZszpjf",
    name: "WOOF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOF",
    quoteLabel: "USDC"
  },
  {
    address: "7b3sB1sv9mv8vmCgMjPaRPAN98neereN7o1J9E4LTpw3",
    name: "USDT/SolDoge",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDT",
    quoteLabel: "SolDoge"
  },
  {
    address: "7uqSYgR2dcgYJymEkRwBMQgiss4ysAEbezbpSaUA1o6E",
    name: "AGXAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGXAI",
    quoteLabel: "SOL"
  },
  {
    address: "ATBkSy1KQMfF8dSpJaC19jmiVswHdARsKxhpZBdiNcvM",
    name: "CPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "HFBojZvd5cHUn8QroSTEPQoKbvvt7Q2qDiY75rvk65Wr",
    name: "GMSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GMSOL",
    quoteLabel: "USDC"
  },
  {
    address: "CiE2wuwsTfwQV3KxXGTt7ELC1savR86hWb2mwf2eVinJ",
    name: "KIBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIBA",
    quoteLabel: "USDC"
  },
  {
    address: "J5WY8prBZZhXKgJt9Ez4fHFvpvF9iCph1UKqUsTqhP5e",
    name: "APECH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APECH",
    quoteLabel: "SOL"
  },
  {
    address: "FQaDaRidc7Ne58UkBQX54BbMBVmeE5XLvPPks5BDdwX1",
    name: "SPICY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPICY",
    quoteLabel: "USDC"
  },
  {
    address: "9np9fT1zwBhvYMKQezLqVEEZV5iTFpwUPXm3BxyAm77m",
    name: "SHEEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEEP",
    quoteLabel: "USDC"
  },
  {
    address: "GgHWL4ETqE7LTjko4RMh6Gz2Jxi7SKwYJzsG62sjJefh",
    name: "CRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "USDC"
  },
  {
    address: "C7GmNX71eyqy9sX9SwQgXV9ffKQmHePAdtF4toxN9yVQ",
    name: "PICO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PICO",
    quoteLabel: "USDC"
  },
  {
    address: "9hkSgXSzxAdyyLUCSKvq6KhZPrFyE2H9BdcozfWiDFbM",
    name: "PINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINK",
    quoteLabel: "USDC"
  },
  {
    address: "BNnz7Z4FyyryE7Afz6u7jxbqRDtmntCzYkd791kEosSc",
    name: "FISHD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FISHD",
    quoteLabel: "USDC"
  },
  {
    address: "Akwc3FjrZc6UpwRb9sQhVh9TkwsdP4XgPxdkJ3eDcR5W",
    name: "ACTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ACTC",
    quoteLabel: "USDC"
  },
  {
    address: "5y11T8wqx9Cqsa1Ait8kpTEDMXrXZR5AYSCZHNjcFLzb",
    name: "SAX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAX",
    quoteLabel: "USDC"
  },
  {
    address: "GmJuBtEgEMQb7PGfvQQfFdL1wMvUreZoeTaEzCUHQKAb",
    name: "sBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sBonk",
    quoteLabel: "USDC"
  },
  {
    address: "67kYi6ZtsWjpD41jpRCRbqE4q2Dy4dSzrxrhXtETC9YU",
    name: "SOL/AIART",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "AIART"
  },
  {
    address: "87ZWM2BxZkkUXXgd5vFvGgNG5GnyiLQnSiAwESyBF4DM",
    name: "KINE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINE",
    quoteLabel: "USDC"
  },
  {
    address: "7DFRxdEyg9Ma9Q4vLUPLdtH1pw25pEDFmPJpmh5HKQvA",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "88mHiYFtVtGFafz1nbc1X3AsEYTHDJSTXWofrPRHQ7av",
    name: "O5O/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "O5O",
    quoteLabel: "SOL"
  },
  {
    address: "AE4XnBpx1sDsoXnPh8wzLyRRyPckdfpXumkqx5nEuy6x",
    name: "PHUND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PHUND",
    quoteLabel: "USDC"
  },
  {
    address: "8jMtoG1VLGaKMpVgrcZSzpsX26kPV4kCws2GbmSve8aa",
    name: "FOXY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXY",
    quoteLabel: "USDC"
  },
  {
    address: "418xe1EYfS1HXB7nGYKwi89rPLeeT9gwqfY75mvYkb99",
    name: "SONIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SONIC",
    quoteLabel: "USDC"
  },
  {
    address: "4qD2mzuWB8H4JMkQ2MDsWyvufssTXxdem161hMhKhyF9",
    name: "SOL/NPC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "NPC"
  },
  {
    address: "9rciFSatrU7Vdp3pLZkXiwvmbmMQCtnBspckMqJ4Aswj",
    name: "PIZZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIZZA",
    quoteLabel: "USDC"
  },
  {
    address: "CeF5WB2THKjrbrFx73179muZCXFfdh1fY4CXZfdYverr",
    name: "Antichili/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Antichili",
    quoteLabel: "USDT"
  },
  {
    address: "3wfLJmweUf17k64sAYaaxNrrHpGzPMQ4BFkX6ArFCwVe",
    name: "PLATO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLATO",
    quoteLabel: "USDC"
  },
  {
    address: "4ZccwksFYKznq8hsnXJ4W5TnFYJ4c5W7GmML5ra73rto",
    name: "UNVS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UNVS",
    quoteLabel: "USDC"
  },
  {
    address: "ArpwFM6Nm72g4ysrDho2vjtfC4ftYaqh51zuegUNM2Bx",
    name: "BAGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAGS",
    quoteLabel: "USDC"
  },
  {
    address: "FATzA7DZAJUWbmeweLcGs2M4NmEiazoKUhWNySY6rViA",
    name: "PETS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PETS",
    quoteLabel: "SOL"
  },
  {
    address: "AcL9AUPf1YqGppTgChcJDsTC1R7iX5mLLo5iio9V5pAQ",
    name: "RUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUFF",
    quoteLabel: "USDC"
  },
  {
    address: "EGhPqm6kxKNSMyHdW4jp4BsjzabPUF6B6CksCX42sSYW",
    name: "MNKEY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNKEY",
    quoteLabel: "USDC"
  },
  {
    address: "4zTMo3TxJKgdmy7WGmrL8r894mYMPTbcGZ5D6CTaUU9p",
    name: "DOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGE",
    quoteLabel: "USDC"
  },
  {
    address: "5nbUNKcCCJQJJL2KAVMCJ55PqtD91pti3z98FCVFRjXy",
    name: "CHAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHAD",
    quoteLabel: "USDC"
  },
  {
    address: "C1KZpHvWRNa6k8U4GuJvx8U5dc2JYg7J45NB7uPsCCKD",
    name: "SSVB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSVB",
    quoteLabel: "USDC"
  },
  {
    address: "3zYTbMarfV92fKiEv7tSSMJT22jcbnqZheux38iZZPSU",
    name: "RINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RINU",
    quoteLabel: "USDC"
  },
  {
    address: "8MBGjoXczZhLys3MAehNu3j7J796zRTLKE1V2Xjz71PP",
    name: "DRB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRB",
    quoteLabel: "USDC"
  },
  {
    address: "JDuF657Ggy7rdVZfAkTRzXnKiNMgZM763gsi16yzhBcp",
    name: "SUSHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUSHI",
    quoteLabel: "USDC"
  },
  {
    address: "7u3ArCvbHqKRaAqCBa8b47bHnA43Qxy2G5PL7AXDHgbK",
    name: "BANGZ/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGZ",
    quoteLabel: "RAY"
  },
  {
    address: "Ckh2E3FdDxBjwNM7WUCApHtFaRoeBsHpQJHKuqps3ekU",
    name: "MOUSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOUSE",
    quoteLabel: "USDC"
  },
  {
    address: "3HVFdkGoaWZPijn9Q95K77pXF9U6M8wFZGDbMByduFCT",
    name: "BONKERS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKERS",
    quoteLabel: "USDC"
  },
  {
    address: "BnGrEE67t19PkAgNMwsu7hn8mXMUAVGbmC7zmnAm9VAi",
    name: "FOMC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOMC",
    quoteLabel: "USDC"
  },
  {
    address: "Fp1M7iffMh1wR8x5n7gfR4wVmKFo7dShq6h4nU1Q6Vjy",
    name: "LADB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LADB",
    quoteLabel: "USDC"
  },
  {
    address: "Giv9CP6C7PYD53ZTtNSDbe8hKXwPp4LR54faMbH94Wr3",
    name: "SBonk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBonk",
    quoteLabel: "SOL"
  },
  {
    address: "HWxL2eaLJFaqA9T4izP9tHWsNv1FtdoJvCbYTyTbN6N9",
    name: "MOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOON",
    quoteLabel: "USDC"
  },
  {
    address: "BY1TiC76E2BMSenktrb9oWRg5yfGxRCrcMNfDjKjpZBc",
    name: "BAGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAGS",
    quoteLabel: "USDC"
  },
  {
    address: "HMLrUFXY1huuUP3Fy4yfZL8Y7aiE12fJeUbyv4gxA9jf",
    name: "SRAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRAT",
    quoteLabel: "SOL"
  },
  {
    address: "31kiGzojBx1PSB5M1Y8BGYM6i4nViXV7tx49CyxcetAM",
    name: "CATMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATMO",
    quoteLabel: "USDC"
  },
  {
    address: "A8B6MfYxmGCreT9NbyMrYD4P9bGmponj9GSg5QZvCWF9",
    name: "BONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONE",
    quoteLabel: "USDC"
  },
  {
    address: "GBBgoLYoAWedYrnfusUF9eprAwc5VqcXYoaRGVVtwQKp",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "67oWpw2XLUiYMm97L3h15VaYTPZbhdYBxo8CDJ5dnq3n",
    name: "EVER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EVER",
    quoteLabel: "USDC"
  },
  {
    address: "AqAFmZTakt9n1wruHJDexYAQN21hQSy1igKeCxg3k46y",
    name: "BEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE",
    quoteLabel: "USDC"
  },
  {
    address: "HLi2Ttar2JNg4jzqDF7MrGNKp3KyNBxpUryDrZ8E7S8Z",
    name: "PLP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLP",
    quoteLabel: "USDC"
  },
  {
    address: "Ezpp1rcGHsdiqjWaVwLH121cGyi5MccmDombsXnGBYgF",
    name: "SUN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUN",
    quoteLabel: "SOL"
  },
  {
    address: "5Fe7ZXxzdYmBp41XWN9gzqcrpDB2syCgJmhBAt2YFJFz",
    name: "MOETA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOETA",
    quoteLabel: "USDC"
  },
  {
    address: "8RRE3p57wbAdJgvLYywBPoqUdghZVoUnRqCZvn6D3j1o",
    name: "BUNNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNNY",
    quoteLabel: "USDC"
  },
  {
    address: "JJQi3dh5XuWYZwXA6DAm5CEpGYLKH6ARWozbKZSQKNf",
    name: "SHIBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBA",
    quoteLabel: "SOL"
  },
  {
    address: "3UsDtDoy72KPsEH5rnYaKq3oUvCHPBpvSsGdWjairKnG",
    name: "SOLKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLKA",
    quoteLabel: "USDC"
  },
  {
    address: "7gBnzDfXtuxAsEUfi9xqXvZPGs4KcQvfSd7DoKBtWDrW",
    name: "MEOW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEOW",
    quoteLabel: "SOL"
  },
  {
    address: "9i3BWgWstQ2muHwuwGPDizjJvp7VvDzjeszoYM7D1zv1",
    name: "BREAD/Fronk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BREAD",
    quoteLabel: "Fronk"
  },
  {
    address: "AWyuaKfCHLKsPsUsVFbLTkVZz8fRk5EhkL1iFEpnoURy",
    name: "SNUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNUFF",
    quoteLabel: "USDC"
  },
  {
    address: "7HB6cBqcU5zektTJskntGGjjVbePMuZXuTeQyuLW8NRH",
    name: "CMYK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMYK",
    quoteLabel: "USDC"
  },
  {
    address: "CrCRTb8tfo98jwVb9QRUrCdJM91z5dGcAds4tTgEPbdr",
    name: "TOHOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOHOT",
    quoteLabel: "USDC"
  },
  {
    address: "FpeAHTyWK7ZP1RDYrYiX1H5ZLo8QE1QvqWybAwCMZdZd",
    name: "OGRE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OGRE",
    quoteLabel: "USDC"
  },
  {
    address: "2S8yKcYCeUK3E4k4SnULMofpRdbAUW1ZdkS6tzKheHQg",
    name: "KOALA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOALA",
    quoteLabel: "USDC"
  },
  {
    address: "GHQSP48YfEnA51DQTWoeogU6JV9o7p7jwiFEVn8prkQg",
    name: " /SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: " ",
    quoteLabel: "SOL"
  },
  {
    address: "827cQbHghockKNYf3xSvQxR9QGxYULv1SA2vDMzbuR5w",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "CNFJFKDKE1kAgZBk51rpzWuJ9ZbmZi9KELc3MYmDj6b8",
    name: "CLAVELL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLAVELL",
    quoteLabel: "SOL"
  },
  {
    address: "97JhooN5Z8EPdyMB3uc7sVB8zQrhF5ZmAKXgYBpXkjRF",
    name: "USDC/SOL1",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOL1"
  },
  {
    address: "4bDs4GK1SZm8GYQ2tjQTirVAKBK4kpXeAymBbN1SEsNT",
    name: "BATI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BATI",
    quoteLabel: "USDC"
  },
  {
    address: "Fa8X48Q194abAaVg1NVwbY5QX43iwG1KRrbPRnjyZvfb",
    name: "SBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "SOL"
  },
  {
    address: "5ovigDiXss8QWHmx9tPKGv1kkEHroyNqXQytyaVbbM4d",
    name: "BUMPP/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUMPP",
    quoteLabel: "Bonk"
  },
  {
    address: "2VjV57DW59AKiHu4AGw2VprcQP1Lws1emYbuoNF3DCYG",
    name: "CBOOK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBOOK",
    quoteLabel: "USDC"
  },
  {
    address: "6qab7XJB1r7tmwJ8q6QGCf6jL1f1NBvbjH3NRRVcEWo5",
    name: "Troll/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Troll",
    quoteLabel: "USDC"
  },
  {
    address: "BUpCCzdawwgVieDrzXRsziq61L9C3KDP3uX6f4WBpMhz",
    name: "MEMES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEMES",
    quoteLabel: "USDC"
  },
  {
    address: "AVWtTzK9xXZHmyj8DBynBLayVf9PZP2weSdLYRpTTXUM",
    name: "OAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OAI",
    quoteLabel: "USDC"
  },
  {
    address: "7LxQ4Qf9rDwjDD1Ga21a7wN8bCa78kaAwEjQYjDSi9op",
    name: "CINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CINU",
    quoteLabel: "USDC"
  },
  {
    address: "9ctJafftNKbfgFL6xTXkrYngXAvyKunXAnKjaCwx7gBQ",
    name: "PBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBONK",
    quoteLabel: "USDC"
  },
  {
    address: "97TVxGVJ963Nh8kRsxqNCYrqKBoRmLSE1S9DYrDhRLfZ",
    name: "SOLAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAI",
    quoteLabel: "SOL"
  },
  {
    address: "6PGoLSzN4SWZPaNgFD7MmAYSmebdda1t2y6vGwungtxa",
    name: "WGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WGPT",
    quoteLabel: "USDC"
  },
  {
    address: "48Y4tjBu5iKJHuyvVG69txwCFB5QcZ4GFVHzDwj25m7g",
    name: "PUDEL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUDEL",
    quoteLabel: "SOL"
  },
  {
    address: "8a1nArBCySvwHs1nfrG4tt88JcTLvsbJzteyyzSzZY2w",
    name: "CMC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMC",
    quoteLabel: "USDC"
  },
  {
    address: "Af1MTJz9fuN1ZrdLzLN31LrnRBsm3xc2tcgD5EtWyTS7",
    name: "PUNKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUNKY",
    quoteLabel: "USDC"
  },
  {
    address: "5Xu4RP4HRjf6MjL5Fwmomo23Rq9XnTwMgpC1CJ8ZUQCr",
    name: "DGHUA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGHUA",
    quoteLabel: "USDC"
  },
  {
    address: "ChxLK3o3AG5Qpnx8i7SpzqKgyAHZYvGhZpECJo2UUo1E",
    name: "DUCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCK",
    quoteLabel: "SOL"
  },
  {
    address: "B421PnS1m8uiik7ryu1w6MXQD66KKq8agvb4mfqKGfgQ",
    name: "USDT/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDT",
    quoteLabel: "USDT"
  },
  {
    address: "5LLMbjsz16VWxerxmTsK9PQBGQaXnrE3J8gyDgirRUQ2",
    name: "USDT/sXEN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDT",
    quoteLabel: "sXEN"
  },
  {
    address: "8KGMkn8PTUnAbLW7Ugfx5BVbfB1g6gTr3AcGNTp4dVew",
    name: "SFotd/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFotd",
    quoteLabel: "SOL"
  },
  {
    address: "EpRh81thgLwvdp1H4HJYknF98GUgcid1EGaJfh76Ykfv",
    name: "EQ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EQ",
    quoteLabel: "USDC"
  },
  {
    address: "3n4vRH7iDRqn3aShu6YGtaex27af4kn6WSbxXgLgLf9f",
    name: "KIWI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIWI",
    quoteLabel: "USDC"
  },
  {
    address: "3QLrNG2cWEy2vfvk5c9q1RtbWhxA7mS7PSsXZe2QTwqf",
    name: "MGST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MGST",
    quoteLabel: "SOL"
  },
  {
    address: "9btHGeUw4iwMbJfT1rTRCg2EHjdm5cN7Z76nZLNvjsrd",
    name: "SGDR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGDR",
    quoteLabel: "USDC"
  },
  {
    address: "DfjHirjswiDAnsmb9D8Cmnibe4DTyMCvdBbH75NYDi1F",
    name: "DUST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUST",
    quoteLabel: "SOL"
  },
  {
    address: "81TQU77RhTvnGgEVf3hS4boDV2kdCuUuY1EBNUbme3MW",
    name: "LOCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LOCK",
    quoteLabel: "USDC"
  },
  {
    address: "8k3ipeEg6y64YJ8fk1t35ZTtSxBGEe7VSVxYsJnb2Nnv",
    name: "KONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "USDC"
  },
  {
    address: "38WCkiL8QsJR2taUx22uAsgZEtirR8x3rLMditVHWC2S",
    name: "MAU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAU",
    quoteLabel: "USDC"
  },
  {
    address: "6sREUT6Rqv1Au6BFLJiearC1e6sAZWUpS2EZXg5oiBbR",
    name: "SOLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLE",
    quoteLabel: "USDC"
  },
  {
    address: "3xD7N9tgfSvfvKsHPK7vjs3KZjXz2mEUw71enBChin1V",
    name: "DOCSI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOCSI",
    quoteLabel: "USDC"
  },
  {
    address: "ACzsyGoW9mjzp2ALbYfxtXtE2jwZdtbQoZoXmpsdP8FE",
    name: "T1T4N/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "T1T4N",
    quoteLabel: "USDC"
  },
  {
    address: "8QZr4zTeFpmixdc7nu5Afk47L1B4Jji38dTRizpvxds8",
    name: "TROLL/RLB",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "RLB"
  },
  {
    address: "43MZfSzc53yzUeGdQ4zfi1NcsFK5DWSkDcXKUitenegm",
    name: "SMONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMONK",
    quoteLabel: "USDC"
  },
  {
    address: "H67gVVPU2W5uKPT5oXe99QHHtFAA26YV4rdseuiqx3En",
    name: "SHIBD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBD",
    quoteLabel: "USDC"
  },
  {
    address: "98fYEaGPPaHZZjJVHBvYWb3Jwso4UW974RwnKo96Tg5z",
    name: "MOUSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOUSE",
    quoteLabel: "USDC"
  },
  {
    address: "ALmLBS685uFKTxqSQxrF4dnyVqKG9fxaTcWod7mRQmzx",
    name: "RAY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "SOL"
  },
  {
    address: "EjLmtaH6NWHt7u874H8kY52PkbqkS9UL3QENNPkvKrJz",
    name: "SMKEY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMKEY",
    quoteLabel: "SOL"
  },
  {
    address: "ArrfUQ7ZfapVPdVocjN7yKGRz8oZnyfEjL1YPkQGa7ZG",
    name: "/",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "",
    quoteLabel: ""
  },
  {
    address: "9LqhJbWd8axkT8sdxfp2ZSUBDD136cbdMqfgvbRvLTJT",
    name: "CATBO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATBO",
    quoteLabel: "USDC"
  },
  {
    address: "9cJDZu5LnDXarc331Buqao9iiZqP17hvQ3QF2ikp4T8o",
    name: "DYDX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DYDX",
    quoteLabel: "USDC"
  },
  {
    address: "2ZpJtYNJshLXbjrBoVc2i7GaQPyGwYCGLLofNFzRVqca",
    name: "WEBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WEBA",
    quoteLabel: "USDC"
  },
  {
    address: "HqZz2AiHT4J1KgqNxc4tWg7ZanyqiRazMr5ZAdkxFNaq",
    name: "BKONG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BKONG",
    quoteLabel: "SOL"
  },
  {
    address: "EPZozjRNDuc3UtcK1JkgHqCLGXt3pSaCek1azzrjLFHm",
    name: "USDC/PAWS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "PAWS"
  },
  {
    address: "6APxv5NojJPeasGJpdkjpLFSdJ6E7fpgM8cY3Jyufa1s",
    name: "IMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IMI",
    quoteLabel: "USDC"
  },
  {
    address: "9j3mUdrFYEbEU6MdW3vEgLwE3RLUrb5uui6yBhnYytbb",
    name: "APE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APE",
    quoteLabel: "USDC"
  },
  {
    address: "yWSG37wbiuNYCW2pPoZLHRMzBWLz8xneTANAA5TTs5Z",
    name: "BKONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BKONG",
    quoteLabel: "USDC"
  },
  {
    address: "4RifMphyg5DcVXVZpyWvHDEEqaaa5YDZbLqCEKaGdzyN",
    name: "PORN AI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PORN AI",
    quoteLabel: "USDC"
  },
  {
    address: "G5ymTBjKqTCBhdGHYma9YBci67BWQTydSzR1HgrqaJTD",
    name: "COCO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COCO",
    quoteLabel: "SOL"
  },
  {
    address: "Bg1uhQ8SR9RaZvWudJvudso2yC64hjUAkgWrQbZq98Zi",
    name: "FUSAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUSAL",
    quoteLabel: "USDC"
  },
  {
    address: "AXfF7JyS1QsQsXpsQhdGYcT7rF99UVbdjgGenTekzpqv",
    name: "PARAX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PARAX",
    quoteLabel: "SOL"
  },
  {
    address: "Gbm9De1mPfkyym8UjhizhJQVbxZPMdHq8ZnfA2qRRbAn",
    name: "SONIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SONIC",
    quoteLabel: "USDC"
  },
  {
    address: "3sqak7pdosdZ9j3Y553A4wWt5HbQH9oXxbTcbSCZshvQ",
    name: "FORT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FORT",
    quoteLabel: "USDC"
  },
  {
    address: "CfFvsbrDZvmjTbheDb5N6oBhphTA1i4Bogg4eBWJRnKU",
    name: "Koala/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Koala",
    quoteLabel: "USDC"
  },
  {
    address: "A9AfKdV4YaCXRGwAuDb6PsZoKd96mJmfEHzziqLjNvBf",
    name: "CHILI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "SOL"
  },
  {
    address: "2chv6v8JZtWPjxAcYi3gL4jLZCJ6wRGascDpyTugSSwA",
    name: "SOL/RST",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "RST"
  },
  {
    address: "DSy27AbibtCpFRUHuTWftPvarcQT6R2mTsc8cfKKN1EG",
    name: "MTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTO",
    quoteLabel: "USDC"
  },
  {
    address: "G1k8BYsFXFikmVnxHk5pH5yTA1X9SH3wJArhGhgu4Ecz",
    name: "BBShark/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBShark",
    quoteLabel: "USDC"
  },
  {
    address: "DnuhZjtf4VgMWbeNKyMJzae2UPK9gm9PrCFyaSSMZqVs",
    name: "SKITA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKITA",
    quoteLabel: "SOL"
  },
  {
    address: "4Zvc27JLhgjJCb59gaXHrfLXeDxQ6oWn2wjpyuWeMf9x",
    name: "ARG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARG",
    quoteLabel: "USDC"
  },
  {
    address: "39QUY1vA5RAfot9GEWvs6dr6gueY71GsF2bHtdDSEer1",
    name: "Pitbu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pitbu",
    quoteLabel: "USDC"
  },
  {
    address: "6dbguRsG7EJC6NUkjUP4Ayk72Xu89eJvkWubC3FH2jP6",
    name: "Melon/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Melon",
    quoteLabel: "USDC"
  },
  {
    address: "EvpPXSnSvwCjGRFQkEyMSMFLZ7SFcJzTS9TWCJwWunox",
    name: "XLR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XLR",
    quoteLabel: "USDC"
  },
  {
    address: "7B75mM3XW5FZxUosETfcxmmkcDkNng39XwAsDnqxw18N",
    name: "TSUKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TSUKA",
    quoteLabel: "SOL"
  },
  {
    address: "CtbPyM7aDjhVSWoAY94oLU2USHQ652dm9bZHTaJiFo8T",
    name: "SOLJK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLJK",
    quoteLabel: "SOL"
  },
  {
    address: "3sMDg4iupdZGnK4WFvGWBhe3ActxTKkCUq7PwdQCLixQ",
    name: "SHIK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "SOL"
  },
  {
    address: "ACgDPLf4v6HqouPyAcqFo8nMogVo6axn9jmHo58rw6ox",
    name: "GOFX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOFX",
    quoteLabel: "USDC"
  },
  {
    address: "BQXgimfakdU5g35JmYEabhU9Hx1aB5Jewc2qU4jLq2ka",
    name: "zkBRG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "zkBRG",
    quoteLabel: "USDC"
  },
  {
    address: "FV1oDYakkkBtcWB5KsRJhmDMv2vwTVa2hKgvcYVymkVR",
    name: "P2FARM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "P2FARM",
    quoteLabel: "SOL"
  },
  {
    address: "sGcaAyGoq9QHdFHPodrL6wuALnvQiZpkrKoQbHKfGfz",
    name: "GM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GM",
    quoteLabel: "USDC"
  },
  {
    address: "GJPEYvdiwekDKfcKPUotBAs5gnBwsjR59ChGKQZB9PtS",
    name: "DONKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONKE",
    quoteLabel: "SOL"
  },
  {
    address: "EJcAwvvuAS4qdDnQnMcufw6r6mVD2oC96vDjtDwHEBKL",
    name: "microSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "microSOL",
    quoteLabel: "SOL"
  },
  {
    address: "FoCPEzTFLdAbrgWU7kmS2jYtxeZHeXGBdiSzoqnCEfbc",
    name: "CBI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBI",
    quoteLabel: "USDC"
  },
  {
    address: "FYPV4y7e8imqdkFCAfeNGkf6vbC38xqHpzjh679kucha",
    name: "Fonk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fonk",
    quoteLabel: "SOL"
  },
  {
    address: "MYvoCYNEMWvFjKRcaivTMjum6XgiYB9XduWJMLNYxfj",
    name: "Kroc/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Kroc",
    quoteLabel: "USDC"
  },
  {
    address: "HJ2vioRvuM1vBDMS1jUyV8WUweipixopnVirFmHMPXM2",
    name: "CLOUDZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLOUDZ",
    quoteLabel: "SOL"
  },
  {
    address: "5Es6cJp9eTEW3UXLpaNuLLK6V3tn1AtUWP2WTmunvFzV",
    name: "DVITY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DVITY",
    quoteLabel: "USDC"
  },
  {
    address: "HptjFiaYL4BusFbw8Hon7ouEqY5ygfsoDD18ofLuiHCb",
    name: "R18/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "R18",
    quoteLabel: "USDC"
  },
  {
    address: "FusEZ1LLafajYjPdH7tw6kuQdStdFdgUMcYidzSxwCgF",
    name: "SFOX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFOX",
    quoteLabel: "USDC"
  },
  {
    address: "BxhMzCkEvPdPShNKsGnvp77WihFQF3xHiCRt3ntLb56C",
    name: "FUJI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUJI",
    quoteLabel: "SOL"
  },
  {
    address: "94pmuUz2eWL6gD7sqqzrBYnx1xYLkE6HJfufpb9QaxXF",
    name: "TMS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TMS",
    quoteLabel: "USDC"
  },
  {
    address: "C2EqMdZoEr5nSpXfEL3c5DqLoSfYrAnBtWf8A4zuem5w",
    name: "SBF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBF",
    quoteLabel: "SOL"
  },
  {
    address: "HKxGJKZkdVAGUoLNFcZ5goi4AARSWekuHF8FcqbfELoB",
    name: "DBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "SOL"
  },
  {
    address: "FCUnY8jxFXsU8aJ2zWtrFt7PHJhW7mFaSPcmb81SPhyW",
    name: "MAGIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDC"
  },
  {
    address: "7s9LVbvHx3KvKUyKpNijNjAVMTZr4HjjStkoDND1EgKQ",
    name: "LTX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LTX",
    quoteLabel: "USDC"
  },
  {
    address: "AsGDBj9ScX1zLMrTyc1HgYcjP7s7o93L2aPF1VEdxzYX",
    name: "CHIMPS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIMPS",
    quoteLabel: "SOL"
  },
  {
    address: "6fKmxSWPgQr1GFRysG3iFL9ZBVPkkERDDgE8Rd8XfuaG",
    name: "OKAMI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKAMI",
    quoteLabel: "SOL"
  },
  {
    address: "4wrNuQPLv2EJgL85EEuMR2tCKed37Eyc3b13LNxiCYTx",
    name: "NUTS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NUTS",
    quoteLabel: "SOL"
  },
  {
    address: "AH2NQSLzBTYpbScENx6C4Wntn6p4RUXXvTHNGEcYmVRQ",
    name: "KING/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KING",
    quoteLabel: "USDC"
  },
  {
    address: "DZgh4CnAVceqvBq34QPbndhU1rntN4MYYVeMWAA2XqEy",
    name: "Akita/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Akita",
    quoteLabel: "SOL"
  },
  {
    address: "A8ijQ9vgL9JeUPkMmXo2umhz4Vy3rws348MRfcPZhuot",
    name: "SOLLISTER/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLLISTER",
    quoteLabel: "SOL"
  },
  {
    address: "EUxKS7ezWFoi9mFRgE1iXwEMB3v2xuVSsHJRuE1vHjhF",
    name: "POOR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POOR",
    quoteLabel: "USDC"
  },
  {
    address: "H5H3nJez7MHigNYNxA21fZBsPFeswn5dCyf9iW2Jtubn",
    name: "PDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "9DFMN2AdvWkUv8Bhp4bL3suhaBTQrQhjBM8zAFtqG49b",
    name: "Solge/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solge",
    quoteLabel: "USDC"
  },
  {
    address: "DyTckhzbWFYHdoc1niavvqybRtwV2eoucbWwm8KXkLe3",
    name: "RVR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RVR",
    quoteLabel: "USDC"
  },
  {
    address: "6TV6bS7UzYSCirENb3LiyE7aZ4hL9XLNrMVVwLuQQB85",
    name: "PLUTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLUTO",
    quoteLabel: "USDC"
  },
  {
    address: "3APNzj71ivJEzvHMKTUp2XCCQ5jrh6HbP2H6gy4Gvp2A",
    name: "GNSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GNSOL",
    quoteLabel: "USDC"
  },
  {
    address: "BTyhZBo6ZuT9vZcjvEU5spePjnCrya9NmgdSpf2ysgF4",
    name: "NyCat/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NyCat",
    quoteLabel: "USDC"
  },
  {
    address: "5rQFAmGDATpsVxTW2BcZLgwwazT1QQiWk8xTjxKPw71N",
    name: "NEKOMONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEKOMONK",
    quoteLabel: "USDC"
  },
  {
    address: "EdS4V3iDGKRgxTNfiUN8q3A7vVbGBkiwqz1QPWk4wBFq",
    name: "Bonk/WKND",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "WKND"
  },
  {
    address: "DT5JwczJoqHT56UCriRspUDAhG7Yunkugzt78wmQTW3D",
    name: "BEEF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEEF",
    quoteLabel: "USDC"
  },
  {
    address: "G9Zg3uN78rKBHgvd8f9kictHsafcqpHb3qaYjEKNcRRi",
    name: "PDLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PDLS",
    quoteLabel: "USDC"
  },
  {
    address: "3FJkj7mNfsfX5aYyJwukWRbHaMKtVSMSFjLnup387paJ",
    name: "SAFE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFE",
    quoteLabel: "USDC"
  },
  {
    address: "8SePxKiLnqJCqfVEV6Lb7kLTWTwybYJaommfwLrQaSVD",
    name: "KANZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KANZA",
    quoteLabel: "USDC"
  },
  {
    address: "HaCCG6VsLshbXcxUNaJeCXz9wuitbfNWE27VmGfKAo36",
    name: "DROGO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DROGO",
    quoteLabel: "SOL"
  },
  {
    address: "6D68EQSNMETbtSzUBMxUdVRC7BPUGdZoVDq1T6NyypuS",
    name: "SUBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUBA",
    quoteLabel: "SOL"
  },
  {
    address: "GQATd831K7yKb3o41r4qLyt4K2X497Spo3tKAd3tDKz5",
    name: "SOL/bSOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "bSOL"
  },
  {
    address: "4AUoNr1XZMTuYVhQAQJtHwE1UiQZCnSxp4HLy3eCGWUE",
    name: "STT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STT",
    quoteLabel: "USDC"
  },
  {
    address: "ArP19ydStQuPEGjFPWfVC4iSYAbPSKtzM2BF87WkYSLJ",
    name: "BULA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULA",
    quoteLabel: "SOL"
  },
  {
    address: "6XMv3f8pGqsRin6ptjrxJP4eirCngQpBeQoU1i1zhNka",
    name: "PAY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAY",
    quoteLabel: "USDC"
  },
  {
    address: "G3PuMWZGoLF3ZWteH5mgD7LbEsiT2ZkqqtTQdWND7cD7",
    name: "CheemsAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CheemsAI",
    quoteLabel: "USDC"
  },
  {
    address: "HXpE7NdxSiDhyhnD21DYwmkuWny7afCUvJnSVXSyyy5m",
    name: "DOGIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGIE",
    quoteLabel: "USDC"
  },
  {
    address: "9arc8pa8REJ414RzFemqiQTVsjUNg297EkZSFHjFuWTi",
    name: "BDI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDI",
    quoteLabel: "USDC"
  },
  {
    address: "2yj6ydmF8R6u4M2dyykUUxfSnKQ5bXo5FoXY6VJYgaad",
    name: "SIR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIR",
    quoteLabel: "USDC"
  },
  {
    address: "BnZeiNvCB4e9nmWVdJ376kPvoUKomA9LmgFRGJMH1U4V",
    name: "DOGECAP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGECAP",
    quoteLabel: "SOL"
  },
  {
    address: "BZWjAmyjt1kyuqw6A9QSv6A21Hj1Lr6Z7N77YLL9CTR4",
    name: "BABS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABS",
    quoteLabel: "USDC"
  },
  {
    address: "BY38akCFK8t4haULX99Dh7QjXZr3yqTHWp25a43zT8fc",
    name: "ASC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASC",
    quoteLabel: "SOL"
  },
  {
    address: "Czmfq5szCHFM7zz7PGT91KU9sdEs1jzyXr1iP11t5UEC",
    name: "WWW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WWW",
    quoteLabel: "USDC"
  },
  {
    address: "Cvob4BcKpAfXu4uYzUdpBWbHVXRBnEBVtV2hFLuzWGJA",
    name: "PIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIN",
    quoteLabel: "USDC"
  },
  {
    address: "7Q8UsE4og1KwkzcFKnWhewAam4XQex8XqhCwTPyWus5n",
    name: "SDOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDOGE",
    quoteLabel: "SOL"
  },
  {
    address: "GHwCP3MSWdjeQPJ9fMXZAd1NjTqqgayYzPS1z835nVcT",
    name: "POM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POM",
    quoteLabel: "USDC"
  },
  {
    address: "D3PVktXsgkqnA7ZrHNUmghfCVJtLCouj9B3cDCyrVVAm",
    name: "SNOVA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNOVA",
    quoteLabel: "SOL"
  },
  {
    address: "ESGhyp53PByxSkd58uVyffDedQx9JJ2i3KzKE4eZE66P",
    name: "SOL2/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL2",
    quoteLabel: "USDC"
  },
  {
    address: "7mgRvE75LtP4UjWx7HHXxMD1NvgPgkVsTvAy985MsPZ4",
    name: "PEPA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPA",
    quoteLabel: "USDC"
  },
  {
    address: "2vdGMPyWeRQS32rRXgMfhTKJbWNbaWvgfMKoPpfa4LvQ",
    name: "RINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RINU",
    quoteLabel: "SOL"
  },
  {
    address: "FWU1EHCRSBhwqtuuvCrJ69KyHcyDAZCQ8yJhwEqfr75J",
    name: "DUMP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUMP",
    quoteLabel: "SOL"
  },
  {
    address: "Bzhhc3g17RtLj46KryzdxVRWscVEyRmo7Z5U34bGtWyB",
    name: "EVIL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EVIL",
    quoteLabel: "SOL"
  },
  {
    address: "BPiWUArcSBrxaMNKz5nBbmRPpq3HjP4YQv68rA9uaJX1",
    name: "HASH/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HASH",
    quoteLabel: "USDT"
  },
  {
    address: "CrpEyrzWsXKHMCtx2njetgEgeRkGgJWZC7rX9BRfsnoB",
    name: "DNS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DNS",
    quoteLabel: "USDC"
  },
  {
    address: "9RHc11XKCiGfvSfo5uXcWgxCbgvfHnGmVo2ocQfPk3XW",
    name: "HOLD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOLD",
    quoteLabel: "USDC"
  },
  {
    address: "9busteCcRioSLdkqqRvHfwBU363CepqLtv6WWAhTN7iy",
    name: "Doink/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Doink",
    quoteLabel: "USDC"
  },
  {
    address: "DUGEwZJdaStgjieCjtfQuqH5Zf97TCDDXBz9EsP9d5JH",
    name: "GOAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOAPE",
    quoteLabel: "USDC"
  },
  {
    address: "71wew7ucP95QAWxzfp8J8R5YcHaEdBJUFN8XuRpxTm8u",
    name: "SLING/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLING",
    quoteLabel: "USDC"
  },
  {
    address: "3onzhjsx6LjseLm5whoKC471i1qCMhE1eaA1r3MtJaqJ",
    name: "YOTRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YOTRT",
    quoteLabel: "USDC"
  },
  {
    address: "4a4kDVaLaTNjqHgCYQxp63hA4hFMRhhn5WYxuGT5ffNF",
    name: "CAKES/MILK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKES",
    quoteLabel: "MILK"
  },
  {
    address: "7ZAAVZNFETcR2dLRmyuMBFUXYrc1HfvLgRV7FnXyTyis",
    name: "Solub/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solub",
    quoteLabel: "USDT"
  },
  {
    address: "5jfw4QouM8gaDAA7o2LCVWxmB1iD2U8HBe4FHgDmqhM",
    name: "Rpepe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Rpepe",
    quoteLabel: "USDC"
  },
  {
    address: "4C9vXbdtcop5EkmTjxZTauWQSUVAPf6k89YAo8TnBBFK",
    name: "DEX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEX",
    quoteLabel: "USDC"
  },
  {
    address: "8bBCtxScg5fxD4gxj37JzAStT6Kc8gYH5zQtXLX4rEFM",
    name: "USDC/Akita",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Akita"
  },
  {
    address: "3acVKYVnGS9CfswUi1pAYZbsKfySFf7prxDumymBz4wJ",
    name: "CGPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CGPT",
    quoteLabel: "SOL"
  },
  {
    address: "Jf9fHNfgfpSqF7REo1dLhQ4Y77QbfeDLRZQTTZ2TVVW",
    name: "MOM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOM",
    quoteLabel: "USDC"
  },
  {
    address: "HnHnd335ZVGK6CUKsmTf79LFk2rQeJGBZ8LWybBTpWU3",
    name: "KBOSU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KBOSU",
    quoteLabel: "USDC"
  },
  {
    address: "Cgh8Pe1aMUtb3czimyZdZMsWy1jsVQPtshcgT5AT3NfF",
    name: "PX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PX",
    quoteLabel: "USDC"
  },
  {
    address: "5Kk31q6gbrkzBFNB4b2R7d1ZKJaPpV61Y1umT6wq1rSw",
    name: "NSA/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NSA",
    quoteLabel: "USDT"
  },
  {
    address: "CqpEKfF9EgxSKVX7hEcsVyWEoBekYVFgfbHUXAtX1Utc",
    name: "CHIGI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIGI",
    quoteLabel: "SOL"
  },
  {
    address: "AJKamsgWbwfaghukvtPrUg2ER9soQQGU64mzdbEK8My8",
    name: "BULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULL",
    quoteLabel: "USDC"
  },
  {
    address: "3io87isM3dTf5bxXmznJQfBrZXAtufjH5joBKSYXiA56",
    name: "FLUF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLUF",
    quoteLabel: "USDC"
  },
  {
    address: "GFGReMhHHLvNRkbdPMRVtySevibeovJzLbKJNTVwvxrF",
    name: "MNGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNGO",
    quoteLabel: "USDC"
  },
  {
    address: "6YsKSsTQRrN6AGthaespBi4Qiadrso5LhJirTDqDM5i5",
    name: "DOGAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGAI",
    quoteLabel: "USDC"
  },
  {
    address: "4pjxV7CBKSozHPqhKzGHxawSmDpVXmHAj5NtrS7YPoPf",
    name: "AGGRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGGRO",
    quoteLabel: "USDC"
  },
  {
    address: "FGpb8qVWtPTqWaHVq1YMtMX4nkRUKLxtmEGqm6EdeHqx",
    name: "CAPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAPS",
    quoteLabel: "USDC"
  },
  {
    address: "CV1pmmcQ4a11dVkRxRGgLjekwX3V4JKK6E4KNYdZNfJk",
    name: "bSLG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bSLG",
    quoteLabel: "SOL"
  },
  {
    address: "Bh7P6FALkxE7VUwbyZHqHUHRZqSX5GHz8xAhV6kSitnK",
    name: "RAVEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAVEN",
    quoteLabel: "USDC"
  },
  {
    address: "J3di6m25kq8KKSWHUKFWFDaQuf4DrQoQErJq6f87EGkE",
    name: "QUASR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUASR",
    quoteLabel: "SOL"
  },
  {
    address: "Eskh5Cw4DnwGgY1bc3WhdBwKgn2VrokNEtTMPh28BQ4U",
    name: "DBN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBN",
    quoteLabel: "USDC"
  },
  {
    address: "5quqiqNbm1QsyGZNok11W5kLjipSeZQkFc8cDo5fA3RE",
    name: "WAXS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAXS",
    quoteLabel: "USDC"
  },
  {
    address: "7gzgKxNH4MC32vXfcLnjuMVKffVD6i1onceT3DVRvrNy",
    name: "OGOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OGOGE",
    quoteLabel: "USDC"
  },
  {
    address: "8QuvAS4qzUBrAkhSNJCxFxfd3qUMesaZLD8YULwhxyNp",
    name: "LAVA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAVA",
    quoteLabel: "SOL"
  },
  {
    address: "Hh3i2uiL7TLn4rdpjALpBcwNXzcSuqaknr7goKvuGVEW",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "9Ag1bJz4ihuYzodqvzLXt3fuGasNULmuPyMVCGqdLBBQ",
    name: "RED/NET",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RED",
    quoteLabel: "NET"
  },
  {
    address: "D3wSCdUuBKErvfhU98u1fTAmREqFpMLJWgJB8PkL1tKF",
    name: "SMASH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMASH",
    quoteLabel: "SOL"
  },
  {
    address: "EUKDXAh5LZrPSfgNZTUELKLqfqA8mEAztP8UknmZd4s6",
    name: "Abonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Abonk",
    quoteLabel: "USDC"
  },
  {
    address: "EJyvdhrvxj7prnXH6L8xS7NdYXViZqWEYv6u5KyDV4ui",
    name: "SHIK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "SOL"
  },
  {
    address: "3kmJRRwt89S4onzNLkPbzucHbmaEmNkEqdvYnh3MS3xq",
    name: "FHLDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FHLDY",
    quoteLabel: "USDC"
  },
  {
    address: "HnpxzaLsMzCufQbKMCut8yEixSZtm1jbPfNRmJtLp4aX",
    name: "USDC/KRAKEN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "KRAKEN"
  },
  {
    address: "5TDvPswhV2uAKfrQ7jbAr97aDCy8R2YkvugKFJD5JXB9",
    name: "OXA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OXA",
    quoteLabel: "SOL"
  },
  {
    address: "37x7Q4bKo8B8Tqbns1zxPwRsYR7ex3yKmu9ZQzoFhaDv",
    name: "SOLR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLR",
    quoteLabel: "USDC"
  },
  {
    address: "CCV4p1s4sphkvpB8rN93Kxwwbo8M2N1d6HnN5Vj4ZCQS",
    name: "NYAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NYAN",
    quoteLabel: "SOL"
  },
  {
    address: "8ncS5yNzR8uYcnsDP5BtxNzS6tFGkBCGMXCuwhLyZRJf",
    name: "MOAKS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOAKS",
    quoteLabel: "SOL"
  },
  {
    address: "5YMR6Xghs9fqkKZA5NCgzsei4VqQYdAQ1uQ3nPDZm2ES",
    name: "CHIKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIKU",
    quoteLabel: "USDC"
  },
  {
    address: "9V5W3K6dZ3jzn4spAtukQYEbq7N2rCGeCMWr7xGe63Zh",
    name: "MONU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONU",
    quoteLabel: "USDC"
  },
  {
    address: "EiNpk59cuBGAcwSVn69RhHcNU436eCfM4GVfzar79jTP",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "2TSR3egaQDZWQURi3wJygvM2CBqzkfx8ipWWtUR9pkkN",
    name: "SOLAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAR",
    quoteLabel: "SOL"
  },
  {
    address: "BooNcCfdHAZdbtXLYJNGcYcyd92W9zMbHcBuqDwgHMua",
    name: "FUEL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUEL",
    quoteLabel: "SOL"
  },
  {
    address: "8LnWcX6Q4dyNR1STH94jFNVB6uuoAPBT4WUff4juBgiG",
    name: "BONKER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKER",
    quoteLabel: "USDC"
  },
  {
    address: "3wBQ5VQZxn4XCqn2MHKm81Z7Ua1Yx2xc2UmYu99e9cWv",
    name: "iFear/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "iFear",
    quoteLabel: "USDC"
  },
  {
    address: "ALr3LBMj8dQ1tWRG6CAxQ1z4wknkiTYq4DDj3UNCKSPN",
    name: "HELH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HELH",
    quoteLabel: "USDC"
  },
  {
    address: "3mFRZMtde2qzZYN8zSWB1ySn7Rbtq6MixPAjKEKwjT52",
    name: "RBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBONK",
    quoteLabel: "USDC"
  },
  {
    address: "FQ9g8T8dCN8t7fkmaQS52cHDecn2WexjXkz53t4ETk4B",
    name: "SOULB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOULB",
    quoteLabel: "USDC"
  },
  {
    address: "9LZdBDSLnhZmiFz46JhfTwCVAEMNxGXtsKFCjQVuRA7",
    name: "NINJA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NINJA",
    quoteLabel: "USDC"
  },
  {
    address: "3F5kqCqqzpVCNUAQjHz6miL3x7Dvdwbbtj8xcfupDxrU",
    name: "Bong/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bong",
    quoteLabel: "USDC"
  },
  {
    address: "64VsPd46yr6kUFkpnZocYKiqJvGyeAhHavJ5QrMys1xu",
    name: "INIU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INIU",
    quoteLabel: "USDC"
  },
  {
    address: "2xnrQAsephe89nvcNCQNLic9GmKHp4Zy3ptfzdqS4REy",
    name: "SOL/BEAGL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BEAGL"
  },
  {
    address: "AYAmup4msQNgd1YfWEVusdQwPjR9BHTE8qpD2x6WF1kU",
    name: "GOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOL",
    quoteLabel: "SOL"
  },
  {
    address: "3m5NTaVYtuq8Q3yxeR5nsf5obGgyHatvctyPUS28UDNx",
    name: "POGGERS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POGGERS",
    quoteLabel: "SOL"
  },
  {
    address: "qNh45AnjSjuMhjtoPx6UgWToK7nNcBAWyj14r34Cjf3",
    name: "ZLABZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZLABZ",
    quoteLabel: "SOL"
  },
  {
    address: "iQCvGsRHYzaHjYvKvwXPPnCADf4nsktByvMcnCuwrTi",
    name: "ADY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ADY",
    quoteLabel: "USDC"
  },
  {
    address: "FyW5JmJEKwdfk8LbN4zBSUoFcySJ4AHWvjZXtuivcV14",
    name: "PORO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PORO",
    quoteLabel: "USDC"
  },
  {
    address: "AwdiEZBibo8a9rj5MRPYLEgSfLSp2ePNv24M2JeXETp5",
    name: "ROAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROAR",
    quoteLabel: "USDC"
  },
  {
    address: "7nBjTJW5LskY3bLpccjhgBKkW4m32UA733Xg1tPyNYFo",
    name: "USDC/Go",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Go"
  },
  {
    address: "CuWsxwkKUVHTpTcZmy7vunMqEhbzrGQW97vK7WD2wazR",
    name: "HEX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEX",
    quoteLabel: "USDC"
  },
  {
    address: "AHtQQmNoZopd8pJ5oMwfWjRBpuk4DuTDK9o6wVD8CLPB",
    name: "BSOLG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSOLG",
    quoteLabel: "USDC"
  },
  {
    address: "Bv17dqViiTPXL7L9d3toWHRuzg6fdr7HWKcgjuXAP1GB",
    name: "SAPO/COCO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAPO",
    quoteLabel: "COCO"
  },
  {
    address: "BB4Wiu4jDKS8Xc2WxdC9xH21w5Ryq14bHenzt3b57Qr7",
    name: "FOX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOX",
    quoteLabel: "USDC"
  },
  {
    address: "4fMDAwswYTCFoEbEBjDWWyVUWzJGRa5F6Zzjr9DzQ3aG",
    name: "AntiBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AntiBonk",
    quoteLabel: "USDC"
  },
  {
    address: "4F4Z6HmqFxpqH3TkSo2ExipKn5GJ77Szqbk4kcqcKX1K",
    name: "FRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRONK",
    quoteLabel: "USDC"
  },
  {
    address: "6eLbLTmHSC5xHmZ2THPLLyrreW7v5wcecjcovk28Fmtx",
    name: "BABYX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABYX",
    quoteLabel: "USDC"
  },
  {
    address: "7hV3eTrTnT4Hei6Lv2ZAjkHDaDD6BUB4XF2L7taS6mT5",
    name: "4GPNG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "4GPNG",
    quoteLabel: "USDC"
  },
  {
    address: "DMHhBpS9v5QeXuYTAXFHa5c6YaAASH9nEF4S7mdP8FRj",
    name: "jigsaw/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "jigsaw",
    quoteLabel: "SOL"
  },
  {
    address: "9PxAUbBoSbxcCGctquw18A7gwqUTWyYu7bfSEGbAQ8dt",
    name: "ABC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ABC",
    quoteLabel: "USDC"
  },
  {
    address: "F41H217B3AyuH2Fiq3AYdxJ11PfgMmsFjibVqG27q9oN",
    name: "HOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOPE",
    quoteLabel: "USDC"
  },
  {
    address: "phap8tPGdXjtoghksgBBwErjByqRjQFDtkt32XUhhB1",
    name: "POODL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POODL",
    quoteLabel: "SOL"
  },
  {
    address: "8Wk6cH4ywNkTRiHsCbtgc6VGB21RhntCwBUGYCyC2GUP",
    name: "RACC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACC",
    quoteLabel: "USDC"
  },
  {
    address: "7hh236e1v3WZWKgZQg3qmpiDQTLtXy182w8chb3kfnXj",
    name: "SOLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLL",
    quoteLabel: "SOL"
  },
  {
    address: "2JDUhF33LjY8yf2cqsLcM2brx4deDfMAugTwYY6seyDZ",
    name: "BEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE",
    quoteLabel: "USDC"
  },
  {
    address: "GoDjZAyBemMCXwniRbnq2Fpm3QiXKUToBvBKmutBygHN",
    name: "SOLO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLO",
    quoteLabel: "USDC"
  },
  {
    address: "BqonVig1M4nQ2JjrG59Zc2AGfQ5wyAnxhnph2rhfyVyE",
    name: "SAKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAKU",
    quoteLabel: "USDC"
  },
  {
    address: "BWWdGTU4AfRk6rFPZiftYjEuQGSVqrwzXr6iRU6iKWxw",
    name: "TROLL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "USDC"
  },
  {
    address: "ADPhfnaHyAyZHsSyApfXHLKYrqvVE6bEmwxNAGXfNYn5",
    name: "bDoggo/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bDoggo",
    quoteLabel: "SOL"
  },
  {
    address: "4mW6diuU2LJkY97XxHZFiKigg9JBraQ9bJNZWhBa73FG",
    name: "TROLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "SOL"
  },
  {
    address: "2BTrcW8p8GJFuLJUHg5inQBu8GeZvemrGzEiqYpcWsP2",
    name: "DOGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "USDC"
  },
  {
    address: "7YhQQs4j8ni6kzvSus3KRjxoZ8Fu6CCh1wmkyVWMbUrp",
    name: "GLS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GLS",
    quoteLabel: "SOL"
  },
  {
    address: "29goshuUGa7QZXAcXaXFMein96yGMagyRxVQcR6ryBXp",
    name: "POKER/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POKER",
    quoteLabel: "SOL"
  },
  {
    address: "7JWFC2eJg2jKY6ZTHKKhmG1ZrpHfR6aZFXZmeWmqVGJ8",
    name: "pigi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "pigi",
    quoteLabel: "USDC"
  },
  {
    address: "DMXHjrPMnz5gxS36SmvSzmLfWg4rdesZAPPTZRCiUGqP",
    name: "BonkD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkD",
    quoteLabel: "SOL"
  },
  {
    address: "E2F56ncDixXoWzD9unN3oNwPXsUFxSJVrnHNTmGjkTCW",
    name: "POLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POLE",
    quoteLabel: "USDC"
  },
  {
    address: "9EALfKjXRJdz6D9EzQkCYK1Z8L4FcP16piGPScze6V2y",
    name: "BABS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABS",
    quoteLabel: "USDC"
  },
  {
    address: "89jZhP6457EFaizrqMH7r8TirV9Ta2WcFYZcvoKcipxf",
    name: "DGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGR",
    quoteLabel: "USDC"
  },
  {
    address: "HQjyrg2yjbTFWjYLbB7VRCsmu6bCBPc5aS3xbNCBmgw4",
    name: "B4C3/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "B4C3",
    quoteLabel: "USDC"
  },
  {
    address: "BeR3sBM2bUinmvrF6J7PTvKua8FAbcQKU7E9bsXjLSiH",
    name: "CHES/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHES",
    quoteLabel: "SOL"
  },
  {
    address: "Cn7UNkK6P9nHFmqdfPr1kpfueHLXCjpahjn9QXA9NKD9",
    name: "YUMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YUMI",
    quoteLabel: "USDC"
  },
  {
    address: "8W9GWPzPL7RKuZ5d5JHPWLCmXJFNVRXsSP2Lx7C9sUjm",
    name: "CHEEMS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEEMS",
    quoteLabel: "USDC"
  },
  {
    address: "4g5QxDy11Z4XWP7nxRnbXYA6oCdieqPxMeRcLwtz1bp8",
    name: "PewPew/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PewPew",
    quoteLabel: "USDC"
  },
  {
    address: "Ay2LyvcYNdVREqXdJqjfE1YhP44RufKarpKh74BPKUKT",
    name: "MOOH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOOH",
    quoteLabel: "USDC"
  },
  {
    address: "EZEURqjiVXcrcudiPA2dpbbR8zKRdEL1oqD9r32KXia7",
    name: "ALOI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALOI",
    quoteLabel: "USDC"
  },
  {
    address: "6JKADvNFwEqpL22n1LntuNSFgbePKa7w1kr286HvXRWi",
    name: "KEYS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KEYS",
    quoteLabel: "USDC"
  },
  {
    address: "5cuV6M1DLAdQNebtsskYxJyRZrV6Q5a322jgRe9rfk5h",
    name: "SFC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFC",
    quoteLabel: "USDC"
  },
  {
    address: "AU5ERnSC4QQspUhTeDfkdHvmEH5ue68bfAqkkaJH2hry",
    name: "MOC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOC",
    quoteLabel: "USDC"
  },
  {
    address: "EzEadLtiiHnx8NZpvkE8dLdiqJWp8DVZ8RY5tDoes6gK",
    name: "Cope/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cope",
    quoteLabel: "USDC"
  },
  {
    address: "CABMB36Cu4HYViRafnbBGhiQurXt6F4pH81bvQeek71w",
    name: "CRT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRT",
    quoteLabel: "SOL"
  },
  {
    address: "F6QmKGfAWBzDUaGbUGfzntc2yu1Fi7uFGaEbLZpEwh8",
    name: "BEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAR",
    quoteLabel: "USDC"
  },
  {
    address: "3iV5xCZR76zB89cdc466nW97uoMcdgGVSYTb1q1hsTz1",
    name: "BCOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCOPE",
    quoteLabel: "USDC"
  },
  {
    address: "Dgei64nCbN1voRr6txDXJmk8JzEcZ2ZRbgN8DxDgL12r",
    name: "SOAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOAR",
    quoteLabel: "USDC"
  },
  {
    address: "EgCJirSC5FUTUznSpkHrzUYMXHgoYNwXokZcxusTQ5cN",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "7QPRQut8qDDT2bgUD4P1my8SFUx7R9bbR5o6Xz26fcJD",
    name: "SBONK/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "Bonk"
  },
  {
    address: "8yooCLX98hgQ1p94j7eMsGZTCrHc2mKcFwwFp71mAgjX",
    name: "BirdGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BirdGPT",
    quoteLabel: "USDC"
  },
  {
    address: "9a7q3Qv1f7DJKn3QvoaCuh89kaN794KrccYPNujd8Tpb",
    name: "NyanCat/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NyanCat",
    quoteLabel: "USDC"
  },
  {
    address: "4fUrPtEYAJtDRadh8zn2WCxLeyH9kLRYsZZJ5JwxjWKi",
    name: "PepeBonk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PepeBonk",
    quoteLabel: "SOL"
  },
  {
    address: "HVkEQNHD7UHfnt3hVPaNnFYp3uaPfzPe23hAPfFycUNU",
    name: "PH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PH",
    quoteLabel: "USDC"
  },
  {
    address: "4cYxgitnpg9jYw9vK7Y7u7H4nnZ8735XVfZpJXkeBk1R",
    name: "WICK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WICK",
    quoteLabel: "USDC"
  },
  {
    address: "CSkkAfdneVRodbv2EBjYaGtKpKkBrv6eQauznXKkVYA9",
    name: "SOL/BAWK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BAWK"
  },
  {
    address: "9ZZqLJrrx8qdJ9vMcSJyqSLvGiHJT8jLmChkNuRvMsM6",
    name: "HPUPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HPUPP",
    quoteLabel: "USDC"
  },
  {
    address: "3cnJaofp39T551g81oPdW1FBTjPprDXB11UmVtKH1yUm",
    name: "LST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LST",
    quoteLabel: "USDC"
  },
  {
    address: "8DWpf6eUjHpALBmxeRbm8K8KwonSwBUviGheJ19uVCC",
    name: "COOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COOL",
    quoteLabel: "USDC"
  },
  {
    address: "HJjRSu4t5KhhDynEKVDabbPVqddVdQZDEsCMAaADXb6w",
    name: "OLOGY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OLOGY",
    quoteLabel: "USDC"
  },
  {
    address: "7X8EQUsuTpv3HfrijykuQFd1HKzED5Zqg5oZifoM7Cq7",
    name: "PEPEG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEG",
    quoteLabel: "USDC"
  },
  {
    address: "3WJaYiL9WVYU1kdkok3kWS4BQQt6xkhJggEQF7NkfcuG",
    name: "BABS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABS",
    quoteLabel: "SOL"
  },
  {
    address: "6RmysqKW29rq2bAYYoG3zqaCRfDqAq2CXAxq1qggKq7x",
    name: "SOL/GRID",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GRID"
  },
  {
    address: "4hywBwRFoecesdLgTurxTMFaDqgB4w8K45Xscqcc42Yq",
    name: "CGPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CGPT",
    quoteLabel: "SOL"
  },
  {
    address: "HiVGpuMwtmLUrxCDGygqN5M1YaGHHjVJc5eaZEXx69RY",
    name: "DBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "USDC"
  },
  {
    address: "B6onJ9cmLuqWRJu9FUwphJSxMgSnxsgf7F5UyfkF6BnV",
    name: "BRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRO",
    quoteLabel: "USDC"
  },
  {
    address: "2rzyqkJzq4KfabBjjYDZ7NyY2P3V9ViPmNUGZWNavgce",
    name: "FRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRONK",
    quoteLabel: "USDC"
  },
  {
    address: "Ah2BvNYLBo5HfM8vB15QZyWfUxehkJbgY6VjFcgb5JWb",
    name: "Fronk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "USDC"
  },
  {
    address: "AdsSQiKhxkpXz9XLEHMZekThFsyWZ7avJ2mWp43nUdfe",
    name: "LION/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LION",
    quoteLabel: "USDC"
  },
  {
    address: "FnVrGZcgp3XQRhP91gkbf5ZX8azVoamd2hZNsH6f99W5",
    name: "OMEGA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OMEGA",
    quoteLabel: "SOL"
  },
  {
    address: "Egcg6S7MDzPqfLzZ3fMWZNBuZFpU9gzcskBHEGkxm9GZ",
    name: "JUBZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JUBZ",
    quoteLabel: "USDC"
  },
  {
    address: "9bwpDtiZBKRKkuziumRprx6j3ZTLgRXf42ZXkmcaD4vp",
    name: "Pheonix/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pheonix",
    quoteLabel: "USDC"
  },
  {
    address: "ALjWR4DrHJFHe5NcLvhGhv43r5NFDoaLEPsMJ95Cj5K8",
    name: "SAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAPE",
    quoteLabel: "USDC"
  },
  {
    address: "7depoD2vnh7mDjkNJLnMFM6ZXKWfJdw6WMNuKpYQUA7J",
    name: "Clove/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Clove",
    quoteLabel: "USDC"
  },
  {
    address: "JRVUxoh2bz4xC3Z84xrqJqggiRicd9uJz6DRg4YMyJR",
    name: "SRBT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRBT",
    quoteLabel: "SOL"
  },
  {
    address: "5uf12pK2mJmTku2Ju6UTHQ1uaCGMTME7wEY8WEkLmTgf",
    name: "FROGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGE",
    quoteLabel: "SOL"
  },
  {
    address: "9os9tmu7htz9V97fmkGXfePDHhu8Dejp3yo9gJFAcDTj",
    name: "Cope/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cope",
    quoteLabel: "SOL"
  },
  {
    address: "CZMcwc7JmZMMjUZEC7vBtc9gpJn1m8xNVWMptCUgv65b",
    name: "DERP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DERP",
    quoteLabel: "USDC"
  },
  {
    address: "8bAAWE5Ba6KmYtuG7eJkt8aVhsTTH3ZQU3ipxb7rNtP9",
    name: "SOBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOBA",
    quoteLabel: "SOL"
  },
  {
    address: "3Ts8DkgCBgEQWnPHCenu1vxUKw3hFLoAzhx6PgzAG6Vh",
    name: "AXA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AXA",
    quoteLabel: "USDC"
  },
  {
    address: "3ZM4xtmo6oJmzDPCARAWzc5n9vCa5whRaiSHSwpTcMNS",
    name: "ZYTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZYTO",
    quoteLabel: "USDC"
  },
  {
    address: "GHz7mMg6xRC5kzKpc7kfPojE9yDvcDvx14vZ4guyTr6i",
    name: "MOOH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOOH",
    quoteLabel: "USDC"
  },
  {
    address: "JCLj9oYDvSg5fJij9MsNcyng6cuydNUioCpdykGTmTzK",
    name: "SOL/HAMS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "HAMS"
  },
  {
    address: "FLVy4u1iK2K7edeZwbfoBJ7R5zCcm6wn7gtSszYcEM8e",
    name: "bChil/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bChil",
    quoteLabel: "USDC"
  },
  {
    address: "Ch76LL5nRVnc5CL41cznP1GyqsEoRWXN9vwpnXKe6dMp",
    name: "Turtle/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Turtle",
    quoteLabel: "USDC"
  },
  {
    address: "BUBwjF7PsXmQ5M2Fxqpiq3WAYfEASYfNQDjJtwo67aD8",
    name: "CUDLE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUDLE",
    quoteLabel: "SOL"
  },
  {
    address: "BSbXutYkA1QxNnJTqsvBaRiaj1Xpw7EXC4RLZxMTpbei",
    name: "SOL/SVI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SVI"
  },
  {
    address: "FzthvUpuueuUprREWaWhGSYoMEiS1NeBJDurSWbMWsTT",
    name: "DOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOPE",
    quoteLabel: "USDC"
  },
  {
    address: "B9x2NGg9pobCg1f6GrgRDAGSp6CSgvCDfMHQoTDxnbga",
    name: "ADO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ADO",
    quoteLabel: "SOL"
  },
  {
    address: "AJVbrXKxQncNzQUMF1DYsvsbxdyuGrLECBL4pDwvHdHg",
    name: "CLOWN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLOWN",
    quoteLabel: "USDC"
  },
  {
    address: "6kLgs5BZbEuUpFNNxs8hQDPVL9Y4KFCPbKsxVuNCzWpk",
    name: "3MOJI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "3MOJI",
    quoteLabel: "USDC"
  },
  {
    address: "AvEQyj3yRQy4P5KWnmrt3ntaQYGaEBHZJysEyooTNWN7",
    name: "SOL/CORG",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "CORG"
  },
  {
    address: "8YuNVv6b8sepVTKjP7dRtBSfM8TLkMAAV5oeBJVfg7T4",
    name: "CORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "USDC"
  },
  {
    address: "Agg6UAHaDUusUYJPnbW1P1eJM9iy3sXgNFm7HJUvzdu8",
    name: "HEA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEA",
    quoteLabel: "SOL"
  },
  {
    address: "DULNAKM54dCCvugPqxyv5W2Jbwob2DDzdhJu7w7n9n6g",
    name: "BonkGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkGPT",
    quoteLabel: "USDC"
  },
  {
    address: "CAjw1HFaCSFZdZPfiHoFezeaNNqH33QznXCZ2M1ZRiDe",
    name: "MrSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MrSOL",
    quoteLabel: "USDC"
  },
  {
    address: "GcKm2g93ghsw9PiQUFKrK4ZDr5qqfJkzZxkFVqpp7KpE",
    name: "HWT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HWT",
    quoteLabel: "USDC"
  },
  {
    address: "42LxSkAgUURY2ZwnDjtA5d1Q5YNHEpcCFQ3881pf6xRS",
    name: "KSN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KSN",
    quoteLabel: "USDC"
  },
  {
    address: "HboHgTcWfLqR9sz2BpdxneL397euJaVvwuNUEQoZZdVM",
    name: "TIGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TIGR",
    quoteLabel: "USDC"
  },
  {
    address: "D69ChPn23wfsbEAx4e3DieEHH3DGauzjAAyJ68hMwVC4",
    name: "DOGMN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGMN",
    quoteLabel: "USDC"
  },
  {
    address: "4K3TG6r5u6kQTY7P45UjmQmNyDkJ8u7u53VV5Cb28owq",
    name: "PIKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIKA",
    quoteLabel: "USDC"
  },
  {
    address: "6bubZvRwy6LebXAAeVMXZwb61TWVKJLi8iVno8xZ5A5f",
    name: "STX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STX",
    quoteLabel: "SOL"
  },
  {
    address: "GfdSsrsDGcAxyvWL68A6hqxwvFqqNyHwApverFU6bGNt",
    name: "Fox/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fox",
    quoteLabel: "USDC"
  },
  {
    address: "DoJCM1nnFQSrE2PEJz1sUaMpWM24FHdZFKuEWHFFoXCr",
    name: "CRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRT",
    quoteLabel: "USDC"
  },
  {
    address: "GbSwpcXFhrfAYEBJ5DUUUaJasxh4sRm8TkwSAwvnQVev",
    name: "SKP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKP",
    quoteLabel: "USDC"
  },
  {
    address: "5ndZy1zCDeSi4pBn23A4PcR5yPR2qYPLFguwu5je8E3o",
    name: "HDG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDG",
    quoteLabel: "SOL"
  },
  {
    address: "3LVxU4WxQdCiDNv8WtucGwYCRpj629yTSfhXWR5FLiNj",
    name: "MSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MSOL",
    quoteLabel: "USDC"
  },
  {
    address: "HEBGTieKZGb8QMs4gEHo9LQoXEtAmo2uZdAF9Es1Whja",
    name: "APEY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APEY",
    quoteLabel: "USDC"
  },
  {
    address: "148dQpedHLYztKrKwoDmDZ6kjUtxZ9GQ5WoenkyMb1DS",
    name: "SHS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHS",
    quoteLabel: "USDC"
  },
  {
    address: "3n28k6owNeA7XMRqmXuFEnc4pVqN6A1ySwoSJpYrwVFP",
    name: "SJAVV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SJAVV",
    quoteLabel: "USDC"
  },
  {
    address: "BYA42ASFx8Ys8BuLViruwZ8N5LhwPXBqchNhfQ5CeXDN",
    name: "SHIBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBA",
    quoteLabel: "USDC"
  },
  {
    address: "DgPzAQoiH8XxoSh6zmDEfwUrEBNYQ8aiRirc3p8QpHvh",
    name: "COW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COW",
    quoteLabel: "USDC"
  },
  {
    address: "99bxCEQBNiSGvYsRmoit1nuf5EYjAXu7V5g8WqFiZVNF",
    name: "Shoe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Shoe",
    quoteLabel: "USDC"
  },
  {
    address: "9JcX4CDtjE6MpsRvDCgofmePqYqEgV8MD6Zm7DQbNrHH",
    name: "DEGEN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DEGEN",
    quoteLabel: "SOL"
  },
  {
    address: "8L5g5WAXMyvsnS5vcGEex4GuLg3XDvs7KWyMJHrCng53",
    name: "ZEXA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZEXA",
    quoteLabel: "SOL"
  },
  {
    address: "Aw1Ttr7d9zh7re1DdwT6h7PYxDwxn8crDXw7JqopnEbR",
    name: "ROOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROOT",
    quoteLabel: "USDC"
  },
  {
    address: "HNk1fB8qdpdv3Vz8pxUq3dwuBaeD9aHLHpJPjvCKFc3a",
    name: "MEGA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEGA",
    quoteLabel: "USDC"
  },
  {
    address: "4jsB5KyB2JjWLNyqKApt4tumDEN819Lygy5SU1TGZtZZ",
    name: "CAKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAKE",
    quoteLabel: "USDC"
  },
  {
    address: "3kkRuiNp99sAN4MW3qt56aEYpjWGAzRSrHVJu9NEW6AM",
    name: "SCN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCN",
    quoteLabel: "USDC"
  },
  {
    address: "GrMdTMQnFJ9dB7fQuTTm5nYn66ZvYBeb975tTgaH3mnj",
    name: "STONKS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STONKS",
    quoteLabel: "USDC"
  },
  {
    address: "F4UcqUJ1jnz8UEecmQmWiuHEocj15HpTmHZdXHChYUTF",
    name: "666/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "666",
    quoteLabel: "USDC"
  },
  {
    address: "2MfqC7w595s2YdWLDrkzxjk6fWJNSV9uRyQxghj4FJgJ",
    name: "DART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DART",
    quoteLabel: "USDC"
  },
  {
    address: "Fszkx6Bo66akuV9otTkPyvcXjdfPws9ACsZ86zS6Zr5D",
    name: "FROKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROKI",
    quoteLabel: "USDC"
  },
  {
    address: "BftXVvuEGvxDsi8PXcmuZwCcMnKzGzdvGXZQEuub22k2",
    name: "ELBOB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELBOB",
    quoteLabel: "USDC"
  },
  {
    address: "GQRKyvpngnvb2W7x8dARpFn92izEcPkz4fx17oKJziPU",
    name: "PPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPP",
    quoteLabel: "USDC"
  },
  {
    address: "Ni6F19gsHZ2QYZajDPGtQiLcvapxp3NP3KQpxFfNbme",
    name: "ELDER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELDER",
    quoteLabel: "USDC"
  },
  {
    address: "FRsQmQrqYkQtxUNP4H9v1erhmAoRTxgvf2Y1dprSX9Cz",
    name: "BCOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCOPE",
    quoteLabel: "USDC"
  },
  {
    address: "3Xv8dwZ9fc9p8SVUNMHPqTiXYD6J1JMRtzzrkyuCRDPv",
    name: "GOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOL",
    quoteLabel: "USDC"
  },
  {
    address: "5vmRxFX5UQZeGN8qKkvmYMYZB7KFyb3FmErY6p1TUMsr",
    name: "SCULT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCULT",
    quoteLabel: "SOL"
  },
  {
    address: "FfVW1qdiEo4EMmhpeNKAUoZyE7iQkT8nN34RTDuJTGXd",
    name: "MTRX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTRX",
    quoteLabel: "SOL"
  },
  {
    address: "FKer7UHvEukP47D3PPu65H9bsZ2CF1t5A9u3Q7cH9uTj",
    name: "RELIF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RELIF",
    quoteLabel: "USDC"
  },
  {
    address: "CMkHaLLSwzhVeGsouSP5shu7DCHxpCZUWKjNMCg35LGT",
    name: "laineSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "laineSOL",
    quoteLabel: "SOL"
  },
  {
    address: "CNCXMtndm5Spzz3f7yNfhXhJycakKF4wJvyorNh9nFw9",
    name: "Chipmunk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Chipmunk",
    quoteLabel: "USDC"
  },
  {
    address: "4dunCkvfCPSWTrym6SheCmzyXXFYz5dMZ4saL46YL88d",
    name: "DD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DD",
    quoteLabel: "USDC"
  },
  {
    address: "DUwQ8cNBa6mvVDGmLqY3jR5RfDrxEbxuyBxPaQcP2Qdn",
    name: "PAW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAW",
    quoteLabel: "USDC"
  },
  {
    address: "DmNwB9NTKXaxhymsZ5BHFuU3K5TRXAhgCNvVAifdH8CK",
    name: "SKULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKULL",
    quoteLabel: "USDC"
  },
  {
    address: "QQAp8UDjL8ehBD5vBJ6CawJkQ5sh3o4HYKvdSsiufcd",
    name: "MRG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MRG",
    quoteLabel: "USDC"
  },
  {
    address: "5wbKKmwMjjssRCfu9jDQoxwKaSZoLdLwMubFUndrKcfK",
    name: "KONGB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONGB",
    quoteLabel: "USDC"
  },
  {
    address: "6gyTMdPPpdRDd4aWtWwAQQvarJoC9CK9TSPqWXF8qCw5",
    name: "SOL/RGSC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "RGSC"
  },
  {
    address: "4PvZmzwQZLgtdNXnshfVyQzq7sM1SpHtYYihLN5ASjvb",
    name: "DOGNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGNK",
    quoteLabel: "USDC"
  },
  {
    address: "DQG23iFcMeo8X6Hd7oA2rLyC9G7uo2dtxc5PcrFxjfnd",
    name: "BDOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDOGE",
    quoteLabel: "SOL"
  },
  {
    address: "GQmb4reT3HavbiYvgKVHrv5uLYdKwWM3FGKb4Z45FneH",
    name: "Fairy/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fairy",
    quoteLabel: "USDC"
  },
  {
    address: "J8FPiik69Q8jLbQngPKFAVirHnD9bjmd6UcdS57rxtiT",
    name: "CRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "USDC"
  },
  {
    address: "8nqLWr5TmMVXsfVTtFbN1kTC7HHDTaqqErt7qDJsYtYu",
    name: "GMN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GMN",
    quoteLabel: "USDC"
  },
  {
    address: "Bquc4ybuDuAyhcv3i3Hs3b6uknsLtSLtjCfWQ54u5cZ5",
    name: "MBONK/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MBONK",
    quoteLabel: "USDT"
  },
  {
    address: "82LzJ3KV2FtZBfPWfD3D9TvFUF8pgG29fXHMiLsXAfZ7",
    name: "Fronk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "USDC"
  },
  {
    address: "84pd9aNARoLCQz1xRZTgCNvPhZtXdJemcj3P19f1J57V",
    name: "Lotus/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Lotus",
    quoteLabel: "USDC"
  },
  {
    address: "6dPMn59sDpJZmg1sXoY7DiyYFh9a2sSckjBBdTxQyNWy",
    name: "APT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APT",
    quoteLabel: "USDC"
  },
  {
    address: "34Gi8xC9rTGe1w4BhUURaeQ797Cbd44akT9s9g8rS2U5",
    name: "PUSSY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUSSY",
    quoteLabel: "USDC"
  },
  {
    address: "DEFe2enC8bwff9XhPzFhN2mcYqo2vqxocayrCue8jus9",
    name: "DOBO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOBO",
    quoteLabel: "USDC"
  },
  {
    address: "4aZtaAtHFHqkZ9oNk88zrAFUMUKCFHMCnmVCUyHzJSSo",
    name: "KEKEW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KEKEW",
    quoteLabel: "USDC"
  },
  {
    address: "748ZvdovG8AvcmRnYV3tAZ2sC3um97ebTdN6tBGKGTev",
    name: "UPDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UPDOG",
    quoteLabel: "USDC"
  },
  {
    address: "LJE8kw3MsukwCCvvyL6Yj9z3evvnXqYdagtV1S3pwtG",
    name: "GINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GINU",
    quoteLabel: "SOL"
  },
  {
    address: "7WKqSn9av1d65YuWDhMhmsqdm7nEVzixwvZjW3UYmB4M",
    name: "BC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BC",
    quoteLabel: "USDC"
  },
  {
    address: "E9acyUo5tJN5oakPcMkJtYcpX6LRiyp7imQpDC2s3Jgj",
    name: "BPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "J2Qmbb8Fuagyy2BWttqdvZcBXn94ZcUQy4Y4rZmyiZJP",
    name: "KWTTM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KWTTM",
    quoteLabel: "SOL"
  },
  {
    address: "94gEk8j8Jp1NXdzURVwcnGui5YpMtqJ6MKA5QzKCX6kq",
    name: "LONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LONK",
    quoteLabel: "USDC"
  },
  {
    address: "4ntUYUtvaEBhooVmpVmcRDdxr2Dj8JbdfyW3DuGzUbEj",
    name: "CHIMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIMP",
    quoteLabel: "USDC"
  },
  {
    address: "3fNRm6weikLNdAS2HhVYgtvY89CW1yUTdM8DH8y97kPD",
    name: "SPANK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPANK",
    quoteLabel: "USDC"
  },
  {
    address: "9sCurLLECMHwJDMUnPUKiRpJRuod7UA9Y6esiEt67k4U",
    name: "POG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POG",
    quoteLabel: "USDC"
  },
  {
    address: "9jeWBta1hPxrFsFPALYsGCmsw9erDcaAzAJEE19zTjUZ",
    name: "SMART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMART",
    quoteLabel: "USDC"
  },
  {
    address: "3A2zum5vC5vBiSecJ4Z8bVnGZTvByZ7R4vaXxTSsbiEW",
    name: "SOLMOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLMOON",
    quoteLabel: "SOL"
  },
  {
    address: "FDop5Vw7wTbhx4tVS6qYd4kJVuod2DDFSQ28XipUZKXt",
    name: "INU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INU",
    quoteLabel: "USDC"
  },
  {
    address: "2WDXE9EBtVP5uiQDGLS43mwypxTcbEf4GEn5e2jgMGKL",
    name: "SDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "42YMef7hYFx9STX2wcFd6WXeZPuUfQ8mzNtjdgBP4Lkt",
    name: "FILES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FILES",
    quoteLabel: "USDC"
  },
  {
    address: "DLdt65XHffTL4D2WB8odDUrdFMTU9ZsNksWDTgy7PoN",
    name: "Fairy/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fairy",
    quoteLabel: "USDC"
  },
  {
    address: "9zeWrssi7TtfpPc4Z9BUtzTuTQrkK1x5UJ1ohsfaG2zF",
    name: "BONKF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKF",
    quoteLabel: "USDC"
  },
  {
    address: "4DPTpjFCJuqtwKQjzJmT4k7TGmnFhaS2zvcFxwhaqRdL",
    name: "DINO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DINO",
    quoteLabel: "SOL"
  },
  {
    address: "AUzfCby8M6pHNEPUZv3AqFPr7pwk7GHhv6CWgFQCQcjY",
    name: "Wombat/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Wombat",
    quoteLabel: "USDC"
  },
  {
    address: "ACRAhfgEv3ur3y14Ws9msxawvqPRCRa2oVek9c2QUJNA",
    name: "SANAL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SANAL",
    quoteLabel: "SOL"
  },
  {
    address: "GVWXcuVTQFeTRuYR2SzsJUfxTzNnBLL1pVzvLLHtNMvF",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "3mppC8aWcEWv9NhjK4WSzzR4VWJ7gXPq3weJrut68ZfN",
    name: "BONKp/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKp",
    quoteLabel: "USDC"
  },
  {
    address: "2VSuNzAYxiCt1E8VDWQL23AREBhUVmR4KgEWto4wdqxt",
    name: "DUSA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUSA",
    quoteLabel: "USDC"
  },
  {
    address: "8M5vP6LaXXZy5TJs7675h4Vgu17sXitRmFZwDJJp25kH",
    name: "CBT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBT",
    quoteLabel: "USDC"
  },
  {
    address: "9gPFfcP3U99BfvyZVmWomibodnC8i4PESNA23iiLqRN2",
    name: "SOL/BOZO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BOZO"
  },
  {
    address: "2H3Ajm2Wc5rs198eHLFHZ8KSGCLWU3jLpt6qjm6o47BW",
    name: "USDC/NPC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "NPC"
  },
  {
    address: "4WqLYReeMT2o6RkN3w5rVHVXJ9TBfQRF6oP2ENyMNbU1",
    name: "MONI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONI",
    quoteLabel: "USDC"
  },
  {
    address: "3cDkdfyapiFhApBDSSt6Y5SPKADj8yRiED9q7bei7dUn",
    name: "SOBEK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOBEK",
    quoteLabel: "SOL"
  },
  {
    address: "5Dv9TgLFrKZcS3p6Eq4TBLmmnS22thtky71oPrmDFrgy",
    name: "BURGR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURGR",
    quoteLabel: "USDC"
  },
  {
    address: "FrD6p5AdPrAeogzVCGauLiD8pn5kVNqBTCZroggczuiN",
    name: "GOOSE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOOSE",
    quoteLabel: "SOL"
  },
  {
    address: "3uLtpEP4EBTrApr6FwC2C21QCiz1RodqbZ5uWwFvDSNZ",
    name: "LUCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUCK",
    quoteLabel: "SOL"
  },
  {
    address: "3jTvk4G1rFFG6yeDMc4LyBG8cLUXFY3KbkM3ZHo1xNMB",
    name: "CHAIR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHAIR",
    quoteLabel: "USDC"
  },
  {
    address: "3m7xUPZVY8jJMAXjq3XEeSmVp5tQH4PbtK1yhdjw2j4j",
    name: "PUG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUG",
    quoteLabel: "USDC"
  },
  {
    address: "Aw93HUF5Rwkf3ujd5taeSJaportXDcMeYq71dpKmXoTj",
    name: "PURE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PURE",
    quoteLabel: "USDC"
  },
  {
    address: "FMpkXhAd6SB52ufouAjoVGBzuNJXJbfjagnwyCWDVx5H",
    name: "Fshiba/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fshiba",
    quoteLabel: "SOL"
  },
  {
    address: "9qnU6JmNqUzwihK9y6JU1MWkrDqsrnaNdcoFfNCXpMf3",
    name: "SICKF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SICKF",
    quoteLabel: "USDC"
  },
  {
    address: "EQEZ3uRtFqQw8wiy8zvttPiHvXXW5C5t5ACLDRvZf2qg",
    name: "APSO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APSO",
    quoteLabel: "USDC"
  },
  {
    address: "8AbevLCnH644cqMkqTCs37aka1sBw6ZwCXFEaowkfbfo",
    name: "Toly/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Toly",
    quoteLabel: "USDC"
  },
  {
    address: "26PxHTbSsgQJmM5uFfPDbGqbaa3tG5SGoRrgq1TmXp8N",
    name: "Comet/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Comet",
    quoteLabel: "USDC"
  },
  {
    address: "HLCGiNyivPvBVhPtkbgrCWdnUT78j4r7kAW1cnMPqYE5",
    name: "BEEBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEEBONK",
    quoteLabel: "USDC"
  },
  {
    address: "BKzzrDGyg2ax8SJeBPP2eZxowpwLou4T4Dx27ZrHcUEZ",
    name: "CORGI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGI",
    quoteLabel: "USDC"
  },
  {
    address: "HWCgTcS6nUNgNAM3fbNuZozXS6d5DGUADupZRuv5QgNR",
    name: "SNIC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNIC",
    quoteLabel: "SOL"
  },
  {
    address: "G7GeHfxKNm4yMiBUTwkFLW2ujor5vGfoFLdCbon4dfv1",
    name: "Oni/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Oni",
    quoteLabel: "USDC"
  },
  {
    address: "EF6eqK3EyhCPuv2E2pFFbh6R1YAAG2tCZ2Q318QCv91Z",
    name: "TURBO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TURBO",
    quoteLabel: "SOL"
  },
  {
    address: "BgkdscM4GFLEZm7r3PLFF6FGRcRnEHXtMEdctJPH8Rnq",
    name: "HAPPY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HAPPY",
    quoteLabel: "USDC"
  },
  {
    address: "FwBfkjwFFEhTMcoBfKDr8rs3KkKRQ6EQnVYczm7dmujm",
    name: "HORSE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORSE",
    quoteLabel: "SOL"
  },
  {
    address: "FTJU9kuTaoQ5czXc7jSHzr1CPQ81RVBLh4KEv1WBiAQn",
    name: "Soli/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Soli",
    quoteLabel: "USDC"
  },
  {
    address: "3poZ7q7SxyjyJfvzDwwgmaWJKgrvBn9LjY2oKqmf8LSL",
    name: "SILA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SILA",
    quoteLabel: "USDC"
  },
  {
    address: "81REzeRQkZM2KrMeJzEsmdMYQqDAkMmqSBDYUDNi6EAg",
    name: "DST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DST",
    quoteLabel: "USDC"
  },
  {
    address: "A6KGartGgfuQupsjnpEPpEQ43squE8jwz6N74Shz6UeY",
    name: "Bink/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bink",
    quoteLabel: "USDC"
  },
  {
    address: "65UCpLv4sbEU12gvAcew6cC44ftNKoRCg26vGjQ7bNkq",
    name: "Claro/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Claro",
    quoteLabel: "USDC"
  },
  {
    address: "8soADrNd1SifyNy9mnSJCJxRJQucc7MSCa1j5nC5CQYz",
    name: "DDARK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DDARK",
    quoteLabel: "SOL"
  },
  {
    address: "8X1quSpBNEbtrzcDzgffDD9r838J6NGSfZ76RBkV9r1m",
    name: "CRYPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRYPT",
    quoteLabel: "SOL"
  },
  {
    address: "5dMJGsB55w3HWxhd5mesS1vtbHa9qPgtRJKYQfxvZCAP",
    name: "USDC/CUJO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CUJO"
  },
  {
    address: "9aDyfDVLoMQnP4Q3QmjvMktDYRjPHgvvzJYU4eHhTVzV",
    name: "AGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGPT",
    quoteLabel: "USDC"
  },
  {
    address: "6qf8RJab8EFB2TcpTCMqWSEnUL1czW7CmPwpDeSUuGUA",
    name: "FLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "CSa7K6eX4HWz2JLHAhDiq94P3PTV7HMj3mVhNtxhLSvE",
    name: "dogPLEX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "dogPLEX",
    quoteLabel: "USDC"
  },
  {
    address: "2mdw5F5wy2B1Avq5fof9Qk21DRsdRqkeHbR8g6epj2su",
    name: "COCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COCK",
    quoteLabel: "USDC"
  },
  {
    address: "G2BVscaXjkYgZN3x1iReSJGexpciML8T4925PZ2CucyH",
    name: "SLC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLC",
    quoteLabel: "USDC"
  },
  {
    address: "CYZWk4Cxx5BhhJDmdq2RYowfpaenmXyuZJTDMuz8t5ma",
    name: "CORGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGE",
    quoteLabel: "USDC"
  },
  {
    address: "6bwhPwLbS2Gf4K8LmfcB7APUjCxPEtMsLBA54BMAxkT7",
    name: "GUCCI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GUCCI",
    quoteLabel: "USDC"
  },
  {
    address: "4a4wpuJsgf5vJhH7wTRpDgXvKcFKm4EqUi57Nz4P6EdE",
    name: "USDC/CHIKA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CHIKA"
  },
  {
    address: "CcMxdy7z6Usv4oeoMLFyGywh4poUh1LCUYF6VRHUJLNd",
    name: "ISLM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ISLM",
    quoteLabel: "USDC"
  },
  {
    address: "7Xm6NrwfaEsZqTYWtUf3joGBeJHQjMmT9YSiHtsJWX2v",
    name: "SOLO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLO",
    quoteLabel: "SOL"
  },
  {
    address: "3wjGS1nrF4VLJPQeAQfX3qPkFDZwEvTMupEY81uuswVv",
    name: "BCAPY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCAPY",
    quoteLabel: "USDC"
  },
  {
    address: "DenxsksYw2yAiE9jETE4SQQGBSRfZF232mZX55D8a2sP",
    name: "HDI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDI",
    quoteLabel: "USDC"
  },
  {
    address: "D3CBkCfmu6APpSBa5UTHDaQD1ubzaYWC3GAT5UFQYWhs",
    name: "HB/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HB",
    quoteLabel: "USDT"
  },
  {
    address: "489DooZh1QqzCbQqn9GhjV62QJ8yZ7ryVN9byjGXiSXr",
    name: "Toast/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Toast",
    quoteLabel: "SOL"
  },
  {
    address: "4WKr6hkKo57WZdVQBuV9gU4Qhbw83WA9ia7M1aevtPDo",
    name: "DOGIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGIN",
    quoteLabel: "SOL"
  },
  {
    address: "3jNAV3eeTMTWEAsrLUEYvG74CutXiDxa9rcvfNu3sjxp",
    name: "BOXCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOXCH",
    quoteLabel: "USDC"
  },
  {
    address: "5XahYVNSb1HvJPASa5G59ZYcvzDxcoQyY8BRVNj6VjwQ",
    name: "USDC/CCGTP",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CCGTP"
  },
  {
    address: "4vRHrMDqkVBtaaERUFafHML7V5uo1FgMoZ2pFKJvACfP",
    name: "WHALE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHALE",
    quoteLabel: "USDC"
  },
  {
    address: "6zsrd3G4qQJMQu2JM9Uu4k4kfamGM8cSDaFjrnso5j86",
    name: "LAZY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAZY",
    quoteLabel: "USDC"
  },
  {
    address: "48pqqF9HS6LE78iGtDz6ay7dMejmoWbb63BvqyqNXZwr",
    name: "CORE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORE",
    quoteLabel: "USDC"
  },
  {
    address: "ES12xXEFhn9P2jttJYZk9vqCHGHJQ1Ce5meX12BoL6jY",
    name: "USDC/BLUE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "BLUE"
  },
  {
    address: "29hNeAJ7txS6rfwDnxfMYBibTSwZUGBnAwHp7kcChc3U",
    name: "Kinu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Kinu",
    quoteLabel: "USDC"
  },
  {
    address: "4idBKVZcwZUcaf3gi5GBzMb4MWX4ghXPmJHcGFfCT17F",
    name: "RINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RINU",
    quoteLabel: "USDC"
  },
  {
    address: "DEMNZQsevRraH9m5wtQFqCzLeDKLW5HqrkZifK71cTv4",
    name: "SOL/SolDoge",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SolDoge"
  },
  {
    address: "9j692dxs8gjUBUuoR1FLmQsAFcPj4jSqTHdPE6t9piUu",
    name: "GAMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAMI",
    quoteLabel: "USDC"
  },
  {
    address: "GqyrSWxHthhd2dCqAqqurb9ieL5zxcUmzDU8ZzrZxeax",
    name: "SHRK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRK",
    quoteLabel: "SOL"
  },
  {
    address: "Anm94Hc3tehkNCpoXyNAkrkRbYLMVDa3QRrDhZZzngr1",
    name: "PEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "SOL"
  },
  {
    address: "FwGU1qsYVTnaKzmQeHbezXQ6D3v34KvhyZaYJgoS7ePs",
    name: "DIRE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DIRE",
    quoteLabel: "USDC"
  },
  {
    address: "ErtVUfrd5t7CJGK1X3gzb7gPxHqA5eGxof3zDmMAxcXS",
    name: "HORUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORUS",
    quoteLabel: "USDC"
  },
  {
    address: "7AyxAnw9WGUrdrairRnY2XYoVTBVrMPUy5EN5Jt2UB7A",
    name: "laineSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "laineSOL",
    quoteLabel: "SOL"
  },
  {
    address: "GhYYae3pucN84Quon1GbEWUXS8g3oFpwvSJDeJiqwmBS",
    name: "SLM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLM",
    quoteLabel: "SOL"
  },
  {
    address: "9mxpKVzd8hBY34hJceegQLCkyJttT6wkPFnwR3gPo8HC",
    name: "SHILLS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHILLS",
    quoteLabel: "SOL"
  },
  {
    address: "HKBbRz9eguDfZMyh17MPfNuBgJWGo9VViSNN2Zzvr8Dx",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "GgJFw3k89n8LLhqJNWfKyfJ9k9ET1dE8PfmNmSKiGTZG",
    name: "SIKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIKE",
    quoteLabel: "USDC"
  },
  {
    address: "HhQdVfBagh9u1kD8hEtr72Grcjfnp83h5ND22bmG531J",
    name: "DRUGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRUGS",
    quoteLabel: "USDC"
  },
  {
    address: "CP2vT5rJsXWHWoLAGsVmk2F5vNkdXW4MXadM8SXwkCcb",
    name: "ROTT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROTT",
    quoteLabel: "USDC"
  },
  {
    address: "DMRdGKUDMY5oj3uWbkhoTaSJaUdK3j2Rd73AYECntTmS",
    name: "M51/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "M51",
    quoteLabel: "SOL"
  },
  {
    address: "gWEPVDXQvgEN7YopvGJmbkiVQivpTTNuHzQM4ubDGsL",
    name: "test/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "test",
    quoteLabel: "SOL"
  },
  {
    address: "Ga3c7JfGAfd4on3wTBB6xvj4zijKKJx329WCde9o7GcB",
    name: "BCORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCORG",
    quoteLabel: "USDC"
  },
  {
    address: "2Kn9iDFQqiwK97V1FYqVbvGWPKww5DLAsztoPqB3tfrN",
    name: "test/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "test",
    quoteLabel: "SOL"
  },
  {
    address: "BfTnzRiyjQyXZdNKyo1srNxSY2BdyTbzXFfaUVa4EeCV",
    name: "YOOB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YOOB",
    quoteLabel: "USDC"
  },
  {
    address: "AEG5x13jgsC44WhB7RBz5uGQcQhhJRK8qaEDQ3hz1LN9",
    name: "TBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TBONK",
    quoteLabel: "USDC"
  },
  {
    address: "8LFbtimTG28xMKAxnBqYApBkbfWRSW6QG6Z7cxET5BE3",
    name: "NAXAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NAXAR",
    quoteLabel: "USDC"
  },
  {
    address: "8FXNpVDin9QwebE5eS2syuB7b7MykcXELiCHCm6P2HUy",
    name: "PUTIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUTIN",
    quoteLabel: "SOL"
  },
  {
    address: "6bSwGMu2dbzxVAncTckciVcgZvrm55BGafSA1zQe5eF1",
    name: "FWOLF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FWOLF",
    quoteLabel: "USDC"
  },
  {
    address: "3SfMiFDwBBGP7j13WCQbnKZ69yzViVZHqjpeXLKKg4KG",
    name: "1ST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "1ST",
    quoteLabel: "SOL"
  },
  {
    address: "DrmpwMbMxPxoD7tJ3qMoZUR8289o71Fuz6ds67eKntdJ",
    name: "Alpaca/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Alpaca",
    quoteLabel: "USDC"
  },
  {
    address: "5TqkZoCLCrcAQv4FAbdkYkceue4M8aFbH7NJasiR6iEU",
    name: "SOL/SM",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SM"
  },
  {
    address: "Fs8A25cHNCSmBQaBMBYyZb4CP5VksRqw48ByZifmVb1d",
    name: "MUINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUINU",
    quoteLabel: "USDC"
  },
  {
    address: "7VD8KWjqiewKjC9mEJzaAdqwYymbLS8EyJzGz3jK8jn3",
    name: "DNUT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DNUT",
    quoteLabel: "USDC"
  },
  {
    address: "2BKsUoRqxdpZbjoJV7dtrkbqpCZfwFhmeV4bp1VV2mae",
    name: "BOXCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOXCH",
    quoteLabel: "USDC"
  },
  {
    address: "HWidJvEYXBVQgiCXFjP5bduyThUCGTeh3Zh5cTLx6J7J",
    name: "NUBI/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NUBI",
    quoteLabel: "Bonk"
  },
  {
    address: "9AxjV8eHCq86FcgM5cbGh3EVsmLGTUjhZxTPVnWdfgwp",
    name: "CLAYMKR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLAYMKR",
    quoteLabel: "SOL"
  },
  {
    address: "DazVxAgUa774Qn4KSJFqBgsWmSijdz7J4muDCeof6uT9",
    name: "BABI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABI",
    quoteLabel: "USDC"
  },
  {
    address: "8wRaf4xAfFMjsZhSmsJ9TgYcvL4FqDTwkZpsRqBwKhrW",
    name: "GTA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GTA",
    quoteLabel: "USDC"
  },
  {
    address: "93JjKxBaKjRA25aPaYajUkUs3ChiT4VmHYBK7YVPwnTx",
    name: "tigma/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "tigma",
    quoteLabel: "USDC"
  },
  {
    address: "7xk1fk2CwH4HYgJ7zZmjwqRjNXmZhphzygqLoDt5CFrw",
    name: "RXD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RXD",
    quoteLabel: "USDC"
  },
  {
    address: "G9vRS7TdUZz87QZCCdBi9WrTLVL3GC6jB5VTadNRABX7",
    name: "smol/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "smol",
    quoteLabel: "USDC"
  },
  {
    address: "HZaWUoSe9njS1ApdJx4uWtBMvki3HRdaoVz1xaq8szYX",
    name: "DERPA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DERPA",
    quoteLabel: "USDC"
  },
  {
    address: "5xS7fqZUdbSAdzrsbEWS4WJtcAwKJF3J9AtUQQrGJ4GY",
    name: "Fronk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "SOL"
  },
  {
    address: "6EufV7PJrgcqzQDggonvs9UMCoFEegMNwUcnkzr4aMfz",
    name: "HBAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HBAR",
    quoteLabel: "USDC"
  },
  {
    address: "3xRxCKzBLHgrDitaUTcpHwKBRWxJ4jPWgjG5y32mRJm7",
    name: "GRUMPY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRUMPY",
    quoteLabel: "SOL"
  },
  {
    address: "4TwYxMRMY1JTR4e9HN47WS5fQt92DJbeRksHujWn9Dhm",
    name: "CHICK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHICK",
    quoteLabel: "USDC"
  },
  {
    address: "J6BSZNVAit6qwCqu5JDu7earW7RB6jn6xnUhn8XbpK1J",
    name: "Monki/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Monki",
    quoteLabel: "USDC"
  },
  {
    address: "GDcvJnFHAgic5qFHs3MCkF5kQQdDi14pdPeQydqN9GzN",
    name: "SOL/PMOON",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "PMOON"
  },
  {
    address: "AW8vDRa1HHgaGVQT3yHbJYh1GEghGBmLPUEHdWGfc1rF",
    name: "SNOOP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNOOP",
    quoteLabel: "SOL"
  },
  {
    address: "Bsx3uZaPEHmK93vCt1Dr2D2TAr3AG5nh85orq42Uw33e",
    name: "SWOLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWOLE",
    quoteLabel: "USDC"
  },
  {
    address: "3A14kwxpLXjFjmjVz73ucGhkyzVAPfVTmZ1uhTCFon4C",
    name: "HDI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDI",
    quoteLabel: "USDC"
  },
  {
    address: "53CqCz8cWZ5uD6cQub1EWkxmo14j2tTE7QoYEwWdPkAR",
    name: "SMONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMONK",
    quoteLabel: "SOL"
  },
  {
    address: "9bYT4ofkShU9ioTJLEUKSy8BR1FXCkpZXfWuxTGMNJaa",
    name: "SKC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKC",
    quoteLabel: "USDC"
  },
  {
    address: "AdgroiSd6YPA2iTZcASWGeeD8eWAVPZKasgBsJjc29jw",
    name: "SPELL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPELL",
    quoteLabel: "USDC"
  },
  {
    address: "6p5zUvaTU721vWH6gDFhewmVV8VgZXYS8AiXRpbNPa9B",
    name: "JWORMS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JWORMS",
    quoteLabel: "SOL"
  },
  {
    address: "65itFrmHDLNZK26S3C9NZMZ1Fj6gkrZ64jvxfqpaiBAK",
    name: "USDC/KEKW",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "KEKW"
  },
  {
    address: "G3Y9aQTjMRTnpYmSpZB6pDgBpKhMsC9BfHdCjPx5ZDVz",
    name: "AURY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AURY",
    quoteLabel: "USDC"
  },
  {
    address: "AXgZRPD3mtPtQLtZMsLyibHCFSbRMVr3tzfUCs56iegA",
    name: "XZC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XZC",
    quoteLabel: "SOL"
  },
  {
    address: "FjRy8u5s9v1JbLdSTpuyBu1FHLhisk6AHS7MeDhX56Fw",
    name: "EYES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EYES",
    quoteLabel: "USDC"
  },
  {
    address: "CAYoZNFLqwrGK9Mp4nZWWmfwi2HmPeUK8WKz5wpHARbg",
    name: "LONDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LONDY",
    quoteLabel: "USDC"
  },
  {
    address: "9x8extSm4eJuMQKEyxq7JfC4H4MHAV2MpngtqdWoxXTb",
    name: "PUGAI/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUGAI",
    quoteLabel: "RAY"
  },
  {
    address: "7GEVYP7LkqG1VzSzoocqPbwshc8XLQ1WSrPD5fdHmcc8",
    name: "NPC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NPC",
    quoteLabel: "USDC"
  },
  {
    address: "4jFqQCdMuW5G4eLsRTZYj9Fkvrw4Wy7GCXeUJYkuyTTY",
    name: "HEIST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEIST",
    quoteLabel: "USDC"
  },
  {
    address: "2yNdsWacZ1bz1VF3NtpHhZd6RLB59zA4Ud1wYC5VpE76",
    name: "PEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "SOL"
  },
  {
    address: "4BrTqBDrxyenVhRqf4iKaBFrYoAVbLeeA8cQLTA1rHHK",
    name: "DBUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBUN",
    quoteLabel: "USDC"
  },
  {
    address: "FuuyBd7Q5drrM2wV5A9xZTZBr2WFayP97QynmxkY6d8o",
    name: "RONIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RONIN",
    quoteLabel: "USDC"
  },
  {
    address: "GRqYxLkx54rrnEfywRDBBhpWmdVUx7mfEVpNaSENJTQL",
    name: "W3SID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "W3SID",
    quoteLabel: "USDC"
  },
  {
    address: "GXjS7zhRSnAVs42B7qKXE8w1tB8btaL2xZLtyp1A3ek6",
    name: "DRAGL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRAGL",
    quoteLabel: "USDC"
  },
  {
    address: "5Efr9JKZLW7jts2S9BctUfcHg8c93zi6H2CFmgVPSMLd",
    name: "CANDY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CANDY",
    quoteLabel: "SOL"
  },
  {
    address: "DPjsr6HCCiKKGfjxCcohnf9yVZP8GDiG8hamt1EVVgtj",
    name: "DGZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGZ",
    quoteLabel: "USDC"
  },
  {
    address: "BW9gp75QN2DgftnG1Vvu7PbP119EP4xEE5eFXXHkaiea",
    name: "Fronk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "USDC"
  },
  {
    address: "Ara4MtXfwg4d4k9gJRg9MZCWyATvENahPcpHrJwDz3Xj",
    name: "ZEUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZEUS",
    quoteLabel: "USDC"
  },
  {
    address: "GkWzEkrxyistgRmT8oJ5KsZRu4joUL7sdWuXymjrBby3",
    name: "YOSHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YOSHI",
    quoteLabel: "USDC"
  },
  {
    address: "6nni125Dwj1aWuVKqUbdxPpoQr7Xw5ghZ3kBaSP5mweN",
    name: "COBRA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COBRA",
    quoteLabel: "USDC"
  },
  {
    address: "8g6MKoPbD5M9xaWdgNM22eBXTGbA6znsbJ1YBZLkG2i3",
    name: "GRIM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRIM",
    quoteLabel: "USDC"
  },
  {
    address: "AqJcvv62gNHVHTsjgGa8ihDVGHMHV2pSazCZDiKuVD5U",
    name: "HDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "BPLyxbJd2iTcEqjBx4QUGQYwq4VpVbYbKHwuGuwjFtL6",
    name: "IFS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IFS",
    quoteLabel: "USDC"
  },
  {
    address: "Gwy2gcvrUBTbbLP3YHGtW59cvy3qKt12gFzwRB5DnbRh",
    name: "WBUTT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WBUTT",
    quoteLabel: "USDC"
  },
  {
    address: "FQd4QGHkh1iAnG1W3qdX1VELHFS8vTcewSpAGzCkyJhv",
    name: "BUFF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUFF",
    quoteLabel: "SOL"
  },
  {
    address: "DHTLMapHasgydm666mxVYa594DtYfnDNKpPhFLAwgHEK",
    name: "STR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STR",
    quoteLabel: "SOL"
  },
  {
    address: "9wzbkzqXPwi2X2mhZHZt29aYwTWoKhgfTYgfmMm3qJxk",
    name: "yungKUNGFU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "yungKUNGFU",
    quoteLabel: "USDC"
  },
  {
    address: "DRTArEZB1QP23WwEZY74EYZ4raqCBguEwf3FuAtRjFn4",
    name: "USDC/100TN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "100TN"
  },
  {
    address: "9SAtkqoJFVzK5V41v21PxpwQZnRvjqJmRL1ePGvppFcK",
    name: "Fronk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "USDC"
  },
  {
    address: "FNxTE9UKhmTwrVaaukztGzH43veHcWHAj4UtUaWLQQK5",
    name: "CUTLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUTLE",
    quoteLabel: "USDC"
  },
  {
    address: "A3fotUSMEQTCoUqsMvvSop8Nr25u573pCBTtk3TjR9hE",
    name: "DogeAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DogeAI",
    quoteLabel: "SOL"
  },
  {
    address: "6LPKKoHJcnAnPgBXyDcgNokrGGGY4hqMWdpvGkvLNfmE",
    name: "SNOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNOW",
    quoteLabel: "USDC"
  },
  {
    address: "6GvGHFrfTeDPnuHNFjQJ562XsTQtLGzPjTUVU1YQmPuz",
    name: "GAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAR",
    quoteLabel: "USDC"
  },
  {
    address: "7KuhrH8w3PhF1rRySAPSCyJoohZraKZaHf3cATkML994",
    name: "SBTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBTC",
    quoteLabel: "USDC"
  },
  {
    address: "38H8fBDbzjm8L7anoLewFE4YfVkG4w7szHijDRyXbXAa",
    name: "COLLAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COLLAB",
    quoteLabel: "USDC"
  },
  {
    address: "6LV7wsdpzsCDL8UXC9cahgyWyRAiPmtgmh1mjfo52Umd",
    name: "BSI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSI",
    quoteLabel: "USDC"
  },
  {
    address: "AANdsj3K3dyv2y2tJ3VYUU13Hg1Aa6NXjuqY2GnhixyQ",
    name: "MOUSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOUSE",
    quoteLabel: "USDC"
  },
  {
    address: "8JJ8nrqc3HsBeu9TavkEr6iQjYNt6G48PmHTWzSHeDkn",
    name: "PEPEG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEG",
    quoteLabel: "SOL"
  },
  {
    address: "4Yu8QSUPujRDbUW5MnRgjLsT5qdfUZyw1y6YEUuyZu1C",
    name: "SNEKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNEKO",
    quoteLabel: "USDC"
  },
  {
    address: "5yQCUo5UkGp2MzgMnQhY26APvkGHdsUmQ9U66m2CeTRz",
    name: "MIXUE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIXUE",
    quoteLabel: "USDC"
  },
  {
    address: "5rVA9mQZLHQAWBZLgKw8nP6HPw1hEBBG3xkXMQzPCmWK",
    name: "MCSHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MCSHI",
    quoteLabel: "SOL"
  },
  {
    address: "9LQoqBk6W5BXarS2LTMaJkUFQWiBARNcNkcQk9JSDQbQ",
    name: "PMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PMI",
    quoteLabel: "USDC"
  },
  {
    address: "BuM5f5rDLtEzLk148uCzv7kfZDupwC6nbhzQAgaJHsvk",
    name: "DOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOG",
    quoteLabel: "USDC"
  },
  {
    address: "29H6FoFb67BsEWxhBjKPArN7qNYaDUpQovVJRccZvEZL",
    name: "Bonk/SBONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "SBONK"
  },
  {
    address: "4GpazHDKMkNJrvwE6mircK4me2uDVfeNqu66UWY4Wwva",
    name: "MONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONK",
    quoteLabel: "USDC"
  },
  {
    address: "Dye5TNeEQUNoMk5h9STqPyxoXPN3P5WveVLe5zS8m6gX",
    name: "CKC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CKC",
    quoteLabel: "USDC"
  },
  {
    address: "DS1WsrAy9HhtpSQWmUWjm9rLGpFAbs1S4foqHKgyXM4F",
    name: "ACS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ACS",
    quoteLabel: "USDC"
  },
  {
    address: "8kxxhiMVAtudTyE4XnojNjmR5ujncYRDRQZh1npcuJbN",
    name: "OpenAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OpenAI",
    quoteLabel: "SOL"
  },
  {
    address: "jjFoShJwkqMnz1fQaucxrpdZWrpb3aiMCC7pLf41Xo1",
    name: "OKAY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKAY",
    quoteLabel: "SOL"
  },
  {
    address: "DpNCMUMYX6teyFhrCDsHWeVJrvGzevftmi1heASru38G",
    name: "PIZZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIZZA",
    quoteLabel: "USDC"
  },
  {
    address: "8TvQAsoTmhgwNQRZHRUAtVzEZ2jpMDQBAp75fWHdSahj",
    name: "CMUK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMUK",
    quoteLabel: "USDC"
  },
  {
    address: "2BRMfhR5cJC2mGEdKKprM61vtnfvQgkyZt3EsPgWJuLn",
    name: "POO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POO",
    quoteLabel: "SOL"
  },
  {
    address: "43daWmXP72aduAcDwzRtPwwvDvPFkxUmgYecMqAWxLda",
    name: "TOMKET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOMKET",
    quoteLabel: "SOL"
  },
  {
    address: "o4cUVv9AcvJDodBmjwbToJKjE8gCxx43R5jH3hQgyW7",
    name: "CONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CONE",
    quoteLabel: "USDC"
  },
  {
    address: "HQ7YJd3ykvEBCwvNTEbeY9NmNBjYGiGZPXu8AcQMMWEW",
    name: "ROVER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROVER",
    quoteLabel: "USDC"
  },
  {
    address: "FSviz5DCxceNmxReRA2sHTbp5CtVSxzZBLdNpExRfE4m",
    name: "DOGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "USDC"
  },
  {
    address: "TDmebwgdeuLxk2gzn8n18hof7Ep3pY12KUpz6anL8QG",
    name: "AKITA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AKITA",
    quoteLabel: "USDC"
  },
  {
    address: "Bhf3cSjrPHpxrrPCWUjKU2rcbb3db6euK6gfMQyjRKe7",
    name: "Fronk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "SOL"
  },
  {
    address: "432VfDVFtjX11T8LwbYpeQ6jwRxGCei3foBSqxQ7DYrV",
    name: "INFA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "INFA",
    quoteLabel: "SOL"
  },
  {
    address: "7zwxFUrg6NHjXWEkHwem5vF49M8H8fQUp3JFjr3zYb6e",
    name: "BINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BINK",
    quoteLabel: "USDC"
  },
  {
    address: "47zEwE1maeMst9KGeSWSndp9xHMBiksW93dzECxNiUYG",
    name: "One/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "One",
    quoteLabel: "USDC"
  },
  {
    address: "DwXdffXqJHwvhoLt2urCBZz36y8UPee48dsKAUneYjAj",
    name: "CATZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATZ",
    quoteLabel: "SOL"
  },
  {
    address: "7a419xQNMEF7VRNtmuxS4CAgujTbjXR9BXC395qhtnmC",
    name: "TRENL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRENL",
    quoteLabel: "USDC"
  },
  {
    address: "CwT2jXHUGar5yHgzjXfMb33txL663sViGHKCDZnYoQFF",
    name: "BEE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEE",
    quoteLabel: "SOL"
  },
  {
    address: "EcqvCUAQACviAjwYjSBkCLaKMBznbyQGXNf5MwoBEJfk",
    name: "PEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "USDC"
  },
  {
    address: "2LRKm6zq4KYMmvCiJL2QfK7zGtF1Wmcz9tRsGe6uJ55D",
    name: "RHINO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RHINO",
    quoteLabel: "SOL"
  },
  {
    address: "2ECGRp9dpDhqFZy7igTe1g11vE7w1nrVYCPU8ysb4RBE",
    name: "SOL/SOLON",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SOLON"
  },
  {
    address: "EiPjRagh3vWXEYPAKKmuZ5cN8pSDWXjrNv5KTBVnjaxK",
    name: "MeMe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MeMe",
    quoteLabel: "USDC"
  },
  {
    address: "5j6wA25zRKX8KWnVTN94iB8FyswRxMsV9nMonD2HhFtA",
    name: "FOXS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXS",
    quoteLabel: "SOL"
  },
  {
    address: "D8vt8vSnitHguCS1QyNRcC53ritcMUkzzjb7ihWb2ZYM",
    name: "HEIST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEIST",
    quoteLabel: "SOL"
  },
  {
    address: "ChFBdvhszo69u49GkSBqmusovtryKtR8hLERbX9czeyB",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "9H8JKcCqYSWRhpe7mMRN4EbD5zdZxk2yj9uqqTopD6ME",
    name: "SOAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOAR",
    quoteLabel: "USDC"
  },
  {
    address: "7XRysR9hiBkWZNp8M56JPk3XoJpbw6WYhTqpD3z3TFQU",
    name: "BRGER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRGER",
    quoteLabel: "USDC"
  },
  {
    address: "FoN9qL4LmzR4V6aP4tfP4hcemLuxQKdMNMaUxXhNvxLu",
    name: "BPEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPEPE",
    quoteLabel: "SOL"
  },
  {
    address: "4VtgkUxaDgHDUENQMYkXBtHH3LFTdrMESJfFfDbnZazj",
    name: "SOBEK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOBEK",
    quoteLabel: "USDC"
  },
  {
    address: "4hA5SeabQQZSKiiGuG4AKA5t5wo21auDb569oVHRaSt4",
    name: "GREEN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GREEN",
    quoteLabel: "SOL"
  },
  {
    address: "CVcHAyTANQYLEzAZXYyBTR9Sy9WBFhfz5o4c7Pevymob",
    name: "SMOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOON",
    quoteLabel: "USDC"
  },
  {
    address: "9RFbZYAHtSf6hYMfkEbkuPhwkDTf2szwWHym9WLWJpM4",
    name: "USDC/Slime",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Slime"
  },
  {
    address: "5w3iUWMpmav887z5WRMELjcuVXnGXG5xHXy7rPAeN5oB",
    name: "BOO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOO",
    quoteLabel: "SOL"
  },
  {
    address: "vszPiPYsoaHehJCVQrsh3bGWxrwUMxssStBNbQzVMQC",
    name: "WOLF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOLF",
    quoteLabel: "USDC"
  },
  {
    address: "FT2AeXkNGXC33dtANzSJVwKVjYvU1yztPtyaYANETPuU",
    name: "DGK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGK",
    quoteLabel: "USDC"
  },
  {
    address: "GwWReqxwHVv4ZWCJipEUum7NUiuowAcqywCS1ESyMGPh",
    name: "PLD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLD",
    quoteLabel: "USDC"
  },
  {
    address: "7yWQUymwKdetPpnLc4ZhAGxF4Rg1zH6JqjtNptjEGi9R",
    name: "PARMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PARMA",
    quoteLabel: "USDC"
  },
  {
    address: "CWE7cau5syaQ1Boaz3WyQCrHSpZgTV5G43BrqsxsntUW",
    name: "VEIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VEIT",
    quoteLabel: "USDC"
  },
  {
    address: "7um6cKHh4op6mHjcT2j8w2CvP3fjJkxgB4evMmAW6GxW",
    name: "BIRDY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BIRDY",
    quoteLabel: "USDC"
  },
  {
    address: "6ktKiBqcEqyLC1yATwNk6sWrHiWSXa1MnpVwhEemtswM",
    name: "CORGI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGI",
    quoteLabel: "USDC"
  },
  {
    address: "FaXERxERUwvjCPUxLXA9zukCE6yK6mF14RPJBbNedwsh",
    name: "GAME/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAME",
    quoteLabel: "SOL"
  },
  {
    address: "EkrPSWrAsyX1ZbUvyobsPZ6FYXCAXKpgyiYsxCuLCERb",
    name: "ICY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICY",
    quoteLabel: "USDC"
  },
  {
    address: "8RDSaXbJLtxofGfHKpJQJmvvCinAEQ6NpoKmkYuAuJkH",
    name: "sETH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sETH",
    quoteLabel: "SOL"
  },
  {
    address: "6SCRagwamCfQtpp1kTp9enuZnVwJEtZyfnnsgKjekptH",
    name: "BABY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABY",
    quoteLabel: "SOL"
  },
  {
    address: "3aXsp77fB74d9wHyda2tYhZSXPdBGfyfbe5a2DrQeVRY",
    name: "ALORAORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALORAORG",
    quoteLabel: "SOL"
  },
  {
    address: "AoXVbpQ4ddUZXrP55tn1E3PiENFN12DAVxB6Wq43scTU",
    name: "WOOF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOF",
    quoteLabel: "USDC"
  },
  {
    address: "A2RMmKKhmvJosg5TkmxNmXigDqhj4rs9mpEXiAkXxFvE",
    name: "DGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGPT",
    quoteLabel: "USDC"
  },
  {
    address: "CwixnM33pC83wj7AK1pETKZoSN9WuGd5Jg2JGB4DiB4X",
    name: "SOLMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLMI",
    quoteLabel: "USDC"
  },
  {
    address: "HNMLpbXAwJLePdDuXSetk9rUMa6kqnLG6Y86oQpvtzJE",
    name: "SHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIB",
    quoteLabel: "USDC"
  },
  {
    address: "BStuakDGJkmuhjw7HP6HqD3dpXFwrBbxUKtsLZXdD9yE",
    name: "HMX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HMX",
    quoteLabel: "USDC"
  },
  {
    address: "8b9SQ4ANjELzhb23MSJaU7svUrCutKfzegftQUfo6hER",
    name: "PEPES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPES",
    quoteLabel: "USDC"
  },
  {
    address: "Bx9SgLUeHYCGUeJ5ZESD7YdUAUC9owYfAhBewWyP2yXk",
    name: "Unga/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Unga",
    quoteLabel: "USDC"
  },
  {
    address: "3B1bHVKE3FbacGS5d6EwLB6JYdJ7d4haKqw7HumXyTET",
    name: "Twste/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Twste",
    quoteLabel: "USDC"
  },
  {
    address: "DxSasBEKiyS6UB4wgqueLB4QAuU3p7aFKcEFVgZuaa1K",
    name: "SOLX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLX",
    quoteLabel: "USDC"
  },
  {
    address: "GEvfaV6nn5fyW9v7RhjkiShqGaBGMPP39Xtinu7ZtMp2",
    name: "PEP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEP",
    quoteLabel: "SOL"
  },
  {
    address: "3kf9XXohcjtNBk8yxCS7DSvRdjmCJgdyfBkojCh8f9Ro",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "9rDwCebjEvH5Be5GxhiaLVFi14eRokyCPMbrqytgWEyY",
    name: "NEMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEMO",
    quoteLabel: "USDC"
  },
  {
    address: "3vfJCQjjaZPxP9LXshzBRe7EgtLPqKqkF8uAjTCES4yc",
    name: "CHIBI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHIBI",
    quoteLabel: "SOL"
  },
  {
    address: "dnN4FL5iiZCBZUYA3FqxDJQSyydn6NVi9j7p521DFEp",
    name: "Bonk/NESTA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "NESTA"
  },
  {
    address: "23FuiSApxHSqystVck9h9MSxRMczPLj1jnZdqaoKaG6H",
    name: "MONKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKE",
    quoteLabel: "USDC"
  },
  {
    address: "3LDdJeqnwK58Lf5hESJei7wzG1e8GcjWv2uguUTw51v3",
    name: "ETRN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ETRN",
    quoteLabel: "USDC"
  },
  {
    address: "5V5PUwipZrnY3y1wdjCKcKarsNEWLv6nHzFkFtf9enpf",
    name: "NEKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NEKO",
    quoteLabel: "USDC"
  },
  {
    address: "FyPVFHyFaY1wMAjYmz6Rz7YufH2khfj5PeNji1UxM4Zi",
    name: "SYND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SYND",
    quoteLabel: "USDC"
  },
  {
    address: "BNgFp4FWvdpQTCdiNGTtNGi7pLMv4drPndAGCboRVhN2",
    name: "POM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POM",
    quoteLabel: "USDC"
  },
  {
    address: "HRpyBvBupVHSDasGbRZK7VBonipsNzHbduVSdyfdSwbt",
    name: "TOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOON",
    quoteLabel: "USDC"
  },
  {
    address: "2ZiTaPpYAsJmiZ8HtzKMJrGiBozXJwPZ5n9pwxB2CCv6",
    name: "CDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CDOG",
    quoteLabel: "USDC"
  },
  {
    address: "CrcQiq9aS2RykWv8GsbVCt1LTcLUyNEJapJd9Y2rjahC",
    name: "SBT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBT",
    quoteLabel: "USDC"
  },
  {
    address: "7Y7DE8h4BVtcRPxLvSne1jTDaakbtXMZyrkto9kxHSTK",
    name: "BASTET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BASTET",
    quoteLabel: "USDC"
  },
  {
    address: "6kiRzUpGaHQfL2Nqkzf8nXVCgBRUKfFDxqfzmWiQBCU9",
    name: "MONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONK",
    quoteLabel: "USDC"
  },
  {
    address: "wF2xVMmsBb59nyfLXSTdopdyGbEXHw1DaAQWpdVq3h8",
    name: "Sope/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sope",
    quoteLabel: "SOL"
  },
  {
    address: "7UfkeQ4N7wPSPmHnmJ4meFQpA6APZ2WP3kja9v3FfuGn",
    name: "MGT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MGT",
    quoteLabel: "USDC"
  },
  {
    address: "B1b7HzDfnptcyKpDEH7gxXeQEUTcouMfGj7A8JqbwUV7",
    name: "LUCKY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUCKY",
    quoteLabel: "SOL"
  },
  {
    address: "9cyuMVBrBiaorfn5y6H5nZhStqUrWB2Y8wieBBaMN23w",
    name: "TEM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TEM",
    quoteLabel: "USDC"
  },
  {
    address: "GYr31QayqvS99djYBdiGxoFVmkgA5YmH7tVDjGhj5du9",
    name: "PUM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUM",
    quoteLabel: "USDC"
  },
  {
    address: "Cg8FCETh6GA1HWQYmyiVzmiSwgRUhhf4x8fLcf82tSRR",
    name: "IMAYC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IMAYC",
    quoteLabel: "USDC"
  },
  {
    address: "4oRBzynuTcHTis4cr1okc9NdWg9J9uLdPHkzttVNQLXL",
    name: "Panda/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Panda",
    quoteLabel: "SOL"
  },
  {
    address: "FEsWdQ267HGNqQANxR8r1WsqnqBmi1XPXpowquGLj88e",
    name: "DUCKS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCKS",
    quoteLabel: "SOL"
  },
  {
    address: "EMQUfLvfcHgo3LqtkFWBeMfM5FXmAmXamFpYFn7wTbXe",
    name: "TORNU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TORNU",
    quoteLabel: "USDC"
  },
  {
    address: "5uGXmnd3Mg57TbuGkVFSJpzaDPCy6vRdFsteFnmUhZgm",
    name: "SOL/KIBL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KIBL"
  },
  {
    address: "6Dg4A267nxSUJTuFZuFJMMiEK8H6Ft3nEUYepVR3DoMT",
    name: "BUFA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUFA",
    quoteLabel: "USDC"
  },
  {
    address: "EXFcC9Qqc2WoDyQadJeSHJGifL2BtaUfaa7DcJasWwzR",
    name: "BONKv/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKv",
    quoteLabel: "USDC"
  },
  {
    address: "H2TnfGhFivmhx5BDuWhvP8TfYUJX7zhrRBm5jxnUi8zw",
    name: "POOT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POOT",
    quoteLabel: "SOL"
  },
  {
    address: "4nY8s6uySzdSdxW4XKendqrKj43Gn3dwW8kvH5Z1eBQ1",
    name: "CUM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUM",
    quoteLabel: "USDC"
  },
  {
    address: "3VLU6NE7rBQqvY3rn5HBKuR35XLJ8DnZB5yATmoNTu2k",
    name: "Void/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Void",
    quoteLabel: "SOL"
  },
  {
    address: "6o8Q2jq6fUeSDfdKNrzTtsGGiJcCTmKdstw2HoF7LBZw",
    name: "WHALE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHALE",
    quoteLabel: "SOL"
  },
  {
    address: "399ZwKXRxmF4NUcENsA4uyMXir2u6asVaHanJ1DMKBtz",
    name: "D3D/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "D3D",
    quoteLabel: "USDC"
  },
  {
    address: "7Ju73qmso1RryN7eLb84ZuGsmC4wJnJoPqK9mzwAYttC",
    name: "SUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUS",
    quoteLabel: "USDC"
  },
  {
    address: "8vZqPt1GyNFzamw6R8BNKhwxNzQnrt3Aajznno7wD23p",
    name: "SOLBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLBA",
    quoteLabel: "USDC"
  },
  {
    address: "F35X2SHhRvXkto5LcEtX7FMWYq1ohFpSDgbZQsffkMjf",
    name: "ASTRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASTRO",
    quoteLabel: "USDC"
  },
  {
    address: "4JyyfwJCbBq8vLe78EdJncdp9DBBpbAytgbW9Hb7jzn8",
    name: "TGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TGPT",
    quoteLabel: "USDC"
  },
  {
    address: "4Vnurw2UCMhUJuX2BGEGyfC7mAn8E4vaMPTBb53TZWru",
    name: "LGBT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LGBT",
    quoteLabel: "USDC"
  },
  {
    address: "6AmcDW8yeVJN9uSXUWuB6zTsHYHAwEp6FeX8w3nmmFEn",
    name: "FIRE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FIRE",
    quoteLabel: "USDC"
  },
  {
    address: "Da3dMDhLL8828TuShmr7bkXCDHd64kmNZDHiAovZ18Cz",
    name: "TONKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TONKA",
    quoteLabel: "USDC"
  },
  {
    address: "GQ6RJviku4SdkFomzX8n5XZ1PRToJ8LbAhKCGGgPnAWH",
    name: "Hachi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Hachi",
    quoteLabel: "USDC"
  },
  {
    address: "G3QFjAUsCjrftuoQ7npLCjaDqjS5x67Faj9moAUR84yu",
    name: "BKIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BKIT",
    quoteLabel: "SOL"
  },
  {
    address: "dwyD8ZVEDyp33p5f25DY9jLybHeD8ovfcviRfeG1kNR",
    name: "FLONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLONK",
    quoteLabel: "USDC"
  },
  {
    address: "FSHLwoy7QGFW7A6HfwpMkhYr5M1TKvjU1P7Vu9MYD4SY",
    name: "SAKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAKU",
    quoteLabel: "USDC"
  },
  {
    address: "NgeNdRJ6jQfKNTbjETdmwAeXoAR7jKFTzHU51Dmxoxe",
    name: "CROCS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROCS",
    quoteLabel: "USDC"
  },
  {
    address: "2TxrAXrB13X1SrFMVaJ6tfPbjLGdgCUBRP3cufaPJoJA",
    name: "BANGZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGZ",
    quoteLabel: "SOL"
  },
  {
    address: "CSgJE7ehKYo2cfc4yprKc23eNmh2hBMVGmX1obdeSQN9",
    name: "CHEWI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEWI",
    quoteLabel: "USDC"
  },
  {
    address: "4XyHDGti59TWg46mAes6upRiyuCcquFF9WuHPA45WUL8",
    name: "wXCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "wXCH",
    quoteLabel: "USDC"
  },
  {
    address: "GB5n5Y8hPim2tu2rNp54RrVwqVepNTqNL9FvsG2GDE7A",
    name: "SYXT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SYXT",
    quoteLabel: "SOL"
  },
  {
    address: "DxeLGgUGUn4AQ8vFsXGw1gLVL7S2z1XkgraWswi7u7Aa",
    name: "TBull/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TBull",
    quoteLabel: "SOL"
  },
  {
    address: "6ewpzGzwUXWmzK2CLDoFFKmCj9DfRg8gAvX6Zg8z3qm4",
    name: "THUG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "THUG",
    quoteLabel: "USDC"
  },
  {
    address: "DoWjfhj8GzTwQW9R7tCF17u9E4bpe1VkhJxFSkt5WUMw",
    name: "TINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TINU",
    quoteLabel: "USDC"
  },
  {
    address: "GCJ8yxLm6M8XiQoVzTJziKMkVndzrpUsz4M6uG6WUia",
    name: "GLDNB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GLDNB",
    quoteLabel: "USDC"
  },
  {
    address: "Fi2sdk6EUJeUNLr8xhiM7f3bVexGEdkKRiFGzjbDhQRg",
    name: "CCDS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCDS",
    quoteLabel: "USDC"
  },
  {
    address: "7Kwx4E23gWMmgDnr32LpyBgBd2817xPkt32kJQzxqrNv",
    name: "LAMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAMA",
    quoteLabel: "USDC"
  },
  {
    address: "3hakFCMysTsyNLh1SxBMUAX5Ja3bzwWAZykk3zY6Qg5x",
    name: "DOLP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOLP",
    quoteLabel: "USDC"
  },
  {
    address: "JzvJv1vQ8HRsxKapNaaTXEPKFgggqKTYg8u1GkgKDRt",
    name: "BBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBONK",
    quoteLabel: "USDC"
  },
  {
    address: "HhxjoKvAzGrvRfujtH7UUeFWLqfGiUD5BGPygPs1tmn9",
    name: "METAP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "METAP",
    quoteLabel: "SOL"
  },
  {
    address: "4mrZu7eAwynp9sa96Z1uHcK6AmAv6guSF3XjxKpJta3q",
    name: "DOGM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGM",
    quoteLabel: "USDC"
  },
  {
    address: "DCQe8YZuWbpoNzGitg18K2dRgtVzL7DkQuioptASPQFp",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "E1ZSm2vNFrNwVhfNDZiDinniDyCK7G5CfPhVvXH9yQNj",
    name: "420GPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "420GPT",
    quoteLabel: "USDC"
  },
  {
    address: "J3QiZDQCqK1dee6en1bY53C54mnMvxHRP4fH5jtX7dAq",
    name: "BONKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKY",
    quoteLabel: "USDC"
  },
  {
    address: "DoyFz7PficAtoYDERvfCKeuEKMnKiLe4QJrrL7cykfd7",
    name: "BUG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUG",
    quoteLabel: "USDC"
  },
  {
    address: "9CeKfxh7T5Vj7FDsZ3w8H2bvVE6XbELsyDNkHuxiNkJ4",
    name: "SHIRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIRO",
    quoteLabel: "USDC"
  },
  {
    address: "BMCjSkKD81EqduhhyVmAh8keFxVnd9KZFzS9SRmZVEoa",
    name: "TEXAS/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TEXAS",
    quoteLabel: "USDT"
  },
  {
    address: "H5P492DFJm17MhTTDudCBtqFdVoPLCBV9yMw9NrbHdwD",
    name: "KINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINU",
    quoteLabel: "SOL"
  },
  {
    address: "DC8KBefWFxGSLo1UHYWvu832kxg6b7Dpv5AVZcWqrCJK",
    name: "WOOFL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOFL",
    quoteLabel: "USDC"
  },
  {
    address: "3fQ1Em4cR1w3oC8THrszdfB7sGMEdY2KAyeftp3whN5E",
    name: "SKD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKD",
    quoteLabel: "USDC"
  },
  {
    address: "9QHodWUf2a4AmwDZEjxyGSqqmyrLrcxLci9o9ECcBWu3",
    name: "CFP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CFP",
    quoteLabel: "USDC"
  },
  {
    address: "GrRqVg2WidVNigNEJG9yd9ZCWTTSe8yNfCP827CtNyBG",
    name: "MONKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKE",
    quoteLabel: "SOL"
  },
  {
    address: "Bx5BngJDuS6PBTBZZ1kkC6jMWcVFxZKg491b5JeVZzPY",
    name: "DNS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DNS",
    quoteLabel: "USDC"
  },
  {
    address: "2jyPpG3vAZMsGzZNWv4BhJLpqRxef5bSF1VzgeYVNDfq",
    name: "SMR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMR",
    quoteLabel: "USDC"
  },
  {
    address: "GXv81jyVNB3SPaCuyWXDNDVa8PhpysYtTy6Txa4vqyj4",
    name: "SLAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLAB",
    quoteLabel: "USDC"
  },
  {
    address: "EJVpfcoeq5CiP9Gw45YSNMYxqHY7SeUnTTYN5e3wpV8N",
    name: "SOFE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOFE",
    quoteLabel: "USDC"
  },
  {
    address: "C1V3ceY1LWPfGtkhxPsSQWcPPhQTXCXM6ZMRt5y8kTMY",
    name: "TROLL/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "Bonk"
  },
  {
    address: "AEuHM2aUhMX6et3EQn618N8HGj8w9Bw43K6VsPjMgch2",
    name: "ZILLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZILLA",
    quoteLabel: "USDC"
  },
  {
    address: "A8jkyJaF1ytsDrFytC6Jvau7zHUGFWfVYrviVYd6MmrA",
    name: "SEK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SEK",
    quoteLabel: "USDC"
  },
  {
    address: "JD9XZSeLzQoTeC36xsbFnBmurS3HBiPoVvPtHTF7xoq2",
    name: "TEST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TEST",
    quoteLabel: "USDC"
  },
  {
    address: "2jQAhNjx33cctfwqgQD8z4aqt9QwqkeSLcQArrbkDdSA",
    name: "SOL/GRID",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GRID"
  },
  {
    address: "wS3Boe5TwWE8pjCEU78nDLWzcVqXNiMqNbmzAqn1tPG",
    name: "SLMI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLMI",
    quoteLabel: "SOL"
  },
  {
    address: "3qdSjZT97hSggTAkaAatYHUk11vng54BX6s25dTm5uEZ",
    name: "COFL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COFL",
    quoteLabel: "USDC"
  },
  {
    address: "Gg7zYg8ouMHcPyFinPWU6UMC6uAjkScZE87WwddhdqSC",
    name: "BOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOLT",
    quoteLabel: "USDC"
  },
  {
    address: "CTn4fYTdx8d2Z9Jkt4yk4tGFZAwmMbfL43UTJUXQC4dt",
    name: "YUMIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YUMIC",
    quoteLabel: "USDC"
  },
  {
    address: "9BPDg35ygiyMEZdeRJS9xXoV9idZjJmsZv2h6WgzCwi4",
    name: "Cumpp/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cumpp",
    quoteLabel: "USDC"
  },
  {
    address: "DN4NVCi4tSc4ypZoS4dtwRvixcbJdxCmPzW64mfcdjUB",
    name: "KUMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KUMA",
    quoteLabel: "SOL"
  },
  {
    address: "HJ1xg1wKXUpvrBZka79DyrtbFgBaajZoXktm2xCxeMpe",
    name: "ARB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARB",
    quoteLabel: "USDC"
  },
  {
    address: "8cY9CfDBXax88VY8itPQbcy8AanwooyRAqiJgEgb29zc",
    name: "BULLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULLS",
    quoteLabel: "USDC"
  },
  {
    address: "DgkNUUoBJFxedhfusaj7W9CyVUZ7FGVMJ2fvdmpNCRXS",
    name: "CROG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CROG",
    quoteLabel: "SOL"
  },
  {
    address: "43DVW72YSoNSkcB7r46LwNZN5GWFhjCw2BCvLW25Z7yk",
    name: "Pumps/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pumps",
    quoteLabel: "USDC"
  },
  {
    address: "AguFERgDMa1kYUGiA1ndX8AANmzAb4nachH8v4s8sKKj",
    name: "SOL/KBonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KBonk"
  },
  {
    address: "5j32HxA3tpnTY1ruieCUTqRbzYirNxEpQFPPhXwqRVk1",
    name: "FRONKINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRONKINU",
    quoteLabel: "SOL"
  },
  {
    address: "CLaVJCxVLZVhHSMhztefYmasKxP4xiNYpDSBz3hpQJ52",
    name: "RAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAB",
    quoteLabel: "USDC"
  },
  {
    address: "U7dMGH2ittCtF6SyjPzrdjpvRLdexoWaih5ZpXSjutu",
    name: "BILLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BILLS",
    quoteLabel: "USDC"
  },
  {
    address: "Dp6MmdJi1MqtRRY9vudbT2J7xPzrL32JAoLNwtKmEENj",
    name: "MBB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MBB",
    quoteLabel: "USDC"
  },
  {
    address: "FEyyZTc6D44bAiF6cWXj89aAuNLGUqfasH5dXQQCuDpu",
    name: "Tsue/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Tsue",
    quoteLabel: "USDC"
  },
  {
    address: "39xXVHU5zy15JEJbwBqD1XPKahgwtqJQ3EvVgKsAoPDU",
    name: "FLONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLONK",
    quoteLabel: "USDC"
  },
  {
    address: "nxnmmGevZKipEG14cbLDaejm6o8aC9mTXrJ7P5knTs2",
    name: "WALLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WALLE",
    quoteLabel: "USDC"
  },
  {
    address: "kQjzNis6MgvhJaXbCc2NXeXm24bqsB49DNfCfrjRJL7",
    name: "SHIMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIMI",
    quoteLabel: "USDC"
  },
  {
    address: "9vcQ7FELFy9rgGnPzF7KF2MDEM95Zf2CfzaAAphEeDKo",
    name: "BEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAR",
    quoteLabel: "USDC"
  },
  {
    address: "rKWWGotfYz2oCmq6qzYS4PAKPRStw324QwmMhQRDvYT",
    name: "FMEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FMEN",
    quoteLabel: "USDC"
  },
  {
    address: "2dSHv7ymbMbNZZ4kyo6iFAHaWzm5FPg4EMFb5NAdkrsy",
    name: "BLT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLT",
    quoteLabel: "SOL"
  },
  {
    address: "Hat8RszkJi2NyWJ9EHxBFToPHq1o7KM9uZzvx5h6QRth",
    name: "WTF/SHDW",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "SHDW"
  },
  {
    address: "HE6aaVK2HoU8xHZ9hERwz1vGxR9xrXX5WUtq1nX9KMKE",
    name: "SOSID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOSID",
    quoteLabel: "USDC"
  },
  {
    address: "2e2P65emt5jgkZ16iaWLKwskQ15ZW9VxGQ9TwQLhFRPp",
    name: "THANK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "THANK",
    quoteLabel: "USDC"
  },
  {
    address: "2FNQNhhTwhxiQHSnPDU3DsGbikFpQqhRF4s22EWFWT1v",
    name: "CLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "J772ixk7PxQej8B1rMLGV9v3B66E9suobsNhatd5S2kH",
    name: "MOUSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOUSE",
    quoteLabel: "USDC"
  },
  {
    address: "BbC8HYHBS8hg5zsu8CD5cLyHoHPegGtrS84Aj9Khsuju",
    name: "PUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUFF",
    quoteLabel: "USDC"
  },
  {
    address: "H9BXDQF8Uy5ShzzK2nHsCVTtLTy9PxwBrGN4pSRMkgzt",
    name: "PEPEMON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEMON",
    quoteLabel: "SOL"
  },
  {
    address: "CrvWU6MXtAY5inAmQvZq9gJ4sFQ9YNDMsYtHjom8hPkP",
    name: "GECKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GECKO",
    quoteLabel: "USDC"
  },
  {
    address: "8CC2tA9K2UANvbv5fZAopXEu7y1QFqmePEdpJxmULgh5",
    name: "LPFi/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LPFi",
    quoteLabel: "SOL"
  },
  {
    address: "9Vpq99CDRYDThdVkfSSdRQDqNvQqzRxm1nHWwDBFs8uW",
    name: "Hima/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Hima",
    quoteLabel: "SOL"
  },
  {
    address: "EAdQmXBcnDFpK14vh6kPSri1Sdg1NdY1ff3MdRmJFnHQ",
    name: "ORCS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORCS",
    quoteLabel: "USDC"
  },
  {
    address: "7Dq16vfxyt3XoMwvXCd95rJ7bz7tdWsZfXsb6Q3CiAhC",
    name: "USDC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOL"
  },
  {
    address: "6NQLqMkDhaWuTDtpe7AMM4xWxTWvqberbwLJ4v2HnWxC",
    name: "CRYPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRYPT",
    quoteLabel: "USDC"
  },
  {
    address: "8mYNToAgtHaNBX6DjizRosWApGLNMoYqTmjZMtPYbv4u",
    name: "JACK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JACK",
    quoteLabel: "USDC"
  },
  {
    address: "DtLFyyTgsb8dAabGuU5NkY9ppYvaE39sYr9yyhewiwme",
    name: "MUSK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUSK",
    quoteLabel: "USDC"
  },
  {
    address: "Hhy7iwFCspsfpus7r46XsnQoVL7GKuFqke9dRe6nby8y",
    name: "Pheonix/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pheonix",
    quoteLabel: "USDT"
  },
  {
    address: "HJYXKAx4JkPuCYsaAESiFKutyc6BrK4d6vgqk2w64vvg",
    name: "FRBY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRBY",
    quoteLabel: "USDC"
  },
  {
    address: "2QWS7kRpjHY7BD1Bk3esHTw4nfsGArN8AUaW5bq3R2fo",
    name: "SOLIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLIN",
    quoteLabel: "SOL"
  },
  {
    address: "8vp8MgeppQ3NKYsy4kVeEXW36JKK1vQFXxeGSxR5zVGt",
    name: "CERB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CERB",
    quoteLabel: "USDC"
  },
  {
    address: "Gt18Q5sTz7Li5QWLcGDoUSWB8kYW2uf1uwZ62cpLa4z1",
    name: "GOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOL",
    quoteLabel: "SOL"
  },
  {
    address: "AfeCUpT7HBKePLVU4YTBd1e9mckdUZi81JvtLNx9uMuU",
    name: "Sol/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sol",
    quoteLabel: "USDC"
  },
  {
    address: "EzZ3DReskV84VMhKMk2j2Ux7Ktfd4iQGivvGE5agF6yb",
    name: "SOL/KROW",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KROW"
  },
  {
    address: "CYVDakBF6DJzUkgYH3Jf2z4dBXxjb6zpXwbkoVdH8oNM",
    name: "SOL/BOB",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BOB"
  },
  {
    address: "B44xmvKwbkyQEL98PBFG5d6MKgpJvHfWxjz6rWmvn4DG",
    name: "KINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KINU",
    quoteLabel: "SOL"
  },
  {
    address: "53wg95Fu4Ao9c4ks1sRKtfMcwSkMVYUuKk15UJupwxpD",
    name: "AniGn/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AniGn",
    quoteLabel: "USDC"
  },
  {
    address: "23BcDDHBrtjNm8ZmKZZhFGoKZA5u1pbiZtkk9rxDNN4n",
    name: "SKULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKULL",
    quoteLabel: "USDC"
  },
  {
    address: "DKzMErd5YjDerzhbyYmoap6eMKVWz1Kirm9KfdvL8WXf",
    name: "DKING/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DKING",
    quoteLabel: "SOL"
  },
  {
    address: "EPobJ26ew9PYhxz1hfcyx1rRNtVgiox1q3A5W8KGWfsS",
    name: "IYKYK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IYKYK",
    quoteLabel: "USDC"
  },
  {
    address: "J8bBdxHgxV3ib2QrKYwpdNysiHLP6UBdyQC2znqa17pn",
    name: "SAMAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMAI",
    quoteLabel: "USDC"
  },
  {
    address: "EnAxRp7N28j6WgE1W3RNA16E9FpLq1yHdLLWgjgc5ooq",
    name: "TONKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TONKA",
    quoteLabel: "USDC"
  },
  {
    address: "HzApA89TpHwZrPvkM5CrWfB5x2spUzDipkhDgE9eEu2E",
    name: "Roulette/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Roulette",
    quoteLabel: "USDC"
  },
  {
    address: "3TnviAJsCEg6ADa2LEZLutS14NCNN6bqA6kEN7tzee9b",
    name: "SOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLT",
    quoteLabel: "USDC"
  },
  {
    address: "H1aycAqhE1Ftkud2kejbFq4f6ez88tE8RPwQryjJTpGq",
    name: "CYBER/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CYBER",
    quoteLabel: "Bonk"
  },
  {
    address: "Djh3GxG9bwLWSzgU6iYbuVbtBApqfMCqMY1ZGz6AdH67",
    name: "FIFTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FIFTY",
    quoteLabel: "USDC"
  },
  {
    address: "QnkHzVjL7CK7nL6a9yCa95LFJbSDBvMcHQrM55uzNSv",
    name: "GunDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GunDOG",
    quoteLabel: "USDC"
  },
  {
    address: "p5zo57ZxKNFMFEecUQUcizSB8TGgsb2gKWHZmuUJMMD",
    name: "DUCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCK",
    quoteLabel: "SOL"
  },
  {
    address: "AieZyTjmnxR4cGBzdnBgKP2utYQo21y8KMCfwosmZe4b",
    name: "RALANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RALANA",
    quoteLabel: "USDC"
  },
  {
    address: "3YAJsxh8oeYfU1pCn5hrPccDF75Udm9waGH8V7DfU4wG",
    name: "DONKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONKE",
    quoteLabel: "SOL"
  },
  {
    address: "2wWF6HaaEpQ6BdQNpxCQxEbxpYBQQWz3ZFVAuZhL4om6",
    name: "WHAT/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHAT",
    quoteLabel: "USDT"
  },
  {
    address: "EKzPuTHaW3RCZKsL2nwp4KGsb4YNpH6wNm4ztqmshotB",
    name: "RYOOSHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RYOOSHI",
    quoteLabel: "SOL"
  },
  {
    address: "CU18cQQQroya6tSs2XzZnMmEKfdrB5yGcFPYAWmCoocV",
    name: "VINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VINU",
    quoteLabel: "USDC"
  },
  {
    address: "GiXBHHiGZjhsEUcjeJbSfQ2Ne13DQPRU2HhMYhDPbBCo",
    name: "PEPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPS",
    quoteLabel: "USDC"
  },
  {
    address: "FF62AKixuBvCSp3drB2ySqJcHYn21FzugBXC9LcGvVrp",
    name: "KERMIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KERMIT",
    quoteLabel: "USDC"
  },
  {
    address: "GAMkc5guVAuaRBLcPcxkWr9YmMBMLvoX3HqMBtq1m8x1",
    name: "CORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "SOL"
  },
  {
    address: "4vbPZ11sp2aNvLVufxLTb3jZ8atbrcgqcgtixVFcVPcX",
    name: "MOONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOONK",
    quoteLabel: "SOL"
  },
  {
    address: "FoEExLP4qT4ZejwZ3e8zcb487tsBgonZ2P9gkHLJA6Wy",
    name: "RAWR/RAWR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "RAWR"
  },
  {
    address: "7o1gpnHHH5iekwUSgoBN2kTcoe95kjdeG7WQX1yUjEyH",
    name: "UBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UBONK",
    quoteLabel: "SOL"
  },
  {
    address: "8izy6WoU8WMXEHsCqumRUBB63sjgB5GNNFpPSjbfcchz",
    name: "DBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "USDC"
  },
  {
    address: "7ZGNghYCz7KMkk3GVByBDYN5mZTamyZJa71HRT6o2GXJ",
    name: "WTF/ANO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "ANO"
  },
  {
    address: "AbEnf9sLFBhnxEN7cevTLDAqzsnq3kJFnscbsZtbGsFN",
    name: "RINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RINU",
    quoteLabel: "USDC"
  },
  {
    address: "EcqjKDcLkBs21vXF4Q3am9jN1yuNgnebG2MwryW8eqQo",
    name: "DOGES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGES",
    quoteLabel: "USDC"
  },
  {
    address: "CN4uKtMyvXxomCf3sg2jrRE1xNr94hevxBiLQhJtmxx5",
    name: "ERA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ERA",
    quoteLabel: "USDC"
  },
  {
    address: "2g2KUxmEDAM9X69wMpUCrwfa3dMeynNPwxMjokDXyVSZ",
    name: "DUCKS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCKS",
    quoteLabel: "SOL"
  },
  {
    address: "5xb3gsUYsxiNz35u8HNjGA8pyxA4Mfe9d3xrqPTKibMd",
    name: "NCTR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NCTR",
    quoteLabel: "SOL"
  },
  {
    address: "C1LrD5wnibGLfyGJqTs65JvFvaqKgf48THyiYGXboawq",
    name: "BAMB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAMB",
    quoteLabel: "USDC"
  },
  {
    address: "7jCdZgwyVnLjHcHsduK5KRTS6C2Ko2T7d3ZP4W1Pj8oU",
    name: "SAMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMO",
    quoteLabel: "USDC"
  },
  {
    address: "2budNXe6MfVRo9cEZ33QaDpEYGchQkibo1Q4xjVtVC6E",
    name: "SKEY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKEY",
    quoteLabel: "USDC"
  },
  {
    address: "35u5N39ZkLeP3368rCuqADWJMa86689thz9zfNjXU164",
    name: "Catz/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Catz",
    quoteLabel: "USDC"
  },
  {
    address: "JAJq7QR1EdaFoY9wUxCa3XQuAXpv7reQTqNX36ywcMgG",
    name: "DONKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONKU",
    quoteLabel: "USDC"
  },
  {
    address: "HLW2Ac2PfgEnd6hFMMfxaanom3zeujjAfXK4vBLYTVFG",
    name: "PULP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PULP",
    quoteLabel: "USDC"
  },
  {
    address: "E1e87FYV4aNdyWHn3DDJSS9U3FKvZDsAwkTzrWYvVTSU",
    name: "CHERY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHERY",
    quoteLabel: "USDC"
  },
  {
    address: "e9PetZyAsPtTLZAMdxVKYGtivef5wrr91shhetighj4",
    name: "LMDADEV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LMDADEV",
    quoteLabel: "USDC"
  },
  {
    address: "4xCsVC4wzw2VXE3CegE79SFxSZh2Zv31edN2dihDBD5V",
    name: "WDWS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WDWS",
    quoteLabel: "USDC"
  },
  {
    address: "9CAPQGK18jTTJJi89jDq3G5u7KexSK4TMVMB5RxCqw2K",
    name: "KFS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KFS",
    quoteLabel: "USDC"
  },
  {
    address: "C6qnQP3vFM57WiAGWftTnmgtZod3xFzFmsS6g2kw5mey",
    name: "PITGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PITGPT",
    quoteLabel: "USDC"
  },
  {
    address: "7cFVvXH9TijEn6o5fet2qF1FETVn8PYaS5YjYXrzN3Ve",
    name: "TSUKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TSUKA",
    quoteLabel: "SOL"
  },
  {
    address: "3rwarSM1vANRr5eFcuyv8P294rxBG2LXHnfZxRpeK3gq",
    name: "CMOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMOON",
    quoteLabel: "SOL"
  },
  {
    address: "7SShix5mJ3dxhQnNyMpEPj6eaiDWmRoMiCSnqbg722bG",
    name: "Test/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Test",
    quoteLabel: "USDC"
  },
  {
    address: "GB2tVbfsPmKBwhD7yjffDL3nmWeyKgQz1mkaxPNTZLav",
    name: "KOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOKI",
    quoteLabel: "USDC"
  },
  {
    address: "23qMhH5cLkYR53qHcku2u12B1kG1tmV6VTnv2MimMNJ2",
    name: "MEK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEK",
    quoteLabel: "USDC"
  },
  {
    address: "14jpM8X7jZZMNV2LoD8AjEEEzvfPnFj567244TTV9AiH",
    name: "USDD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDD",
    quoteLabel: "USDC"
  },
  {
    address: "GnujtvFrd5d6Fpc7s2uLCKvy58mfcysyCF46HVjCQQEj",
    name: "SShib/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SShib",
    quoteLabel: "USDC"
  },
  {
    address: "GSdUhTT1HwqGiNvCv4uELMvhdhfaKFGWfw7yavzgqd9",
    name: "EVERS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EVERS",
    quoteLabel: "USDC"
  },
  {
    address: "GkCEtzHtGyx3RSxDj5WfYH5EzmkpqobiN6696gECrPNM",
    name: "CHOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHOW",
    quoteLabel: "USDC"
  },
  {
    address: "7FADZK6yk15EAm5UuCReCxLWo5YyzNkz3B5LAkg2dCwy",
    name: "HUB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUB",
    quoteLabel: "USDC"
  },
  {
    address: "3EioQhoMLTXyspm9VWvNwMroC5S7ZEL6nBaXrsDANJ8y",
    name: "ZON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZON",
    quoteLabel: "USDC"
  },
  {
    address: "CrQXUskh81SjyUYbqMmxhKvcxbvasKUXG9CSCv4GLPNg",
    name: "ROTTI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROTTI",
    quoteLabel: "SOL"
  },
  {
    address: "3ppbeZ31KqHG4qW8HDnXsfCPDFv7VVWwHNvGXNxKH2Xd",
    name: "IMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IMI",
    quoteLabel: "USDC"
  },
  {
    address: "6QcLQS2hsiuvXY5sKyDpTJqFfuvZNf1qeWtv7tZbjcA9",
    name: "CATWO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATWO",
    quoteLabel: "USDC"
  },
  {
    address: "9NCPuFouCKyTRrfxTKriXTWifSJg9DuYcX5eGjR7XKiH",
    name: "CERB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CERB",
    quoteLabel: "SOL"
  },
  {
    address: "877i3ocoyBJPLRbat3ADDgEu3mMASNaDdJJHC7Ba6hUx",
    name: "DD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DD",
    quoteLabel: "SOL"
  },
  {
    address: "96RB5b7dhNwuPb7EKtvqVw4AZVNLsS2T9uq1ZqSqpgGn",
    name: "KROW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KROW",
    quoteLabel: "SOL"
  },
  {
    address: "EJFNpdDLZmNaobHkwG7eoxwerb72sQ6czfB3k2cV76KY",
    name: "POG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POG",
    quoteLabel: "USDC"
  },
  {
    address: "6mFdgeTQsMsGXLhdhLuJSzLxUXU6dCYg3wQf7C9LQWiJ",
    name: "FROGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGO",
    quoteLabel: "USDC"
  },
  {
    address: "G6jEPqtsagKBmXcUoYttHknCfmEBe6n4xHLY1VKV9RGn",
    name: "MEAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEAT",
    quoteLabel: "SOL"
  },
  {
    address: "DUfYmQN15powkoSC918gucajfwXfq8CrmWwSokfx6g38",
    name: "APEY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APEY",
    quoteLabel: "USDC"
  },
  {
    address: "baLG3q5fvj6CzPC6Q1EFp2vVi2vHhPMmAK2VY7xzu4h",
    name: "GRIM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRIM",
    quoteLabel: "USDC"
  },
  {
    address: "He4KnVZzvFJAAQL6nHiUSXFX4wcrow3yi8nECKD34meh",
    name: "COOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COOL",
    quoteLabel: "USDC"
  },
  {
    address: "HH4fKQKH4Fbh1HfSXU2gEV1b2XVT4rTLBD1uaCnUFVDW",
    name: "DSC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DSC",
    quoteLabel: "USDC"
  },
  {
    address: "ExvUmPzzik4ohsbHgRgCmFx5DRsGb7H7JVSmmz68MeKu",
    name: "SPEED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPEED",
    quoteLabel: "USDC"
  },
  {
    address: "2HUiFGmwsKe18mFUwdC2WbigMCUMemDgYYhwrcqtpq1W",
    name: "KART/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KART",
    quoteLabel: "SOL"
  },
  {
    address: "EMezS7v37dH2gG89ZDDnTKaX4AzqsUyaRmXvjZJvo938",
    name: "PEPES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPES",
    quoteLabel: "USDC"
  },
  {
    address: "GYXWTCBthKE7MmV14xEBk1RWZUxULUBKzZQphRafPoAb",
    name: "STC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STC",
    quoteLabel: "USDC"
  },
  {
    address: "AtqPCY51aJkJsZpximpSZfScqTe2YPbbsgmB1TCa2NUT",
    name: "LONG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LONG",
    quoteLabel: "SOL"
  },
  {
    address: "BsQikiZPe1NLoC6imMbKwt1nHZLUa3aZVYgXugQoQEA6",
    name: "BUTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUTY",
    quoteLabel: "USDC"
  },
  {
    address: "74d2ss4ZwyhKjPx3S8gBhjptWCQjZuXgtmZ213RGLXDk",
    name: "AI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AI",
    quoteLabel: "SOL"
  },
  {
    address: "CS58GhYsPe7FVBU1NHK2fwt77fi3dL62qu41KQkRdY2g",
    name: "USDC/EDOGE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "EDOGE"
  },
  {
    address: "GQSvS7zkwahL4dNNsDy7qDWRGypBejuztyYTS76m4XWF",
    name: "Solub/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solub",
    quoteLabel: "RAY"
  },
  {
    address: "EaBSFViqyEtZoQnCeNbh5Tq8u9M7w1rofnCAHvjFwtqd",
    name: "SINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINU",
    quoteLabel: "USDC"
  },
  {
    address: "5ukgXG9kLamphZdCSCo8Z8PmrXFY8DGJZqhYK6LcErVU",
    name: "WOJAK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOJAK",
    quoteLabel: "USDC"
  },
  {
    address: "4o5Y4yS7uzDbVEVDZLRmVTFaaZv21r2CRiwHz9N1EwYB",
    name: "SLVRS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLVRS",
    quoteLabel: "USDC"
  },
  {
    address: "WRWr2Jc3sNBsFUdt9xpgjjBFnhoWGzas83LpwVMqif2",
    name: "BOOZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOOZ",
    quoteLabel: "SOL"
  },
  {
    address: "6ncxz4Mnu7p8Wzr4dnC7A2vGgvo9VuNEuVtEvZfZjWsw",
    name: "TOM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOM",
    quoteLabel: "USDC"
  },
  {
    address: "ygCNM4xrWnL96YVxpa9sJREfiDFg47sZA2H6SXiwEgc",
    name: "MONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONK",
    quoteLabel: "USDC"
  },
  {
    address: "8THjrrucZZFrpBbeo1XBdycJTsVh4ti7oc6Mp1VkymmU",
    name: "SOL/TORO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "TORO"
  },
  {
    address: "99N95PStc3UuZ3Eis8qK7qW8swALE3aaoTAGr11jSMcG",
    name: "Void/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Void",
    quoteLabel: "USDC"
  },
  {
    address: "AJ4RcSyKdC9wNt3rRg4RVnZ3KHbKBeqe44PSwLJ7jFtS",
    name: "PM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PM",
    quoteLabel: "USDC"
  },
  {
    address: "855kYrimvvWpSwadjLEUxZZFkLryYnPyimYdeXuxeH4J",
    name: "PUGGO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUGGO",
    quoteLabel: "SOL"
  },
  {
    address: "2yBWC3gg5hdnD5kAkxvNBTS9Zc7CzgTWL3Tc473C2mAo",
    name: "WLKN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WLKN",
    quoteLabel: "USDC"
  },
  {
    address: "DUqmtLtg6a2j8eULAijy4JSLpget8z74wvHxMAYXrTZQ",
    name: "Bonk/USDH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "USDH"
  },
  {
    address: "BF1899khusTfJqV7XYt5BYNgEuoYsc21a4479Kf7aPd",
    name: "RMD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RMD",
    quoteLabel: "USDC"
  },
  {
    address: "31CtRCYSjp8Y29pmFgGKLrrwA3cNfCnhujRACjJFx2XT",
    name: "TOMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOMO",
    quoteLabel: "USDC"
  },
  {
    address: "3xrzW3vDYYFL3NVDo6YaiXaSpQUZKBcLn6bufr2Sg1DJ",
    name: "Cake/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cake",
    quoteLabel: "SOL"
  },
  {
    address: "9NQnwdZoZHExUgECKEmw24V8KYaYkGVNQ9TpQaJ9LSpZ",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "HrETEoDSifcykAH6NzooKn83xy9ijJ4qGv2HD19rzUc1",
    name: "Solt/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solt",
    quoteLabel: "USDC"
  },
  {
    address: "HPwh9K8Np6R52M9gr13DhME7WHFKN7ax7TVFqyZMnQV9",
    name: "NCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NCAT",
    quoteLabel: "USDC"
  },
  {
    address: "68k8e3WtSLSydeNuXvs4o4p9uPDM4yu9xWaxT9xT8xLm",
    name: "MMC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MMC",
    quoteLabel: "SOL"
  },
  {
    address: "Fzp5aWGg2aJYoQPGt2vyxCu6EJiEgdVx1zQVRGnvK5mB",
    name: "BATT/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BATT",
    quoteLabel: "Bonk"
  },
  {
    address: "DfzmgaYAH6vJB64c9wHpB54jxQ7KawjpsthiWoqDWTDa",
    name: "Mia/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Mia",
    quoteLabel: "SOL"
  },
  {
    address: "7F43sCrA1KKS8ZVewg57BDreWrv71J9n9F2vadSYXNzz",
    name: "USDC/1",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "1"
  },
  {
    address: "ELxnsWoyFS65e1nCX1RDQjDPnGzKMCd2LfGoNUcT1wE7",
    name: "CHR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHR",
    quoteLabel: "USDC"
  },
  {
    address: "88ycMWPK75TXXLW3oRg2pZ9mpJZSvVi8mut5u4t6LUd4",
    name: "SOLC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLC",
    quoteLabel: "USDC"
  },
  {
    address: "8uhd2dCtzejpWPkEgKT77iyjhYjDuXHA9JAa4MR3vn6X",
    name: "MAGIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDC"
  },
  {
    address: "EVgmYaEnGF3fd8Ps7BwnYYyXU9GJpHpp2RpVXW9pCize",
    name: "STDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STDOG",
    quoteLabel: "USDC"
  },
  {
    address: "CpVwfBngdRRV9JdDGAsa3v9K7mVKGgVz1opj4QGHAAhn",
    name: "HLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HLS",
    quoteLabel: "USDC"
  },
  {
    address: "2GJdMFzbSkhqBmWEbofoJEVEW32rfEqnbRGdRNK3fJye",
    name: "MOON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOON",
    quoteLabel: "USDC"
  },
  {
    address: "3rRwdq2rwPrT1GpAJ9xoXdC92t1CbHXaRW53zaAJLGvv",
    name: "DRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRONK",
    quoteLabel: "USDC"
  },
  {
    address: "C9UzY4ukNQLX8k5jSWV3pWa7xLVDvHd3Swau3pf4sj36",
    name: "BCOPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCOPE",
    quoteLabel: "USDC"
  },
  {
    address: "7ivpQGbDF1KPNpbqktc1Gi4J7dR2Dj45WFpex1iPiHuf",
    name: "HRV/BOO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HRV",
    quoteLabel: "BOO"
  },
  {
    address: "HwsVHRovyFXrYcvgcvGiZCktpNKyu3D8dnfbWNmj3zjG",
    name: "2000/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "2000",
    quoteLabel: "USDC"
  },
  {
    address: "CSLQ4R9LuP6yd6UTiXXjiL2ZquhbzsD8bVjFFpxWeRem",
    name: "DF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DF",
    quoteLabel: "USDC"
  },
  {
    address: "FzuAWNcTsz3HjX8xYZT74HEYXYXtbSYgYfL3z71fJHPW",
    name: "MILF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MILF",
    quoteLabel: "USDC"
  },
  {
    address: "CipENEEj8mDnC8VEnQmcaubMjNHJWnAjGppabiEqUMjg",
    name: "META/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "META",
    quoteLabel: "USDC"
  },
  {
    address: "EX3CeFuaq5Urc7y7v4qCZtHc8mRoPDtgiqskk1syGowZ",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "CsEEDCSfaVwyy3Nru36BVdzFiasQG2pKoJvi6eeLnSM",
    name: "LILY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LILY",
    quoteLabel: "SOL"
  },
  {
    address: "6AWMXyS5wkp6e7YmBw1aZEmhAfY3KJuksFEcrwidzwu5",
    name: "SOL/JOHN1",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "JOHN1"
  },
  {
    address: "DUL1SV8G2RP3UdZn1gzRFE3qNrUQ9PQiru2EGNUwVBXD",
    name: "SAW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAW",
    quoteLabel: "USDC"
  },
  {
    address: "EVr8w3MmKvQ6aGUGvcav39uNXPczRgM4BDHw5gFzMmsm",
    name: "BCORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCORG",
    quoteLabel: "SOL"
  },
  {
    address: "C9s1sroFYwVLGDfw4AorpNtUZvvYaFL72xQZtr7Huy6K",
    name: "THEA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "THEA",
    quoteLabel: "SOL"
  },
  {
    address: "AGTVLxkgBUemWowmYDDsamW4FZFs1xtHGeJZEJgxSL5w",
    name: "BABI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABI",
    quoteLabel: "USDC"
  },
  {
    address: "48ziyCWwnMij2ct4wPHS3Z7BThEVqwpKq1zkqiw62wsx",
    name: "CAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAT",
    quoteLabel: "USDC"
  },
  {
    address: "DpNBzz4vt9CSJMXFX2ooLS7fiUk1LV4TSbS4xoAWDtEM",
    name: "SSPX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSPX",
    quoteLabel: "USDC"
  },
  {
    address: "9qaLj6vE7voYPT5k8v9Fv9AiGyfgnVDh2fUQ8UGqcnaH",
    name: "ROVER/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROVER",
    quoteLabel: "USDT"
  },
  {
    address: "ER9bUX2yZRFXRvX3uRfFqyNh5CtuELpXWKkHg1RDDFiM",
    name: "LSS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LSS",
    quoteLabel: "USDC"
  },
  {
    address: "CTL5JwfYV2ho1UZ2mCHEj5sF6GSaWSHS18Q7RrcPLfVY",
    name: "COPEC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPEC",
    quoteLabel: "SOL"
  },
  {
    address: "EB5VBK1UyVUPcQRzQYHyptK4WPcLTWU8f7vyGSadEMHN",
    name: "SLock/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLock",
    quoteLabel: "SOL"
  },
  {
    address: "8A5RtH4xzEGr1f2EPwHAey1KvpRERwz3nLQsZjzX8pco",
    name: "GRN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRN",
    quoteLabel: "USDC"
  },
  {
    address: "GLcsgRM1EjbrosFeQ3RDQuhBNRmEiCDCjZbprR2GS3vi",
    name: "BUTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUTY",
    quoteLabel: "USDC"
  },
  {
    address: "cfLvP2UAvoQHfUS8qYqna547uaT6XGMaEJiFjQbcpFY",
    name: "AKITA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AKITA",
    quoteLabel: "USDC"
  },
  {
    address: "7YK42zXSVJVKxNTezrT7JMCFKZE976LEWGu4pJY2ZYv1",
    name: "Cbape/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cbape",
    quoteLabel: "SOL"
  },
  {
    address: "73cHrmMMTx828DBjxzLe6ucgaYvpnJTs6dQShsxrmpom",
    name: "DIA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DIA",
    quoteLabel: "USDC"
  },
  {
    address: "dMBeVhmCyrWxd39a76DYWC6duYLpSAEPTZaP7RYmi36",
    name: "PEPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPP",
    quoteLabel: "USDC"
  },
  {
    address: "FDo4syzKwSuVnWPbWtnGpzoL7E4LAAzwmyjsLooZLude",
    name: "FOSS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOSS",
    quoteLabel: "USDC"
  },
  {
    address: "4spvYtbH47CcFoZHoeyLZFuA9QeX2AbWg2mPbuRxsHbH",
    name: "GANJA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GANJA",
    quoteLabel: "SOL"
  },
  {
    address: "J3pTqpj3mng1GJMwnrBCzjtFDDtXpf136fPKRPQtoErH",
    name: "SOL/SHUSKY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SHUSKY"
  },
  {
    address: "EzLtLpX89y5DahffwFDWHsGzq3Kg8Tx2YvNqb6cyLGQG",
    name: "KDA/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KDA",
    quoteLabel: "USDT"
  },
  {
    address: "ALCVC47MPVGSNDZ5AAuqkqAkyX8Cb4EUZjrJywiGcH3R",
    name: "GAUSS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAUSS",
    quoteLabel: "USDC"
  },
  {
    address: "7RgGFQnYzzS9DCJYqB2wMYu9hVU6rDyFeuGgjoBNjWJ4",
    name: "DOGMN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGMN",
    quoteLabel: "USDC"
  },
  {
    address: "35Uvej1zAZsk1LAqtSh8ACFPqYFokX1GCZpRUnDa8Ge8",
    name: "CUSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUSE",
    quoteLabel: "USDC"
  },
  {
    address: "DyXiacZhaz6bYSFVNGXeZswDWfvmm1JrDpo6rdpBK5b2",
    name: "SHIBCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBCAT",
    quoteLabel: "USDC"
  },
  {
    address: "Ga7fVRHi8Zj2UPzACoKHLuf1CyZNRf4WWaG1yBc3fVrn",
    name: "STONKS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STONKS",
    quoteLabel: "SOL"
  },
  {
    address: "714ghZ14Ja7AQsw8S8MMLuTQuGpQYYbGkzSW2jHaJLCB",
    name: "POCHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POCHI",
    quoteLabel: "USDC"
  },
  {
    address: "BhqFy7f414GCWigtg4fjwrdcFb1nC92cbfDoTEgfRFRx",
    name: "SOL/cgntSOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "cgntSOL"
  },
  {
    address: "DzwFaBBMtBqUwPhUpug4HVwWJHzycCHnSGBoxSHZTaQ2",
    name: "CHEF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEF",
    quoteLabel: "USDC"
  },
  {
    address: "EzNyfPx75WTVjc3xWUHA2BPW53tdC4AFsfVb93JqRrv5",
    name: "SHITCOIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHITCOIN",
    quoteLabel: "SOL"
  },
  {
    address: "BY7eZ3dN8h37biYQSPgsTi9jMEsDu6CsEZkuM6T8Kxjc",
    name: "Ghost/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Ghost",
    quoteLabel: "USDC"
  },
  {
    address: "7kdHGC1HES3Y1RvAw7wN9QTCzoZcHVdwAQj9e4HMV9GP",
    name: "MHMER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MHMER",
    quoteLabel: "USDC"
  },
  {
    address: "Fw2gEXJMrUqecgSqnQQkviRPqtHCgxbSyszuSZ2yHpP5",
    name: "Bink/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bink",
    quoteLabel: "SOL"
  },
  {
    address: "F18BpRNY5GwEKCTvVYJAdxXfBYpP9wzkffAkTEo1jWfw",
    name: "SFOX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFOX",
    quoteLabel: "USDC"
  },
  {
    address: "7LwDEMY25Q4SZXJ6wuzVmzqYa7TSBnrntsrJ7T5XhWZT",
    name: "Soinu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Soinu",
    quoteLabel: "USDC"
  },
  {
    address: "EzKmVEy1QfU6AuSZUgSVE9EcsXDtQrzEzC4bcH1ZVAvx",
    name: "AITOR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AITOR",
    quoteLabel: "USDC"
  },
  {
    address: "8rbLkod1DGNYWSZzFcc1KqJtEvAwtiRYQdaj6XXR1GDV",
    name: "MNS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNS",
    quoteLabel: "USDC"
  },
  {
    address: "2m5LmgDFcKQyaHRVHiBEuTJ4yzqF6RpE6ec1vkKbjkX1",
    name: "SIMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIMP",
    quoteLabel: "USDC"
  },
  {
    address: "3Pfm4JPo7cAx2g7HzB8x7rQtd2pd5o1Sedh5ALKfpDjj",
    name: "LAMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAMA",
    quoteLabel: "USDC"
  },
  {
    address: "8ztJi6358SCA7zh5nAHA43zcGDaQv2bkLJJRyci12rWi",
    name: "SMINE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMINE",
    quoteLabel: "SOL"
  },
  {
    address: "4uSv5gpCUVvsav4xDudUsoytbVmLmr6q7W9KHERrY4Jd",
    name: "HONEY/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HONEY",
    quoteLabel: "USDT"
  },
  {
    address: "6oCLnKZLcJ3YNTkrdq6RrvxqpJhFZX4E4Z3JogkxsGCV",
    name: "CVTX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CVTX",
    quoteLabel: "USDC"
  },
  {
    address: "6kuZqXSaXpz7edxJ5SehxafTRe2tshUprfpzCez2dfac",
    name: "PLUTO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLUTO",
    quoteLabel: "SOL"
  },
  {
    address: "CEhXQKita9tgHYzXve7uQkmxKXFhb2aKb9AurQc5VVQu",
    name: "SHIBN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBN",
    quoteLabel: "USDC"
  },
  {
    address: "8zkeygFs6Z7CX7wBRX86fkUbbtTt3zi7E27Y51anY6wb",
    name: "YODA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YODA",
    quoteLabel: "USDC"
  },
  {
    address: "BgpB7rGYsSfFyFEXmWoYe7FafjavuQAgo3ZLtDBnH16A",
    name: "ANTSG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANTSG",
    quoteLabel: "USDC"
  },
  {
    address: "F6ZcY1LQpCHKoiCRPepxfJTcgtvC91z7jt9XuqSA3aWp",
    name: "HORSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORSE",
    quoteLabel: "USDC"
  },
  {
    address: "5dp6Y5t31tfGhbV1atfmmusxNNRZQxb9bPtVdyebdyQh",
    name: "PUPPY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUPPY",
    quoteLabel: "USDC"
  },
  {
    address: "8bA45krgK3QRXKGpaJiT7Wr5oRPaNY6asPyrVJ7hTrZ5",
    name: "MEEBITS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEEBITS",
    quoteLabel: "USDC"
  },
  {
    address: "5VfXA96NBQr68sEuvaWBNjLMBo9urZ6NhvgwYwuXnhYc",
    name: "Solover/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solover",
    quoteLabel: "SOL"
  },
  {
    address: "2mPaEs6QMwB5TQvmjiPLs1qAzATi1j1DjoNarPqq5K9h",
    name: "ICE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICE",
    quoteLabel: "USDC"
  },
  {
    address: "EtUKkWNxeRPayVZjihbRMpdjhc5W1yz9Dvqf8Rq4xTL8",
    name: "SOL/Fish",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Fish"
  },
  {
    address: "7BRhGcUnsqwtm3ToWSNYN1G85kZbe8uLkDryc9Szr6XQ",
    name: "Bong/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bong",
    quoteLabel: "SOL"
  },
  {
    address: "DWEQbQMRpZmBi5YtWZLHyEKw7eY567kMyoVnJpEtF9Xw",
    name: "Taiyo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Taiyo",
    quoteLabel: "USDC"
  },
  {
    address: "4ceFsg5oPMokkvFvPAehYyEgwUchm2sp5VJUmDnAVoK6",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "2Dqrau5qAk65nuAv1P79ZQneMPERJVZ2NzpqqvTrhJiz",
    name: "EDU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EDU",
    quoteLabel: "SOL"
  },
  {
    address: "BXezrkq7Vdpaw1mxUgGKh8DGxytL2pq5YVakNSax5JRS",
    name: "HPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HPS",
    quoteLabel: "USDC"
  },
  {
    address: "Dn47y81rqdu99DA73ypwLfHxheypxSRBTa5DBQwSEcCT",
    name: "HXD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HXD",
    quoteLabel: "SOL"
  },
  {
    address: "FLfGxSGiEpdD2EnPQN6Uiv1QhTuwjz3GhCkohZzZ4ZVa",
    name: "PEPEC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEC",
    quoteLabel: "SOL"
  },
  {
    address: "32kExn7nc5FuGeLgr58qtuFCecx5g9Vs2Y1UWVWkcJdT",
    name: "HOKK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOKK",
    quoteLabel: "SOL"
  },
  {
    address: "5iQud1Yu3W3aeoxVtmtTT5d77Pc1QbkXQ6srAvxgqmxC",
    name: "TERMINATOR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TERMINATOR",
    quoteLabel: "SOL"
  },
  {
    address: "BXDrFXh9H2SjPU9p7kms9fUgCtZNfu9keSss5ZoRnHPx",
    name: "RISE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RISE",
    quoteLabel: "USDC"
  },
  {
    address: "5i9fBGGB2ZBU3ZMBphBLf4ou3oUGzoWCoTvbfmtAGSQv",
    name: "OCTO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OCTO",
    quoteLabel: "USDC"
  },
  {
    address: "7tH6bX3yBjz9pKwFbHrEx8Xy47bAPYoUthFRVKLwbJab",
    name: "BAMBY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAMBY",
    quoteLabel: "USDC"
  },
  {
    address: "8CpuFXtwgkbF8B1GK6Z13gQFnaU6FYjvzWi3fHY1Dz87",
    name: "STONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STONK",
    quoteLabel: "USDC"
  },
  {
    address: "8ywDpHNit6pjfzh5eNXD6JrVF8XYUAFQNBiriuyGZemJ",
    name: "BABS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABS",
    quoteLabel: "USDC"
  },
  {
    address: "HAUh7WMAzGm1pj8JXFN4rfb8vkYCuk8rEggPUW7Aw7Qm",
    name: "HOLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOLY",
    quoteLabel: "USDC"
  },
  {
    address: "Ae4Y4vL35C8NUmudFiAYKYLoL3hvGpuYg6inGGpvWaY9",
    name: "LANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LANA",
    quoteLabel: "USDC"
  },
  {
    address: "Crb23Suhu773CcoEUEsbJgj8yauTkkLaBHSW95UCWxWb",
    name: "USDC/GM",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "GM"
  },
  {
    address: "4WCrjcKaFkCJXTAiaRsUQoE6poggZFG6geAgscgDQD1U",
    name: "SUSHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUSHI",
    quoteLabel: "USDC"
  },
  {
    address: "Ag3fWFMe6g2oh6iySYqwTScT5UsBHeDx6ss7TNynhJrE",
    name: "HC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HC",
    quoteLabel: "SOL"
  },
  {
    address: "Hn3dXzwoVsToiLvudvcyaXAGLxpTbuoZvUbXhzsXhygH",
    name: "SHIP/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIP",
    quoteLabel: "USDT"
  },
  {
    address: "GGzjypjapKd8pWwX71D2exDNBaLY5sAxm4h7MiBNuGNs",
    name: "EduInu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EduInu",
    quoteLabel: "USDC"
  },
  {
    address: "6fgGrBr2twJ2NbBMpmHo1cWF9r26buQdrDWSH2TXtXGH",
    name: "RLBNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RLBNK",
    quoteLabel: "USDC"
  },
  {
    address: "GGB26r7yCdXfykavPFz7XMrbHvDpvpyLSh3BPD4yUakW",
    name: "USDC/SOLD",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOLD"
  },
  {
    address: "CuuaZYVs1FL2rtPFLnHxmhu2MJ793Wg65J2zA8ypDhZ6",
    name: "SHEEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEEP",
    quoteLabel: "USDC"
  },
  {
    address: "CrXMxopV1KhQudchx2rJ2dgcrjEYcNHKZu6J7MEdop4U",
    name: "AINP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AINP",
    quoteLabel: "USDC"
  },
  {
    address: "9g9XkwQ4T9TV9tLEvYe5WKskMhYjienwBJwXTe4hdu4w",
    name: "TERA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TERA",
    quoteLabel: "USDC"
  },
  {
    address: "Esva3GFxKcCBCxMNHQdKLk4V6pxmAzuMNhmFnoksp2RD",
    name: "Bink/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bink",
    quoteLabel: "USDC"
  },
  {
    address: "3LqzNpck26FYwnL8zJNSdq5iL3viK3UcCj65w6sx4j95",
    name: "KMODO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KMODO",
    quoteLabel: "USDC"
  },
  {
    address: "A7ZmT5EMAw9jkGXEwqcEYDpgCqNVkRZXTznxqvdybu4U",
    name: "GDKU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GDKU",
    quoteLabel: "USDC"
  },
  {
    address: "CNMa3uNdqt3y3v6tKs5BWA8mHmqqRZvk8kJoJcj8dCKK",
    name: "Squid/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Squid",
    quoteLabel: "USDC"
  },
  {
    address: "7jGrAShpfZYN58dXTxEtAXJZFvEzcT8TJmwTWkeLxCic",
    name: "BRAIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRAIN",
    quoteLabel: "USDC"
  },
  {
    address: "AgrNoCMr19giv9Gujdc6KwpY71cgQ7k9hH4h55KTrbkg",
    name: "BUNNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNNY",
    quoteLabel: "USDC"
  },
  {
    address: "564bU4SUrJsiPxQK4X37NKUJQ7YAqX5PxUiEXf1NXvTJ",
    name: "ETERN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ETERN",
    quoteLabel: "SOL"
  },
  {
    address: "3yfHjRFD4NmC5UjYAkjXR9FQ3tnegrv8f8BzfG7wr8Gn",
    name: "DONKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONKE",
    quoteLabel: "SOL"
  },
  {
    address: "Gr3KAekFViMJFQNAaE8wLr6CYfEGnS9agXsDK24kBEEK",
    name: "BDC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDC",
    quoteLabel: "USDC"
  },
  {
    address: "9zfwwZEdJ37wLZ6aDJr8fifDVJfG7gRhVqKSzdpBL3Bw",
    name: "SKIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKIN",
    quoteLabel: "USDC"
  },
  {
    address: "EQF7iwcidXrdWk82WqR7wuzTDAvrxe2Xz5LLvZjAA361",
    name: "UAS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UAS",
    quoteLabel: "SOL"
  },
  {
    address: "GpCWprBkWY8MN6KhFpg58oQEnoYBi2YMozCP5jjWj9Np",
    name: "Flipgg/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Flipgg",
    quoteLabel: "SOL"
  },
  {
    address: "2BUuEQ2SQQURQkMT7tVLAFvKeV2r894AGDbE7dS4LRPy",
    name: "sCAKE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sCAKE",
    quoteLabel: "SOL"
  },
  {
    address: "DFgBRG7qGU6pg2h5J9zM7aBfR6EfrbVz9T2oEovVcQ8N",
    name: "BOLT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOLT",
    quoteLabel: "SOL"
  },
  {
    address: "5TDkxZN9gfHBUE8ZvhiA56kRpRKKNAyHZDT9Xd38UTaF",
    name: "CHETA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHETA",
    quoteLabel: "SOL"
  },
  {
    address: "J7nuYw8Dr2Gi1nCKxCNTV8koyZCjmiozUY2ZvsJ5DdYn",
    name: "DOGEBLUE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGEBLUE",
    quoteLabel: "SOL"
  },
  {
    address: "CA4qBG8pfM3a3abqg96Uuseo9XfDA1cir13WHDGLrqBb",
    name: "UDM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UDM",
    quoteLabel: "USDC"
  },
  {
    address: "CKYP9vreLU3uEhFWvhbbHVPsxuRpcAvca1izCVihrnTU",
    name: "ZTONS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZTONS",
    quoteLabel: "USDC"
  },
  {
    address: "5qo4VfB3L6vR2GpjSedCQJ9pPQgUkPR6MVADp8Yn8xnA",
    name: "SLM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLM",
    quoteLabel: "USDC"
  },
  {
    address: "AxHpLY3hLKCNxPKJWnkEzpnh3uWPZxbZfWnHX7cpWGU",
    name: "DRINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRINU",
    quoteLabel: "USDC"
  },
  {
    address: "6FgjiYwdA1rZaG1WLqSyqmmNXnR6EPks5geivTkat8R2",
    name: "FuckSAM/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FuckSAM",
    quoteLabel: "USDT"
  },
  {
    address: "4VnGdhfysgiJssobamjBsq5G2i38u3sZp8h1MEvzNLzu",
    name: "BULL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULL",
    quoteLabel: "SOL"
  },
  {
    address: "5WXXh3WKrtgqQzM3WsqrwC77Kz681A5XidVChKnHxwYa",
    name: "SOL/FISHY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "FISHY"
  },
  {
    address: "Apf24uVALQz9rfaiL4E9xJoLNPToaBzY6nsBy6ShNd3b",
    name: "FLONA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLONA",
    quoteLabel: "USDC"
  },
  {
    address: "BepwKuzP3cMoqqt7G3NBuPtdeCXE2oHxbwWW6JBbkFFR",
    name: "CORE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORE",
    quoteLabel: "USDC"
  },
  {
    address: "GzCgC8eeKFe8JCUUgifXcBN9HkrvBixp8YUcMv6XKYiq",
    name: "ALOCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALOCK",
    quoteLabel: "SOL"
  },
  {
    address: "pqF9ZibgBhG3tDB1UUzbjsKK2XDHWNrAaqbTjPsq68R",
    name: "JERRY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JERRY",
    quoteLabel: "USDC"
  },
  {
    address: "EZq8t9i38uQJrbuiNk7oJ674EQ1juHxx7XMT6sk2r7dw",
    name: "STEP/Fronk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEP",
    quoteLabel: "Fronk"
  },
  {
    address: "3xwLhtRx2KndiyxUmiV5RvCJ1MTjKsgBcVgS5h4c1oSz",
    name: "DOGEF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGEF",
    quoteLabel: "USDC"
  },
  {
    address: "GySF9sWHhRXiETiRm1gLKys6KT97h4diANWecneHAGPN",
    name: "LABS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LABS",
    quoteLabel: "USDC"
  },
  {
    address: "8PVtZdk73cmTqAnF4NmjaVgpza8B97pwbiVkWxKL4RYh",
    name: "WOOF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOF",
    quoteLabel: "SOL"
  },
  {
    address: "26hveLwaaUjBg9Vvmk6zZPUTYBc3fWPVEDPUG92NACe6",
    name: "Corgy/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Corgy",
    quoteLabel: "USDC"
  },
  {
    address: "FTsD7MkKHYhsgzmRLC5NS3XiKMYRv444mmM8vyhmE2Xa",
    name: "SHUA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHUA",
    quoteLabel: "SOL"
  },
  {
    address: "5ct3uccUDcp4Jw7JawgqrPhKbB3UzLz7d7gHH97TrWdK",
    name: "BAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAT",
    quoteLabel: "USDC"
  },
  {
    address: "31huKxoNktcmbhHz5KNpT26qcq9jZfGfqFBJx2bUS72S",
    name: "BBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBonk",
    quoteLabel: "USDC"
  },
  {
    address: "BsYAQpA5FdWmVLuEo9MUhRE6uicQB9dYZrFYWJWKNo1R",
    name: "DZOO/CHILI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DZOO",
    quoteLabel: "CHILI"
  },
  {
    address: "2E7agunYstkAJaMiyn7LuwcD5UYkeeYSSeidKMPBz9G8",
    name: "SUNI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUNI",
    quoteLabel: "SOL"
  },
  {
    address: "2PqkmfDZBbAAwKbSAk2mEGe68Nz1NWP1SNBHk1j2w42N",
    name: "BARC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BARC",
    quoteLabel: "USDC"
  },
  {
    address: "CLP3mLnCpD2aXDMoofgxQLiwKjw9qtNDreCV6PQAcpP6",
    name: "TRTL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRTL",
    quoteLabel: "SOL"
  },
  {
    address: "9peWaSN6pLxdnaamxnVB9HC7f9QAZuD5B8Z1gnANVfue",
    name: "USDC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SOL"
  },
  {
    address: "2m24X53zpSJ5KUAR1vi5R75oviGnLuLqA1zxR3c8uaZV",
    name: "DONUT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONUT",
    quoteLabel: "USDC"
  },
  {
    address: "Bmrn6NndA9JC5dunyQnnAkPrG3bRoHqrx2eAmEwzwRrG",
    name: "Haram/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Haram",
    quoteLabel: "SOL"
  },
  {
    address: "9QnUZ3T7SXAunQfUbYtRPw8LrFQTh555N2jncwAcM1dj",
    name: "ZOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZOO",
    quoteLabel: "USDC"
  },
  {
    address: "J1CpWFMFnWWZbLvTt7BDjs8Goxjwto4UvSU2RuTiYmqn",
    name: "MIKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIKA",
    quoteLabel: "USDC"
  },
  {
    address: "CtuF3BSpZFRRbsqDQcnN2vXw6H4Vh2eMmtZ7V358L73B",
    name: "LEMON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEMON",
    quoteLabel: "USDC"
  },
  {
    address: "9bygN8bLKQzbWZNkgovjPkujMNCqrxo6c7ewgweoiGmg",
    name: "FINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FINU",
    quoteLabel: "USDC"
  },
  {
    address: "FWgxV26apFperbRLdMXYXdAbAjoqRFMpqYPGaomRH6H4",
    name: "PINE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINE",
    quoteLabel: "USDC"
  },
  {
    address: "62xrrpdAaZMYBXxropERf7NVaLciuWoWWiv1uzXcXWES",
    name: "MONES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONES",
    quoteLabel: "USDC"
  },
  {
    address: "DTKYkaCtiwNoDnMnbYPTZGTJSTy7Hw8tjWUrdkA1KVhx",
    name: "Moon/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Moon",
    quoteLabel: "USDC"
  },
  {
    address: "G6PkeQAePRMVt8SuxUuqjvCj1rdE9K3VTTVKbDjgqhhD",
    name: "CRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "USDC"
  },
  {
    address: "CfJA14ySWvpXKmBGrXifz7ha5YZPkBBDi9y1qUNLZYAK",
    name: "DAPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DAPE",
    quoteLabel: "USDC"
  },
  {
    address: "4GFGqL1udpwr49bMWDMXZNkEG8a9um23AHAZxdA6SHmd",
    name: "ELDER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELDER",
    quoteLabel: "USDC"
  },
  {
    address: "FkAoYEtNEjv2JxbKbNLskYRhN6JAoCNaS7bwT9TVA9q9",
    name: "SOLSENSEI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLSENSEI",
    quoteLabel: "USDC"
  },
  {
    address: "AbUHrpvtggHHyzptus8C4U1YtySo7yWfGpVjkton6yu1",
    name: "LUNAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUNAR",
    quoteLabel: "SOL"
  },
  {
    address: "XcuKgkwFj3ULHAvkPSFF4EYGAXb1jw2F1VPf1oMLoxa",
    name: "PODLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PODLE",
    quoteLabel: "USDC"
  },
  {
    address: "CVJ581W1xcJrRq8swnPwjnRDJG7Wj3chmR862A5HnLHJ",
    name: "ANUBI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANUBI",
    quoteLabel: "USDC"
  },
  {
    address: "641JshK6Y7qfpG6sajxhFZB8GRPWeceCs1rdXmAobB9U",
    name: "ALIEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALIEN",
    quoteLabel: "USDC"
  },
  {
    address: "BRdaxu7Qsz4Qea2cB8B3gFJxxY4dnvza2otGqHrtVPjr",
    name: "SBEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBEAR",
    quoteLabel: "USDC"
  },
  {
    address: "3upGZ41MNfzDEj18bbC6ujUkgNQx8NbNtChmWyFk6jqk",
    name: "SUMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUMO",
    quoteLabel: "USDC"
  },
  {
    address: "7Qc3XBgP87RWMyCwmvZSbUQkimvaw3gagQGU5piPywnx",
    name: "BMONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BMONK",
    quoteLabel: "USDC"
  },
  {
    address: "3JLEGqDFqSe5Auom9CqBPVk9DNPjUU7jV39nhqi4HKeh",
    name: "SolDoge/sXEN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SolDoge",
    quoteLabel: "sXEN"
  },
  {
    address: "DqTf6cPJKVtsWbsNpKomPpq2sjCXx9cZKpkh3gksAbpH",
    name: "REMISOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "REMISOL",
    quoteLabel: "USDC"
  },
  {
    address: "5Bbi2ctQPRyGtMyKxeQqLihgVx8ERjedKk49W5vRnux1",
    name: "SOL/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Bonk"
  },
  {
    address: "G8KmeLKnzkNLZmhYpiAbYwvYqzwkggQH55P5WYb4pbCD",
    name: "HNW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNW",
    quoteLabel: "USDC"
  },
  {
    address: "DBzRz5DrUc3kuWCud76n5qEgySLA9rKHwEYVoJVZTffG",
    name: "GENM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GENM",
    quoteLabel: "USDC"
  },
  {
    address: "DN7shbvnyWL4TryaEcgbAECuVNgDJWXUHijzD96KjR1u",
    name: "TONKA/TONKA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TONKA",
    quoteLabel: "TONKA"
  },
  {
    address: "CJZjcaCu8dC2oLdytLtUR68GFmYYKxGJ2ykAscCUkp2d",
    name: "Hoge/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Hoge",
    quoteLabel: "USDC"
  },
  {
    address: "J7zUcrYRDZQMZiP4XtE8nmdnKTqzmkVpgq9sgYGbw8JZ",
    name: "ALIM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALIM",
    quoteLabel: "USDC"
  },
  {
    address: "9Hevo6wyhbGJFLHjTtCt98GTVsbUnFxTyET2uVGNioJc",
    name: "SCORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCORG",
    quoteLabel: "SOL"
  },
  {
    address: "CSVwrs4CGCeTK9UVnnfrqHxK1cVL1CVNCSLBFbmcfBDT",
    name: "RAGNAROK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAGNAROK",
    quoteLabel: "USDC"
  },
  {
    address: "ChVmdQc1Q6We2EMAbcQGXFyAkEMTkrVwcAg8jHw2a4GM",
    name: "KITSU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KITSU",
    quoteLabel: "USDC"
  },
  {
    address: "KnnzdZtbbsYig5iY8ZoUjVuFX2EBkvGyopDKqWLpmAe",
    name: "SEDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SEDOG",
    quoteLabel: "USDC"
  },
  {
    address: "9LpBuGzPgDDWAmR7mr8ojxWKZdfK82vH3TBUof9UrnwJ",
    name: "LDZ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LDZ",
    quoteLabel: "SOL"
  },
  {
    address: "8HnpiZ4zsw3Z7mMsMf4JqCZdQ45q5Do1WVsFZAqS4Nhe",
    name: "ACTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ACTC",
    quoteLabel: "USDC"
  },
  {
    address: "FSg5ZtFX9KpoxjtfLhwf8gBPQn3sVBK4n3K5ChUrzk9b",
    name: "CATE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATE",
    quoteLabel: "USDC"
  },
  {
    address: "HWytR5RB8LHSTpdwhYn4vdf7ciSvWZa8ZEMfoPPipiGA",
    name: "SOL/LSN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "LSN"
  },
  {
    address: "7RtqUipJZbDAUf43HLuLtsQBLPfKdXtmHssBwcsH2U8X",
    name: "STEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEP",
    quoteLabel: "USDC"
  },
  {
    address: "CjLjUkZn3KeHccPieKQ7oVW761DBdd4eM8wU2NJK4HQY",
    name: "BBATT/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBATT",
    quoteLabel: "Bonk"
  },
  {
    address: "Gxdkq7bgyeCP13QevnChV3fLTGYz5FYv34m9471czt2B",
    name: "MOONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOONK",
    quoteLabel: "SOL"
  },
  {
    address: "FVMiUCYPiHi8k5kPgkNVX1qxQUkm6yhCuo58FEu8p7M7",
    name: "AKIBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AKIBA",
    quoteLabel: "SOL"
  },
  {
    address: "722UhLcq4QUA8F2ndsob2JqGxQUYyHXapYaWCLPehgzU",
    name: "NSCAM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NSCAM",
    quoteLabel: "USDC"
  },
  {
    address: "APLMdLEdS5tdsrZe6BrjxMQY2tRzWbJuFG9tAtdDcuYR",
    name: "SPAY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPAY",
    quoteLabel: "USDC"
  },
  {
    address: "AqqgPbCKLFGgHD5BJE5WfQuYUPcnsAwUXHQMVUuqSKJN",
    name: "ELONB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELONB",
    quoteLabel: "USDC"
  },
  {
    address: "3pXt4jqCoMJhAzFZGzcrHqC6t4fBD63VfDettymQWbDd",
    name: "PUGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUGGO",
    quoteLabel: "USDC"
  },
  {
    address: "4W3UWS27cRJ6J1GEYpiXRxPbU6JotgEaxsUEFEamLD2u",
    name: "BLACK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLACK",
    quoteLabel: "USDC"
  },
  {
    address: "3P37Kxv6baiXE9CgzcNLY3PDZw43H849vB4g8gt9S3vp",
    name: "Pickle/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pickle",
    quoteLabel: "USDC"
  },
  {
    address: "3W7pRQcabDQzse7ZV8HC9E4y8MsptZUJkowh67UexEss",
    name: "COCKIES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COCKIES",
    quoteLabel: "USDC"
  },
  {
    address: "3XbYGhG9VsG7A4XtBukrSH5h8HrSAVdKQuxbr2uLwnot",
    name: "STK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STK",
    quoteLabel: "USDC"
  },
  {
    address: "945v78GfZdqX5dmmL4MpApcguQxacBEfveCGSUax87o3",
    name: "MIZU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIZU",
    quoteLabel: "USDC"
  },
  {
    address: "7f7XnUkfFXBWw7EaF98oMdQj5nZxX4mLtjXSUogy8C43",
    name: "TCG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TCG",
    quoteLabel: "USDC"
  },
  {
    address: "6PcK2JegxsaUoZsFwQ5RgSqhabaP6FRzSgdPLxnTMN53",
    name: "PIZZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIZZA",
    quoteLabel: "USDC"
  },
  {
    address: "4SntNode6KNHPWBfwYqpKz8jbDq6FJVeFfLrVbppri6v",
    name: "FLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "BFensUBWfpgYKmpxNvJ7S6TuY5z8c193sAMACfrmgye4",
    name: "BERRY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BERRY",
    quoteLabel: "USDC"
  },
  {
    address: "3ozftyUEpcAfgH3FbQrrw4s9MpSmbN8afaXspMCWZUTb",
    name: "CCI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCI",
    quoteLabel: "USDC"
  },
  {
    address: "DqiBE4twnQg4MVCYnWQS9c3RcxsuZXVuoLk2D76MVLAC",
    name: "POD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POD",
    quoteLabel: "USDC"
  },
  {
    address: "6PGsguuxCjfCgThKz7cBPw45T2RJQ678rqWmaN8N63BA",
    name: "BREAD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BREAD",
    quoteLabel: "USDC"
  },
  {
    address: "6ExF9LC8yLaVMZYmKv2EpzMaGN7nNsipB2dw9c1pavst",
    name: "SAFU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFU",
    quoteLabel: "SOL"
  },
  {
    address: "CwPR6bDJykfR9vU9DPRYw32Ui5MSUmLGFoKVpAeisSMK",
    name: "MARS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MARS",
    quoteLabel: "USDC"
  },
  {
    address: "Emfqvyz9RM7X9xnB2ifdBaAQirWSi3Ye1aUsFCjVLhDQ",
    name: "BATTL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BATTL",
    quoteLabel: "USDC"
  },
  {
    address: "Hv4kTn7XewJ16YtFRUQzFe6LVJfWHDCktF1jqXBkxo4D",
    name: "SPACE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPACE",
    quoteLabel: "SOL"
  },
  {
    address: "H6wA5ka5ivYa1qnJAKDuYZUQuC8FAxuctp5eh2EtwwL7",
    name: "GAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GAR",
    quoteLabel: "SOL"
  },
  {
    address: "2oeyYqx6Tjo6mmAt6tF42Zz4MkdTxATLZM1TXfixaENC",
    name: "SHILL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHILL",
    quoteLabel: "USDC"
  },
  {
    address: "BGeHfhmYCjPN27Eox8vJnbysGDmsSD9aso5PaFWDBzqj",
    name: "POOT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POOT",
    quoteLabel: "USDC"
  },
  {
    address: "3cte6ojomsVFDoyTpRqwhmAtuTB4Eo3EKpw7b7HPbMs9",
    name: "BUNNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNNY",
    quoteLabel: "USDC"
  },
  {
    address: "BEgcSM6KN9yQVp9PzodoaQcTuFrJFZxB5HtGjJtM7rTJ",
    name: "PUNCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUNCH",
    quoteLabel: "USDC"
  },
  {
    address: "FkaseZKWVazgyAX4E4rfoPnFz2dDCE2JQ5Z7KMhQrm9t",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "CMqNam4SkC68dxnvRaWevJEeDHQQ4WKw85Ugdzg48LfZ",
    name: "SOGAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOGAT",
    quoteLabel: "USDC"
  },
  {
    address: "F1oiEXmGfyReJ71NghgUvxZixB9Sebyx17zGWZDTuRrs",
    name: "ASYX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASYX",
    quoteLabel: "USDC"
  },
  {
    address: "1cDFNiX4aCku3mcFEyiLHpMuKN2LroFwpsS2tffSLai",
    name: "BOMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOMI",
    quoteLabel: "USDC"
  },
  {
    address: "3npvzwt5EyGsHQTCdaR5gZvbUaN3wABzEND2joAtGRb5",
    name: "SORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SORG",
    quoteLabel: "USDC"
  },
  {
    address: "7DQdQSv1ATkUvjdm1eBED2GceZdiV5Q6AzBjBxqJUoSx",
    name: "RAYINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAYINU",
    quoteLabel: "SOL"
  },
  {
    address: "tDwb5MApFM7cUCgeqwiXYqjk1Uk3i4mnBbyM3WKsjJm",
    name: "STC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STC",
    quoteLabel: "USDC"
  },
  {
    address: "8pXHB5C3mxgjh3mCypo4tMcXaqxKMHdiK8dzqy95LuAq",
    name: "CORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "SOL"
  },
  {
    address: "CMDf22EQpjNXAL14dcWsmhULNgZSD3ubBTT2yZ5M6eyN",
    name: "GLXY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GLXY",
    quoteLabel: "USDC"
  },
  {
    address: "GnFyhu6W8SPTZLvkbgBDHQthYigVtPyrgE9RQuEVPSUW",
    name: "SOLGPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLGPT",
    quoteLabel: "SOL"
  },
  {
    address: "Dn7W75znFnqN6ociFwyFiER6rDCNYFKtaDj1LyaYJ6sS",
    name: "CRYPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRYPT",
    quoteLabel: "USDC"
  },
  {
    address: "3ffbPAmi2LaSXH6dM4vgnPEjYScXEsUR85swtpMo9QRj",
    name: "STIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STIK",
    quoteLabel: "USDC"
  },
  {
    address: "6uiPt1PU4o9kctkfXntZJxoEn1hdLneunLHkoU9m7Zy9",
    name: "1000/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "1000",
    quoteLabel: "USDC"
  },
  {
    address: "CAhTMoJMurRg8ey9hncN9oVhoXywWtZqZ9onToNys2jE",
    name: "BCHIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCHIL",
    quoteLabel: "USDC"
  },
  {
    address: "EAMDbYXbcxkmJYbo4oyLgemqzam4rySpB6KePu9NAnrP",
    name: "PAW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAW",
    quoteLabel: "USDC"
  },
  {
    address: "H4UxH7XozVHSSa8M4Z93nLtxXvA6VCyDstE5hts2p4NK",
    name: "CORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "SOL"
  },
  {
    address: "94Msby56vh2tBtWmJBZ5j1TyTSRDGgXHcTmXCRkMfPsg",
    name: "SPRL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPRL",
    quoteLabel: "USDC"
  },
  {
    address: "CjJJnh6LqKMCBg3QUCUtCpbn91su5rLgY1gahzGH9B3L",
    name: "YOMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YOMA",
    quoteLabel: "SOL"
  },
  {
    address: "7WshdZvgSREuMynqxrdiM2skCCoxdntYaezWBpkmErzk",
    name: "CHEW/CHEW",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEW",
    quoteLabel: "CHEW"
  },
  {
    address: "5oJFAVhpRUTZ86E8s2gyVPiZ4DXBk32egsBNm4ACUQDZ",
    name: "REKT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "REKT",
    quoteLabel: "SOL"
  },
  {
    address: "9actwW8g9bkhMMxRREbUv5EAqRQNXTrNCMhP8UG2X6gP",
    name: "CHES/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHES",
    quoteLabel: "Bonk"
  },
  {
    address: "FgFC2B94JoKcBTtZGab7i5aiedKwMjU1DwzqvF7yGmHF",
    name: "TRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRT",
    quoteLabel: "USDC"
  },
  {
    address: "D6SkC9qYGAqj8b2jiTVn1V7xDKN3jCEjGEnBXXdUWsxs",
    name: "DOGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "USDC"
  },
  {
    address: "8Qij14JNQi9VpJmXHg2UMjhMY8pAxQZEgKVSEoDoGVfT",
    name: "ATC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATC",
    quoteLabel: "USDC"
  },
  {
    address: "2eGCLkmt228ZDEoNotcx3j4qABrTWzeUxrhrXuM3Bpgi",
    name: "SAM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAM",
    quoteLabel: "SOL"
  },
  {
    address: "28YZtcLJbgSc24KeErboxyN7EEnQdRNaQ5SrA7AEfoc5",
    name: "HONEY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HONEY",
    quoteLabel: "SOL"
  },
  {
    address: "55WgT8qMgLELQWFHZJnp1Q2bTuF7jBwipTyQB5RSmvJ3",
    name: "SOL/ACN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "ACN"
  },
  {
    address: "2g9mfo8J6Q59DWK7nRL4nAuVHSg1AxaGpx9NvQSHpSp2",
    name: "SPUNK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPUNK",
    quoteLabel: "SOL"
  },
  {
    address: "9GPD1PjVRtZF1q33uctYyUKiafeD8fsRUMwQEkqVq2eH",
    name: "PINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINU",
    quoteLabel: "USDC"
  },
  {
    address: "FpbugtV5cS8W5DxGSrGc1P6L9tzdorwjgGwiDcE3MWFg",
    name: "WKND/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WKND",
    quoteLabel: "SOL"
  },
  {
    address: "HKhSHpvcgqHuoZXsDxsrC6zSv2BHVxqfAdaZtnjqH1vm",
    name: "SOLEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLEN",
    quoteLabel: "USDC"
  },
  {
    address: "49CUJQ9P3EmetZqQvVfaUmgtns6nppJmxHx9qqA8niW5",
    name: "SOM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOM",
    quoteLabel: "SOL"
  },
  {
    address: "EjM348PVMkbhu55XBWD7m5rDrmiQJE2pF5fCYkaDbGue",
    name: "RAY/SDO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "SDO"
  },
  {
    address: "Akf8a7xHBcNBh4dqymL5XU2i5Xa9brSWLWK3FWosCt27",
    name: "STX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STX",
    quoteLabel: "SOL"
  },
  {
    address: "GG46gp2FDpJg9FpYhZXXFBJ1RVUkKuAHj6ELgsm3ys8n",
    name: "Lunar/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Lunar",
    quoteLabel: "USDC"
  },
  {
    address: "Hd4LoqpzKjtAVvkCdCk89x4RDjkEu6v5gZ2Gux6DWRdi",
    name: "SBULL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBULL",
    quoteLabel: "SOL"
  },
  {
    address: "EG5HhrprPk84ntUDc9JCCCA7mKnMCAgeEjh1m2uWbVtY",
    name: "SVBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SVBONK",
    quoteLabel: "USDC"
  },
  {
    address: "DCEbVfxrKkPNK3KZBNKSZwpEn7nX7bPAornwBSfnQ8vJ",
    name: "USDC/SIX9",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SIX9"
  },
  {
    address: "CAcgJ2M93J7Q3q3K2bM7TajCCig2AgAPWfDpitXL7iGA",
    name: "BFLOKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFLOKY",
    quoteLabel: "USDC"
  },
  {
    address: "GoqHcqL6cnW18SdtvPRp5bUGkNXWhBkRbFzmQZz5bwHT",
    name: "bCAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bCAT",
    quoteLabel: "SOL"
  },
  {
    address: "Fe31FWACTChABsDBa6V5D37QtFKwBy32BkpruuUirPQn",
    name: "TWINS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TWINS",
    quoteLabel: "USDC"
  },
  {
    address: "Gs4W4msgU26ARPvzKBoTCreGugmpUtMnTjNPVUtvntCT",
    name: "KONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "USDC"
  },
  {
    address: "CcPGBN37mLB4hnVg92KHrCEMs6qjKUbGKj9qmsRfQiwU",
    name: "MAYO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAYO",
    quoteLabel: "USDC"
  },
  {
    address: "5eVVPBLKamw6ZWtRAokE3k6jDsoci67kyhcq5TnposQ2",
    name: "Pepo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pepo",
    quoteLabel: "USDC"
  },
  {
    address: "5tpBd4JqXixXufCpYyG3ehyYmSnDPHZxRQqLDD1XhEyW",
    name: "DRCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRCK",
    quoteLabel: "USDC"
  },
  {
    address: "2W4yRcKcVEk7u2YgbWK8BpPqmNVEBMnxkLrQs2CPi23n",
    name: "HALF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HALF",
    quoteLabel: "USDC"
  },
  {
    address: "FGH7U6GxifLTEDQ7MLVYoVUkrnBG1tTSzaTBUxjho5Wz",
    name: "EPEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EPEP",
    quoteLabel: "USDC"
  },
  {
    address: "FEBRrYgytTxiK7X8VqoVvgEkVqTL5mh1EoecLDo2CnMT",
    name: "SNAKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNAKE",
    quoteLabel: "USDC"
  },
  {
    address: "C1hQPrWuoUeDRTfKvAKXShstjBoozan6yqiNQK2g5AHS",
    name: "ahh/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ahh",
    quoteLabel: "SOL"
  },
  {
    address: "ByJM3F9tC5GhxmqDtAzjLytfk15dgAAbnAB3yifQ2pGf",
    name: "AME/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AME",
    quoteLabel: "USDC"
  },
  {
    address: "CxL6ESGoAoHntJhA5J8LAkoepSfg289Geour81yUJMys",
    name: "SINGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINGS",
    quoteLabel: "USDC"
  },
  {
    address: "EpUzBqEfCTeC4eGhYJRP9pp9QVybSwHnHiS3U16YDehA",
    name: "GBNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GBNK",
    quoteLabel: "USDC"
  },
  {
    address: "FrZTKk7U2WCNSc8RfdTmH3wUN4ZtZu4raQyYedRJ4rxU",
    name: "SQUID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQUID",
    quoteLabel: "USDC"
  },
  {
    address: "JEG8pP2iaD7bqvzf6D6DmVJ6gyC23tSw4saVGhGpLXHn",
    name: "SINU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINU",
    quoteLabel: "SOL"
  },
  {
    address: "A5mihWNWWCaYHCN8LrVk2tVV4baN8tyCNUUerx4rtpC7",
    name: "APEYC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APEYC",
    quoteLabel: "USDC"
  },
  {
    address: "5tEocWfheQisyHY3fFUTzfU7ubpMBCxc1Skm9f9A3uWN",
    name: "Blana/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Blana",
    quoteLabel: "SOL"
  },
  {
    address: "7H11zuFpNQpULogX8RwJMavLA7RxukXcAkMCYW2MkUoW",
    name: "LZRD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LZRD",
    quoteLabel: "USDC"
  },
  {
    address: "5bjeaks3Y6g419CSgZVMCG65j9vmXjfYnXxn6PvDxYmQ",
    name: "CORAL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORAL",
    quoteLabel: "USDC"
  },
  {
    address: "4rpNMJFbkzZUxaZCTZostoRzzieyMDDXKhwdDFYp7y8y",
    name: "NUKED/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NUKED",
    quoteLabel: "SOL"
  },
  {
    address: "88vge1tE5KwMHoupQkC6vn5iSi6HiAkjAiJYefReRRZU",
    name: "SOLD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLD",
    quoteLabel: "USDC"
  },
  {
    address: "4MaXSLKv8DucVRvgwjLUXTKa1WquPeB3dXSRCdCkMtcE",
    name: "PIKAV/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIKAV",
    quoteLabel: "SOL"
  },
  {
    address: "71p5d4FLfGmW7omSTuhb7S3nENHwBhFTSMveJATX7TmY",
    name: "BAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAR",
    quoteLabel: "USDC"
  },
  {
    address: "8nJi9ddRVzznV5D8wHj84BHX2QBzm9XSUNy3a6cWcorj",
    name: "LUCKY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUCKY",
    quoteLabel: "SOL"
  },
  {
    address: "9QLZZiwkh7EvAUWHQpqPpW8jfUSwKgo6y14s6TgWxHcr",
    name: "Akita/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Akita",
    quoteLabel: "SOL"
  },
  {
    address: "GBGMScZwT7UPfGi4Go8BbN23yinjaX1NtosBH4iKitk5",
    name: "lcase/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "lcase",
    quoteLabel: "USDC"
  },
  {
    address: "EcMzmUbb91fCodkTzzjXTFo44HknHqncE3CNa2exAFuU",
    name: "BBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBonk",
    quoteLabel: "USDC"
  },
  {
    address: "EQTSfDCbC6ATyYe3h7j3d6obA1RdZGZLfEfGyPgxDfu3",
    name: "Devil/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Devil",
    quoteLabel: "SOL"
  },
  {
    address: "GGtW9g9g7dBhw6pHxi6sLGK4WSteTiVpTM5Xz9hUHxN8",
    name: "DOCA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOCA",
    quoteLabel: "USDC"
  },
  {
    address: "7naQjL8wrxebUzGd7yf2fUxz7GihfWSbS4oxw5whfNRB",
    name: "RAYIN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAYIN",
    quoteLabel: "SOL"
  },
  {
    address: "242QvaPGXaMPkjdLUJSdC5Eo8tfDkdGxqmcYMGxuF3Ux",
    name: "EGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EGPT",
    quoteLabel: "USDC"
  },
  {
    address: "3HJWYrxzap9w8QXy1sy7P9dcBAaoaQWotRSscSHZ9EpQ",
    name: "MINO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MINO",
    quoteLabel: "USDC"
  },
  {
    address: "4iTVzTSDkXdjNaSGo2kJ9wyoRNtTMaYNEqrK3q1Fmr9p",
    name: "MTG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTG",
    quoteLabel: "USDC"
  },
  {
    address: "4TKJhrYeMLaMK8pNPKvT6iJQQNcB943TM4DvnDkDJto5",
    name: "BC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BC",
    quoteLabel: "SOL"
  },
  {
    address: "FGtLbyZSTEfhVisbQdkj757YZ71a7NuMFEcHh5i5TSfB",
    name: "MAGIC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAGIC",
    quoteLabel: "USDC"
  },
  {
    address: "3hLwQXSX3aK7eHCxG6FUyPNAJTUTLT7q8NsZ3qLhQ1KD",
    name: "MTG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTG",
    quoteLabel: "USDC"
  },
  {
    address: "BHXbQS97fiqdCHeVxWkjKp6Ke1fVYBsh5S7TvMhdgHEL",
    name: "ASTRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASTRO",
    quoteLabel: "USDC"
  },
  {
    address: "FVmSQWhsU5kfnUJXX9Fri8N55vcAwxT3Mayi7YBJBhHD",
    name: "SOL/BonkZilla",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BonkZilla"
  },
  {
    address: "FC8r6MYgqB9LXadsd2tB65L6N5tVNU8TnixBTGZEbHXo",
    name: "HNCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNCT",
    quoteLabel: "USDC"
  },
  {
    address: "9ZgNsZDQXXjfW1ijo1fRGXkK6rgkAPpVV7Sft41cF8EY",
    name: "FOXY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXY",
    quoteLabel: "USDC"
  },
  {
    address: "4thYd5BfY12XP4Jyt9pxq9VtfhASZbzBAaML5vQFCR44",
    name: "CMAXIS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMAXIS",
    quoteLabel: "SOL"
  },
  {
    address: "9ezA7D4yLN8rE3jxt7o5zuke2tV8jgpna8zLbdwU9Ar2",
    name: "BOOBS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOOBS",
    quoteLabel: "USDC"
  },
  {
    address: "6yx2KjxpaetNWACpwEUBi4FrsnBrfnTmeviQrw75cvia",
    name: "KONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "USDC"
  },
  {
    address: "8PDaFPUma4aW3uXUjSktuCkRz6gqf4a36vp7FH6J2oz1",
    name: "COCO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COCO",
    quoteLabel: "USDC"
  },
  {
    address: "6iEpobwkotzdh8655Z42zgsVVxyyVqeBG84ATSoYLEm9",
    name: "HSHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HSHIB",
    quoteLabel: "USDC"
  },
  {
    address: "J2AQTWmhAnabe9vFjTBrJGgHzYMqrXPzXyFK4jHhpFy1",
    name: "GROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GROW",
    quoteLabel: "USDC"
  },
  {
    address: "DaWBECFn78uoMJ8r78RnHUBHoR7DdUma4gWU636RjuXo",
    name: "BDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "BwZrFQT6NDQHm9E249eXzhGkDB7H8hnteCqEkWqbZ5og",
    name: "SHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIB",
    quoteLabel: "USDC"
  },
  {
    address: "7jT5TWd14gGBYXEKKRuuFgXwGZY5MCgSNBUBDm4CsfX7",
    name: "CBEAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBEAR",
    quoteLabel: "USDC"
  },
  {
    address: "x9z3PzTPnkgoYusgB84W2Zug7gHk1uQyhNSLJYt5xZg",
    name: "Crocs/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Crocs",
    quoteLabel: "USDC"
  },
  {
    address: "5RvoHzaJXPzkqa5Dd6yFAUmwRWZ5WMXUySdHGajrecoP",
    name: "CYC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CYC",
    quoteLabel: "USDC"
  },
  {
    address: "8WrJyYLTkxx5zCqPEpL9Wqhzi8MuetvATx3XQBm3R4NW",
    name: "RAB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAB",
    quoteLabel: "SOL"
  },
  {
    address: "EYBe8Nad2osU7PWbWUNCby47eqnC5JwswnpepzQb5LGo",
    name: "TOR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOR",
    quoteLabel: "USDC"
  },
  {
    address: "9Ryq5B8G36KwyTzoUJXyqpBFe2Rhis2cA2RBCZnTuQsc",
    name: "TerraM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TerraM",
    quoteLabel: "USDC"
  },
  {
    address: "DMWmpQ3fpLjMpwbLGhFHvoqgnRN7mZzN5azafhxmKxsV",
    name: "BC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BC",
    quoteLabel: "USDC"
  },
  {
    address: "AkZAv98cQyY7tS7KwNKB8VBCNSgSYFj8mmeemm1MRqhC",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "2TqNChRckcAjPk6hUEUWJv8mkLkzf9q5brXsUdyBwfEy",
    name: "DOGEKING/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGEKING",
    quoteLabel: "SOL"
  },
  {
    address: "EaoMscf2h4yPDbgqrALHfp4BCgE25wyKTnUDbp5KZyhn",
    name: "XSS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XSS",
    quoteLabel: "USDC"
  },
  {
    address: "4rALbX14wkWvHvvFFLUtqdzsGQV6zhFYfQZWeK9NbxQL",
    name: "FLOWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOWR",
    quoteLabel: "USDC"
  },
  {
    address: "GtfgT3tLsFgE3SmLKfFzVThWczE8L2mh2U9QUThD947N",
    name: "SOLGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLGE",
    quoteLabel: "SOL"
  },
  {
    address: "5p2x8gX3D4GRm3umVsPukhPYkmJvi2KcmEEqmLYVcv5W",
    name: "KUROI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KUROI",
    quoteLabel: "USDC"
  },
  {
    address: "FfAciJg3pqKqLwxVHQnA2rdhnxUh5KXUFC2DrnwgiJap",
    name: "MAPL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAPL",
    quoteLabel: "USDC"
  },
  {
    address: "EShCcGudWTedeYWZLoATAgBPUAS3Cr2PqDHRQXY7ALrB",
    name: "SMORI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMORI",
    quoteLabel: "USDC"
  },
  {
    address: "Bx4n3FE4X7kRACvZAnYv56sN8xooXHPwSUKEKJ1L8QES",
    name: "WHACK/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHACK",
    quoteLabel: "Bonk"
  },
  {
    address: "8Jt3fW2GHd1A12W1XF9e4VL8WysKDKF3pREgS7qwvzMi",
    name: "KISHU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KISHU",
    quoteLabel: "USDC"
  },
  {
    address: "4Gu8oqp3xWRknSQkDf6yw4jHtjp49cajuzvYvmMtDAQb",
    name: "PEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPE",
    quoteLabel: "SOL"
  },
  {
    address: "7McvH2Jeerr9TUx9aZ5UqXud2NUEhM4u3fTDLXTBvsEt",
    name: "Jacko/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Jacko",
    quoteLabel: "USDC"
  },
  {
    address: "7uNzSnsNLTqghE5AqxueaZtUcdW9heu4HEzksjjH6pxD",
    name: "Fronk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fronk",
    quoteLabel: "USDC"
  },
  {
    address: "8bbXLNCuxYyQZJ7Q8y3ye4fZahRyf1UvVP8MzdbqSr6X",
    name: "NOMADS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NOMADS",
    quoteLabel: "SOL"
  },
  {
    address: "2vPdwZawBs2SBzmJ3NFSGcQgHFfVwdZmstWHEmkPXSQW",
    name: "SPIG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPIG",
    quoteLabel: "USDC"
  },
  {
    address: "7aFbgVYwBTNwJ7oScmzfkGCJR6guinVeTE1MUmDJPfW2",
    name: "SPURD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPURD",
    quoteLabel: "USDC"
  },
  {
    address: "9avTwtFXirZMFDoTeGCTDvUVv8DwV2RPxW6jYVEwbXP",
    name: "SOL/SMRTFI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SMRTFI"
  },
  {
    address: "9fYwueR8CBbHSdJs7vLbdd4CugCt5FTWSgXwVKJrKU1D",
    name: "HUSKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUSKY",
    quoteLabel: "USDC"
  },
  {
    address: "FduRZeoZtWnSbf2d3C2iCX3b6N8zvvvu7fAiqgFKpSqq",
    name: "BEAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEAN",
    quoteLabel: "SOL"
  },
  {
    address: "4hf5jmg8cqjLCZb1tsKVwBEnkVMrvDUcbysm8xEE36Bb",
    name: "BLISH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLISH",
    quoteLabel: "USDC"
  },
  {
    address: "AjEbxYrVxhQAQPCz2YThfmgw9HytNF8yVnzvna9iHRDg",
    name: "KIRA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIRA",
    quoteLabel: "USDC"
  },
  {
    address: "36RYqGFfLmewtfpatgmKeWjy7EVTdfU6VxLf7Rwobo4d",
    name: "POG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POG",
    quoteLabel: "USDC"
  },
  {
    address: "F5dv6tA7AA5StrBxEh8EmJy8SfCbY6VFxgLoY8gttduB",
    name: "SOL/BIU",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BIU"
  },
  {
    address: "FqzXtcWDGMKf1SCkNZn1p9NoWVUM5QfpxfPxKRqMC1yn",
    name: "GECKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GECKO",
    quoteLabel: "SOL"
  },
  {
    address: "AXU4aDemXxUjhKKwu3JbEYmQUwVwYUtgbBf1kwNWRrbr",
    name: "GGG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GGG",
    quoteLabel: "USDC"
  },
  {
    address: "4brbLN3SBmBQVLgiswpr7bnh73vfc2Q9v6GW2FsgSVoX",
    name: "NALA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NALA",
    quoteLabel: "USDC"
  },
  {
    address: "BWXzKyQt3TUmxjaLk7jGEU9eRHHfADXRi2woqptxRDX1",
    name: "Emoji/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Emoji",
    quoteLabel: "SOL"
  },
  {
    address: "CbaPDWTk2H1Hgqkz2jEYmocKbjynvJ8uixC2aCu9N7Ha",
    name: "SRMINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRMINU",
    quoteLabel: "USDC"
  },
  {
    address: "Bn3xQcNeWTShUdNJQcLLYM3j18E3bQvZSoBtd8Qx92Bb",
    name: "SS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SS",
    quoteLabel: "USDC"
  },
  {
    address: "AwuHh3M84RHip5VA5sH9gPNkno8sqWAqQ8dgqP7FizCh",
    name: "BUNNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNNY",
    quoteLabel: "USDC"
  },
  {
    address: "ANG3RDAzEAWpCjjEeWD9hW3goYky3BMGBxWqJMaHrsoM",
    name: "TROLL/PEPE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "PEPE"
  },
  {
    address: "9JZHYXL1FeQhR6Etk56ayAau49JYj4ERECGFMmzCimWN",
    name: "Koala/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Koala",
    quoteLabel: "USDC"
  },
  {
    address: "Gd8iDHLz9XC7uDrtQJQaNYHj6xkPfGysR4bwxGjhqM4e",
    name: "DGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGPT",
    quoteLabel: "USDC"
  },
  {
    address: "H8qx3zvQmQL1drwh2hLFh74LgDsD2AsHrhCWzcYDwZcY",
    name: "SHOPC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHOPC",
    quoteLabel: "USDC"
  },
  {
    address: "4LvY5maJcEzWdD26zkU6hSbKDDLDrqGvnDPaSTSvh5RN",
    name: "QUONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUONK",
    quoteLabel: "USDC"
  },
  {
    address: "FRyy9jjgRQHTUWacNQVEGhHLaRxoU2jFS8wBrwuLKVEG",
    name: "Soge/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Soge",
    quoteLabel: "USDC"
  },
  {
    address: "7yrWUNtZ5HBgTGdYJBwpdiWsogApYBVGq4jwafrcBEcf",
    name: "MPET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MPET",
    quoteLabel: "USDC"
  },
  {
    address: "B5SKHqLGzUkmuXpT6ZziWjXwx46gj2PpNp2xzNRmNSRi",
    name: "PARMA/PARMA",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PARMA",
    quoteLabel: "PARMA"
  },
  {
    address: "HgBaD2XkueCCtCWsSBGvaYJPZpLn3zfH365bmfpsgrD3",
    name: "BMDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BMDA",
    quoteLabel: "USDC"
  },
  {
    address: "9KUZCd9UBr62yHAtZyVDbQHmQWpT1LePy7TuEZ4fpq6F",
    name: "FATE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FATE",
    quoteLabel: "SOL"
  },
  {
    address: "8V2c6oaXXXvqLQVzbYmc8tJWVooj92Haw6RFZWQZUUew",
    name: "RACUT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACUT",
    quoteLabel: "USDC"
  },
  {
    address: "CVCq1uCmZubNr85X2UXLSABxMunNcGp1CaPq2KXmfDQ4",
    name: "TROLL/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "USDT"
  },
  {
    address: "5vfhNExJq17cF8gMhCo7aEg6j2W5yKHF5Sc1yJwXaANc",
    name: "ORCA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORCA",
    quoteLabel: "USDC"
  },
  {
    address: "9sz15Sued9GMQ4WGExfVP5s5kW58q9YT5x2TyoV69zA6",
    name: "CORE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORE",
    quoteLabel: "USDC"
  },
  {
    address: "6VQd6Voq1f4D812wAoo8JRvrjj371cGwH2LpKNSQrWGz",
    name: "HEY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEY",
    quoteLabel: "USDC"
  },
  {
    address: "F9rRSFKHe8MzHVkxK5pCGH72Ag535wFGkjaVTrcbF8LT",
    name: "TORNU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TORNU",
    quoteLabel: "USDC"
  },
  {
    address: "53AC2cd8N4WZHAc8Y3PVYrEkC8hdiQrevcjxU8SXTBJF",
    name: "Snake/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Snake",
    quoteLabel: "USDC"
  },
  {
    address: "6gzPwW9H1Bn7xYZG9A6GNogud1fA3bZSFzVkiTPP6VYM",
    name: "DACLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DACLY",
    quoteLabel: "USDC"
  },
  {
    address: "7HbwPGRcmGizrgV5bE1htx4CQb3zvJKrdmADF9REaJJf",
    name: "Astronaut/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Astronaut",
    quoteLabel: "Bonk"
  },
  {
    address: "3ybXWzDWmENRWmGVDiwyQv2n11Yj4h5ibvtsssAEFGYo",
    name: "SOHO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOHO",
    quoteLabel: "USDC"
  },
  {
    address: "3RTMLHyfqihJYpsAdh7h1XkG2hqW4VY2nbY23HqojU7F",
    name: "BingGPT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BingGPT",
    quoteLabel: "SOL"
  },
  {
    address: "4VhC6UXezA8Lvjcnv2F8GVuL9ePys42cvU9H4fWqUCLJ",
    name: "WHACK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHACK",
    quoteLabel: "SOL"
  },
  {
    address: "827oWso8iRtTeaTnYxNjTMsuAKPSU6fteENS6guc3tkr",
    name: "Cake/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cake",
    quoteLabel: "USDC"
  },
  {
    address: "4udbxUtB3dSzJSN2GQJBUx6Y9QEcw45H2NFMr5ENnUUZ",
    name: "AZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AZA",
    quoteLabel: "USDC"
  },
  {
    address: "C4JLnAUMJW7xWzUjzespiVndawkrbfefsRv7NEpCLJji",
    name: "DBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "USDC"
  },
  {
    address: "3wqYuvDvswiuijpiwKMSorQHbxTtHnDmjQkJkkKNa3he",
    name: "MBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MBonk",
    quoteLabel: "USDC"
  },
  {
    address: "4tTnQc4D54FTUVK967Lkyay7AX8mUDSCzMtdCNo7DekJ",
    name: "DOGEB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGEB",
    quoteLabel: "SOL"
  },
  {
    address: "Heaay5vjXfzR1qBd2iF3xUj61ScDziBE2gcmUHvuKwuD",
    name: "GUARD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GUARD",
    quoteLabel: "USDC"
  },
  {
    address: "Eu5MoCsHWoH8DKc3G4AL2SD7wbYTEUpkYaLdumw71gTZ",
    name: "BAD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAD",
    quoteLabel: "SOL"
  },
  {
    address: "69i8wKzqj7VnfNqegMjvWenCxc8US4748Hg8yiEkv1tx",
    name: "XXX/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XXX",
    quoteLabel: "Bonk"
  },
  {
    address: "6jtXRkTeqaAFYyAkwkF98Tsh75GDHts3zJcC3cD5bjTf",
    name: "EVM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EVM",
    quoteLabel: "USDC"
  },
  {
    address: "62v4qPkWkzRimG6wycxHB6LhWstqQfATpKox41HbQ9Qs",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "56Fm1SE6VExGJCLT7XmeDFrBpwtnqqqQ1We5cbu7hyAn",
    name: "QUILL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUILL",
    quoteLabel: "USDC"
  },
  {
    address: "EzKQKMwqjHTib1XLzgyN2HiJ2XBtyoSoJ6m88fjyN8jv",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "BcM12vvhAF1ABPSzyQs8rsJXQw9WRBU1k9tBnHskFs2q",
    name: "IMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IMI",
    quoteLabel: "USDC"
  },
  {
    address: "DRuY7o8wrqFhR3UDGJ5qVq38NUPjDuufvRKuVcDWVAeP",
    name: "VDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "HrPt8ijENSLp1dd3ActHHwvXRYRaPuBorGyA3tJ5qfhL",
    name: "DOGEB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGEB",
    quoteLabel: "USDC"
  },
  {
    address: "82wxxCyH2ad4vHkNNZGLaT9HdkShRcqry8ajBRhgp7zJ",
    name: "SOLD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLD",
    quoteLabel: "USDC"
  },
  {
    address: "6bPEzMSAVCjWqZmHLJHhicce7K4Ce8K6NwPKkkm2aJxL",
    name: "ARG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARG",
    quoteLabel: "SOL"
  },
  {
    address: "CAJYTuKLPn5GHCS8yEqGo896P2BQCrwhM5MM3xFgvB8s",
    name: "MMC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MMC",
    quoteLabel: "USDC"
  },
  {
    address: "Hg6yXMcbqxSQBs4jAU9BewgMeLpRzBJT3ZvoNn59FuPn",
    name: "GINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GINU",
    quoteLabel: "USDC"
  },
  {
    address: "ETgiZXAWGbSf751GHMyJaKZUv59YgWw1bvB55FyBdQ9t",
    name: "Blur/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Blur",
    quoteLabel: "USDC"
  },
  {
    address: "ANnpARGZqB8bbZN4GDhMn93vLwdNTEBLUbP9wbK5pP6M",
    name: "SINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINU",
    quoteLabel: "USDC"
  },
  {
    address: "HQdX1ytJ9TWadiDhQjiBJaGCGpgEJZQtrwzDoSBwnYER",
    name: "PEPEC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEC",
    quoteLabel: "SOL"
  },
  {
    address: "CzWHMZexG4CQwRw9u6Dm3Ksm4dXeiYcFtbydeQWraQiU",
    name: "DICK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DICK",
    quoteLabel: "SOL"
  },
  {
    address: "DvH9hePSFggixThfiDkhh83K94JieDazNh9j3hHouVxC",
    name: "USDC/Crab",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Crab"
  },
  {
    address: "cpcRdQRuatcQtcBTNrMMe1isUZiBTMtcVXci5dyfC1R",
    name: "LD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LD",
    quoteLabel: "USDC"
  },
  {
    address: "3agED2ppR2RsyvgTzc6dMebJ62dbJVnfoxKR59HctRG9",
    name: "RACA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACA",
    quoteLabel: "SOL"
  },
  {
    address: "8Gv41mkbTrCqSKXZ2dpop9P45xey3N4YXmheQugHjgyG",
    name: "SNIPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNIPE",
    quoteLabel: "SOL"
  },
  {
    address: "adgsV9RQuoZQM2JkxRXogv3vNFdrCmhK7wfEyB4v1Tq",
    name: "Nyan/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Nyan",
    quoteLabel: "USDC"
  },
  {
    address: "AzAfXcbJx6pfWQu4RFbS5EBw2Zv16a85D4N9vAPNhVUF",
    name: "SOL/NCTR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "NCTR"
  },
  {
    address: "EoCMgs5XUuZ7iHrRS49pArvfHyLZgs5iJbcTu7r1Bs2k",
    name: "HDI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HDI",
    quoteLabel: "USDC"
  },
  {
    address: "G2hBhVga3k6X9ytu8JUvot1BC44zD4vSGhGwV46eLj84",
    name: "Pine/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pine",
    quoteLabel: "USDC"
  },
  {
    address: "3WrNCw89pE9gdsmXtCtNKhup5zDL2K67CVdEgpeuw5tY",
    name: "GCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GCAT",
    quoteLabel: "USDC"
  },
  {
    address: "rHH597mefnKpCgEazryeBMejC6hq4LYc3W896ByHiGk",
    name: "CHILI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILI",
    quoteLabel: "USDC"
  },
  {
    address: "3C53s1gRHCRYXFBCQ2bxm9WE3ydXuZ5X8RCWBHqbtJc6",
    name: "Pael/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pael",
    quoteLabel: "USDC"
  },
  {
    address: "3mbs4sQNqC5SDamaBcWT75eT8fbAnkTpEgBpDsqH9qNk",
    name: "SOL/KEK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KEK"
  },
  {
    address: "DKNr4mUEX89rEjF1qKYCypXmcdg7nPivkX8XKmsz2Wrd",
    name: "VASHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VASHI",
    quoteLabel: "USDC"
  },
  {
    address: "FZoMig1vdkywV9ed3rTtGxYqgVgV5ioyhHLR3aSTGYWB",
    name: "SHEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEN",
    quoteLabel: "USDC"
  },
  {
    address: "6MoFjxM7sgQid8Umzn83RFwevYbgBPx5jYc88re6aNhZ",
    name: "SARB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SARB",
    quoteLabel: "USDC"
  },
  {
    address: "5ZnUzhSAB3U8mVSyEL8HQSjPZZwGDi3VWZ7na6rHNPBx",
    name: "DBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DBONK",
    quoteLabel: "USDC"
  },
  {
    address: "5S2pm3zASNXPGhAmM14VDfPDNLNPX2FMSHjrQ8UUigEy",
    name: "BILLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BILLS",
    quoteLabel: "USDC"
  },
  {
    address: "4p118hKV8N6s8nHzXiBiyJgBsejEbFsYDtpkZhCmeYEQ",
    name: "HEIST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEIST",
    quoteLabel: "USDC"
  },
  {
    address: "DuSMWJPVdPRn7nQFSraiT38oTova9hCkkCu98i3v68ys",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "C7msoNSmm4yPbCkXMCXBccrCNVMcHrKuA7vz3U1QWTD4",
    name: "APPLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APPLE",
    quoteLabel: "USDC"
  },
  {
    address: "86eLPY71MT5T17VhRwXfCcp44Zgj9fRrdb5dxn2pTUCT",
    name: "ECSA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ECSA",
    quoteLabel: "USDC"
  },
  {
    address: "G2vqhKHNbcMNRib3r7FWw9RdqK3FgPQxGiDGGnLv5pMh",
    name: "BANGZ/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANGZ",
    quoteLabel: "RAY"
  },
  {
    address: "DmpcAXop5rQAnyw5JjstTuohhUEuoXHZerWedcVnoFCW",
    name: "GoatGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GoatGPT",
    quoteLabel: "USDC"
  },
  {
    address: "Fz2fSihLF1D8pLoh4qtvFooaTMnaamHGutK6XckUiWZc",
    name: "SPACE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPACE",
    quoteLabel: "SOL"
  },
  {
    address: "9UbxE9V78QncSPTM2tMbjjN6HLUHrrCFfwgpdyda2geX",
    name: "SCrow/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCrow",
    quoteLabel: "USDC"
  },
  {
    address: "F1iNzKMy2mBr7tvdMb9bApkiHLWT9zAEzXzeB6BHebjq",
    name: "USDC/CUJO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CUJO"
  },
  {
    address: "CDqgJN4qQhYpJdAd5hY1ePEfc671ZBqeTo8TTmwGkGUd",
    name: "FRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRONK",
    quoteLabel: "USDC"
  },
  {
    address: "DJ67AXDthBjUDAmhRVCwRKHpgBT8yke68aCfCCLvnLc2",
    name: "BLANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLANA",
    quoteLabel: "USDC"
  },
  {
    address: "3JDhzbbSpZn9jzo2QPuY5npEMwoWpQpQRczW3hkYQV1B",
    name: "SHIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIL",
    quoteLabel: "USDC"
  },
  {
    address: "B1Jbzho6HVX3nmJsCbXYCpi6ndFMpwGG42fkiDDZUbKg",
    name: "BBK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBK",
    quoteLabel: "USDC"
  },
  {
    address: "B17fL7WewFiMcxPSGVGZDHbLRxtuWYM98k4Q4wvZMktd",
    name: "RAWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "USDC"
  },
  {
    address: "FyiKZeU1ToMD4zpDHRoWRVaRwL46f3vPdUwia6m3ZkFT",
    name: "WEMIX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WEMIX",
    quoteLabel: "USDC"
  },
  {
    address: "Bu63kQ4A9AUiR5KqhSAXwpZvhnG8hxEASeagpJiLc2Fo",
    name: "CKKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CKKA",
    quoteLabel: "SOL"
  },
  {
    address: "7C8dADrZiVwQpKXQzf4p3VEFWTietu88zufackXtyesb",
    name: "BABS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABS",
    quoteLabel: "SOL"
  },
  {
    address: "2sWjM7jPBKHPikUS2q779WAZiFDJo82VBc1FQKsNBWJs",
    name: "FRANK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRANK",
    quoteLabel: "USDC"
  },
  {
    address: "CQxCdKqWkxXdRgpFuvd5Vd7WF9e4arkPeFxyoyVe4t1z",
    name: "ELONP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELONP",
    quoteLabel: "USDC"
  },
  {
    address: "byTTRskhY4yE2AiiiSCUMSVEeAnXqez78SCfs1kseH2",
    name: "RIZZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RIZZ",
    quoteLabel: "USDC"
  },
  {
    address: "7HZ8yyUskfgLH5VXEYAuUHa8a58AbDxwjxBAELMGePbe",
    name: "SHEEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEEP",
    quoteLabel: "USDC"
  },
  {
    address: "EoJ2DAaUbnB9BmriVBpvMyKrrENAAjfxCPkx8fXSPhLh",
    name: "CAP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAP",
    quoteLabel: "USDC"
  },
  {
    address: "4v5myEr4ug3WtorxYinXypgxCT1U2FKap6nrXQkJQjRz",
    name: "MCAPS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MCAPS",
    quoteLabel: "USDC"
  },
  {
    address: "FqcG3AKeJNgureEMcBPddzNnCmjq9GEnG4arb87Xwv3n",
    name: "SAMONA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMONA",
    quoteLabel: "USDC"
  },
  {
    address: "83e4edHvSPt9GDhv1BUuTARSAeDtn2dbNvc2QNW7QJRb",
    name: "SSINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSINU",
    quoteLabel: "USDC"
  },
  {
    address: "CxH4fNHrxMGjyhzghWr6d2yQHJp6FfsxpThJkLaMdPRG",
    name: "MUU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUU",
    quoteLabel: "USDC"
  },
  {
    address: "cvGt3g8NissaFNij1xpXpofVoibqVnVxx1Mhx6fXu36",
    name: "LAZY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAZY",
    quoteLabel: "USDC"
  },
  {
    address: "4QxjrawRdhso6D9kMzbF1kQP8afCoeqxRyiWRzgoHTHr",
    name: "POOH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POOH",
    quoteLabel: "SOL"
  },
  {
    address: "GAvmvjpKUDKADT1NLefDmCGn5rgKAiwo8qoWyCPtW5kE",
    name: "NIO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NIO",
    quoteLabel: "USDC"
  },
  {
    address: "S5VqDWaNszAGgVSnDRxVkJS5Ca5FWd1YJKkMjDp58Hv",
    name: "KIBL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KIBL",
    quoteLabel: "USDC"
  },
  {
    address: "6gXiq4u5phFWZ6ABzc21mtNik5mrKhLcGr8xCQY4aday",
    name: "BONKAPES/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKAPES",
    quoteLabel: "SOL"
  },
  {
    address: "4eVAx5e9TZtayTa9Gt845QDEjCXhypZV1bxJopwB7czC",
    name: "APPLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APPLE",
    quoteLabel: "USDC"
  },
  {
    address: "7jZrAy23eBJvpJgKcRhCWaPVGsZNJTgbSi4npM17tUS9",
    name: "Bacon/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bacon",
    quoteLabel: "SOL"
  },
  {
    address: "8GWLRcaTsRxWgbzFSLMhGSMHvQeTdZpDRW6MED7BzDLv",
    name: "WTF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "SOL"
  },
  {
    address: "9qJDLWviqKbwFWVtT3BcbaEvvKYxvenw691hi5cNhZe8",
    name: "EKS/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EKS",
    quoteLabel: "USDT"
  },
  {
    address: "AWh5MQybYYW9Hnhg4Mnwpn13uWsd76tgkGMw5kVaebiz",
    name: "ZKSol/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZKSol",
    quoteLabel: "USDC"
  },
  {
    address: "4RaGV53VGLGAVBYshHuwk6wMQUS3VHH4BAMSakTXCyEW",
    name: "STHOR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STHOR",
    quoteLabel: "USDC"
  },
  {
    address: "FxDLs7tYyeW8Gnex4itGuDguUYbHGFgs1qcSQnPVZTbK",
    name: "PRFUM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRFUM",
    quoteLabel: "USDC"
  },
  {
    address: "BRmwXM1pQS1GVVDhzMmGvPHzGhBPJFaM9gn6ui3k7ZYJ",
    name: "ZILLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZILLA",
    quoteLabel: "USDC"
  },
  {
    address: "A9ZSk4MjFLabmzUCS29Nyc6gLGXdkWMeXhvEcaJd6Mz2",
    name: "BSKP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSKP",
    quoteLabel: "USDC"
  },
  {
    address: "EcKqfEcAAzWXM4Q89cf7QK2uHXzNYwZnJTwLFLieeiB8",
    name: "0xbry/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "0xbry",
    quoteLabel: "USDC"
  },
  {
    address: "74QC9ePoFEF3G6iqmwhDmxLD2gwzydkQr8X3pZyYmQjg",
    name: "SBET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBET",
    quoteLabel: "USDC"
  },
  {
    address: "4Qa5nuKwTDw82mwSW2ySf6gsLixv7GUycrzbNmu1WYDr",
    name: "OPEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OPEN",
    quoteLabel: "USDC"
  },
  {
    address: "5m6q7GiJFrCq7DZAqoPZSYZdjVQJby6HL3hdGzYPahiX",
    name: "GCT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GCT",
    quoteLabel: "USDC"
  },
  {
    address: "7pyKyS3WdTC98GCWhX1qR64S5fBs88yHHpgxxkyCijhr",
    name: "NCAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NCAT",
    quoteLabel: "USDC"
  },
  {
    address: "5Jse6pknDrXDLxzDAPnNgBBSnZk6gviCecrZQqMXTHcV",
    name: "PRO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PRO",
    quoteLabel: "SOL"
  },
  {
    address: "6LpYNbwxkQd5BiJTbkNhd4ug51FhCXH47akrXM2jbg9B",
    name: "PiDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PiDOG",
    quoteLabel: "USDC"
  },
  {
    address: "8qz7bJ8ebw8ehECeFkfK1NLsv6DxAGXErQdGkFd1Gohj",
    name: "BILLA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BILLA",
    quoteLabel: "SOL"
  },
  {
    address: "BATrNK8PbofQvg34YhmcNnD7QrUhMR6yogbUrNTuKXaG",
    name: "DGOAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGOAT",
    quoteLabel: "USDC"
  },
  {
    address: "BsAMPPSC1J3Wvivafx3gF7VtdQ6AQe3cXTBpFtiLcbhy",
    name: "SBIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBIT",
    quoteLabel: "SOL"
  },
  {
    address: "ewEXfTLwGmVjWP2bs76vWt284HTT3Apn2i5PdoDGA7m",
    name: "KBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KBONK",
    quoteLabel: "USDC"
  },
  {
    address: "5hT35tEc6NTfy6L2MtnEGD3hANhbnqrJWGVS1iHwHqzj",
    name: "FRK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FRK",
    quoteLabel: "USDC"
  },
  {
    address: "4Y7BPHBa3tL34NXD2kNH6Zs2ZxVUP89QRVRVd9bdBtpp",
    name: "DINO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DINO",
    quoteLabel: "USDC"
  },
  {
    address: "DGN2EPdwtJsg4T186rC9YmkArUrefAgcr4y495cXWaTn",
    name: "HOOK/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOOK",
    quoteLabel: "USDT"
  },
  {
    address: "FhKJfjPYHdPgcj991zHZWtKf9yzkyM1yBJLTWXcBvLKp",
    name: "CLAY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLAY",
    quoteLabel: "SOL"
  },
  {
    address: "FMBJcRXzgmJsDeHTPhn1RWKzJQhLLurcpEgeqAanmJSF",
    name: "HORNY/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORNY",
    quoteLabel: "Bonk"
  },
  {
    address: "H576P8R3wEnGNDhaxK7XUy6EbnGRjTiYGLhMu1DiGW3s",
    name: "USDC/BFIRE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "BFIRE"
  },
  {
    address: "EtxhFaPi628X4JrBhu3MzV1ewWBcWRfyz7KahJTrKsJv",
    name: "SOL/BANG",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BANG"
  },
  {
    address: "CYz829xsV1goHbWg5gbUjobC7jy9daBikzKWUtPJqceN",
    name: "NIMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NIMO",
    quoteLabel: "USDC"
  },
  {
    address: "GMGpgwy59F5US756hDs93WGP5tASPt326QQdqJC8YDQq",
    name: "MILO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MILO",
    quoteLabel: "USDC"
  },
  {
    address: "AvB7NcZQYaGMZfLRUPZoRvHUQqTS2jcEZrHkccahJrFf",
    name: "Derpi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Derpi",
    quoteLabel: "USDC"
  },
  {
    address: "C9KfMhVKbRKuME2pTEbhtzFD4c8hDBbS9BxghkF259S8",
    name: "SUGAR/MILK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUGAR",
    quoteLabel: "MILK"
  },
  {
    address: "69JSLeJiPKkwkoEeTX4Fi9PvNCSpjtzKnRq3HqUQVoqq",
    name: "APED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APED",
    quoteLabel: "USDC"
  },
  {
    address: "FphDtroHNMCi5ApCRm5CUzZC8sWdpq74WMTjnKFQkDut",
    name: "WOJAK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOJAK",
    quoteLabel: "USDC"
  },
  {
    address: "EFmBdZEiuLx83dt3TufA55NvujtpuHfbHDygSbncDPPr",
    name: "S2E/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "S2E",
    quoteLabel: "SOL"
  },
  {
    address: "GTRHuhyYPnSTKbVyoxTA3EDtPxp8XjQn8C5bGhqjTEd9",
    name: "DOGGI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGI",
    quoteLabel: "USDC"
  },
  {
    address: "AqLa4TXCSAicrsNAQ2fZh99Qtx3JmrN9nC4HMZpBz8kX",
    name: "BingGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BingGPT",
    quoteLabel: "USDC"
  },
  {
    address: "9Kbyz6LGh7udqDTs5d1Hi8M8vDS1kEGxpgFKTJq4WZUq",
    name: "CRCL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRCL",
    quoteLabel: "SOL"
  },
  {
    address: "bxnbJ1eNrV2NxsR7Gq3tuvBkM4YzELW8cjvk4PspgaK",
    name: "RAY/SolDoge",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAY",
    quoteLabel: "SolDoge"
  },
  {
    address: "CoALUSRASru8kGW6iQub4z8BAqjsN3hfvBypqGD2jWyW",
    name: "BeeGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BeeGPT",
    quoteLabel: "USDC"
  },
  {
    address: "BrXh24sihxcr2Z651XP4X47Y9v3UyVuppf3jzMMrpASB",
    name: "GBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GBONK",
    quoteLabel: "USDC"
  },
  {
    address: "AnHSVU1VZY8NBh6Lc1szLCSgcLpjcJejoZnmseKSMicX",
    name: "BBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBONK",
    quoteLabel: "USDC"
  },
  {
    address: "4Xtu7ya4hDzfP5EN6WHKMcpwSMLhPAQjBhuhneMnkNzG",
    name: "POO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POO",
    quoteLabel: "SOL"
  },
  {
    address: "EzdmXX7u7wgAyvqupvNVHAZsAMkf78F1ko1tzs6JCwta",
    name: "DRIPPZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRIPPZ",
    quoteLabel: "USDC"
  },
  {
    address: "98ctyZqjw5fZ4iCvC6EQ8U1jfv3Q59ufkD68dzKu4VgL",
    name: "ASAP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASAP",
    quoteLabel: "USDC"
  },
  {
    address: "5zKrYQg92XJVk1ssLEXyWL3pe7sCo2kRxcjCP2fpPjQM",
    name: "HARSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HARSH",
    quoteLabel: "USDC"
  },
  {
    address: "6LnEiC472fzunRv7uyFX5oMDfVMcbBw9CA7d6KrgtjpL",
    name: "DARK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DARK",
    quoteLabel: "SOL"
  },
  {
    address: "CRnFAGUqowWHWZQrf9adL7poHCtdZCAG7tkEDEpCiqbM",
    name: "USDC/ORBS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "ORBS"
  },
  {
    address: "6wmVLJv8PNFwA88sirGE9CEACC8Zu2wgJA398bLp642b",
    name: "IPANK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IPANK",
    quoteLabel: "USDC"
  },
  {
    address: "9s5eH97HfDGkcSgaTydKwdaS2VXmReF88QCnQkkPNyYT",
    name: "TOONS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOONS",
    quoteLabel: "USDC"
  },
  {
    address: "AcLiU7oUAEF5zDp8dfMg23zpr3S7tC4LJcR5bcevMUkp",
    name: "KOKA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOKA",
    quoteLabel: "USDC"
  },
  {
    address: "7Y4x31mbafis2mv4UbN1h8Z5G4vwSuieCXDhQi7ooWQq",
    name: "CUMMIES/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CUMMIES",
    quoteLabel: "SOL"
  },
  {
    address: "4TCZFNE49rsm5MFZE9kzoXHH5hj9hj2iEpaihtiBz5dG",
    name: "SQRL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQRL",
    quoteLabel: "USDC"
  },
  {
    address: "7m1hJFkNkBbhsscugx4ZbiTxrzkFWaJ5zGiUF2UitZ74",
    name: "ARCIP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ARCIP",
    quoteLabel: "USDC"
  },
  {
    address: "5ic8hMggGLeXhofWKmvbE5sUNNmtfdEYH1sXwytH93g1",
    name: "Apish/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Apish",
    quoteLabel: "USDC"
  },
  {
    address: "9tUYWNDy1GdvFiHjEyze32Jqxu61hDvVK1AeijtLWZbG",
    name: "SHEKALIM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEKALIM",
    quoteLabel: "SOL"
  },
  {
    address: "Ce3H48YzKnPBVhMYXFNELzhVg6BM6yf4kHUq7LzceRy3",
    name: "SHIBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBA",
    quoteLabel: "SOL"
  },
  {
    address: "AAr9AmjiFPSS5Eyjf3xXaLyZ8hPVV76WBXeATPwZBYhJ",
    name: "UFO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UFO",
    quoteLabel: "USDC"
  },
  {
    address: "37CQRNfw2bupA4dEMgsrxew7URZ1EaX4MuD8W3JrWoZB",
    name: "MONKB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONKB",
    quoteLabel: "USDC"
  },
  {
    address: "BJRQ9SRhbYycraANjhq7NtmkahyupsfwXRiGhd3shec3",
    name: "OOF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OOF",
    quoteLabel: "USDC"
  },
  {
    address: "CazggSsxEv484gZBMdPpzaMigpPnxxhGKHYfEuUpY41Y",
    name: "APPLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APPLE",
    quoteLabel: "USDC"
  },
  {
    address: "oAQuY5Av9FwTbeVWcwVNTpden5B4G1qCye8MoSiHiGh",
    name: "PNGFI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PNGFI",
    quoteLabel: "SOL"
  },
  {
    address: "GUAAgfyXM3wcbJLoNzZatmrNg9GUEwhFPFoWg4C3VfGi",
    name: "POX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POX",
    quoteLabel: "SOL"
  },
  {
    address: "2hRGmcvYyRPE51eC9MEFqo8q4dz6xmVPozak7pN3JnVD",
    name: "KONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "USDC"
  },
  {
    address: "4HUwo1f3aKefXTwbi6bo5cNmrTxYv242WotYtQGPi9Cf",
    name: "BILLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BILLS",
    quoteLabel: "USDC"
  },
  {
    address: "3oJe3WE4yrjcuDKTS2RzDi2dWHQdke6YSHk1M2bFgMdL",
    name: "USDC/HADES",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "HADES"
  },
  {
    address: "3nHc2x6MfyDQtDcfSUsrJy3cbp1RHSiwKCPuKzxfFcEp",
    name: "NITRO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NITRO",
    quoteLabel: "SOL"
  },
  {
    address: "6JWcoaac6kM4yxXNqe91s8g43bhN9uv3JnYaB3a7of39",
    name: "CHILL/CHILL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILL",
    quoteLabel: "CHILL"
  },
  {
    address: "3UizNmMG4GyJFHGMiWRZXaYfH73iSESkX11LAgt9K8zX",
    name: "BPEPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPEPE",
    quoteLabel: "USDC"
  },
  {
    address: "672cUH81Mak6bwfTnnjjHs7UFnwBkyJcdpngDvStbYha",
    name: "BTS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BTS",
    quoteLabel: "USDC"
  },
  {
    address: "6Zj49U6GgXxr83y9T43qHZsFxVNeB3v3TWHkpYnvzSZm",
    name: "TGF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TGF",
    quoteLabel: "USDC"
  },
  {
    address: "HEXFBSYsSViLMUkFKsdcYhcPVqRRhmWmLt5yJ1pdmsR8",
    name: "HIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HIT",
    quoteLabel: "USDC"
  },
  {
    address: "5spzAKw1bMbCBtojY6571VtCdtRBPei3cwkvsbAmCGeZ",
    name: "KLN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KLN",
    quoteLabel: "USDC"
  },
  {
    address: "DGocDpvh44HvmVBzqWvFkqW46DCeGnRx3wB4BGD7KD7T",
    name: "DOGAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGAI",
    quoteLabel: "USDC"
  },
  {
    address: "2k6mzTg73Eqge8PaYhGAVbyAp62PVUNzxFi5VivRctQR",
    name: "SFNTY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SFNTY",
    quoteLabel: "USDC"
  },
  {
    address: "6XaGj6NhwYuvebGSGz66RWzbU6QaL7SqpfyXN3iXZNn8",
    name: "GONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GONE",
    quoteLabel: "USDC"
  },
  {
    address: "G1z4v5xfRHFi99JRiEKpnGTkvvS56tRbKU12FP8VK85h",
    name: "PEPEGA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEGA",
    quoteLabel: "SOL"
  },
  {
    address: "FngTMkFLL6wrFmebDtwffE9sSrpxshSZraNzTDxXDtSM",
    name: "HAM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HAM",
    quoteLabel: "USDC"
  },
  {
    address: "Eu99BkEwHZJWimKAR9cFUSxCyXYMZcagHyRr9UTyWE2W",
    name: "MND/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MND",
    quoteLabel: "USDC"
  },
  {
    address: "AGMSjisfS4tiTcUcxVWT9qrpRKL7nGXFC6BwyRJoMX71",
    name: "MTM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTM",
    quoteLabel: "SOL"
  },
  {
    address: "Acm3Rpwqz4C7LLBFp9PtqLwJhdmwFgddqoPwVKjE8pCN",
    name: "MNKRB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNKRB",
    quoteLabel: "USDC"
  },
  {
    address: "CkjHgDt4r9anMHirfBUmaGKcLUAQ7TF7HUB3uD19uGbb",
    name: "sMEAN/MEAN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sMEAN",
    quoteLabel: "MEAN"
  },
  {
    address: "3oubv9rNKjHm1RAy8LpxAbdpD4h5kNz1Vq8WcgzwDRWC",
    name: "MEAT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEAT",
    quoteLabel: "SOL"
  },
  {
    address: "6AX6CFkd8KszWudMAXjFqE2QWThTkcSQa6yAJsNVF56M",
    name: "SOL/microSOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "microSOL"
  },
  {
    address: "2D8NdiUgVyi3ozUjo5stnbnJ1uSFhM1YbP3StveHRuyC",
    name: "TOSA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOSA",
    quoteLabel: "USDC"
  },
  {
    address: "MHkkrYrQc2oe9UqX5TW8n8wB3NgGDws9DgNkTpvfkjL",
    name: "Hinkal/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Hinkal",
    quoteLabel: "USDC"
  },
  {
    address: "BtXVERE9iuutZaQnyjq5SCfRYwAL9CzJvXEeXc8zrMAm",
    name: "SSTAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSTAR",
    quoteLabel: "USDC"
  },
  {
    address: "GVwPZ54Kk4c6q1WPa6KVUjvYc23cmwZbQpA6yNs542ac",
    name: "DOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOG",
    quoteLabel: "USDC"
  },
  {
    address: "HAB5VQE5BYwNbXgvVGjVtdypZEKAwRHqZTqU6aetaDa8",
    name: "SCAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCAN",
    quoteLabel: "SOL"
  },
  {
    address: "8JxRWyWq8FksYYRQx5vvM8LEBmcG2qLK634oMs7Grmvs",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "2RK4ciXYrfQLBGmUGDRTj6oqTdmH1FVpXZq9SjyFWzpK",
    name: "HODL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HODL",
    quoteLabel: "SOL"
  },
  {
    address: "ACWFQEeSsLJz19AbN9BGHDCKv7ujaaa16mEuDcnWiYXY",
    name: "BBURN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBURN",
    quoteLabel: "USDC"
  },
  {
    address: "E6hNnUrR32UrkcTr9prdtiYVwTyzxBsqtPxbCUesP95a",
    name: "DONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONK",
    quoteLabel: "USDC"
  },
  {
    address: "6xodwa1RQ26vaZ7KexNNwA3To2LtA8Gw1QYhnFVDCfpM",
    name: "LECT/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LECT",
    quoteLabel: "USDT"
  },
  {
    address: "Cn2T6kCTqbuzKYLX3N8Jij9EJBXvwEj8WgzRimK6T7sP",
    name: "CHOMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHOMP",
    quoteLabel: "USDC"
  },
  {
    address: "92K8zcrc58vQVkEv4te87YpyPxQXZbSbKto3sUovHtEW",
    name: "WGgl/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WGgl",
    quoteLabel: "USDC"
  },
  {
    address: "HwE7bHVmNViK9LmzDzHrQeGgCv53jZhjWrQQY21tRsRz",
    name: "SBURN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBURN",
    quoteLabel: "USDC"
  },
  {
    address: "DywwhCPPtGypMhgoMmEs6C9wzuYbGoEqBoVFyG8c4oPW",
    name: "HORNS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORNS",
    quoteLabel: "USDC"
  },
  {
    address: "FuT87KdmjH8bhLSW9jFxSm14PRUXAMfZ5rcXWgTHzkcj",
    name: "BSBOK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSBOK",
    quoteLabel: "SOL"
  },
  {
    address: "8d54fFyeqDCJ2KAaN79mAphxm7YTTswwe9MdNSxLZZT6",
    name: "VOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VOLT",
    quoteLabel: "USDC"
  },
  {
    address: "AeUjSbRz7jWQEKdPtpmoWamVy6VM6ZxWhiQQfYT3uwrW",
    name: "MNTS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNTS",
    quoteLabel: "USDC"
  },
  {
    address: "EBvtNN5MzFXrB4fHu5CgTWhefDFwkA4o8dVnj2tyZLJH",
    name: "SAMBO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMBO",
    quoteLabel: "SOL"
  },
  {
    address: "FDhc7tDapjT79VG6fUbb26RKaYLwHQKjGLp1pNGo2evi",
    name: "GECKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GECKO",
    quoteLabel: "SOL"
  },
  {
    address: "7BEjLgPhWdngBdLKvj4EjPBjEQ4pD8jat35Fe4AcSkrY",
    name: "CBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBONK",
    quoteLabel: "USDC"
  },
  {
    address: "XjhXnSN1AWMR5L9WnsNo3noCaSmsCb8oBQGpjqFnqoo",
    name: "TWINS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TWINS",
    quoteLabel: "USDC"
  },
  {
    address: "9enw6shv4ftn272DVdWhfYUa7yeYzMqRnogtnJtbgARA",
    name: "BOZO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOZO",
    quoteLabel: "USDC"
  },
  {
    address: "2WLrspAfkabMB9eYBPGw3TwD7Y4hxZxgSrrvPJbLkThJ",
    name: "BETU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BETU",
    quoteLabel: "USDC"
  },
  {
    address: "6YfmdMZ3yxJJKR6msTapHdSjkX4FnieyXFk4aiZ3egn1",
    name: "BSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSOL",
    quoteLabel: "SOL"
  },
  {
    address: "3LXRZrAhJmNWpVaSh3uFJW4ULSaQQrVmziCrKFfhXoq1",
    name: "LONGE/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LONGE",
    quoteLabel: "Bonk"
  },
  {
    address: "DhVxLcSa1WHePU6cZBcvhKuNv3s2VLSPFTLMq8488bo1",
    name: "PONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PONK",
    quoteLabel: "USDC"
  },
  {
    address: "CrXt5AWeX9b3bg7HyQFEnM61n96hJRGZm8Aprzkxat9f",
    name: "Stama/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Stama",
    quoteLabel: "USDC"
  },
  {
    address: "5MYdFqT2DLMbaadb2h8U3CrpUc8Mfy6Ym2oaMTbkzaU1",
    name: "ZUMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZUMA",
    quoteLabel: "SOL"
  },
  {
    address: "FfxSFyPuMgjH2aoUdt2y3byjHxJpSWmb9qovZVCX4KmH",
    name: "KOALA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOALA",
    quoteLabel: "USDC"
  },
  {
    address: "2GMuFxwdfShnb4DBuXLMSRCbJjBWJLNijzkrh7MzLjHs",
    name: "SNTAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNTAR",
    quoteLabel: "USDC"
  },
  {
    address: "GMrYshWjiMbB7ztffHujwheVDpmc7vrgFBBKbLLTWyKv",
    name: "BEEF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BEEF",
    quoteLabel: "USDC"
  },
  {
    address: "AMopcoUHWG9QA2qK2b4Dw3KhRdySyJftVTw5uHHMFiup",
    name: "PNDA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PNDA",
    quoteLabel: "SOL"
  },
  {
    address: "HAuL5zp7VjqjDDLtS9uwUdQvrLekdPSajGRBdYhxj5hr",
    name: "Solt6/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solt6",
    quoteLabel: "SOL"
  },
  {
    address: "33wo3v1PmC6VK9FHJjaw511KsPvg1mdgRUJUK7zgxddS",
    name: "SMILE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMILE",
    quoteLabel: "USDC"
  },
  {
    address: "8qBFTF5CixA7RHM23Aujz3mVzWmFfd6cx3XtSZMQrNjf",
    name: "DONKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONKI",
    quoteLabel: "USDC"
  },
  {
    address: "BGTPsmY2sQ3aT6reesoApQ6MwXYVekHvRmUFRGo6fyqY",
    name: "PBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBONK",
    quoteLabel: "USDC"
  },
  {
    address: "2Z8AD341yygn4CEaAm1NqXDY2utsAC1ZAFqVEw8nu38h",
    name: "KAZU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KAZU",
    quoteLabel: "USDC"
  },
  {
    address: "Dy8Ztg1Qa5BxDhjuGWARj6eHrVMoyHcD43qdCNoJneb1",
    name: "BDO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDO",
    quoteLabel: "USDC"
  },
  {
    address: "FXCQvZzzM5P16NHbbEfQCvTWev2Te1cZ6RieESDHU4qt",
    name: "SOL/Pepe",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Pepe"
  },
  {
    address: "EhHQkAUKkVVvEqq1HXb9n4JE7o9V4qPen8MZBPGW39g2",
    name: "BANS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANS",
    quoteLabel: "USDC"
  },
  {
    address: "8h8GnnPm2nhXHCvF6xnGVJAfwhz71GqKkXud43ou6RJp",
    name: "TACO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TACO",
    quoteLabel: "USDC"
  },
  {
    address: "GFHxKYmwCQgdRA6SSHu1huzygnAdBj7omfBzbwXtUQ5q",
    name: "SOLGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLGE",
    quoteLabel: "USDC"
  },
  {
    address: "BsAE5NAuA7Eeu8sY9t5qzD3t2zfB32wNLUfHBYBBHYp9",
    name: "PND/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PND",
    quoteLabel: "SOL"
  },
  {
    address: "3W52UiNoma37iv9jUFREhJWK5PEpzaq9AgQ9iyDrRRQM",
    name: "SOL/SHARK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SHARK"
  },
  {
    address: "6cUkuqGsFcVUDS476bk5JTydafBockeBUgkatcTpgF1p",
    name: "PUDDY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUDDY",
    quoteLabel: "SOL"
  },
  {
    address: "Hck8s3RyTxdUcxodJxNXB6maCFY8wB227EKE1MdqCvFx",
    name: "HNT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HNT",
    quoteLabel: "USDC"
  },
  {
    address: "FfXdg58qQkh6tC9EtahDK1Drz2Zquxk8zQtTASBB7SYM",
    name: "Bonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk",
    quoteLabel: "USDC"
  },
  {
    address: "3bodg3qnz9Kbveap1dpPmiTA4YNKdkCSosSkVicQ7hmb",
    name: "CMN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMN",
    quoteLabel: "USDC"
  },
  {
    address: "GnFd6Gq2KGKJ5YzmsVmboUcXo2nakcyTSKFjRUydD9eh",
    name: "ORG/COCO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORG",
    quoteLabel: "COCO"
  },
  {
    address: "Ebsy1VuZPoZd4WiJDk4bufHTiCJeotexgACveuy4yKz",
    name: "BABA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABA",
    quoteLabel: "USDC"
  },
  {
    address: "DmpUPw81FfrScLyEtVkV8t7wYUgKvx49DD2i2NoPB2uZ",
    name: "IBHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IBHIK",
    quoteLabel: "USDC"
  },
  {
    address: "E4Um5Lb1WzNkywWT515qHsjdtWeJDvdc2UtEqWEmx7ne",
    name: "EGGS/MILK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EGGS",
    quoteLabel: "MILK"
  },
  {
    address: "G3acnpwqHbFMxfCM3HkRUtxyR4DvayY8MGMtwivAEENz",
    name: "SHIMI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIMI",
    quoteLabel: "SOL"
  },
  {
    address: "AXVMjUMQm4CDuzveG8Nw3qr8ssPBUwyjRwJwN4B3cYnX",
    name: "COYOTE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COYOTE",
    quoteLabel: "USDC"
  },
  {
    address: "9Q87o6xZMzyG6FSeFFzm2xZ9ADPXG5YbDN1x2QqQ8EEV",
    name: "SHRIM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHRIM",
    quoteLabel: "USDC"
  },
  {
    address: "EapCdVo6nAUcWxki1cSbZxN113jKMpzQxs7gMBhPE3F8",
    name: "KUWIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KUWIK",
    quoteLabel: "USDC"
  },
  {
    address: "AgoHFhi9TYdDo9sWH4gQJVTicPkc4o4dAtDMQbwp4Q7T",
    name: "HUNT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HUNT",
    quoteLabel: "USDC"
  },
  {
    address: "2D9wWnpZ3hSqSJp48QMmBaohHJbts3f4j698TxKrGnJ3",
    name: "ACS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ACS",
    quoteLabel: "USDC"
  },
  {
    address: "HTJLNFMGTv7WsC1jcopieBtGcs5iJshTKrDXbSN5nfbp",
    name: "FPS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FPS",
    quoteLabel: "SOL"
  },
  {
    address: "A6uybe3w3U6bKf1XsFz5jQxBr1QffFJ4zRdtRTdogjJa",
    name: "DOG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOG",
    quoteLabel: "SOL"
  },
  {
    address: "GmhT4eoQPSzAdrAM65aT67FjupnDdK8DFtBsbttTfLz6",
    name: "NASSR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NASSR",
    quoteLabel: "USDC"
  },
  {
    address: "9onFcZw8egvTSr4NmT8GzTDdoLFGA2t5kEQENAPVDNaJ",
    name: "OOTW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OOTW",
    quoteLabel: "USDC"
  },
  {
    address: "GN7QcjqxVVAsQqQCrcduTMxULPjofGov56CMkqXhukxi",
    name: "BSHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSHIK",
    quoteLabel: "USDC"
  },
  {
    address: "YdB6jH7MVjYy6jS28qMNMdNmVZXZ7pvJ5kXu4znxUwc",
    name: "Pepo/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pepo",
    quoteLabel: "SOL"
  },
  {
    address: "7okavaoySDM1qhsbRtdNYUW3jFpTifL38kp9Hn8xS4Uy",
    name: "2000/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "2000",
    quoteLabel: "USDC"
  },
  {
    address: "9XNDqLUKWtH8XggHVvnAyBUTT4BgnEWJxcMLbTAAt8kX",
    name: "SMINE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMINE",
    quoteLabel: "USDC"
  },
  {
    address: "48tcdakzNrg6uy6WtfwVxwooZ7XZQ9SZLx634hRSUU8b",
    name: "MAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAI",
    quoteLabel: "SOL"
  },
  {
    address: "PMQew52Q1BqzPsHDK7ykWAwjd2gDsUqK7Zh1ir8z1nk",
    name: "PET/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PET",
    quoteLabel: "SOL"
  },
  {
    address: "48ChmpQDnqkU5WGszBJ5SQP9LC7pMyKYJnT45ZKh3Vvx",
    name: "SAMOGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMOGPT",
    quoteLabel: "USDC"
  },
  {
    address: "8M6TaBvGDYTHLtGF1d4dhgLeBxbizVyp9EEiqYBuuWQZ",
    name: "NDOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NDOGE",
    quoteLabel: "USDC"
  },
  {
    address: "3aXGKvGRZJNfShKY7hpAW8R8GhNhZYw29niKXpGKRBiD",
    name: "ORB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORB",
    quoteLabel: "USDC"
  },
  {
    address: "53ns1sggULY6yrHyDZRiARAtsbTUYX7vymfyei9yfNjU",
    name: "YART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YART",
    quoteLabel: "USDC"
  },
  {
    address: "LmY6ruy9813qQL9wkrX7bDiVKBSh4jAYienPFbVwiK5",
    name: "Shrimp/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Shrimp",
    quoteLabel: "SOL"
  },
  {
    address: "8KtTdU4HD5LL5XX4Gr5pWctPpor2u9xZLVXReAaLCBv3",
    name: "OPSUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OPSUS",
    quoteLabel: "USDC"
  },
  {
    address: "HxUf5kbtqCyva1YEuohkrFhJHbnfiGDP83icU2pPx7qE",
    name: "HRV/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HRV",
    quoteLabel: "SOL"
  },
  {
    address: "EhQb2ncnfxfwBSjuBKFRyV7bB1mzKkmNg6uYeAaGKJnn",
    name: "MUTANT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUTANT",
    quoteLabel: "USDC"
  },
  {
    address: "7vFaFdajGi7p22RwJucSsenDCKNJaq7PVCtaevxxfxXo",
    name: "HILLS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HILLS",
    quoteLabel: "USDC"
  },
  {
    address: "5KtsCL9ztZxXs9MbVU2id2JVpzbXXKaxFHZRnBEuYn3",
    name: "SMORI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMORI",
    quoteLabel: "USDC"
  },
  {
    address: "F8jp8Ctbdq2qRWQEeEdLDb7W6xD98wQ3GBrttCTDGcjZ",
    name: "COPEG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPEG",
    quoteLabel: "SOL"
  },
  {
    address: "3GZjnEauGseeV4fwewbNesyJsv5CPnD4t5Cikt6BCfLB",
    name: "CORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "USDC"
  },
  {
    address: "GBmfptBwows3mHKkrAEhihpLyK7SaMnJnQeAXykJW5au",
    name: "BonkA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkA",
    quoteLabel: "USDC"
  },
  {
    address: "D3QQZ26XCyLesV419YTE8VyqTo8w7tA69UFgKSTcLhtD",
    name: "SUN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUN",
    quoteLabel: "SOL"
  },
  {
    address: "22U2LskXLNS3U5xcxdkvSwiVcCfxzy1w6kTASKsi8WDa",
    name: "MOSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOSOL",
    quoteLabel: "USDC"
  },
  {
    address: "ag1HaUmNEkKhkueRuDSL5LhRcx6fgSaBTVBN393b7kd",
    name: "CPTAZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CPTAZ",
    quoteLabel: "USDC"
  },
  {
    address: "Bc6QB35DJbkGZL2gK9CtK5Q21sXYa3zADzpNYKJ3kBpU",
    name: "ALF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALF",
    quoteLabel: "USDC"
  },
  {
    address: "CzNKftno9PgXnu3DauEu6YnEtwT5BmRduLNUc5xZcnvs",
    name: "DOGAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGAI",
    quoteLabel: "USDC"
  },
  {
    address: "BAPnvnyHUfT2jZf8S2GB42dtj8frjx3EigyJfLiiKqvb",
    name: "BONKz/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKz",
    quoteLabel: "USDC"
  },
  {
    address: "A6KpVv61To4ytgcpP4LbFEJaEVsuhNbvDjkLehQSQXvE",
    name: "USDC/KABS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "KABS"
  },
  {
    address: "6amKXfNDqRLpJw5nTQkK5V8nGGN1KuEZTduxnFwPhLun",
    name: "CHICO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHICO",
    quoteLabel: "USDC"
  },
  {
    address: "2kocUjYtcbt38mSYFhNiCdvSRM2WbvPrttFebcSa4SSR",
    name: "DOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGE",
    quoteLabel: "USDC"
  },
  {
    address: "8J4XGiDkeU7x98gio5sbhidfLbpqxRgmHBzd1F9FdC3z",
    name: "POPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "POPE",
    quoteLabel: "SOL"
  },
  {
    address: "7FPdNv1Si9nnLJiW7mdmgkrJUWqAWtuPZPDSzbpKVNRq",
    name: "RIFu/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RIFu",
    quoteLabel: "USDC"
  },
  {
    address: "5Vqma9bEqfrhjfs69A5wD5hhJWtGDRms6ityZqSdHAML",
    name: "AZUKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AZUKI",
    quoteLabel: "USDC"
  },
  {
    address: "BaQZsgZpHNNb7DnLJJ89HVzypK94BRx25yhb375c9Jvk",
    name: "KAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KAKI",
    quoteLabel: "USDC"
  },
  {
    address: "4mGHjizZg2iQirdaYjScVT2ker1jUVyxcSUqHRCSB6Ut",
    name: "KITTI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KITTI",
    quoteLabel: "USDC"
  },
  {
    address: "9CpXCy7mJomVk2wNa9fi8UdpLLfuYxTfQzCRfjyFgJnE",
    name: "GROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GROW",
    quoteLabel: "USDC"
  },
  {
    address: "3FZSnpWpWeniUAogt1wKxsuXZcn9xNDRetWDYQU2CpmM",
    name: "VEIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VEIT",
    quoteLabel: "USDC"
  },
  {
    address: "87AaqwgNmUWxtKW5YtmuAQU79zzgZhRVz7aEUp8UwNVT",
    name: "APSO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APSO",
    quoteLabel: "USDC"
  },
  {
    address: "E9FSNBUhGhpAFeTKr7Lj4UdbLRzJZfXhJpho7QaKkv3T",
    name: "DUCK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUCK",
    quoteLabel: "SOL"
  },
  {
    address: "6k9uuYdhPcstmofbyL9cLZkb9XS791AtUG4AT2MizXSV",
    name: "Cumpp/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cumpp",
    quoteLabel: "SOL"
  },
  {
    address: "6Vs1TZQSAe9nfQdnF2qFuS7JBSJJCnZyfjubsM9ZPTYK",
    name: "MIAOZU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MIAOZU",
    quoteLabel: "USDC"
  },
  {
    address: "5AumiFTZVsJQfKqAchTK9kfjLgYD8W8vbmZkYdRDMVp5",
    name: "SAFU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAFU",
    quoteLabel: "SOL"
  },
  {
    address: "HbPPy3t3UMTT5u5s3thSCjFBNQFGmEHRadcFCg4M5r4B",
    name: "WEB5/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WEB5",
    quoteLabel: "USDC"
  },
  {
    address: "EqEn1JV1oXyj87e3TbwSgCH3uyNQUXaRzimr5XdfmwSv",
    name: "1LBTC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "1LBTC",
    quoteLabel: "USDC"
  },
  {
    address: "DfDEqeAQTxTo29tP5NjFVLk3RK2LduRSjE2D7GVJj7NV",
    name: "BonkS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkS",
    quoteLabel: "USDC"
  },
  {
    address: "Gs5t86U3pZXMpsGkdVJ1sNVPDz3FvDzSEuzun71vXmy2",
    name: "MOGA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOGA",
    quoteLabel: "USDC"
  },
  {
    address: "DWeFDZEtqSCnBcnXMepg6ZW1mW9VsE3g4GLgKYkDUWv8",
    name: "LOLITA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LOLITA",
    quoteLabel: "SOL"
  },
  {
    address: "4yRj42jJZm28t78hAiWUYdu1CmxtdG2Enj72LrV8tiKi",
    name: "SOL/DNT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "DNT"
  },
  {
    address: "DMLqLtQWshKAfDndddk82A8Dwr6K3yvY7S8F8wMS6WH8",
    name: "sAPE/ETH",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sAPE",
    quoteLabel: "ETH"
  },
  {
    address: "FEmBPsPzZ7mGvDWhDnmGDFMHC1rPJdHu31cLKxxRWYTG",
    name: "EBIRDS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EBIRDS",
    quoteLabel: "SOL"
  },
  {
    address: "2c52AiXVM73JMUJ3z2uWgrWbYT6pxiuFNkJqtQEA59hp",
    name: "TKILL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TKILL",
    quoteLabel: "SOL"
  },
  {
    address: "8z6kEXPtTiobF4Tg4Bi8UeQq3bptTnSp9hUmbf5YwU6m",
    name: "CORGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGE",
    quoteLabel: "USDC"
  },
  {
    address: "5vKUqiX1XSQttUzHYHd795zkv8LG3ekC8dchUH13s5cT",
    name: "MONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MONK",
    quoteLabel: "USDC"
  },
  {
    address: "5Uawc3FraFSZU8bgmHijrm5wx9PRfoAtJS7EktAZWikC",
    name: "SPURD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPURD",
    quoteLabel: "USDC"
  },
  {
    address: "CZdP5Lj5iNGwf96FUQNNcGaHXqjgfyEFsrMnjMhyRtHa",
    name: "TROLL/DUST",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "DUST"
  },
  {
    address: "BCWcDeKJ492f8LLsK6Ur96nqvpndSxYyGXaEgadRUWCx",
    name: "BIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BIT",
    quoteLabel: "USDC"
  },
  {
    address: "Ea56rcULLootybWuBN1Jhsp1jdR8hD2r3YxbG2hYWM2",
    name: "BHIMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BHIMA",
    quoteLabel: "USDC"
  },
  {
    address: "8Ljf9prp5sehnR2ihQAocRCdQnnZFzCxcQ2LQn4bY8sQ",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "HLbZq6BAusLQWqrjxhxmJhKRCEMSWgFjYLmkTWF2pX6u",
    name: "HADES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HADES",
    quoteLabel: "USDC"
  },
  {
    address: "Ddh5rueAAsQvLbk8RynKrQ68TECzcsrA16FtqTLMQsLh",
    name: "BDOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BDOGE",
    quoteLabel: "SOL"
  },
  {
    address: "FcTZRaH7fUtUEFo6heT68Cp43xAs7tZXEDurAffkqdgd",
    name: "SGEN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGEN",
    quoteLabel: "USDC"
  },
  {
    address: "7aNtb78wuAmJZsQrQR7dekEPdCXHf6F8c7TpGm54CKRY",
    name: "FPEPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FPEPE",
    quoteLabel: "SOL"
  },
  {
    address: "DqM5iTpt9J6Yzo3T2dFTemoqKWSZD4Hek6pUNdt5Dsnw",
    name: "SOL/WIENER",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "WIENER"
  },
  {
    address: "DowK5fQr3qyRYeRFmGojU7obbh8iEgCzk3967JN1Wc4c",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "D1W5UPGZbB551uM6VmqBGAoPCRJXXL1LyjDCydr8PB7k",
    name: "WULF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WULF",
    quoteLabel: "USDC"
  },
  {
    address: "5f962TMxcB2LXLsh4ToxMbNSkjsivtcCQAjgDvsLQpWd",
    name: "SOL/KINGS",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KINGS"
  },
  {
    address: "2w6MYJvBq4Z8xCwKAAy4GPrT2fFJCaJPoNarQ9RCNhHk",
    name: "SUPER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUPER",
    quoteLabel: "USDC"
  },
  {
    address: "Fr3LDAKh2gMQ3qPrmcMd7xywhyRrfxYT4vqYR56YynRK",
    name: "SCI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCI",
    quoteLabel: "USDC"
  },
  {
    address: "5ACK5NPTxxNkVi9BN93DWc18y5KRV8ZmujwbbM9B1LEG",
    name: "SOL/SNAKE",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SNAKE"
  },
  {
    address: "DvBc7FCswsohGKcqiNocfLvsYaJgegz18zStP6AMPaTu",
    name: "HULK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HULK",
    quoteLabel: "USDC"
  },
  {
    address: "GwpCxqNjhFiAr71a4Ko85JXKsiFTGjHeFAu7vMFARxC6",
    name: "PIRTE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIRTE",
    quoteLabel: "USDC"
  },
  {
    address: "FVvXkX2Jt7Hxfpq7nZQRQvwy2KU6nHHeXXCeehMNisFU",
    name: "IOT/HNT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IOT",
    quoteLabel: "HNT"
  },
  {
    address: "ExQoVPXobc1vu1brjubeqnphXd7Y2xzh5AC6LuWoujaf",
    name: "SUPDUDE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUPDUDE",
    quoteLabel: "SOL"
  },
  {
    address: "EQk6mvPQcoSci8vUu4fiXkUjWDL6uZDUw1NYfAk98LXp",
    name: "CBEARS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBEARS",
    quoteLabel: "USDC"
  },
  {
    address: "2pJbUwGZi9a4m9QLkgJCXcUgDAN2qjMqusiFYkSYqayp",
    name: "SEAH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SEAH",
    quoteLabel: "USDC"
  },
  {
    address: "GxfWC1HWs344RBMySw9TistATwcrreLqMAjVL8JfD4B2",
    name: "HOPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOPP",
    quoteLabel: "USDC"
  },
  {
    address: "6PCyEz4H2R4MHcMuYSUHAungnVRUCGxU4T9QkeH47y81",
    name: "SHIBA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBA",
    quoteLabel: "SOL"
  },
  {
    address: "2B1kx3ffoJDF7pu8T7odvG2RRMSDNSrH89mJibYj7GRD",
    name: "WOLFO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOLFO",
    quoteLabel: "USDC"
  },
  {
    address: "z5k5SLz3y5QpVJFXxrYgfDVd35MLJoLUhaUbndDrhdc",
    name: "CHT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHT",
    quoteLabel: "USDC"
  },
  {
    address: "E2QpPfLrfpkjxWzuwH5EJy9oATg4MUhr6szJSdoCZQ7M",
    name: "FOXY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOXY",
    quoteLabel: "USDC"
  },
  {
    address: "9GZCkL5dKLXXBeihax9kSDggF1Q19wooSXESryLTCR8p",
    name: "AGVZ/RAY",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AGVZ",
    quoteLabel: "RAY"
  },
  {
    address: "14eT6zTz89XpoaqA6WkooZkzP1RYRYbiSpvPqdvWscwS",
    name: "HOP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOP",
    quoteLabel: "SOL"
  },
  {
    address: "FXBsr3pTdLT2Pe7ZbS6Ad881VcN4DVyzpSqUVatgE4c5",
    name: "MTP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTP",
    quoteLabel: "USDC"
  },
  {
    address: "5sHPetynF5NQ3hMbCTXnZgQ37nRMX6bg4j6LiBFDRKZa",
    name: "MOONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOONK",
    quoteLabel: "USDC"
  },
  {
    address: "13EUHZfhkpnxBmkE5p4GUd2KBbZYZw9Ss7LBUz3JpRCn",
    name: "SOLS/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLS",
    quoteLabel: "Bonk"
  },
  {
    address: "DjQUQxCGGuhnQjoy3kYu1PRrmykwWk2sDK1QVdyfDn52",
    name: "BABYBONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABYBONK",
    quoteLabel: "SOL"
  },
  {
    address: "DxBT7nViHsfFbykkqJTTFD92Re9Yrz6JXjWa8UgtHzYm",
    name: "WAGMI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAGMI",
    quoteLabel: "SOL"
  },
  {
    address: "3QJwqhQLg8gRWGBdoQPJc8i5CREEKmqdG2SqCT5MiNuh",
    name: "ASX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASX",
    quoteLabel: "USDC"
  },
  {
    address: "DxZotU1XrGgQ9wrnWemmHC64uKCPUzBBuhSsuxPjGA9b",
    name: "SBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBONK",
    quoteLabel: "USDC"
  },
  {
    address: "Atnc648maMJ8KkTdP7oGJCvZM9duYzDrFdkzHb8eiVg8",
    name: "SAMU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMU",
    quoteLabel: "USDC"
  },
  {
    address: "4EfMQYbCfS8DjZY1gY3qxWG3C6xSaskaCpMQCoiJW85i",
    name: "MK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MK",
    quoteLabel: "USDC"
  },
  {
    address: "2urpAcyZnEC1rdSGWGSbud32eifLaVuGa4MxBpEGa8uX",
    name: "Fire/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fire",
    quoteLabel: "SOL"
  },
  {
    address: "35Vwfm6qJxNgE3ypPSNDTHMydYP68cyXYSLmH1uT69k4",
    name: "BPUNCH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BPUNCH",
    quoteLabel: "USDC"
  },
  {
    address: "7kuFD3LkCc1CXPiefk96qHt1quRSEvSH26cKJ6Po7Xob",
    name: "MOLLY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOLLY",
    quoteLabel: "USDC"
  },
  {
    address: "8jNYn6dXG3P7DkSRyAHWngviVjfzWnN7sPd6LoMfq2Pn",
    name: "ChatGBT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ChatGBT",
    quoteLabel: "SOL"
  },
  {
    address: "5KzPXcWFWptrsWk8mLbTQpH5JHgXMC4dFkrdwJc91vpP",
    name: "BuDOG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BuDOG",
    quoteLabel: "USDC"
  },
  {
    address: "HuRzZH8awJQYdpTur1FjBpgyx2ZrmY9vaCAPDnwgEm7K",
    name: "KCET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KCET",
    quoteLabel: "USDC"
  },
  {
    address: "4bHXb9LS1LjkEyMLUiNmaCn5jZKXKkDwx4mSoMGN4u9s",
    name: "VORGI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VORGI",
    quoteLabel: "USDC"
  },
  {
    address: "DyXN9ssssYKJ39HNPwTUtDRHmKvYEZ2oVYsybmasxNkF",
    name: "PB/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PB",
    quoteLabel: "USDT"
  },
  {
    address: "HaS322wjEAGGDLLpBXrCNVrgPCg5dF5bFy9jB6H4f75j",
    name: "MINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MINU",
    quoteLabel: "USDC"
  },
  {
    address: "EmVULsXvvEuHdBr5twoyZHvWpE6pUxUqdaKjq6LAH7Er",
    name: "ALPHA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALPHA",
    quoteLabel: "SOL"
  },
  {
    address: "9C8wUSAbCyZR6HxpMG7qcoXXE5kBAgnNw1GUyLFBpjmC",
    name: "SKUNKY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKUNKY",
    quoteLabel: "USDC"
  },
  {
    address: "7Yh4bKutPgVxbiDQjDhEhDGhhXxFqBopyGNCycXwpYvL",
    name: "CRONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRONK",
    quoteLabel: "USDC"
  },
  {
    address: "ARP2oCbS3jZdSoK1pTYEVtLnNTK9h8nrvuFFk2WGWXdb",
    name: "KAZU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KAZU",
    quoteLabel: "USDC"
  },
  {
    address: "85yPBCTQSKvQkJfAH2KytxMbBegSm8BN4PRz8ZxEWaUy",
    name: "PPANDA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PPANDA",
    quoteLabel: "SOL"
  },
  {
    address: "E5QW3NVEpRfS1vEv4bJcE93uLQAyV9QyXTWuAzFw3qaL",
    name: "MTR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MTR",
    quoteLabel: "SOL"
  },
  {
    address: "DfHjftLu6DDCQ7J7oTd4GmULS9nxR1muMCoymVVK99Lx",
    name: "BUNNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUNNY",
    quoteLabel: "USDC"
  },
  {
    address: "Fam2TBRxN74LBrV1PSwput4nTvF46quXoaxSf64ChBy8",
    name: "FBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FBONK",
    quoteLabel: "USDC"
  },
  {
    address: "5BGFYHoND7i4WjrJ2Dc8zevvSkhv14u9291YUasPM1B2",
    name: "SMOON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOON",
    quoteLabel: "SOL"
  },
  {
    address: "3ctn4Dt3TBoVXNBHj2vJqvsGNVfpAkuB9eAvSJG7Cgoj",
    name: "GROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GROW",
    quoteLabel: "USDC"
  },
  {
    address: "CFzfe2YJgfpi3jRT7Mc2oH2XbcXKWw5JUtW4aBCbfyA4",
    name: "Garf/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Garf",
    quoteLabel: "USDC"
  },
  {
    address: "DTWHLaGToqhwWG9HgQXu22DHGaBwgAgSs9MG4gNNDYJ7",
    name: "DHL3/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DHL3",
    quoteLabel: "USDC"
  },
  {
    address: "HRgxtJFQVSecRzmPAqT2tEt7nCFgubb8Q6ZPQY6gtiDH",
    name: "XTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "XTR",
    quoteLabel: "USDC"
  },
  {
    address: "MwcjpuZ7YhXZxdqbNjd43X7MV3dS3WJsF9sfvmjNM8b",
    name: "HPX/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HPX",
    quoteLabel: "SOL"
  },
  {
    address: "B9HDv3ud2rhd8BtiHGfJiRsGfhDxWxXyFrUxGocj4nDK",
    name: "SOL/KEK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KEK"
  },
  {
    address: "Ht3CCiL7GXyj6jag3QZhQ9PZCDHx4PnmuWNitrKS9C6v",
    name: "SMOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOL",
    quoteLabel: "USDC"
  },
  {
    address: "CiYiAoTzpEjiaxvWk8GTBJQTBuVdeS6c1BsnuDJwHfDV",
    name: "SQUID/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQUID",
    quoteLabel: "SOL"
  },
  {
    address: "F8gdSgEmSuS5TangUZphmBk3hkYtGpN7jdZ9XFVqidhJ",
    name: "YEMMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YEMMA",
    quoteLabel: "USDC"
  },
  {
    address: "Ct3a86U7W8LjQFT54Tq8UNKTaDeqRVjZFf2xs7mPGcBy",
    name: "DROID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DROID",
    quoteLabel: "USDC"
  },
  {
    address: "Dznw8RnaukC2CTCT1HjJFoaYeUdaGqHRjvMFmHdcEGvd",
    name: "ORION/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORION",
    quoteLabel: "SOL"
  },
  {
    address: "3x1CoKmjsEjXgZr5tqSeSNqkMf8SLLPQPomVBgAdgFCE",
    name: "TMB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TMB",
    quoteLabel: "USDC"
  },
  {
    address: "AkZ1jbLSazW2LWGqdxXks77iJevUz4YpEuywHoRj3pHA",
    name: "MAIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAIL",
    quoteLabel: "USDC"
  },
  {
    address: "AeuwginaHyD5WyeHBiwRYLxJ1eLSbwC6bLdzva8jjhnA",
    name: "CMP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMP",
    quoteLabel: "SOL"
  },
  {
    address: "611JuDv1cMfd4kjjsdV81aBNyjqEvXCXpTUdhCio8nCR",
    name: "MLAW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MLAW",
    quoteLabel: "SOL"
  },
  {
    address: "3BEyVUoVYeexgmj9keW4fK9tArAHoBkY8Haf9WimSbUK",
    name: "SGROW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SGROW",
    quoteLabel: "USDC"
  },
  {
    address: "2dmZ21JAtsrk7VCoxvKd9PCG2SDu7EroPGaRq7Pcdfi6",
    name: "FROG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROG",
    quoteLabel: "USDC"
  },
  {
    address: "HVyEKmhtCZG6stAvv1M3VtbnNviM3zrw3R5sFySPoXhP",
    name: "Twste/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Twste",
    quoteLabel: "USDC"
  },
  {
    address: "FH2GzNyWsAfavraKjKge7uMEWKqqYbHeJNwCb38VULgm",
    name: "SOLFI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLFI",
    quoteLabel: "SOL"
  },
  {
    address: "K9q9KzjvhMjCMztcXYFMFx6CVQBdqnrzmMvDBhRmo8t",
    name: "RBI/RBI",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RBI",
    quoteLabel: "RBI"
  },
  {
    address: "7yj92m4MMVVtBZvNoNcH3evbzjaUMs65oFZkY4rc1Ch4",
    name: "DWAE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DWAE",
    quoteLabel: "USDC"
  },
  {
    address: "CWYpN1p4R3FDr7VBwqgW34vcEBdkoiNwdoYrty5e4x93",
    name: "SPP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPP",
    quoteLabel: "USDC"
  },
  {
    address: "CKPup14BRisTKiLAsxGzxwKnXsNHF4RJnnKAaK6AkMpa",
    name: "CGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CGPT",
    quoteLabel: "USDC"
  },
  {
    address: "3TWzNFASkYiehKif5kmeR1tDsd5LzUif1tCMxrQp53Qa",
    name: "DOBO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOBO",
    quoteLabel: "USDC"
  },
  {
    address: "E7kDX6uyfbP8v3A9GSFXJL88jMN2fgPjBMzRvGbu6YTi",
    name: "FAPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FAPE",
    quoteLabel: "SOL"
  },
  {
    address: "8qy3YJVEdf5kXUwPahjUuCZsqvyHZCqsEtW7fGPu2rY3",
    name: "Froggo/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Froggo",
    quoteLabel: "USDC"
  },
  {
    address: "14v4RkECMneUYdZ12YkrybZp1EGrH2xxgLgq3RznbEf",
    name: "SHEEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEEP",
    quoteLabel: "USDC"
  },
  {
    address: "3ukjWqUo7aEoj9ojTcrraCVQtnNtxcYYzDcE6nEu6Knw",
    name: "BOINK/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOINK",
    quoteLabel: "Bonk"
  },
  {
    address: "FjbuhupyxbZmBHeQjC1yqMAL3NgjSYXGU8zXDcwr7Emi",
    name: "GOOP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOOP",
    quoteLabel: "USDC"
  },
  {
    address: "xhc698y9A8RKUjgFzyWNnv55UeBfzNhXV12CuAf2Me3",
    name: "y00t/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "y00t",
    quoteLabel: "SOL"
  },
  {
    address: "Fy8MQUQyywpzEKyJF5hcnPR6qggj1XPQ4mND5TLgJkHj",
    name: "QSWAN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QSWAN",
    quoteLabel: "SOL"
  },
  {
    address: "Adn39LN4qMMvSFgsWhc6VCxgkzp1kEYmS37o7zKtH2FD",
    name: "CHEEM/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHEEM",
    quoteLabel: "SOL"
  },
  {
    address: "FmKSsg81La5j3JB6bhLXbyNGeAJrB6ZFXm1H8eqgmFRA",
    name: "PLEB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLEB",
    quoteLabel: "USDC"
  },
  {
    address: "C33VEb8jYBUjUQrJaZt3EwYiwLzwT75zf7HnkZ7GaxxE",
    name: "TERRA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TERRA",
    quoteLabel: "SOL"
  },
  {
    address: "7nNUZi8mV38BrpXvFsztdFhyjz3jLiQ9zASCLw9pr3A4",
    name: "BCope/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCope",
    quoteLabel: "USDC"
  },
  {
    address: "958HKAFtRcQtUjt4w77nMvLqh2A5XQYgw6jmspJvDK11",
    name: "YAKZU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YAKZU",
    quoteLabel: "USDC"
  },
  {
    address: "EkUrWVCnL5EAbYGRDfzsbV9JMe4nZWfeA87KBzhpDRm8",
    name: "SBUK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBUK",
    quoteLabel: "SOL"
  },
  {
    address: "RAyMdbSMEse5XAWjqrz3BCjAREWX84qxUMduSHc34eq",
    name: "PIT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIT",
    quoteLabel: "SOL"
  },
  {
    address: "2EWoagjVmeauPpKW4UYgdAj3pZh8cik7gpsxiL2gB15B",
    name: "TAMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TAMA",
    quoteLabel: "USDC"
  },
  {
    address: "6ezLhzV76LvrhUshrbp6vDyraF5ZsZUVyEvRWZGSS7Yw",
    name: "ZoGe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZoGe",
    quoteLabel: "USDC"
  },
  {
    address: "8sSgmz5Sx8vwsAN8cuEM1zrRUffqLuPhuVWmjJu3pMpq",
    name: "Crocs/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Crocs",
    quoteLabel: "SOL"
  },
  {
    address: "GQt2FrQGNQiiT4vtMY222U4gksnpX1ryL6qG66br4mFP",
    name: "WTF/SHDW",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "SHDW"
  },
  {
    address: "6RnWVCByW2S5xnx9jnz7ncXE6buwTgSneugEy7KzamBv",
    name: "MEOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MEOW",
    quoteLabel: "USDC"
  },
  {
    address: "5b1wJ39eQTgDNMXga69D3koBWN8JmsxFKZaLqgMtaWdv",
    name: "BBAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBAI",
    quoteLabel: "USDC"
  },
  {
    address: "CXQ1AKEfgaB2v6M7Ky8CWv9Rc6GtUmMKBgKB5YPoMkne",
    name: "USDC/CORG",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "CORG"
  },
  {
    address: "EqNMwKtHWSqU2dFu7qqhoA6Lp5EKMa7u4W79zbvJgxnE",
    name: "SWETS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWETS",
    quoteLabel: "USDC"
  },
  {
    address: "54gt917AAeDqkQUn4DxzPJhZAYQrF8scCzx9419QB7ec",
    name: "SIMBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIMBA",
    quoteLabel: "USDC"
  },
  {
    address: "JAdyhCugCceiDUkRS2a7Mutgcppdbqt3Vsfd7MXeevQm",
    name: "FLOV/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOV",
    quoteLabel: "USDC"
  },
  {
    address: "Ge6zrkGZwZT2CgQMFq86JCFvREtz8aMZiSQTnQjEHdPb",
    name: "COPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "USDC"
  },
  {
    address: "4xSxdNBNboMyAa7aXWfikYrTiMCWf2AAT5mU22rLvtY",
    name: "TEST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TEST",
    quoteLabel: "SOL"
  },
  {
    address: "2eZQRNtPPtgX3ZktMeZkxJfJ1fagfvtxxzZdndqpCQZu",
    name: "CBOOK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CBOOK",
    quoteLabel: "USDC"
  },
  {
    address: "CvoBF7sTui5A7rA1AzmU6Kwato5W6meiRUjHTeD6A4TF",
    name: "NOMADS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NOMADS",
    quoteLabel: "SOL"
  },
  {
    address: "4AQKjHUpi625ghG6EgF9pXzhhSn59xBtCiDFGuDrEmz9",
    name: "ASTRO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASTRO",
    quoteLabel: "USDC"
  },
  {
    address: "GMAJyTMiGvPFFBG78Mv5KHwEbwbEaqumKqgx4NESnmFn",
    name: "NAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NAI",
    quoteLabel: "SOL"
  },
  {
    address: "FuvF73abAU7TVjrd51vY9pB2orisqh24p2kWPiA9MDnY",
    name: "EAGLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EAGLE",
    quoteLabel: "USDC"
  },
  {
    address: "EDzhTe5ZJpgRZ3ueMcoJR6U3zLHBQtUKbSVmF12WgH5X",
    name: "USDC/Shiko",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "Shiko"
  },
  {
    address: "DstddGxfGocDeTYQ7k35Vu1kvmDbX1Swty8JFmfToZu9",
    name: "VEIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VEIT",
    quoteLabel: "USDC"
  },
  {
    address: "Az412ix4exJytFoh8xBU5TFaAno9KtBvtjHd4u1KS6td",
    name: "HORUS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORUS",
    quoteLabel: "SOL"
  },
  {
    address: "DSQS42gUE5msQRiNNrnLA1n8A7RHrpQMuWHnUo7wpW7E",
    name: "FGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FGPT",
    quoteLabel: "USDC"
  },
  {
    address: "2p2fcZh3wcj6pFy5QvnzDExj9NzJF1DmqyC7ySoYtt1p",
    name: "Shoe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Shoe",
    quoteLabel: "USDC"
  },
  {
    address: "4ipvEvDSNepzQ7bvcMaWUZzhsxuuxCTv71t1GSej7fPd",
    name: "BRONK/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRONK",
    quoteLabel: "Bonk"
  },
  {
    address: "X55Mi3xeopepxPXcRJBgFEyXPYAVwspKa6bqizQB56E",
    name: "WOJAK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOJAK",
    quoteLabel: "SOL"
  },
  {
    address: "Huf376Er5GJRj5K9E59ASXeY2eFMnGyjVFbMMyC6fAvH",
    name: "SPAW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPAW",
    quoteLabel: "SOL"
  },
  {
    address: "52DDMS1deJDxwgmhhrdU4gwRJVfFzZsaeB12MK7qvwyZ",
    name: "SWAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWAI",
    quoteLabel: "USDC"
  },
  {
    address: "9LFwAPfVJ6ccA6cyNmmyUmgATaHrFrdLdMwf2vVdmdjc",
    name: "HACHIKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHIKO",
    quoteLabel: "SOL"
  },
  {
    address: "HFSu6Dvj9eVPkBu4nKbfgAaUMmA4zKUnLHm8RCWTgDEp",
    name: "NINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NINU",
    quoteLabel: "USDC"
  },
  {
    address: "46GY3rbzeB52Sb1ZvZhVKkiUXePhUPh3dzGiBMyFsu4v",
    name: "Ape/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Ape",
    quoteLabel: "USDC"
  },
  {
    address: "36vbArkUyxeCymwbbYiKWcjsY8JHKFpxy7CM7HCPJJdD",
    name: "DGLN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGLN",
    quoteLabel: "USDC"
  },
  {
    address: "J5gDrhzi6oPQY1Gs7ctuNYWs5j3BytdhLn1UjfvhDfZS",
    name: "PUG/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUG",
    quoteLabel: "Bonk"
  },
  {
    address: "DntR3xyXh9WG83yegrpnyFmkjfdnoLz67xXdjPMuaoK9",
    name: "SAGIX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAGIX",
    quoteLabel: "USDC"
  },
  {
    address: "Fj6rCBHp6PawbPNt8VVGBh2mzME8CG3R9vKmFguNqfZW",
    name: "RUFF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RUFF",
    quoteLabel: "USDC"
  },
  {
    address: "B1E6vAhMQ2CLUgDYvNCmPRLPAskhDm5PSx8bBiuRi6g5",
    name: "CMST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CMST",
    quoteLabel: "USDC"
  },
  {
    address: "78G8CXRZfX6AJvTXD4qkFTAXqPetBsRYZjYqHKPw2hbD",
    name: "RAID/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAID",
    quoteLabel: "USDC"
  },
  {
    address: "HNGZ9HWfL4QmPUMx7v8tEzkyf7dKBvquPLzWaREegASr",
    name: "SOLLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLLA",
    quoteLabel: "USDC"
  },
  {
    address: "CQRzVxcdWLKRzPAexM2i3D9FLpfNLu6JaexcTb4zUjM5",
    name: "CLION/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLION",
    quoteLabel: "USDC"
  },
  {
    address: "C7GLadtc7oKx1xgCXTGySTSMbLxQpNGLq2bCTgcQ7cdS",
    name: "BONKBABY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKBABY",
    quoteLabel: "USDC"
  },
  {
    address: "JBjKd947smQfGtMTE1y3VbRFNtDGLqWfBjcQxDCMtnav",
    name: "OTK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OTK",
    quoteLabel: "USDC"
  },
  {
    address: "6TYpkVx5f16YqQJUUuog8hEEpJESPLzPKNn8cKDcSMrT",
    name: "SUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUN",
    quoteLabel: "USDC"
  },
  {
    address: "7eYv2fK2Z3MoXcnv6zNtbFdncwfygaGYgpcbkPvn13Y6",
    name: "DNA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DNA",
    quoteLabel: "USDC"
  },
  {
    address: "2Uto7k3EaB9SvwxmBHwyGRSG6R6W5taW52SCAGRA1wG2",
    name: "PAWA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAWA",
    quoteLabel: "USDC"
  },
  {
    address: "G6dTnf6i75xmrY3z9ieNQoAPtamVdQaAPMtRrRiG8n2d",
    name: "PUPPIES/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUPPIES",
    quoteLabel: "SOL"
  },
  {
    address: "RXhaKMKeCR1FUz69svsEwMxKm1TE1RN7GcF1y4twkJf",
    name: "STARS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STARS",
    quoteLabel: "USDC"
  },
  {
    address: "FDG67p2RguXcHdpiF24MPkCVRuSdiJcELcHkEvWUzm3n",
    name: "O1L/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "O1L",
    quoteLabel: "USDC"
  },
  {
    address: "9o3kdaCH73UiZeDXDCY9HhaBGw3732RrzW1bfXizYdL2",
    name: "ROA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ROA",
    quoteLabel: "SOL"
  },
  {
    address: "D9EAiJV25AZ8zwcXo9N9PZKSY1VLrti9VPDX372ZcqHZ",
    name: "ELITE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELITE",
    quoteLabel: "USDC"
  },
  {
    address: "3P4s8HbdPY2p9AD9qebWnPxFWcwYCTxrsUVYEfoGwbVg",
    name: "WTF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "USDC"
  },
  {
    address: "22QtouhxGtu5bkxd77AvYhtPa4HVrA4ew4DZLFkg36W7",
    name: "TMT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TMT",
    quoteLabel: "USDC"
  },
  {
    address: "5ib2Z9nyeqmhmtwexuU2cCzj8bFY6c9DMD9FJ95e4Pv7",
    name: "MOAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOAI",
    quoteLabel: "USDC"
  },
  {
    address: "6gvBN65jFVFAQ1NgykEm2Aph4iChjHXmYgMgFTqoFP3s",
    name: "PILOTS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PILOTS",
    quoteLabel: "SOL"
  },
  {
    address: "6XnhqUd8Nk8pV2ay8w3x223gAnJpkEqm8MyA6ddU6AAx",
    name: "SSQD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSQD",
    quoteLabel: "SOL"
  },
  {
    address: "3nvJk3QQjS2A9py9qivKwvohyNtgYYYXdtGTKm3h7ii2",
    name: "BCHIL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BCHIL",
    quoteLabel: "USDC"
  },
  {
    address: "sHpdx18PNpfVHrp3MPuvBHv6Fy3Ydt1suSKZupb1cN7",
    name: "SACHIKO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SACHIKO",
    quoteLabel: "USDC"
  },
  {
    address: "E6DudFoXcbiLGES3kRacHhhCQznAZq97f7SvWiZwvimH",
    name: "Jarvis/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Jarvis",
    quoteLabel: "USDC"
  },
  {
    address: "F8EQLyy8VLd4qaU8rBYrWQX6FMSVaFVQQXvA3YgqxKMn",
    name: "MOOH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOOH",
    quoteLabel: "USDC"
  },
  {
    address: "B7ZmJTy5jVzDzpryGfMTN4ftRtZgtHEcGeuPS8DZTK2W",
    name: "SOLID/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLID",
    quoteLabel: "SOL"
  },
  {
    address: "445QkZdFLjmLWwPoH61WJ2gDggUfwpb7XCnbDWt9C4nN",
    name: "ODOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ODOGE",
    quoteLabel: "USDC"
  },
  {
    address: "4CVdPNxWKNhTKmz78eoY1TE2AwEE3A1VXXz2vkgPsaVP",
    name: "TROLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "SOL"
  },
  {
    address: "5x8fm3p2d2FrR9MXXynBVxeQScgt8YRDtGVB4UP4uU2n",
    name: "SUS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUS",
    quoteLabel: "SOL"
  },
  {
    address: "Guas2Fn5gsLHbG1fCq8Bhqab8vyK4isoSWb7vHA2eLiH",
    name: "RICH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RICH",
    quoteLabel: "USDC"
  },
  {
    address: "ALuFzSpr7hhBhkJXvf6Pz9aYG8T2jGjKjMqdNLJJ2Cpj",
    name: "FHH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FHH",
    quoteLabel: "USDC"
  },
  {
    address: "2zPbzk7FtzKaaBVZqcpAMzeGw1YK86u594i2tCtJBJnA",
    name: "SSTARS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SSTARS",
    quoteLabel: "USDC"
  },
  {
    address: "5sebikhS6bkxYKjcj1JtcH3MDGjmXV1t6W9Txc9PZqum",
    name: "ABC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ABC",
    quoteLabel: "USDC"
  },
  {
    address: "D2okGVz3Bati6ephNesfxcnuMWPHRNK6Tq1jMLrLQNSY",
    name: "HERP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HERP",
    quoteLabel: "USDC"
  },
  {
    address: "3QbtRRx4pbczdKLWVki7MftkNv4d9psvbWaHk1VdtHEY",
    name: "PUNK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUNK",
    quoteLabel: "SOL"
  },
  {
    address: "5W4fMZWt6eGXbsHQd4GEaZZfSe61Ctw5VFKjAZGUqsYu",
    name: "PCM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PCM",
    quoteLabel: "USDC"
  },
  {
    address: "FLSQpgxbwkc4S3yxfSCDc3RnN3ufpf6XGmvZgbAhSj2S",
    name: "DONUT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONUT",
    quoteLabel: "USDC"
  },
  {
    address: "AwicshLFRJghZQuK9NJYJ1fTq7ZiAFaqTzC6N5eFYT6d",
    name: "TORO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TORO",
    quoteLabel: "USDC"
  },
  {
    address: "8ps6BUeyqzQzH8ZgX8T62HgEmKZyX7CxoUusLoDjgVpG",
    name: "SRB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SRB",
    quoteLabel: "USDC"
  },
  {
    address: "DPW5h5P93nPj7FrgdHGkquUscp6EJXfxYvT87vRN6GYo",
    name: "bBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bBONK",
    quoteLabel: "USDC"
  },
  {
    address: "4STAZNctnNmszasmKDEmwDoRx9LWQQS7jNaYnvBYpUjn",
    name: "SPUMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPUMP",
    quoteLabel: "USDC"
  },
  {
    address: "CRGk1Y6bmWR4yqhgSZBXgDtdUbyTQnaGpkouaQ5qZnBr",
    name: "KEKW/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KEKW",
    quoteLabel: "SOL"
  },
  {
    address: "J1X3wiGoiAUVSkufmfgDwHPp7xaFpLYfbAV9JBJP6Rtv",
    name: "SOL/WEZ",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "WEZ"
  },
  {
    address: "3Lc9KUrzDpWqEZY3MYeLxpzrkgXdw6htfS6BbjKmiqCj",
    name: "LEMON/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LEMON",
    quoteLabel: "SOL"
  },
  {
    address: "4j7ygZZe8UhxhW1qQ5KWrRg1EXuSyFtY1MZwz8HicdrK",
    name: "IGMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IGMA",
    quoteLabel: "USDC"
  },
  {
    address: "5Swua6BubDcTsiG6ywN6aTmPunuJA4xpdmjoEbLHzRZ6",
    name: "MARU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MARU",
    quoteLabel: "USDC"
  },
  {
    address: "E8eQswFaViBkN3jPG4PZFbViGV9dVCJkiKqVBqrXqwLZ",
    name: "BUL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUL",
    quoteLabel: "USDC"
  },
  {
    address: "4F34Z2dv3oncWtvg9U8yG1T3g82pP3WZRJ2uTxfP5wVM",
    name: "SOLMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLMA",
    quoteLabel: "SOL"
  },
  {
    address: "6zvC5mQxczjKpB8UnT7qtn143oo1xf4PVTNV1qE7LFUf",
    name: "PSYD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PSYD",
    quoteLabel: "USDC"
  },
  {
    address: "AsqXF9bcN4ubBcSgR8YqBEJZVaTdyGprPTrEDQtUJXnw",
    name: "SMART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMART",
    quoteLabel: "USDC"
  },
  {
    address: "6rB42HpHgW2As9QSwSDovT6Tsn1HSyaMZffWCM52SyLr",
    name: "SOL/BBONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BBONK"
  },
  {
    address: "5B2AkntsqFKfYuN2sioWGMnbXDEqS4N74F81CzVb1VdK",
    name: "Bbear/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bbear",
    quoteLabel: "SOL"
  },
  {
    address: "DGTxW7aUMCGibKmWzrbPboA7nrt1gzevzrX9Pjd4qArg",
    name: "HORNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORNY",
    quoteLabel: "USDC"
  },
  {
    address: "B29wQBo1LwZ3hjMQPsWJ665BzeiG4WXi6Z2f3M4cK9W1",
    name: "SOLPE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLPE",
    quoteLabel: "SOL"
  },
  {
    address: "BpTx526KLALUZvo7bLLxmE2qPaF4kYdJFe6dwAGfhhKT",
    name: "NAKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NAKI",
    quoteLabel: "USDC"
  },
  {
    address: "BMjFjjf68TB1nkw2gDmkcF8gAdssHoREMUDEJqjKMfH7",
    name: "LUNAR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LUNAR",
    quoteLabel: "SOL"
  },
  {
    address: "3LBRUdopdufosix8i6AkFxGCVMYiaDL6meg7wbFC3a8j",
    name: "PLC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PLC",
    quoteLabel: "USDC"
  },
  {
    address: "6s6BpgXwGUMyQg3GyQkZu5M9auTSqGEjxBUMoC3YpXkX",
    name: "SOL/GM",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GM"
  },
  {
    address: "6aE8F1LALseTK7UA5vthcDZ8m1QAuVi7JHa27Fe6443C",
    name: "USDC/NYWN",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "NYWN"
  },
  {
    address: "7L6Chs47zK4UoQBUortv6NFSDegZS2U8M6i1rhHrxMZt",
    name: "BBQ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BBQ",
    quoteLabel: "USDC"
  },
  {
    address: "BU2LBZgbs6k3KURW5exC5QV5U4NPBXeEx7s6mZDxmXar",
    name: "ADOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ADOGE",
    quoteLabel: "USDC"
  },
  {
    address: "DBrZzA3H8C1pmLkuXxEx3mMAehqqu7MjTP37Vj2X4zEL",
    name: "SHEEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHEEP",
    quoteLabel: "USDC"
  },
  {
    address: "BtKWPxq43X7HYkxk6oj9HUCLpk8C7UUkMFpycFS8bZqV",
    name: "KNOB/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNOB",
    quoteLabel: "SOL"
  },
  {
    address: "AeGoS7TM5g9RTokE4PSBYELtXGjvvnXngZKbbZPQ5ynX",
    name: "PUGAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUGAI",
    quoteLabel: "SOL"
  },
  {
    address: "EiXNJghbN8N4o6r5GNctUARotV2WHkdKCrkUBxS8rMVC",
    name: "SOL/BAPES",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BAPES"
  },
  {
    address: "22A8RNfpiCwUYw9KSR894X4pKprmbpaU16CFeBXMQ3DN",
    name: "MARY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MARY",
    quoteLabel: "USDC"
  },
  {
    address: "8HwBk14y8rUZURMbU1nMxoxXhsDcM7azgPzrtZvsfDcv",
    name: "BSH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSH",
    quoteLabel: "USDC"
  },
  {
    address: "DxyD4AwwvkLqQjRPFCEWYdRykqDoGA3YvPReJ2XhoqwT",
    name: "Cart/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Cart",
    quoteLabel: "USDC"
  },
  {
    address: "35X4mVtZzjBDjnkYwxbRTSa2hzCFGbFoHmWxQ6PTZTyn",
    name: "COSHI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COSHI",
    quoteLabel: "SOL"
  },
  {
    address: "CtVv8QQAcBVNz9CzLDsnokDAsZFHkEfUfim1ni9zR1MJ",
    name: "Onk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Onk",
    quoteLabel: "SOL"
  },
  {
    address: "8NXreNV6SEZpScaAGLAfGSs8gniL2jKHJsiPWq8nsHb4",
    name: "SolAi/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SolAi",
    quoteLabel: "SOL"
  },
  {
    address: "EbD1bgs1rF4A8JL67qtk7ZM8mb82RBhjKs5AWcFzqb8z",
    name: "HOGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOGE",
    quoteLabel: "USDC"
  },
  {
    address: "EXmbSSmhgrjmLhuzXJ9jdKH5jv6Zy3LMx1fnrBoCnphZ",
    name: "SUFFY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUFFY",
    quoteLabel: "USDC"
  },
  {
    address: "FgXfeFzxMxax7SgUCsJjgMqMmP1Tbd6C7sg4PRMyRqrv",
    name: "PUPPY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUPPY",
    quoteLabel: "SOL"
  },
  {
    address: "DyYfWQbN6UGE5dv95jjfS3vNEZdvNu6ksFkj677chiNE",
    name: "NKMK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NKMK",
    quoteLabel: "USDC"
  },
  {
    address: "3apts8LYYosApgveEqXihJDarvxAvXAAwAdggud4G5Hf",
    name: "Bear/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bear",
    quoteLabel: "USDC"
  },
  {
    address: "4xxNqzVNhGuU88WXCNGjcmggeKDXYJKvKwNz4UCrNcyT",
    name: "CITAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CITAR",
    quoteLabel: "USDC"
  },
  {
    address: "8o1MzhnVdM638jjj1Zqd1TTzjTvme5PSqxGYWnT116QZ",
    name: "HAMMY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HAMMY",
    quoteLabel: "USDC"
  },
  {
    address: "B5Veu4PJiRRSiNUV2qF5hRKTVqLhaRKEdQ9StibCWdzM",
    name: "FUNY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUNY",
    quoteLabel: "USDC"
  },
  {
    address: "DJf9cGse9SCXqYYLgssZ8sYov83KmRPXZzAKEiU4jdWF",
    name: "solpe/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "solpe",
    quoteLabel: "SOL"
  },
  {
    address: "9p7FrL2nDitfR5w3HPdGC9tt1yvsRWpWxg2a1Nqt2QCA",
    name: "BGPT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BGPT",
    quoteLabel: "USDC"
  },
  {
    address: "7915LtqZwZ7oXYA1L5knSgELdnBZqrGKMTDv7UZBLcdc",
    name: "abat/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "abat",
    quoteLabel: "SOL"
  },
  {
    address: "CGoNNbc6xrPKgbKwyhbswTPpVVuZoWw7qQzFFXrMEcqi",
    name: "GRIZZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRIZZ",
    quoteLabel: "USDC"
  },
  {
    address: "AX9SjoftzrKsP8g2KL5qABAvCgZBNjHV9smMpUG1sHVh",
    name: "ALCA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALCA",
    quoteLabel: "USDC"
  },
  {
    address: "7pWkjarw72ZFhpgkrCASbLYqkR5KYkVtGyjQScSyMNEa",
    name: "PIKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIKA",
    quoteLabel: "SOL"
  },
  {
    address: "AUnqK2VTg5ENQfbNwoxXHoWAMGs9upuaSAQynUFeWDFy",
    name: "SOL/DogegoD",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "DogegoD"
  },
  {
    address: "5PCPDCihb9LPbP3hJXggHqR9Bzxzw5gzCyjajZdoihz3",
    name: "WTF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WTF",
    quoteLabel: "USDC"
  },
  {
    address: "C3FnEchxi2C9BYVYJwZrPTBW5VPVWV4aCvT4dcgUb2eo",
    name: "ORCS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ORCS",
    quoteLabel: "USDC"
  },
  {
    address: "5cPmrRKUCj2jMcrCgc9iPuHTFnxLUqBBEQfRHhFf1hN5",
    name: "SWYCH/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SWYCH",
    quoteLabel: "SOL"
  },
  {
    address: "5htpPZKM6xW2775SAwxxBNYB4wXu2bJtX6gZU2nPMDiz",
    name: "BONKO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKO",
    quoteLabel: "SOL"
  },
  {
    address: "8brBnndDSftcxDnb2D5ruzxpknKm2FrzpaT2gSdC1NSx",
    name: "MUKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUKI",
    quoteLabel: "USDC"
  },
  {
    address: "EbRhWp1XCs39odHxLVWCbGAmh2eXFoQLPwHn8cR3LrzF",
    name: "DERP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DERP",
    quoteLabel: "USDC"
  },
  {
    address: "2oXqTmeJt4R4i8ieitV7A8s4R7HF432RiDFgyc4MCHje",
    name: "SKD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKD",
    quoteLabel: "SOL"
  },
  {
    address: "AiaRU3oyHjGY4by9fRYNn9arM2thfczFQVxceawoUUDn",
    name: "PANDA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PANDA",
    quoteLabel: "USDC"
  },
  {
    address: "6fjwQSwFduoQ5NVMVyGwKva7yi8n6AWfheEDisikukHd",
    name: "BOOP/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOOP",
    quoteLabel: "SOL"
  },
  {
    address: "Gfu2QGNQUMxkirecLXSxiFkB1awnerKyC8ENJKknUpqP",
    name: "IKARUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IKARUS",
    quoteLabel: "USDC"
  },
  {
    address: "HFj2smj9NgPKDnmkcr2xvqt4CkMFcopL5SBg9B6yXpbv",
    name: "ASDEX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ASDEX",
    quoteLabel: "USDC"
  },
  {
    address: "2KFQWrSWRygbrjg1yDVgCoKY8RzoReKzamXUxyEg4xrq",
    name: "USDC/HAKU",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "HAKU"
  },
  {
    address: "9FNJxyRAdZbvPsoVHC1j13EHyTeahSdjK7MUUk8zqLoL",
    name: "HAO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HAO",
    quoteLabel: "USDC"
  },
  {
    address: "J8tV5t4zgwk6AC3xBniBEVS9rcSgHZ5T24tV6D1iR3Vo",
    name: "Solge/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Solge",
    quoteLabel: "USDC"
  },
  {
    address: "5W9o2WX4rnuoSstsknTHQcXhGwhdLWMvLNkcowFUam4W",
    name: "PTCS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PTCS",
    quoteLabel: "USDC"
  },
  {
    address: "8SNQhNuWEpyQVRiWcsYcFvMvimKzaow97nVia6mnAE6o",
    name: "DYNO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DYNO",
    quoteLabel: "USDC"
  },
  {
    address: "6PgvnLDy2anY1188zNnrkJCiHWM9FdGS4AE9roUGn9Cg",
    name: "SPG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPG",
    quoteLabel: "USDC"
  },
  {
    address: "H3AgqvpjtBRA7bAwwkApN27mTosdjVbfWCoNTyfDsg64",
    name: "HACHI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HACHI",
    quoteLabel: "USDC"
  },
  {
    address: "F9oirP5jfDPf3VGRsYa6YgK8fWJ4HGc4wd9YyvuBANkp",
    name: "MKLN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MKLN",
    quoteLabel: "USDC"
  },
  {
    address: "H3XZubRmmxi1NBkDxS13aEB8V4ALa3Y5MTNeVkSNingf",
    name: "EURC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "EURC",
    quoteLabel: "USDC"
  },
  {
    address: "FBS4x4X6mtqwdn5uKDAH3kPqn2ym6zywRyJXkXER5xf2",
    name: "ATX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATX",
    quoteLabel: "USDC"
  },
  {
    address: "J79BTWupHDr56seo7wyoQ8JttmTVGHhABmWB1S9NgvzM",
    name: "CHOW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHOW",
    quoteLabel: "USDC"
  },
  {
    address: "B7SG4Lf8MqYxtN7pLqgwzq7UdsVvxKc86fM8vhREBrvV",
    name: "FROKI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROKI",
    quoteLabel: "SOL"
  },
  {
    address: "DyAQtb9R5KuAr7sm95wK52eJZPSonHcFprMrg3uXMcnf",
    name: "GRL/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRL",
    quoteLabel: "USDT"
  },
  {
    address: "7rgLGC7RNB89pXEgepfVcCxNJMpE57tow8LUqcZMWTJ4",
    name: "CATAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATAI",
    quoteLabel: "USDC"
  },
  {
    address: "HPHNB7mFHHDQ4Un5JJzDjYqyio9dQJC3FChQ1Hn38SrV",
    name: "RACC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACC",
    quoteLabel: "USDC"
  },
  {
    address: "GMMpC4qMwvgFVxMF5fFgqPBVgrsMwH7Py4X63WsJj45P",
    name: "Baby/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Baby",
    quoteLabel: "USDC"
  },
  {
    address: "7vFgi9LssXfVM1uenC8Y6NTNPjN2mrbm3oiavBWAzifm",
    name: "API/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "API",
    quoteLabel: "USDC"
  },
  {
    address: "6LqeuSKaJhbdR35gcsustjPx34akk1WbRTKvssr9S9k5",
    name: "VINA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VINA",
    quoteLabel: "USDC"
  },
  {
    address: "ANxLzYooPCtm669SAhnGemizaHvsxPn5jxgxnF8tfUi1",
    name: "PINK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PINK",
    quoteLabel: "USDC"
  },
  {
    address: "b8ghA44Tj4nLup5HfosQvTmo7hSVftaW2Hi35HGG4n9",
    name: "BFRNK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFRNK",
    quoteLabel: "SOL"
  },
  {
    address: "Ah3iEUGyXPHrvp2Q2nHa6E3a61hJAsEA574iEFfcNeH7",
    name: "WONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WONK",
    quoteLabel: "USDC"
  },
  {
    address: "BuVW4vBDtMKiQKRDjjLNKJSvxZKqPHst4aEDQ29QDpbP",
    name: "DGOD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGOD",
    quoteLabel: "USDC"
  },
  {
    address: "9YzFvmuZKjzCZwMUyohegQbe69gJq1go9Pxy9EHcZwjL",
    name: "Egg/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Egg",
    quoteLabel: "SOL"
  },
  {
    address: "6K8ssccqV54ij3nkxiDiygAeS1LRXmRX4gi7tiE6E2BF",
    name: "COOT/Solub",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COOT",
    quoteLabel: "Solub"
  },
  {
    address: "7Cr5SjT9XpwaBk2MsFtRhzg4HRzZf2sZGn9k1ovim8U8",
    name: "SHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIB",
    quoteLabel: "USDC"
  },
  {
    address: "Hk6zoGjQbvS3Asv87QfC5uvqhXf8uqkDKiiJJ7BLQTmH",
    name: "APD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APD",
    quoteLabel: "SOL"
  },
  {
    address: "EpfBWUNMf3BmHvWLooUW2eWP6SakAgvRRpx5aPDk71Tx",
    name: "CLE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CLE",
    quoteLabel: "USDC"
  },
  {
    address: "H85M8tiPL82w9H3pJNu2yzLELTAYZx4yeRVaf4kddRSw",
    name: "USDC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "USDC"
  },
  {
    address: "GB6nPf2e1pjRm1kgE4MFvHtvo8QcGF7VsDPzHCVbfxVd",
    name: "USDC/SGUAC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "SGUAC"
  },
  {
    address: "2x8WT4aMQbZRBPVQSFFCutuQTG4S5V1pYkd8YZF7m9q2",
    name: "CRACK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRACK",
    quoteLabel: "SOL"
  },
  {
    address: "98jNqJMLQjhx2CnSZiLFkJvgEct812LZaNr9u8CQq3Qv",
    name: "PARO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PARO",
    quoteLabel: "USDC"
  },
  {
    address: "EbZWZeEBhSGMy2duDbH5N8mWo6NiZmP6UGQYqzsFCSZv",
    name: "MNKZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MNKZ",
    quoteLabel: "USDC"
  },
  {
    address: "HzkofYafHMGz4f2DavY5Ny5d2afNeDWQaxXRPZD9fWVd",
    name: "ECP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ECP",
    quoteLabel: "USDC"
  },
  {
    address: "FDf45YV5mkFmnoFsSFr7bzrjpaWmCwJpt6jCQ18x2Gsm",
    name: "Wolf/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Wolf",
    quoteLabel: "USDC"
  },
  {
    address: "3krnz5y1iGnQ7ukrm5Tke8ujAapppZG5KjfFW1xgzEsv",
    name: "SINK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SINK",
    quoteLabel: "SOL"
  },
  {
    address: "PrWWGYZpXP4Vx5e6Nyq3oPUE7yy6Xo7XvCHpyvZ1joG",
    name: "KOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KOKI",
    quoteLabel: "USDC"
  },
  {
    address: "HymaxAEEHvw95ZhKxzuw5UZDdWAdou82oZ8Jj8z9tXcC",
    name: "TOMS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TOMS",
    quoteLabel: "USDC"
  },
  {
    address: "2gag597V1ZjSzrTpnzEeYmymxQBXRLhHWzqHNqsDvJ2P",
    name: "TDONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TDONK",
    quoteLabel: "USDC"
  },
  {
    address: "7bi1Ke1CfU95TVg6eaeXhZnaxR8b4xntcp51kmrASDYq",
    name: "DOGRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGRT",
    quoteLabel: "USDC"
  },
  {
    address: "DRAe4DBV7sz4bXkBMx8cCKMUxDDmXbJ7KnnVjskbgqAr",
    name: "SLOCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLOCK",
    quoteLabel: "USDC"
  },
  {
    address: "5nkgkUDk32MEtMczjY9c8gtvKutUiTBC2qum2baCtPx",
    name: "VIVAION/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VIVAION",
    quoteLabel: "SOL"
  },
  {
    address: "BdSV8EajN9GwQVNaot1tYR7zeYXiW25Kn9ZEfMKkKqcX",
    name: "HIVE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HIVE",
    quoteLabel: "USDC"
  },
  {
    address: "FpJJEX2yGoQRiZ9oWvisLKiiztoykMymGa3SjJ8QKPn4",
    name: "NIGHT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NIGHT",
    quoteLabel: "USDC"
  },
  {
    address: "6SLAhVNmjgSaV8CQsoA647Mo4iD7C3Z6GwCVA4swvueU",
    name: "BUCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUCK",
    quoteLabel: "USDC"
  },
  {
    address: "EibRL8WJaSsrVds618mfDMifA4q19Ro39JjtfRBNpdo9",
    name: "KKMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KKMA",
    quoteLabel: "USDC"
  },
  {
    address: "Bc3VZSL8Hy2P1xtTQXUU29QWqapSfJaAdGWD8ddbcMjo",
    name: "Crocs/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Crocs",
    quoteLabel: "USDC"
  },
  {
    address: "6eY9RgEmoquVvkvqzDWXLthbe7woLLR8FjrEWHTJVLK9",
    name: "VFLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VFLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "5jXZc1Dk3TQA4cKnsY6GxiLtQPPPYvUVfrJ4wF6J4vRN",
    name: "PAPI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PAPI",
    quoteLabel: "USDC"
  },
  {
    address: "AH1EyE8ho5AUDwsWJF3JJZcVaqM4w4445Qeihzq13P2A",
    name: "Bonkk/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonkk",
    quoteLabel: "SOL"
  },
  {
    address: "6EqyXw9z7uueR4GcazPRKtsySxKeQ3BhVg3VEbLcHahq",
    name: "BULL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BULL",
    quoteLabel: "USDC"
  },
  {
    address: "5n9rTC5m5vtimi5RL47masLm9teTryea6h7562uMuCb1",
    name: "MET/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MET",
    quoteLabel: "USDC"
  },
  {
    address: "3zQtaLEAAjakcacDgmWb5HqV2AkhDyGQrn8tz6HkeJLo",
    name: "SOLAMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAMI",
    quoteLabel: "USDC"
  },
  {
    address: "7fagph6vehmgrLtY5buenMqs8o3vKJUE6nvcCmhoYi5L",
    name: "SOLD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLD",
    quoteLabel: "SOL"
  },
  {
    address: "4BFJKSJ2Vob2GQYiEwq88LzyRcKNBj9SeVCujuq4LKQs",
    name: "COC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COC",
    quoteLabel: "USDC"
  },
  {
    address: "5gXzgemQjAYV4M1PtCXUSDtyqjiuiFeQh3YPBmxdrpe7",
    name: "GBM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GBM",
    quoteLabel: "USDC"
  },
  {
    address: "3TKUCaYfweyebUXiMmRPvizngDWxJ17rcDZYCc4oWfy6",
    name: "CZINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CZINU",
    quoteLabel: "USDC"
  },
  {
    address: "rKTgPs1qY74nU8ShjiCGaAGABV7pFiEU42KJKoUEcDF",
    name: "IOT/USDT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "IOT",
    quoteLabel: "USDT"
  },
  {
    address: "4nEcvUyh9YxpppmAP9D76oQNQaaGYpUdhsDPvBaAfe9a",
    name: "ALVIN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ALVIN",
    quoteLabel: "USDC"
  },
  {
    address: "7dzkppqPkf6a2seRchLsEs1FFd2XCRQFnNtek8oNTCBP",
    name: "SHIBA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBA",
    quoteLabel: "USDC"
  },
  {
    address: "HSPzY1VaBfmBGFMJ9dCPFp1nPtGMK48saPEfzAQjvon1",
    name: "TMT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TMT",
    quoteLabel: "USDC"
  },
  {
    address: "5AmFKkhszKUysQzyyTGPxT2icJ5yyh3FKMVEYDVgyeR1",
    name: "MOSOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MOSOL",
    quoteLabel: "USDC"
  },
  {
    address: "8XJjoqv6GPiTimCNRa7t8wEPWidHGxCBwvGKUurRDzqE",
    name: "AIBB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AIBB",
    quoteLabel: "USDC"
  },
  {
    address: "3akhUdAbvKzGxS7sTiLr5sTy6w1npFwEgbziLMc8pj63",
    name: "FUNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FUNK",
    quoteLabel: "USDC"
  },
  {
    address: "ERJp4zeMFxJ23yKLMXYP1vPHfBipJptrSuesDnh5NTH8",
    name: "SMOKY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMOKY",
    quoteLabel: "SOL"
  },
  {
    address: "FwXRwkWYWAuNJtyKZnR7A8tKK24JdTVJR3KQExbt38y2",
    name: "RPTR/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RPTR",
    quoteLabel: "SOL"
  },
  {
    address: "AG2yKUeGhjJ95B7ftthrH5KFTX42rSZEqNntqQHnA7sv",
    name: "PUMP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUMP",
    quoteLabel: "USDC"
  },
  {
    address: "4FafGddx8Uw5xLUMRa2aZ2UiDN1S8b9bHv3ZbmXYh8hz",
    name: "FATIC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FATIC",
    quoteLabel: "SOL"
  },
  {
    address: "EB4BzCRk1DuiptSNXuRgVhhdcjBCDx9M5ujLUE37ihzs",
    name: "LION/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LION",
    quoteLabel: "USDC"
  },
  {
    address: "jMQEntXrT9hYHNohav9bPvxZ1QYknbCLQpSHNm2KN8q",
    name: "BSLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "BckfH6FUnrQ7AdXL7gaUGrngcczXB2uPjnPsur6RyXBj",
    name: "CRAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRAB",
    quoteLabel: "USDC"
  },
  {
    address: "TwvzWsfdFKDw9ZwD672Bjrs47LDEYfj7A91Xp3t3U1H",
    name: "FEE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FEE",
    quoteLabel: "SOL"
  },
  {
    address: "F6kBLjYfZb2PxxUhBRvhWPrxJ8JSZ8qihUaYgMLDUWQh",
    name: "WOOFLANA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOOFLANA",
    quoteLabel: "USDC"
  },
  {
    address: "FWNxbnbGKKTKjMbE5Q2aL6kz5e6WJ7gnpuD8hWb8Dg9X",
    name: "MCRT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MCRT",
    quoteLabel: "USDC"
  },
  {
    address: "EULNXcY28BmWUQoUdNBF1k6gb328uzFW5vg9w5ZVw7GR",
    name: "MRTX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MRTX",
    quoteLabel: "USDC"
  },
  {
    address: "FU6FSsR2AC62Qh56qPC8dTTCZPbXZ72qGrNHeXmea5Fr",
    name: "GRAPH/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GRAPH",
    quoteLabel: "USDC"
  },
  {
    address: "GmokMQcCBehKYz1PrtpkUNspjgREh6bVaDpvj5FpvTNT",
    name: "DGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGE",
    quoteLabel: "USDC"
  },
  {
    address: "GMpATb3u6X35zTqnu9Q31wqbJZHMif9A5BHxEmkAAgrg",
    name: "Otter/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Otter",
    quoteLabel: "USDC"
  },
  {
    address: "Gmhd8vhWj2VujzZsXuvigY91kEFrHp8HfgRfJA8WVApY",
    name: "TACO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TACO",
    quoteLabel: "USDC"
  },
  {
    address: "6epWYPEavyeQbJ3B1hDGDGyS23sySUmiX8MPHVvejvk1",
    name: "HOGE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HOGE",
    quoteLabel: "SOL"
  },
  {
    address: "HqQ5dhyHZHpBfWMz4QhrR9ap1LyXTtKNqgN195PndRAG",
    name: "BAMB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BAMB",
    quoteLabel: "USDC"
  },
  {
    address: "8c2mALxz1wWrvGU9REyXjsTC29Jukn5wbJGVD8FkUcm7",
    name: "ONE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ONE",
    quoteLabel: "USDC"
  },
  {
    address: "8TZmFdPeCnHvvn3etgVurBZ99LgUbKmQ6wrVdsj6VoX3",
    name: "GOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GOS",
    quoteLabel: "USDC"
  },
  {
    address: "DBuYxHvQffGXYuwUAzhUAri8G34aUZbpAPqDMqYKFFDo",
    name: "Fake/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Fake",
    quoteLabel: "USDC"
  },
  {
    address: "o1dF4jVehs63WVqEztifYXhz89FEZmVc4cduFvXPcfS",
    name: "UOS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UOS",
    quoteLabel: "USDC"
  },
  {
    address: "6sNGspNM8k9S7QKT4aX2cMpuokYkuU21DtPSSnBBLXF3",
    name: "TRUST/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TRUST",
    quoteLabel: "USDC"
  },
  {
    address: "B2D6R5insSjGbyiM8PLvU5nZUZzaBeiMChG2bj6i8X9L",
    name: "WHALE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHALE",
    quoteLabel: "USDC"
  },
  {
    address: "3r1wGGT4ZGhvqMJ1McE7782bY14yF6SZhhKdy4c7Ss3M",
    name: "BRC/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRC",
    quoteLabel: "SOL"
  },
  {
    address: "AXKDm2XjV3oPYe4QkAGjajYT9x6yatFoWSG4tCmm3Wjw",
    name: "NBUN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NBUN",
    quoteLabel: "USDC"
  },
  {
    address: "H3758U8EyWYhLd3vgnQy7EptyCY9FpLYdAEouo6DUg3w",
    name: "WAGMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WAGMI",
    quoteLabel: "USDC"
  },
  {
    address: "48Qbe8dyDXxQngnozdv2xpg3RMjbDRoHeku69tH5njXG",
    name: "UFC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "UFC",
    quoteLabel: "USDC"
  },
  {
    address: "AxJebPKuLHUPbvY9PLipLkGxQSqRKAahim2KSeYPLpJf",
    name: "PUM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PUM",
    quoteLabel: "USDC"
  },
  {
    address: "BU2aLUptw51GucvMiJT3dA33XsuMZkh5Xm3T4tRztaTX",
    name: "OTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OTR",
    quoteLabel: "USDC"
  },
  {
    address: "J6b2QzZiz8WR3PDx6BDhy2hUo9WGcrrCio6pd16Naas8",
    name: "HVDS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HVDS",
    quoteLabel: "USDC"
  },
  {
    address: "6HzQoiWPQuzj8oYS7YKQnshWFvmhAekkVj4kvJya5b3v",
    name: "CRTN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRTN",
    quoteLabel: "USDC"
  },
  {
    address: "6FNErGf7MjHj7J8vuxW7ZDaUFoBE48P1ESGPuoJTMGUv",
    name: "DAWG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DAWG",
    quoteLabel: "SOL"
  },
  {
    address: "ERbL3MNx5oJFR8NZ9DS3qYDHtztCb1HZtCE2dpfmuZuX",
    name: "DaGe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DaGe",
    quoteLabel: "USDC"
  },
  {
    address: "68HqLdsSa1CNCC3jGxai9GwBw3s5BCcBiiC5rLJgKXyK",
    name: "CHONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHONK",
    quoteLabel: "USDC"
  },
  {
    address: "4XEMGpASY1vjUs5FnJfTnqEQ9i3ArWYEob4GKhbk6yfs",
    name: "lonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "lonk",
    quoteLabel: "USDC"
  },
  {
    address: "EMUx1RUSvhc3QiA9X2thQdXZD4W5k6YZwHyeeCsPY8Ln",
    name: "GEM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "GEM",
    quoteLabel: "USDC"
  },
  {
    address: "3Ss4VESTJYNe5smG7k17LUNAJz8DBgWFUjj5q9PtgtQH",
    name: "Birdie/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Birdie",
    quoteLabel: "USDC"
  },
  {
    address: "4xiwED3qtDLGWYEYMgws5B9Ti9FzrtC7WBKDmBkA8Yac",
    name: "KONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KONG",
    quoteLabel: "USDC"
  },
  {
    address: "E18eaf777h9oQ19aMGmLmC2RSF4ZUm2qoUjsquPtMTuq",
    name: "Pige/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Pige",
    quoteLabel: "USDC"
  },
  {
    address: "2DuPCfWtgNBavUfWMGdtJ56ZpxEbs8QwqfmiNBAG6Kwd",
    name: "FLOKI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOKI",
    quoteLabel: "USDC"
  },
  {
    address: "4HcBgA24rVozLXM2pnTfG1BtafQoQaJUFE61JKi5KPXc",
    name: "CHILL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CHILL",
    quoteLabel: "USDC"
  },
  {
    address: "7wMJkQUdTB8qLipcVesudcx47tuRe3pdGvuPVMP9ZSLg",
    name: "SUS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUS",
    quoteLabel: "USDC"
  },
  {
    address: "HsnnnC1JjUQ4whjSS2JxUTfqPKcSc3qFMRJ1YeaTcMaC",
    name: "bRabt/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bRabt",
    quoteLabel: "USDC"
  },
  {
    address: "6tXa7qZbF2REqShffUMHEdSK3GktGF75fAtLcsf6ijB",
    name: "Sway/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sway",
    quoteLabel: "USDC"
  },
  {
    address: "279CvL2y9FJRdCeb1JR8id6iSzu6jspzCjkGwi58tFFL",
    name: "DOCSI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOCSI",
    quoteLabel: "USDC"
  },
  {
    address: "AjygHfHajAANS2qf8uZeoZk1qGYUF28dtFMchgtadeH7",
    name: "CATZ/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CATZ",
    quoteLabel: "USDC"
  },
  {
    address: "919bQRdEaLxRNDVcY18nJtk5bmQjcrwAG3YcbGKonhYY",
    name: "LNK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LNK",
    quoteLabel: "USDC"
  },
  {
    address: "6TgNBCWSZxqQxYVV9VyPB5mjJtoQCg1xC919EXPwdoy6",
    name: "SOL/GRID",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GRID"
  },
  {
    address: "49CurXBiB7Uwr3d7w8631ADAZ5H38wHXpQ2JFwtzksw7",
    name: "RABBIT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RABBIT",
    quoteLabel: "USDC"
  },
  {
    address: "EuLNs7FQqACXJvq3wXFocdmatabehtW8Hn7JPuVWNSWP",
    name: "SUPER/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUPER",
    quoteLabel: "USDC"
  },
  {
    address: "2doVpmJAdXBMY6wQaCRmkPRPZQZ1csG8ACNLeKhbGBqf",
    name: "SHIBC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIBC",
    quoteLabel: "USDC"
  },
  {
    address: "ABxiMoDh8pMYPzZqoyCpgHHbqtKSTfa9CiebTmY357TZ",
    name: "SLR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLR",
    quoteLabel: "USDC"
  },
  {
    address: "7VKkd38s2wW9gGkJCmZpTVL1C59P8UK53u7HvtBoYMmZ",
    name: "FART/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FART",
    quoteLabel: "SOL"
  },
  {
    address: "EzQB6jLciucMGVXb2E71A46mToifKZNKFLYbEoc9jSyb",
    name: "BURN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BURN",
    quoteLabel: "USDC"
  },
  {
    address: "GA7jxA64TBMj71gRRyRgDgPFtgMDxTkHSfLUxx7u8xyz",
    name: "BFG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BFG",
    quoteLabel: "SOL"
  },
  {
    address: "Hjt6obxEAQPKuYaw5V7krQuS41LnjksehpmtQUG31nqT",
    name: "penguino/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "penguino",
    quoteLabel: "SOL"
  },
  {
    address: "3AhZtYkPQ1rVbfUqwA4T2abzaoUHBRWBoekxuJ5FHgTU",
    name: "SOLT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLT",
    quoteLabel: "USDC"
  },
  {
    address: "Ejh3xktnJEoX4ZNjEjDqskMJNt8sosDddJLTv3TU1NKx",
    name: "Ordi/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Ordi",
    quoteLabel: "USDC"
  },
  {
    address: "ANyCVVRP4TXyMFn9My4aSazNgsXtBRhKcAZTrurWwd33",
    name: "HSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HSOL",
    quoteLabel: "SOL"
  },
  {
    address: "2Quo3gH5Vi4ZNK8yXHKNg8Laqs3TBjLSjfBA2g5ULquQ",
    name: "FOLK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FOLK",
    quoteLabel: "USDC"
  },
  {
    address: "FJWKTqKZ5JYhbfaHhCH1d9RnXqXyPG3FyBGCefu4T2KC",
    name: "SOL/OVO",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "OVO"
  },
  {
    address: "ArNE8yBvhm6koXMpHsAJw62G7ZF3KbXmYgGE3UHSrN3t",
    name: "DGODS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGODS",
    quoteLabel: "USDC"
  },
  {
    address: "7KfSwLfxcZ4M3ptFuYctGjM81uExXjgJsaopLTLNiQ3n",
    name: "DOODLES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOODLES",
    quoteLabel: "USDC"
  },
  {
    address: "EYP1Us7x8uGHpBiJX3a4moT1qojKZwXdBHKQhR9Qxvzy",
    name: "BSAMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSAMO",
    quoteLabel: "USDC"
  },
  {
    address: "9TbL4L4A2ofZp6yfrkAXBBPW6bAy9xd9Kq8zShw9T8fM",
    name: "KITTY/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KITTY",
    quoteLabel: "SOL"
  },
  {
    address: "J65R6JHeHBf1PAHaVKLipbNkDDQA7jmvCivAKzCt87XU",
    name: "DOGGIE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGIE",
    quoteLabel: "USDC"
  },
  {
    address: "HgkyHG7qTLWntxMj2iP4NsMZZWXHsjdoW1VXwrfQzWGx",
    name: "KHINU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KHINU",
    quoteLabel: "USDC"
  },
  {
    address: "Dw1TAqMzZpVq2umv4rG5AFeZyPQByBMqZdnoNeJ8Auqu",
    name: "AI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AI",
    quoteLabel: "SOL"
  },
  {
    address: "HpcsS1DfWMECH36w8Vp8duXEgDaZSg4EELAXH7t5vpAG",
    name: "Wassi/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Wassi",
    quoteLabel: "SOL"
  },
  {
    address: "54FDpcr9wL64N7M8rfTcEgGr9UcyCjqTAzgcznBkAxYm",
    name: "PI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PI",
    quoteLabel: "USDC"
  },
  {
    address: "89LzrSGh697YbsmLiyarV4wy68DnvB9ky1h8GZuuCUgf",
    name: "RACA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RACA",
    quoteLabel: "USDC"
  },
  {
    address: "5VMsr41ZneFk1WmxDNMaHUahAyZ7TbjqBc8MFPibcAFU",
    name: "Bonk2/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Bonk2",
    quoteLabel: "USDC"
  },
  {
    address: "GWE57kMUrRBFY8zYVMM4kZ4bbGovx9YbLv3jQ8XC1MGF",
    name: "BONKIES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKIES",
    quoteLabel: "USDC"
  },
  {
    address: "9Poysvjou8hKSkavJ2eRgxFev7oKBVwi5kH8M1RU6WqT",
    name: "ELBEE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ELBEE",
    quoteLabel: "USDC"
  },
  {
    address: "maLoLSfNriS2D5FrWnEPBq2T7EkTHbvJaj3DEje826w",
    name: "HORSE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HORSE",
    quoteLabel: "USDC"
  },
  {
    address: "HYMQLFsfDPpndx6fT1r2f4hwHjVV7QXL9ATnGH4M2S7v",
    name: "SOL/BUFF",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "BUFF"
  },
  {
    address: "9TuhJgrTYqRyKsUaUpjZYmc2ebdque7L1J1WaSKQkr7x",
    name: "TBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TBONK",
    quoteLabel: "USDC"
  },
  {
    address: "FVmf5fRH6Xrhi2uF7niTi5GrJvpnutC6jWwoqiC1Fgfs",
    name: "AILU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AILU",
    quoteLabel: "USDC"
  },
  {
    address: "HQJdfUhTeqp1AXuYEgRmhRPK5NrLT8ZqXcbFDpaHymyy",
    name: "SOLAR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOLAR",
    quoteLabel: "USDC"
  },
  {
    address: "9Qcu4oQXcRmgvh9WyN22pZyM7doVU9txujJMZkST4qDo",
    name: "sLFG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "sLFG",
    quoteLabel: "USDC"
  },
  {
    address: "A1ZWbG2GGX4Mw4NKCd3Z2b2crx9ptei7rMj6cZqG6s5e",
    name: "CORN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORN",
    quoteLabel: "USDC"
  },
  {
    address: "7tEcyqo1tLzw5sEQXxieZfrvfBL78o99aLNxbh5awHWi",
    name: "SOL/QUACK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "QUACK"
  },
  {
    address: "E89GB4tWqpbihVxEw4rjuPZn4cjq9vp4x8vjBB9REMEm",
    name: "SOL/SBONK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "SBONK"
  },
  {
    address: "8wwa9FKnMNZxp8eoESFY8nSzLiVPw82Z4PESRULv7y8v",
    name: "KPepe/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KPepe",
    quoteLabel: "USDC"
  },
  {
    address: "CLRE5b2fjMBSoNy1jCydbSXc6oq9oTiw4DWfUYub7RFA",
    name: "AQR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AQR",
    quoteLabel: "USDC"
  },
  {
    address: "HuS8RAgVF9spyheYRdS4Lw2Sy6PKPt2tnfGqPdNnotsf",
    name: "PEPEF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPEF",
    quoteLabel: "USDC"
  },
  {
    address: "BzcCZrTF3KZJBPcqU4K1CfBEkioqiLW3XANKkBrv6Rxj",
    name: "HIMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HIMA",
    quoteLabel: "USDC"
  },
  {
    address: "Ef35GoHjqijawKyDMa6Da5NVp3u5vnVVhiR7nXvcLFen",
    name: "SOL/Sonu",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "Sonu"
  },
  {
    address: "BJcM6iZVPL1yCZQ7xsK3Xsjs7jJStZQ84hFVPC7mQEp8",
    name: "BONKF/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKF",
    quoteLabel: "USDC"
  },
  {
    address: "9CAvf1e46JER7Fwm9oezwWScheHCgZeBhjUDUTpj6ufZ",
    name: "CAI/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CAI",
    quoteLabel: "SOL"
  },
  {
    address: "4fwL3X9ZD4cL5MTYnQ52vejvEpZAp34QVHDbN3kMeLu3",
    name: "OPEN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OPEN",
    quoteLabel: "SOL"
  },
  {
    address: "9GWMgMyfx36uEkcUsXQvqSBKou3vJRDmkZHTSpRKf2Rw",
    name: "MUSK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MUSK",
    quoteLabel: "USDC"
  },
  {
    address: "133GcE4G8WbCmN5ndHbc6dkMNcVFfcpegrtXov73eTzk",
    name: "PBABES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBABES",
    quoteLabel: "USDC"
  },
  {
    address: "AVsMB5eCupQN6vKgArSvu68PDA4nu2E2vUSWXz3pFWg3",
    name: "BLAMA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BLAMA",
    quoteLabel: "SOL"
  },
  {
    address: "9jUF9bKRz6V4hFhXt94WUw2EayWFQFi1oMbg7i5PNX9N",
    name: "SNAKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SNAKE",
    quoteLabel: "USDC"
  },
  {
    address: "ARucRaALc4prbnVPGXPn4QcUcGBqfXDW7UgofxmyUCaH",
    name: "OWL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OWL",
    quoteLabel: "USDC"
  },
  {
    address: "ZwML5riaYq59fwG6kGitR3Xroh9WtsYzKpSaavwQ1Yc",
    name: "FEG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FEG",
    quoteLabel: "USDC"
  },
  {
    address: "CCepXEQxo8eTqCGtRHXrSnZdhCEQjQeEW3M85AH9skMJ",
    name: "STEP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "STEP",
    quoteLabel: "USDC"
  },
  {
    address: "8gkp18UA2gW6LpTeNLzN3n8m9DAp8UbAyoeeo4pmVhJf",
    name: "Capy/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Capy",
    quoteLabel: "USDC"
  },
  {
    address: "5MNMycH662Cc3CcViYdhC4UmVYNqNUQT9FJVDxeP6wM5",
    name: "MELD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MELD",
    quoteLabel: "USDC"
  },
  {
    address: "tS1mTyFk3nGXW5iWKdbaioWjjhsFjqB2xEA1ZSeQUtv",
    name: "RHOLD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RHOLD",
    quoteLabel: "USDC"
  },
  {
    address: "xTwmp6pq7hJwjyXToWCbY3GRibQ7jJxqPpmqkouf4eN",
    name: "QUONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "QUONK",
    quoteLabel: "USDC"
  },
  {
    address: "6zU65qPy452sUtKGhHqznZvZwpSpWt5dvSLMpXHEhagZ",
    name: "SCAKE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCAKE",
    quoteLabel: "USDC"
  },
  {
    address: "5L2emHV3gUVJm8szCu5TJsHKG9r1ywnoEJNHPUec7GAm",
    name: "WOLF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WOLF",
    quoteLabel: "SOL"
  },
  {
    address: "HWCHMXrmFzX35bgkHkTy1VpF8WTvQP6iv9shaqk4Urye",
    name: "BonkGPT/Bonk",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BonkGPT",
    quoteLabel: "Bonk"
  },
  {
    address: "ENNmchShZKyaGXxgQiJGkQxSg5Vy252XxvsCqnkpFg4X",
    name: "BOPONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOPONK",
    quoteLabel: "USDC"
  },
  {
    address: "9VyufQKEjL8ESQrchS1VCAj6wLnr4Aw8wNtE3QButgDN",
    name: "RNF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RNF",
    quoteLabel: "SOL"
  },
  {
    address: "2qhNDPA2aqfzsspdwfPJ9GveQLKd8c9L5jWNeAqm1zGL",
    name: "SHIK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SHIK",
    quoteLabel: "USDC"
  },
  {
    address: "4NNVyMXA6wCARJgvxoc86N3ML8UsYcaiNRTzvJtkxyGh",
    name: "WEED/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WEED",
    quoteLabel: "USDC"
  },
  {
    address: "GJyXhn1d6vHczKt6Tjr3oTEgpqQUBkd6Y4nfREnjSMcm",
    name: "BOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BOO",
    quoteLabel: "USDC"
  },
  {
    address: "B2PUa317s7W5nbpgLBjcJsyVHe9mFkqkTNTMSXWeeTrq",
    name: "SKULL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKULL",
    quoteLabel: "SOL"
  },
  {
    address: "6nfZKZXDmozCaSqjtwe3iaL5cVHZiQ5evY7bj1BELzy9",
    name: "Respect/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Respect",
    quoteLabel: "SOL"
  },
  {
    address: "BaSh8TmDgFyqtFJi9Q6cZqRTnUHW4YxkVccNXfvxnhoP",
    name: "HEIST/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "HEIST",
    quoteLabel: "SOL"
  },
  {
    address: "DvwsbckTf3qHHqGEJ5omXQSfnrukKS4KuM4WRVr6YVCm",
    name: "TBONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TBONK",
    quoteLabel: "USDC"
  },
  {
    address: "aENQBMD4MqqNBQ4sZF5f61e4dCaAHtC9Dma6gZACdoi",
    name: "MAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MAI",
    quoteLabel: "USDC"
  },
  {
    address: "74E6y7QNijjqVMoDGu3cjGfEvvAmz5tp1CVxj5tJTFNt",
    name: "Test SOLGO/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Test SOLGO",
    quoteLabel: "SOL"
  },
  {
    address: "DUSy7iSeb6Ra32xNkumkk8tgrZSygGtWxkAyi1DCF6aj",
    name: "RAWR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "RAWR",
    quoteLabel: "USDC"
  },
  {
    address: "4AMQTatBuegwJiRQ1rRix4w9apJcZgqwYGPCPu42RKjy",
    name: "CCRAB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCRAB",
    quoteLabel: "USDC"
  },
  {
    address: "NkpDKJDZFCLCnHNUgyXKi7U2BPeWk2FUNHJRyLpLmEG",
    name: "SOL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "USDC"
  },
  {
    address: "ZDMXWnyQJGmp3spLwDvgLhK96tGgLRK4ekAaeGFLFYK",
    name: "SIGMA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SIGMA",
    quoteLabel: "USDC"
  },
  {
    address: "FvvyeYTnai6PfEbBCMcMdNo6DEyCdXP5eCn21X3JjoNR",
    name: "DGHUA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DGHUA",
    quoteLabel: "USDC"
  },
  {
    address: "BAexgAsHsTJPvSZ6ciyHqi9713jPrSzis3ZwqFYxTSnL",
    name: "FLOFF/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLOFF",
    quoteLabel: "SOL"
  },
  {
    address: "FY2etUYi7vcYQmt5TRXdR2bxK8XQ1eA4cQ54DcXBtmsN",
    name: "Snail/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Snail",
    quoteLabel: "USDC"
  },
  {
    address: "EW7q8zXXtPyQ4cKxYAezizv4w9EQbTNzRcYubDGhmKrV",
    name: "ZONK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ZONK",
    quoteLabel: "USDC"
  },
  {
    address: "CCJ9r7ybf3Wn96gLyegM5CcymWD6nkwEHXyUH9BwNLTS",
    name: "CORG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "SOL"
  },
  {
    address: "34PdPdFMj1y71faeHAyU32wRUzNvzC3dopwYuD3uTE6e",
    name: "PIZZA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIZZA",
    quoteLabel: "SOL"
  },
  {
    address: "HPgdsUMuzdQi9KJ3ZKR2YjBWUZ67yhPGtRGt9XSvJNXL",
    name: "DOGGO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOGGO",
    quoteLabel: "USDC"
  },
  {
    address: "CswYqpTM1cT5aCY8CUQ5GPsrzVbvXX6netV3j7n1G5eW",
    name: "1EOTW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "1EOTW",
    quoteLabel: "USDC"
  },
  {
    address: "8vKveEgz4e5VFhkJ8PKMidFdcSVJ8n1b3voYXdUeQFp5",
    name: "DMGRN/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DMGRN",
    quoteLabel: "USDC"
  },
  {
    address: "CGRTHYAGwHajVT7Bmfs7xZ59yetFUsC5coB4mtLQE3qi",
    name: "ICY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ICY",
    quoteLabel: "USDC"
  },
  {
    address: "DKeMucip26DZ46BqWXH7keJUypHy9nJwWuYDa9hJg1WW",
    name: "DUMP/DUMP",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DUMP",
    quoteLabel: "DUMP"
  },
  {
    address: "Duo2Yhk2EEAxisGSN2EjMzSSbETunhZAqtCxRqEesUZ5",
    name: "mChil/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "mChil",
    quoteLabel: "USDC"
  },
  {
    address: "9ZJqfYJhwDafvEW9WQgmhVjgEd9DQr24h8GcZhTPtabk",
    name: "DART/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DART",
    quoteLabel: "USDC"
  },
  {
    address: "FbcYetw8M4fEyRRMCqKtb13HXw39Z1iDdpKBRywh3GVo",
    name: "SQUARE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQUARE",
    quoteLabel: "USDC"
  },
  {
    address: "2NWU5GG5qqtF2daDHarbUa9Vnt6wPYk9Hv4HT3UpsmGs",
    name: "Derpo/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Derpo",
    quoteLabel: "SOL"
  },
  {
    address: "EnRconti3gt7hTV4q3QpJrdCgexRJuzzp2Kdr3YuMCbY",
    name: "JNCK/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "JNCK",
    quoteLabel: "USDC"
  },
  {
    address: "GMuWa6rmoZfAyXh1M4ZWKCPtsM2HAt1VnD15sXPeoaX7",
    name: "O5O/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "O5O",
    quoteLabel: "SOL"
  },
  {
    address: "7fcy5Mi4eQ8jxT1uThkpcYjC5FjjTojK9xSyKXQmHa1S",
    name: "USDC/ISKT",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USDC",
    quoteLabel: "ISKT"
  },
  {
    address: "GZTTZbMwxDYEWj7hPiF74WBf4ZhLqWkHMrUq331qd8DL",
    name: "COPE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "COPE",
    quoteLabel: "USDC"
  },
  {
    address: "8d8NcNqJdZhAnTjEvL5AHGB1mudMZ6YossNyBei4hPrj",
    name: "PBT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PBT",
    quoteLabel: "USDC"
  },
  {
    address: "9DJeYgAaDmjJP6EKVm9g8ocAiEPFsBWS4rqmKjCmmyVo",
    name: "ShibAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ShibAI",
    quoteLabel: "USDC"
  },
  {
    address: "Bt7GNTGCtfrA4ZF2Pj7fe7NC7xarZzcSxpPeTQLb8Q3m",
    name: "SONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SONK",
    quoteLabel: "SOL"
  },
  {
    address: "9S1Aq8iCL1jM17nefzVhp4TSETduXLNeK4Bf9drLqaBe",
    name: "ATRIX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATRIX",
    quoteLabel: "USDC"
  },
  {
    address: "3rgGGNPvDJ6KNuDkgbcdLJNHue1XXxnqUPNPrdr4yQk3",
    name: "CSTR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CSTR",
    quoteLabel: "USDC"
  },
  {
    address: "ByxsjrBNxLtPArfQyw475w67o8cdjSUAvPqL7QpXHvzo",
    name: "SS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SS",
    quoteLabel: "SOL"
  },
  {
    address: "6aEyic8LA7P4bJMFzwWQy474WqvBa3qoLLyrBArpR3c4",
    name: "dogAI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "dogAI",
    quoteLabel: "USDC"
  },
  {
    address: "3EpLyW6osXgr7pUkGnryWFz8qbd9Qjb6329Vf7my6cY6",
    name: "PSYD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PSYD",
    quoteLabel: "USDC"
  },
  {
    address: "BgESEpaZS2ApZQJ5BdTBxZmNaJ6WZVT5qphRY17FtKru",
    name: "PEPES/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PEPES",
    quoteLabel: "USDC"
  },
  {
    address: "GMQmuLJVy3Kr4T6XfjSH1zGPWKsek7JSUmNSw6VhTmpM",
    name: "SPAW/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPAW",
    quoteLabel: "USDC"
  },
  {
    address: "6TkR14MwsTLtt7FD9SFtNVyV1YNQaYsgYW7fW1ihi48K",
    name: "tOm/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "tOm",
    quoteLabel: "USDC"
  },
  {
    address: "7AhXrN6Ch1GcqrLBdzV1bTA6eWjCGHFZdQvqfcgnN51t",
    name: "SPIDR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SPIDR",
    quoteLabel: "USDC"
  },
  {
    address: "JD44n4X55fxrhPana4ErYZL3n4aCU5iLU6RSFSL2FtqE",
    name: "BONKM/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BONKM",
    quoteLabel: "USDC"
  },
  {
    address: "6iRVtJsp4BpYfecHWLgdAVF6dQTKRUhQaHxFTHqCQgAQ",
    name: "MRT/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "MRT",
    quoteLabel: "SOL"
  },
  {
    address: "5SU9ewANxKThs8e1NeE6HPjFyhUDiCHKNshri54XdwDB",
    name: "SOL/GM",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "GM"
  },
  {
    address: "ER2ui6QLc4dHNNki6sS3czHtouHnP6oGcp8paJjBvQYj",
    name: "SBOSU/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SBOSU",
    quoteLabel: "SOL"
  },
  {
    address: "A6kvA6rpDkxmEYUC4rzGjcT34WsVQCKnGYXYxRGkAGp",
    name: "Smoon/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Smoon",
    quoteLabel: "SOL"
  },
  {
    address: "DrdcrRQ48KK2Brj54uvXEts8H2bFNL5XPkQvZ2Fh4mRi",
    name: "AHMR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AHMR",
    quoteLabel: "USDC"
  },
  {
    address: "JDnTcVtS3Cxkyswnwd9vwJdaWWKTcJ6FTDyhMEcz7P4o",
    name: "ANBIS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ANBIS",
    quoteLabel: "USDC"
  },
  {
    address: "3cG1dseHmU2e1hJZg8RPmcvHxy613ijs8Wo7kmL2mDqx",
    name: "bonkSOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "bonkSOL",
    quoteLabel: "SOL"
  },
  {
    address: "9B2cGM8cS5ea3Rnn9k3ApznvtHVq8HL8N61vytz7Mzg1",
    name: "SUITE/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUITE",
    quoteLabel: "SOL"
  },
  {
    address: "7kWqbAuNytFKh1X3rTQq3rVtyvibVzgsp5W4iFzPVaiE",
    name: "CITYR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CITYR",
    quoteLabel: "USDC"
  },
  {
    address: "5MJ6xDYQv1Y34Y7UkqqbmXMfquYStTDC1V57Ex5brdSF",
    name: "OHIO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OHIO",
    quoteLabel: "USDC"
  },
  {
    address: "5zfEig97sxaGfeyUH9qzsSQJcebWj6RkzNEVLQ4RRCvN",
    name: "BANAJ/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BANAJ",
    quoteLabel: "SOL"
  },
  {
    address: "CXrUqQHgGETw8Ebce8sFqJu3QvsUW1h2t5da9aMN7sus",
    name: "OKAGE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OKAGE",
    quoteLabel: "USDC"
  },
  {
    address: "Dx5jSByLNGnC74nyQqr4gyZqSQif1LwCMPzQdJVEZANb",
    name: "YUUMI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "YUUMI",
    quoteLabel: "USDC"
  },
  {
    address: "HLeE8LuLJ2weLBFUDGSbTh3Grf3xFKqvnLiBW15kfQRn",
    name: "CCD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CCD",
    quoteLabel: "USDC"
  },
  {
    address: "2QqscQWb9aefaFqLAkndKfuqiggAT4AvtTqp5tyfQr97",
    name: "KNIGHTS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "KNIGHTS",
    quoteLabel: "SOL"
  },
  {
    address: "3MH6Bjh5kGWU7a8ZNWVrraZ4xJVuCR1mVhL4QoxYW4Cv",
    name: "SDOO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDOO",
    quoteLabel: "USDC"
  },
  {
    address: "4bBfap8XB8hnG3BawV5j4rht6SUs59vkLDA8j5pUPJ2D",
    name: "CORG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORG",
    quoteLabel: "USDC"
  },
  {
    address: "BvTacKENV6XLFovR3cyQgV33pGzrLvY286w3NU25wpA6",
    name: "SLR/SLR",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SLR",
    quoteLabel: "SLR"
  },
  {
    address: "AUNeiFRHjV9SSrYVr53M9i3PWxkRx9EJFNwb2sMzGWMP",
    name: "PHX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PHX",
    quoteLabel: "USDC"
  },
  {
    address: "8ernnLUbs8sZb7c6GsUxdeBjZkm4PTqvYPYq3kjuf35L",
    name: "BRONG/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BRONG",
    quoteLabel: "USDC"
  },
  {
    address: "BkhSWTToQC9gBfEmfWKa1j1nWARkJPd5WQSPpa25b1SZ",
    name: "BABS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BABS",
    quoteLabel: "SOL"
  },
  {
    address: "CN4p5vWo4MEoXZ13icgsidtUTPRUCnaV32WithYXEyvm",
    name: "BUILD/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BUILD",
    quoteLabel: "USDC"
  },
  {
    address: "69vYySCMLSkLcQs4XTJtKmXBBUCt69feTgiRrPTXX3UB",
    name: "TQL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TQL",
    quoteLabel: "USDC"
  },
  {
    address: "AXrjzpUrZRb5q4TMA7inq8V28GgWdjppLMjC8BjH1fdE",
    name: "Underdog/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Underdog",
    quoteLabel: "USDC"
  },
  {
    address: "Ghyj73p8sbMUzKNrqyo4CtU6CiezodRzRXhQb6FuWt54",
    name: "FLUR/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FLUR",
    quoteLabel: "USDC"
  },
  {
    address: "FwtGXkMW5bj1W4nJRDPQeTojTtCjawKx2tAN2k2pBJYY",
    name: "OWL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "OWL",
    quoteLabel: "SOL"
  },
  {
    address: "6MQnQRRQnekoJCGqH7aPPqv1zvqpqBkZ3dj6nV68i4hp",
    name: "VON/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "VON",
    quoteLabel: "USDC"
  },
  {
    address: "6QrHNsSkCj1wTQ3YS1wUWKqrXKqHLr19iJ58vk4wrvyd",
    name: "SKLL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SKLL",
    quoteLabel: "SOL"
  },
  {
    address: "6KjQcDeNC47aaPXxeoSp8P8rkELqpqgBD2fjsnJdMW8w",
    name: "AntiBonk/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AntiBonk",
    quoteLabel: "USDC"
  },
  {
    address: "8EAn5tH6Ri2kZJ75BGbmPKDD917QDbKf6Jr7knRuN5Yt",
    name: "SCORE/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SCORE",
    quoteLabel: "USDC"
  },
  {
    address: "2HDDBrV6sjo9uhrG5SL3tVBkQHA8ALsyzjE9uRT6QNrb",
    name: "APSO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APSO",
    quoteLabel: "USDC"
  },
  {
    address: "HgNWdsnnVvrh8HdvQuddJ7cu7nqVTV5raXccCyrwDiwy",
    name: "Sgoat/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Sgoat",
    quoteLabel: "SOL"
  },
  {
    address: "H81s7KtLBuY91HwuHHJ5A1SphXjhvn5kZ6jBMRf7nuYi",
    name: "FROGS/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "FROGS",
    quoteLabel: "USDC"
  },
  {
    address: "6LKNvo34ekcWGUzvvp1HiQRAUptVHj2J9KJWtnEBooR3",
    name: "ATLAS/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "ATLAS",
    quoteLabel: "SOL"
  },
  {
    address: "EY5wojKRMgG4fFE8GjBCJferiZWhqN6HEMuYmMLPCPtT",
    name: "TROLL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "TROLL",
    quoteLabel: "USDC"
  },
  {
    address: "6Pysnvy49PPgJ9thdx82fintdY9WdCgb1UqXbKi4c2Le",
    name: "SQVC/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SQVC",
    quoteLabel: "USDC"
  },
  {
    address: "6U2ncc3FKhxtHJh2xmvDd7DGGTBurqBeEv1VoEgTJ6G8",
    name: "CORGU/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CORGU",
    quoteLabel: "USDC"
  },
  {
    address: "7fRebyqF6Qx175q1m6QAdUdhLYnLqmA3RFyfDL4jJPoA",
    name: "SDOG/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SDOG",
    quoteLabel: "SOL"
  },
  {
    address: "CnZ1H6BMgh8i39ReyU2LRucdoi4aqN7Tt4aQrZa8Cge4",
    name: "SALSA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SALSA",
    quoteLabel: "USDC"
  },
  {
    address: "GsCPXRyop8LjNNK72DLdg4xMJxyfBWv2LNLxYg1ZbHNP",
    name: "USEL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "USEL",
    quoteLabel: "SOL"
  },
  {
    address: "3rtCRgNXMjRL7e9xQJw5Rx82DozgSBMfrJuorrbhLxpS",
    name: "SOL/KEK",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SOL",
    quoteLabel: "KEK"
  },
  {
    address: "CJveNvTkSwjSEoCKqCAq6nxWqc72VRg6FjkwcRxAdQcS",
    name: "SETI/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SETI",
    quoteLabel: "USDC"
  },
  {
    address: "6H3448JKvuChgdiuHfbG9KDr9McY59fC3G6qntzigZ9t",
    name: "BSHIB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BSHIB",
    quoteLabel: "USDC"
  },
  {
    address: "51WfgcAc4E3fwBf3mvYdiNd9X8hTSaRXroZ5582foVbE",
    name: "CRMX/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "CRMX",
    quoteLabel: "USDC"
  },
  {
    address: "Qqu6vLxESFviXc9HANQUpHsJDzMqPjSsY7BPAY2rQzL",
    name: "DRB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DRB",
    quoteLabel: "USDC"
  },
  {
    address: "6WvMRbrMkmgcJhvBq41js28KfLPP9KTezFpazAQ5fze9",
    name: "LAIKA/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LAIKA",
    quoteLabel: "SOL"
  },
  {
    address: "FC6LrD27mY7Q4XfKDRC3MeJLHTWsYyuoxKuRdXTZjVcP",
    name: "BigMac/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BigMac",
    quoteLabel: "SOL"
  },
  {
    address: "FL5eQREyAqz5KN6mcJS46qyk1WcvpWto4HNzSB35Hncg",
    name: "SAMO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAMO",
    quoteLabel: "USDC"
  },
  {
    address: "DgwFAexxY57doiZBd8zmndGXQLkkYrrK4DhTVDt5UEEU",
    name: "AVASOL/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "AVASOL",
    quoteLabel: "SOL"
  },
  {
    address: "G5UQ5cRqYTQq58w5bKx3mtGsTgfrrvTyQ6B85sioiXHJ",
    name: "WHAT/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "WHAT",
    quoteLabel: "USDC"
  },
  {
    address: "B9DhYsyqcefCrmg1uMMVCE9vDRXZq2H8BiFYg811gxpz",
    name: "PIZZA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PIZZA",
    quoteLabel: "USDC"
  },
  {
    address: "3vfTtk9tKA65A9CCvUCxCiVce9XZeSWqVzUo1R1oS2FT",
    name: "LOLA/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "LOLA",
    quoteLabel: "USDC"
  },
  {
    address: "CrpXWYmwcZFm8Vwmafet4VGLWkwZcpjKzc4bVPWW77id",
    name: "SUN/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SUN",
    quoteLabel: "SOL"
  },
  {
    address: "GNkM19u8RxbKiyGUoCZ7vQ7omjUgYhYrjprk4c6Xfnfv",
    name: "SAP/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SAP",
    quoteLabel: "USDC"
  },
  {
    address: "FTbNjipcYbQALd3BSVv6WVWHRVYbVaLoHqE7L4w71C88",
    name: "DOZY/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DOZY",
    quoteLabel: "USDC"
  },
  {
    address: "8qkk3V2UwXDUbkG537KLscNoGbGdGDXfwTkRor3gNtqE",
    name: "SMask/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "SMask",
    quoteLabel: "SOL"
  },
  {
    address: "9iUQrQNC5huSQB9AvtbvtbTnQuREXneE2TtKUhwcBUhK",
    name: "BIRD/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "BIRD",
    quoteLabel: "SOL"
  },
  {
    address: "DvD6XqffHUES7Y3JyAFqJpg5WmZgJk6JvsJLpM8jiUSL",
    name: "NFTL/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "NFTL",
    quoteLabel: "USDC"
  },
  {
    address: "5oGR23TFTWDJMxc53KkZe2REJdpEQx7mSGcWddFHLDV2",
    name: "Love/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "Love",
    quoteLabel: "USDC"
  },
  {
    address: "GTkkjqz19PLpkyYyCx4RTVPb4iFCRJZTkdwjT2waPCJn",
    name: "DONK/SOL",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "DONK",
    quoteLabel: "SOL"
  },
  {
    address: "44Po29sc5eqhYvDCMDPGB8dECdRVP4jioXpDeQ7XTPjm",
    name: "PokeB/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "PokeB",
    quoteLabel: "USDC"
  },
  {
    address: "4u8kDeu5fzXFx4nDCHjTg5LRod7SRhwfYaJQWT593nmp",
    name: "APOLLO/USDC",
    programId: "srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX",
    baseLabel: "APOLLO",
    quoteLabel: "USDC"
  }
];
