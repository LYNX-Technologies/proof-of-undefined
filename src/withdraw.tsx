import Modal from "./components/modal";
import {useWallet} from "./contexts/wallet";
import {Button} from "@mui/material";
import {withdraw} from "./lib/stake";
import {JsonRpcSigner} from "@ethersproject/providers";
import {functions} from "./config/firebase";
import {httpsCallable} from "firebase/functions";
import {useState} from "react";

function Login() {
    const wallet = useWallet();
    const [result, setResult] = useState<{ tx: any, cid: string }>();

    const resultData = () => {
        if (!result) {
            return <div/>
        }

        return (
            <div>
                <h3>Your NFT has been generated</h3>
                <p>Your data has been encrypted and saved at <b>{`ipfs://${result.cid}`}</b></p>
                <p>An NFT has been minted in the Optimism and transferred to you.</p>
                <p>This NFT has the encryption key for decrypting the information.</p>
                <h4>Transaction</h4>
                <p>{JSON.stringify(result.tx, null, 2)}</p>
            </div>
        );
    }

    const onFake = async () => {
        const {provider, address} = wallet;
        const transaction = await withdraw(provider as JsonRpcSigner, address as string);
        const reward = httpsCallable(functions, "rewardUser");
        const result = await reward({user: wallet.address, reward: true});
        console.log(result);
        setResult(result.data as { tx: any, cid: string });
    }

    return (
        <div className="App">
            <div>
                <h1>Withdraw from contract</h1>
                <h2>This page forces the staking to end and returns the DAI and generates a NFT from the biometric
                    data</h2>
                <Modal/>
                {!wallet.address ? <div/> :
                    <Button variant="contained" style={{marginTop: "20px"}} onClick={() => onFake()}>Force end of
                        period</Button>}
                {resultData()}

            </div>
        </div>
    );
}

export default Login;