import TextField from '@mui/material/TextField';
import {useState} from "react";
import Button from '@mui/material/Button';

export function AddMovies({movieList,setMovieList}){
    const[name,setName]=useState("");
    const[poster,setPoster]=useState("");
    const[rating,setSummary]=useState("");
    const[summary,setRating]=useState("");
  
    const addMovie=()=>{
        const newMovie={
            name,
            poster,
            rating,
            summary,
        };
        // copy the movieList and then add newMovie to it
        setMovieList([...movieList,newMovie]);
    };
    return(
      <div>
          <div className="add-movie-form">
                 <TextField id="Name" label="Name" variant="outlined"
                  onChange ={(event)=>setName(event.target.value)} type ="text"/>
                 <TextField id="Poster" label="Poster" variant="outlined"
                  onChange ={(event)=>setPoster(event.target.value)} type ="text"/>
                 <TextField id="Rating" label="Rating" variant="outlined"
                  onChange ={(event)=>setRating(event.target.value)} type ="text"/>
                  <TextField id="Summary" label="Summary" variant="outlined"
                   onChange ={(event)=>setSummary(event.target.value)} type ="text"/>
                  <Button variant="contained" onClick={addMovie}>add movie</Button>
                  <br></br>
          </div>
      </div>
    );
  };