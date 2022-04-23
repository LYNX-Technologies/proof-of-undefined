import "./styles/App.css";
import Modal from "./components/modal";
import Form from "./components/form";
import OuraRedirectPage from "./OuraRedirect";
import "./styles/App.css";

function Login() {
  return (
    <div className="App">
      <div>
        <h1>Health.Wealth</h1>
        <Modal />
        <Form />
        <OuraRedirectPage />
      </div>
    </div>
  );
}

export default Login;
