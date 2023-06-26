import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes";
import Trainers from "./pages/Trainers/Trainers";
import Contact from "./pages/Contact/Contact";
import Footer from "./assets/components/Footer/Footer"
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="*" element={<ErrorPage/>} />*/}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
