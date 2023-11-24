import React from "react";
import "./styles.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import WeatherApp from "./WeatherApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/WeatherApp" element={<WeatherApp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}
