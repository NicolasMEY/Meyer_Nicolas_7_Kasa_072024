import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NotFoundError from "../components/notfound/NotFoundError";

const NotFound = () => {
  return (
    <div className="notFound">
      <Header />
      <main>
        <NotFoundError />
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
