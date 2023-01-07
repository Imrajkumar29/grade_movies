import {Movie} from "./Movie.js";
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Movielist({movieList}){
  
    return(
        <div>
            <br></br>
             
        <div className='movie-list-container'>
        {movieList.map((mv,index)=>(<Movie key={index} movie={mv} id ={index}/>
        ))}
        </div>
      </div>
    );
  }

  export {Movielist};
  