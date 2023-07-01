import React from "react";
import "../src/styles/app.scss"
import Header from "./components/Header";
import Home from "./components/Home";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </Router>
    
    
  );
}

export default App;
