import "./styles/App.css";
import { BrowserRouter} from "react-router-dom";


function Goals() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Goals</h1>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Goals;
