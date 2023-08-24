import * as React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Backdrop from "@mui/material/Backdrop";
import img1 from "../assets/img/product-details/bg-1.jpg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import img from "../assets/img/1.jpg";
import { useLocation, useParams } from "react-router";
import { get } from "../helpers/api_helper";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import zIndex from "@mui/material/styles/zIndex";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #00000047",
  boxShadow: 24,
  p: 4,
};
export default function Product() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [image, setImage] = useState("");
  // to get the state start
  const location = useLocation();
  console.log(location);
  // to get the state end

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "40px",
  };

  // to get the id productId start
  const { productId } = useParams();
  console.log(productId);
  // to get the id productId end

  //   to get the data of product start
  const [productData, setProductData] = useState();
  const getProductData = async () => {
    try {
      const response = await get(
        `Product/viewByUniqueCode?uniqueCode=${productId}`
      );
      console.log(response);
      if (response && response.status == 200) {
        setProductData(response.data.data.result);
        setImage(response.data.data.result.frontImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // calender start
  const [calendarEvents, setCalendarEvents] = useState([]);

  const getCalendarEvents = async () => {
    const response = await get(
      `Order/getProductAvailabilityForCalendar?uniqueCode=${productId}`
    );
    console.log(response.data.data.list);
    const result = await response?.data?.data?.list;
    console.log(result);
    result.forEach((element) => {
      element.start = dataFormat(element.start);
    });

    function dataFormat(item) {
      const date = new Date(item);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    }

    setCalendarEvents(result);
  };
  const events = [{ title: "Meeting", start: new Date() }];

  function renderEventContent(eventInfo) {
    console.log(eventInfo);
    return (
      <div>
        {/* <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i> */}
      </div>
    );
  }

  useEffect(() => {
    getCalendarEvents();
  }, []);
  // calender end

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductData();
  }, []);
  //   to get the data of product end

  console.log(productData);
  return (
    <>
      <Helmet>
        <title>Product</title>
        <meta
          name="description"
          content="This is the product page description."
        />
        <meta property="og:title" content="product" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Helmet>
      <Header></Header>
      <div className="container text-left">
        <ol className="breadcrumb underline">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to={`/Category/${productData?.categoryId}`}>Category</Link>
          </li>
          <li>Product</li>
        </ol>
      </div>
      <div
        className="product-details productpage"

      >
        <div className="container">
          <div className="row">
            <div className="col-sm-5 rq-custom-5">
              <div className="thumbnail-slider-wrap">
                <ReactImageMagnify
                  className="magnifyimages"
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: image,
                      className: "small-image",
                    },
                    largeImage: {
                      src: image,
                      className: "Large-image",
                      width: 1200,
                      height: 2000,
                      style: { zIndex: "9" },
                    },
                  }}
                />
                <Slider
                  {...settingsThumbs}
                  asNavFor={nav1}
                  ref={(slider) => setSlider2(slider)}
                >
                  <div className="slick-slide">
                    <img
                      className="slick-slide-image"
                      src={productData?.frontImage}
                      onClick={() => {
                        setImage(productData?.frontImage);
                      }}
                    />
                  </div>
                  <div className="slick-slide">
                    <img
                      className="slick-slide-image"
                      src={productData?.backImage}
                      onClick={() => {
                        setImage(productData?.backImage);
                      }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-6 text-left">
              <div className="rq-inner product-details">
                <a className="font-30-for-reg-0 text-capitalize ">
                  <span className="product1-heading"> {productData?.name}</span>
                </a>
                <h3 className="font-18-for-reg-0 product-heading">
                  *Unique Code : <span>{productData?.uniqueCode}</span>
                </h3>
                <h3 className="font-18-for-reg-0 product-heading">
                  *Category : <span>{productData?.categoryName}</span>
                </h3>

                <h3 className="font-18-for-reg-0 product-heading">
                  *Rent starts at :{" "}
                  <span className="rupee1">
                    <i
                      className="fa fa-rupee"
                      style={{ fontSize: "17px", padding: "0 2px" }}
                    ></i>
                  </span>
                  <span className="rent_price">
                    {productData?.rentPriceFor3Days}
                  </span>
                </h3>
                <h3 className="font-18-for-reg-0 product-heading">
                  *Refundable Deposit :{" "}
                  <span className="rupee1">
                    <i
                      className="fa fa-rupee"
                      style={{ fontSize: "17px", padding: "0 2px" }}
                    ></i>
                  </span>
                  <span className="rent_price">
                    {productData?.depositAmount}
                  </span>
                </h3>
                <div className="d-flex" style={{ display: "flex" }}>
                  <h3 className="font-18-for-reg-0 text-left product-heading">
                    *Check Availability :
                  </h3>

                  <span
                    className="font-18-for-reg-1  text-right calender-icon"
                    style={{ paddingLeft: "4px" }}
                    onClick={handleOpen}
                  >
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>

                <div>
                  <h3 className="font-18-for-reg-0 text-left product-heading">
                    *Rent Price :
                  </h3>
                  <ul
                    className="rent_ul d-flex"
                    style={{
                      paddingTop: "0px",
                      paddingBottom: "5px",
                      paddingLeft: "0",
                    }}
                  >
                    <p className="rentrangebox">
                      3 Days <br />
                      <span className="pricerange">
                        {" "}
                        ₹{productData?.rentPriceFor3Days}{" "}
                      </span>
                    </p>

                    <p className="rentrangebox">
                      7 Days
                      <br />
                      <span className="pricerange">
                        {" "}
                        ₹{productData?.rentPriceFor7Days}
                      </span>
                    </p>

                    <p className="rentrangebox">
                      10 Days <br />
                      <span className="pricerange">
                        {" "}
                        ₹{productData?.rentPriceFor10Days}
                      </span>
                    </p>
                  </ul>
                </div>
                <div>
                  <h3 className="font-18-for-reg-0 text-left product-heading">
                    *Fabric :
                  </h3>
                  <ul className="rent_ul">
                    <li>
                      <p>{productData?.dressFabric} </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-18-for-reg-0 text-left product-heading">
                    {" "}
                    *Product details :
                  </h3>
                  <div
                    className="rent_p"
                    dangerouslySetInnerHTML={{
                      __html: String(productData?.description),
                    }}
                  ></div>
                </div>
                <div className="View-morebutton" style={{ marginTop: "42px" }}>
                  <a
                    href="https://play.google.com/store/apps/details?id=in.com.trendonrent.trendonrent"
                    target="_blank"
                    className="btn btn-download transparent text-white hoveridea"
                  >
                    Rent Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ textAlign: "end", cursor: "pointer" }}
            onClick={handleClose}
          >
            &#10006;
          </div>
          <div>
            <h5 className="calenderheading">{productData?.name}</h5>
          </div>
          <div id="productCalendar">
            <span className="available commanclass">Available</span>
            <span className="not-available commanclass">Not Available</span>
          </div>
          <FullCalendar
            plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
            slotDuration={"00:15:00"}
            handleWindowResize={true}
            themeSystem="bootstrap"
            headerToolbar={{
              left: "prev,next",
              center: "",
              right: "title",
            }}
            editable={true}
            droppable={true}
            selectable={true}
            weekends={true}
            // events={calendarEvents}
            eventContent={renderEventContent}
            dayCellDidMount={(args) => {
              const date = args.date;
              const cell = args.el;

              // Check if the date has events
              const hasEvents = calendarEvents.some(
                (event) =>
                  new Date(event.start).toDateString() === date.toDateString()
              );
              console.log(hasEvents);

              // Add a class to the date number element
              const dateNumber = cell.querySelector(".fc-daygrid-day-number");
              dateNumber.classList.add("custom-date-number");

              // Set the background color of non-event date numbers to green
              if (!hasEvents) {
                dateNumber.style.color = "green";
              } else {
                dateNumber.style.color = "red";
              }
            }}
          />
        </Box>
      </Modal>
      <Footer />
    </>
  );
}
