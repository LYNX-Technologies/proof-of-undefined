import {ethers} from "ethers";
import {CONTRACT_ADDRESS} from "../config/contract";
import CryptoContract from "../artifacts/contracts/Staking.sol/Staking.json";
import Dai from '../artifacts/contracts/Dai.json';
import type {Staking} from "../contracts";
import {JsonRpcSigner} from "@ethersproject/providers";


export async function approveDaiAccess(signer: JsonRpcSigner, amount: number): Promise<ethers.ContractTransaction | undefined> {
    const multiply = ethers.utils.parseEther(`${amount}`);

    const daiContract = new ethers.Contract(
        "0x51998830821827e12044a903e524b163152eFFd4",
        Dai,
        signer
    );

    const test = await daiContract.approve(CONTRACT_ADDRESS, multiply);

    return test;
}

export async function stakeEthereum(signer: JsonRpcSigner, days: number, value: number): Promise<ethers.ContractTransaction | undefined> {
    if (!window.ethereum) {
        console.log('no ethereum!');
        return;
    }

    const multiply = ethers.utils.parseEther(`${value}`);

    const coffeeContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CryptoContract.abi,
        signer
    ) as Staking;

    const deadline = futureDateToUnixTime(days);

    const tx = await coffeeContract.stake(deadline, multiply);

    console.log(tx);

    return tx;
}

function futureDateToUnixTime(days: number) {
    const future = new Date();
    // future.setDate(new Date().getDate() + days);
    future.setTime(future.getTime() + 1000 * 60);
    return Math.round(future.getTime() / 1000);
}
