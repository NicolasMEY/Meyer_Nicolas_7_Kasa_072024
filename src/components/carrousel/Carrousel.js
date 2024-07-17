import React, { useState } from "react";

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Définition de l'index du premier slide à 0
  const length = slides.length; //Taille du tableau

  // fonction goToPrevious pour l'image précédente
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1); // Retour au premier quand on arrive au dernier slide
  };

  // Fonction goToNext pour l'image suivante
  const goToNext = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1); //Retour au dernier quand on arrive au premier slide
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
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
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === currentIndex ? "slider active" : "slider"}
          >
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
/* <div className="carousel">
      <div className="carousel__button carousel__button--left" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel__content">
        {items.map((item, index) => (
          <div
            className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="carousel__button carousel__button--right" onClick={goToNext}>
        &#10095;
      </div>
    </div> */
