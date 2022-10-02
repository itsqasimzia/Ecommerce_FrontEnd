import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AddOne, AddThree, AddTwo } from "../../../../assets";
import AddCard from "./AddCard";
import "./adds.css";
const Adds = () => {
  return (
    <div className="add-container relative flex gap-8 w-full h-full">
      <div className="section_one">
        <div>
          <p
            className="absolute "
            style={{
              left: "5%",
              top: "15%",
              fontFamily: "fantasy",
              fontSize: "2.8rem",
              width: "400px",
              whiteSpace: "pre-wrap",
            }}
          >
            Big Patterns Are Back in Fashion
          </p>
          <p
            style={{
              left: "5%",
              top: "45%",
              fontFamily: "monospace",
              fontSize: "1.3rem",
              width: "500px",
              whiteSpace: "pre-wrap",
              position: "absolute",
            }}
          >
            Keep your home organized, yet elegant with storage cabinets by H&N
          </p>
          <a
            style={{
              left: "5%",
              top: "65%",
              display: "flex",
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: "1.3rem",

              whiteSpace: "pre-wrap",
              position: "absolute",
            }}
          >
            <p>Shop now </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <img src={AddThree} style={{ height: "100%" }} />
      </div>
      <div className="section_two">
        <AddCard
          main={"The Lated Men's Trend This Season"}
          title={"Don't Miss The Oportunity"}
          image={AddOne}
        />
        <AddCard
          main={"Show Your Fashion With Summer Shoes"}
          title={"Don't Miss The Oportunity"}
          image={AddTwo}
        />
      </div>
    </div>
  );
};

export default Adds;
