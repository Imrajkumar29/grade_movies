import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useParams, useNavigate } from "react-router-dom";
import * as React from 'react';
import { useState,useEffect } from 'react'; 

export function MovieDetails() {
  // console.log(useParams());
  const { id } = useParams();

  const [movie,setMovie]=useState([]);
  //const movie = movieList[id];
  
  useEffect(()=>{
    fetch(`https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  },[id]);

  const ratingstyle = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const navigate = useNavigate();
  console.log(id, movie);

  return (
    <div>
      <iframe width="100%"
        height="750"
        src={movie.trailer}
        title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingstyle} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button variant="contained" startIcon={<KeyboardBackspaceIcon />} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}
