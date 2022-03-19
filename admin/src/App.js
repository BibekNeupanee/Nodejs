import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard/Dashboard";
import Settings from "./routes/Settings/Settings";
import Test from "./routes/Test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
