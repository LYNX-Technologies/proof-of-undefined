import "./styles/App.css";
import Login from './login';

window.Buffer = window.Buffer || require("buffer").Buffer

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
