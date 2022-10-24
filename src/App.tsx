import React from "react";
import "./App.scss";
import MainRouts from "./MainRouts";
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <MainRouts />
      <Footer />
    </>
  );
}

export default App;
