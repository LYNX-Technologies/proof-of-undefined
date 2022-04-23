import "./styles/App.css";
import Oura from "./Oura";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/form';
import Modal from './components/modal';
import Button from '@mui/material/Button';


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
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/oura" element={<Oura />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
