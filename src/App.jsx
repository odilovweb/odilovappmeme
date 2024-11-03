import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;