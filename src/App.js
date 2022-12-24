import img1 from './img/1.avif';
import './App.css';
import {useState} from "react";
import {Movielist} from "./Movielist.js";
import {Movie} from "./Movie.js";

function App() {
  return (
     <div className="App">
      <Movielist/>  
    </div>
  );
}


export default App;
