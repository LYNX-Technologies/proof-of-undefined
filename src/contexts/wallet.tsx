import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface WalletService {
    address?:string;
    setAddress: (address:string) => void;
}

const WalletContext = createContext<WalletService>({setAddress:()=>{}});

export function useWallet(){
    return useContext(WalletContext);
}

export const ServerContext = (props:PropsWithChildren<{}>) => {
    const setWalletContext = (address:string) => {
        setWallet({...wallet, address});
    }
    const [wallet, setWallet] = useState<WalletService>({setAddress:setWalletContext});
  return (
    <WalletContext.Provider value={wallet}>
          {props.children}
    </WalletContext.Provider>
  );
};
