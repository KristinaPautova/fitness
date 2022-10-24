import React, { FC } from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import MainList from "../components/MainList/MainList";
import SimpleAccordion from "../components/Accordion/Accordion";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <MainList />
      <SimpleAccordion />
    </>
  );
};

export default HomePage;
