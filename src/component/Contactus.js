import * as React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useFormik } from "formik";
import * as Yup from "yup";
import { post } from "../helpers/api_helper";
import { css } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./loader";
export default function Contactus() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
  `;
  
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      phone: "",
      note: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Enter Atleast 2 letters")
        .required("Please Enter Your name")
        .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/, {
          message: "Only digits are not allowed",
        }),
      email: Yup.string()
        .email("Invalid email")
        .required("Please Enter Your Email"),
      phone: Yup.string()
        .min(10, "Enter 10 digits")
        .required("Please Enter Your mobile Number"),

      note: Yup.string().required("Please Enter Note").min(50,"Please enter atleast 50 words "),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoader(true);
        let data = {
          fullName: values.name,
          email: values.email,
          mobileNo: String(values.phone),
          message: values.note,
        };

        console.log(data);
        const responseData = await post(`Customer/contactUs`, data);
        setLoader(false);

        console.log(responseData);

        if (responseData && responseData.status == 200) {
          toast.success(responseData.message);
          navigate("/Contactus");
        }
      } catch (error) {
        setLoader(false);
        console.log("error");
        console.log(error);
      }
    },
  });

  const handleNote = (event) => {
    const newValue = event.target.value;
    const trimmedValue = newValue.replace(/\s+/g, ' '); 
    validation.setFieldValue("note",trimmedValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(validation.errors);

  return (
    <>
      <Header></Header>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section
        className="contact-us base-padd"
        style={{ paddingBottom: "70px" }}
      >
        <div className="container">
          <h1 className="contactheading">Contact Us</h1>
          <div className="row">
            <div className="col-md-8">
              <form
                className="needs-validation"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="Contactgrid">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter Full Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter full name"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.name}
                    />
                    {validation.touched.name && validation.errors.name ? (
                      <span className="error">{validation.errors.name}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.email}
                    />
                    {validation.touched.email && validation.errors.email ? (
                      <span className="error">{validation.errors.email}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mob Number</label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="enter number"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.phone}
                    />
                    {validation.touched.phone && validation.errors.phone ? (
                      <span className="error">{validation.errors.phone}</span>
                    ) : null}
                  </div>
                  <div
                    className="form-group"
                    style={{ justifyContent: "start" }}
                  >
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="form-control"
                      name="note"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={handleNote}
                      onBlur={validation.handleBlur}
                      value={validation.values.note}
                    ></textarea>
                    {validation.touched.note && validation.errors.note ? (
                      <span className="error">{validation.errors.note}</span>
                    ) : null}
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <button type="submit" className="btn-download">
                    {loader ? (
                      <BeatLoader css={override} size={15} color={"#d9534f"} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 addressinfo">
              <ul className="list-unstyled contact ">
                <li className="map-marker" style={{ textAlign: "initial" }}>
                  <p>
                    Shop No-16, Ground Floor, Wing-I,
                    <br />
                    Thakkar House 2418,East Street,
                    <br />
                    1000 Oaks Lane, Opposite to World of Toys,
                    <br />
                    Camp, Pune, 411001.
                  </p>{" "}
                </li>
                <li className="map-location" style={{ textAlign: "initial" }}>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/GLFPt25K4y85QwbK7"
                  >
                    <p>View Our Location</p>
                  </a>
                </li>
                <li className="phone" style={{ textAlign: "initial" }}>
                  <a target="_blank" href="tel:8554855433">
                    <p> +91 8554855433</p>
                  </a>
                </li>
                <li className="mobile" style={{ textAlign: "initial" }}>
                  <a target="_blank" href="tel:9322985234">
                    <p>+91 9322985234</p>
                  </a>
                </li>
                {/* <li className="envelope"><p>rnb@rnb.com</p></li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
