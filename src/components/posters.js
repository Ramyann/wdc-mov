import React from "react";
import RateForm from "./rateForm";
import "../assets/css/style.css"

const posters = () => {

  return (
    <div>
      <link rel="icon" type="image/x-icon" href="./images/footer-logo.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
      />

      <div className="poster" id="first-poster">
        <div id="rate-platforms">
          <div id="roten"></div>
          <div className="shape"></div>
          <div id="roten-rate">%97</div>
          <div id="imdb"></div>
          <div className="shape"></div>
          <div id="imdb-rate">8.3</div>
        </div>

        <h2>Action, Sci-Fi</h2>
        <button onClick={
          () => {
          }
        }>Rate</button>
      </div>
      <h3>INTERSTELLAR</h3>

      <RateForm />

    </div>

  );
};

export default posters;
