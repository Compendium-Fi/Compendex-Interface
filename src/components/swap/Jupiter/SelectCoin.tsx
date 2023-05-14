import { TokenInfo } from "@solana/spl-token-registry";
import { useVirtualList } from "ahooks";
import { useMemo, useRef, useState } from "react";
import { useJupiterApiContext } from "../../../context/jupiter";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import { ChevronDownIcon, LinkIcon } from "@heroicons/react/solid";
//import defaultCoin from "../../assets/default-coin.png";
//import { Link } from "../Link";
import { useSwapStyles } from "@/components/styles";
//import Urls from "../../settings/urls";
import { useGlobalSwap } from "@/context/GlobalSwap";
import {
  Group,
  Modal,
  ScrollArea,
  TextInput,
  UnstyledButton
} from "@mantine/core";
import { QueryClient } from "react-query";
const Row = ({
  info,
  handleSelect,
}: {
  info: TokenInfo;
  handleSelect: (e: TokenInfo) => void;
}) => {
  const { classes } = useSwapStyles();
  return (
    <button type="button" className={classes.selectTokenBtn}>
      <div onClick={() => handleSelect(info)} className={classes.tokenRow}>
        <div>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              //@ts-ignore
            }}
            src={info.logoURI}
            className={classes.tokenIcon}
          />
        </div>
        <div className={classes.selectTokenIngo}>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#FFF",
            }}
          >
            {info.symbol}
          </span>
          <span className={classes.selectTokenName}>{info.name}</span>
        </div>
      </div>
      {/* <Link className="btn z-1" href={Urls.solscanAddress + info.address}>
        <LinkIcon className="h-[20px]" />
      </Link> */}
    </button>
  );
};

const Coin = ({ tokenInfo }: { tokenInfo: TokenInfo }) => {
  const { classes } = useSwapStyles();
  return (
    <div className={classes.tokenContainer}>
      <img
        src={tokenInfo?.logoURI}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          // currentTarget.src = defaultCoin;
        }}
        className={classes.icon}
      />
      <div className={classes.tokenInner}>
        <span className={classes.tokenContainerSpan}>{tokenInfo.symbol}</span>
        <KeyboardArrowDownIcon color="#FFF" />
        {/* <ChevronDownIcon className="w-[20px] text-grey ml-2" /> */}
      </div>
    </div>
  );
};

const TOP_COINS = [
  "5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr", // CMFI
  "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", // BONK
  "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", // BTC
  "So11111111111111111111111111111111111111112", // wSOL
  "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R", // RAY
  "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac", // Mango
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
  "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", // mSOL
];

const TopCoin = ({
  token,
  handleSelect,
}: {
  token: TokenInfo;
  handleSelect: (e: TokenInfo) => void;
}) => {
  const { classes } = useSwapStyles();
  return (
    <button
      type="button"
      onClick={() => handleSelect(token)}
      className={classes.selectButton}
    >
      <img className={classes.tokenIcon} src={token.logoURI} />
      <span className={classes.tokenSymbol}>{token.symbol}</span>
    </button>
  );
};

export const SelectCoin = ({
  tokenInfo,
  setCoin,
  tokenType,
}: {
  tokenInfo: TokenInfo | null | undefined;
  setCoin: React.Dispatch<React.SetStateAction<TokenInfo | null | undefined>>;
  tokenType: string;
}) => {
  const { setFromMint, setToMint } = useGlobalSwap();
  const queryClient = new QueryClient();
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const { tokenMap } = useJupiterApiContext();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const { classes } = useSwapStyles();
  const originalList = useMemo(
    () =>
      Array.from(tokenMap.values()).filter(
        (e) =>
          e.address.includes(search) ||
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          e.symbol.toLowerCase().includes(search.toLowerCase())
      ),
    [search, tokenInfo]
  );

  const topList = originalList.filter((e) => TOP_COINS.includes(e.address));

  const [list, scrollTo] = useVirtualList(originalList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 70,
    overscan: 10,
  });

  const handleSelect = (e: TokenInfo) => {
    setCoin(e);
    if (tokenType == "from") {
      setFromMint(e.address);
    } else {
      setToMint(e.address);
    }

    queryClient.refetchQueries([`tokenInfo-${tokenType}`, e.address]);
    setVisible(false);
  };

  if (!tokenInfo) {
    return null;
  }

  return (
    <>
      <Modal
        opened={visible}
        withCloseButton={false}
        onClose={() => setVisible(false)}
        title={false}
        styles={{
          body: { width: "100%", height: "100%" },
          content: {
            backgroundColor: "rgb(3, 10, 19)",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "rgb(19, 34, 53)",
            borderRadius: "3px",
            // width: "calc(100%-20px)",
            // maxWidth: "600px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            marginTop: "25px",
          },
        }}
      >
        <TextInput
          value={search || ""}
          onChange={(e) => {
            setSearch(e.target.value.trim());
            scrollTo(0);
          }}
          type="text"
          id="search-token"
          placeholder="Search"
          styles={{
            input: {
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: 24,
              fontWeight: 400,
            },
            root: {
              margin: "10px",
              borderColor: "#FFF",
              borderWidth: 1,
            },
          }}
          spellCheck={false}
        />

        <div className={classes.coinList}>
          {topList.map((e, idx) => (
            <TopCoin
              key={`top-coin-${idx}`}
              handleSelect={handleSelect}
              token={e}
            />
          ))}
        </div>

        <div className={classes.modalContent} />

        <ScrollArea h={700}>
          {originalList.map((e, index: number) => (
            <Row key={index.toString()} info={e} handleSelect={handleSelect} />
          ))}
        </ScrollArea>
      </Modal>

      <Group position="center">
        <UnstyledButton onClick={() => setVisible(true)} >
          <Coin tokenInfo={tokenInfo} />


        </UnstyledButton>
      </Group>
    </>
  );
  // return (
  //   <ButtonModal
  //     visible={visible}
  //     setVisible={setVisible}
  //     buttonClass={classes.modalBtn}
  //     buttonText={<Coin tokenInfo={tokenInfo} />}
  //     modalClass={classes.modalStyle}
  //   >
  //     <input
  //       value={search || ""}
  //       onChange={(e) => {
  //         setSearch(e.target.value.trim());
  //         scrollTo(0);
  //       }}
  //       type="text"
  //       id="search-token"
  //       placeholder="Search"
  //       className={classes.searchInput}
  //       spellCheck={false}
  //     />

  //     <div className={classes.coinList}>
  //       {topList.map((e, idx) => (
  //         <TopCoin
  //           key={`top-coin-${idx}`}
  //           handleSelect={handleSelect}
  //           token={e}
  //         />
  //       ))}
  //     </div>

  //     <div className={classes.modalContent} />

  //     <div ref={containerRef} className={classes.modalInner}>
  //       <div ref={wrapperRef}>
  //         {list.map((e) => (
  //           <Row key={e.index} info={e.data} handleSelect={handleSelect} />
  //         ))}
  //       </div>
  //     </div>
  //   </ButtonModal>
  //);
};
