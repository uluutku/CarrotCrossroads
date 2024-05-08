import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<MoviesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
