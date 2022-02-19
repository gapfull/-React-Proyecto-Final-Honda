import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="./">
            <img
              src="https://www.honda.es/etc/designs/honda/theme_inclusive/img/logos/honda_the_power_of_dreams.png"
              alt="Honda España S.A."
            />
          </a>
        </div>
        <nav>
          <ul class="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/modelos">Modelos</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
