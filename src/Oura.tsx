import { Button } from "@mui/material";
import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
const { REACT_APP_OURA_CLIENT_ID } = process.env;


function Oura() {
  const [params, setParams] = useSearchParams();

  const onClick = () => {
    openInNewTab(
      `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${REACT_APP_OURA_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000/oura`
    );
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="App">
      {params.get('code') ? <h1>success</h1> : <Button onClick={onClick} variant="contained">Contained</Button>}
    </div>
  );
}

export default Oura;
