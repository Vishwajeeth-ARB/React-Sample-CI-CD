import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
