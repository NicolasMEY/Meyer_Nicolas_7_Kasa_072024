import React from "react";
import logo from "../../assets&images/logo/logo_footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer-logo" />
      <p className="footer-text"> © 2020 kasa. All right reserved</p>
    </footer>
  );
};

export default Footer;
