import "./styles/App.css";
import Goals from "./Goals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OuraRedirectPage from "./OuraRedirect";
import Login from "./login";
import { ServerContext } from "./contexts/wallet";
import Dashboard from "./Dashboard";

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <div className="App">
      <ServerContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Goals" element={<Goals />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/oura_redirect" element={<OuraRedirectPage />} />
        </Routes>
      </BrowserRouter>
      </ServerContext>
    </div>
  );
}

export default App;
