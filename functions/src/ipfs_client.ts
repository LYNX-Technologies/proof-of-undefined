/* eslint-disable */

import {Web3Storage, File} from "web3.storage";
import {_encrypt, _decrypt} from "./crypto_helper";

// eslint-disable-next-line require-jsdoc
const IPFS_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc5RDE3ZEM2YkM5MTgxMDhhZGUxZEY1MWViMmVmQmExZGFBRUI4M2YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA3MDA1MTQzMTgsIm5hbWUiOiJseW54In0.LB5Zvg4w4HTlXmH4ETCj5gYFLQgIL1KOtAPiUxAPSVc";

interface IpfsObj {
    cid: string;
    iv: string;
    secretKey: string;
}


function _makeStorageClient() {
    // eslint-disable-next-line max-len
    return new Web3Storage({token: IPFS_AUTH_TOKEN});
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function UploadToIpfs(inputData: string, fileName: string) {
    const web3Storage = _makeStorageClient();

    const encrypted = _encrypt(inputData);

    const files = [new File([encrypted.encryptedData], fileName)];
    const cid = await web3Storage.put(files);
    const myAuthObj: IpfsObj = {
        cid: cid,
        secretKey: encrypted.securityKey,
        iv: encrypted.iv
    }
    return myAuthObj;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function DownloadFromIpfs(ipfsData: IpfsObj) {
    const web3Storage = _makeStorageClient();
    const filelike = await web3Storage.get(ipfsData.cid);

    if (filelike) {
        let files = await filelike.files();
        for (const f of files) {
            const parsed = await f.text();
            const decrypted = _decrypt(parsed, ipfsData.secretKey, ipfsData.iv);
            console.log(decrypted);
        }
        return;
    }
}

async function main() {
    const inputData = "This is the data from hardware api";
    const filename = "myfile.txt";
    const ipfsObj: IpfsObj = await UploadToIpfs(inputData, filename);
    console.log(ipfsObj)
    console.log("Decrypting .......")
    let decrypted = DownloadFromIpfs(ipfsObj);
    console.log(decrypted);
}

main()
