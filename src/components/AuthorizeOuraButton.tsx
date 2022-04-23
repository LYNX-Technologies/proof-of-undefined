import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const { REACT_APP_OURA_CLIENT_ID } = process.env;

interface MeditationData {
  meditation_sessions: { date: string; duration: number }[];
}

/**
 * A page that is used to authorize Oura access.
 */
function AuthorizeOuraButton() {
  const [data, setData] = useState<MeditationData | null>(null);

  //
  // Fetch the data in local storage if it exists.
  //
  useEffect(() => {
    const d = localStorage.getItem("data");

    if (d) {
      return setData(JSON.parse(d));
    }
  }, []);

  //
  // Start the authorization process.
  //
  const authorizeOura = () => {
    const redirectUri =
      process.env.NODE_ENV === "development"
        ? "http%3A%2F%2Flocalhost%3A3000%2Foura_redirect"
        : "https%3A%2F%2Fproof-of-unknown.web.app%2Foura_redirect";

    const url = `https://cloud.ouraring.com/oauth/authorize?response_type=code&client_id=${REACT_APP_OURA_CLIENT_ID}&redirect_uri=${redirectUri}`;

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;

    //
    // Mock the meditation data.
    //
    const mock = {
      meditation_sessions: [
        {
          date: "2022-04-20",
          duration: 5,
        },
        {
          date: "2022-04-21",
          duration: 5,
        },
      ],
    };

    setData(mock);

    localStorage.setItem("data", JSON.stringify(mock));
  };

  return (
    <Button onClick={authorizeOura} variant="contained">
      {data ? "Connected" : "Connect Device"}
    </Button>
  );
}

export default AuthorizeOuraButton;
