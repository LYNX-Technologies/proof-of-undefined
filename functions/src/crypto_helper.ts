/* eslint-disable */
import * as crypto from "crypto";

const algorithm = "aes-256-cbc";

function _encrypt(message: string) {
// generate 16 bytes of random data
  const initVector = crypto.randomBytes(16);

// secret key generate 32 bytes of random data
// const Securitykey = crypto.randomBytes(32);
  const Securitykey = crypto.randomBytes(32);


// the cipher function
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
  let encryptedData = cipher.update(message, "utf-8", "hex");

  encryptedData += cipher.final("hex");

  console.log("Encrypted message: " + encryptedData);

  return {
    iv: initVector.toString("hex"),
    securityKey: Securitykey.toString("hex"),
    encryptedData: encryptedData
  }
}

function _decrypt(encryptedData: string, securityKeyString: string, ivString: string){
  console.log("securitykey: "+ securityKeyString)
  console.log("initvector"+ivString)

  const securitykey = Buffer.from(securityKeyString, "hex");
  const iv = Buffer.from(ivString, "hex");

  // the decipher function
  const decipher = crypto.createDecipheriv(algorithm, securitykey, iv);

  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  console.log("Decrypted message: " + decryptedData);
  return decryptedData;
}

export {_encrypt, _decrypt};