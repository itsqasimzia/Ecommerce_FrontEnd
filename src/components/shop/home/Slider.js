import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faBackward,
  faBagShopping,
  faBathtub,
  faCircleArrowLeft,
  faCircleArrowRight,
  faClock,
  faFemale,
  faFootball,
  faMale,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CATEGORIES = [
    {
      title: "Bags & Shoes",
      icon: faBagShopping,
    },
    {
      title: "Mens Fashion",
      icon: faMale,
    },
    {
      title: "Women Fashion",
      icon: faFemale,
    },
    {
      title: "Accessories",
      icon: faAnchor,
    },
    {
      title: "Sports",
      icon: faFootball,
    },
    {
      title: "Bathroom",
      icon: faBathtub,
    },
    {
      title: "Interior",
      icon: faClock,
    },
  ];

  return (
    <Fragment>
      <div className="flex justify-between mt-4 space-x-4 mx-8">
        <div className="text-black border" style={{ width: "350px" }}>
          <div class="area"></div>
          <nav class="main-menu w-full" style={{ width: "100%" }}>
            <ul>
              {CATEGORIES?.length &&
                CATEGORIES.map((category) => {
                  return (
                    <li class="has-subnav">
                      <a>
                        <i className="fa">
                          <FontAwesomeIcon icon={category?.icon} size="1x" />
                        </i>
                        <span class="nav-text">{category?.title}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
        {/* <div className="w-20 bg-white"></div> */}
        <div className="relative w-full ">
          {data.sliderImages.length > 0 ? (
            <img
              className="w-full min-h-full"
              src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
              alt="sliderImage"
              style={{
                maxHeight: "650px",
                minHeight: "650px",
                objectFit: "cover",
              }}
            />
          ) : (
            ""
          )}
          <div>
            {data?.sliderImages?.length > 0 ? (
              <>
                <div
                  onClick={(e) =>
                    prevSlide(data.sliderImages.length, slide, setSlide)
                  }
                  className={`z-10 absolute h-full top-0 left-0 bottom-0 flex justify-end items-center box-border flex justify-center w-16 h-16 rounded text-orange-600 cursor-pointer hover:text-white`}
                  style={{
                    transition: "ease-in-out",
                    animationDuration: ".5s",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    size={"3x"}
                    className="shadow rounded-full"
                  />
                </div>
                <div
                  onClick={(e) =>
                    nextSlide(data.sliderImages.length, slide, setSlide)
                  }
                  className={`z-10 absolute top-0 right-0 bottom-0 flex justify-end h-full items-center box-border flex justify-center w-16 h-16 text-orange-600 cursor-pointer hover:text-white`}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    size={"3x"}
                    className="shadow rounded-full"
                  />
                </div>

                <div
                  className="absolute inset-0   hidden md:block h-full flex flex-col items-center  justify-center"
                  style={{ width: "55%" }}
                >
                  <div
                    href="#shop"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "50%",
                    }}
                    className="cursor-pointer  lg:text-3xl mt-24 ml-8  lg:text-lg text-black  px-8 py-4 rounded"
                  >
                    <span> Minimal Basket For Home Accessories </span>
                    <div className="cursor-pointer box-border hover:underline text-gray-700 text-2xl text-white  py-2 rounded">
                      Shop Now
                    </div>
                  </div>
                </div>
                {/* {data?.sliderImages?.length &&
                  data?.sliderImages.map((dots) => {
                    return (
                      <div className="w-5 h-5 rounded-full p-1 bg-green">x</div>
                    );
                  })} */}
              </>
            ) : null}
          </div>
        </div>
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
