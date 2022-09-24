import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useContext, useState } from "react";
import { LayoutContext } from "../layout";
import "./login.css";
const ChooseUser = () => {
  const { data, dispatch } = useContext(LayoutContext);
  const [first, setFirst] = useState(true);
  return (
    <Fragment>
      {/* Black Overlay  */}
      <div
        className={`  ${
          first ? "" : "hidden"
        }fixed top-0 z-40 w-full h-screen bg-black opacity-50 cursor-pointer`}
      ></div>
      {/* Signup Login Component Render */}
      <section
        className={` fixed z-40 inset-0 my-8 md:my-20 flex items-start justify-center overflow-auto`}
      >
        <div
          className="flex justify-center relative space-y-4 bg-white p-6 md:px-2 md:py-6"
          style={{ width: "40%" }}
        >
          <div
            style={{
              color: "#303031",
              width: "100%",
            }}
            className="py-2 font-medium text-center"
          >
            <div className="flex justify-evenly m-2">
              <div
                onClick={() => {
                  setFirst(false);
                  dispatch({
                    type: "isUserOrAdmin",
                    payload: "admin",
                  });
                }}
                className="card"
              >
                <FontAwesomeIcon icon={faUser} size="2xl" />
                <span>Admin</span>
              </div>
              <div
                onClick={() => {
                  setFirst(false);
                  dispatch({
                    type: "isUserOrAdmin",
                    payload: "user",
                  });
                }}
                className="card"
              >
                <FontAwesomeIcon icon={faUserGroup} size="2xl" />
                <span>User</span>
              </div>
            </div>
          </div>
          {/*  Modal Close Button */}
          <div className="absolute top-0 right-0 mx-4">
            <svg
              onClick={(e) => {}}
              className="w-6 h-6 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ChooseUser;
