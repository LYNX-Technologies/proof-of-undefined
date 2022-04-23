import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";

const { REACT_APP_OURA_CLIENT_ID } = process.env;

/**
 * A page that is used to authorize Oura access.
 */
function AuthorizeOuraButton() {
  const [credentials, setCredentials] = useState(null);

  //
  // Fetch the credentials in local storage if they exist.
  //
  useEffect(() => {
    const c = localStorage.getItem("oura_credentials");

    if (c) {
      return setCredentials(JSON.parse(c));
    }
  }, []);

  const fetchOuraData = () => {
    const fetchOuraData = httpsCallable(functions, "fetchOuraData");

    fetchOuraData(
      JSON.parse(
        '{"access_token":"NYEY3LOKVOVYZ6HMGAPMKQOLMS3E6YFX","token_type":"Bearer","expires_in":86400,"refresh_token":"2T2A4TKD7N3XB4CU7MZAWTMV5JGYCBCX"}'
      )
    )
      .then((result) => {
        console.log(result);
        console.log("OURA YES!");

        localStorage.setItem("oura_data", JSON.stringify(result));
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  //
  // Start the authorization process.
  //
  const authorizeOura = () => {
    const url = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${REACT_APP_OURA_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foura_redirect`;

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Button onClick={fetchOuraData} variant="contained">
      {credentials ? "Done" : "Connect Device"}
    </Button>
  );
}

export default AuthorizeOuraButton;
