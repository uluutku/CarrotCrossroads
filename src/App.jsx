import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Engine from "./GameEngine/Engine";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<Engine />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
