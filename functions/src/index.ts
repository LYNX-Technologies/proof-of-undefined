import {https, logger} from "firebase-functions";

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
