import React from "react";
import "../src/styles/app.scss"
import Header from "./components/Header";
import Home from "./components/Home";
import {Toaster} from "react-hot-toast"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Toaster/>

    </Router>
    
    
  );
}

export default App;
