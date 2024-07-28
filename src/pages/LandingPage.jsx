import React from 'react'
import Aboutus from "../components/Aboutus";
import Hero from "../components/Hero";
import Legacy from "../components/Legacy";
import OurDoctors from "../components/OurDoctors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from '../components/Carousal2';
export const LandingPage = () => {
  return (
    <>
      <Hero />
      <OurDoctors />
      <Aboutus />
    </>
  )
}
