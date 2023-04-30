import React, { Component } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom/dist";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Routes>
              <Route path="/" exact element={<Home />}/>
              <Route path="/about" exact element={<About />} />
              <Route path="/course" exact element={<Course />} />
              <Route path="/login" exact element={<Login />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
