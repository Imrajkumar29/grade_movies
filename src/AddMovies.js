import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const movieValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required("why not fill this poster").min(4),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().min(4),
});

export function AddMovies({ movieList, setMovieList }) {
  // const[name,setName]=useState("");
  // const[poster,setPoster]=useState("");
  // const[rating,setSummary]=useState("");
  // const[summary,setRating]=useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log(newMovie);
      addMovie(newMovie);
    },
  });

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
    // const newMovie={
    //     name,
    //     poster,
    //     rating,
    //     summary,
    // };

    //Post method -fetch
    //1. method - POST
    //2data(newMovie)- body &JSON
    //3.Header -JSON
    fetch(`https://63a6dc12f8f3f6d4ab13a8d2.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => navigate("/movies"));
    // copy the movieList and then add newMovie to it
    // setMovieList([...movieList,newMovie]);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="name"
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />

      <TextField
        label="Poster"
        variant="outlined"
        type="text"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="poster"
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null
        }
      />
      <TextField
        label="Rating"
        variant="outlined"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="rating"
        type="text"
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null
        }
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : null}
      <TextField
        label="Summary"
        variant="outlined"
        type="text"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="summary"
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null
        }
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : null}
      <TextField
        label="Trailer"
        variant="outlined"
        type="text"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="trailer"
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : null
        }
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : null}
      <Button type="Submit" variant="contained">
        add movie
      </Button>
      <br></br>
    </form>
  );
}
