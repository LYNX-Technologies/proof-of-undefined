import "./styles/App.css";
import Login from './login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

window.Buffer = window.Buffer || require("buffer").Buffer

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/privacy" element={<p>HELLO!</p>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
