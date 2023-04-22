import TextField from '@mui/material/TextField';
import {useState,useEffect} from "react";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate,useParams } from "react-router-dom";

const movieValidationSchema=yup.object({
    name: yup.string().required(),
    poster : yup.string().required("why not fill this poster").min(4),
    rating: yup.number().required().min(0).max(10),
    summary:yup.string().required().min(20),
    trailer:yup.string().required().min(4),
});

export function EditMovie({movieList,setMovieList}){
    // const[name,setName]=useState("");
    // const[poster,setPoster]=useState("");
    // const[rating,setSummary]=useState("");
    // const[summary,setRating]=useState("");

    
  const { id } = useParams();

  const [movie,setMovie]=useState(null);
  //const movie = movieList[id];
  
  useEffect(()=>{
    fetch(`https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  },[id]);

  return movie?<EditMovieForm movie ={movie} /> : <h2>loading ...</h2>;
}
  export function EditMovieForm({movie}){
    const formik =useFormik({
        initialValues:{
            name:movie.name,
            poster:movie.poster,
            rating:movie.rating,
            summary:movie.summary,
            trailer:movie.trailer,
        },
    validationSchema :movieValidationSchema,
        onSubmit: (updatedMovie)=>{
            console.log(updatedMovie);
            updateMovie(updatedMovie);
        }
    })

    const navigate = useNavigate();

    const updateMovie=(updatedMovie)=>{
        // const updatedMovie={
        //     name,
        //     poster,
        //     rating,
        //     summary,
        // };

        //Put method -fetch
        //1. method - PUT
        //2data(updatedMovie)- body &JSON
        //3.Header -JSON
        fetch(`https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies/${movie.id}`,{
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
                'Content-type':"application/json",
            },
          }).then(()=>navigate("/movies"));    
        // copy the movieList and then add updatedMovie to it
       // setMovieList([...movieList,updatedMovie]);
    };
    return(      
          <form onSubmit ={formik.handleSubmit} className="add-movie-form">
                <TextField label ="Name" variant="outlined"
                 type ="text"
                value={formik.values.name}
                onChange ={formik.handleChange}
                onBlur ={formik.handleBlur}
                name="name"
                error ={formik.touched.name && formik.errors.name}
                helperText = {formik.touched.name && formik.errors.name? formik.errors.name:null}
                />
               
                 <TextField label="Poster" variant="outlined"
                  type ="text"
                  value={formik.values.poster}
                  onChange ={formik.handleChange}
                  onBlur ={formik.handleBlur}
                  name="poster"
                  error ={formik.touched.poster && formik.errors.poster}
                  helperText = {formik.touched.poster && formik.errors.poster? formik.errors.poster:null}
                  />
                 <TextField label="Rating" variant="outlined"
                   value={formik.values.rating}
                   onChange ={formik.handleChange}
                   onBlur ={formik.handleBlur}
                   name="rating"
                   type ="text"
                   error ={formik.touched.rating && formik.errors.rating}
                   helperText = {formik.touched.rating && formik.errors.rating? formik.errors.rating:null}
                   />
                   {formik.touched.rating && formik.errors.rating? formik.errors.rating:null}
                  <TextField label="Summary" variant="outlined"
                    type ="text"
                    value={formik.values.summary}
                    onChange ={formik.handleChange}
                    onBlur ={formik.handleBlur}
                    name="summary"
                    error ={formik.touched.summary && formik.errors.summary}
                   helperText = {formik.touched.summary && formik.errors.summary? formik.errors.summary:null}
                    />
                {formik.touched.summary && formik.errors.summary? formik.errors.summary:null} 
                <TextField label="Trailer" variant="outlined"
                    type ="text"
                    value={formik.values.trailer}
                    onChange ={formik.handleChange}
                    onBlur ={formik.handleBlur}
                    name="trailer"
                    error ={formik.touched.trailer && formik.errors.trailer}
                   helperText = {formik.touched.trailer && formik.errors.trailer? formik.errors.trailer:null}
                    />
                {formik.touched.trailer && formik.errors.trailer? formik.errors.trailer:null} 
                  <Button type ="Submit" variant="contained"  color="success">Save</Button>
                  <br></br>
          </form>
      
    );
  };