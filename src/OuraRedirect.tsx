import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import axios, { AxiosRequestConfig } from "axios";
// import qs from "qs";
import { CircularProgress } from "@mui/material";

// const { REACT_APP_OURA_CLIENT_ID, REACT_APP_OURA_CLIENT_SECRET } = process.env;

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
      setDone(true);
    }
  }, [params]);

  // Fetch an access token from an access code.
  //   const fetchAccessToken = (code: string) => {
  //     const config: AxiosRequestConfig = {
  //       method: "POST",
  //       headers: { "content-type": "application/x-www-form-urlencoded" },
  //       data: qs.stringify({
  //         code: code,
  //         grant_type: "authorization_code",
  //         redirect_uri: "http://localhost:3000/oura_redirect",
  //         client_id: REACT_APP_OURA_CLIENT_ID,
  //         client_secret: REACT_APP_OURA_CLIENT_SECRET,
  //       }),
  //       url: "https://cloud.ouraring.com/oauth/token",
  //     };

  //     axios(config)
  //       .then((resp) => {
  //         setCredentials(resp.data);

  //         // Store the credentials in local storage.
  //         localStorage.setItem("oura_credentials", JSON.stringify(resp.data));
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   };

  return (
    <div className="App">{done ? <h2>Done</h2> : <CircularProgress />}</div>
  );
}

export default OuraRedirectPage;
