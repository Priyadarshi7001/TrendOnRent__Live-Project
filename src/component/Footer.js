import * as React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user has scrolled down 200 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="main-footer" id="Contact">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 item1 text-left">
                <a href="index.html" className="font-36-pla-reg-2">
                  <img src={logo} alt="logo" width={150} />
                </a>
                <p>
                  Renting dresses has become a popular and convenient option,
                  and Trend on rent is the ultimate choice. With a wide
                  selection of designer dresses Trend on rent takes the stress
                  out of choosing the perfect outfit. Their service allows you
                  to enjoy wearing stunning dresses without the commitment of
                  buying them. Trend on rent is the go-to destination for
                  hassle-free and stylish rentals, making it the best choice for
                  any occasion.
                </p>
                <div className="get-touch">
                  <ul
                    className="list-unstyled d-flex text-left"
                    style={{ display: "flex" }}
                  >
                    <li>
                      <a target="_blank" href="https://www.facebook.com/profile.php?id=100094656072316">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/trendonrent_official/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                  
                   
                  </ul>
                </div>
              </div>

              {/* <div className="col-md-2  item3 text-left">
				<h3 className="font-18-pla-reg-2">SERVICES</h3>
				<ul className="list-unstyled ">
					<li><a href="">Booking</a></li>
					<li><a href="">Renting</a></li>
					<li><a href="">Retail</a></li>
					<li><a href="">Listing</a></li>
				</ul>
			</div> */}
              <div className="col-md-4 item4 col-xs-6 " style={{ padding: "0 114px" }}>
                <h3 className="font-18-pla-reg-2 text-left">COMPANY</h3>
                <ul className="list-unstyled text-left ">
                  <li className="footercontent"  >
                    <Link  to={{ pathname: '/', search:'?tab=about_us' }} className="text-left footercontent1">
                      About Us
                    </Link>
                  </li>
                  <li className="footercontent">
                    <Link to="/Termcondition" className="text-left footercontent1">
                      Terms and Condition
                    </Link>
                  </li>
                  <li className="footercontent">
                    <Link to="/Policy" className="text-left footercontent1">
                    Privacy Policy
                    </Link>
                  </li>
                  <li className="footercontent">
                    <Link to="/Contactus" className="text-left footercontent1">
                   Contact Us
                    </Link>
                  </li>
                  {/* <li><a href="" className='text-left'>Contact Us</a></li> */}
                </ul>
              </div>
              <div className="col-md-4 col-xs-6 item5 text-left footercontent1">
                <h3 className="font-18-pla-reg-2">CONTACT </h3>
                <ul className="list-unstyled contact ">
                  <li className="map-marker">
                    <p>
                      Shop No-16, Ground Floor, Wing-I,<br/>
                     Thakkar House 2418,East Street,<br/>1000 Oaks Lane,
                     Opposite to World of Toys,<br/>
                       Camp, Pune, 411001.
                    </p>{" "}
                  </li>
                  <li className="map-location footercontent">
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/GLFPt25K4y85QwbK7"
                    >
                      <p className="footercontent1" >View Our Location</p>
                    </a>
                  </li>
                  <li className="phone footercontent">
                  <a
                      target="_blank"
                      href="tel:8554855433"
                    >
                   <p  className="footercontent1"> +91 8554855433</p></a>
                  </li>
                  <li className="mobile footercontent">
                  <a
                      target="_blank"
                      href="tel:9322985234" 
                    >
                    <p className="footercontent1">+91 9322985234</p></a>
                  </li>
                  {/* <li className="envelope"><p>rnb@rnb.com</p></li> */}
                </ul>
              </div>
            </div>
            <div>
              {isVisible && (
                <button onClick={handleClick} className="scroll-to-top-button">
                  <i className="fa fa-angle-up"></i>
                </button>
              )}
            </div>
            {/* <div id="go-to-top" style={{display: "block"}}>
	<a href="#stickynav"><i className="fa fa-angle-up"></i></a>
</div> */}
            {/* <div className="item6 text-left">
				<h3 className="font-18-pla-reg-2">NEWSLETTER</h3>
				<p>Sign up for latest updates and offer.</p>
				<form>
	        <div className="form-group text-left">
	          <input type="text" className="form-control" placeholder="Enter email address..."/>
	          <button type="submit" className="btn"><i className="fa fa-arrow-right"></i></button>
	        </div>
	        
	      </form>
				<div className="payment text-left">
					<a href="javascript:void(0)"><i className="fa fa-cc-mastercard" aria-hidden="true"></i></a>
					<a href="javascript:void(0)"><i className="fa fa-credit-card" aria-hidden="true"></i></a>
					<a href="javascript:void(0)"><i className="fa fa-cc-paypal" aria-hidden="true"></i></a>
				</div>
			</div> */}
          </div>
        </div>
        <div className="bottom-bar">
          <p>
            Copyright 2023 © <a className="footercontent1"  >Trend on Rent</a>
          </p>
        </div>
      </footer>
    </>
  );
}
