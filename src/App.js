import React,{useState} from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import "./assets/style.css"
import "./assets/element.css";
import "./assets/header.css";
import "./assets/footer.css";
import "./assets/blog.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Loader from "./component/loader";
import Termcondition from "./component/Termcondition";
import Policy from "./component/Policy";
import Category from "./component/Category";
import Product from "./component/Product";
import PageUnavailable from "./component/PageUnavailable";
import Contactus from "./component/Contactus";

function App() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  return (
    <div className="App" >
        <Router>
        <Routes>
        <Route exact path='*' element={<PageUnavailable/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Termcondition' element={<Termcondition/>}></Route>
        <Route exact path='/Policy' element={<Policy/>}></Route>
        <Route exact path='/Category/:categoryId' element={<Category/>}></Route>
        <Route exact path='/Product/:productId' element={<Product/>}></Route>
        <Route exact path='/Contactus' element={<Contactus/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
