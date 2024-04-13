import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./page/movieDetails";
import Home from "./page/home";
import P404 from "./page/404"
import "./assets/css/App.css";
import "./assets/css/style.css";
import Login from "./page/login";
import Movies from "./components/Movies";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie-details" element={<MovieDetails />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="*" element={<P404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
