import "./styles/App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from './components/modal';
import OuraRedirectPage from "./OuraRedirect";


function Login() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Health. Wealth</h1>
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

export default Login;
