import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return ( 
  <div className="App">
    <div className="container">
    <Weather />
    <footer>
      This project was codes by Masana Mabasa and is{" "}
      <a 
       href="https://github.com/masana-hub/react-weather-app" 
       target="_blank"
      >
       open-source on GitHub
      </a>
    </footer>
    </div>
    </div>
    );
}

