import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../helpers/routes";
import AboutUs from "../views/aboutUs";
import BookTravel from "../views/book-travel";
import Contact from "../views/contact";
import Description from "../views/description";
import Faq from "../views/faq";
import Forum from "../views/forum";
import Gallery from "../views/gallery";
import SelectedGallery from "../views/gallery/SelectedGallery";
import Home from "../views/home";
import Job from "../views/job";
import SelectedJob from "../views/job/SelectedJob";
import TourDescData from "../views/tour-desc";
import Travel from "../views/travel";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.gallery} element={<Gallery />} />
        <Route path={"/gallery/:id"} element={<SelectedGallery />} />
        <Route path={routes.faq} element={<Faq />} />
        <Route path={routes.about} element={<Description />} />
        <Route path={routes.travel} element={<Travel />} />
        <Route path={routes.forum} element={<Forum />} />
        <Route path={routes.bookTravel} element={<BookTravel />} />
        <Route path={routes.job} element={<Job />} />
        <Route path={"job/:title"} element={<SelectedJob />} />
        <Route path={routes.desc} element={<TourDescData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
