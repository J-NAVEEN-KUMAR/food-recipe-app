import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Random from "./Components/Random/Random";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="navbar" />
        <Routes>
          <Route path="/" element={<Home />} className="home" />
          <Route
            path="/categories"
            element={<Categories />}
            className="categories"
          />
          <Route path="/random" element={<Random />} className="random" />
        </Routes>
        <Footer className="footer"/>
      </Router>
    </div>
  );
}

export default App;
