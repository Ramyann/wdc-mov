import "../assets/css/style.css"

const reviewFrame = () => {
  return (
    <section id="review-frame">
      <link rel="icon" type="image/x-icon" href="./images/footer-logo.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
      />
      <div className="non-active-review-frame"></div>

      <div className="active-review-frame">
        <div id="review-detail">
          <div>Review - Review - Review - Review</div>
          <div>Review - Review - Review - Review</div>
        </div>

        <div id="reviewer">
          <div id="user-frame">
            <div></div>
            <h4>Sakar Hamasaeed</h4>
          </div>

          <div className="stars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default reviewFrame;
