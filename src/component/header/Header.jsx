import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function() {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function() {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src="/assets/images/logo/logo-light.png" alt="3F Latam" />;
    } else if (logo === "dark") {
      logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="3F Latam" />;
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-symbol-dark.png" alt="3F Latam" />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-symbol-light.png" alt="3F Latam" />
      );
    } else {
      logoUrl = (
        <img
          className="Logo_3F"
          src="/assets/images/logo/logo.png"
          alt="3F Latam"
        />
      );
    }

    return (
      <header
        name="home"
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link
                    activeClass="active"
                    to="inicio"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    delay={500}
                  >
                    Inicio{" "}
                  </Link>
                </li>
                <li className="has-droupdown">
                  <Link
                    activeClass="active"
                    to="Nosotros"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    delay={500}
                  >
                    Nosotros{" "}
                  </Link>
                </li>
                <li className="has-droupdown">
                  <Link activeClass="false">Productos </Link>
                  <ul className="submenu">
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="Espuma"
                      >
                        Espuma Ecológica
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="Espuma"
                      >
                        Absorbentes de Hidrocarburos
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="Espuma"
                      >
                        Neutralizantes de Gases Tóxicos
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="Espuma"
                      >
                        Espumas Convencionales
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="EquiposE"
                      >
                        Equipos de Espumas
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="fas"
                      >
                        Fire Attack System
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="ctd"
                      >
                        Sistema de Dosificación Automáticos
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="FIREMIKS"
                      >
                        FIREMIKS
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="rcy"
                      >
                        Textiles Técnicos
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="scorpe"
                      >
                        Herramientas de Rescate
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="pok"
                      >
                        Boquillas
                      </Link>
                    </li>
                    <li>
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        delay={500}
                        to="rl"
                      >
                        Maniquíes
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                delay={500}
                to="contacto"
                className="rn-btn"
              >
                Contacto
              </Link>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
