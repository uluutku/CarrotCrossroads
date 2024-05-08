import "./LoadingAnimaton.css";
import { useState } from "react";
import runningRabbitGif from "./assets/rabbit-run.gif"; // Adjust the path as necessary

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after 3 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className={`loading-overlay ${isLoading ? "show" : "hide"}`}>
      <div className="loading-container">
        <img
          className="loading-animation"
          src={runningRabbitGif}
          alt="Loading..."
        />
      </div>
      <div className="loading-text">
        <h1></h1>
      </div>
    </div>
  );
};

export default LoadingAnimation;
