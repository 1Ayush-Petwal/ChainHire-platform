import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Example component for home page
import Apply from "./components/Job"; // Example component for apply page
import Post from "./components/Postings"; // Example component for services page
import SignIn from "./components/Signin";
import CreatePost from "./components/CreatePost";
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/services" element={<Post/>} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
