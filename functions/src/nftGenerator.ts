/* eslint-disable max-len */
import {ethers} from "ethers";
import {ipfsUpload} from "@tatumio/tatum";
import nft from "./contracts/biometricNft.json";
import {BiometricToken} from "./contracts/BiometricsNft";
import {_encrypt} from "./crypto_helper";
import functions from "firebase-functions";

const CONTRACT_ADDRESS = "0xA2008D7cfAC9B6078fa3Be7dA38A92306cb14BD8";

export const nftGenerator = async (address: string, data: string) => {
  const privateKey = functions.config().config.key;
  const url = "https://kovan.optimism.io";
  const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

  const wallet = new ethers.Wallet(privateKey, customHttpProvider);

  const nftContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      nft.abi,
      wallet
  ) as BiometricToken;

  const encryptedData = _encrypt(data);

  const ipfsAddress = await uploadToNft(encryptedData.encryptedData);

  const test = await nftContract.safeMint(address, ipfsAddress, encryptedData.securityKey);

  return test;
};

const uploadToNft = async (data:string) : Promise<string> => {
  const bufferData = Buffer.from(data, "utf-8");
  const ipfsHash = await ipfsUpload(bufferData, "user-data");
  console.log(ipfsHash);
  return ipfsHash.ipfsHash;
};
