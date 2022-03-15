import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Random from "./Components/Random/Random";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Hello World!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
