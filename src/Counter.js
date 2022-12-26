import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
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
    {like -dislike >=10 ?<h2> The movie is awesome🎸</h2>:null}

    {/* conditional styling */}
    {/* <h2 style={messageStyle}> The movie is awesome🎸</h2> */}
    <IconButton 
    onClick={()=>setlike(like+1)}
    aria-label="like" 
    color="primary">
    <Badge badgeContent={like} color="primary">
    👍
    </Badge>

</IconButton>

<IconButton 
    onClick={()=>setdislike(dislike+1)}
    aria-label="dislike" 
    color="error">
    <Badge badgeContent={dislike} color="error">
👎
    </Badge>
</IconButton>
  </div>
    );
  }
  export {Counter};