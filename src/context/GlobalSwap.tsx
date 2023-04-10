import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalSwapContextType {
  fromMint: string;
  toTokenInfo: string;
  fromTokenInfo: string;
  setFromMint: (fromMint: string) => void;
  toMint: string;
  setToMint: (toMint: string) => void;
  fromTokenData: any;
  toTokenData: any;
  setFromTokenData: (data: any) => void;
  setToTokenData: (data: any) => void;
  setToTokenInfo: (data: any) => void;
  setFromTokenInfo: (data: any) => void;
}

const GlobalSwapContext = createContext<GlobalSwapContextType | null>(null);

interface Props {
  globalFromMint: string;
  globalToMint: string;
  children: ReactNode;
}

export const GlobalSwapProvider = ({
  globalFromMint,
  globalToMint,
  children,
}: Props) => {
  const [fromMint, setFromMint] = useState<string>(globalFromMint);
  const [toMint, setToMint] = useState<string>(globalToMint);
  const [fromTokenData, setFromTokenData] = useState<any>(null);
  const [toTokenData, setToTokenData] = useState<any>(null);
  const [fromTokenInfo, setFromTokenInfo] = useState<any>(null);
  const [toTokenInfo, setToTokenInfo] = useState<any>(null);
  return (
    <GlobalSwapContext.Provider
      value={{
        fromMint,
        setFromMint,
        toMint,
        setToMint,
        fromTokenData,
        setFromTokenData,
        toTokenData,
        setToTokenData,
        fromTokenInfo,
        setFromTokenInfo,
        toTokenInfo,
        setToTokenInfo,
      }}
    >
      {children}
    </GlobalSwapContext.Provider>
  );
};

export const useGlobalSwap = () => {
  const context = useContext(GlobalSwapContext);

  if (!context) {
    throw new Error("useGlobalSwap must be used within a GlobalSwapProvider");
  }

  const {
    fromMint,
    setFromMint,
    toMint,
    setToMint,
    setFromTokenData,
    setToTokenData,
    fromTokenData,
    toTokenData,
  } = context;

  return {
    fromMint,
    setFromMint,
    toMint,
    setToMint,
    setFromTokenData,
    setToTokenData,
    fromTokenData,
    toTokenData,
  };
};

export const useGlobalFromMint = () => {
  const context = useContext(GlobalSwapContext);

  if (!context) {
    throw new Error(
      "useGlobalFromMint must be used within a GlobalSwapProvider"
    );
  }

  const {
    fromMint,
    setFromMint,
    setFromTokenData,
    fromTokenData,
    fromTokenInfo,
    setFromTokenInfo,
  } = context;

  return {
    fromMint,
    setFromMint,
    setFromTokenData,
    fromTokenData,
    fromTokenInfo,
    setFromTokenInfo,
  };
};

export const useGlobalToMint = () => {
  const context = useContext(GlobalSwapContext);

  if (!context) {
    throw new Error("useGlobalToMint must be used within a GlobalSwapProvider");
  }

  const {
    toMint,
    setToMint,
    toTokenData,
    setToTokenData,
    toTokenInfo,
    setToTokenInfo,
  } = context;

  return {
    toMint,
    setToMint,
    toTokenData,
    setToTokenData,
    toTokenInfo,
    setToTokenInfo,
  };
};
