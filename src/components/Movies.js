import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import "../assets/css/Movie.css";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "../components/footer";
import { setDoc } from "firebase/firestore";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8bdeda7b475291e3bccffbed0b5321b3"
    )
      .then((resonse) => resonse.json())
      .then((json) => setMovieList(json.results))
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const addMovie = async () => {
    try {
      await setDoc();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movieList);

  return (
    <div className="Movie-container">
      <Nav />
      <Grid
        container
        rowSpacing={2}
        columnGap={1}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        {movieList.map((movie) => {
          return (
            <Grid item xs={1.5}>
              <Link to={"/movie-details"} state={{ movie: movie }}>
                <Box>
                  <Card>
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="300"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></CardMedia>
                    </CardContent>
                  </Card>
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};

export default Movies;
