import "./styles/App.css";
import Modal from "./components/modal";
import Form from "./components/form";
import "./styles/App.css";

function Login() {
  return (
    <div className="App">
      <div>
        <h1>Health.Wealth</h1>
        <Modal />
        <Form />
      </div>
    </div>
  );
}

export default Login;
