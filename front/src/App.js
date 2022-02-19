import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import BookDetails from "./routes/BookDetails/BookDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/book-detail/:id" element= {<BookDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
