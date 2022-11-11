import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus";
import Homepage from "./Homepage";
import Joinus from "./Joinus";
import Products from "./Products";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
