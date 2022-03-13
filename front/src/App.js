import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import BookDetails from "./routes/BookDetails/BookDetails";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import SearchBooks from "./routes/SearchBooks/SearchBooks";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-detail/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:keyword" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
