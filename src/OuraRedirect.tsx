import axios, { AxiosRequestConfig } from 'axios';
import { httpsCallable } from "firebase/functions";
import qs from 'qs';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { functions } from "./config/firebase";


const { REACT_APP_OURA_CLIENT_ID, REACT_APP_OURA_CLIENT_SECRET } = process.env;

// The Oura credentials. Saved in localStorage.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Credentials = {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: string
}

/**
 * The Oura redirect page.
 * 
 * When the process is finished, [Credentials] will be stored in local storage
 * and can be retrieved using localStorage.getItem('oura_credentials')
 */
function OuraRedirectPage() {
  const [params] = useSearchParams();
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

  // Fetch an access token from an access code.
  const fetchAccessToken = (code: string) => {
    const config: AxiosRequestConfig = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({ 
        code: code,
        grant_type:	"authorization_code",
        redirect_uri:	"http://localhost:3000/oura_redirect",
        client_id: REACT_APP_OURA_CLIENT_ID,
        client_secret: REACT_APP_OURA_CLIENT_SECRET,
    }),
      url: 'https://cloud.ouraring.com/oauth/token',
    };

    axios(config).then((resp) => {

      // setCredentials(resp.data);

      // Store the credentials in local storage.
      // localStorage.setItem('oura_credentials', JSON.stringify(resp.data));

      const storeOuraKey = httpsCallable(functions, 'storeOuraKey');
      storeOuraKey(resp.data)
      .then((result) => { 
        console.log("OURA YES!");
    })
    .catch((error) => {
      alert(error);
    });
    })
      .then((result) => {
        console.log("YES!");
    })
    .catch((error) => {
      alert(error);
    });
  }

  return (
    <div className="App">
      {credentials ? <h2>Done</h2> : <h2>Loading...</h2>}
    </div>
  );

  }
export default OuraRedirectPage;
