import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const NotFound = () => {
  return (
    <div className="notFound">
      <Header />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Footer />
    </div>
  );
};

export default NotFound;
