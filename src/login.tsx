import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from './components/modal';
import Form from './components/form';
import OuraRedirectPage from "./OuraRedirect";


function Login() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Health.Wealth</h1>
          <Modal />
          <Form />
          <Routes>
            <Route path="/oura_redirect" element={<OuraRedirectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Login;
