import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { Modal } from "@mantine/core";
import { useWallet } from "@solana/wallet-adapter-react";
import { Col, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import WalletConnect from "../Serum/components/WalletConnect";
//import { useWallet } from "../Serum/utils/wallet";
const AddressBook = ({ show, handleClose }) => {
  const [adrList, setAdrList] = useState([]);
  const { connected, wallet, publicKey } = useWallet();
  const history = useHistory();
  const [adr, setAdr] = useState("");
  const handleAdd = () => {
    setAdrList([...adrList, adr]);
    setAdr("");
  };
  const handleDelete = (ind) => {
    let filtredList = adrList.filter((elm, id) => id !== ind);
    setAdrList(filtredList);
  };
  const confirmChanges = () => {
    if (connected && publicKey.toBase58()) {
      localStorage.setItem(publicKey.toBase58(), JSON.stringify(adrList));
      handleClose();
    }
  };
  useEffect(() => {
    if (connected && publicKey.toBase58()) {
      let list = localStorage.getItem(publicKey.toBase58());
      if (list) {
        let newList = JSON.parse(list);
        setAdrList(newList);
      }
    }
  }, [connected, show, publicKey]);
  return (
    <Modal
      size={"lg"}
      opened={show}
      onClose={handleClose}
      title="Address Book"
      radius={5}
      styles={{
        modal: {
          backgroundColor: "rgb(15, 23, 42)",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "rgba(51, 66, 87, 0.6)",
          boxShadow: "rgb(15 23 42 / 30%) 0px 4px 16px 2px"
        },
        title: {
          color: "rgba(255, 255, 255, 0.5)"
        }
      }}
    >
      {connected ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContet: "space-between"
            }}
          >
            <Row
              style={{
                height: "80px",
                backgroundColor: "rgb(15, 23, 42)",

                borderRadius: 5,
                marginBottom: 30,
                flexWrap: "nowrap",

                justifyContent: "center",
                display: "flex",
                flex: 1
              }}
            >
              <Col
                flex={"auto"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "10%",
                  backgroundColor: "rgb(51, 65, 85)",

                  height: "50px",
                  alignSelf: "center",
                  margin: "1.2em",
                  borderRadius: 5,

                  borderColor: " rgba(228, 228, 228, 0.1)"
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    // backgroundColor: "#191B20",
                    borderRadius: 12,
                    marginBottom: 8,
                    backgroundColor: "rgb(51, 65, 85)",
                    width: "100%",
                    height: "90%",
                    padding: "0.3em",
                    margin: "0.3em",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "rgba(51, 66, 87, 0.6)"
                    // paddingTop: "0.7em",
                  }}
                >
                  <Input
                    placeholder="Address"
                    type="text"
                    value={adr}
                    onChange={(e) => {
                      setAdr(e.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "10%",

                  height: "50px",
                  alignSelf: "center",
                  margin: "1.2em",
                  borderRadius: 10
                }}
              >
                <button className="btn btn-swap" onClick={() => handleAdd()}>
                  Add
                </button>
              </Col>
            </Row>
          </div>
          {adrList.map((elm, ind) => (
            <Row
              style={{
                borderRadius: 10,
                flexWrap: "nowrap",
                backgroundColor: "rgb(241,241,241,)",
                justifyContent: "center",
                display: "flex",
                flex: 1,
                width: "93%",
                marginLeft: "3%",
                marginBottom: "1em"
              }}
            >
              <Col
                flex={"auto"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "10%",

                  alignSelf: "center",
                  marginLeft: "1.2em"
                }}
              >
                <div>{elm}</div>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  maxWidth: "40%",
                  alignSelf: "center",
                  margin: "1.2em",
                  borderRadius: 10,
                  gap: "20px"
                }}
              >
                <button
                  className=" btn-small"
                  onClick={() => {
                    history.replace(`/balance?address=${elm}`);
                    handleClose();
                  }}
                >
                  <CopyOutlined />
                </button>
                <button
                  className=" btn-small"
                  onClick={() => handleDelete(ind)}
                >
                  <DeleteOutlined />
                </button>
              </Col>
            </Row>
          ))}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            display: "flex"
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)" }}>
            You need to be connected to use this feature{" "}
          </span>
          <div style={{ width: "250px", marginTop: "0.2em" }}>
            <WalletConnect />
          </div>
        </div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
          marginTop: 20
        }}
      >
        <button className="btn btn-swap" onClick={confirmChanges}>
          Confirm
        </button>
        <button className="btn btn-swap" onClick={handleClose}>
          Close
        </button>
      </div>
      {/* Modal content */}
    </Modal>
  );
};

export default AddressBook;
