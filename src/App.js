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

//hooks
function Counter(){
  //const[t1,t2]=dbl(10);
 
  let [like,setlike] =useState(0);
  let [dislike,setdislike] =useState(0);
  const likeStyle= {
    color :like >=10?"green":"black",
    //fontWeight:"bold",
  } ;
  const dislikeStyle= {
    color :dislike >=10?"red":"black",
    //fontWeight:"bold",
  } ;
  const messageStyle ={
    display :like-dislike>=10 ?"block":"none",
  };
  return(
<div>
  {/* onClick ->camelCase */}
  {/* conditional rendering -> this is preferred over conditional styling as this doesn't occupy dom*/}
  {like -dislike >=10 ?<h2> you are awesome🎸</h2>:null}
  {/* conditional styling */}
  {/* <h2 style={messageStyle}> you are awesome🎸</h2> */}
  <button style ={likeStyle} onClick={()=>setlike(like+1)}>like👍 {like}</button>
  <button style ={dislikeStyle} onClick={()=>setdislike(dislike+1)}>dislike😏 {dislike}</button>
</div>
  );
}

export default App;
