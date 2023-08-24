import * as React from "react";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/img/logo.png";
import { Link, useSearchParams } from "react-router-dom";
import img7 from "../assets/img/dayscount/android-logo.png";
import img9 from "../assets/img/dayscount/menu.png";
import img8 from "../assets/img/dayscount/android-logo (1).png";
export default function Home() {
  const [activeItem, setActiveItem] = useState("");
  
  const [showModal , setShowModal] = useState(false);
 
  const toggle = ()=>{
    setShowModal(!showModal)
  }
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setShowModal(false)

  };

 

  return (
    <>
      <header className="main-nav">
            <nav className="navbar">
              <div className="navbar-header">
                <button
                  onClick={toggle}
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  // data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand font-36-pla-reg-2" to="/">
                  <img width={150} src={logo} alt="logo" />
                </Link>
              </div>

              <div
                className={`collapse navbar-collapse ${
                  showModal
                    ? "collapse navbar-collapse in"
                    : "collapse navbar-collapse"
                }`}
                // id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <li
                    className={activeItem === "home" ? "active" : "menu"}
                    onClick={() => handleItemClick("home")}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={activeItem === "home" ? "active" : "menu"}
                    onClick={() => handleItemClick("categories")}
                  >
                    <Link to={{ pathname: "/", search: "?tab=category" }}>
                      Categories
                    </Link>
                  </li>
                  <li
                    className={activeItem === "contact" ? "active" : "menu"}
                    onClick={() => handleItemClick("contact")}
                  >
                    <Link to={{ pathname: "/", search: "?tab=our_product" }}>
                      Our Products
                    </Link>
                  </li>

                  <li
                    className={activeItem === "about" ? "active" : "menu"}
                    onClick={() => handleItemClick("about")}
                  >
                    <Link to={{ pathname: "/", search: "?tab=about_us" }}>
                      ABOUT US
                    </Link>
                  </li>
                  <li
                    className={activeItem === "about" ? "active" : "menu"}
                    onClick={() => handleItemClick("about")}
                  >
                    <Link to="/Contactus">Contact Us</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav dr-cart">
                  <li
                    className={activeItem === "about" ? "active" : "menu"}
                    onClick={() => handleItemClick("download")}
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=in.com.trendonrent.trendonrent"
                      target="_blank"
                      className="btn btn-download transparent text-white btndownload"
                    >
                      Download App <img src={img7} className="firstapp" />
                      {/* <img src={img8} className="secondapp" /> */}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
     
    </>
  );
}
