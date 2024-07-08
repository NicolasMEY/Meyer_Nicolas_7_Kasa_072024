import logo from "../../assets&images/logo/logo_header.png";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header-figure">
        <img className="logo-kasa" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
