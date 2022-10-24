import React from "react";
import "./Content.scss";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="first-tx">
        <h1>Fitness</h1>
        <span>Mission to lead the future of metaverse</span>
        <div className="content__top">
          <div className="video-binance">
            <iframe
              style={{ borderRadius: "30px" }}
              width="568"
              height="320"
              src="https://www.youtube.com/embed/ml6cT4AZdqI"
              title="30-Minute HIIT Cardio Workout with Warm Up - No Equipment at Home | SELF"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="second-tx">
            <div>
              <h5>Sport</h5>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda, eos.
              </span>
            </div>
            <div>
              <h5>Shop</h5>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                qui?
              </span>
            </div>
            <div>
              <h5>HIIT</h5>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, praesentium.
              </span>
            </div>
            <div>
              <button className="first-butt">
                <Link
                  to="/shop"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "black",
                  }}
                >
                  Go to Shop
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
