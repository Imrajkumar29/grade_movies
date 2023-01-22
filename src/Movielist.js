import {Movie} from "./Movie.js";
import {useEffect,useState} from "react";

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

    return(
        <div>
            <br></br>
             
        <div className='movie-list-container'>
        {movieList.map((mv)=>(<Movie key={mv.id}
         movie={mv} id ={mv.id}
         deleteButton = {<button onClick={()=>deleteMovie(mv.id)}>Delete</button>}
         />
        ))}
        </div>
      </div>
    );
  }

  export {Movielist};
  