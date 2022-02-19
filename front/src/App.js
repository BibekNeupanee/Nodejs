import "./App.css";
import BookList from "./components/BookList/BookList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
function App() {
  return (
    <div className="App">
      {/* <Header/>
    <BookList/>
    <Footer/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
