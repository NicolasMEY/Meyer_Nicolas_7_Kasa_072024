import React, { useState } from "react";

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Définition de l'index du premier slide à 0
  const length = slides.length; //Taille du tableau

  // fonction goToPrevious pour maj currentIndex pour afficher l'image précédente
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1); // Si l'image affichée est la dernière lenght -1 >>> Retourne au premier slide sinon on passe à l'image suivante +1
  };

  // Fonction goToNext pour maj currentIndex pour afficher l'image suivante
  const goToNext = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1); // Si l'image affichée est la première 0 >>> Retourne au dernier slide -1 sinon on passe à l'image précédente -1
  };

  // Vérifie que slides est un tableau non vide sinon le composant ne rend rien return null
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // Rendu du composant
  return (
    <section className="slide-carrousel">
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
