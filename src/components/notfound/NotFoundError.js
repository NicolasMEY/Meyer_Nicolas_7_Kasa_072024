import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      {/* pas de création de div dans le DOM ici */}
      <div className="errorContainer">
        <p className="errorContainer__404">404</p>
        <p className="errorContainer__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="errorContainer__link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
};

export default Error;
