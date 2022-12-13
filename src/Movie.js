import {Counter} from "./Counter.js";
function Movie({movie}){
    
    const ratingstyle ={
      color:movie.rating >=8.5 ?"green":"red",
    }
    return(
      <div className ="movie-container">
        <img src ={movie.poster} alt ={movie.name} className ="movie-poster"/>
        <div className="movie-specs">
      <h2 className="movie-name">{movie.name}</h2>
      <p style ={ratingstyle} className ="movie-rating">⭐{movie.rating}</p>
      </div>
      <p className ="movie-summary">{movie.summary}</p>
      <Counter/>
    </div>
    );
  }
  export{Movie};
  
  