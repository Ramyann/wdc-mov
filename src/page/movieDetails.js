import Navbar from "../components/nav";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {

  const [movies, setMovie] = useState([]);
  const location = useLocation()

  console.log(location)

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8bdeda7b475291e3bccffbed0b5321b3"
    )
      .then((resonse) => resonse.json())
      .then((json) => setMovie(json.results))
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movieDetails">
      <Navbar />
    
      <div className="movie_container" style={{display:"flex" ,width:"70%", margin:"20px auto", columnGap:"40px"}}>
        <div className="poster_img">
          <div className="movie_img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${location?.state?.movie?.poster_path})`,outline:"2px solid red", backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover",width:"300px",height:"400px"}}></div>
          <div className="movie_rating" ></div>
        </div>

        <div className="details" style={{display:"flex", flexDirection:"column", alignItems:"flex-start" }} >

          <div className="movie_title" style={{}}>{location?.state?.movie?.original_title}</div>

          <div className="movie_basic_details" style={{}}>
            {location?.state?.movie?.original_language} - 00 Minutes - {location?.state?.movie?.release_date}
          </div>

          <div className="movie_description" style={{textAlign: "left",}}>
           {location?.state?.movie?.overview}
          </div>

          <div className="movie_genre">Genre: </div>
          <button>Trailer</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetails;
