import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const { REACT_APP_OURA_CLIENT_ID, REACT_APP_OURA_CLIENT_SECRET } = process.env;

// The Oura credentials. Saved in localStorage.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Credentials = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};

/**
 * The Oura redirect page.
 *
 * When the process is finished, [Credentials] will be stored in local storage
 * and can be retrieved using localStorage.getItem('oura_credentials')
 */
function OuraRedirectPage() {
  const [params] = useSearchParams();
  const [done, setDone] = useState(false);

  //
  // See if we are being redirected from the Oura OAuth process.
  //
  useEffect(() => {
    const code = params.get("code");

    if (code) {
      // Hack: set the oura process to success.
      setDone(true);
    }
  }, [params]);

  // Commenting this out due to cors issues.
  //
  // Fetch an access token from an access code.
  // const fetchAccessToken = (code: string) => {
  //   const config: AxiosRequestConfig = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //     },
  //     data: qs.stringify({
  //       code: code,
  //       grant_type: "authorization_code",
  //       redirect_uri: "http://localhost:3000/oura_redirect",
  //       client_id: REACT_APP_OURA_CLIENT_ID,
  //       client_secret: REACT_APP_OURA_CLIENT_SECRET,
  //     }),
  //     url: "https://cloud.ouraring.com/oauth/token",
  //   };

  //   axios(config)
  //     .then((resp) => {
  //       setCredentials(resp.data);

  //       // Store the credentials in local storage.
  //       localStorage.setItem("oura_credentials", JSON.stringify(resp.data));

  //       // Fetch Oura data.
  //       fetchOuraData(resp.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="App">
      {done ? <h2>You can close this page</h2> : <CircularProgress />}
    </div>
  );
}
export default OuraRedirectPage;
