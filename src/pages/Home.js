import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Gallery from "../components/gallery/Gallery";
import imgHomeBanner from "../assets&images/banner/home-banner.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
