import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddCard = ({ main, title, image }) => {
  return (
    <div>
      <div>
        <p
          className="absolute "
          style={{
            left: "5%",
            top: "10%",
            fontSize: "1rem",
            width: "400px",
            whiteSpace: "pre-wrap",
          }}
        >
          NEW SEASON
        </p>
        <p
          className="absolute "
          style={{
            left: "5%",
            top: "25%",
            fontFamily: "fantasy",
            fontSize: "1.8rem",
            width: "400px",
            whiteSpace: "pre-wrap",
          }}
        >
          {main}{" "}
        </p>
        <p
          style={{
            left: "5%",
            top: "55%",
            fontFamily: "monospace",
            fontSize: "1rem",

            width: "300px",
            whiteSpace: "pre-wrap",
            position: "absolute",
          }}
        >
          {title}
        </p>
        <a
          style={{
            left: "5%",
            top: "75%",
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: "1.3rem",

            width: "300px",
            whiteSpace: "pre-wrap",
            position: "absolute",
            margin: "0.6rem 0",
          }}
        >
          <p>Shop now </p>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <img src={image} />
    </div>
  );
};

export default AddCard;
