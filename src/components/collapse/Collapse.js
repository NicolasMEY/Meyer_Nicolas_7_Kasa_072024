import React, { useState } from "react";

// 2 props ici : le titre et le contenu
const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   Utilise le hook useState pour gérer l'état d'ouverture ou de fermeture du menu. Par défaut, le menu est fermé (isOpen est false)

  // Gère l'affichage du contenu des menus/collapses
  // toggleCollapse est une fonction qui va me permettre d'inverse l'état actuel de isOpen chaque fois qu'elle est appelée. Si isOpen est true est elle change en false et vice et versa
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
      {/* Rendu conditionnel : Si le collapse est à true >>> affichage de la description (content) */}
      <div className="dropdown__content">
        {isOpen && <div className="dropdown__content__open">{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;
