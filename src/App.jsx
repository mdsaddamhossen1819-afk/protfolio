import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./commponents/Navbar";
import Footer from "./commponents/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import CV from "./pages/PageCv";
import Projects from "./pages/Project";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    
    <Routes>
      <Route path="/" element={<Hero/>}>
      </Route>

      <Route path="/about" element={<About></About>}>
      </Route>

      <Route path="/contact" element={<Contact/>}>
      </Route>

      <Route path="/skills" element={<Skills></Skills>}>
      </Route>

      <Route path="/pageCv" element={<CV></CV>}></Route>

      <Route path="/projects" element={<Projects></Projects>}></Route>


      

    </Routes>
    <Footer></Footer>

    </BrowserRouter>
  );
};

export default App;