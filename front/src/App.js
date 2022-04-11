import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Test from "./routes/Test/Test";
import About from "./routes/About/About";
import BookDetails from "./routes/BookDetails/BookDetails";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import SearchBooks from "./routes/SearchBooks/SearchBooks";
import Cart from "./routes/Cart/Cart";
import BrowseBooks from "./routes/BrowseBooks/BrowseBooks";
import Profile from "./routes/Profile/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<BrowseBooks />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-detail/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:keyword" element={<SearchBooks />} />
        <Route path="/test" element={<Test />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile/:name" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
