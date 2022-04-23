import "./styles/App.css";
import Goals from "./Goals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OuraRedirectPage from "./OuraRedirect";
import Login from './login';
import { ServerContext } from "./contexts/wallet";

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <ServerContext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Goals" element={<Goals />} />
            <Route path="/oura_redirect" element={<OuraRedirectPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ServerContext>
  );
}

export default App;
