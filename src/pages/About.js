import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import imgBannerAbout from "../assets&images/banner/about.png";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />
      </main>
      <Footer />
    </div>
  );
};

export default About;
