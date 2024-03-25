import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
