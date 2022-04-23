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
      {credentials ? <h2>Data</h2> : <AuthorizeOuraButton />}
    </div>
  );
}

export default Dashboard;