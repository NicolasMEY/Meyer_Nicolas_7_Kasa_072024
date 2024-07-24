import React from "react";
import { Link } from "react-router-dom";
import Card from "../cards/Cards";
import logements from "../../datas/logement.json";

const Gallery = () => {
  return (
    <div className="home_gallery">
      {/* Pour chaque élément dans le tableau logements, une itération est effectuée pour créer une card. */}
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            {/* l'attribut key est necessaire pour que React puisse identifier chaque élément de manière unique */}
            <Link to={`/logement/${logement.id}`}>
              {/* Chaque article contient un lien qui mène à une route spécifique au logement en utilisant son id. */}
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
