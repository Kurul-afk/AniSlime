import React from "react";
import "./style.css";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <li>
        <a href="https://www.instagram.com/">
          <FiInstagram size={30} />
        </a>
      </li>
      <div
        className="footer-copyright text-center py-3 footer-text"
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid white",
        }}
      >
        Copyright © 2023 Anislime
      </div>
    </footer>
  );
};

export default Footer;
