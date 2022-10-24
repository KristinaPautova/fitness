import React, { FC } from "react";
import Slider from "../components/Slider/Slider";
import Content from "../components/Content/Content";

const FreePage: FC = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Slider />
      <Content />
    </div>
  );
};

export default FreePage;
