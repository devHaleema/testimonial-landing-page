import React from "react"; 
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Footter from "./components/pages/Footter";


function App() {
  return (
      <div className="container content">
        <Navbar />
        <Home />
        <Footter />
      </div>
  );
}
export default App;