import "../assets/css/App.css";
import "../assets/css/style.css";
import React from "react";
import Nav from "../components/nav";
import Posters from "../components/posters";
import ReviewFrame from "../components/reviewFrame";
import Footer from "../components/footer";
import RateForm from "../components/rateForm";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <header>
        <div id="movie-slider">
          <div class="active" id="first-movie"></div>
          <div id="second-movie"></div>
          <div id="third-movie"></div>
        </div>

        <div id="movie-details">
          <section>
            <div>
              <h4>Action, Sci-Fi</h4>
              <h2>Dune 2</h2>
            </div>

            <aside>
              <div></div>
              <span>4.5</span>
            </aside>
          </section>

          <div>
            <p>
              American epic science fiction film directed and co-produced by
              Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts.
            </p>
            <div id="direction"></div>
            <span id="watch-movie">Watch Movie</span>
          </div>
        </div>
      </header>

      <main>
        <section id="posters">
          <Posters />
          <Posters />
          <Posters />
          <Posters />
        </section>
      </main>

      <div id="Reviews">
        <ReviewFrame />
        <ReviewFrame />
        <ReviewFrame />
      </div>

      <Footer />
      <RateForm />

      <span id="blur-background"></span>
    </div>
  );
};

export default Home;
