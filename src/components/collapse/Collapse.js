import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   Utilise le hook useState pour gérer l'état d'ouverture ou de fermeture du menu. Par défaut, le menu est fermé (isOpen est false)

  // Gère l'affichage du contenu des menus/collapses
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown__container">
      <div className="dropdown__title">
        <h2>{title}</h2>
        <p onClick={toggleCollapse}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      {/* Si le collapse est à true >>> affichage de la description (content) */}
      <div className="dropdown__content">{isOpen && <p>{content}</p>}</div>
    </div>
  );
};

export default Collapse;
