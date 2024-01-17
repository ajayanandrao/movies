import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import Home from "./Home/Home";
import MoviePage from "./Home/MoviePage/MoviePage";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Router basename='/movies'>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:id' element={<MoviePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
