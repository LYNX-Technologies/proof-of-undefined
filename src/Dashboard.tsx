import "./styles/App.css";
import { useEffect, useState } from "react";

import AuthorizeOuraButton from "./components/AuthorizeOuraButton";


function Dashboard() {
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

  return (
    <div className="App">
        {!credentials ? <AuthorizeOuraButton /> : <h1>Here there be data</h1>}
    </div>
  );
}

export default Dashboard;
