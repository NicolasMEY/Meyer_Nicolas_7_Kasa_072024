import React, { useState } from "react";

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialisation de currentIndex à 0 (état qui garde la trace de l'index de l'image actuellement affichée)
  const length = slides.length; //Longueur du tableau

  // fonction goToPrevious pour maj de "currentIndex" pour afficher l'image précédente
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1); // Si l'index actuel est à 0 on va à la dernière page, sinon on décrémente l'index de 1
  };

  // Fonction goToNext pour maj currentIndex pour afficher l'image suivante
  const goToNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1); // Si l'index actuel est la dernière image on retourne à la première image, sinon on incrémente l'index de 1
  };

  // Vérifie que slides est un tableau non vide sinon le composant ne rend rien return null
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // Rendu du composant
  return (
    <section className="slide-carrousel">
      {/* Si le nb d'images est > à 1 on affiche les flèches */}
      {length > 1 && (
        <p className="left-arrow" onClick={goToPrevious}>
          <i className="fa-solid fa-chevron-left"></i>
        </p>
      )}
      {length > 1 && (
        <p className="right-arrow" onClick={goToNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      )}
      {/* Images du carrousel */}
      {slides.map((image, index) => {
        return (
          // Pour chaque image, crée un div avec une clé unique (key={index}) et une classe slider.
          <div
            key={index}
            className={index === currentIndex ? "slider active" : "slider"}
            // On ajoute un classe "slider" pour chaque div créee
            // Si index est égal à currentIndex, ajout de la classe "active" pour indiquer que cette image est actuellement affichée
          >
            {/* Affichag de l'image et du numéro de la diapositive, si l'image correspond à currentIndex */}
            {index === currentIndex && (
              <img src={image} alt="images-location" className="slide-images" />
            )}
            {index === currentIndex && length > 1 && (
              <span className="slide-number">
                {currentIndex + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
