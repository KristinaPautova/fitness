import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProduct from "./components/Add/AddProduct";
import ShopPage from "./pages/ShopPage";
import FreePage from "./pages/FreePage";
import Edit from "./components/ProductCart/Edit";

const MainRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="edit/:id" element={<Edit />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/free" element={<FreePage />} />
    </Routes>
  );
};

export default MainRouts;
