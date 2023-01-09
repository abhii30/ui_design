import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Book from "./Components/book";
import CheckIn from "./Components/checkIn";
import Manage from "./Components/manage";
import Navbar from "./Components/Navbar/navbar";
import SignUp from "./Components/signUp";
import SignIn from "./Components/signIn";
import Markers from "./Components/Markers/markers";
import Places from "./Components/Places/places";
import About from "./Components/About/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Markers />
        <Places />
        <About />
        <Routes>
          <Route path="/book" element={<Book />} />
          <Route path="/checkIn" element={<CheckIn />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
