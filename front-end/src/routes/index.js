// src/routes/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import pages (or components)
import HomePage from "../pages/home/HomePage";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const MainRoute = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />

          <div className="content-area">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainRoute;
