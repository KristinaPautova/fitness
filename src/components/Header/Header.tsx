import React, { FC, useMemo, useState } from "react";
import women from "../../img/Frame.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <>
      <div className="bac">
        <div style={{ paddingTop: "30px" }} className="header">
          <div className="header__left">
            <h4>Sandra Lyons</h4>
            <img src={women} alt="girl" />
          </div>
          <div className="header__right">
            <span>Hi i'm Sandra Lyons</span>
            <h2>Your go to online fitness trainer and nutritionist.</h2>
            <p>
              After getting a bachelors in nutrition and fitness training I
              started working with people all around and changing their lives
              forever.
            </p>
            <Link to="/shop">
              <button>
                Go to shop
                <KeyboardArrowRightIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__down">
        <a href="#">happy clients</a>
        <a href="#">of experience</a>
        <a target="_blank" href="https://www.instagram.com/">
          following me
        </a>
      </div>
    </>
  );
};

export default Header;
