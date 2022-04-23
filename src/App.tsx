import "./styles/App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/form';
import Modal from './components/modal';
import Button from '@mui/material/Button';
import OuraRedirectPage from "./OuraRedirect";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h2>NFTs yo</h2>
          <Form />
          <Button variant="contained">Connect Wallet</Button>
          <Modal />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/oura_redirect" element={<OuraRedirectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
