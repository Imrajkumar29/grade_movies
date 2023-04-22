import {Counter} from "./Counter.js";
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Movie({movie,id,deleteButton,editButton}){
  let [show,setShow] =useState(0);
    const ratingstyle ={
      color:movie.rating >=8.5 ?"green":"red",
    }
    const navigate =useNavigate();
    return(
      <Card className ="movie-container">
        <img src ={movie.poster} alt ={movie.name} className ="movie-poster"/>
        <CardContent>
        <div className="movie-specs">
      <h2 className="movie-name">{movie.name}</h2>
      <p style ={ratingstyle} className ="movie-rating">⭐{movie.rating}</p>
      </div>
       <IconButton onClick={()=>setShow(!show)} aria-label="Toggle summary" color="primary">
        {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        </IconButton>
      {show?<p className ="movie-summary">{movie.summary}</p>:null} 
      <IconButton onClick={()=>navigate(`/movies/${id}`)} aria-label="" color="primary">
        <InfoIcon/> -{id}
        </IconButton>
        </CardContent>
        <CardActions>
      <Counter/>{editButton}{deleteButton}
      </CardActions>
    </Card>
    );
  }
  export{Movie};
  
  