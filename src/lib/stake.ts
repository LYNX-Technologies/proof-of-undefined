import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../config/contract";
import CryptoContract from "../artifacts/contracts/Staking.sol/Staking.json";
import type { Staking } from "../contracts";
import { JsonRpcSigner } from "@ethersproject/providers";

export async function stakeEthereum(signer: JsonRpcSigner, days: number, value: number): Promise<ethers.ContractTransaction | undefined> {
    if (!window.ethereum) {
        console.log('no ethereum!');
        return;
    }
    const coffeeContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CryptoContract.abi,
        signer
    ) as Staking;

    const deadline = futureDateToUnixTime(days);

    const tx = await coffeeContract.stake(deadline,
        { value: ethers.utils.parseEther(`${value} ether`) }
    );

    return tx;
}

function futureDateToUnixTime(days: number) {
    const future = new Date();
    future.setDate(new Date().getDate() + days);
    return Math.round(future.getTime() / 1000);
}
