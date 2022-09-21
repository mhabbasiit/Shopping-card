import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
//import Home from "./components/Home";
// import Welcome from "./components/Welcome";
// import Event from "./components/Event";
// import Login from "./components/Login";
// import CarLIst from "./components/CarLIst";
// import ComA from "./components/TestCss/ComA";
// import ComB from "./components/TestCss/ComB";
// import Counter from "./components/Counter";
  import Register from "./components/Register";
//import Navtest from "./components/TestCss/Navtest";
//import Contact from "./components/Contact";
 import Header from "./components/Header";
 import Slideshow from './components/Slideshow';
import Card from './components/Card';
import Footer from './components/Footer';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navtest from "./components/Navtest";
import Nopage from './components/Nopage';
import data from "./data/Card.json";
// import Index2 from "./components/context/Index2";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Slideshow/>
        <Routes>
          <Route path="/" element={<Card data={data} />} />
          <Route path="Products" element={<Card data={data} />} />
          <Route exact path="/Products/:id" element={<Products data={data} />} />
          <Route path="Login" element={<Register />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
