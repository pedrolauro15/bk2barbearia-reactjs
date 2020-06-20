import React from "react";
import { FaHome } from "react-icons/fa";
import { FiInstagram, FiLogIn, FiPhone } from "react-icons/fi";
import { GiBeard } from "react-icons/gi";
import { GoMegaphone } from "react-icons/go";
//https://react-icons.github.io/react-icons/
import assets from "../../assets";
import "./styles.css";

function HomeHeader() {
  function changeSelected(e) {
    if (e.target.classList.contains("selected")) {
      return;
    }
    const selectedItem = document.querySelector(".selected");
    selectedItem.classList.remove("selected");
    e.target.classList.add("selected");
  }

  return (
    <div id="home-header">
      <img alt="logo.png" src={assets.carinha_branca} />

      <div className="home-header-menu">
        <ul className="home-header-menu-ul">
          <li>
            <a
              href="#sobre"
              className="selected"
              onClick={(e) => changeSelected(e)}
            >
              <FaHome className="header-icon" />
              HOME
            </a>
          </li>
          <li>
            <a onClick={(e) => changeSelected(e)}>
              <GiBeard className="header-icon" /> BK2 BARBEARIA
            </a>
          </li>
          <li>
            <a href="#promo" onClick={(e) => changeSelected(e)}>
              <GoMegaphone className="header-icon" /> PROMOÇÕES
            </a>
          </li>
          <li>
            <a href="#instagram" onClick={(e) => changeSelected(e)}>
              <FiInstagram className="header-icon" /> INSTAGRAM
            </a>
          </li>
          <li>
            <a href="#contatos" onClick={(e) => changeSelected(e)}>
              <FiPhone className="header-icon" /> CONTATOS
            </a>
          </li>
          <li>
            <a onClick={(e) => changeSelected(e)}>
              <FiLogIn className="header-icon" /> LOGIN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;

//npm install
//http://trelloclonetest.herokuapp.com/
