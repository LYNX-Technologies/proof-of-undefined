import "./App.css";
import Oura from "./Oura";
import OuraRedirect from "./OuraRedirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h2>NFTs yo</h2>
          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/oura" element={<Oura />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
