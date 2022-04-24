import {https, logger} from "firebase-functions";
import {nftGenerator} from "./nftGenerator";

export const helloWorld = https.onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

type Credentials = {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: string
}

export const storeOuraKey = https.onCall((data, context) => {
  logger.info("received", data);
  const credentials = data as Credentials;
  logger.info("The credentials are", credentials);
});

export const fetchOuraData = https.onCall(async (data, context) => {
  logger.info("received", data);
  const credentials = data as Credentials;

  const ouraData = await fetch("https://api.ouraring.com/v2/usercollection/session?start_date=2021-11-01&end_date=2021-12-01 ", {
    headers: {
      "Authorization": `Bearer ${credentials.access_token}`,
    },
  });

  logger.info("Oura data:", ouraData);

  return ouraData;
});

export const rewardUser = https.onCall(async (data, context) => {
  const {user, reward} = data as {user:string, reward:boolean};

  if (reward) {
    const result = await nftGenerator(user, `random-data${user}${Date.now()}`);
    logger.info("Run NFT generator for " + user, result);
    return result;
  } else {
    logger.info("Didn't do anything for user", user);
    return "not ok";
  }
});
