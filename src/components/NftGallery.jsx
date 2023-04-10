import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";

import { FetchNFTClient } from "@audius/fetch-nft";
import { useLocation } from "react-router-dom";
import FloatingElementBlock from "../Serum/components/layout/FloatingElementBlock";
//import { useWallet } from "../Serum/utils/wallet";
import "./nftgallery.css";
import { useWallet } from "@solana/wallet-adapter-react";
// Initialize fetch client
const fetchClient = new FetchNFTClient({
  solanaConfig: {
    rpcEndpoint: `https://radial-delicate-layer.solana-mainnet.discover.quiknode.pro/${process.env.REACT_APP_QUICK_NODE_API_KEY}/`
  }
});

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const NftGallery = ({ smallScreen, depth = 7, onPrice, onSize }) => {
  const { connected, wallet, publicKey } = useWallet();
  const [collectibles, setCollectibles] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const query = useQuery();

  useEffect(() => {
    // Fetching all collectibles for the given wallets
    let adr = query.get("address");
    if (adr) {
      setSelectedAddress(adr);
    } else {
      if (connected) {
        setSelectedAddress(publicKey.toBase58());
      }
    }
    if (selectedAddress) {
      fetchClient
        .getCollectibles({
          solWallets: [selectedAddress]
        })
        .then((res) => setCollectibles(res));
    }
  }, [connected, selectedAddress, query]);

  return (
    <FloatingElementBlock
      className="order_book new-background"
      style={
        smallScreen
          ? {
              flex: 1,
              padding: "0 !important",
              borderRadius: "10px",
              background: "rgb(255,255,255)",
              minHeight: "545px",
              maxWidth: "385px"
            }
          : {
              overflow: "hidden",
              boxSizing: "border-box",
              minWidth: "100%",
              height: "612px",
              borderRadius: "10px",
              paddingRight: "5px"
            }
      }
    >
      <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
        <Row>
          <Col>
            <div style={{ fontSize: 17, padding: "0.9em" }}>
              Wallet NFT Gallery
            </div>
          </Col>
        </Row>

        <Row
          style={{
            flex: 1,
            display: "flex",
            justifyContent: smallScreen ? "center" : "flex-start",
            width: "100%"
          }}
        >
          {collectibles?.solCollectibles[selectedAddress] &&
            collectibles?.solCollectibles[selectedAddress].map(
              (collectible) => {
                return (
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "150px !important"
                    }}
                  >
                    <div className="nft-card">
                      <img
                        className="Image"
                        src={collectible.frameUrl || collectible.gifUrl}
                        alt={collectible.name}
                      />
                      <span className="nft-name">{collectible.name}</span>
                    </div>
                  </Col>
                );
              }
            )}
        </Row>
      </div>
    </FloatingElementBlock>
  );
};
export default NftGallery;
