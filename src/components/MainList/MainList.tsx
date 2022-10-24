import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./MainList.scss";

const MainList = () => {
  return (
    <div className="main">
      <h1>Read our tips and tricks</h1>
      <p>
        We post a lot of free content around health fitness and general
        wellbeing. Make sure to check all of our posts down below.
      </p>
      <button>
        <ArrowForwardIosIcon /> view all posts
      </button>
    </div>
  );
};

export default MainList;
