import "./styles/App.css";
import OuraRedirect from "./OuraRedirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h2>NFTs yo</h2>
          <Routes>
          <Route path="/" element={<Dashboard />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/oura_redirect" element={<OuraRedirect />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
