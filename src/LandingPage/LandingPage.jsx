import { Link } from "react-router-dom";
import LoadingAnimation from "../LoadingAnimation";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <LoadingAnimation />
      <section className="hero-section">
        <div className="hero-title-container">
          <h1 className="hero-title-text">Welcome to Carrot Crossroads!</h1>
        </div>
        <div className="info-card left">
          <h2>Embark on Your Journey</h2>
          <p>
            Make choices that define your path in the magical world of Carrot
            Crossroads.
          </p>
          <Link to="/game">
            <button className="start-game-btn">Start Game</button>
          </Link>
        </div>
      </section>
      <section className="features-section">
        <div className="info-card right">
          <h2>Explore New Features</h2>
          <p>
            Dive into unique challenges and magical adventures awaiting you!
          </p>
        </div>
      </section>
      <section className="reviews-section">
        <div className="info-card left">
          <h2>What Players Say</h2>
          <p>
            Read first-hand accounts of the thrilling experiences players have
            in our game.
          </p>
        </div>
        <div className="review-container">
          <div className="review-card">
            <h3>Utku</h3>
            <p>“Bence iyi.”</p>
          </div>
          <div className="review-card">
            <h3>Oltan</h3>
            <p>“👎.”</p>
          </div>
          <div className="review-card">
            <h3>Elise</h3>
            <p>
              “A fantastic game with great depth. Every decision opens up new
              paths and possibilities!”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
