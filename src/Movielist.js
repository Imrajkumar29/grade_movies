import {Movie} from "./Movie.js";


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
  