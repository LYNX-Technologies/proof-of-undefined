import { JsonRpcSigner } from "@ethersproject/providers";
import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface WalletService {
    address?:string;
    provider?: JsonRpcSigner;
    setAddress: (address:string, provider:JsonRpcSigner) => void;
}

const WalletContext = createContext<WalletService>({setAddress:()=>{}});

export function useWallet(){
    return useContext(WalletContext);
}

export const ServerContext = (props:PropsWithChildren<{}>) => {
    const setWalletContext = (address:string, provider:JsonRpcSigner) => {
        setWallet({...wallet, address, provider});
    }
    const [wallet, setWallet] = useState<WalletService>({setAddress:setWalletContext});
  return (
    <WalletContext.Provider value={wallet}>
          {props.children}
    </WalletContext.Provider>
  );
};
