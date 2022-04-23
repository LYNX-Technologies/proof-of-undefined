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
