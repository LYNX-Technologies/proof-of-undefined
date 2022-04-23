import { Button } from "@mui/material";
import { useEffect, useState } from "react";

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
    const c = localStorage.getItem('oura_credentials')

    if (c) {
      return setCredentials(JSON.parse(c));
    }
  }, [])

  //
  // Start the authorization process.
  //
  const authorizeOura = () => {
    const url = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${REACT_APP_OURA_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000/oura`;

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Button onClick={authorizeOura} variant="contained">{credentials ? "Done" : "Authorize Oura"}</Button>
  );
}

export default AuthorizeOuraButton;
