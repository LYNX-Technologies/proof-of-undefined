import { Button } from "@mui/material";
import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const { REACT_APP_OURA_CLIENT_ID, REACT_APP_OURA_CLIENT_SECRET } = process.env;

// The Oura credentials. Saved in localStorage.
type Credentials = {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: string
}

/**
 * A page that is used to authorize Oura access.
 * When the process is finished, [Credentials] will be stored in local storage
 * and can be retrieved using localStorage.getItem('oura_credentials')
 */
function Oura() {
  const [params, setParams] = useSearchParams();
  const [credentials, setCredentials] = useState(null);

  //
  // Fetch the credentials in local storage if they exist.
  //
  useEffect(() => {
    const c = localStorage.getItem('oura_credentials')

    if (c) {
      return setCredentials(JSON.parse(c));
    }
  }, [])

  //
  // See if we are being redirected from the Oura OAuth process.
  //
  useEffect(() => {
    const code = params.get('code')

    if (code) {
      fetchAccessToken(code);
    }
  }, [params])

  // Start the authorization process.
  const authorizeOura = () => {
    const url = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${REACT_APP_OURA_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000/oura`;

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  // Fetch an access token from an access code.
  const fetchAccessToken = (code: string) => {
    const config: AxiosRequestConfig = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({ 
        code: code,
        grant_type:	"authorization_code",
        redirect_uri:	"http://localhost:3000/oura",
        client_id: REACT_APP_OURA_CLIENT_ID,
        client_secret: REACT_APP_OURA_CLIENT_SECRET,
    }),
      url: 'https://cloud.ouraring.com/oauth/token',
    };

    axios(config).then((resp) => {
      setCredentials(resp.data);

      // Store the credentials in local storage.
      localStorage.setItem('oura_credentials', JSON.stringify(resp.data));
    })
    .catch((error) => {
      alert(error);
    });
  }

  return (
    <div className="App">
      {credentials ? <h2>Done</h2> : params.get('code') ? <h1>Loading...</h1> : <Button onClick={authorizeOura} variant="contained">Authorize Oura</Button>}
    </div>
  );
}

export default Oura;
