// src/routes/index.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

// pages
import AboutMePage from "../pages/about-me/AboutMePage";
import BlogDetailPage from "../pages/blog/BlogDetailPage";
import BlogListPage from "../pages/blog/BlogListPage";
import ContactPage from "../pages/contact/ContactPage";
import ProjectDetailPage from "../pages/project/ProjectDetailPage";
import ProjectListPage from "../pages/project/ProjectListPage";
import HomePage from "../pages/home/HomePage";

const MainRoute = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />

          <div className="content-area">
            <Routes>
              <Route exact path="/" element={<HomePage />} />

              <Route exact path="/blog" element={<BlogListPage />} />
              <Route exact path="/blog/:slug" element={<BlogDetailPage />} />

              <Route exact path="/about-me" element={<AboutMePage />} />

              <Route exact path="/projects" element={<ProjectListPage />} />
              <Route exact path="/projects/:slug" element={<ProjectDetailPage />} />

              <Route exact path="/contact" element={<ContactPage />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainRoute;
