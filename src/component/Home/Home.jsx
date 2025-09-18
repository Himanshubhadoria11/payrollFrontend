import React, { useContext } from "react";
import Carousel from "./Carousel";

import About from "./About";
import Testimonial from "./Testimonial";

import { Navigate } from "react-router-dom";
import { Context } from "../../main";



function Home() {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Carousel />
     
      <About />
     
      <Testimonial />
    </>
  );
}

export default Home;
