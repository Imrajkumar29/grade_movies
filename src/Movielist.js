import {Movie} from "./Movie.js";
import {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Movielist(){
 
  const [movieList,setMovieList]=useState([]);

  const getMovies=()=>{
    fetch("https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));
  };
    
  useEffect(()=>getMovies(),[]);

  const deleteMovie =(id)=>{
    console.log("deleting movie "+id);
    fetch(`https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies/${id}`,{
      method: "Delete",
    }).then(()=>getMovies());
  };
 const navigate =useNavigate();
    return(
        <div>
            <br></br>
             
        <div className='movie-list-container'>
        {movieList.map((mv)=>(<Movie key={mv.id}
         movie={mv} id ={mv.id}
         deleteButton = {<IconButton color ="error" onClick={()=>deleteMovie(mv.id)} aria-label="delete"><DeleteIcon/></IconButton>}
         editButton = {<IconButton sx={{marginLeft:"auto"}} color={"secondary"} aria-label="edit" 
         onClick={()=>navigate(`/movies/edit/${mv.id}`)}><EditIcon/></IconButton>}
         />
        ))}
        </div>
      </div>
    );
  }

  export {Movielist};
  