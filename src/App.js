import img1 from './img/1.avif';
import './App.css';
import {useState} from "react";
import {Movielist} from "./Movielist.js";
import {Movie} from "./Movie.js";
import {
  Routes,
  Route,
Link} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import { Home } from '@mui/icons-material';

function App() {
  return (
     <div className="App"> 

    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/movies"> Movies</Link>
      </li>
    </ul>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={  <Movielist/> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes> 
    </div>
  );
}
//https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies
function NotFound()
{
  return (
  <div>
    <h1>404 not found</h1>
  </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Welcome to the Movie app</h1>
    </div>
  );

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });  
  return (
    <ThemeProvider theme={darkTheme}>
    </ThemeProvider>
  );
}

export default App;
