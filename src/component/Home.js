import * as React from "react";
import { useState, useEffect } from "react";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4s.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import days8 from "../assets/img/dayscount/3days.png";
import days9 from "../assets/img/dayscount/7days (1).png";
import days10 from "../assets/img/dayscount/10days.png";
import favimg1 from "../assets/img/community/1.jpg";
import favimg2 from "../assets/img/community/2.jpg";
import favimg3 from "../assets/img/community/3.jpg";
import favimg4 from "../assets/img/community/4.jpg";
import favimg5 from "../assets/img/community/5.jpg";
import img11 from "../assets/img/dayscount/aboutus.png";
import sliderimg2 from "../assets/img/banner/2.jpg";
import sliderimg3 from "../assets/img/banner/3.jpg";
import workimg1 from "../assets/img/work/1.png";
import workimg2 from "../assets/img/work/2.png";
import workimg3 from "../assets/img/work/3.png";
import apk from "../assets/img/dayscount/android-logo.png";
import Header from "./Header";
import Footer from "./Footer";
import sliderimg1 from "../assets/img/favourite/1.png";
import sliderimg4 from "../assets/img/favourite/2.png";
import sliderimg5 from "../assets/img/favourite/4.png";
import sliderimg6 from "../assets/img/favourite/5.png";
import testimg from "../assets/img/opinion/1.png";
import wishimg from "../assets/img/favourite/wish.png";
import compimg from "../assets/img/company/1.png";
import compimg1 from "../assets/img/company/2.png";
import compimg2 from "../assets/img/company/3.png";
import compimg6 from "../assets/img/company/6.png";
import saree from "../assets/img/favourite/saree.jpg";
import lehenga from "../assets/img/favourite/lehenga.jpg";
import salwar from "../assets/img/favourite/salwar.jpg";
import gown from "../assets/img/favourite/wedding.png";
import VideoPlayer from "react-background-video-player";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, History } from "swiper";
import Download from "../assets/img/dayscount/android-logo.png";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Loader from "./loader";
import { get } from "../helpers/api_helper";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/img/logo.png";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryRef = useRef(null);
  const homeRef = useRef(null);
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  //   to get categories start
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    const response = await get(
      `Product/CategoryList?pageNumber=1&pageSize=100`
    );
    console.log(response.data.data.result);
    if (response && response.status == 200) {
      setCategoryList(response.data.data.result);
    }
    // console.log(response.data.data.result);
  };
  //   to get categories end

  //   to get all products start
  const [productList, setProductList] = useState([]);
  const getProductList = async () => {
    const response = await get(
      `Product/List?FromDate=&Todate=&category=0&pageNumber=1&pageSize=8`
    );
    if (response && response.status == 200) {
      setProductList(response.data.data.result);
    }
  };
  //   to get all products end

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
      handlingTab();
    }, 2000);

    getCategoryList();
    getProductList();
  }, []);

  useEffect(() => {
    handlingTab();
  }, [searchParams]);

  useEffect(() => {
    if (!isLoading) return handlingTab();
  }, [isLoading]);

  function handlingTab() {
    if (searchParams.get("tab") == "about_us") {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (searchParams.get("tab") == "category") {
      categoryRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (searchParams.get("tab") == "our_product") {
      productRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (!searchParams.get("tab")) {
      homeRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  const [activeItem, setActiveItem] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [upScroll, setupScroll] = useState(true);
  const toggle = () => {
    setShowModal(!showModal);
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setShowModal(false);
  };

  useEffect(() => {
    setIsSticky(true);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the Home page description." />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        {/* Add more meta tags as needed */}
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
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
                      Download App <img src={Download} className="firstapp" />
                      {/* <img src={img8} className="secondapp" /> */}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <section
            className={`${isSticky ? "positionadjust" : "positionadjust"}`}
          >
            <div className="banner" id="home" ref={homeRef}>
              {/* <VideoPlayer
              className="video"
              src={
                "https://ik.imagekit.io/gg4c1br5f/4.mp4?updatedAt=1686648596928"
              }
              autoPlay={true}
              muted={true}
            /> */}
              <video autoPlay muted loop className=" absolute video-back">
                <source
                  src="https://ik.imagekit.io/gg4c1br5f/Final_Website_Video.webm?updatedAt=1688106542281"
                  type="video/webm"
                />
              </video>
            </div>
            <section className="covers">
              <div className="">
                <h3 className="font-30-for-reg-3">
                  Avoid Buying, Enjoy Renting.....
                </h3>
              </div>
            </section>
          </section>

          <section className="work-procedure base-padd">
            <div>
              <div className="container">
                <h2>How It Works</h2>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <div className="inner">
                        <img src={workimg1} alt="" className="img-responsive" />
                        <h3 className="font-30-for-reg-0">RENT</h3>
                      <p className="font-16-for-reg-0">
                        Elevate your style, embrace the Trend On Rent dresses
                        and unleash your inner fashionista.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="inner">
                       <img src={workimg2} alt="" className="img-responsive" />
                      <h3 className="font-30-for-reg-0"> FLAUNT</h3>
                      <p className="font-16-for-reg-0">
                        Dress up, feel empowered, and conquer the world in
                        style.
                        <br />
                        <p>
                          {" "}
                          Don't forget to tag us on social media for a lovely
                          surprise free gift.
                        </p>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="inner">
                        <img src={workimg3} alt="" className="img-responsive" />
                        <h3 className="font-30-for-reg-0">RETURN</h3>
                      <p className="font-16-for-reg-0">
                        Return the dress, keep the memories: Renting dresses,
                        the epitome of effortless elegance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="favorites base-padd" ref={categoryRef}>
            <div className="">
              <h2>Our Categories</h2>
              <div className="container">
                <div className="row">
                  {categoryList &&
                    categoryList.map((item, index) => {
                      {
                        console.log(item);
                      }
                      return (
                        <div key={index}>
                          {console.log("item.categoryId")}
                          {console.log(item.categoryId)}
                          <Link to={`/Category/${item.categoryId}`}>
                            <div className="col-md-3 col-xs-6 categorycol">
                              <div className="item">
                                <figure>
                                  <img
                                    src={item.fileUrl}
                                    alt=""
                                    className="fav-img"
                                  />
                                </figure>
                                <h3 className="font-20-for-reg-0 categoryoverflow">
                                  {item.name}
                                </h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </section>
          <section className="content base-padd" ref={productRef}>
            <div style={{ paddingBottom: "50px" }} id="Products">
              <h2>Our Products</h2>
              <div className="container">
                <div className="row">
                  {productList &&
                    productList.map((item, index) => {
                      return (
                        <>
                          <div
                            className="col-6 col-xs-6 col-md-3  "
                            style={{ padding: "0" }}
                          >
                            {console.log("item.categoryId")}
                            {console.log(item.categoryId)}
                            <Link
                              className="font-22-for-reg-2"
                              to={{
                                pathname: `/Product/${item.uniqueCode}`,
                              }}
                            >
                              <div
                                className="rq-rental-item-column  "
                                key={index}
                              >
                                <div className="rq-rental-item">
                                  <div className="img-wrapper">
                                    <img
                                      src={item.frontImage}
                                      alt=""
                                      className="product-img"
                                    />
                                    <div className="hover">
                                      {/* <Link to={`/Product/${item.uniqueCode}`} className="font-22-for-reg-2"> */}
                                    </div>
                                  </div>
                                  <div className="hoverelement">
                                    <h3 className="font-40-pla-reg-2 text-capitalize mt-0">
                                      <a href="javascript:void(0)" className="">
                                        {item.name}
                                      </a>
                                    </h3>
                                    <p className="font-14-for-reg-2 text-capitalize">
                                      {item.categoryName}
                                    </p>
                                    <h4 className="priceproduct">
                                      ₹ {item.rentPriceFor3Days}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className="View-morebutton p-0">
                  <Link
                    to="/Category/0"
                    className="btn btn-download transparent text-white hoveridea"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="join-us">
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 downloadbuttoncol">
                    <a
                      href="https://play.google.com/store/apps/details?id=in.com.trendonrent.trendonrent"
                      target="_blank"
                      className="btn transparent"
                    >
                      Download APP <img src={apk} />
                    </a>
                    <p className="betterexperience ">For Better Experience</p>
                  </div>
                  <div
                    className="col-sm-6 text-left"
                    style={{ margin: "12px 0" }}
                  >
                    <span className="font-30-pla-reg-2 text-left">
                      <a
                        href="javascript:void(0)"
                        className=" tagline text-white"
                      >
                        Avoid Buying, Enjoy Renting.....
                      </a>{" "}
                      <br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="newsletter base-padd" style={{ display: "none" }}>
            <div>
              <h2>SIGN UP FOR OUR NEWSLETTER</h2>
              <div className="container">
                <form className="form-inline">
                  <div className="form-group first">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="jane.doe@example.com"
                    />
                  </div>
                  <a href="javascript:void(0)" className="btn transparent">
                    Join
                  </a>
                  <a href="javascript:void(0)" className="btn notrans">
                    Login
                  </a>
                </form>
              </div>
            </div>
          </section>
          {/* <section className="opinion  base-padd" style={{ display: "none" }}>
            <div>
              <div className="container">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                  className="Swiper11 owl-opinion"
                >
                  <SwiperSlide>
                    <div className="item">
                      <img src={testimg} alt="" />
                      <p className="font-14-ope-reg-0">
                        Jonathen Nora, CEO-AURORA inc
                      </p>
                      <h3>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                        </a>
                      </h3>
                      <p className="edit">
                        I found my dress within 2 hours, as soon as I walked in,
                        I loved all the dresses that they had! I tried on only 2
                        dresses and I loved them both. The fittings were great
                        and I loved my dress a little more every time I tried it
                        on.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item">
                      <img src={testimg} alt="" />
                      <p className="font-14-ope-reg-0">
                        Jonathen Nora, CEO-AURORA inc
                      </p>
                      <h3>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                        </a>
                      </h3>
                      <p className="edit">
                        Thank you so much for all your help in finding me the
                        perfect dress for my birthday! I had complements from
                        everyone telling me how beautiful my dress was! I will
                        send you some pictures when they arrive.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section> */}
          <section className="sponsors base-padd" ref={aboutRef}>
            <div className="container wrapper">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="abouthead">About Us</h2>
                  <p className="text-left">
                    Trend on Rent offers premium fashion rental services at very
                    affordable prices in 3 packages. These 3 packages are 3
                    Days, 7 Days and 10 Days. Be it Wedding, Brunch parties, Pre
                    wedding shoots, Maternity shoots or Themed fashion shows -
                    rent your choice and end up saving a lot. Our charming
                    collections includes designer outfits in categories likes
                    Party wear gowns, Heavy Lehengas, Bridal Lehengas, Long Tail
                    gowns, Maternity dresses, Sarees, Artificial Jewellery etc.
                    We at Trend on Rent cover your smallest to largest fashion
                    demands without burning a hole through your pockets. Over
                    the years, our glamorous outfits have been rented out by the
                    best Indian models for various fashion events, hence
                    bringing more oomph to our brand. Just in 1 second the Trend
                    on Rent mobile Application will help you to avail all the
                    information of each and every dress available in the store
                    by simply scanning the QR of the dress. You will be
                    absolutely independent and will not need any assistance to
                    get the details of the dress like Rent Cost, Deposit Amount,
                    Available dates and many more. So, if you wish to look your
                    best on your next occasion and want to experience the suave
                    taste of our collection, then hop straight to Trend on Rent
                    store or Mobile App and we will do the rest!
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-left">
                    At TREND ON RENT, we believe that everyone deserves to look
                    and feel their best, regardless of their budget. That's why
                    we have carefully curated a collection of exquisite dresses
                    that are crafted with the utmost attention to detail and
                    quality. By managing the production process in-house till
                    some extent, we eliminate the need for intermediaries and
                    pass the cost savings directly to you.
                  </p>
                  <p className="text-left">
                    1.<b>Affordability:</b> We understand that premium fashion
                    can often come with a hefty price tag. However, our in-house
                    manufacturing allows us to offer rental prices that are
                    significantly lower than purchasing a brand-new dress.
                  </p>
                  <p className="text-left">
                    2. <b>Quality:</b> Our partial in-house manufacturing
                    ensures that we have control over the production process,
                    from sourcing the finest materials to executing precise
                    craftsmanship. We take pride in delivering dresses that meet
                    the highest standards of quality, fit, and comfort.
                  </p>
                  <p className="text-left">
                    3. <b>Exclusive Designs:</b> Our talented team of outsourced
                    and in-house designers works tirelessly to create unique and
                    stunning dress designs that cater to various occasions,
                    styles, and sizes. With our manufacturing capabilities, we
                    have the flexibility to experiment with trends and bring you
                    an extensive selection of dresses you won't find elsewhere.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={img11} className="about-1" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-left">
                    4. <b>Convenience:</b> Renting a dress from us is a
                    hassle-free experience. Our user-friendly website allows you
                    to browse our collection, select your preferred dress, and
                    our easy to use Mobile application help you to book the
                    dresses for the desired rental period. We have 3 rental
                    durations packages to accommodate your needs, whether it's
                    for a special event, a photo-shoot, marriage, engagement
                    ceremony or just a weekend getaway. We are specialised in
                    Dresses like Wedding Lehengas, Festival Celebration
                    Lehengas, Sarees, Gowns, Long Tail gowns, Pre Wedding gowns,
                    Maternity Gowns, Party wear gowns.
                  </p>
                  <p className="text-left">
                    Download the mobile and start your renting journey.
                  </p>

                  <p className="text-left">
                    {" "}
                    Don’t forget to ask for the TREND ON RENT loyalty points!
                  </p>
                  <p className="text-left">
                    {" "}
                    Go ahead and ask us to add the dresses of your preference if
                    they are not in our collection and we will make sure they
                    get added!
                  </p>
                  <p className="text-left">
                    <b> Avoid Buying, Enjoy Renting.</b>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="community base-padd" style={{ display: "none" }}>
            <div>
              <h2>Our Community</h2>
              <div className="container-fluid wrapper">
                <div className="row">
                  <div className="col-md-5 mb-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="element">
                          <picture>
                            <source srcSet={favimg1} media="(max-width:100%)" />
                            <img src={favimg1} alt="1" />
                          </picture>
                          <div className="caption">
                            <a
                              href="javascript:void(0)"
                              className="font-14-ope-reg-1"
                            >
                              <span>"</span>Lorem Ipsum is simply dummy text of
                              the printing and type setting industry.
                              <span>"</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="element">
                          <picture>
                            <source srcSet={favimg2} media="(max-width:100%)" />
                            <img src={favimg2} alt="" />
                          </picture>

                          <div className="caption">
                            <a
                              href="javascript:void(0)"
                              className="font-14-ope-reg-1"
                            >
                              <span>"</span>Lorem Ipsum is simply dummy text of
                              the printing and type setting industry.
                              <span>"</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-30">
                    <div className="element">
                      <picture>
                        <source srcSet={favimg3} media="(max-width:100%)" />
                        <img src={favimg3} alt="" />
                      </picture>
                      <div className="caption">
                        <a
                          href="javascript:void(0)"
                          className="font-14-ope-reg-1"
                        >
                          <span>"</span>Lorem Ipsum is simply dummy text of the
                          printing and type setting imply dummy text of the
                          industry.<span>"</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="element">
                          <picture>
                            <source srcSet={favimg4} media="(max-width:100%)" />
                            <img src={favimg4} alt="" />
                          </picture>
                          <div className="caption">
                            <a
                              href="javascript:void(0)"
                              className="font-14-ope-reg-1"
                            >
                              <span>"</span>Lorem Ipsum is simply dummy text of
                              the printing.<span>"</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="element">
                          <picture>
                            <source srcSet={favimg5} media="(max-width:100%)" />
                            <img src={favimg5} alt="" />
                          </picture>
                          <div className="caption">
                            <a
                              href="javascript:void(0)"
                              className="font-14-ope-reg-1"
                            >
                              <span>"</span>Lorem Ipsum is simply dummy text of
                              the printing.<span>"</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="upperfooter count-up base-padd">
            <div style={{ paddingBottom: "60px" }}>
              <h2 className="">Our Packages</h2>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                    <img src={days8} alt="" className="packageimage" />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                    <img src={days9} alt="" className="packageimage" />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                    <img src={days10} alt="" className="packageimage" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
