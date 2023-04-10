import { createStyles } from "@mantine/core";

const useTvlStyles = createStyles((theme) => ({
  homeTvlItem: {
    backgroundColor: "rgba(19, 34, 53, 0.5)",
    alignSelf: "flex-start",
    minWidth: 320,
    height: "max-content",
    flexShrink: 0,
    width: "calc(100% - 0px)",
    justifyContent: "space-between",
    gap: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 5,
    padding: 10,
    display: "flex",
    marginBottom: 10,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(44, 69, 102, 1)",
    },
  },
  tvlInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  tvlIcon: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  tvlName: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    "& #tvl-name": {
      fontSize: 12,
      fontWeight: 400,
      color: "rgb(255, 255, 255)",
    },
    "& #tvl-price": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: "rgb(181, 181, 181)",
    },
  },
  tvlPricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap: 5,
    "& #usd-price": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: "rgb(255, 255, 255)",
    },
    "& #volume": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: "rgb(50, 205, 153)",
      textAlign: "right",
      lineHeight: 1,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgb(50, 205, 153)",
      borderRadius: 2,
      minWidth: 32,
      width: 132,
      minHeight: 19,
      height: "max-content",

      display: "flex",
      justifyContent: "center",
      padding: "5px 10px",
      "&.volume-decrease": {
        color: "red",
        borderColor: "red",
      },
    },
  },
}));
const useCommonStyles = createStyles((theme) => ({
  viewSwapButton: {
    transition:
      "color 300ms ease 0s, border-color 300ms ease 0s, background 300ms ease 0s",
    alignSelf: "center",
    minWidth: "49px",
    minHeight: "30px",
    maxHeight: "30px",
    height: "30px",
    flexGrow: 1,
    width: "calc(100% - 15px)",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 500,
    color: "rgb(119, 145, 224)",
    textAlign: "center",
    lineHeight: 1,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "rgb(119, 145, 224)",
    borderRadius: "5px",
    background: "none transparent",
    margin: "0.7em",
    marginTop: "-1em !important",
  },
  percentagePlus: {
    minHeight: 20,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.green[6],
    textAlign: "center",
    lineHeight: 1,
    marginTop: 7.5,
  },
  percentageMinus: {
    minHeight: 20,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.red[6],
    textAlign: "center",
    lineHeight: 1,
    marginTop: 7.5,
  },
  stableCoinItem: {
    backgroundColor: "rgba(19, 34, 53, 0.5)",
    alignSelf: "flex-start",
    minWidth: 320,

    flexShrink: 0,
    width: "calc(100% - 0px)",
    justifyContent: "space-between",
    gap: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 5,
    padding: 10,
    height: 65,
    alignItems: "center",
    display: "flex",
    marginBottom: 10,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "rgba(44, 69, 102, 1)",
    },
  },
  stableCoinInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  stableCoinIcon: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  stableCoinName: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  nftName: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(255, 255, 255)",
  },
  nftPrice: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(181, 181, 181)",
  },
  stableCoinPricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  usdPrice: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(255, 255, 255)",
  },
  volume: {
    overflow: "visible",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(181, 181, 181)",
    textAlign: "right",
    lineHeight: 1,
    padding: "0px 5px",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 2,
    minWidth: 32,
    height: "max-content",
  },
}));
const useNftStyles = createStyles((theme) => ({
  homeNftItem: {
    backgroundColor: `rgba(19, 34, 53, 0.5)`,
    alignSelf: "flex-start",
    minWidth: 320,
    height: "max-content",
    flexShrink: 0,
    width: `calc(100% - 0px)`,
    justifyContent: "space-between",
    gap: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    display: "flex",
    marginBottom: 10,
    "&:last-child": {
      marginBottom: 0,
    },
  },
  nftInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  nftIcon: {
    width: 35,
    height: 35,
    borderRadius: 5,
    cursor: "pointer !important",
  },
  nftName: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    "& #nft-name": {
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.white,
    },
    "& #nft-price": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.gray[5],
    },
  },
  nftPricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end !important",
    gap: 5,
    "& #usd-price": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.white,
      paddingLeft: 5,
    },
    "& #volume": {
      overflow: "visible",
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.gray[5],
      textAlign: "right",
      lineHeight: 1,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 3,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgb(19, 34, 53)",
      borderRadius: 2,
      minWidth: 32,
      height: "max-content",
    },
  },
}));
const useSwapStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    justifyContent: "center",

    width: "100%",
    maxWidth: 450,
    borderRadius: 15,
    padding: "10px",
    paddingBottom: 10,
    paddingTop: 5,
    marginBottom: 5,
    marginTop: 3,
    "&:last-child": {
      marginBottom: 0,
    },
    "@media (min-width: 768px)": {
      marginBottom: 0,
      marginTop: 0,
    },
  },
  refreshButton: {
    position: "absolute",
    top: 0,
    backgroundColor: theme.colors.gray,
    borderRadius: "50%",
    padding: theme.spacing.xs,
    right: theme.spacing.xs,
    opacity: 0.2,
    "&:hover": {
      backgroundColor: theme.colors.gray,
      opacity: 0.2,
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: theme.spacing.md,
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  swapForm: {
    backgroundColor: "#080f19",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "rgba(51,66,87,.6)",
    borderRadius: "5px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  youPayStyle: {
    marginLeft: theme.spacing.xs,
    fontWeight: "bold",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: theme.spacing.xs,
  },
  balanceLabel: {
    marginRight: theme.spacing.xs,
    fontSize: theme.fontSizes.sm,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  balanceValue: {
    color: "rgb(226, 232, 240)",
    fontSize: "12px",
    fontWeight: 400,
  },
  maxBtn: {
    padding: 5,
    cursor: "inherit",
    border: `1px solid ${theme.colors.green[6]}`,
    borderRadius: 5,
    textAlign: "center",
    margin: "0.3em",
    boxSizing: "border-box",
    fontFamily: "Poppins",
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 1,
  },
  halfBtn: {
    padding: 5,
    cursor: "pointer",
    textAlign: "center",
    margin: "0.3em",
    boxSizing: "border-box",
    fontFamily: "Poppins",
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 1,

    border: `1px solid ${theme.colors.blue[6]}`,
    borderRadius: 5,
  },
  inputContainer: {
    backgroundColor: "rgb(19, 34, 53)",
    borderRadius: 5,
    boxShadow: "none",
    color: "rgb(255, 255, 255)",
    height: 45,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    display: "flex",
    paddingLeft: "0.3em",
  },
  inputStyles: {
    fontSize: theme.fontSizes.xl,

    textAlign: "right",
    backgroundColor: "transparent",
    paddingRight: 10,

    border: "none",
    outline: "none",
    "&:focus": {
      outline: 0,
    },
  },
  coinSelectorContainer: {
    position: "absolute",
    left: 4,
    top: 4,
  },
  modalBtn: {
    backgroundColor: "transparent",
    border: 0,
    "&:hover": {
      backgroundColor: theme.colors.white,
      opacity: 0.1,
    },
  },
  modalStyle: {
    height: "100vh",
    overflow: "clip",
  },
  searchInput: {
    width: "100%",
    color: "#FFF",
  },
  coinList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  modalContent: {
    borderWidth: "0.5px",
    marginTop: theme.spacing.xs,
    borderColor: "#E4E9EE",
    borderStyle: "solid",
    opacity: 0.5,
  },
  modalInner: {
    height: "100%",
    minHeight: "200px",
    overflowY: "scroll",
    overscrollBehavior: "contain",
  },
  selectButton: {
    display: "flex",
    flexDirection: "row",
    padding: "2px",
    margin: "5px",
    borderRadius: "5px",
    borderOpacity: 0.5,
    "&:hover": {
      backgroundColor: "#E4E9EE",
      backgroundOpacity: 0.1,
      cursor: "pointer",
    },
  },
  tokenIcon: {
    width: 18,
    height: 18,
    marginRight: theme.spacing.sm,
  },
  tokenSymbol: {
    fontSize: "0.75rem", // equivalent to text-xs
    fontWeight: 700, // equivalent to font-bold
    color: "#fff", // equivalent to text-white
  },
  tokenContainer: {
    display: "flex", // equivalent to flex
    flexDirection: "row", // equivalent to flex-row
    alignItems: "center", // equivalent to items-center
    justifyContent: "flex-start", // equivalent to justify-start
  },
  icon: {
    height: "25px", // equivalent to h-[25px]
    width: "25px", // equivalent to w-[25px]
  },
  tokenInner: {
    display: "flex",
    flexDirection: "row", // equivalent to flex-row
    alignItems: "center",
  },
  tokenContainerSpan: {
    color: "#FFF",
    display: "flex",
    fontSize: "14px",
    fontStyle: "normal",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: 500,
    marginLeft: "10px",
  },
  btnText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "white",
    marginBottom: 2,
  },
  slippageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.md,
  },
  slippageInnerButton: {
    backgroundColor: "black",
    padding: theme.spacing.xs,
    textTransform: "uppercase",
    fontWeight: "bold",
    height: "50px",
    width: "100%",
  },
  btnContainer: {
    width: "33.3333%",
    margin: "0 0.5rem",
  },
  switchIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
  },
  receiveContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.md,
  },
  coinSelector: {
    position: "relative",
    width: "100%",
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.gray[0],
    border: "0px",
  },
  outputDisplay: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,
    backgroundColor: "transparent",
    paddingRight: "0.3em",
  },
  absoluteLeftTop: {
    position: "absolute",
    left: "4px",
    top: "4px",
  },
  progress: {
    width: "100%",
    height: 72,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.blue[0],
  },
  bar: {
    borderRadius: theme.radius.sm,
    height: 72,
    backgroundColor: theme.colors.blue[6],
  },
  noRoute: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  noRouteSpan: {
    marginRight: 2,
    fontWeight: "bold",
    fontSize: theme.fontSizes.lg,
  },
  slippageInput: {
    width: "100%",
    height: "100%",
    paddingRight: theme.spacing.xl,
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
    textAlign: "right",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.neutral,
    outline: "none",

    "&:focus": {
      outline: "none",
    },
  },
  percentage: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.lg,
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
  },
  slippageError: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
  },
  slippageErrorInner: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: "-11px",
    right: "0",
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: "bold",
    padding: "1px 2px",
    borderRadius: theme.radius.sm,
  },
  container: {
    position: "relative",
    paddingRight: theme.spacing.xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    backgroundImage: "linear-gradient(to right, #48bb78, #4299e1);",
  },
  animated: {
    animation: "$gradientXAnimation 4s ease-in-out infinite",
  },
  "@keyframes gradientXAnimation": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  selectTokenBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: theme.spacing.sm,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(19, 34, 53, 0.5)",
      borderRadius: 10,
    },
  },
  tokenRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  selectTokenIngo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: theme.spacing.sm,
  },
  selectTokenName: {
    fontSize: theme.fontSizes.sm,
    opacity: 0.8,
    color: "#FFF",
  },
  routeStyleSelected: {
    background: "rgba(51, 65, 85, 0.3)",
    border: "2px solid rgb(154, 76, 222)",
    borderRadius: 5,
    width: "100%",
    height: 70,
    margin: "0.2em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.2em",
    cursor: "pointer",
    marginBottom: "10px !important",
    position: "relative",
    minWidth: "100%",
  },
  routeStyle: {
    position: "relative",
    background: "rgba(51, 65, 85, 0.3)",
    border: "2px solid rgba(51, 66, 87, 0.6);",
    borderRadius: 5,
    width: "100%",
    height: 70,
    margin: "0.2em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.2em",
    cursor: "pointer",
    marginBottom: "10px !important",
    minWidth: "100%",
  },
  bestRoute: {
    position: "absolute",
    right: 0,
    top: "-11px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "bold",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "1px",
    paddingBottom: "1px",
    borderRadius: "5px",
  },
  innerRoute: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.neutral,
    borderRadius: "5px",
    padding: "0.75rem",
  },
  swapButton: {
    backgroundColor: "rgb(50, 205, 153)",
    border: "none",
    textAlign: "center",
    boxSizing: "border-box",
    fontFamily: theme.fontFamily,
    fontSize: "14px",
    fontWeight: 500,
    color: "rgb(255, 255, 255)",
    textShadow: "1px 1px 2px rgb(50, 205, 153)",
    lineHeight: 1,
    borderRadius: "5px",
    marginTop: "0.8em",
    height: "48px",
    transition:
      "color 300ms ease 0s, border-color 300ms ease 0s, background 300ms ease 0s",
    boxShadow: "none",
    cursor: "pointer",
  },
}));
const useStableTokenStyles = createStyles((theme) => ({
  stableCoinItem: {
    backgroundColor: "rgba(19, 34, 53, 0.5)",
    alignSelf: "flex-start",
    minWidth: 320,

    flexShrink: 0,
    width: "calc(100% - 0px)",
    justifyContent: "space-between",
    gap: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 5,
    padding: 10,
    height: 65,
    alignItems: "center",
    display: "flex",
    marginBottom: 10,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "rgba(44, 69, 102, 1)",
    },
  },
  stableCoinInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  stableCoinIcon: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  stableCoinName: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  nftName: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(255, 255, 255)",
  },
  nftPrice: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(181, 181, 181)",
  },
  stableCoinPricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  usdPrice: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(255, 255, 255)",
  },
  volume: {
    overflow: "visible",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: "rgb(181, 181, 181)",
    textAlign: "right",
    lineHeight: 1,
    padding: "0px 5px",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 2,
    minWidth: 32,
    height: "max-content",
  },
  poolItem: {
    backgroundColor: "rgba(19, 34, 53, 0.5)",
    alignSelf: "flex-start",
    minWidth: 320,
    height: "max-content",
    flexShrink: 0,
    width: "calc(100% - 0px)",
    justifyContent: "space-between",
    gap: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    display: "flex",
    marginBottom: 10,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "rgba(44, 69, 102, 0.5)",
    },
  },

  poolInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  poolIcon: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },

  poolName: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",

    "& #pool-info-name": {
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.white,
    },

    "& #pool-price": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.gray[5],
      textTransform: "capitalize",
    },
  },

  poolPricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,

    "& #usd-price": {
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.white,
    },

    "& #volume": {
      overflow: "visible",
      fontFamily: "Poppins",
      fontSize: 12,
      fontWeight: 400,
      color: theme.colors.gray[5],
      textAlign: "right",
      lineHeight: 1,
      padding: "0px 5px",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: theme.colors.dark[3],
      borderRadius: 2,
      minWidth: 32,
      height: "max-content",
    },
  },
}));
const useNewsStyles = createStyles((theme) => ({
  newsItem: {
    backgroundColor: "rgba(19, 34, 53, 0.5)",
    alignSelf: "flex-start",
    minWidth: 320,
    height: "max-content",
    flexShrink: 0,
    width: "calc(100% - 0px)",
    justifyContent: "space-between",
    gap: theme.spacing.md,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(19, 34, 53)",
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    minHeight: 65,
    maxHeight: 80,
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing.md,

    "&:hover": {
      backgroundColor: "rgba(44, 69, 102, 0.5)",
    },
  },

  leftItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.md,
  },

  newsInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing.md,

    "& #news-title": {
      whiteSpace: "pre-wrap",
      overflow: "visible",
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizes.sm,
      fontWeight: 400,
      color: theme.colors.white,
      lineHeight: 1,
    },

    "& #news-description": {
      whiteSpace: "pre-wrap",
      overflow: "visible",
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizes.sm,
      fontWeight: 400,
      color: theme.colors.gray[5],
      lineHeight: 1,
    },
  },

  textConnect: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing.md,
  },
  trendingSwapIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  trendingSwapIconsImg: {
    width: 25,
    height: 25,
  },

  "*::-webkit-scrollbar-thumb": {
    backgroundColor: theme.colors.violet[6],
    borderRadius: theme.radius.sm,
  },
  tradeBtn: {
    height: 35,
    width: 120,
    borderRadius: 5,
    background: `rgba(19, 34, 53, 0.5)`,
    border: `1px solid ${theme.colors.teal[6]}`,
    color: theme.colors.teal[6],
    alignSelf: "flex-end !important",
    justifySelf: "flex-end !important",
    // marginLeft: '45%',
  },
}));

const usePopOverStyles = createStyles((theme) => ({
  popoverContentInfo: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  popupHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: "1px",
    borderColor: "rgb(19, 34, 53)",
    borderBottomStyle: "solid",
    width: "100%",
    paddingBottom: "0.7em",
  },
  leftPart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  poolIcon: {
    width: "35px",
    height: "35px",
    borderRadius: "5px",
  },
  poolName: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  poolInfoName: {
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.white,
  }, pricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap:"5px"
  },
  poolPrice: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.gray[6],
    textTransform: "capitalize",
  },
  poolPricingLinkButton: {
    fontFamily: theme.fontFamily,
    fontSize: "12px",
    fontWeight: 400,
    color: theme.colors.teal[6],
    textAlign: "right",
    lineHeight: "1",
    padding: "5px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.colors.teal[6],
    borderRadius: "2px",
  },
  poolPricingAnalyticsItem: {
    overflow: "visible",
    fontFamily: theme.fontFamily,
    fontSize: "10px",
    fontWeight: 400,
    color: theme.colors.dark[3],
    textAlign: "right",
    lineHeight: "1",
    padding: "0px 5px",
    fontStyle: "italic",
    minWidth: "32px",
    height: "max-content",
  },
  popoverContentBody: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  popoverDataList: {
    listStyle: "none",
    gap: "20px",
  },
  popoverDataListItem: {
    margin: "10px 0px",
  },
  popoverDataListItemTitle: {
    whiteSpace: "pre-wrap",
    overflow: "visible",
    fontFamily: theme.fontFamily,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "1",
    color: theme.colors.blue[6],
    marginRight: "5px",
  },
  popoverDataListItemValue: {
    whiteSpace: "pre-wrap",
    overflow: "visible",
    fontFamily: theme.fontFamily,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "1",
    color: "#adb5bd",
  },
  linkButton: {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    color: "rgb(50, 205, 153)!important",
    textAlign: "right",
    lineHeight: 1,
    padding: "5px",
    // borderStyle: "solid",
    // borderWidth: "1px",
    // borderColor: "rgb(50, 205, 153)",
    borderRadius: "2px"
  }
}));
const usePopStyles = createStyles((theme) => ({
  tokenPopHeader: {
    backgroundColor: "rgba(19, 34, 53, 0.5)",
    alignSelf: "center",
    minWidth: 300,
    minHeight: 80,
    height: "max-content",
    width: "100%",
    overflow: "visible",
    // justifyContent: "center",
    gap: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.colors.dark[6],
    borderRadius: 10,
    opacity: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 20px",
    marginBottom: 5,
  },
  tokenItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  tokenImg: {
    width: 40,
    height: 40,
    objectFit: "contain",
    borderRadius: "40px",
  },
  tokenName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tokenNameText: {
    fontFamily: theme.fontFamily,
    fontSize: 18,
    fontWeight: 400,
    color: theme.colors.white,
    lineHeight: 1.4,
  },
  tokenSymbolText: {
    fontFamily: theme.fontFamily,
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.gray[5],
    lineHeight: 1.5,
  },
  pricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  usdPrice: {
    fontFamily: theme.fontFamily,
    fontSize: 18,
    fontWeight: 400,
    color: theme.colors.white,
  },
  percentagePlus: {
    minHeight: 20,
    fontFamily: theme.fontFamily,
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.teal[6],
    textAlign: "center",
    lineHeight: 1,
    marginTop: 7.5,
  },
  percentageMinus: {
    minHeight: 20,
    fontFamily: theme.fontFamily,
    fontSize: 12,
    fontWeight: 400,
    color: theme.colors.red[6],
    textAlign: "center",
    lineHeight: 1,
    marginTop: 7.5,
  },
  addWatchlistButton: {
    transition:
      "color 300ms ease 0s, border-color 300ms ease 0s, background 300ms ease 0s",
    alignSelf: "center",
    minWidth: 49,
    minHeight: 30,
    maxHeight: 30,
    height: 30,
    flexGrow: 1,
    width: "100%",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 500,
    color: "rgb(119, 145, 224)",
    textAlign: "center",
    lineHeight: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(119, 145, 224)",
    backgroundColor: "transparent", borderRadius: "5px",

  },
  tokenDescription: {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    color: "rgb(181, 181, 181)",
    lineHeight: 1.5,
    marginTop: "1.2em"
  },
  modalTokenFooter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  viewCompendiumButton: {
    transition:
      "color 300ms ease 0s, border-color 300ms ease 0s, background 300ms ease 0s",
    alignSelf: "center",
    minWidth: "49px",
    minHeight: "30px",
    maxHeight: "30px",
    height: "30px",
    flexGrow: 1,
    width: "calc(100%)",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 500,
    color: "rgb(178, 111, 242)",
    textAlign: "center",
    lineHeight: 1,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "rgb(178, 111, 242)",
    borderRadius: "5px",
    background: "none transparent",
  },
  viewCoingeckoButton: {
    transition:
      "color 300ms ease 0s, border-color 300ms ease 0s, background 300ms ease 0s",
    alignSelf: "center",
    minWidth: "49px",
    minHeight: "30px",
    maxHeight: "30px",
    height: "30px",
    flexGrow: 1,
    width: "100%",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 500,
    color: "rgb(50, 205, 153)",
    textAlign: "center",
    lineHeight: 1,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "rgb(50, 205, 153)",
    borderRadius: "5px",
    background: "none transparent",
  },

}));
export {
  useTvlStyles,
  useNftStyles,
  useCommonStyles,
  useSwapStyles,
  useStableTokenStyles,
  useNewsStyles,
  usePopOverStyles,
  usePopStyles,
};