import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
