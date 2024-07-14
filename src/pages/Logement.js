import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Navigate, useParams } from "react-router-dom";
import data from "../datas/logement.json";

const FicheLogement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/NotFound" />;
  }
  return (
    <div className="logement">
      <Header />
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />{" "}
      {/* Image du logement */}
      <p>{logement.description}</p> {/* Description du logement */}
      <Footer />
    </div>
  );
};

export default FicheLogement;
