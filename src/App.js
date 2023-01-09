import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Book from "./Components/book";
import CheckIn from "./Components/checkIn";
import Manage from "./Components/manage";
import Navbar from "./Components/navbar";
import SignUp from "./Components/signUp";
import SignIn from "./Components/signIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
