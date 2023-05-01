import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom/dist";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/course" exact element={<Course />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="*" element={<h1 className="d-flex justify-content-center align-items-center bg-dark text-light" style={{ height: '100vh' }}>404 | Not Found</h1>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
