import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Slider, Typography } from "@material-ui/core";
import { get } from "../helpers/api_helper";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { css } from '@emotion/react';
export default function Category() {
  // to get the id categoryId start
  const { categoryId } = useParams();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  // for pagination start
  const gfg = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 25,
      label: "25",
    },
    {
      value: 50,
      label: "50",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  const [value, setValue] = React.useState([2, 10]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const [totalCount, setTotalCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [listCount, setListCount] = useState(0);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
    window.scrollTo(0, 0);
  };

  // for pagination end

  // to get the category List start
  const [selectedOption, setSelectedOption] = useState(Number(categoryId));
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    const response = await get(
      `Product/CategoryList?pageNumber=1&pageSize=100`
    );
    if (response && response.status == 200) {
      setCategoryList(response.data.data.result);
    }
  };
  // to get the category List end

  // to get the product of the specific category start
  const [productList, setProductList] = React.useState([]);
  const [productCount, setProductCount] = React.useState([]);
  const getProductList = async () => {
    try {
      setIsLoading(true)
      const response = await get(
        `Product/List?FromDate=&Todate=&category=${categoryId ?categoryId :0
        }&pageNumber=${page}&pageSize=${rowsPerPage}`
      );
      setIsLoading(false)
      console.log(response);
      if (response && response.status == 200) {
        setProductCount(response.data.count);
        setProductList(response.data.data.result);
        setTotalCount(response.data.totalPagesCount);
        setListCount(response.data.count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCategoryList();
    getProductList();
    setSelectedOption(Number(categoryId))
  }, [categoryId, page]);
  // to get the product of the specific category end

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleParams(item) {
    navigate(`/Category/${item.categoryId}`)
  }

  return (
    <>
      <Header></Header>

      <div className="container text-left">
        <ol className="breadcrumb underline">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Category</li>
        </ol>
      </div>
      <div className="filter-list productpage">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="filters">
                <div
                  className="filter-header"
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <span className="font-22-for-reg-2 text-left">Filters</span>
                  {/* <a href="javascript:void(0)" className="font-20-for-reg-0 text-right">
                    Clear all
                  </a> */}
                </div>

                <div className="pattern dropdown text-left">
                  <div style={{ margin: "20px 0" }} >
                    <span className="font-20-for-reg-0 choosecategory">Choose Category</span>
                  </div>

                  {categoryList &&
                    categoryList.map((item, index) => {
                      return (
                        <div key={index} style={{ position: "relative" }}>
                          <span className="rq-checkbox">
                            <label>
                              <label className="checkbox-container">
                                <input
                                  id="patt-one"
                                  // className={selectedOption === item.categoryId ? "afterchoose" : ""}
                                  type="radio"
                                  name="myRadioButton1"
                                  value={item.categoryId}
                                  checked={selectedOption === item.categoryId}
                                  onChange={() => {
                                    handleParams(item)
                                    setSelectedOption(item.categoryId);
                                    setPage(1)
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                              <span className={selectedOption === item.categoryId ? "afterchoose" : "radio_input categorychoose"}>{item.name}</span>
                            </label>
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="col-sm-9">
              <div className="product-display">
                <h4
                  className="font-25-for-reg-0 text-left"
                  style={{ borderBottom: "1px solid #E8E8E8" }}
                >
                  Dresses <span>({productCount})</span>
                </h4>

                {
                  isLoading ?
                    <p className="product_stock " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <BeatLoader css={override} size={15} color={'#d9534f'} />
                    </p>
                    :
                    <div className="row">
                      {productList.length < 1 ? (
                        <p className="product_stock">
                          <b>No Data Available</b>
                        </p>
                      ) : (
                        productList &&
                        productList.map((item, index) => {
                          return (
                            <div
                              className="col-12 col-sm-12 col-md-4 col-lg-4 col-xs-6"
                              key={index}
                            >
                              <div className="product-list perticularcard">
                                <figure>
                                  <Link to={`/Product/${item.uniqueCode}`}>
                                    <img
                                      className="img-responsive imagescategories"
                                      src={item.frontImage}
                                      alt="grid1"
                                    />
                                  </Link>
                                </figure>
                                <div className="description ">
                                  <Link
                                    to={`/Product/${item.uniqueCode}`}
                                    className="font-18-for-reg-0 text-capitalize"
                                  >
                                    {item.name}
                                  </Link>
                                  <h5>

                                    <span className="rupee">₹</span>
                                    {item.rentPriceFor3Days}


                                  </h5>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                }


              </div>
              <div className="row mrg-top">
                <div className="col-xs-4 text-left">
                  {listCount > 0
                    ? `${(page - 1) * rowsPerPage + 1} - ${page * rowsPerPage > listCount
                      ? listCount
                      : page * rowsPerPage
                    } of ${listCount}`
                    : ""}
                  {/* 1-9 of {listCount} */}
                </div>
                <div className="col-xs-8 text-right">
                  {productList.length > 0 ? <nav aria-label="Page navigation ">
                    <ul className="pagination">
                      <Pagination
                        count={totalCount}
                        page={page}
                        onChange={handleChange}
                        color="primary"
                        shape="rounded"
                      />
                    </ul>
                  </nav> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
