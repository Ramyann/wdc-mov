import "../assets/css/style.css";

const RateForm = () => {
  return (
    <div id="rate-form">
      <div id="review-form-title">
        <h2>Review Movie</h2>
        <h4>bla bla bla</h4>
      </div>

      <div id="review-comment">
        <h3>Review</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="Write your review here"
        ></input>
      </div>

      <div id="review-stars">
        <h4></h4>
        <div id="form-rate-stars" className="rating">
          <input value="1" name="rating" id="star1" type="radio" />
          <label for="star1"></label>
          <input value="2" name="rating" id="star2" type="radio" />
          <label for="star2"></label>
          <input value="3" name="rating" id="star3" type="radio" />
          <label for="star3"></label>
          <input value="4" name="rating" id="star4" type="radio" />
          <label for="star4"></label>
          <input value="5" name="rating" id="star5" type="radio" />
          <label for="star5"></label>
        </div>
      </div>

      <div id="form-rate-buttons">
        <button id="done-review">Done</button>
        <button id="cancel-review">Cancel</button>
      </div>
    </div>
  );
};

export default RateForm;
