import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Navigate, useParams } from "react-router-dom";
import data from "../datas/logement.json";
import Tag from "../components/logement/Tag";
import Collapse from "../components/collapse/Collapse";
import Rate from "../components/logement/Rate";
import Host from "../components/logement/Host";
import Carrousel from "../components/carrousel/Carrousel";

const FicheLogement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  // Partie Tags
  const tagsLogement = logement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  // Partie équipements
  const equipements = logement?.equipments.map((equipement, i) => {
    return (
      <ul key={i}>
        <li>{equipement}</li>
      </ul>
    );
  });

  if (!logement) {
    return <Navigate to="/NotFound" />;
  }

  return (
    <div className="logement">
      <Header />
      <main>
        <Carrousel slides={logement?.pictures} />
        {/* <img src={logement.cover} alt={logement.title} />{" "}
        Image du logement >>> à supprimer pour etre remplacé par le carrousel */}
        <section className="logementCard">
          <div className="description-info">
            <div className="description-info__titletags">
              <div className="description-info__titletags__title">
                <span className="logement-title">{logement?.title}</span>
                <span className="logement-localisation">
                  {logement?.location}
                </span>
              </div>
              {/* Partie Tags */}
              <div className="description-info__titletags__tags">
                {tagsLogement}
                {/* {tagsLogement.map((tag, index) => (
                  <div key={index}>{tag}</div>
                ))} */}
              </div>

              <div className="description-info__proprio">
                {/* Partie Host */}
                <div className="description-info__proprio__name">
                  <Host
                    name={logement?.host.name}
                    picture={logement?.host.picture}
                  />
                </div>
                {/* Partie Ratting */}
                <div className="description-info__proprio__rate">
                  <Rate score={logement.rating} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partie Collapse */}
        <section className="collapse-description-logement">
          <div className="description-content">
            <Collapse title="Description" content={logement?.description} />
          </div>

          <div className="equipements-content">
            <Collapse title="Équipements" content={equipements} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
