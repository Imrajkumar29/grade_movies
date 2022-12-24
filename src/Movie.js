import {Counter} from "./Counter.js";
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Movie({movie}){
  let [show,setShow] =useState(0);
    const ratingstyle ={
      color:movie.rating >=8.5 ?"green":"red",
    }
    return(
      <div className ="movie-container">
        <img src ={movie.poster} alt ={movie.name} className ="movie-poster"/>
        <div className="movie-specs">
      <h3 className="movie-name">{movie.name}
      <IconButton onClick={()=>setShow(!show)} aria-label="Toggle summary" color="primary">
        {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        </IconButton> 
      {show?<p className ="movie-summary">{movie.summary}</p>:null}
      </h3>
      <p style ={ratingstyle} className ="movie-rating">⭐{movie.rating}</p>
      </div>
      <Counter/>
    </div>
    );
  }
  export{Movie};
  
  